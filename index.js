const express = require('express');
const cors =require('cors')
const mongoose=require('mongoose');
const app = express();
const bodyParser = require('body-parser');
require("./config/dbconn");
const router=require('./routes/Index')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(router)

 
app.use(cors({
   origin: "http://localhost:3000"
}));
// require('dotenv').dbconn()
// const connectDB =require('./config/dbconn')
// const controllers=require('./controllers/controllers');
// const auth =require('./routes/Index');
// const router = require('./routes/Index');
// const connectDB= async()=>{
//     try {
//         await mongoose.connect("mongodb+srv://anubhavkhare:anubhav%40123@cluster0.y1uhuh8.mongodb.net/demo");
//         console.log("MONGO CONNECTED");
//     } catch (error) {
//         console.log(error)
        
//     }

// }
// app.use(express.json())
// app.use("/api",auth)

// app.use((req, res, next) => {
//    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//    next();
//  });
 app.listen(3001,()=>{
    // connectDB();
    console.log(`server in runing  at port `)
 })