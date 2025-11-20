import React from "react";
import "../assets/Signup.css";

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="left">
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
  );
};

export default Signup;
