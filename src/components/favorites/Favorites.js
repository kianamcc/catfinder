import React, { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail, MdLocationOn } from "react-icons/md";
import Pagination from "../pagination/Pagination";
import "./Favorites.css";

const Favorites = (props) => {
  const getFavoriteCats = localStorage.getItem("catfinder-favorites");
  const cats = JSON.parse(getFavoriteCats) || [];

  const [currentPage, setCurrentPage] = useState(1);
  const [catsPerPage] = useState(5);

  let indexOfLastPost = currentPage * catsPerPage;
  let indexOfFirstPost = indexOfLastPost - catsPerPage;
  let currentCats = [];

  const [pageNumberLimit, setPageNumberLimit] = useState(3);
  const [minPageNumber, setMinPageNumber] = useState(1);
  const [maxPageNumber, setMaxPageNumber] = useState(3);

  if (cats) {
    currentCats = cats.slice(indexOfFirstPost, indexOfLastPost);
  }

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  let displayCards = (
    <>
      <section className="favorites-container">
        <div className="card-grid-container">
          {currentCats.map((cat) => {
            return (
              <div className="card" key={cat.id}>
                <div className="card-item-container">
                  <div className="card-top">
                    <h3>{cat.name}</h3>
                    <div className="heart-icon">
                      <AiFillHeart
                        size={30}
                        onClick={(e) => {
                          props.handleRemoveFavorites(cat);
                        }}
                      />
                    </div>
                  </div>
                  <div className="card-img-container">
                    <img
                      className="card-img"
                      src={
                        cat && cat.primary_photo_cropped
                          ? cat.primary_photo_cropped["small"]
                          : null
                      }
                      alt="Cat"
                    />
                  </div>
                  <div className="card-bottom">
                    <div className="card-description">{cat.description}</div>
                    <div className="card-location">
                      <MdLocationOn className="icons" />{" "}
                      <>
                        {cat.contact.address.city && (
                          <span>{cat.contact.address.city},</span>
                        )}{" "}
                        {cat.contact.address.state && (
                          <span>{cat.contact.address.state}</span>
                        )}
                      </>
                    </div>

                    <div className="card-phone">
                      {cat.contact.phone && (
                        <>
                          <BsFillTelephoneFill className="icons" />
                          <a
                            href={`mailto:${cat.contact.email}`}
                            className="card-email-link"
                          >
                            {cat.contact.email}
                          </a>
                        </>
                      )}
                    </div>
                    <div className="card-email">
                      {cat.contact.email && (
                        <>
                          <MdEmail className="icons" /> {cat.contact.email}
                        </>
                      )}
                    </div>
                    <div className="card-hashtags">
                      {cat.tags.slice(0, 3).map((tag, index) => {
                        return <span key={`${cat.id}-${index}`}>#{tag}</span>;
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      {cats.length > catsPerPage ? (
        <Pagination
          totalCats={cats.length}
          catsPerPage={catsPerPage}
          handlePageClick={handlePageClick}
          numberOfPages={5}
          currentPage={currentPage}
          handleNextPage={props.handleNextPage}
          handlePreviousPage={props.handlePreviousPage}
          pageNumberLimit={pageNumberLimit}
          minPageNumber={minPageNumber}
          maxPageNumber={maxPageNumber}
        />
      ) : null}
    </>
  );

  return (
    <>
      {currentCats.length ? (
        displayCards
      ) : (
        <section className="no-favorites">
          <div className="no-favorites-container">
            <h2 className="no-favorites-title">No favorites found...</h2>
          </div>
        </section>
      )}
    </>
  );
};

export default Favorites;
