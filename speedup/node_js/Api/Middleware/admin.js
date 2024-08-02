import User from '../Model/userModel.js'

export const isAdmin = async(req,res,next)=>{
    try{

        const user = await  User.find(req.params.id) ;

        if(user.role !==1) {
            return res.status(401).send({
                success:false ,
                message:"Unauthorized Access"
            }) 

        }
        
        else {
            next()
        }  }catch(error){
          res.status(500).send({
              success:false,
              message:"Error in Admin Controller"
          })
      }
  }