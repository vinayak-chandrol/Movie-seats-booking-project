import React from "react";
import {Link} from 'react-router-dom'
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
       <Link to={`/movie/${item.id}`} className="movie-link" key={item.id}>
      <div className="movie-card" key={item.id}>
          <img src={item.image} alt={item.title} className="movie-image"/>
          <h2>{item.title}</h2>
          <p>Duration-{item.duration}</p>
          <p>Rating-{item.rating}</p>
      </div>
      </Link>
    ))}
    </div>  
  </>
  );
}

export default Card;
