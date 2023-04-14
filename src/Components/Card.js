import React from "react";
import "./style.css";

const Card = () => {
  return (
    <>
    <div className="card-container">
    <div className="card">
      <img src="https://picsum.photos/200/300" className ="pic" alt="Movie Poster" />
      <h2>Movie Name</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      <p> Rating: 8.5</p>
      <p>Release Date: 2021</p>
      <p>Genre: Action</p>
      <p>Duration: 2h 30m</p>
  
      </div>
      </div>
    </>
  );
};

export default Card;
