var http = require('http');
var port = 3500;
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('UP\n');
}).listen(port);
console.log('Server running on port ' + port);
