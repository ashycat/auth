'use strict';

var app = require('express')();
var kraken = require('kraken-js');
// var app;
var options = require('./lib/configure')(app);


/*
 * Create and configure application. Also exports application instance for use by tests.
 * See https://github.com/krakenjs/kraken-js#options for additional configuration options.
 */
// options = {
//     onconfig: function (config, next) {
//         /*
//          * Add any additional config setup or overrides here. `config` is an initialized
//          * `confit` (https://github.com/krakenjs/confit/) configuration object.
//          */
//         next(null, config);
//     }
// };

// app = module.exports = express();
app.use(kraken(options));
app.on('start', function () {
    console.log('Application ready to serve requests.');
    console.log('Environment: %s', app.kraken.get('env:env'));
});






var http = require('http');


var server;

/*
 * Create and start HTTP server.
 */




server = http.createServer(app);
server.listen(process.env.PORT || 8000);
server.on('listening', function () {
    console.log('Server listening on http://localhost:%d', this.address().port);
});
