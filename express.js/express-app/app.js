const express = require('express');
const app = express(); //wil use the express functions w the app variable

app.use((req, res, next) => { //middleware function
    console.log('First middleware');
    next(); //allows the request to continue to the next middleware in line
});

app.use((req, res, next) => { //middleware function
    console.log('Second middleware');
    res.send('<h1>Hello from Express!</h1>'); //sends a response to the browser
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});