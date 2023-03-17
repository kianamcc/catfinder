import React from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail, MdLocationOn } from "react-icons/md";
import "./Card.css";

const Card = (props) => {
  console.log("cards ", props.currentCats);

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
                  {/* <img className="card-img" src={cat.src} alt="card-img" /> */}
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
                    {cat.distance && (
                      <>
                        <MdLocationOn className="icons" /> {cat.distance} miles
                        away
                      </>
                    )}
                  </div>

                  <div className="card-phone">
                    {cat.contact.phone && (
                      <>
                        <BsFillTelephoneFill className="icons" />{" "}
                        {cat.contact.phone}
                      </>
                    )}
                  </div>
                  <div className="card-email">
                    {cat.contact.email && (
                      <>
                        <MdEmail className="icons" />
                        <a
                          href={`mailto:${cat.contact.email}`}
                          className="card-email-link"
                        >
                          {cat.contact.email}
                        </a>
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
  );
};

export default Card;
