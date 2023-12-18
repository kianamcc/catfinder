import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./MobileNavBar.css";
import { SlMenu } from "react-icons/sl";
import { GrClose } from "react-icons/gr";

const MobileNavBar = () => {
  const [open, setOpen] = useState(false);
  const navLinks = (
    <ul className="mobile-nav-links-container">
      <li className="mobile-nav-link-item-container">
        <Link
          to="/"
          className="nav-link"
          onClick={() => setOpen((prev) => !prev)}
        >
          Home
        </Link>
      </li>
      <li
        className="mobile-nav-link-item-container"
        onClick={() => setOpen((prev) => !prev)}
      >
        <Link to="/about" className="nav-link">
          About Us
        </Link>
      </li>
      <li
        className="mobile-nav-link-item-container"
        onClick={() => setOpen((prev) => !prev)}
      >
        <Link to="/donate" className="nav-link">
          Donate
        </Link>
      </li>
      <Link
        to="/favorites"
        className="nav-link"
        onClick={() => setOpen((prev) => !prev)}
      >
        Favorites
      </Link>
    </ul>
  );
  return (
    <nav className="mobile-navbar">
      {open ? (
        <div className="menu-container">
          {navLinks}
          <GrClose
            className="menu-icon"
            size={30}
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
      ) : (
        <div className="menu-container">
          <SlMenu
            className="menu-icon"
            size={30}
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
      )}
    </nav>
  );
};

export default MobileNavBar;
