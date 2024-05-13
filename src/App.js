import React, { useState } from "react";
import Login from "./Login";
import NavBar from "./NavBar";
import Trending from "./Trending";
import MovieList from "./MovieList";
import ViewMovie from "./ViewMovie";
import SmoresList from "./SmoresList";
import BurntList from "./BurntList";
import "./App.css";
const API_KEY = process.env.REACT_APP_API;

function App() {
  const [login, setLogin] = useState(false);
  const [movie, setMovie] = useState([]);
  const [trend, setTrend] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [smores, setSmores] = useState([]);
  const [burnt, setBurnt] = useState([]);
  const [showSmoresList, setShowSmoresList] = useState(false);
  const [showBurntList, setShowBurntList] = useState(false);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleGoBack = () => {
    setSelectedMovie(null);
  };

  const addToSmores = (movie) => {
    setSmores([...smores, movie]);
  };

  const addToBurnt = (movie) => {
    setBurnt([...burnt, movie]);
  };

  const handleShowSmoresList = () => {
    setShowSmoresList(true);
    setShowBurntList(false);
  };

  const handleShowBurntList = () => {
    setShowSmoresList(false);
    setShowBurntList(true);
  };

  return (
    <div className="App">
      {login ? (
        selectedMovie ? (
          <>
            <NavBar
              setLogin={setLogin}
              setMovie={setMovie}
              smores={smores}
              setSmores={setSmores}
              burnt={burnt}
              setBurnt={setBurnt}
              handleShowSmoresList={handleShowSmoresList}
              handleShowBurntList={handleShowBurntList}
            />
            <ViewMovie
              movie={selectedMovie}
              onGoBack={handleGoBack}
              addToSmores={addToSmores}
              addToBurnt={addToBurnt}
            />
            <div className="MovieListBelow">
              {/* <MovieList movie={movie} setSelectedMovie={setSelectedMovie} /> */}
              <SmoresList smores={smores} />
            </div>
          </>
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
      {showSmoresList && (
        <div className="SmorContain">
          <SmoresList smores={smores} />
        </div>
      )}
      {showBurntList && <BurntList burnt={burnt} />}
    </div>
  );
}

export default App;
