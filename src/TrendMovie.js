function TrendMovie(props) {
  return (
    <div className="trendcard">
      <img
        src={
          props.trendObj.poster_path === null
            ? "pictures/duneposter.jpg" //Replace with a Default Image
            : "http://image.tmdb.org/t/p/w185" + props.trendObj.poster_path
        }
        className="img"
        alt={props.trendObj.original_title}
      ></img>
      <h3>{props.trendObj.title}</h3>
      <h4>{props.trendObj.release_date}</h4>
    </div>
  );
}

export default TrendMovie;
