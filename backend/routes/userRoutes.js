const express=require('express');
const userRoutes=express.Router();
const User = require('../schema/user')

//SIGNUP
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
//LOGIN
userRoutes.post("/login",async(req,res)=>{
    const user = await User.findOne(req.body);
    if(user){
        res.send(user);
    }else{
        res.send("Invalid Credentials")
    }
})
//Get User Details
userRoutes.post("/getuser",async(req,res)=>{
    const user = await User.findOne(req.body);
    if(user){
        res.send(user);
    }else{
        res.send("No User found")
    }
})
//ADD TO CART
userRoutes.patch("/addtocart",async(req,res)=>{
    const {userId,productId,quantity} = req.body;
    let toUpdate = [productId,quantity];
    try{
        let user = await User.updateOne(
            {_id:userId},
            {$push :{
                    cart : toUpdate
            }})
    res.send(user);
    }catch(err){
        res.send(err);
    }
})




module.exports = userRoutes;