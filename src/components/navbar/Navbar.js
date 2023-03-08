import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="nav-title">CatFinder</h1>
        <ul className="nav-links-container">
          <li className="nav-link-item-container">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-link-item-container">
            <Link to="/about" className="nav-link">
              About Us
            </Link>
          </li>
          <li className="nav-link-item-container">
            <Link to="/donate" className="nav-link">
              Donate
            </Link>
          </li>
          <li className="nav-link-item-container favorites">
            <Link to="/favorites" className="nav-link fav-link">
              Favorites
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
