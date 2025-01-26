import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState();

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 mx-16 ">
      <img
        className="w-50 cursor-pointer"
        src="/assets/images/logo.png"
        alt=""
      />

      <div className="flex flex-row items-center gap-4">
        <p className="text-lg font-semibold pb-1 border-b text-gray-800">
          Health providers
        </p>

        <button className="bg-gray-50 text-gray-800 text-center px-8 py-3 rounded-sm font-light border  border-grey-800 hover:cursor-pointer hover:scale-105 transition-all duration-300">
          Sign in
        </button>
      </div>
    </div>
  );
};

export default NavBar;
