const http = require('http');
const hostname = '127.0.0.1';

let processPayment = require('./Samples/Payments/CoreServices/processPayment');
const port = 3000;



const server = http.createServer((req, res) => {
    res.statusCode = 200;
    if(req.method == "POST") {
        processPayment.processPayment({amount: '223.12'}, function () {
            res.end("ok");
        }, false);
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});



