function HandleLogout({ handleLogout }) {
  return (
    <div>
      <button className="LogoutButton" onClick={handleLogout}>
        LOGOUT
      </button>
    </div>
  );
}

export default HandleLogout;
