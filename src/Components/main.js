import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./style.css";
import Card from "./Card";

let api_key = "b604796e41f8ebf14ff8be62a4319577";
let base_url = "https://api.themoviedb.org/3";
let url = `${base_url}/discover/movie?sort_by=popularity.desc&api_key=${api_key}`;
let arr = ["Home", "Movies", "About", "Family", "Comedy"];
const Main = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState([url]);

  useEffect(() => {
    fetch(search)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, [search]);
  const getData = (name) => {
    if (name === "Home") {
      setSearch(url);
    } else {
      let search_url = `${base_url}/search/movie?api_key=${api_key}&query=${name}`;
      setSearch(search_url);
    }
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
                    href="/"
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
