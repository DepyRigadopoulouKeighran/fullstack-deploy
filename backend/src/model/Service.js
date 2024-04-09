import {model,Schema} from "mongoose"


const required= true

const serviceSchema = new Schema({
userId:{type:Schema.Types.ObjectId  , required,ref:"User" },
title:{type:String,required},
description:{type:String,required},
category:{type:String,required  }  ,
price:{type:Number,required},
location:String

})


const Service = model("Service",serviceSchema)

export default Service