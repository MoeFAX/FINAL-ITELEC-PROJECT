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
  const [showHome, setShowHome] = useState(true);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleGoBack = () => {
    setSelectedMovie(null);
  };

  const addToSmores = (movie) => {
    const isMovieInSmores = smores.some(
      (smoresMovie) => smoresMovie.id === movie.id
    );
    const isMovieInBurnt = burnt.some(
      (burntMovie) => burntMovie.id === movie.id
    );
    const id = movie.id;
    if (!isMovieInSmores && isMovieInBurnt) {
      setBurnt(burnt.filter((movie) => movie.id !== id));
      setSmores([...smores, movie]);
      //console.log(smores);
    } else if (isMovieInSmores && !isMovieInBurnt) {
      console.log(smores);
    } else {
      setSmores([...smores, movie]);
      console.log(smores);
    }
  };

  const addToBurnt = (movie) => {
    const isMovieInBurnt = burnt.some(
      (burntMovie) => burntMovie.id === movie.id
    );
    const isMovieInSmores = smores.some(
      (smoresMovie) => smoresMovie.id === movie.id
    );
    const id = movie.id;
    if (!isMovieInBurnt && isMovieInSmores) {
      setSmores(smores.filter((movie) => movie.id !== id));
      setBurnt([...burnt, movie]);
      //console.log(burnt);
    } else if (isMovieInBurnt && !isMovieInSmores) {
      console.log(burnt);
    } else {
      setBurnt([...burnt, movie]);
      console.log(burnt);
    }
  };

  const handleShowSmoresList = () => {
    setShowSmoresList(true);
    setShowBurntList(false);
    setShowHome(false);
    console.log(showSmoresList, showBurntList, showHome);
  };

  const handleShowBurntList = () => {
    setShowSmoresList(false);
    setShowBurntList(true);
    setShowHome(false);
    console.log(showSmoresList, showBurntList, showHome);
  };

  const handleShowHome = () => {
    setShowSmoresList(false);
    setShowBurntList(false);
    setShowHome(true);
    console.log(showSmoresList, showBurntList, showHome);
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
              handleShowHome={handleShowHome}
            />
            <ViewMovie
              movie={selectedMovie}
              onGoBack={handleGoBack}
              addToSmores={addToSmores}
              addToBurnt={addToBurnt}
            />
            <div className="MovieListBelow">
              {showHome ? (
                <MovieList movie={movie} setSelectedMovie={setSelectedMovie} />
              ) : showSmoresList ? (
                <SmoresList
                  smores={smores}
                  setSelectedMovie={setSelectedMovie}
                />
              ) : showBurntList ? (
                <BurntList burnt={burnt} setSelectedMovie={setSelectedMovie} />
              ) : (
                ""
              )}
            </div>
          </>
        ) : (
          <div className="HomePage">
            <div className="NavBarContainer">
              <NavBar
                setLogin={setLogin}
                setMovie={setMovie}
                smores={smores}
                setSmores={setSmores}
                burnt={burnt}
                setBurnt={setBurnt}
                handleShowSmoresList={handleShowSmoresList}
                handleShowBurntList={handleShowBurntList}
                handleShowHome={handleShowHome}
              />
            </div>
            <div className="TrendContainer">
              <Trending trend={trend} onMovieClick={handleMovieClick} />
            </div>

            <div className="MovContainer">
              {showHome ? (
                <MovieList movie={movie} setSelectedMovie={setSelectedMovie} />
              ) : showSmoresList ? (
                <SmoresList smores={smores} />
              ) : showBurntList ? (
                <BurntList burnt={burnt} />
              ) : (
                ""
              )}
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
