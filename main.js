var http = require("http");

http.createServer(function (request, response) {
response.writeHead(200, {'Content-Type': 'text/plain'});
response.end('Hello Yammer');

}).listen(8081);
console.log('Server running at http://local:8081/');


