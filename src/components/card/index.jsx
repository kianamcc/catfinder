import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail, MdLocationOn } from "react-icons/md";

import {
  CardContainer,
  CardTopSection,
  CardsContainer,
  CardImageContainer,
  CardImage,
  CardBottomSectionContainer,
  CardInfoContainer,
  CardEmailLink,
  CardHashtags,
  CardDescription,
  StyledAiFillHeart,
  CardSection,
} from "./styles";

const Cards = (props) => {
  return (
    <CardSection id="card-container">
      <CardsContainer>
        {props.currentCats.map((cat) => {
          return (
            <CardContainer key={cat.id}>
              <CardTopSection>
                <h3>{cat.name}</h3>
                <div style={{ cursor: "pointer" }}>
                  {cat.isFavorite ? (
                    <StyledAiFillHeart
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
              </CardTopSection>
              <CardImageContainer>
                <CardImage
                  src={
                    cat && cat.primary_photo_cropped
                      ? cat.primary_photo_cropped["small"]
                      : null
                  }
                  alt="Cat"
                />
              </CardImageContainer>
              <CardBottomSectionContainer>
                <CardDescription>{cat.description}</CardDescription>
                <div>
                  {cat.distance ? (
                    <>
                      <MdLocationOn
                        styles={{
                          height: "20px;",
                          width: "20px;",
                          paddingRight: "5px;",
                        }}
                      />
                      <span>{cat.distance} miles away in </span>
                      {cat.contact.address.city && (
                        <span>{cat.contact.address.city},</span>
                      )}
                      {cat.contact.address.state && (
                        <span>{cat.contact.address.state}</span>
                      )}
                    </>
                  ) : (
                    <>
                      <MdLocationOn
                        styles={{
                          height: "20px;",
                          width: "20px;",
                          paddingRight: "5px;",
                        }}
                      />
                      {cat.contact?.address?.city && (
                        <span>{cat.contact.address.city},</span>
                      )}{" "}
                      {cat.contact?.address?.state && (
                        <span>{cat.contact.address.state}</span>
                      )}
                    </>
                  )}
                </div>

                <CardInfoContainer>
                  {cat.contact?.phone && (
                    <>
                      <BsFillTelephoneFill
                        styles={{
                          height: "20px;",
                          width: "20px;",
                          paddingRight: "5px;",
                        }}
                      />
                      {cat.contact.phone}
                    </>
                  )}
                </CardInfoContainer>
                <CardInfoContainer>
                  {cat.contact?.email && (
                    <>
                      <MdEmail
                        styles={{
                          height: "20px;",
                          width: "20px;",
                          paddingRight: "5px;",
                        }}
                      />
                      <CardEmailLink href={`mailto:${cat.contact.email}`}>
                        {cat.contact.email}
                      </CardEmailLink>
                    </>
                  )}
                </CardInfoContainer>
                <CardHashtags>
                  {cat.tags.slice(0, 3).map((tag, index) => {
                    return <span key={`${cat.id}-${index}`}>#{tag}</span>;
                  })}
                </CardHashtags>
              </CardBottomSectionContainer>
            </CardContainer>
          );
        })}
      </CardsContainer>
    </CardSection>
  );
};

export default Cards;
