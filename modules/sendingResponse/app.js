const http = require('http');
const fs = require('fs'); //FileSystem

const server = http.createServer((req, res) => {
    /*
    //res.setHeader('Content-Type', 'text/plain'); //setting responses
    //res.setHeader('Content-Type', 'application/json');
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;
    res.statusMessage = 'OK';

    //res.write('Hello World!'); //sending a response
    //res.write(JSON.stringify({ product: 'Galaxy S22 Ultra', price: 'R$ 10.000,00' }));
    res.write('<html><head><body><h1 style="color:red">Hey there!</h1></body></head></html>');
    res.end();
    */
    fs.readFile('./index.html', (err, data) => {
        if (err) {
            res.statusCode = 404;
            res.statusMessage = 'Not Found';
            res.setHeader('Content-Type', 'text/plain');
            res.end('404 - File not found!');
        } else {
            res.statusCode = 200;
            res.statusMessage = 'OK';
            res.setHeader('Content-Type', 'text/html');
            res.end(data);
        }
    });
});

server.listen(3000);

console.log('Server is running on port 3000...');
