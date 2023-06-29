const express = require('express');
const mongoose=require('mongoose');
const app = express();
require("./config/dbconn")
// require('dotenv').dbconn()
const controllers=require('./controllers/controllers');
const auth =require('./routes/Index')
const connectDB= async()=>{
    try {
        await mongoose.connect("mongodb+srv://anubhavkhare:anubhav%40123@cluster0.y1uhuh8.mongodb.net/demo");
        console.log("MONGO CONNECTED");
    } catch (error) {
        console.log(error)
        
    }

}
app.use(express.json())
app.use("/api",auth)
 app.listen(3001,()=>{
    connectDB();
    console.log(`server in runing  at port `)
 })