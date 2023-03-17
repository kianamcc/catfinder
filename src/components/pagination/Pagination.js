import React from "react";
import "./Pagination.css";
import { IoPawSharp } from "react-icons/io5";
import { Link } from "react-scroll";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

const Pagination = (props) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(props.totalCats / props.catsPerPage); i++) {
    pageNumbers.push(i);
  }
  // console.log("pages", pageNumbers);
  // console.log("max", props.maxPageNumber);
  // console.log("min", props.minPageNumber);
  // console.log("current", props.currentPage);

  // for (let i = 1; i <= props.numberOfPages; i++) {
  //   pageNumbers.push(i);
  // }

  const renderPages = pageNumbers.map((number) => {
    return number < props.maxPageNumber + 1 && number >= props.minPageNumber ? (
      <li
        key={number}
        className={`${
          props.currentPage === number
            ? "page-number-item-active"
            : "page-number-item"
        }`}
      >
        <Link to="filter" spy={true} smooth={true} duration={500}>
          <button
            className="page-btn"
            onClick={() => props.handlePageClick(number)}
          >
            <span className="page-number"> {number}</span>
            <IoPawSharp className="page-icon" />
          </button>
        </Link>
      </li>
    ) : null;
  });

  return (
    <section className="pagination">
      <div className="pagination-container">
        <BsFillArrowLeftCircleFill
          className="arrow-icon"
          onClick={props.handlePreviousPage}
        />

        {renderPages}

        <BsFillArrowRightCircleFill
          className="arrow-icon"
          onClick={props.handleNextPage}
        />
      </div>
    </section>
  );
};

export default Pagination;
