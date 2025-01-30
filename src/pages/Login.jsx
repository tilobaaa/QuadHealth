import React, { useEffect, useRef, useState } from "react";
import LeftSide from "../components/LeftSide";
import { useNavigate } from "react-router-dom";
import useOnboardingStore from "../store/onBoardingStore";
import * as Yup from "yup";

const Login = () => {
  const [errorState, setErrorState] = useState({});
  const navigate = useNavigate();
  const { updateSignupData } = useOnboardingStore();

  const [termsChecked, setTermsChecked] = useState(false);
  const [receiveEmail, setReceiveEmail] = useState(false);
  const [noCheckOut, setNoCheckOut] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState("+234");

  const handleChange = (e) => {
    let value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    value = value.replace(/^234/, ""); // Remove leading 234 if it already exists

    let formatted = "+234";

    if (value.length > 0) {
      formatted += ` ${value.slice(0, 3)}`;
    }
    if (value.length > 3) {
      formatted += ` ${value.slice(3, 7)}`;
    }
    if (value.length > 7) {
      formatted += ` ${value.slice(7, 10)}`;
    }

    setPhoneNumber(formatted);
  };

  const emailRef = useRef("");
  const passwordRef = useRef("");
  const phoneNumberRef = useRef("");

  useEffect(() => {
    console.log(errorState);
  }, [errorState]);

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
  

    const formData = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    
    try {
      await validationSchema.validate(formData, { abortEarly: false });
      updateSignupData(formData);
      navigate("/authentication");
    } catch (error) {
      console.log("Validation Errors:", error.inner);
      const newErrors = {};
      error.inner.forEach((err) => {
        newErrors[err.path] = err.message; //Store error message by field name
      });
      setErrorState(newErrors);
    }
  };

  return (
    <div className="flex flex-grow flex-row w-full items-center relative">
      {/* left side */}
      <LeftSide />
      {/* right side */}
      <div className="bg-grey-100 lg:w-1/2 w-full h-full flex flex-col  overflow-y-auto">
        <div className="bg-white m-8 py-6 px-4 sm:p-10 sm:ml-[8.37rem] sm:mr-[5rem] sm:my-10 rounded-md">
          <h3 className="text-primary-500 text-2xl md:text-4xl font-medium mb-2">
            Welcome to QuadHealth
          </h3>
          <p className="text-grey-700 text-lg">
            Let's help you find affordable healthcare near.
          </p>
          <form
            onSubmit={handleSubmit}
            action=""
            className="mt-6 sm:mt-10 flex flex-col gap-6"
          >
            {/* email input */}
            <div>
              <div className="relative">
                <span className="absolute left-2 top-1/2 transform -translate-y-1/2">
                  <img src="/assets/mail-01.svg" className="" alt="" />
                </span>
                {errorState.email && (
                  <span
                    onClick={() => {
                      setErrorState((prev) => ({
                        ...prev,
                        email: undefined,
                      }));
                      emailRef.current.value = "";
                    }}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2"
                  >
                    <img src="/assets/x-square.svg" className="" alt="" />
                  </span>
                )}
                <input
                  required
                  onInvalid={(e) => e.preventDefault()}
                  ref={emailRef}
                  type="email"
                  id="email"
                  placeholder="Enter an email address"
                  className={`bg-grey-50 peer w-full border ${
                    errorState.email
                      ? "border-error-500 focus:ring-error-500"
                      : "border-grey-300 focus:ring-primary-200"
                  }  rounded pl-10 pr-2 py-4 focus:outline-none focus:ring-2  placeholder-transparent`}
                />
                <label
                  htmlFor="email"
                  className={`absolute bg-grey-50 left-10 px-1 text-base transition-all
                    ${
                      errorState.email
                        ? "text-error-500 peer-focus:text-error-500"
                        : "text-grey-400 peer-focus:text-primary-500"
                    }
                    peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-grey-400
                    peer-valid:-top-3 peer-valid:text-sm
                    peer-focus:-top-3 peer-focus:text-sm
                  `}
                >
                  Enter an email address
                </label>
              </div>
              {errorState.email && (
                <p className="text-error-500">Enter a valid email address</p>
              )}
            </div>

            {/* password input */}
            <div>
              <div className="relative">
                <span className="absolute left-2 top-1/2 transform -translate-y-1/2">
                  <img src="/assets/lock-01.svg" className="" alt="" />
                </span>
                {errorState.password && (
                  <span className="absolute right-2 top-1/2 transform -translate-y-1/2">
                    <img
                      onClick={() => {
                        setErrorState((prev) => ({
                          ...prev,
                          password: undefined,
                        }));
                        passwordRef.current.value = "";
                      }}
                      src="/assets/x-square.svg"
                      className=""
                      alt=""
                    />
                  </span>
                )}
                <input
                  required
                  ref={passwordRef}
                  name="password"
                  type="password"
                  id="password"
                  placeholder="Enter a Password"
                  className={`bg-grey-50 peer w-full border ${
                    errorState.password
                      ? "border-error-500 focus:ring-error-500"
                      : "border-grey-300 focus:ring-primary-200"
                  }  rounded pl-10 pr-2 py-4 focus:outline-none focus:ring-2   placeholder-transparent`}
                />
                <label
                  htmlFor="password"
                  className={`absolute bg-grey-50 left-10 top-4 px-1 ${
                    errorState.password
                      ? "text-error-500 peer-focus:text-error-500"
                      : "text-grey-400 peer-focus:text-primary-500"
                  }  text-base transition-all peer-placeholder-shown:top-4 peer-valid:-top-3 peer-valid:text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-grey-400 peer-focus:-top-3 peer-focus:text-sm 
                  }`}
                >
                  Enter a Password
                </label>
              </div>
            </div>
            <p className="mt-6 text-grey-800 text-lg">Forgot password?</p>

            <button
              type="submit"
              className="mt-10 w-full py-3 text-grey-100 bg-primary-500 hover:scale-105 cursor-pointer transition-all duration-500 rounded-sm disabled:cursor-not-allowed "
            >
              Sign In
            </button>
          </form>
          <div className="relative my-4">
            <hr className="border-1 border-grey-200" />
            <p className="text-grey-600 bg-grey-100 absolute top-[-10px] left-[50%] px-1">
              or
            </p>
          </div>
         <div className="flex flex-col gap-4">
         <button className=" flex items-center justify-center gap-4 bg-grey-50 text-grey-800 w-full border cursor-pointer py-3 hover:scale-105 transition-all duration-500 rounded-sm ">
            + Sign In with phone number
          </button>
          <button className=" flex items-center justify-center gap-4 bg-grey-50 text-grey-800 w-full border cursor-pointer py-3 hover:scale-105 transition-all duration-500 rounded-sm ">
            <img className="w-6 h-6" src="/assets/google.svg" alt="" />
            Sign in with Google
          </button>
         </div>
          
        </div>
        <p className="text-sm text-grey-500 text-center">
          © 2025, QuadHealth Co.
        </p>
      </div>
      <button className="hidden absolute right-4 bottom-55 cursor-pointer hover:scale-105 transition-all duration-300 bg-primary-500 lg:flex justify-center text-white items-center gap-2 py-3 px-6 rounded-sm custom-shadow">
        Need Help <img src="/assets/help-square.svg" alt="" />
      </button>
    </div>
  );
};

export default Login;
