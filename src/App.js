import "./App.css";
import Navbar from "./components/navbar/Navbar";
import MobileNavBar from "./components/mobilenavbar/MobileNavBar";
import Card from "./components/card/Card";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Donate from "./components/donate/Donate";
import Favorites from "./components/favorites/Favorites";
import Filter from "./components/filter/Filter";
import Footer from "./components/footer/Footer";
import axios from "axios";
import { Fragment, useEffect, useState } from "react";
//import data from "./data.js";
import Pagination from "./components/pagination/Pagination";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const { REACT_APP_API_KEY, REACT_APP_SECRET_KEY } = process.env;

const App = () => {
  const [favoriteCats, setFavoriteCats] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [catsPerPage] = useState(25);
  const [token, setToken] = useState("");
  const [error, setError] = useState(false);
  const [catData, setCatData] = useState([]);
  const [currentCats, setCurrentCats] = useState([]);
  const [isFilterLoading, setIsFilterLoading] = useState(false);

  let indexOfLastPost = currentPage * catsPerPage;
  let indexOfFirstPost = indexOfLastPost - catsPerPage;

  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .post(
        "https://api.petfinder.com/v2/oauth2/token", // token request, must be POST, contains single parameter and values named grant_type
        `grant_type=client_credentials&client_id=${REACT_APP_API_KEY}&client_secret=${REACT_APP_SECRET_KEY}`
      )

      .then((response) => {
        let accessT = response.data.access_token;
        setToken(accessT);

        for (let page = 1; page <= 2; page++) {
          axios
            .get(
              `https://api.petfinder.com/v2/animals?type=cat&limit=100&page=${page}`,
              {
                headers: { Authorization: `Bearer ${accessT}` },
              }
            )
            .then((response) => {
              console.log(`data of page: ${page}`, response.data.animals);
              const catsWithImage = response.data.animals.filter((c) => {
                return c.primary_photo_cropped != null;
              });

              const catsWithIsFavoriteProperty = catsWithImage.map((x) => {
                if (!("isFavorite" in x)) {
                  return { ...x, isFavorite: false };
                }
                return x;
              });

              setCatData((prev) => [...prev, ...catsWithIsFavoriteProperty]);
            })

            .catch((error) => {
              console.log("Error fetching data", error);
            });
        }
      })
      .catch((error) => {
        console.log("Error fetching access token! ", error);
      });

    // Get favorite cats
    const getFavoriteCats = localStorage.getItem("catfinder-favorites");
    const result = JSON.parse(getFavoriteCats) || [];
    console.log("local storage cards: ", result.cards);
  }, [currentPage]);

  useEffect(() => {
    setCurrentCats(catData.slice(indexOfFirstPost, indexOfLastPost));
  }, [catData]);

  /* SET PAGE UPON USER CLICK */
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  /* STORAGE HANDLING */
  const saveToLocalStorage = (items) => {
    const localStorageObj = {
      favorites: items,
      //cards: catData,
    };

    console.log("local storage", localStorageObj);

    localStorage.setItem(
      "catfinder-favorites",
      JSON.stringify(localStorageObj)
    );
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
    console.log("Removing favorite");

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
    setIsFilterLoading(true);
    axios
      .get(
        `https://api.petfinder.com/v2/animals?type=cat&location=${userInput}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        console.log("location", res);
        setError(false);
        const filteredCatData = res.data.animals.filter((c) => {
          return c.primary_photo_cropped != null;
        });
        setCatData(filteredCatData);
        setIsFilterLoading(false);
      })
      .catch((err) => {
        console.log("Error occurred in search input: ", err);
        setIsFilterLoading(false);
        setError(true);
      });
    return 0;
  };

  console.log("loading", isFilterLoading);

  /* CHECK STATES, CONSOLE.LOGs */
  console.log("current cats: ", currentCats);
  console.log(catData.length);

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
                <Card
                  currentCats={currentCats}
                  handleFavorites={handleFavorites}
                  handleRemoveFavorites={handleRemoveFavorites}
                />
                <Pagination
                  totalCats={catData.length}
                  catsPerPage={catsPerPage}
                  handlePageClick={handlePageClick}
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
                //currentCats={favoriteCurrentCats}
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
