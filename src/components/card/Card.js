import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail, MdLocationOn } from "react-icons/md";
import "./Card.css";

const Card = (props) => {
  //console.log("currentcats", props.currentCats);

  return (
    <section className="card-container">
      <div className="card-grid-container">
        {props.currentCats.map((cat) => {
          return (
            <div className="card" key={cat.id}>
              <div className="card-item-container">
                <div className="card-top">
                  <h3>{cat.name}</h3>
                  <div className="heart-icon-container">
                    {/* {console.log(cat.name, "is fave?: ", cat.isFavorite)} */}
                    {cat.isFavorite ? (
                      <AiFillHeart
                        className="heart-fill-icon"
                        size={30}
                        onClick={(e) => {
                          props.handleRemoveFavorites(cat);
                        }}
                      />
                    ) : (
                      <AiOutlineHeart
                        size={30}
                        onClick={(e) => {
                          props.handleFavorites(cat);
                        }}
                      />
                    )}
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
  );
};

export default Card;
