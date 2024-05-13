import React from "react";
import "./NavBar.css";
import SearchBar from "./SearchBar";
import { FaCircleUser } from "react-icons/fa6";

function NavBar({
  setLogin,
  setMovie,
  // smores,
  // setSmores,
  // burnt,
  // setBurnt,
  handleShowSmoresList,
  handleShowBurntList,
  handleShowHome,
}) {
  function handleLogout() {
    setLogin(false);
  }

  return (
    <div className="NavBar">
      <div className="left-section">
        <img src="pictures/navlogo.png" className="navlogo" alt="navlogo"></img>
        <h1 className="LogoLabel">HarshMallows</h1>
      </div>
      <div className="right-section">
        <div className="category">
          <img src="pictures/smores.png" className="smores" alt="smores"></img>
          <button onClick={handleShowHome}>Home</button>
          <img src="pictures/smores.png" className="smores" alt="smores"></img>
          <button onClick={handleShowSmoresList}>Smores</button>
          <img src="pictures/burnt.png" className="burnt" alt="burnt"></img>
          <button onClick={handleShowBurntList}>Burnt</button>
        </div>
        <select className="Dropdown"></select>&nbsp;
        <SearchBar setMovie={setMovie} />
        &nbsp;
        <div className="user-container">
          <FaCircleUser size={30} />
        </div>
        {/* <form className="LogoutForm" onSubmit={handleLogout}> */}
        <button className="LogoutButton" onClick={handleLogout}>
          LOGOUT
        </button>
        {/* </form> */}
      </div>
    </div>
  );
}

export default NavBar;
