import "./App.css";
import Login from "./Login";
import NavBar from "./NavBar";
import { useState } from "react";

function App() {
  const [login, setLogin] = useState(false);

  return (
    <div className="App">
      {login ? (
        /*Place Code for Logged in User here*/

        <NavBar setLogin={setLogin}></NavBar>
      ) : (
        <Login setLogin={setLogin} />
      )}
    </div>
  );
}

export default App;
