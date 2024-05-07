import { FaCircleUser } from "react-icons/fa6";

function NavBar({ handleLogout }) {
  return (
    <div className="NavBar">
      <select className="Dropdown"></select>&nbsp;
      <input className="SearchBar" type="text" placeholder="Find a Movie." />
      &nbsp;
      <FaCircleUser size={25} />
      <form className="LogoutForm" onSubmit={handleLogout}>
        <button>LOGOUT</button>
      </form>
    </div>
  );
}
export default NavBar;
