import React, { useState } from "react";
import { SiThemoviedatabase } from "react-icons/si";

function Smores({ movieObj, setSelectedMovie }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    handleToTop();
    setSelectedMovie(movieObj);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleToTop = () => {
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const getTitle = () => {
    if (movieObj.title.length > 15 && isHovered) {
      return (
        <marquee direction="left" behavior="scroll" scrollamount="5">
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
      className="smorescard"
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
        />
      )}
      <h3>{getTitle()}</h3>
      <h4>Rating : {movieObj.vote_average}/10</h4>
    </div>
  );
}

export default Smores;
