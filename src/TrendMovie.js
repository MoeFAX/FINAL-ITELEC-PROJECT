import React from "react";

function TrendMovie({ trendObj, onClick }) {
  if (!trendObj) {
    return null;
  }

  const handleClick = () => {
    onClick(trendObj);
  };

  return (
    <div className="trendcard" onClick={handleClick}>
      <img
        src={
          trendObj.poster_path
            ? "http://image.tmdb.org/t/p/w185" + trendObj.poster_path
            : "pictures/duneposter.jpg" //Replace with a Default Image
        }
        className="img"
        alt={trendObj.original_title}
      ></img>
      <h3>{trendObj.title}</h3>
      <h4>{trendObj.release_date}</h4>
    </div>
  );
}

export default TrendMovie;
