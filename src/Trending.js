import "./Trending.css";
import { trendData } from "./TrendingData";
import TrendMovie from "./TrendMovie";

function Trending() {
  return (
    <div className="Trending">
      <h2>Trending</h2>
      <div className="TrendingList">
        {trendData.map((trend) => (
          <TrendMovie trendObj={trend} key={trend.no} />
        ))}
      </div>
    </div>
  );
}
export default Trending;
