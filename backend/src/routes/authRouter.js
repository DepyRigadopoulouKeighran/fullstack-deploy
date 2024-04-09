import { Router } from "express";
import validateUser from "../middlewares/validateUser.js";
import User from "../model/User.js";
import jwt from "jsonwebtoken"
export const authRouter = Router();

authRouter
  .post("/register", validateUser, async (req, res, next) => {
    try {
      ///validate all req.body inputs
   ///hash password
      const newUser = await User.register(req.body);
   
      res.send(newUser);
      //save into data base
    } catch (error) {
      next({ status: 400, message: error.message });
    }
  })


.post("/login",async(req,res,next)=>{

try {
    
 /// check first username exist if not error

    /// check passsword if it matches with hashed one in data base if not error

   const user = await User.login(req.body)
   if(!user){

       next({status:401,message:"Bad Credential"})
       return
   }
  
   /// sign token 
   const token = jwt.sign({userID:user._id},process.env.SECRET ,{expiresIn:"1h"}  )

   /// send user an token to frontend
   res.send({user,token})

} catch (error) {
    next({status:500,message:error.message})
}


})








  .delete("/users", async (req, res, next) => {
    await User.deleteMany();
    res.send({ message: "all user deleted!" });
  })



