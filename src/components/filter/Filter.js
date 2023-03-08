import React from "react";
import "./Filter.css";
import { FaSearchLocation } from "react-icons/fa";

const Filter = () => {
  return (
    <section className="filter" id="filter">
      <div className="filter-container">
        <div className="filter-inner-container">
          <input
            placeholder="Enter your zipcode"
            type="text"
            className="filter-input-box"
          />
          <FaSearchLocation size={30} className="filter-btn" />
        </div>
      </div>
    </section>
  );
};

export default Filter;
