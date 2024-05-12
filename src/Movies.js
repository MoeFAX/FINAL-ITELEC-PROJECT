import React, { useState } from "react";
import { SiThemoviedatabase } from "react-icons/si";

function MovieCard({ movieObj, setSelectedMovie }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    setSelectedMovie(movieObj);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const getTitle = () => {
    if (movieObj.title.length > 15 && isHovered) {
      return (
        <marquee direction="left" behavior="scroll" scrollamount="1">
          {movieObj.title}
        </marquee>
      );
    }
    return movieObj.title.length > 15
      ? movieObj.title.slice(0, 15) + "..."
      : movieObj.title;
  };

  return (
    <div
      className="moviecard"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
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
      <h3>{getTitle()}</h3>
      <h4>Rating : {movieObj.vote_average}/10</h4>
    </div>
  );
}

export default MovieCard;
