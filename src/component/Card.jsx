import React, { use } from "react";
import { useState,useEffect } from "react";
import '../assets/Card.css';

const Card = () => {
  const [Movies, SetMovies] = useState([]);
  useEffect(()=>{
    fetch("http://localhost:5000/movies")
    .then(res=>res.json())
    .then(data=>SetMovies(data))
    .catch(err=>console.log("error in fetching movie data:", err));
  }, []);
  return (
   <>
   <div style={{ display: "flex", flexWrap: "wrap" }}>
    {Movies.map((item)=>(
      <div className="movie-card" key={item.id}>
          <img src={item.image} alt={item.title} className="movie-image"/>
          <h2>{item.title}</h2>
          <p>Duration-{item.duration}</p>
          <p>Rating-{item.rating}</p>
      </div>
    ))}
    </div>  
  </>
  );
}

export default Card;
