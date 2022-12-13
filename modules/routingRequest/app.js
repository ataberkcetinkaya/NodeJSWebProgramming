const http = require('http');
const routes = require('./routes');

const server = http.createServer(routes); //directly pass the routeHandler function (the function includes req and res)


server.listen(3000);

console.log('Server is running on port 3000');