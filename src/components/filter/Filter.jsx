import React, { useState } from "react";
import "./Filter.css";
import { PulseLoader } from "react-spinners";

import {
  FilterInputBox,
  FilterButton,
  FilterContainer,
  InputBoxContainer,
  InputErrorText,
} from "./styles";

const Filter = (props) => {
  const [userInput, setUserInput] = useState("");

  return (
    <FilterContainer id="filter">
      <InputBoxContainer>
        <FilterInputBox
          props={props}
          placeholder="Enter your zipcode, state, or city"
          type="text"
          onChange={(e) => {
            setUserInput(e.target.value);
          }}
        />
        {props.isFilterLoading ? (
          <PulseLoader color="#ffbe0b" size={10} />
        ) : (
          <FilterButton
            size={30}
            onClick={() => {
              props.locationHandler(userInput);
            }}
          />
        )}
      </InputBoxContainer>
      {props.error && (
        <InputErrorText>
          We could not find any cats with the given input...
        </InputErrorText>
      )}
    </FilterContainer>
  );
};

export default Filter;
