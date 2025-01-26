import React from "react";
import { useNavigate } from "react-router-dom";

const Auth = () => {

    const navigate = useNavigate()
  return (
    <div className="flex-grow flex flex-col justify-center w-full bg-gray-100 relative">
      <div className="bg-gray-50 m-auto p-10 w-1/3">
        <div className="flex gap-2">
          <img onClick={()=>{navigate('/signup')}} className="w-6 h-6 cursor-pointer" src="/assets/arrow-narrow-left.svg"  alt="" />
          <p className="text-gray-800 text-lg">Back</p>
        </div>
        <div className="mt-6 ">
          <p className="text-4xl font-medium text-primary-500">
            Let’s verify your identity
          </p>
          <p className="text-lg text-gray-700 ">
            We’ve sent a 6-digit code to your (+234) 8944356890 to ensure <br />{" "}
            your account is secure do not share this code with anyone.
          </p>
        </div>
        <div className="flex my-10 w-full">
          <div className="border border-gray-300 rounded-sm bg-gray-50 flex-1 h-20 p-4"></div>
          <div className="border border-gray-300 rounded-sm bg-gray-50 flex-1 h-20 p-4"></div>
          <div className="border border-gray-300 rounded-sm bg-gray-50 flex-1 h-20 p-4"></div>
          <div className="border border-gray-300 rounded-sm bg-gray-50 flex-1 h-20 p-4"></div>
          <div className="border border-gray-300 rounded-sm bg-gray-50 flex-1 h-20 p-4"></div>
          <div className="border border-gray-300 rounded-sm bg-gray-50 flex-1 h-20 p-4"></div>
        </div>
        <p className="text-lg text-gray-700 mb-10">
          Didn’t get the code?{" "}
          <span className="border-b border-b-gray-800 bg-gray-50">
            Resend code
          </span>
        </p>
        <button className="bg-primary-500 rounded-sm w-full py-3 text-gray-100 hover:scale-105 transition-all duration-500 cursor-pointer mb-4">
          Verify Identity
        </button>
        <button className="bg-gray-50 rounded-sm w-full py-3 text-gray-800 hover:scale-105 transition-all duration-500 cursor-pointer mb-4">
          Verify with email address
        </button>
      </div>
      <p className="text-sm text-gray-500 text-center">
        © 2025, QuadHealth Co.
      </p>
      <button className="absolute right-40 bottom-55 cursor-pointer hover:scale-105 transition-all duration-300 bg-primary-500 flex justify-center text-white items-center gap-2 py-3 px-6 rounded-sm custom-shadow">
        Need Help <img src="/assets/help-square.svg" alt="" />
      </button>
    </div>
  );
};

export default Auth;
