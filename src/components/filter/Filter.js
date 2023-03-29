import React, { useState } from "react";
import "./Filter.css";
import { FaSearchLocation } from "react-icons/fa";
import { PulseLoader } from "react-spinners";

const Filter = (props) => {
  const [userInput, setUserInput] = useState("");

  return (
    <section className="filter" id="filter">
      <div className="filter-container">
        <div className="filter-inner-container">
          <input
            placeholder="Enter your zipcode, state, or city"
            type="text"
            className="filter-input-box"
            onChange={(e) => {
              setUserInput(e.target.value);
            }}
          />
          {props.isFilterLoading ? (
            <PulseLoader color="#ffbe0b" size={10} />
          ) : (
            <FaSearchLocation
              size={30}
              className="filter-btn"
              onClick={() => {
                props.locationHandler(userInput);
              }}
            />
          )}
        </div>
        <div className="input-error-container">
          {props.error && (
            <p className="input-error">
              We could not find any cats with the given input...
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Filter;
