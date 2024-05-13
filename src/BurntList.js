import "./BurntList.css"
import Burnt from "./Burnt";

function BurntList({ burnt, setSelectedMovie }) {
  return (
    <div className="BurntContainer">
      <hr />
      <p>BURNT</p>
      <div className="BurntList">
        {burnt.map((movie) => (
          <Burnt
            movieObj={movie}
            setSelectedMovie={setSelectedMovie}
            key={movie.id}
          />
        ))}
      </div>
    </div>
  );
}

export default BurntList;
