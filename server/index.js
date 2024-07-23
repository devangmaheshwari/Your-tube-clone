import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import userroutes from "./Routes/User.js"
import videoroutes from "./Routes/Video.js";
import commentroutes from "./Routes/Comment.js"
import path from 'path'

dotenv.config()
const app = express();

app.use(cors());
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use('/uploads',express.static(path.join('uploads')))

app.get('/',(req,res)=>{
    res.send("Your-tube is working")
})

app.use(bodyParser.json())
app.use('/user',userroutes)
app.use('/video',videoroutes)
app.use('/comment',commentroutes)

const port=process.env.port || 5050;

app.listen(port,()=>{
    console.log(`Server running on port: ${port}`)
})

const DB_URL=process.env.DB_URL
mongoose.connect(DB_URL).then(()=>{
    console.log("MongoDB Database connected")
}).catch((error)=>{
    console.log(error)
})