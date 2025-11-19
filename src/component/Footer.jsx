import React from "react";
import "../assets/Footer.css";
const Footer=()=> {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* ------- COLUMN 1: LOGO ------- */}
        <div className="footer-section">
          <h2 className="footer-logo">MovieHub</h2>
          <p>Your trusted movie ticket booking partner.</p>
          <p>Book movie tickets easily, fast & securely.</p>
        </div>

        {/* ------- COLUMN 2: QUICK LINKS ------- */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Movies</li>
            <li>Upcoming</li>
            <li>Offers</li>
            <li>Login / Signup</li>
          </ul>
        </div>

        {/* ------- COLUMN 3: CUSTOMER SUPPORT ------- */}
        <div className="footer-section">
          <h3>Customer Support</h3>
          <ul>
            <li>Help Center</li>
            <li>Cancellation</li>
            <li>Refund Policy</li>
            <li>Contact Us</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* ------- COLUMN 4: CONTACT INFO ------- */}
        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>Email: support@moviehub.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Address: Mumbai, Maharashtra, India</p>
        </div>

        {/* ------- COLUMN 5: SOCIAL MEDIA ------- */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <span>📘</span>
            <span>📸</span>
            <span>🐦</span>
            <span>▶️</span>
          </div>
        </div>

      </div>

      {/* ------- BOTTOM COPYRIGHT ------- */}
      <div className="footer-bottom">
        <p>© 2025 MovieHub. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
