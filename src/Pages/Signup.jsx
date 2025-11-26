import React from "react";
import "../assets/Signup.css";

const Signup = () => {
  return (
     <div className="signup-wrapper">
      <div className="left-section">
       <div className="signup-container">
     
      <h2 className="signup-title">Create Account</h2>

      <form className="signup-form">
        <label>First Name</label>
        <input type="text" placeholder="Enter first name" />

        <label>Last Name</label>
        <input type="text" placeholder="Enter last name" />

        <label>Email</label>
        <input type="email" placeholder="Enter email" />

        <label>Phone Number</label>
        <input type="tel" placeholder="Enter phone number" />

        <label>Password</label>
        <input type="password" placeholder="Enter password" />

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

    