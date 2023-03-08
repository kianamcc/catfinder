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
  const [catData, setCatData] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const [catsPerPage] = useState(5);

  let indexOfLastPost = currentPage * catsPerPage;
  let indexOfFirstPost = indexOfLastPost - catsPerPage;
  let currentCats = catData.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    console.log("page changed", currentCats);
  }, [currentPage]);

  // useEffect(() => {
  //   axios
  //     .get("https://dummyjson.com/users")
  //     .then((res) => {
  //      setLoading(true);
  //       console.log(res.data.users);
  //       setCatData(res.data.users);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       console.log("An error has occured... ", err);
  //     });
  // }, []);

  console.log(catData);

  return (
    // <div className="App">
    //   <Navbar />
    //   <Home />
    //   <Card currentCats={currentCats} />
    //   <Pagination
    //     totalCats={catData.length}
    //     catsPerPage={catsPerPage}
    //     handlePageClick={handlePageClick}
    //   />
    //   <Footer />
    // </div>
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
                <Card currentCats={currentCats} />
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
          <Route path="/favorites" element={<Favorites />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
};

export default App;
