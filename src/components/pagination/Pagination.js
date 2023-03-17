import React from "react";
import "./Pagination.css";
import { IoPawSharp } from "react-icons/io5";
import { Link } from "react-scroll";

const Pagination = (props) => {
  const pageNumbers = [];
  // for (let i = 1; i <= Math.ceil(props.totalCats / props.catsPerPage); i++) {
  //   pageNumbers.push(i);
  // }
  for (let i = 1; i <= 10; i++) {
    pageNumbers.push(i);
  }
  return (
    <section className="pagination">
      <div className="pagination-container">
        {pageNumbers.map((number) => {
          return (
            <li key={number} className="page-number-item">
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
          );
        })}
      </div>
    </section>
  );
};

export default Pagination;
