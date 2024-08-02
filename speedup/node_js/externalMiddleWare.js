

module.exports= reqFilter = (req,res,next)=>{
  if(!req.query.age){
      res.send("<h1>Please Enter the Age</h1>")
  } 
  else if(req.query.age <= 18){
      res.send("<h1>Access Denied</h1>")
  }
  else {
      next()
  }
}
