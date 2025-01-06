// import express from 'express';
// import mongoose from 'mongoose';
// import bodyParser from 'body-parser';
// import dotenv from 'dotenv';
// const app=express();
// app.use(bodyParser.json())//middleware for passing the json request to body
// dotenv.config();
// const PORT =process.env.PORT || 8000;
// const MONGOURL=process.env.MONGO_URL;
// mongoose.connect(MONGOURL).then(()=>{
//   console.log("Database connected");
//   app.listen(PORT,()=>{
//     console.log(`Server is running on port ${PORT}`)
//   });
// })
// .catch((err)=>{
       
// });



import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import router from "./routes/userRoute.js";
const app=express();

//bodypraser is a middleware for parsing the json  data

app.use(bodyParser.json())
dotenv.config();

const PORT =process.env.PORT || 8000;
const MONGO_URL=process.env.MONGO_URL;

app.use('/api/user',router)
app.use('api/user/create',router)

mongoose
         .connect(MONGO_URL)
         .then(()=>{
            console.log("db connected");
            app.listen(PORT,()=>{
                console.log(`Server is running on port ${PORT}`)
            })
         })

