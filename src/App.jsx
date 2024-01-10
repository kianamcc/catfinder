import axios from "axios";
import styled from "styled-components";
import { Fragment, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FadeLoader } from "react-spinners";

import "./App.css";
import Navbar from "./components/navbar/Navbar";
import MobileNavBar from "./components/mobilenavbar/MobileNavBar";
import Cards from "./components/card";
import Home from "./components/home";
import About from "./components/about/About";
import Donate from "./components/donate";
import Filter from "./components/filter/Filter";
import Footer from "./components/footer/Footer";
import Pagination from "./components/pagination/Pagination";
import catDataTest from "./data";
import catDataFavoritesTest from "./favoriteData";

const NoFavoritesContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px;
`;

const NoFavoritesText = styled.h2`
  font-size: 2rem;
`;

const { VITE_APP_API_KEY, VITE_APP_SECRET_KEY } = import.meta.env;

const App = () => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [favoriteCats, setFavoriteCats] = useState([]);
  const [catData, setCatData] = useState([]);
  const [currentCats, setCurrentCats] = useState([]);
  const [favoriteCurrentCats, setFavoriteCurrentCats] = useState([]);
  const [isFilterLoading, setIsFilterLoading] = useState(false);
  const [catDataLoading, setCatDataLoading] = useState(false);
  const [location, setLocation] = useState(false);
  const [input, setInput] = useState("");
  const [clicked, setClicked] = useState(false);
  /* Pagination */
  const rowPageNumberLimit = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const [minPageNumber, setMinPageNumber] = useState(1);
  const [maxPageNumber, setMaxPageNumber] = useState(3);
  const [catsPerPage] = useState(25);
  /* Cat Indexing */
  let indexOfLastPost = currentPage * catsPerPage;
  let indexOfFirstPost = indexOfLastPost - catsPerPage;

  useEffect(() => {
    setCatDataLoading(true);

    if (clicked) {
      setIsFilterLoading(true);
    }

    setError(false);

    axios
      .post(
        "https://api.petfinder.com/v2/oauth2/token",
        `grant_type=client_credentials&client_id=${VITE_APP_API_KEY}&client_secret=${VITE_APP_SECRET_KEY}`
      )
      .then((response) => {
        let accessT = response.data.access_token;
        setCatDataLoading(false);
        setIsFilterLoading(false);

        let url = "";

        for (let page = 1; page <= 8; page++) {
          if (input) {
            url = `https://api.petfinder.com/v2/animals?type=cat&limit=100&location=${input}`;
          } else {
            url = `https://api.petfinder.com/v2/animals?type=cat&limit=100&page=${page}`;
          }
          axios
            .get(url, {
              headers: { Authorization: `Bearer ${accessT}` },
            })
            .then((response) => {
              const catsWithImage = response.data.animals.filter((c) => {
                return c.primary_photo_cropped != null;
              });

              let catsWithIsFavoriteProperty = catsWithImage.map((x) => {
                if (!("isFavorite" in x)) {
                  return { ...x, isFavorite: false };
                }
                return x;
              });

              setCatData(catsWithIsFavoriteProperty);
            })

            .catch((error) => {
              console.log("Error fetching data.", error);
              setIsFilterLoading(false);
              setError(true);
              setErrorMessage("Error fetching data.");
            });
        }
      })
      .catch((error) => {
        console.log("Error fetching access token.", error);
        setError(true);
        setErrorMessage("Error fetching access token.");
      });
  }, [location, clicked]);

  useEffect(() => {
    setCurrentCats(catData.slice(indexOfFirstPost, indexOfLastPost));
    setFavoriteCurrentCats(
      favoriteCats.slice(indexOfFirstPost, indexOfLastPost)
    );
  }, [catData, currentPage]);

  /* STORAGE HANDLING */
  const saveToLocalStorage = (items) => {
    localStorage.setItem("catfinder-favorites", JSON.stringify(items));
  };

  /* FAVORITES */
  const handleFavorites = (cat) => {
    const filterFavoriteDuplicates = favoriteCats.filter(
      (currentFav) => currentFav.id !== cat.id
    );

    const newFavoritesList = [...filterFavoriteDuplicates, cat];

    // Update isFavorite property of favorited cat in the favorites list
    const updateIsFavorite = newFavoritesList.map((currentFav) => {
      if (currentFav.id === cat.id && currentFav.isFavorite === false) {
        currentFav.isFavorite = true;
      }
      return currentFav;
    });

    // Update isFavorite property of favorited cat in main
    setCatData((prev) =>
      prev.map((current) => {
        if (current.id === cat.id && current.isFavorite === false) {
          current.isFavorite = true;
        }
        return current;
      })
    );

    setFavoriteCats(updateIsFavorite);
    saveToLocalStorage(updateIsFavorite);
  };

  /* REMOVE FAVORITES */
  const handleRemoveFavorites = (cat) => {
    if (favoriteCurrentCats.length === 1 && currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }

    const filterUnfavorite = favoriteCats.filter(
      (currentFav) => currentFav.id !== cat.id
    );

    setCatData((prev) =>
      prev.map((current) => {
        if (current.id === cat.id) {
          current.isFavorite = false;
        }
        return current;
      })
    );

    setFavoriteCats(filterUnfavorite);
    saveToLocalStorage(filterUnfavorite);
  };

  /* LOCATION HANDLING */
  const locationHandler = (userInput) => {
    setClicked((prev) => !prev);
    if (userInput) {
      setLocation(true);
    } else {
      setLocation(false);
    }
    setInput(userInput);
  };

  /* PAGE HANDLING */
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNextPage = (catData) => {
    if (currentPage < Math.ceil(catData.length / catsPerPage)) {
      setCurrentPage((prev) => prev + 1);
    }

    if (
      currentPage + 1 > maxPageNumber &&
      currentPage + 1 < Math.ceil(catData.length / catsPerPage)
    ) {
      setMaxPageNumber(maxPageNumber + rowPageNumberLimit);
      setMinPageNumber(minPageNumber + rowPageNumberLimit);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
    if (currentPage - 1 < minPageNumber && currentPage > 3) {
      setMaxPageNumber(maxPageNumber - rowPageNumberLimit);
      setMinPageNumber(minPageNumber - rowPageNumberLimit);
    }
  };

  return (
    <div className="App">
      <Router>
        <Navbar />
        <MobileNavBar />
        <Routes>
          <Route
            path="/"
            element={
              <Fragment>
                <Home />
                <Filter
                  locationHandler={locationHandler}
                  error={error}
                  isFilterLoading={isFilterLoading}
                />
                {catDataLoading ? (
                  <div className="data-loading-container">
                    <h2 className="data-loading">Loading cats...</h2>
                    <FadeLoader color="#ffbe0b" size={10} />
                  </div>
                ) : (
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <Cards
                      currentCats={currentCats}
                      handleFavorites={handleFavorites}
                      handleRemoveFavorites={handleRemoveFavorites}
                      totalCats={catData.length}
                      catsPerPage={catsPerPage}
                      handlePageClick={handlePageClick}
                      numberOfPages={5}
                      currentPage={currentPage}
                      handleNextPage={handleNextPage}
                      handlePreviousPage={handlePreviousPage}
                      rowPageNumberLimit={rowPageNumberLimit}
                      minPageNumber={minPageNumber}
                      maxPageNumber={maxPageNumber}
                    />
                    {!!catData.length && (
                      <Pagination
                        currentCats={currentCats}
                        totalCats={catData.length}
                        catsPerPage={catsPerPage}
                        handlePageClick={handlePageClick}
                        numberOfPages={5}
                        currentPage={currentPage}
                        handleNextPage={() => handleNextPage(catData)}
                        handlePreviousPage={handlePreviousPage}
                        rowPageNumberLimit={rowPageNumberLimit}
                        minPageNumber={minPageNumber}
                        maxPageNumber={maxPageNumber}
                      />
                    )}
                  </div>
                )}
              </Fragment>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/donate" element={<Donate />} />
          <Route
            path="/favorites"
            element={
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  minHeight: "100%",
                }}
              >
                {!favoriteCats.length ? (
                  <NoFavoritesContainer>
                    <NoFavoritesText>No cats found...</NoFavoritesText>
                    <p>Favorite a cat and come back to this page!</p>
                  </NoFavoritesContainer>
                ) : (
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <Cards
                      currentCats={favoriteCurrentCats}
                      handleFavorites={handleFavorites}
                      handleRemoveFavorites={handleRemoveFavorites}
                      totalCats={favoriteCurrentCats}
                      catsPerPage={catsPerPage}
                      handlePageClick={handlePageClick}
                      numberOfPages={5}
                      currentPage={currentPage}
                      handleNextPage={handleNextPage}
                      handlePreviousPage={handlePreviousPage}
                      rowPageNumberLimit={rowPageNumberLimit}
                      minPageNumber={minPageNumber}
                      maxPageNumber={maxPageNumber}
                    />
                    <Pagination
                      currentCats={favoriteCurrentCats}
                      totalCats={favoriteCats.length}
                      catsPerPage={catsPerPage}
                      handlePageClick={handlePageClick}
                      numberOfPages={5}
                      currentPage={currentPage}
                      handleNextPage={() => handleNextPage(favoriteCats)}
                      handlePreviousPage={handlePreviousPage}
                      rowPageNumberLimit={rowPageNumberLimit}
                      minPageNumber={minPageNumber}
                      maxPageNumber={maxPageNumber}
                    />
                  </div>
                )}
              </div>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
