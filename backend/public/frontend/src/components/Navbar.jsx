import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { useUser } from './contexts/UserContext'
const Navbar = () => {
    const {token ,setToken   } = useUser()

const  logOutHandler = ()=>{

localStorage.removeItem("token")
localStorage.removeItem("user")
setToken(null)
}



  return (
    <nav>
      <Link  to={"/"} >  <p>Logo</p> </Link>  
        <ul>
           <Link  to={"/dashboard"} > <li>dashboard</li>  </Link> 
           <Link  to={"/login"} > <li>login</li>  </Link> 
           <Link  to={"/register"} > <li>register</li>  </Link> 
           {  token &&  <li  onClick={ logOutHandler }   >log out</li>  }


        </ul>
    </nav>
  )
}

export default Navbar