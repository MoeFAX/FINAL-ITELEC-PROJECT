function HandleHome({ home, setHome, smores, setSmores, burnt, setBurnt }) {
  function handleHome() {
    home = true;
    smores = false;
    burnt = false;

    console.log(home, smores, burnt);
  }

  return (
    <div>
      <button className="HomeButton" onClick={handleHome}>
        Home
      </button>
    </div>
  );
}

export default HandleHome;
