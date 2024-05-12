import React from "react";
import TrendMovie from "./TrendMovie";
import "./Trending.css";

function Trending({ trend, onMovieClick }) {
  return (
    <div className="Trending">
      <p>TRENDING</p>
      <div className="TrendingList">
        {trend.map((trend) => (
          <TrendMovie
            trendObj={trend}
            key={trend.id}
            onClick={() => onMovieClick(trend)}
          />
        ))}
      </div>
    </div>
  );
}

export default Trending;
