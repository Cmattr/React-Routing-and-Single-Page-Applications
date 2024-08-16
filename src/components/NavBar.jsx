import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? 'active' : undefined)}
      >
        Home
      </NavLink>
      <NavLink
        to="/Browse-Characters"
        className={({ isActive }) => (isActive ? 'active' : undefined)}
      >
        Browse Characters
      </NavLink>
      <NavLink
        to="/Character-Details"
        className={({ isActive }) => (isActive ? 'active' : undefined)}
      >

        Character Details
      </NavLink>
      <NavLink
        to="/Comics"
        className={({ isActive }) => (isActive ? 'active' : undefined)}
      >


        Comics
      </NavLink>
    </nav>
  );
};

export default NavBar;
