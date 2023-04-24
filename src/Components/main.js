import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./style.css";
import Card from "./Card";

let api_key = "b604796e41f8ebf14ff8be62a4319577";
let base_url = "https://api.themoviedb.org/3";
let url = `${base_url}/discover/movie?sort_by=popularity.desc&api_key=${api_key}`;
let arr = ["Popular", "Action", "Horror", "Family", "Comedy"];
const Main = () => {
  const [movies, setMovies] = useState([]);
  const [url_search, setUrl] = useState([url]);

  
  useEffect(() => {
    fetch(url_search)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, [url_search]);
 
  const getData = (type) => {
    console.log(type);
    if (type === "Popular") {
      console.log("hit popular");
      url = `${base_url}/discover/movie?sort_by=popularity.desc&api_key=${api_key}`;
      console.log(url);
    }
    if (type === "Action") {
      url = `${base_url}/discover/movie?with_genres=28&api_key=${api_key}`;
      console.log(url);
    }
    if (type === "Horror") {
      url = `${base_url}/discover/movie?with_genres=27&api_key=${api_key}`;
    }
    if (type === "Family") {
      url = `${base_url}/discover/movie?with_genres=10751&api_key=${api_key}`;
    }
    if (type === "Comedy") {
      url = `${base_url}/discover/movie?with_genres=35&api_key=${api_key}`;
    }
    setUrl(url);
  };

  return (
    <>
      <div className="nav">
        <nav>
          <ul>
            {arr.map((res, pos) => {
              return (
                <li key={pos}>
                  <a
                    href="#"
                    name={res}
                    onClick={(e) => {
                      getData(e.target.name);
                    }}
                  >
                    {res}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <form>
          <input
            className="search-btn"
            type="text"
            placeholder="Input movie name"
          />
          <button className="search" type="submit">
            <i className="fa-solid fa-magnifying-glass fa-shake"></i>
          </button>
        </form>
      </div>

      <div className="card-container">
        {movies.length === 0 ? (
          <h1>No Movies Found</h1>
        ) : (
          movies.map((res, pos) => {
            return <Card key={pos} info={res} />;
          })
        )}
      </div>
    </>
  );
};

export default Main;
