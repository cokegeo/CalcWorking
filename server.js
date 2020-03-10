const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader")
const packageDef = protoLoader.loadSync("messages.proto", {});
const grpcObject = grpc.loadPackageDefinition(packageDef);
const protoPackage = grpcObject.protoPackage;

const server = new grpc.Server();
server.bind("0.0.0.0:40000",
 grpc.ServerCredentials.createInsecure());

server.addService(protoPackage.TheService.service,
    {
        "Add": Add,
        //"Multiply" : Multiply
    });



function Add (call, callback) {
    //const result = call.request.a + call.request.b
    //console.log(parseInt(result))
    callback(null, {result: call.request.a + call.request.b});
}

//function Multiply(call, callback) {
    
//}
server.start();