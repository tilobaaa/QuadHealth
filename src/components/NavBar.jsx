// import { NavLink, Link } from "react-router-dom";
// import { useState } from "react";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useOnboardingStore from "../store/onBoardingStore";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [name, setName] = useState();
  const [showLoginOptions, setShowLoginOptions] = useState(false);
  // const [token, setToken] = useState();
  const { signupData, resetSignupData } = useOnboardingStore();
  const firstName = signupData.firstName;

  useEffect(() => {
    setName(firstName);
    console.log(signupData);
  }, [signupData]);

  const navigate = useNavigate();

  const logoutHandler = () => {
    setShowLoginOptions(false)
    resetSignupData();
    navigate("/login");
  };
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
        <img
          className="w-10 h-10 relative text-center"
          src="/assets/menu-01.svg"
          alt=""
        />
        {showMenu && (
          <div className="text-sm flex flex-col bg-grey-50 absolute right-5 p-4 z-40 rounded-md">
            <p className="hover:bg-grey-200 cursor-pointer px-2 text-grey-500 font-semibold pb-1 border-b ">
              Health providers
            </p>
            <p
              onClick={() => {
                navigate(name ? "/" : "/login");
              }}
              className="hover:bg-grey-200 cursor-pointer px-2 text-grey-500 font-semibold pb-1"
            >
              {firstName ? "Homepage" : "Sign In"}
            </p>
          </div>
        )}
        <div></div>
      </div>
      {/* medium and big screens */}
      {name ? (
        <div className="hidden sm:flex flex-row items-center gap-4">
          <div className="flex gap-1 items-center p-3 border border-grey-800 rounded-sm">
            <img className="w-6 h-6 " src="/assets/bell-01.svg" alt="" />
            <p>0</p>
          </div>
          <div className="w-full relative">
            <button
              onClick={() => {
                setShowLoginOptions(!showLoginOptions);
              }}
              className="bg-white flex gap-2 items-center text-gray-800 text-center px-8 py-3 rounded-sm font-light border  border-grey-800 hover:cursor-pointer hover:scale-105 transition-all duration-300"
            >
              <img src="/assets/avatar-person.png" alt="" />
              <p>{firstName}</p>
              <img
                className={`transition-transform duration-300 ${
                  showLoginOptions ? "rotate-180" : "rotate-0"
                }`}
                src={`/assets/chevron-down.svg`}
                alt=""
              />
            </button>
            {showLoginOptions && (
              <div className="absolute text-grey-700 text-center flex flex-col gap-1 text-sm w-full z-50 rounded-sm">
                <p
                  onClick={() => {
                    navigate("/");
                    setShowLoginOptions(false)
                  }}
                  className="p-2 hover:bg-grey-400 cursor-pointer rounded-sm"
                >
                  Home
                </p>
                <p onClick={logoutHandler}
                 className="p-2 hover:bg-grey-400 cursor-pointer rounded-sm">Logout</p>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="hidden sm:flex flex-row items-center gap-4">
          <p className="  text-lg font-semibold pb-1 border-b text-grey-800">
            Health providers
          </p>

          <button
            onClick={() => {
              navigate(name ? "/" : "/login");
            }}
            className="bg-white text-gray-800 text-center px-8 py-3 rounded-sm font-light border  border-grey-800 hover:cursor-pointer hover:scale-105 transition-all duration-300"
          >
            {firstName ? "Homepage" : "Sign In"}
          </button>
        </div>
      )}
    </div>
  );
};

export default NavBar;
