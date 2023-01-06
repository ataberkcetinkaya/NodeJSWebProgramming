const express = require('express');
const app = express(); //wil use the express functions w the app variable
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');


app.use(bodyParser.urlencoded({extended: false}));

//routes
app.use('/admin', adminRoutes); //will use the adminRoutes
app.use(userRoutes); //will use the userRoutes

app.listen(3000, () => {
    console.log('Listening on port 3000');
});