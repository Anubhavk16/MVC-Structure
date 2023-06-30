const express = require('express');
const app=express();
// const bodyParser = require('body-parser');
const user=require('../models/user')


async function signup(registerdata){
    // const{name,email,password,contact}=req.body
  
   
    try{
        const check=await user.findOne({email:registerdata.email})
//   console.log(check," check ");
        if(check?.length> 0){
           return "exist";
        }
        else{
            const data=user({
                name:registerdata.name,
                email:registerdata.email,
                password:registerdata.password,
                contact:registerdata.contact
              })
            // await User.save([data])
        
      const result= await data.save();
      
      return "User added";
        }
  
    }
    catch(error){
        console.log("error-->>>",error)
        return ({
            success : false,
            error
        })
    }
  
  }
  module.exports={signup};