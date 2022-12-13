const http = require('http');

// const server = http.createServer(); //creating a server

// server.on('connection', function() { //listening to connection event
//     console.log('New connection...');
// });

const server = http.createServer(function(req, res) {
    //console.log(req);
    //console.log(req.url, req.method);
    if(req.url === '/') {
        res.write('Hello World');
        res.end();
    }
    if(req.url === '/api/products') {
        res.write("Products List");
        res.end();
    }
});

server.listen(3000); //listening to port 3000 (localhost:3000 on browser)
console.log('Listening on port 3000...');