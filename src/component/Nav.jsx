import React from "react";
import { Link } from "react-router-dom";
import "../assets/Nav.css";

const Nav = () => {
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
        <li><Link to="/signup">Account</Link></li>
        <li><Link to="/goldpass">GoldPass</Link></li>
      </ul>

    </nav>
  );
};

export default Nav;
