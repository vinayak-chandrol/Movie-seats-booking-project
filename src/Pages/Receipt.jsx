import React from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import "../assets/Receipt.css";


const Receipt = () => {
 const navigate = useNavigate();
  const { state } = useLocation();

  if (!state) return <h2>No booking found</h2>;

  return (
    <div className="receipt-container">
      <h1>🎟️ Booking Receipt</h1>

      <div className="receipt-box">
        <p><strong>Movie:</strong> {state.movie}</p>
        <p><strong>Seats:</strong> {state.seats.join(", ")}</p>
        <p><strong>Total Amount:</strong> ₹{state.total}</p>
        <p><strong>Booking ID:</strong> #{Math.floor(Math.random() * 90000 + 10000)}</p>
      </div>

      <button className="home-btn" onClick={() => navigate("/")}>
        Back to Home
      </button>
    </div>
  );
}

export default Receipt;