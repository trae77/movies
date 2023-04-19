import React from "react";
import {useState} from "react";
import {useEffect} from "react";
import "./style.css";
import Card from "./Card";
import Nav from "./Nav";

let api_key = "b604796e41f8ebf14ff8be62a4319577";
let base_url = "https://api.themoviedb.org/3";
let url = `${base_url}/discover/movie?sort_by=popularity.desc&api_key=${api_key}`;

const Main = () => {
  // const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState([url]);

  useEffect(() => {
    fetch(search)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSearch(data.results);
      });
  }, [search]);



  return (
    <>
      <Nav />

      <div className="card-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export default Main;
