import React from "react";
import "./NavBar.css";
import SearchBar from "./SearchBar";
import { FaCircleUser } from "react-icons/fa6";

function NavBar({
  setLogin,
  setMovie,
  handleShowSmoresList,
  handleShowBurntList,
  handleShowHome,
  setQueryStatus,
  sortBy,
  setSortBy,
  setShowHome,
}) {
  function handleLogout() {
    setLogin(false);
  }

  return (
    <div className="NavBar">
      <div className="left-section">
        <img
          src="pictures/newlogologin.png"
          className="navlogo"
          alt="navlogo"
        ></img>
        <h1 className="LogoLabel">HarshMallows</h1>
      </div>
      <div className="right-section">
        <div className="category">
          <img src="pictures/house.png" className="home" alt="smores"></img>
          <button className={"homebtn"} onClick={handleShowHome}>
            HOME
          </button>
          <img src="pictures/smores.png" className="smores" alt="smores"></img>
          <button className={"smoresbtn"} onClick={handleShowSmoresList}>
            S'MORES
          </button>
          <img src="pictures/burnt.png" className="burnt" alt="burnt"></img>
          <button className={"burntbtn"} onClick={handleShowBurntList}>
            BURNT
          </button>
        </div>
        <div className="sortDiv">
          <select
            className="sortDrop"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value={"Top Results"}>Top Results</option>
            <option value={"Alphabetical"}>Alphabetical</option>
            <option value={"Top Rated"}>Top Rated</option>
            <option value={"Latest"}>Latest</option>
            <option value={"Oldest"}>Oldest</option>
          </select>
        </div>
        <SearchBar
          setMovie={setMovie}
          setQueryStatus={setQueryStatus}
          setShowHome={setShowHome}
        />
        <div className="user-container">
          <FaCircleUser size={30} color="#582f07" />
        </div>
        <form className="LogoutForm" onSubmit={handleLogout}>
          <button className="LogoutButton" onClick={handleLogout}>
            LOGOUT
          </button>
        </form>
      </div>
    </div>
  );
}

export default NavBar;
