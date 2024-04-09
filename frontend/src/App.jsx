import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Register from './components/pages/Register'
import Login from './components/pages/Login'
import Navbar from './components/Navbar'
import Dashboard from './components/pages/Dashboard'
import Services from './components/pages/Services'
function App() {


  return (
    <>
    <Navbar />
        <Routes>
<Route  path='/'  element={ <Services/>} />
<Route  path='/register'   element={<Register />}   />
<Route  path='/login'   element={<Login />}   />
<Route  path='/dashboard'  element={<Dashboard />}   />  

        </Routes>
    </>
  )
}

export default App
