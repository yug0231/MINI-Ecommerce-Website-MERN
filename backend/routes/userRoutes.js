const express=require('express');
const userRoutes=express.Router();
const User = require('../schema/user')


userRoutes.post("/signup",async(req,res)=>{
    const{email, password} = req.body;
    // console.log(name, password);
    const check = await User.findOne({"email": `${email}`});
    if(!check){
        try{
            const user = await User.create(req.body);
            res.send(user);
        }catch(err){
            res.send("Unexpeccted Error Occured"+ err);
        }
    }
    else{
        res.send("User Already Exists")
    }
    
})
userRoutes.post("/login",async(req,res)=>{
    const user = await User.findOne(req.body);
    if(user){
        res.send(user);
    }else{
        res.send("Invalid Credentials")
    }
})


module.exports = userRoutes;