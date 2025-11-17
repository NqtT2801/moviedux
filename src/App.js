import "./App.css";
import "./styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MoviesGrid from "./components/MoviesGrid";
import WatchList from "./components/WatchList";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  const [watchllist, setWatchlist] = useState([]);

  useEffect(() => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  const toggleWatchlist = (movieId) => {
    setWatchlist((prevWatchlist) => {
      if (prevWatchlist.includes(movieId)) {
        return prevWatchlist.filter((id) => id !== movieId);
      } else {
        return [...prevWatchlist, movieId];
      }
    });

    return (
      <div className="App">
        <div className="container">
          <Header />
          <Router>
            <nav className="navigation">
              <ul className="nav-links">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/watchlist">Watch List</Link>
                </li>
              </ul>
            </nav>
            <Routes>
              <Route
                path="/"
                element={
                  <MoviesGrid
                    movies={movies}
                    watchllist={watchllist}
                    toggleWatchlist={toggleWatchlist}
                  />
                }
              />
              <Route
                path="/watchlist"
                element={
                  <WatchList
                    movies={movies}
                    watchllist={watchllist}
                    toggleWatchlist={toggleWatchlist}
                  />
                }
              />
            </Routes>
          </Router>
        </div>
        <Footer />
      </div>
    );
  };
}

export default App;
