const express = require('express');
const app=express();
const router = express.Router()
const register =require("../controllers/controllers")
// app.use(controllers);
router.post("/user",register);

module.exports =router;