import React, { useState } from "react";
import Login from "./Login";
import NavBar from "./NavBar";
import Trending from "./Trending";
import MovieList from "./MovieList";
import ViewMovie from "./ViewMovie";

const API_KEY = process.env.REACT_APP_API;

function App() {
  const [login, setLogin] = useState(false);
  const [movie, setMovie] = useState([]);
  const [trend, setTrend] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleGoBack = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="App">
      {login ? (
        selectedMovie ? (
          <ViewMovie movie={selectedMovie} onGoBack={handleGoBack} />
        ) : (
          <div className="HomePage">
            <div className="NavBarContainer">
              <NavBar setLogin={setLogin} setMovie={setMovie} movie={movie} />
            </div>
            <div className="TrendContainer">
              <Trending trend={trend} onMovieClick={handleMovieClick} />
            </div>

            <div className="MovContainer">
              <MovieList movie={movie} setSelectedMovie={setSelectedMovie} />
            </div>
          </div>
        )
      ) : (
        <Login setLogin={setLogin} setTrend={setTrend} apiKey={API_KEY} />
      )}
    </div>
  );
}

export default App;
