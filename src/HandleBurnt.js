function HandleBurnt({ home, setHome, smores, setSmores, burnt, setBurnt }) {
  function handleBurnt(e) {
    home = false;
    smores = false;
    burnt = true;

    console.log(home, smores, burnt);
  }

  return (
    <div>
      {/* <form className="BurntForm" onSubmit={handleBurnt}> */}
      <button className="BurntButton" onClick={handleBurnt}>
        Burnt
      </button>
      {/* </form> */}
    </div>
  );
}

export default HandleBurnt;
