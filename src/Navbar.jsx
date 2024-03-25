// Navbar.js
import { NavLink } from "react-router-dom";

const Navbar = ({ user, onLogout }) => {
  return (
    <nav className="navbar">
      <h1>Ru Tubonge</h1>
      <div className="links">
        <NavLink to="/">Home</NavLink>
        {user ? (
          <NavLink onClick={onLogout}>Logout</NavLink>
        ) : (
          <NavLink to="/sign_in">Signin</NavLink>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
