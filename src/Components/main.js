import React from "react";
import "./style.css";
import Card from "./Card";

const Main = () => {
  return (
    <>
      <div className="nav">
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/movies">Movies</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
          </ul>
        </nav>

        <form className="search-btn">
          <input type="text" placeholder="Input movie name" />
          <button type="submit">
            <i class="fa-solid fa-magnifying-glass fa-shake"></i>
          </button>
        </form>
      </div>

      <div>
        <Card />
      </div>
    </>
  );
};

export default Main;
