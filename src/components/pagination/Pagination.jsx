import React from "react";
import { IoPawSharp } from "react-icons/io5";
import { Link } from "react-scroll";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

import "./Pagination.css";

const Pagination = (props) => {
  const totalPages = Math.ceil(props.totalCats / props.catsPerPage);
  const pageNumbers = [];

  for (let i = props.minPageNumber; i <= props.maxPageNumber; i++) {
    if (i <= totalPages) {
      pageNumbers.push(i);
    }
  }

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
            <span className="page-number">{number}</span>
            <IoPawSharp className="page-icon" />
          </button>
        </Link>
      </li>
    ) : null;
  });

  return (
    <>
      {props.currentPage ? (
        <section className="pagination">
          <div className="pagination-container">
            <Link to="filter" spy={true} smooth={true} duration={500}>
              <BsFillArrowLeftCircleFill
                className="arrow-icon"
                onClick={props.handlePreviousPage}
              />
            </Link>
            {renderPages}
            <Link to="filter" spy={true} smooth={true} duration={500}>
              <BsFillArrowRightCircleFill
                className="arrow-icon"
                onClick={props.handleNextPage}
              />
            </Link>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default Pagination;
