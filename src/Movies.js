function Movies(props) {
  return (
    <div className="moviecard">
      <img
        src={
          props.movieObj.poster_path === null
            ? "pictures/duneposter.jpg" //Replace with a Default Image
            : "http://image.tmdb.org/t/p/w185" + props.movieObj.poster_path
        }
        className="img"
        alt={props.movieObj.original_title}
      ></img>
      <h3>{props.movieObj.title}</h3>
      <h4>{props.movieObj.release_date}</h4>
    </div>
  );
}
export default Movies;
