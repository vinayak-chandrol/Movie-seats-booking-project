import React, { useState } from "react";
import Login from "./Login";
import "../assets/Signup.css";
import { useNavigate } from "react-router-dom";

const Signup = () => {

  const navigate=useNavigate();

  const [form,setForm]=useState({name:"",email:"",phone:"",password:""});
  
  const handleChange=(e)=>{
    setForm({...form,[e.target.name]:e.target.value})
  }

  async function handleSubmit(e){
    e.preventDefault();
    fetch("http://localhost:5000/users",{
      method:"POST",
      headers:{"Content-Type":"application/json"}, 

      body:JSON.stringify(form)
    })
    .then((res)=>res.json())  
    .then((data)=>alert("User registered successfully"))
    .then(()=>navigate("/Login"))
    .catch((error)=>console.error("Error:",error)); 
    
  }


  return (
     <div className="signup-wrapper">
      <div className="left-section">
       <div className="signup-container">
     
      <h2 className="signup-title">Create Account</h2>

      <form className="signup-form" onSubmit={handleSubmit}>
        <label>First Name</label>
        <input type="text" name="username" placeholder="Enter first name"  onChange={handleChange}/>

        <label>Last Name</label>
        <input type="text" placeholder="Enter last name" />

        <label>Email</label>
        <input type="email" name="email" placeholder="Enter email"  onChange={handleChange} />

        <label>Phone Number</label>
        <input type="tel" name="phone" placeholder="Enter phone number"  onChange={handleChange} />

        <label>Password</label>
        <input type="password" name="password" placeholder="Enter password"  onChange={handleChange} />

        <button type="submit">Sign Up</button>
      </form>
     
    </div>
      </div>

      <div className="right-section">
     
       <img src="https://i.pinimg.com/1200x/3e/ff/fc/3efffc4db594b1e93e9e51872b6cd22a.jpg" alt="movie banner" />
      </div>
    </div>
  );
};

export default Signup;

    