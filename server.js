// use http module included in nodejs
var http = require("http");

// create function to create server so it can be used for asynchronus callbacks.
function start(port) {
  var serverport = port
  function onRequest(request, response) {
    console.log("Request Recieved")
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
  }

  http.createServer(onRequest).listen(serverport);

  console.log("Server has started. Listening on 127.0.0.1:" + serverport)
}

exports.start = start;
