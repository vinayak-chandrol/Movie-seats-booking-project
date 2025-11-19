import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/cinemahublogo.jpg";
import Signup from "../Pages/Signup";
import '../assets/Nav.css';
const Nav = () => {
  return (
    <nav className="bg-black text-white px-10 py-4 flex items-center justify-between shadow-md">
      {/* Left Section */}
      <div className="flex items-center gap-8">
        
        <ul className="flex gap-6 text-lg">
          <li></li>
          <li>
            <Link
              to="/"
              className="hover:text-yellow-400 transition duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/movies"
              className="hover:text-yellow-400 transition duration-200"
            >
              Movies
            </Link>
          </li>
          <li>
            <Link
              to="/trending"
              className="hover:text-yellow-400 transition duration-200"
            >
              Trending
            </Link>
          </li>
        </ul>
      </div>

      {/* Right Section */}
      <ul className="flex gap-6 text-lg">
        <li>
          <Link
            to="/mylist"
            className="hover:text-yellow-400 transition duration-200"
          >
            My List
          </Link>
        </li>
        <li>
          <Link
            to="/signup"
            className="hover:text-yellow-400 transition duration-200"
          >
            Account
          </Link>
        </li>
        <li>
          <Link
            to="/goldpass"
            className="hover:text-yellow-400 transition duration-200 font-semibold"
          >
            GoldPass
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
