function TrendMovie(props) {
  return (
    <div className="trendcard">
      <img
        src={props.trendObj.image}
        className="img"
        alt={props.trendObj.imgtxt}
      ></img>
      <h3>{props.trendObj.movieTitle}</h3>
      <h4>{props.trendObj.rating}</h4>
    </div>
  );
}

export default TrendMovie;
