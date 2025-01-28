import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useOnboardingStore from "../store/onBoardingStore";
import * as Yup from "yup";

const SignUp = () => {
  const [errorState, setErrorState] = useState({});
  const navigate = useNavigate();
  const { updateSignupData } = useOnboardingStore();

  const [termsChecked, setTermsChecked] = useState(false);
  const [receiveEmail, setReceiveEmail] = useState(false);
  const [noCheckOut, setNoCheckOut] = useState(false);

  const emailRef = useRef("");
  const passwordRef = useRef("");
  const phoneNumberRef = useRef("");

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    phoneNumber: Yup.string().required("Phone Number is required"),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
    console.log(phoneNumberRef.current.value);

    const formData = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
      phoneNumber: phoneNumberRef.current.value,
    };

    if (termsChecked) {
      try {
        await validationSchema.validate(formData, { abortEarly: false });
        updateSignupData(formData);
        navigate("/authentication");
        console.log("we would do it");
      } catch (error) {
        const newErrors = {};
        error.inner.forEach((err) => {
          newErrors[err.path] = err.message; //Store error message by field name
        });
        setErrorState(newErrors);
      }
    } else {
      setNoCheckOut(true);
    }
  };

  return (
    <div className="flex flex-grow flex-row w-full items-center relative">
      {/* left side */}
      <div className="text-grey-50 hidden md:flex flex-col p-5 w-1/2 h-full custom-gradient px-16 ">
        <h1 className="text-7xl font-semibold mb-16 mt-20">
          Say Hello to <br />
          Affordable, <br />
          Accessible Care
        </h1>
        <div className="flex flex-col gap-8">
          <div className="flex flex-row gap-4">
            <img
              className="filter invert w-8 h-8"
              src="/assets/globe-05.svg"
              alt=""
            />
            <div className="text-grey-100 w-96">
              <p className=" font-semibold text-lg">
                Find Nearby Doctors Easily
              </p>
              <p className="font-normal text-sm">
                Use our smart search to find healthcare providers close to you,
                tailored to your medical needs.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <img
              className="filter invert w-8 h-8"
              src="/assets/coins-03.svg"
              alt=""
            />
            <div className="text-grey-100 w-96">
              <p className=" font-semibold text-lg">
                Affordable Care You Can Trust
              </p>
              <p className="font-normal text-sm">
                Compare consultation fees upfront to access quality care that
                fits your budget.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <img
              className="filter invert w-8 h-8"
              src="/assets/shield-plus.svg"
              alt=""
            />
            <div className="text-grey-100 w-96">
              <p className=" font-semibold text-lg">Accepted Insurance Plans</p>
              <p className="font-normal text-sm">
                Quickly see which healthcare providers accept your insurance
                plan.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* right side */}
      <div className="bg-grey-100 md:w-1/2 w-full h-full flex flex-col  overflow-y-auto">
        <div className="bg-white m-8 py-6 px-4 sm:p-10 sm:ml-[8.37rem] sm:mr-[5rem] sm:my-10 rounded-md">
          <h3 className="text-primary-500 text-2xl md:text-4xl font-medium mb-2">
            Welcome to QuadHealth
          </h3>
          <p className="text-grey-700 text-lg">
            Create an account to find doctors near you{" "}
            <span className="hidden sm:inline">
              and affordable healthcare right at{" "}
              <br className="sm:hidden md:inline" /> your fingertips.
            </span>
          </p>
          <form
            onSubmit={handleSubmit}
            action=""
            className="mt-6 sm:mt-10 flex flex-col gap-6"
          >
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
                  }  rounded pl-10 pr-2 py-4 focus:outline-none focus:ring-2   placeholder-transparent`}
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
                    peer-valid:-top-4 peer-valid:text-sm
                    peer-focus:-top-4 peer-focus:text-sm
                  `}
                >
                  Enter an email address
                </label>
              </div>
              {errorState.email && (
                <p className="text-error-500">Enter a valid email address</p>
              )}
            </div>
            <div>
              {/* phone number */}
              <div className="relative">
                <span className="absolute left-2 top-1/2 transform -translate-y-1/2 flex gap-2 items-center">
                  <div className="flex gap-2">
                    <div className="w-2 h-4 bg-[#6DA544]"></div>
                    <div className="w-2 h-4 bg-[#6DA544]"></div>
                  </div>
                  <img src="/assets/chevron-down.svg" className="" alt="" />
                </span>
                {errorState.telephone && (
                  <span className="absolute right-2 top-1/2 transform -translate-y-1/2">
                    <img
                      onClick={() => {
                        setErrorState((prev) => ({
                          ...prev,
                          telephone: undefined,
                        }));
                        phoneNumberRef.current.value = "";
                      }}
                      src="/assets/x-square.svg"
                      className=""
                      alt=""
                    />
                  </span>
                )}
                <input
                  required
                  name="telephone"
                  ref={phoneNumberRef}
                  type="tel"
                  id="telephone"
                  placeholder="Enter a phone Number"
                  className={`bg-grey-50 peer w-full border ${
                    errorState.telephone
                      ? "border-error-500 focus:ring-error-500"
                      : "border-grey-300 focus:ring-primary-200"
                  }  rounded pl-20 pr-2 py-4 focus:outline-none focus:ring-2   placeholder-transparent`}
                />
                <label
                  htmlFor="telephone"
                  className={`absolute bg-grey-50 left-20 top-4 px-1 ${
                    errorState.telephone
                      ? "text-error-500 peer-focus:text-error-500"
                      : "text-grey-400 peer-focus:text-primary-500"
                  }  text-base transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-grey-400 peer-focus:-top-3 peer-focus:text-sm peer-valid:-top-3 peer-valid:text-sm`}
                >
                  (+234) 000-0000-000
                </label>
              </div>
              {errorState.telephone && (
                <p className="text-error-500">Enter a valid phone number</p>
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
              <p
                className={`text-sm font-normal my-6 ${
                  errorState.password ? "text-error-500" : "text-grey-800"
                }`}
              >
                Password must be at least 8 characters long and include at least
                one uppercase letter and one number.
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                className="hidden peer"
                onClick={() => {
                  setTermsChecked((prev) => !prev);
                }}
              />
              <label
                htmlFor="terms"
                className={`w-6 h-6 flex items-center justify-center border-2  rounded-sm ${
                  noCheckOut ? "border-error-500" : "border-grey-300"
                } peer-checked:border-primary-500 peer-focus:ring-2 peer-focus:ring-primary-300`}
              >
                {termsChecked && (
                  <img src="/assets/check.svg" alt="checkmark" />
                )}
              </label>
              <label htmlFor="terms" className="text-grey-700 text-sm">
                By signing up, you agree to our{" "}
                <a href="#" className="text-primary-500 underline">
                  Terms of Use
                </a>{" "}
                and{" "}
                <a href="#" className="text-primary-500 underline">
                  Privacy Policy
                </a>
                .
              </label>
            </div>

            <div className="flex items-start space-x-2">
              <input
                name="receive-email"
                type="checkbox"
                id="receive-email"
                className="hidden peer"
                onClick={() => {
                  setReceiveEmail((prev) => !prev);
                }}
              />
              <label
                htmlFor="receive-email"
                className="w-6 h-6 flex items-center justify-center border-2 border-grey-300 rounded-sm  peer-checked:border-primary-500 peer-focus:ring-2 peer-focus:ring-primary-300"
              >
                {receiveEmail && (
                  <img src="/assets/check.svg" alt="checkmark" />
                )}
              </label>
              <label htmlFor="receive-email" className="text-grey-700 text-sm">
                Receive health tips and updates about affordable care options.
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-3 text-grey-100 bg-primary-500 hover:scale-105 cursor-pointer transition-all duration-500 rounded-sm disabled:cursor-not-allowed "
            >
              Continue
            </button>
          </form>
          <div className="relative my-4">
            <hr className="border-1 border-grey-200" />
            <p className="text-grey-600 bg-grey-100 absolute top-[-10px] left-[50%] px-1">
              or
            </p>
          </div>
          <button className="flex items-center justify-center gap-4 bg-grey-50 text-grey-800 w-full border cursor-pointer py-3 hover:scale-105 transition-all duration-500 rounded-sm">
            <img className="w-6 h-6" src="/assets/google.svg" alt="" />
            Sign up with Google
          </button>
        </div>
        <p className="text-sm text-grey-500 text-center">
          © 2025, QuadHealth Co.
        </p>
      </div>
      <button className="hidden absolute right-4 bottom-55 cursor-pointer hover:scale-105 transition-all duration-300 bg-primary-500 md:flex justify-center text-white items-center gap-2 py-3 px-6 rounded-sm custom-shadow">
        Need Help <img src="/assets/help-square.svg" alt="" />
      </button>
    </div>
  );
};

export default SignUp;
