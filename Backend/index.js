const express = require('express');
const PORT = process.env.PORT || 5000;
const app = express();


app.listen(PORT,(err)=>{
    if(err) throw err;
    console.log(`Server is running on port ${PORT}`)
    });