const http = require('http'); // require: built in js global module

const routes = require('./routes');

// create a new instance of Server
// Incoming request: An event loop that keeps running until we stop it with process.ext
const server = http.createServer(routes.myHandler); // for incoming requests, execute routes

// listen for incoming request
// 3000: port to listen on (localhost:3000)
server.listen(3000);