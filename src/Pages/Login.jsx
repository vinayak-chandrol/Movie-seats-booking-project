import React from 'react'
import "../assets/Login.css";
import {useState,useEffect} from "react";
import {useNavigate} from "react-router-dom";

const Login = () => {

    const [data,setData]=useState({email:"",password:""});

    const navigate = useNavigate();

    const handleChange=(e)=>{
          e.preventDefault();
        setData({...data,[e.target.name]:e.target.value});
    }

    const handleSubmit=(e)=>{

        e.preventDefault();
      
        fetch("http://localhost:5000/users")
        .then(res=>res.json())
        
        .then(users=>{
            const foundUser= users.find((user)=>user.email==data.email && user.password==data.password);
            if(foundUser){
                localStorage.setItem("loggeduser",JSON.stringify(data));
                alert("Login Successful");
                navigate("/Home");
            }
            else{
                alert("Invalid Credentials");
            }
        })
        .catch(err=>console.log("error in fetching user data:",err));
    
    }
  return (
  <>
  

  <div className="Loginpage">
    <div className="partone">
      <h1>Welcome Back!</h1>
      <p>To keep connected with us please login with your personal info</p>
    </div>

    <div className="parttwo">
      <form className="loginform" onSubmit={handleSubmit}>
        <h1>Login to MovieHub</h1>

        <label>Enter your email</label>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} />

        <label>Enter your password</label>
        <input type="password" name="password" placeholder="Password" onChange={handleChange} />

        <button className="btntwo">Login</button>
  </form>
      </div>
    </div>
</>
  )
}

export default Login