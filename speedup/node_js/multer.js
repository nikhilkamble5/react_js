// const multer=require('multer')

// const express=require('express')

// const app =express();

// const storange=multer.diskStorage({
//   destination:function(req,file,cb){
//     cb(null,'upload')
//     //if there is no error return null and send iage 
//   },

  

//     filename:function(req,file,cb){
//       cb(null,file.originalname+"_"+Date.now()+'.png')
//       //creating a file name with date object to make each and every file name uniq
//     }
  
// })

// const upload=multer({storage:storange}).single('file')

// app.post('/upload',upload,(req,res)=>{

//   res.send("photo upload successfully ")

// })



// app.listen(4321,()=>{
//   console.log("Server is runnig on port 4321");
// })


const multer = require('multer') 
const express = require('express')
 const app = express();

 const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'upload') 
        //if their is no error return null and send image to upload folder
    } ,
    
        filename:function(req,file,cb){
            cb(null,file.originalname+"_"+Date.now()+'.png')
            //creating a filename with date object to make each and every filename unique
        } 
 }) 

 const upload = multer({storage:storage}).single('file') 

 app.post('/upload',upload ,(req,res)=>{
    res.send("Photo Uploaded Successfully")
 }) 

 app.listen(4321,()=>{
    console.log("Server is Running On Port 4321");
 })