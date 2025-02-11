import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import useOnboardingStore from "../store/onBoardingStore";
import axios from "axios";

const Auth = () => {
  const navigate = useNavigate();
  const { signupData } = useOnboardingStore();
  const email = signupData.email;
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (index, event) => {
    const value = event.target.value;
    if (!/^\d?$/.test(value)) return; // Allow only numbers

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to the next input box
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace") {
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);

      // Move to previous input box if empty
      if (index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    const enteredOtp = otp.join(""); // Convert array to string
    try {
      // const res = await axios.post("https://healthcare-backend-jslb.onrender.com/v1/users/verify-otp", {otp:enteredOtp});
      // console.log(res.data)
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setLoading(false);
      navigate("/login");
    } catch (error) {
      console.error("Error verifying OTP", error);
    }
  };

  return (
    <div className="flex-grow flex flex-col justify-center w-full bg-grey-100 relative">
      <div className="bg-grey-50 m-6 sm:m-20 md:m-auto p-10 lg:w-1/3">
        <div className="flex gap-2">
          <img
            onClick={() => navigate("/signup")}
            className="w-6 h-6 cursor-pointer"
            src="/assets/arrow-narrow-left.svg"
            alt="Back"
          />
          <p className="text-grey-800 text-lg">Back</p>
        </div>
        <div className="mt-4 md:mt-6">
          <p className="text-2xl md:text-4xl font-medium text-primary-500">
            Let’s verify your identity
          </p>
          <p className="text-lg text-grey-700 mt-4">
            {`We’ve sent a 6-digit code to ${email}.`}
            <br className="hidden md:inline" /> Do not share this code with
            anyone.
          </p>
        </div>

        {/* OTP Input Boxes */}
        <div className="flex items-center justify-around my-10 w-full lg:gap-4">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              value={digit}
              onChange={(event) => handleChange(index, event)}
              onKeyDown={(event) => handleKeyDown(index, event)}
              maxLength="1"
              className=" border border-grey-300 rounded-sm bg-grey-50 w-12 h-12 md:h-20 md:w-20 p-4 text-center text-2xl text-grey-800"
            />
          ))}
        </div>

        <p className="text-lg text-grey-700 mb-10">
          Didn’t get the code?{" "}
          <span className="border-b border-b-grey-800 bg-grey-50 cursor-pointer">
            Resend code
          </span>
        </p>

        <button
          onClick={handleSubmit}
          className="bg-primary-500 rounded-sm w-full py-3 text-grey-100 hover:scale-105 transition-all duration-500 cursor-pointer mb-4"
        >
          Verify Identity
        </button>
      </div>
      {/* Full-page Loader */}
      {loading && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black opacity-50">
          <div className="relative w-56 h-56 flex justify-center items-center">
            {/* Outer Circle */}
            <div className="absolute w-full h-full border-16 border-gray-300 rounded-full"></div>

            {/* Moving Loader */}
            <div className="absolute w-56 h-56 border-16 border-transparent  border-b-primary-500 rounded-full animate-spin z-40"></div>
          </div>
        </div>
      )}

      <p className="text-sm text-grey-500 text-center">
        © 2025, QuadHealth Co.
      </p>
    </div>
  );
};

export default Auth;
