const express = require('express');
const router = express.Router();


router.get('/add-product', (req, res, next) => { 
    res.send(`
        <html>
            <head><title>Add Product</title></head>
            <body>
                <form action="/admin/add-product" method="POST">
                    <input type="text" name="productName">
                    <button type="submit">Add Product</button>
            </body>
        </html>
        `);
});

router.post('/add-product', (req, res, next) => { //same links as above but this one is a post request
    //database logic can be here
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;