import React, { useState } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail, MdLocationOn } from "react-icons/md";

import {
  CardContainer,
  CardImageContainer,
  CardsContainer,
  CardImage,
  CardTopSection,
  CardInfoContainer,
  CardHashtags,
  CardBottomSectionContainer,
  CardEmailLink,
  CardDescription,
  StyledAiFillHeart,
} from "../card/styles";
import Pagination from "../pagination/Pagination";

import "./Favorites.css";

const Favorites = (props) => {
  const getFavoriteCats = localStorage.getItem("catfinder-favorites");
  const cats = JSON.parse(getFavoriteCats) || [];

  const [currentPage, setCurrentPage] = useState(1);
  const [catsPerPage] = useState(10);

  let indexOfLastPost = currentPage * catsPerPage;
  let indexOfFirstPost = indexOfLastPost - catsPerPage;
  let currentCats = [];

  const [pageNumberLimit, setPageNumberLimit] = useState(3);
  const [minPageNumber, setMinPageNumber] = useState(1);
  const [maxPageNumber, setMaxPageNumber] = useState(3);

  if (cats) {
    currentCats = cats.slice(indexOfFirstPost, indexOfLastPost);
  }

  const handleNextPage = () => {
    if (currentPage < Math.ceil(cats.length / catsPerPage)) {
      setCurrentPage((prev) => prev + 1);
    }

    if (
      currentPage + 1 > maxPageNumber &&
      currentPage + 1 < Math.ceil(cats.length / catsPerPage)
    ) {
      setMaxPageNumber(maxPageNumber + pageNumberLimit);
      setMinPageNumber(minPageNumber + pageNumberLimit);
    }
  };
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
    if (currentPage - 1 < minPageNumber && currentPage > 3) {
      setMaxPageNumber(maxPageNumber - pageNumberLimit);
      setMinPageNumber(minPageNumber - pageNumberLimit);
    }
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  let displayCards = (
    <>
      <section id="favorites" style={{ margin: "50px 0px" }}>
        <CardsContainer>
          {currentCats.map((cat) => {
            return (
              <CardContainer key={cat.id}>
                <CardTopSection>
                  <h3>{cat.name}</h3>
                  <div style={{ cursor: "pointer" }}>
                    <StyledAiFillHeart
                      size={30}
                      onClick={(e) => {
                        props.handleRemoveFavorites(cat);
                      }}
                    />
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
                  <div className="card-location">
                    <MdLocationOn
                      styles={{
                        height: "20px;",
                        width: "20px;",
                        paddingRight: "5px;",
                      }}
                    />{" "}
                    <>
                      {cat.contact.address.city && (
                        <span>{cat.contact.address.city},</span>
                      )}{" "}
                      {cat.contact.address.state && (
                        <span>{cat.contact.address.state}</span>
                      )}
                    </>
                  </div>

                  <CardInfoContainer>
                    {cat.contact.phone && (
                      <>
                        <BsFillTelephoneFill
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
                  <CardInfoContainer>
                    {cat.contact.email && (
                      <>
                        <MdEmail
                          styles={{
                            height: "20px;",
                            width: "20px;",
                            paddingRight: "5px;",
                          }}
                        />{" "}
                        {cat.contact.email}
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
      </section>
      {cats.length > catsPerPage ? (
        <Pagination
          totalCats={cats.length}
          catsPerPage={catsPerPage}
          handlePageClick={handlePageClick}
          numberOfPages={5}
          currentPage={currentPage}
          handleNextPage={handleNextPage}
          handlePreviousPage={handlePreviousPage}
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
