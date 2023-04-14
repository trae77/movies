import React from "react";
import "./style.css";

const Nav = () => {
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
            <li>
              <a href="/">family</a>
            </li>
            <li>
              <a href="/">comedy</a>
            </li>
          </ul>
        </nav>

        <form >
          <input className="search-btn" type="text" placeholder="Input movie name" />
          <button  className="search" type="submit">
            <i className="fa-solid fa-magnifying-glass fa-shake"></i>
          </button>
        </form>
      </div>
    </>
  );
};

export default Nav;
