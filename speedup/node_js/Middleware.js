// const express =require('express')
// const app=express();

// const router=express.Router()
// //to handle the middleware and routes

// //middleware (req,res,next)

// const reqFilter=(req,res,next)=>{
//   if(!res.query.age){
//     res.send("<h1>please Enter the Age</h1>")
//   }
//   else if(req,query.age <=18){
//     res.send("<h1>Acces denied </h1>")
//   }
//   else{
//     next()
//   }
// }

// router.use(reqFilter)

// app.get('/',(req,res)=>{
//   res.send('<h1>Welcome to Home Route !</h1>')
// })

// app.listen(4321,()=>{
//   console.log("server is runggig");
// })

const express = require('express')

const app = express();
const reqFilter=require('./externalMiddleWare')
const router = express.Router();
//To handel the middleware and routes 

// Middleware (req,res,next)

// const reqFilter = (req,res,next)=>{
//     if(!req.query.age){
//         res.send("<h1>Please Enter the Age</h1>")
//     } 
//     else if(req.query.age <= 18){
//         res.send("<h1>Access Denied</h1>")
//     }
//     else {
//         next()
//     }
// }

router.use(reqFilter)

// 3 ways to get the data from client
// 1. req.query -> url ?
// 2. req.params -> url : 
// 3. req.body -> forms  


app.get('/',(req,res)=>{
    res.send("<h1>Welcome to Home Route</h1>")
})

app.get('/aboutus',reqFilter,(req,res)=>{
    res.send("<h1>Welcome to About Us Route</h1>")
})

app.get('/contact',reqFilter,(req,res)=>{
    res.send("<h1>Welcome to Contact Us Route</h1>")
})
app.listen(4321,()=>{
    console.log("Server is Running on Port 4321");
})