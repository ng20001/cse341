// const http = require('http'); // require: built in js global module
const express = require('express');

const app = express();

/*
// use(): add middleware function, accepts an array of req handlers
// whenever there is an incoming req, function will be executed. 
// Takes three argu: reqest, response, next
// next: a function that will be passed to "(req, res, next) => {}" function
app.use((req, res, next) => {
    console.log('In the middleware!');
    // next(): Allow the request to continue to the next use()/middleware
    // always call next() or send back response (send())
    next();
});
*/

// another use(), catching the previous next()
app.use('/add-product', (req, res, next) => { // '/': any request that starts with a slash
    console.log('In another the middleware!');
    // send(): expressjs utility, send a response
    res.send('<h1>The add product</h1>'); // send(): exiting function since no next() is called
});

// another use(), catching the previous next()
app.use('/', (req, res, next) => { // '/': any request that starts with a slash
    console.log('In another the middleware!');
    // send(): expressjs utility, send a response
    res.send('<h1>Hello from Express!</h1>'); // Since text is sent, header Content-Type will be set to text/html automatically by expressjs
});

// Incoming request: An event loop that keeps running until we stop it with process.ext
// const server = http.createServer(app); // app: a valid request handler

// listen for incoming request
// 3000: port to listen on (localhost:3000)
// server.listen(3000);

// Sets up server instance, listen to port
app.listen(3000);