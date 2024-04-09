import React, { useEffect } from 'react'
import { useUser } from '../contexts/UserContext'
import { redirect, useNavigate } from 'react-router-dom'
const Dashboard = () => {
    const {token,user} = useUser()
    console.log(token)
    const navigate = useNavigate()  


    useEffect(()=>{

      if(!token){
       // redirect("/login")
         navigate("/login")
         return
      }

    },[token])

  return (
    <div>
        <h1>welcome { user&&   user.username} </h1>
    </div>
  )
}

export default Dashboard