import React from "react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();

  const handleAuthentication = async () => {
    // get otp from backend for the user
    const res = await axios.get("users/verify-otp");

    // if otp from backend === input from user
    if (res.data.otp === "") {
      // procede to login
    } else {
       // show error message
    }
   
  };
  return (
    <div className="flex-grow flex flex-col justify-center w-full bg-grey-100 relative">
      <div className="bg-grey-50 m-6 sm:m-20 md:m-auto p-10 lg:w-1/3 ">
        <div className="flex gap-2">
          <img
            onClick={() => {
              navigate("/signup");
            }}
            className="w-6 h-6 cursor-pointer"
            src="/assets/arrow-narrow-left.svg"
            alt=""
          />
          <p className="text-grey-800 text-lg">Back</p>
        </div>
        <div className="mt-4 md:mt-6 ">
          <p className="text-2xl md:text-4xl font-medium text-primary-500">
            Let’s verify your identity
          </p>
          <p className="text-lg text-grey-700 mt-4 ">
            We’ve sent a 6-digit code to your (+234) 8944356890 to ensure{" "}
            <br className="hidden md:inline" /> your account is secure do not
            share this code with anyone.
          </p>
        </div>
        <div className="flex my-10 w-full gap-4">
          <div className="border border-grey-300 rounded-sm bg-grey-50 flex-1 h-12 md:h-20 p-4"></div>
          <div className="border border-grey-300 rounded-sm bg-grey-50 flex-1 h-12 md:h-20 p-4"></div>
          <div className="border border-grey-300 rounded-sm bg-grey-50 flex-1 h-12 md:h-20 p-4"></div>
          <div className="border border-grey-300 rounded-sm bg-grey-50 flex-1 h-12 md:h-20 p-4"></div>
          <div className="border border-grey-300 rounded-sm bg-grey-50 flex-1 h-12 md:h-20 p-4"></div>
          <div className="border border-grey-300 rounded-sm bg-grey-50 flex-1 h-12 md:h-20 p-4"></div>
        </div>
        <p className="text-lg text-grey-700 mb-10">
          Didn’t get the code?{" "}
          <span className="border-b border-b-grey-800 bg-grey-50">
            Resend code
          </span>
        </p>
        <button
          onClick={() => {
            navigate("/login");
          }}
          className="bg-primary-500 rounded-sm w-full py-3 text-grey-100 hover:scale-105 transition-all duration-500 cursor-pointer mb-4"
        >
          Verify Identity
        </button>
        <button className="bg-grey-50 rounded-sm w-full py-3 text-grey-800 hover:scale-105 transition-all duration-500 cursor-pointer mb-4">
          Verify with email address
        </button>
      </div>
      <p className="text-sm text-grey-500 text-center">
        © 2025, QuadHealth Co.
      </p>
      <button className="hidden absolute right-4 bottom-55 cursor-pointer hover:scale-105 transition-all duration-300 bg-primary-500 lg:flex justify-center text-white items-center gap-2 py-3 px-6 rounded-sm custom-shadow">
        Need Help <img src="/assets/help-square.svg" alt="" />
      </button>
    </div>
  );
};

export default Auth;
