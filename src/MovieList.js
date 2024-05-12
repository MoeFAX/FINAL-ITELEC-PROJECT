import Movies from "./Movies";
import "./MovieList.css";

function MovieList({ movie, setSelectedMovie }) {
  return (
    <div className="MovieContainer">
      <p>MOVIES</p>
      <div className="MovieList">
        {movie.map((movie) => (
          <Movies
            movieObj={movie}
            setSelectedMovie={setSelectedMovie}
            key={movie.id}
          />
        ))}
      </div>
    </div>
  );
}
export default MovieList;
