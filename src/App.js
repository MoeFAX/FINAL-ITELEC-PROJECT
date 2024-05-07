import "./App.css";
import Login from "./Login";
import NavBar from "./NavBar";
import { useState } from "react";

function App() {
  const [login, setLogin] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Mark Calina",
      password: "Mac123!",
    },
    {
      id: 2,
      name: "Allain Espina",
      password: "Aleyn123!",
    },
    {
      id: 3,
      name: "Elpidio Monteclaro",
      password: "Ej123!",
    },
    {
      id: 4,
      name: "Josh Reyes",
      password: "Audwin123!",
    },
    {
      id: 5,
      name: "Ezrah San Agustin",
      password: "Ez123!",
    },
  ]);

  function handleSubmit(e) {
    //Prevents Page Reload
    e.preventDefault();

    //form validation: if no input, return nothing
    if (!name || !password) return;

    if (name === "Mark Calina" && password === "Mac123!") {
      setLogin(true);
    } else if (name === "Allain Espina" && password === "Aleyn123!") {
      setLogin(true);
    } else if (name === "Elpidio Monteclaro" && password === "Ej123!") {
      setLogin(true);
    } else if (name === "Josh Reyes" && password === "Audwin123!") {
      setLogin(true);
    } else if (name === "Ezrah San Agustin" && password === "Ez123!") {
      setLogin(true);
    } else {
      window.alert("Invalid Credentials!");
    }
  }

  console.log(users[1]);

  function handleLogout() {
    setLogin(false);
  }

  return (
    <div className="App">
      {login ? (
        /*Place Code for Logged in User here*/
        <NavBar onLogout={handleLogout}></NavBar>
      ) : (
        <div className="Login">
          <form className="LoginForm" onSubmit={handleSubmit}>
            <label>Username</label>
            <input
              className="nameInput"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label>Password</label>
            <input
              className="passwordInput"
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="Login">LOGIN</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;
