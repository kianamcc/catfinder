import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail, MdLocationOn } from "react-icons/md";
import "./Card.css";

const Card = (props) => {
  // const cardDisplay = catData.map((cat) => {
  //   return <Card key={cat.id} name={cat.firstName} />;
  // });
  // if (props.loading) {
  //   return <h2>Fetching data...</h2>
  // }

  return (
    <section className="card-container">
      <div className="card-grid-container">
        {props.currentCats.map((cat) => {
          return (
            <div className="card" key={cat.id}>
              {console.log(cat.id)}
              <div className="card-item-container">
                <div className="card-top">
                  <h3>{cat.name}</h3>
                  <div className="heart-icon">
                    <AiOutlineHeart size={30} />
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
