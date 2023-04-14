import React from "react";
import "./style.css";
import Card from "./Card";
import Nav from "./Nav";

const Main = () => {
  return (
    <>
      <Nav />

     <div className="card-container">
     <Card />
      <Card />
      <Card />
      </div>
      
    
    </>
  );
};

export default Main;
