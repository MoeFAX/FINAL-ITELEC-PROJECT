import { FaCircleUser } from "react-icons/fa6";
import "./NavBar.css";
import SearchBar from "./SearchBar";
import HandleHome from "./HandleHome";
import HandleSmores from "./HandleSmores";
import HandleBurnt from "./HandleBurnt";
import HandleLogout from "./HandleLogout";

function NavBar({ setLogin, setMovie, smores, setSmores, burnt, setBurnt }) {
  function handleLogout() {
    setLogin(false);
  }

  function handleSmores() {
    if (smores === false) {
      setBurnt(false);
      setSmores(true);
    }
  }

  function handleBurnt() {
    if (burnt === false) {
      setSmores(false);
      setBurnt(true);
    }
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
          {/* <h2 className="LogoLabel">S'MORES</h2> */}
          <button onClick={() => handleSmores()}>Smores</button>
          <img src="pictures/burnt.png" className="burnt" alt="burnt"></img>
          {/* <h2 className="LogoLabel">BURNT</h2> */}
          <button onClick={() => handleBurnt()}>Burnt</button>
        </div>
        <select className="Dropdown"></select>&nbsp;
        <SearchBar setMovie={setMovie} />
        &nbsp;
        <div className="user-container">
          <FaCircleUser size={30} />
        </div>
        {/* <form className="LogoutForm" onSubmit={handleLogout}>
          <button className="LogoutButton">LOGOUT</button>
        </form> */}
        <HandleLogout handleLogout={handleLogout} />
      </div>
    </div>
  );
}
export default NavBar;
