import React from "react";
import "./ViewMovie.css";

function ViewMovie({ movie, onGoBack }) {
  const handleGoBack = () => {
    onGoBack();
  };

  return (
    <>
      {movie && (
        <div className="ViewMovieContainer">
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
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          <p>Release Date: {movie.release_date}</p>
          <p>Movie Length: {movie.credits}</p>
          <p>Rating: {movie.vote_average}</p>
        </div>
      )}
      <button onClick={handleGoBack}>Go back</button>
    </>
  );
}

export default ViewMovie;
