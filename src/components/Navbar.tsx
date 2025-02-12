import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="p-4 bg-amber-700 text-white flex gap-4">
        <NavLink to="/">Home</NavLink>
        <NavLink to="dashboard">Dashboard</NavLink>
        <NavLink to="contact">Contact</NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
