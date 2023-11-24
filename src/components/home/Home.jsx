import React from "react";
import "./Home.css";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-container">
        <div className="home-left-container">
          <div className="home-left-flex-container">
            <h1 className="home-title">Find your new best friend today</h1>
            <h3 className="sub-heading">
              Looking to for your new friend for life? Start your search today!
            </h3>
            <Link to="filter" spy={true} smooth={true} duration={500}>
              <button className="home-btn">Start Search</button>
            </Link>
          </div>
        </div>
        <div className="home-right-container">
          <p className="section-paragraph"></p>
        </div>
      </div>
    </section>
  );
};

export default Home;
