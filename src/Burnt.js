import React, { useState } from "react";
import { SiThemoviedatabase } from "react-icons/si";

function Burnt({ movieObj, setSelectedMovie }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="burnt"
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
    </div>
  );
}

export default Burnt;
