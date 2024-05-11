import "./App.css";
import Login from "./Login";
import NavBar from "./NavBar";
import Trending from "./Trending";
import MovieList from "./MovieList";
import { useState } from "react";

const API_KEY = "a2b54e5bd42ad4dc4ec87fda7164107d";

function App() {
  const [login, setLogin] = useState(false);
  const [movie, setMovie] = useState([]);
  const [trend, setTrend] = useState([]);

  return (
    <div className="App">
      {login ? (
        /*Place Code for Logged in User here*/
        <div className="HomePage">
          <div className="NavBarContainer">
            <NavBar setLogin={setLogin} setMovie={setMovie} movie={movie} />
          </div>
          <div className="TrendContainer">
            <Trending trend={trend} />
          </div>
          <div className="MovContainer">
            <MovieList movie={movie} />
          </div>
        </div>
      ) : (
        <div>
          <Login setLogin={setLogin} setTrend={setTrend} apiKey={API_KEY} />
        </div>
      )}
    </div>
  );
}

export default App;
