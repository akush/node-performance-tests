// var cluster = require('cluster');
// var os = require('os');
// if (cluster.isMaster) {
//     for (var i = 0; i < os.cpus().length; i++)
//         cluster.fork();
//
//     return cluster.on('death', function(worker) {
//         console.error('worker %s died', worker.pid);
//     });
// }

var http = require('http');
var url = require('url');
var server = http.createServer(function (req, res) {
    var data = 'Hello world';
    res.writeHead(200, {
        'content-length': data.length
    });
    res.end(data);
});

server.listen(3000);
