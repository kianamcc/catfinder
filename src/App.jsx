import "./App.css";
import Navbar from "./components/navbar/Navbar";
import MobileNavBar from "./components/mobilenavbar/MobileNavBar";
import Cards from "./components/card";
import Home from "./components/home";
import About from "./components/about/About";
import Donate from "./components/donate/Donate";
import Favorites from "./components/favorites/Favorites";
import Filter from "./components/filter/Filter";
import Footer from "./components/footer/Footer";
import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import Pagination from "./components/pagination/Pagination";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FadeLoader } from "react-spinners";

const { VITE_APP_API_KEY, VITE_APP_SECRET_KEY } = import.meta.env;

const App = () => {
  const [favoriteCats, setFavoriteCats] = useState([]);
  const [error, setError] = useState(false);
  const [catData, setCatData] = useState([]);
  const [currentCats, setCurrentCats] = useState([]);
  const [isFilterLoading, setIsFilterLoading] = useState(false);
  const [catDataLoading, setCatDataLoading] = useState(false);
  const [location, setLocation] = useState(false);
  const [input, setInput] = useState("");
  const [clicked, setClicked] = useState(false);
  /* Hooks for Pagination */
  const [currentPage, setCurrentPage] = useState(1);
  const [pageNumberLimit, setPageNumberLimit] = useState(3);
  const [minPageNumber, setMinPageNumber] = useState(1);
  const [maxPageNumber, setMaxPageNumber] = useState(3);
  const [catsPerPage] = useState(25);
  /* Cat Indexing */
  let indexOfLastPost = currentPage * catsPerPage;
  let indexOfFirstPost = indexOfLastPost - catsPerPage;

  useEffect(() => {
    const catFavorites = localStorage.getItem("catfinder-favorites");
    const output = JSON.parse(catFavorites) || [];
    setFavoriteCats(output);
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

        for (let page = 1; page <= 3; page++) {
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
              console.log("Error fetching data", error);
              setIsFilterLoading(false);
              setError(true);
            });
        }
      })
      .catch((error) => {
        console.log("Error fetching access token! ", error);
        setError(true);
      });
  }, [location, clicked]);

  useEffect(() => {
    setCurrentCats(catData.slice(indexOfFirstPost, indexOfLastPost));
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
      setCurrentPage((prev) => prev + 1);
    }

    if (
      currentPage + 1 > maxPageNumber &&
      currentPage + 1 < Math.ceil(catData.length / catsPerPage)
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
                  <Cards
                    currentCats={currentCats}
                    handleFavorites={handleFavorites}
                    handleRemoveFavorites={handleRemoveFavorites}
                  />
                )}
                <Pagination
                  totalCats={catData.length}
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
              </Fragment>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/donate" element={<Donate />} />
          <Route
            path="/favorites"
            element={
              <Favorites
                handleFavorites={handleFavorites}
                handleRemoveFavorites={handleRemoveFavorites}
                favoriteCats={favoriteCats}
              />
            }
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
