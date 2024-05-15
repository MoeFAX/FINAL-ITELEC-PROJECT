import Movies from "./Movies";
import "./MovieList.css";

function MovieList({ movie, setSelectedMovie }) {
  return (
    <div className="MovieContainer">
      <hr></hr>
      <p>Search Results</p>
      <div className="MovieList">
        {movie.map((movies) => (
          <Movies
            movieObj={movies}
            setSelectedMovie={setSelectedMovie}
            key={movies.id}
          />
        ))}
      </div>
    </div>
  );
}
export default MovieList;
