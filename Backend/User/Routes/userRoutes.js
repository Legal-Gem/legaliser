const express = require('express');
const router=express.Router();
const {userSignupValidator}=require('../middleware/userSignupValidator');
const {userSignup}=require('../Controllers/userController');
router.get('/',(req,res)=>{
    try{
        res.send("Welcome to the User Route");
    }
    catch(err){
        console.log(err);
    }
});

// User Sign-up Route
// router.post('users/signup',userSignup);


// router.get('pro')


module.exports=router;
