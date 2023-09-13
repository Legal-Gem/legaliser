const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const PORT = process.env.PORT || 5000;
const app = express();
const userRoutes = require('./User/Routes/userRoutes');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
const {userSignup}=require('./User/Controllers/userController');


app.use(express.json());

app.post('/users/signup', userSignup);
// This is the default route


app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Server is running on port ${PORT}`)
});