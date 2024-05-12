// Movies.js
import React, { useState } from "react";
import React from "react";
import { SiThemoviedatabase } from "react-icons/si";

function Movies({ movieObj, setSelectedMovie }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    setSelectedMovie(movieObj);
  };

  return (
    <div className="moviecard" onClick={handleClick}>
      {movieObj.poster_path === null ? (
        <div className="PosterPlaceholder">
          <SiThemoviedatabase size={100} />
        </div>
      ) : (
        <img
          src={"http://image.tmdb.org/t/p/w185" + movieObj.poster_path}
          className="img"
          alt={movieObj.original_title}
        ></img>
      )}
      <h3>{movieObj.title}</h3>
      <h4>Rating : {movieObj.vote_average}</h4>
    </div>
  );
}

export default Movies;
