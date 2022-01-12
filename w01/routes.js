const fs = require('fs'); // fs: file system

// a requestHandler
const requestHandler = (req, res) => {
    // set user input url to const url
    const url = req.url;
    const method = req.method;

    if (url === '/') { // when user visit localhost:3000/
        res.write('<html><head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body></html>');
        return res.end();
    }
    if (url === '/message' && method === 'POST') { // when user visit localhost:3000/message AND method is POST
        // on(): listen to certain event
        // 'data': event to listen on, in this case incoming data
        // (chunk): function to be excuted, chunk: the data chunk that is received
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk); // something looks like this: <Buffer 6d 65 73 73 61 67 65 3d 31 32 33>
            body.push(chunk); // push the chunk into body array
        });
        return req.on('end', () => { // 'end': when node.js done parsing the incoming requests data
            const parsedBody = Buffer.concat(body).toString(); // concat: adds up 'body' chunks, toString(): convert to strings
            console.log(parsedBody); // parsed data: 'message=123'
            const message = parsedBody.split('=')[1]; // take any string on the right side of the '=' sign
            // fs.writeFileSync('message.txt', message); // writeFileSync: blocking(doesn't go next step until a file is written)
            fs.writeFile('message.txt', message, err => { // writeFile: non-blocking(continue code execution even when the file hasn't finished writing yet)
                // console.log(err);
                res.statusCode = 302; // 302: redirection
                res.setHeader('Location', '/'); // set header location to / (php: header('location: /'))
                return res.end();
            });
        });
    }

    // default case
    res.setHeader('Content-Type', 'text/html'); // setting content-type header
    // write some data to respond
    res.write('<html><head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my Node.js server!</h1></body></html>');
    res.end();
};

// module.exports = requestHandler;

module.exports = {
    myHandler: requestHandler,
    someText: 'Something else'
};