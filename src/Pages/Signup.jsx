import React, { useState } from "react";
import "../assets/Signup.css";

export default function Signup() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.username || !form.email || !form.password) {
      setError("Please fill all fields.");
      return;
    }

    setError("");
    console.log("Signup Successfully:", form);
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-card">
        <h2 className="title">Create Account</h2>
        <p className="subtitle">Join MovieHub and start booking tickets 🎬</p>

        {error && <p className="error">{error}</p>}

        <form onSubmit={handleSubmit} className="signup-form">
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />

          <button type="submit" className="btn">
            Sign Up
          </button>
        </form>

        <p className="login-text">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
}
