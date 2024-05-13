import React from "react";
import "./NavBar.css";
import { FaCircleUser } from "react-icons/fa6";

function NavBar({
  setLogin,
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
        <img src="pictures/newlogologin.png" className="navlogo" alt="navlogo"></img>
        <h1 className="LogoLabel">HarshMallows</h1>
      </div>
      <div className="right-section">
        <div className="category">
          <img src="pictures/house.png" className="home" alt="smores"></img>
          <button className={"homebtn"} onClick={handleShowHome}>Home</button>
          <img src="pictures/smores.png" className="smores" alt="smores"></img>
          <button className={"smoresbtn"} onClick={handleShowSmoresList}>Smores</button>
          <img src="pictures/burnt.png" className="burnt" alt="burnt"></img>
          <button className={"burntbtn"}onClick={handleShowBurntList}>Burnt</button>
        </div>
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
