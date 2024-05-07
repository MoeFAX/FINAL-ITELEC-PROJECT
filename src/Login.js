// import { useState } from "react";

// function Login({ name, password }) {
//   function handleSubmit(e) {
//     //Prevents Page Reload
//     e.preventDefault();

//     //form validation: if no input, return nothing
//     if (!name || !password) return;
//     const loggedIn = { name, password };
//   }

//   return (
//     <div className="Login">
//       <form className="MainForm" onSubmit={handleSubmit}>
//         <input
//           className="nameInput"
//           type="text"
//           placeholder="Username"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <input
//           className="passwordInput"
//           type="text"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button className="Submit">LOGIN</button>
//       </form>
//     </div>
//   );
// }

// export default Login;
