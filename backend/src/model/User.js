import { model ,Schema } from "mongoose"
import bcrypt from "bcrypt"
const {hash,  compare } = bcrypt
const required = true
const unique = true

const userSchema = new Schema({

    username:{type:String, unique,required},
    email:{type:String,unique,required},
    password:{type:String ,required},
    location:{type:String,required},
    profilePicture:String,
    services:[{type:Schema.Types.ObjectId ,ref:'Service'  } ] 


})


userSchema.statics.register = async (data)=>{

const hashed =await  hash(data.password,10)

data.password = hashed
 return User.create(data)

}


userSchema.statics.login =async (data)=>{

///data {username,password}
const user =    await User.findOne({username:  data.username })  
if(!user){return false}

//// check if password matches

const match =await  compare(data.password,user.password)
if(!match){return false}


return user



}



userSchema.methods.toJSON= function(){
const user =this.toObject()
delete user.password
delete user.__v
return user

}



const User = model("User", userSchema )
export default User