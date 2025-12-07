import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";
import "../assets/MovieDetails.css"
const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const navigate=useNavigate();

const toggleSeat = (index) => {
  if (selectedSeats.includes(index)) {
    setSelectedSeats(selectedSeats.filter(seat => seat !== index));
  } else {
    setSelectedSeats([...selectedSeats, index]);
  }
};


  useEffect(() => {
    fetch(`http://localhost:5000/movies/${id}`)
      .then(res => res.json())
      .then(data => setMovie(data))
      .catch(err => console.log("Error:", err));
  }, [id]);

  if (!movie) return <h2>Loading...</h2>;

  const handleBooking = () => {
  if (selectedSeats.length === 0) {
    alert("Please select at least one seat");
    return;
  }

  navigate("/receipt", {
    state: {
      movie: movie.title,
      seats: selectedSeats.map(s => s + 1),
      total: selectedSeats.length * 200, // 
    },
  });
};




  return (
   <div className="movie-details">
  <img src={movie.image} alt={movie.title} />

  <div className="details-right">
    <h1>{movie.title}</h1>
    <p>{movie.description}</p>
    <p>Duration: {movie.duration}</p>
    <p>Rating: {movie.rating}</p>

    <h2>Select Your Seats</h2>

    <div className="seat-grid">
      {Array.from({ length: 30 }).map((_, index) => (
        <div
          key={index}
          className={`seat ${selectedSeats.includes(index) ? "selected" : ""}`}
          onClick={() => toggleSeat(index)}
        >
          {index + 1}
        </div>
      ))}
    </div>

    <button className="book-btn" onClick={handleBooking}>Book Now</button><p>Screen this way</p>
  </div>
</div>

  );
};

export default MovieDetails;
