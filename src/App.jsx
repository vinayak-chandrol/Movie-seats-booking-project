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
function App() {
  

  return (
    <>
    
       <Nav />
       <Routes>
        <Route path="/" element={<Home />} />
        {/* ADD THIS */}
        <Route path="/Signup" element={<Signup />} />
      </Routes>
   
    
      <Footer />

    </>
  )
}

export default App
