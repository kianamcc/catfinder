import axios from "axios";
import { Fragment, useEffect, useState, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FadeLoader } from "react-spinners";

import "./App.css";
import Navbar from "./components/navbar/Navbar";
import MobileNavBar from "./components/mobilenavbar/MobileNavBar";
import Cards from "./components/card";
import Home from "./components/home";
import Filter from "./components/filter/Filter";
import Footer from "./components/footer/Footer";
import catDataTest from "./data";
import catDataFavoritesTest from "./favoriteData";

const About = lazy(() => import("./components/about/About"));
const Donate = lazy(() => import("./components/donate"));

const { VITE_APP_API_KEY, VITE_APP_SECRET_KEY } = import.meta.env;

const App = () => {
  const [error, setError] = useState(false);
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
  const baseUrl = "https://api.petfinder.com/v2";

  useEffect(() => {
    setCatDataLoading(true);

    if (clicked) {
      setIsFilterLoading(true);
    }

    setError(false);

    axios
      .post(
        `${baseUrl}/oauth2/token`,
        `grant_type=client_credentials&client_id=${VITE_APP_API_KEY}&client_secret=${VITE_APP_SECRET_KEY}`
      )
      .then((response) => {
        let accessT = response.data.access_token;
        setCatDataLoading(false);
        setIsFilterLoading(false);

        let url = "";

        for (let page = 1; page <= 8; page++) {
          if (input) {
            url = `${baseUrl}/animals?type=cat&limit=100&location=${input}`;
          } else {
            url = `${baseUrl}/animals?type=cat&limit=100&page=${page}`;
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
            .catch(() => {
              setIsFilterLoading(false);
              if (input) {
                setError(true);
              }
            });
        }
      })
      .catch(() => {
        setError(true);
      });
  }, [input, clicked]);

  useEffect(() => {
    if (
      currentPage === Math.ceil(catData.length / catsPerPage) &&
      catData[indexOfLastPost - 1]
    ) {
      setCurrentCats(catData.slice(indexOfLastPost - 1));
    } else {
      setCurrentCats(catData.slice(indexOfFirstPost, indexOfLastPost));
    }

    setFavoriteCurrentCats(
      favoriteCats.slice(indexOfFirstPost, indexOfLastPost)
    );
  }, [catData, favoriteCats, currentPage]);

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

  const handleNextPage = () => {
    if (currentPage < Math.ceil(catData.length / catsPerPage)) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
    if (
      currentPage + 1 > maxPageNumber &&
      currentPage + 1 <= Math.ceil(catData.length / catsPerPage)
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
        <Suspense fallback={<FadeLoader color="#ffbe0b" size={10} />}>
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
                    <>
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
                    </>
                  )}
                </Fragment>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/donate" element={<Donate />} />
            <Route
              path="/favorites"
              element={
                <>
                  <Cards
                    currentCats={favoriteCurrentCats}
                    handleFavorites={handleFavorites}
                    handleRemoveFavorites={handleRemoveFavorites}
                    totalCats={favoriteCats.length}
                    catsPerPage={catsPerPage}
                  />
                </>
              }
            />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
