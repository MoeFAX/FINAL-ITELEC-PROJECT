// Movies.js
import React from "react";

function Movies({ movieObj, setSelectedMovie }) {
  const handleClick = () => {
    setSelectedMovie(movieObj);
  };

  return (
    <div className="moviecard" onClick={handleClick}>
      <img
        src={
          movieObj.poster_path === null
            ? "pictures/duneposter.jpg"
            : "http://image.tmdb.org/t/p/w185" + movieObj.poster_path
        }
        className="img"
        alt={movieObj.original_title}
      ></img>
      <h3>{movieObj.title}</h3>
      <h4>{movieObj.release_date}</h4>
    </div>
  );
}

export default Movies;
