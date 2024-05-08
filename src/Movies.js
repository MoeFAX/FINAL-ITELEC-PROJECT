function Movies(props) {
  return (
    <div className="moviecard">
      <img
        src={props.movieObj.image}
        className="img"
        alt={props.movieObj.imgtxt}
      ></img>
      <h3>{props.movieObj.movieTitle}</h3>
      <h4>{props.movieObj.rating}</h4>
    </div>
  );
}
export default Movies;
