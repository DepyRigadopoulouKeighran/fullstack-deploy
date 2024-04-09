import { Router } from "express";
import Service from "../model/Service.js";
import User from "../model/User.js";

export const serviceRouter = Router()

serviceRouter.post("/",async (req,res,next)=>{



try {
    console.log(req.body);

 const newService =    await    Service.create(req.body) 

const user = await User.findOne( {_id:   req.body.userId   }  )
user.services.push(newService)
await user.save()
res.send(newService)
} catch (error) {
    next({status:400,message:error.message})
}

})



.get("/",async(req,res,next)=>{
try {
    
const allServices = await Service.find({}).populate("userId")
res.send(allServices)
} catch (error) {
    next({status:500,message:error.message})
}


})