var http = require('http');
var server = http.createServer(function (req, res) {
    res.end();
})

server.listen(4242, function() {
    console.log('Server listening on port 4242...');
});
