const express = require('express');
const app = express(); //wil use the express functions w the app variable
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');


app.use(bodyParser.urlencoded({extended: false}));

//routes
app.use('/admin', adminRoutes); //will use the adminRoutes and /admin is the starting point => localhost:3000/admin/add-product
app.use(userRoutes); //will use the userRoutes

app.use((req, res, next) => { //if any of routes above are not used, this will be used
    res.status(404).send('<h1>Page not found</h1>');
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});