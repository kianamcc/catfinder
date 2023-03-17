import React, { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail, MdLocationOn } from "react-icons/md";
import Pagination from "../pagination/Pagination";
import "./Favorites.css";

const Favorites = (props) => {
  const getFavoriteCats = localStorage.getItem("catfinder-favorites");
  const cats = JSON.parse(getFavoriteCats) || [];

  console.log("favorite cats", cats.favorites);

  const [currentPage, setCurrentPage] = useState(1);
  const [catsPerPage] = useState(5);

  let indexOfLastPost = currentPage * catsPerPage;
  let indexOfFirstPost = indexOfLastPost - catsPerPage;
  let currentCats = [];

  if (cats.favorites) {
    currentCats = cats.favorites.slice(indexOfFirstPost, indexOfLastPost);
  }

  // let favoriteCurrentCats = cats.favorites.slice(
  //   indexOfFirstPost,
  //   indexOfLastPost
  // );

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
                    <div className="card-description">
                      <span className="organization-name">
                        Name_of_Organization
                      </span>
                      {cat.description}
                    </div>
                    <div className="card-location">
                      <MdLocationOn className="icons" /> 9 miles away
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
                        return <p key={`${cat.id}-${index}`}>#{tag}</p>;
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <Pagination
        totalCats={cats.length}
        catsPerPage={catsPerPage}
        handlePageClick={handlePageClick}
      />
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
