import React from "react";
import "./ViewMovie.css";

function ViewMovie({ movie, onGoBack, addToSmores, addToBurnt }) {
  const handleGoBack = () => {
    onGoBack();
  };

  const handleAddToSmores = () => {
    addToSmores(movie);
  };

  const handleAddToBurnt = () => {
    addToBurnt(movie);
  };

  return (
    <>
      <button className="Return" onClick={handleGoBack}>
        Return
      </button>
      {movie && (
        <div className="ViewMovieContainer">
          <div className="MovieColumn1">
            <div className="MovieImage">
              <img
                src={
                  movie.poster_path === null
                    ? "pictures/duneposter.jpg"
                    : "http://image.tmdb.org/t/p/w185" + movie.poster_path
                }
                alt={movie.original_title}
              />
            </div>
          </div>
          <div className="MovieColumn2">
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
            <div className="Divider"></div>
            <p> Release Date: {movie.release_date} </p>
            <p> Popularity: {movie.popularity}</p>
            <p> Rating: {movie.vote_average}/10</p>
            <div className="Divider"></div>
            <div className="buttons">
              <button className="Favorites" onClick={handleAddToSmores}>
                Add to Smores
              </button>{" "}
              <button className="Burnt" onClick={handleAddToBurnt}>
                Add to Burnt
              </button>
            </div>
          </div>
          <div className="MovieColumn3"></div>
        </div>
      )}
    </>
  );
}

export default ViewMovie;
