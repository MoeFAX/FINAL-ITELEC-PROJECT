import "./Trending.css";
import { trendData } from "./TrendingData";
import TrendMovie from "./TrendMovie";

function Trending() {
  return (
    <div className="Trending">
      <p>TRENDING</p>
      <div className="TrendingList">
        {trendData.map((trend) => (
          <TrendMovie trendObj={trend} key={trend.no} />
        ))}
      </div>
    </div>
  );
}
export default Trending;
