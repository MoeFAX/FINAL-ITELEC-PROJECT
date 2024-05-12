// Movies.js
import React, { useState } from "react";

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
    <div 
    className="moviecard" 
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    onClick={handleClick}>
    
      <img
        src={
          movieObj.poster_path === null
            ? "pictures/duneposter.jpg"
            : "http://image.tmdb.org/t/p/w185" + movieObj.poster_path
        }
        className={`img ${isHovered ? "hovered" : ""}`}
        alt={movieObj.original_title}
      ></img>
      <div className={`overlay ${isHovered ? "visible" : ""}`}>
        <button className="button">Button 1</button>
        <button className="button">Button 2</button>
      </div>
      <h3>{movieObj.title}</h3>
      <h4>{movieObj.release_date}</h4>
    </div>
  );
}

export default Movies;
