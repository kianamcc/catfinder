import React, { useEffect } from "react";
import "./Pagination.css";
import { IoPawSharp } from "react-icons/io5";
import { Link } from "react-scroll";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

const Pagination = (props) => {
  const totalPages = Math.ceil(props.totalCats / props.catsPerPage);
  // console.log("total pages", totalPages, "cats", props.totalCats);

  const pageNumbers = [];
  for (let i = props.minPageNumber; i <= props.maxPageNumber; i++) {
    if (i <= totalPages) {
      pageNumbers.push(i);
    }
  }

  const renderPages = pageNumbers.map((number) => {
    // console.log(
    //   "num",
    //   number,
    //   "max",
    //   props.maxPageNumber,
    //   "min",
    //   props.minPageNumber
    // );
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
    <section className="pagination">
      <div className="pagination-container">
        <Link to="filter" spy={true} smooth={true} duration={500}>
          <BsFillArrowLeftCircleFill
            className="arrow-icon"
            onClick={props.handlePreviousPage}
          />
        </Link>
        {/* {console.log("reee")} */}
        {renderPages}
        <Link to="filter" spy={true} smooth={true} duration={500}>
          <BsFillArrowRightCircleFill
            className="arrow-icon"
            onClick={props.handleNextPage}
          />
        </Link>
      </div>
    </section>
  );
};

export default Pagination;
