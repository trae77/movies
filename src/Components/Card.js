import React from "react";
import "./style.css";

const Card = (movie) => {
  console.log(movie.info);
  return (
    <>
    <div className="card-container">
    <div className="card">
      <img src={movie.info.backdrop_path} className ="pic" alt="Movie Poster" />
      <h2>Title: {movie.info.title}</h2>
      <p>{movie.info.overview}</p>
      <p>Release Date: {movie.info.release_date}</p>
      <p>Vote average: {movie.info.vote_average}</p>
  
      </div>
      </div>
    </>
  );
};

export default Card;
