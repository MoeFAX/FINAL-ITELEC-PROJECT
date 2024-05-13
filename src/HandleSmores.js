function HandleSmores({ home, setHome, smores, setSmores, burnt, setBurnt }) {
  function handleSmores() {
    home = false;
    smores = true;
    burnt = false;

    console.log(home, smores, burnt);
  }

  return (
    <div>
      <button className="SmoresButton" onClick={handleSmores}>
        S'mores
      </button>
    </div>
  );
}

export default HandleSmores;
