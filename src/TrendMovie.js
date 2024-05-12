import React, { useState } from "react";
import "./Trending.css";

function TrendMovie({ trendObj, onClick }) {
  const [isHovered, setIsHovered] = useState(false);

  if (!trendObj) {
    return null;
  }

  const handleClick = () => {
    onClick(trendObj);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const getTitle = () => {
    if (trendObj.title.length > 15 && isHovered) {
      return (
        <marquee direction="left" behavior="scroll" scrollamount="1000">
          {trendObj.title}
        </marquee>
      );
    }
    return trendObj.title.length > 15
      ? trendObj.title.slice(0, 15) + "..."
      : trendObj.title;
  };

  return (
    <div
      className="trendcard"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={
          trendObj.poster_path
            ? "http://image.tmdb.org/t/p/w185" + trendObj.poster_path
            : "pictures/duneposter.jpg" //Replace with a Default Image
        }
        className="img"
        alt={trendObj.original_title}
      ></img>
      <h3>{getTitle()}</h3>
      <h4>Rating : {trendObj.vote_average}/10</h4>
    </div>
  );
}

export default TrendMovie;
