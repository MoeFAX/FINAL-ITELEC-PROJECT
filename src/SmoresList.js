import "./SmoresList.css";
import Smores from "./Smores";

function SmoresList({ smores, setSelectedMovie }) {
  return (
    <div className="SmoresContainer">
      <hr />
      <p>S'MORES</p>
      <div className="SmoresList">
        {smores.map((movie) => (
          <Smores
            movieObj={movie}
            setSelectedMovie={setSelectedMovie}
            key={movie.id}
          />
        ))}
      </div>
    </div>
  );
}

export default SmoresList;
