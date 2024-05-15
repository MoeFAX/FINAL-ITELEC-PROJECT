import React from "react";
import "./ViewMovie.css";
import { SiThemoviedatabase } from "react-icons/si";

function ViewMovie({
  movie,
  onGoBack,
  addToSmores,
  addToBurnt,
  RemoveFromLists,
}) {
  const handleGoBack = () => {
    onGoBack();
  };

  const handleRemove = () => {
    RemoveFromLists(movie);
  };

  const handleAddToSmores = () => {
    addToSmores(movie);
  };

  const handleAddToBurnt = () => {
    addToBurnt(movie);
  };

  let relDate = movie.release_date;
  let date = new Date(relDate);

  return (
    <>
      {movie && (
        <div className="ViewMovieContainer">
          <div className="MovieColumn1">
            <div className="MovieImage">
              {movie.poster_path === null ? (
                <div className="PosterPlaceholder">
                  <SiThemoviedatabase size={100} />
                </div>
              ) : (
                <img
                  src={"http://image.tmdb.org/t/p/w185" + movie.poster_path}
                  className="img"
                  alt={movie.original_title}
                />
              )}
            </div>
          </div>
          <div className="MovieColumn2">
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
            <div className="Divider"></div>
            <p> Release Date: {new Intl.DateTimeFormat().format(date)} </p>
            <p> Popularity: {movie.popularity}</p>
            <p> Rating: {movie.vote_average}/10</p>
            <div className="Divider"></div>
            <div className="buttons">
              <button className="Favorites" onClick={handleAddToSmores}>
                ADD TO S'MORES
              </button>
              <button className="Burnt" onClick={handleAddToBurnt}>
                ADD TO BURNT
              </button>
              <div className="ResetReturnContainer">
                <button className="Reset" onClick={handleRemove}>
                  REMOVE
                </button>
                <button className="Return" onClick={handleGoBack}>
                  RETURN
                </button>
              </div>
            </div>
          </div>
          <div className="MovieColumn3"></div>
        </div>
      )}
    </>
  );
}

export default ViewMovie;
