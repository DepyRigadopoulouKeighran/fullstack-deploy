import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Register = () => {
const [username,setUsername]=useState('')
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const [location,setLocation]=useState('')
const [message,setMessage]= useState('')
const navigate = useNavigate()

const submitHandler =async (e)=>{
e.preventDefault()

try {
    const user = {username,email,password,location}
const config ={
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify(user)
}
const request = await fetch( "http://localhost:9999/auth/register"  ,config)
const result =await request.json()
if(!result.error){
      setMessage("congrats, succesfully logged in.u will be redirected soon.")

      setTimeout(() => {
         navigate("/login")
      },5000 );
  
}
} catch (error) {
    console.log(error.message)
}


}

  return (
    <form onSubmit={ submitHandler } style={{display:"flex",flexDirection:"column",gap:"10px"}} >
        {message && <small style={{color:"green"}} > {   message  }   </small> }

      <input onChange={(e)=> setUsername(e.target.value) }  type="text" name="usernname" id="" placeholder="username" />
      <input onChange={(e)=> setEmail(e.target.value) } type="text" name="email" id="" placeholder="email" />
      <input onChange={(e)=> setPassword(e.target.value) } type="text" name="password" id="" placeholder="password" />
      <input onChange={(e)=> setLocation(e.target.value) } type="text" name="location" id="" placeholder="location" />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
