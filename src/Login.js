import { useState } from "react";
import { users } from "./UserData";
import "./Login.css";

function Login({ setLogin }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

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

  const [visible, setVisible] = useState(false);

  const togglePassword = () => {
    setVisible(!visible);
  };

  return (
    <div className="LoginContainer">
      <div className="LoginCard">
        <img src="pictures/logo.png" className="logo" alt="logo"></img>
        <h1>Harshmallows</h1>
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
          <button className="LoginButton">LOGIN</button>
        </form>
        <button className="ShowHideButton" onClick={togglePassword}>
          {visible ? "Hide" : "Show"}
        </button>
      </div>
    </div>
  );
}

export default Login;
