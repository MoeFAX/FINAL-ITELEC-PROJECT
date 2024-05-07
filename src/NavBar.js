import { FaCircleUser } from "react-icons/fa6";

function NavBar() {
  return (
    <div className="NavBar">
      <select className="Dropdown"></select>&nbsp;
      <input className="SearchBar" type="text" placeholder="Find a Movie." />
      &nbsp;
      <FaCircleUser size={25} />
    </div>
  );
}
export default NavBar;
