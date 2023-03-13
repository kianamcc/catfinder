import React, { useState } from "react";
import Card from "../card/Card";
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
  let currentCats = cats.favorites.slice(indexOfFirstPost, indexOfLastPost);
  let favoriteCurrentCats = cats.favorites.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
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
                    <img className="card-img" src={cat.src} alt="card-img" />
                  </div>
                  <div className="card-bottom">
                    <div className="card-description">
                      <span className="organization-name">
                        Name_of_Organization
                      </span>
                      {cat.description}
                    </div>
                    <div className="card-location">
                      <MdLocationOn /> 9 miles away
                    </div>

                    <div className="card-phone">
                      <BsFillTelephoneFill /> {cat.phone}
                    </div>
                    <div className="card-email">
                      <MdEmail /> {cat.email}
                    </div>
                    <div className="card-hashtags">
                      {cat.tags.map((tag, index) => {
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
};

export default Favorites;
