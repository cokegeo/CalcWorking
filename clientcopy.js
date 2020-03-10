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

var a = 1;
var b = 3;

prompt.get([a, b], function (err, resultado) {
  if (err) { return onErr(err); }
  console.log('Command-line input received:');
  console.log('  Number 1 is: ' + parseInt(a));
  console.log('  Number 2 is: ' + parseInt(b));


  client.Add({
    "a": a,
    "b": b
  }, function(err, response) {
  
    console.log("The addition of the two numbers is " + response.result)
  
  });



});

