const User = require("../models/user")
const express = require('express');
const app=express();
const bodyParser = require('body-parser');


const register =async(req,res)=>{
    const{name,email,password,contact}=req.body
  
    const data={
      name:name,
        email:email,
        password:password,
       
        contact:contact
    }
  
    try{
        const check=await User.findOne({email:email})
  
        if(check){
            res.json("exist")
        }
        else{
           
            // await User.save([data])
             const newuser = new User({
        name,
        email,
        password,
        contact
      });
      await newuser.save();
      res.json("notexist")
        }
  
    }
    catch(e){
        res.json("fail")
    }
  
  }
  module.exports=register;