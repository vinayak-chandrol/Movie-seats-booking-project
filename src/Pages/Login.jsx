import React from 'react'
import "../assets/Login.css";
import {useState} from "react";


const Login = () => {

    const data=useState({email:"",password:""});


  return (
  <>
  <div>Login</div>

  <div className="Loginpage">
    <div className="partone">
      <h1>Welcome Back!</h1>
      <p>To keep connected with us please login with your personal info</p>
    </div>

    <div className="parttwo">
      <div className="loginform">
        <h1>Login to MovieHub</h1>

        <label>Enter your email</label>
        <input type="email" name="email" placeholder="Email" />

        <label>Enter your password</label>
        <input type="password" name="password" placeholder="Password" />

        <button className="btntwo">Login</button>
      </div>
    </div>
  </div>
</>
  )
}

export default Login