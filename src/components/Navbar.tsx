import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="w-full p-4 bg-white shadow-md flex justify-between items-center">
        <NavLink to="/" className="text-xl font-bold text-gray-800">
          My Dashboard
        </NavLink>
        <div>
          <NavLink to="/" className="mr-4 text-gray-600 hover:text-gray-800">
            Home
          </NavLink>
          <NavLink
            to="/dashboard"
            className="mr-4 text-gray-600 hover:text-gray-800"
          >
            Dashboard
          </NavLink>
          {/* <NavLink to="/contact" className="text-gray-600 hover:text-gray-800">
            Contact
          </NavLink> */}
          <NavLink to="/about" className="text-gray-600 hover:text-gray-800">
            About
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
