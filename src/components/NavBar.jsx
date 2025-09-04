// import React from "react";
// import { NavLink } from "react-router-dom";
// import "../styles/Navbar.css";

// function Navbar({ theme, toggleTheme }) {
//   return (
//     <div className="navbar">
//       {/* Left side: Logo */}
//       <div className="nav-left">
//         <div className="logo-text">MyApp</div>
//       </div>

//       {/* Center: Navigation links */}
//       <div className="nav-center">
//         <div className="nav-links">
//           <NavLink to="/" end>
//             Dashboard
//           </NavLink>
//           <NavLink to="/summary">Summary</NavLink>
//           <NavLink to="/transactions">Transactions</NavLink>
//           <NavLink to="/counter">Counter</NavLink>
//         </div>
//       </div>

//       {/* Right side: Theme toggle */}
//       <button className="theme-toggle" onClick={toggleTheme}>
//         Switch to {theme === "light" ? "Dark" : "Light"} Theme
//       </button>
//     </div>
//   );
// }

// export default Navbar;

import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar({ theme, toggleTheme }) {
  return (
    <div className="navbar">
      {/* Left side: Logo */}
      <div className="nav-left">
        <div className="logo-text">MyApp</div>
      </div>

      {/* Center nav links */}
      <div className="nav-center">
        <div className="nav-links">
          <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
            Dashboard
          </NavLink>
          <NavLink to="/summary" className={({ isActive }) => (isActive ? "active" : "")}>
            Summary
          </NavLink>
          <NavLink to="/transactions" className={({ isActive }) => (isActive ? "active" : "")}>
            Transactions
          </NavLink>
          <NavLink to="/counter" className={({ isActive }) => (isActive ? "active" : "")}>
            Counter
          </NavLink>
        </div>
      </div>

      {/* Right side: Theme toggle */}
      <button className="theme-toggle" onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Theme
      </button>
    </div>
  );
}

export default Navbar;



