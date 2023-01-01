const express = require('express');
const app = express(); //wil use the express functions w the app variable

app.use('/products', (req, res, next) => { //it's on top because it's specific location
    res.send('<h1>Product Page</h1>');
});

app.use('/', (req, res, next) => { //middleware function => '/' with the path
    res.send('<h1>Hello from Express!</h1>'); //sends a response to the browser
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});