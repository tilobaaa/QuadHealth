import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import Input from "../../components/Input";
import useOnboardingStore from "../../store/onBoardingStore";

const Onboard1 = () => {
  const { step } = useParams();
  const totalSteps = 4;
  const [error, setError] = useState();
  const navigate = useNavigate();
  const {updateOnboardingData} = useOnboardingStore()
 const signUpData = useOnboardingStore((state)=> state.signupData)

  const handleNext = (e) => {
    e.preventDefault();
    navigate("/onboarding/2");

  };

  return (
    <div className="flex flex-col items-center p-6 my-8 mx-6 bg-grey-50 sm:m-20  md:w-[40%] md:m-auto ">
      {/* Header Section */}
      <div className="text-center mb-6">
        <h1 className="text-xl sm:text-2xl font-semibold text-grey-800 mb-2">
          Let's get to know you better <span className="hidden sm:inline">
            !
          </span>
        </h1>
        <p className="text-sm text-grey-600">
          We need just a few details to set up your profile and connect you to
          the care you deserve.
        </p>
      </div>

      {/* Progress Bar */}
      <div className="w-full flex items-center justify-center gap-2 mb-6">
        <div></div>
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div
            key={index}
            className={`h-2 w-16 ${
              index < step ? "bg-purple-500" : "bg-grey-300"
            } rounded-lg`}
          ></div>
        ))}
        <p className="text-sm text-grey-600">{`Step ${step}/4`}</p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleNext}
        className="w-full max-w-md flex flex-col gap-4"
      >
        {/* Name Fields */}
        <div className="flex flex-col md:flex-row gap-4 ">
          <Input
            name="first"
            img="/assets/user-02.svg"
            label="First Name"
            errorMessage="This is a required field"
            type="text"
            id="first-name"
          />
          <Input
            name="last"
            label="Last Name"
            errorMessage="This is a required field"
            type="text"
            id="last-name"
          />
        </div>

        {/* Address Field */}
        <Input
          img="/assets/marker-pin-01.svg"
          label="Home Address"
          errorMessage="This is a required field"
          type="text"
          id="home-address"
        />

        {/* Date of Birth */}
        <Input
          img="/assets/calendar.svg"
          label="Date of Birth"
          errorMessage="This is a required field"
          type="date"
          id="dob"
          className="appearance-none"
        />

        {/* Gender Section */}
        <div className="mb-6">
          <p className="mb-2 text-grey-600">Gender</p>
          <div className="flex gap-4">
            <div className="flex flex-col items-center w-1/2 p-4 border border-grey-300 rounded-md cursor-pointer hover:border-purple-500">
              <img
                src="/assets/group-female.svg"
                alt="Female"
                className="w-12 h-12 mb-2"
              />
              <p className="text-grey-600">Female</p>
            </div>
            <div className="flex flex-col items-center w-1/2 p-4 border border-grey-300 rounded-md cursor-pointer hover:border-purple-500">
              <img
                src="/assets/group-male.svg"
                alt="Male"
                className="w-12 h-12 mb-2"
              />
              <p className="text-grey-600">Male</p>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 text-white bg-purple-500 cursor-pointer rounded-md  hover:scale-105 transition-all duration-500"
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default Onboard1;
