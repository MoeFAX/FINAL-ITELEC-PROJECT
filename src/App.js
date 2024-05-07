import "./App.css";
import Login from "./Login";
import NavBar from "./NavBar";
import { useState } from "react";

function App() {
  const [login, setLogin] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  const users = [
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
  ];

  function handleSubmit(e) {
    //Prevents Page Reload
    e.preventDefault();

    //form validation: if no input, return nothing
    if (!name || !password) {
      window.alert("All fields must be filled up.");
    } else if (users.some((users) => users.name === name)) {
      if (users.some((users) => users.password === password)) {
        setLogin(true);
      } else {
        window.alert("Invalid Credentials!");
        setName("");
        setPassword("");
      }
    } else {
      window.alert("Invalid Credentials!");
      setName("");
      setPassword("");
    }
  }

  const togglePassword = () => {
    setVisible(!visible);
  };

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
              type={visible ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="Login">LOGIN</button>
          </form>
          <button onClick={togglePassword}>{visible ? "Hide" : "Show"}</button>
        </div>
      )}
    </div>
  );
}

export default App;
