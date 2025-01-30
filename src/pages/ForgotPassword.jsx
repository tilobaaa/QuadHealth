import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
    const navigate = useNavigate()
    const [errorState, setErrorState] = useState({})
  return (
    <div className="flex flex-grow flex-row w-full items-center relative m-auto text-center justify-center bg-grey-100">
      <div className="p-10 bg-grey-50 rounded shadow-2xl">
        <div>
          <h1 className="text-primary-500 text-2xl md:text-4xl font-medium mb-4">
            Forgot Password
          </h1>
          <p className="text-grey-700 text-lg">
            Enter your email and we'll send you a 6 digit OTP code to reset your
            password
          </p>
        </div>

        <form className="flex flex-col gap-10 my-10">
          <div className="relative">
            <input
              name="forgot_email"
              id="forgot_email"
              className={`bg-grey-50 peer w-full border ${
                    errorState.email
                      ? "border-error-500 focus:ring-error-500"
                      : "border-grey-300 focus:ring-primary-200"
                  }  rounded pl-10 pr-2 py-4 focus:outline-none focus:ring-2  `}
              type="text"
              placeholder="Enter an email address"
            />
            <img
              src="/assets/mail-01.svg"
              className="absolute left-2 top-1/2 transform -translate-y-1/2"
              alt=""
            />
          </div>
          <button onClick={()=>{navigate('/authentication')}} className="w-full py-3 text-grey-100 bg-primary-500 hover:scale-105 cursor-pointer transition-all duration-500 rounded-sm disabled:cursor-not-allowed">
            Send Code
          </button>
        </form>
        <button className="flex items-center justify-center gap-4 bg-grey-50 text-grey-800 w-full cursor-pointer py-3 hover:scale-105 transition-all duration-500 rounded-sm">
          Recieve with phone Number
        </button>

        <div></div>
      </div>
    </div>
  );
};

export default ForgotPassword;
