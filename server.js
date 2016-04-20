// use necessary modules included in nodejs
var http = require("http");
var url = require("url");

// create function to create server so it can be used for asynchronus callbacks.
function start(port, route, handle) {
  var serverport = port
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " recieved")
    route(handle, pathname, response, request);
    }

  http.createServer(onRequest).listen(serverport);
  console.log("Server has started. Listening on 127.0.0.1:" + serverport)
}

exports.start = start;
