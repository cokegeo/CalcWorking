const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader")
const packageDef = protoLoader.loadSync("messages.proto", {});
const grpcObject = grpc.loadPackageDefinition(packageDef);
const protoPackage = grpcObject.protoPackage;
const prompt = require('prompt');
prompt.start();


//process.argv.forEach(function (val, index, array) {
//  console.log(index + ': ' + val);
//});

const client = new protoPackage.TheService("localhost:40000", 
grpc.credentials.createInsecure());

c = 0;
d = 0;

prompt.get([c, d], function (err, resultado) {
  if (err) { return onErr(err); }
  console.log('  Number 1 is: ' + c);
  console.log('  Number 2 is: ' + d);

  var a = c;
  var b = d;

  client.Add({
    "a": parseInt(a),
    "b": parseInt(b)
  }, function(err, response) {
  
    console.log("The addition of the two numbers is " + response.result)
  
  });


});

