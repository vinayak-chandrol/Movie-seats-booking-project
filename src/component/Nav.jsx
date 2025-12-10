import React from "react";
import { Link,useNavigate } from "react-router-dom";
import "../assets/Nav.css";

const Nav = () => {

  const navigate=useNavigate();
  const user =  JSON.parse(localStorage.getItem("loggeduser"));

  const handleLogout=()=>{
    localStorage.removeItem("loggeduser");
    navigate("/login");
  }
  return (
    <nav className="nav">

      {/* Left Section */}
      <div className="left">
        <ul className="links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/movies">Movies</Link></li>
          <li><Link to="/trending">Trending</Link></li>
        </ul>
      </div>

      {/* Search */}
      <div className="search">
        <input type="search" placeholder="Search movies..." />
      </div>

      {/* Right Section */}
      <ul className="links-right">
        <li><Link to="/mylist">My List</Link></li>
        {user? (
          <li onClick={handleLogout} style={{cursor: "pointer"}}>Logout</li>
        ):(
          <li><Link to ="/login">SignIn</Link></li>
        )}
        <li><Link to="/goldpass">GoldPass</Link></li>
      </ul>

    </nav>
  );
};

export default Nav;
