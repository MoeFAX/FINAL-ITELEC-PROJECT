import React from "react";
import Smores from "./Smores";

function SmoresList({ smores, setSelectedMovie }) {
  return (
    <div className="SmoresContainer">
      <hr />
      <p>SMORES</p>
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
