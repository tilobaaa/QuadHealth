import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [token, setToken] = useState();

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400 ">
      <img
        className="w-44 cursor-pointer"
        src="/assets/images/logo.png"
        alt=""
      />
      <ul className="hidden md:flex items-start gap-3 font-medium">
        <NavLink to="/">
          <li className="py-1 ">Home</li>
          <hr
            className=" border-none outline-none h-0.5 w-3/5 m-auto bg-primary hidden
          "
          />
        </NavLink>
        <NavLink to="/doctors">
          <li className="py-1 ">All Doctors</li>
          <hr className="border-none outline-none h-0.5 w-3/5 m-auto bg-primary hidden" />
        </NavLink>
        <NavLink to="/about">
          <li className="py-1 ">About</li>
          <hr className="border-none outline-none h-0.5 w-3/5 m-auto bg-primary hidden" />
        </NavLink>
        <NavLink to="/contact">
          <li className="py-1 ">Contact</li>
          <hr className="border-none outline-none h-0.5 w-3/5 m-auto bg-primary hidden" />
        </NavLink>
      </ul>
      <button className="bg-primary-500 text-gray-50 px-6 py-2 rounded-sm font-light hidden sm:block hover:cursor-pointer hover:scale-105 transition-all duration-300">
        Create account
      </button>
    </div>
  );
};

export default NavBar;
