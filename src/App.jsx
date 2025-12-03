import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Nav from './component/Nav'
import Card from './component/Card'
import Footer from './component/Footer'
import Signup from './Pages/Signup.jsx'
import Home from './Pages/Home.jsx'
import Login from './Pages/Login.jsx'
function App() {
  

  return (
    <>
    
       <Nav />
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
   
    
      <Footer />

    </>
  )
}

export default App
