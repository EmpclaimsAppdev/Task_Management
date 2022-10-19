const asyncHandler = require('express-async-handler')
const User = require('../model/userModel')
const jwt = require('jsonwebtoken')
require("dotenv").config()

const authUser = asyncHandler(async(req,res)=>{
    console.log(req.body)
    const {email,password} = req.body
    console.log(req.body)

    const user = await User.findOne({email});
    console.log(user)
    console.log(user.role)

    if(user && (await User.findOne({password}))){
      const accessToken = jwt.sign(
        {"email":user.email},
        process.env.ACCESS_TOKEN_SECRET,
        {expiresIn:'15s'}
      );
      const refreshToken = jwt.sign(
        {"email":user.email},
        process.env.REFRESH_TOKEN_SECRET,
        {expiresIn:'1d'}
      );
      res.cookie('jwt',refreshToken,{httpOnly:true,maxAge:24*60*60*1000})
      res.send(JSON.stringify({"email":user.email,"roles":user.role}))
    }
    else{
        res.status(400);
        throw new Error("Invalid Email or Password")
    }
})

module.exports = {authUser,signupUser}