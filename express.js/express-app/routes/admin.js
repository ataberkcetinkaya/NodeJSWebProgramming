const express = require('express');
const router = express.Router();

const path = require('path');

router.get('/add-product', (req, res, next) => { 
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html')); //this will send the html file to the browser
});

router.post('/add-product', (req, res, next) => { //same links as above but this one is a post request
    //database logic can be here
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;