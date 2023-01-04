const express = require('express');
const app = express(); //wil use the express functions w the app variable
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended: false})); //will give us access to the body property on the request object

app.use('/add-product', (req, res, next) => {
    res.send(`
        <html>
            <head><title>Add Product</title></head>
            <body>
                <form action="/product" method="POST">
                    <input type="text" name="productName">
                    <button type="submit">Add Product</button>
            </body>
        </html>
        `);
});

app.post('/product', (req, res, next) => { //app.post will only listen to post requests
    //database logic can be here
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req, res, next) => { //middleware function => '/' with the path
    res.send('<h1>Hello from Express!</h1>'); //sends a response to the browser
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});