// import { NavLink, Link } from "react-router-dom";
// import { useState } from "react";

import { useState } from "react";

const NavBar = () => {
  // const [showMenu, setShowMenu] = useState(false);
  // const [token, setToken] = useState();
  const [user, setUser] = useState(true);
  return (
    <div className="py-6 px-3.5 sm:p-6 flex items-center justify-between text-sm sm:py-4 sm:mb-5 sm:px-16 bg-white w-full">
      <img
        className="w-40 sm:w-50 cursor-pointer"
        src="/assets/images/logo.png"
        alt=""
      />
      {/* small screens */}

      <div className="sm:hidden">
        <img className="w-10 h-10" src="/assets/menu-01.svg" alt="" />
      </div>
      {/* medium and big screens */}
      {user ? (
        <div className="hidden sm:flex flex-row items-center gap-4">
          <div className="flex gap-1 items-center p-3 border border-grey-800 rounded-sm">
            <img className="w-6 h-6 " src="/assets/bell-01.svg" alt="" />
            <p>0</p>
          </div>
          <button className="bg-white flex gap-2 items-center text-gray-800 text-center px-8 py-3 rounded-sm font-light border  border-grey-800 hover:cursor-pointer hover:scale-105 transition-all duration-300">
            <img src="/assets/avatar-person.png" alt="" />
            <p>Haleemah</p>
            <img src="/assets/chevron-down.svg" alt="" />
          </button>
        </div>
      ) : (
        <div className="hidden sm:flex flex-row items-center gap-4">
          <p className="  text-lg font-semibold pb-1 border-b text-gray-800">
            Health providers
          </p>

          <button className="bg-white text-gray-800 text-center px-8 py-3 rounded-sm font-light border  border-grey-800 hover:cursor-pointer hover:scale-105 transition-all duration-300">
            Sign in
          </button>
        </div>
      )}
    </div>
  );
};

export default NavBar;
