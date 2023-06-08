//imports
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
//initializations
const app = express();
dotenv.config();
const port = process.env.PORT
//db connection
mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log('database connected and ready')
})
//middlewares
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
//routes

//listening
app.listen(port,()=>{
    console.log(`app started on port ${port}`)
});
