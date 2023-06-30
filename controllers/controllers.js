const User = require("../models/user")
const services=require("../services/services")

const register =async(req,res)=>{
    // console.log(req.body);
    try{
         if(!req.body) return "No data found";
         const create=await services.signup(req.body);
         res.status(200).json(create);
        
      
    }
    catch(e){
        res.status(500).json({"message":"failed"})
    }
  
  }
  module.exports=register;