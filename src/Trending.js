import "./Trending.css";
//import { trendData } from "./TrendingData";
import TrendMovie from "./TrendMovie";
//import { useState } from "react";

function Trending({ trend }) {
  return (
    <div className="Trending">
      <p>TRENDING</p>
      <div className="TrendingList">
        {trend.map((trend) => (
          <TrendMovie trendObj={trend} key={trend.id} />
        ))}
      </div>
    </div>
  );
}
export default Trending;
