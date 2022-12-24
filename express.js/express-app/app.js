const express = require('express');
const app = express(); //wil use the express functions w the app variable

app.get('/', (req, res) => {
    res.send('Hello User');
});

app.get('/api/products', (req, res) => {
    res.send(["product1", "product2", "product3"]);
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});