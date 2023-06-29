// require('dotenv').dbconn;
const mongoose=require("mongoose");
const connectDB= async()=>{
    try {
        await mongoose.connect("mongodb+srv://anubhavkhare:anubhav%40123@cluster0.y1uhuh8.mongodb.net/demo");
        console.log("MONGO CONNECTED");
    } catch (error) {
        console.log(error)
        
    }

}
// module.exports=connect(process.env.mongoURI)