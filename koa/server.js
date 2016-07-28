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

var koa = require('koa');
var app = koa();

app.use(function *() {
    this.body = 'Hello world';
});

var server = app.listen(3000, function() {
    console.log('Koa is listening to http://localhost:3000');
});
