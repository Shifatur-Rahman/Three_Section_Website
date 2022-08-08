import React from "react";
import "./NavMenu.css";
import { Link } from "react-router-dom";

const NavMenu = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">NOVEL</div>

        <ul className="nav-links">
          <input type="checkbox" id="checkbox_toggle" />
          <label for="checkbox_toggle" className="hamburger">
            &#9776;
          </label>

          <div className="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li className="services">
              <Link to="/blog">Blog</Link>
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default NavMenu;
