import Movies from "./Movies";
import { trendData } from "./TrendingData";
import TrendMovie from "./TrendMovie";
import "./MovieList.css";
function MovieList() {
  return (
    <div className="MovieContainer">
      <p>MOVIES</p>
      <div className="MovieList">
        {trendData.map((movie) => (
          <Movies movieObj={movie} key={movie.no} />
        ))}
      </div>
    </div>
  );
}
export default MovieList;
