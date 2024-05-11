import { FaCircleUser } from "react-icons/fa6";
import "./NavBar.css";
import SearchBar from "./SearchBar";

function NavBar({ setLogin, setMovie }) {
  function handleLogout() {
    setLogin(false);
  }

  return (
    <div className="NavBar">
      <div className="left-section">
        <img src="pictures/navlogo.png" className="navlogo" alt="navlogo"></img>
        <h1 className="LogoLabel">HARSHMALLOWS</h1>
      </div>
      <div className="right-section">
        <div className="category">
          <img src="pictures/smores.png" className="smores" alt="smores"></img>
          <h2 className="LogoLabel">S'MORES</h2>
          <img src="pictures/burnt.png" className="burnt" alt="burnt"></img>
          <h2 className="LogoLabel">BURNT</h2>
        </div>
        <select className="Dropdown"></select>&nbsp;
        <SearchBar setMovie={setMovie} />
        &nbsp;
        <div className="user-container">
          <FaCircleUser size={30} />
        </div>
        <form className="LogoutForm" onSubmit={handleLogout}>
          <button className="LogoutButton">LOGOUT</button>
        </form>
      </div>
    </div>
  );
}
export default NavBar;
