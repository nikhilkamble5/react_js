import express from "express";
import colors from "colors";

import connectDb from "./db.js";
import userRoute from './Routes/userRoute.js'
import dotenv from 'dotenv'
import morgan from 'morgan';
connectDb()
const app = express();
app.use(express.json());
//it passes the json string object into json object

app.use('/api/user',userRoute)
app.get("/", (req, res) => {
  res.send("Welcome to API");
});

app.listen(4321, () => {
  console.log("Server is running on port 4321".bgRed.white);
});


const Port = process.env.Port || 4321;

app.listen(Port,()=>{
  console.log(`Server is Running on Port ${Port}`.bgRed.white);
})