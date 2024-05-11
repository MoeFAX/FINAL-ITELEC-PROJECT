import Movies from "./Movies";
import "./MovieList.css";

function MovieList({ movie }) {
  return (
    <div className="MovieContainer">
      <p>MOVIES</p>
      <div className="MovieList">
        {movie.map((movie) => (
          <Movies movieObj={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}
export default MovieList;
