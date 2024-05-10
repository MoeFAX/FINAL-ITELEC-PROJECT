import "./App.css";
import Login from "./Login";
import NavBar from "./NavBar";
import Trending from "./Trending";
import MovieList from "./MovieList";
import { useState } from "react";

function App() {
  const [login, setLogin] = useState(false);

  return (
    <div className="App">
      {login ? (
        /*Place Code for Logged in User here*/
        <div className="HomePage">
          <div className="NavBarContainer">
            <NavBar setLogin={setLogin} />
          </div>
          <div className="TrendContainer">
            <Trending />
          </div>
          <div className="MovContainer">
            <MovieList />
          </div>
        </div>
      ) : (
        <div>
          <Login setLogin={setLogin} />
        </div>
      )}
    </div>
  );
}

export default App;
