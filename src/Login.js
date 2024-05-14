import { useState } from "react";
import { users } from "./UserData";
import "./Login.css";

function Login({ setLogin, setTrend, API_KEY }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  async function showTrending() {
    const trendingParameters = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMmI1NGU1YmQ0MmFkNGRjNGVjODdmZGE3MTY0MTA3ZCIsInN1YiI6IjY2M2U0MDY0ODdjYmM2ZjU0ZmRhYTU1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U9UMHWm2iPrWDJufE9d3kvcWkpkRFpINMbdsimV0YzQ",
      },
    };

    await fetch(
      "https://api.themoviedb.org/3/trending/movie/week?api_key=" + API_KEY,
      trendingParameters
    )
      .then((response) => response.json())
      .then((response) => setTrend(response.results.slice(0, 10)))
      .catch((err) => console.error(err));
  }

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
        <img src="pictures/newlogo.png" className="logo" alt="logo"></img>
        <h1>HarshMallows</h1>
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
          <button className="LoginButton" onClick={showTrending}>
            LOGIN
          </button>
        </form>
        <button className="ShowHideButton" onClick={togglePassword}>
          {visible ? "HIDE" : "SHOW"}
        </button>
      </div>
    </div>
  );
}

export default Login;
