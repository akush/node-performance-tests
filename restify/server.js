// var cluster = require('cluster');
// var os = require('os');
// if (cluster.isMaster) {
//     for (var i = 0; i < os.cpus().length; i++)
//         cluster.fork();
//
//     return cluster.on('death', function(worker) {
//         console.error('worker %d died', worker.pid);
//     });
// }

var restify = require('restify');
var server = restify.createServer();
server.use(restify.queryParser());
server.get('/', function handle(req, res, next) {
    res.send('Hello world');
});

server.listen(3000, function() {
    console.log('listening: %s', server.url);
});
