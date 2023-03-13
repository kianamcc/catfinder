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
import data from "./data.js";
import Pagination from "./components/pagination/Pagination";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  // const [catData, setCatData] = useState(data);
  const [favoriteCats, setFavoriteCats] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [catsPerPage] = useState(6);

  let indexOfLastPost = currentPage * catsPerPage;
  let indexOfFirstPost = indexOfLastPost - catsPerPage;

  const [catData, setCatData] = useState(
    data.map((c) => {
      return { ...c, isFavorite: false };
    })
  );

  // var catData = data.map((c) => {
  //   return { ...c, isFavorite: false };
  // });

  const [currentCats, setCurrentCats] = useState(
    catData.slice(indexOfFirstPost, indexOfLastPost)
  );

  let favoriteCurrentCats = favoriteCats.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  useEffect(() => {
    // for (var i = 0, len = localStorage.length; i < len; ++i) {
    //   console.log(localStorage.getItem(localStorage.key(1)));
    // }

    const getFavoriteCats = localStorage.getItem("catfinder-favorites");
    const result = JSON.parse(getFavoriteCats) || [];
    console.log("local storage favorites: ", result.favorites);
    console.log("local storage cards: ", result.cards);

    setFavoriteCats(result.favorites);
    setCatData(result.cards);
    setCurrentCats(result.cards.slice(indexOfFirstPost, indexOfLastPost));
  }, [currentPage]);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const saveToLocalStorage = (items) => {
    const localStorageObj = {
      favorites: items,
      cards: catData,
    };

    localStorage.setItem(
      "catfinder-favorites",
      JSON.stringify(localStorageObj)
    );
    // console.log("test", localStorage["catfinder-favorites"]);
    // for (const [key, value] of Object.entries(localStorage)) {
    //   console.log(`val: ${value}`);
    // }
  };

  const handleFavorites = (cat) => {
    console.log("adding favorite");

    const filterFavoriteDuplicates = favoriteCats.filter(
      (currentFav) => currentFav.id !== cat.id
    );

    const newFavoritesList = [...filterFavoriteDuplicates, cat];

    const updateIsFavorite = newFavoritesList.map((currentFav) => {
      if (currentFav.id === cat.id && currentFav.isFavorite === false) {
        currentFav.isFavorite = true;
      }
      return currentFav;
    });

    setCatData((prev) =>
      prev.map((current) => {
        if (current.id === cat.id && current.isFavorite === false) {
          current.isFavorite = true;
        }
        return current;
      })
    );

    console.log("catData", catData);

    //console.log("updated favorites array: ", updateIsFavorite);

    setFavoriteCats(updateIsFavorite);
    saveToLocalStorage(updateIsFavorite);
  };

  const handleRemoveFavorites = (cat) => {
    console.log("removing favorite");

    const filterUnfavorite = favoriteCats.filter(
      (currentFav) => currentFav.id !== cat.id
    );

    setCatData((prev) =>
      prev.map((current) => {
        if (current.id === cat.id && current.isFavorite === true) {
          current.isFavorite = false;
        }
        return current;
      })
    );

    setFavoriteCats(filterUnfavorite);
    saveToLocalStorage(filterUnfavorite);
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
                <Filter />
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
                currentCats={favoriteCurrentCats}
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
