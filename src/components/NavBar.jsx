// import { NavLink, Link } from "react-router-dom";
// import { useState } from "react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useOnboardingStore from "../store/onBoardingStore";


const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  // const [token, setToken] = useState();
  const { signupData } = useOnboardingStore();
  const email = signupData.email


  const navigate = useNavigate();
  return (
    <div className="py-6 px-3.5 sm:p-6 flex items-center justify-between text-sm sm:py-4 sm:mb-5 sm:px-16 bg-white w-full">
      <img
        className="w-40 sm:w-50 cursor-pointer"
        src="/assets/images/logo.png"
        alt=""
      />
      {/* small screens */}

      <div
        className="sm:hidden"
        onClick={() => {
          setShowMenu((prev) => !prev);
        }}
      >
        <img className="w-10 h-10 relative text-center" src="/assets/menu-01.svg" alt="" />
        {showMenu && (
          <div className="text-sm flex flex-col bg-grey-50 absolute right-5 p-4 z-40 rounded-md">
            <p className="hover:bg-grey-200 cursor-pointer px-2 text-grey-500 font-semibold pb-1 border-b ">Health providers</p>
            <p onClick={()=>{navigate('/login')}} className="hover:bg-grey-200 cursor-pointer px-2 text-grey-500 font-semibold pb-1">Sign In</p>
          </div>
        )}
        <div></div>
      </div>
      {/* medium and big screens */}
      {email ? (
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
          <p className="  text-lg font-semibold pb-1 border-b text-grey-800">
            Health providers
          </p>

          <button
            onClick={() => {
              navigate("/signup");
            }}
            className="bg-white text-gray-800 text-center px-8 py-3 rounded-sm font-light border  border-grey-800 hover:cursor-pointer hover:scale-105 transition-all duration-300"
          >
            Sign in
          </button>
        </div>
      )}
    </div>
  );
};

export default NavBar;
