var http = require('http');
var reqIndex = 0;

var server = http.createServer(function (req, res) {
    reqIndex++;
    req.setTimeout(reqIndex, function() { });
});

server.listen(4242, function() {
    console.log('Server listening on port 4242...');
});
