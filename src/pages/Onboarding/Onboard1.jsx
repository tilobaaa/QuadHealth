import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useRef } from "react";
import Input from "../../components/Input";
import useOnboardingStore from "../../store/onBoardingStore";
import Progress from "../../components/Progress";
import * as yup from "yup";
import axios from "axios";

const Onboard1 = () => {
 

  const navigate = useNavigate();
  const { updateOnboardingData } = useOnboardingStore();



  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const addressRef = useRef();
  const dobRef = useRef();

  const [gender, setGender] = useState("");
  const [error, setError] = useState({});

  // Validation schema
  const schema = yup.object().shape({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    homeAddress: yup.string().required("Address is required"),
    dateOfBirth: yup.date().required("Date of birth is required"),
    gender: yup
      .string()
      .oneOf(["Male", "Female"])
      .required("Gender is required"),
  });

  // gender: yup.string().oneOf(["Male", "Female"]).required("Gender is required"),

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleNext = async (e) => {
    console.log(gender)
    e.preventDefault();
    const formData = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      homeAddress: addressRef.current.value,
      dateOfBirth: dobRef.current.value,
      gender,
    };

    console.log( formData)

    //  gender,

    try {
      await schema.validate(formData, { abortEarly: false });
      console.log(formData);
    
      updateOnboardingData("page1", formData);
      navigate("/onboarding/2");
    } catch (err) {
      const errors = {};
      err.inner.forEach((e) => {
        errors[e.path] = e.message;
      });
      setError(errors);
      console.log(errors)
    }
  };

  return (
    <div className="flex flex-col items-center p-6 my-8 mx-6 bg-grey-50 sm:m-20  md:w-[40%] md:m-auto ">
      {/* Header Section */}
      <div className="text-center mb-6">
        <h1 className="text-xl sm:text-2xl font-semibold text-grey-800 mb-2">
          Let's get to know you better{" "}
          <span className="hidden sm:inline">!</span>
        </h1>
        <p className="text-sm text-grey-600">
          We need just a few details to set up your profile and connect you to
          the care you deserve.
        </p>
      </div>
      {/* Progress Bar */}
      <Progress />

      {/* Form */}
      <form
        onSubmit={handleNext}
        className="w-full max-w-md flex flex-col gap-4"
      >
        {/* Name Fields */}
        <div className="flex flex-col md:flex-row gap-4 ">
          <Input
            icon={"/assets/user-02.svg"}
            ref={firstNameRef}
            name="firstName"
            label="First Name"
            error={error.firstName}
          />
          <Input
            ref={lastNameRef}
            name="lastName"
            label="Last Name"
            error={error.lastName}
          />
        </div>

        {/* Address Field */}
        <Input
          icon={"/assets/marker-pin-01.svg"}
          ref={addressRef}
          name="homeAddress"
          label="Home Address"
          error={error.homeAddress}
        />

        {/* Date of Birth */}
        <Input
          icon={"/assets/calendar.svg"}
          ref={dobRef}
          name="dateOfBirth"
          type="date"
          label="Date of Birth"
          error={error.dateOfBirth}
        />

        {/* Gender Section */}
        <div className="mb-6 ">
          <p className="mb-2 text-grey-600">Gender</p>
          {/* female */}
          <div className="flex gap-4 ">
            <label
              htmlFor="female"
              className="flex flex-col items-center w-1/2 p-4 border relative border-grey-300 rounded-md cursor-pointer hover:border-purple-500"
            >
              <img
                src="/assets/group-female.svg"
                alt="Female"
                className="w-12 h-12 mb-2"
              />
              <p className="text-grey-600">Female</p>

              <input
                className="absolute right-4 "
                type="radio"
                id="female"
                name="gender"
                value="Female"
                onChange={handleGenderChange}
                checked={gender === "Female"}
              />
            </label>

            {/* male */}
            <label htmlFor="male" className="flex flex-col items-center w-1/2 p-4 border relative border-grey-300 rounded-md cursor-pointer hover:border-purple-500">
              <img
                src="/assets/group-male.svg"
                alt="Male"
                className="w-12 h-12 mb-2"
              />
              <p className="text-grey-600">Male</p>

              <input
                className="absolute right-4 "
                type="radio"
                id="male"
                name="gender"
                value="Male"
                onChange={handleGenderChange}
                checked={gender === "Male"}
              />
            </label>
          </div>
          {error.gender && <p className="text-error-500 text-sm">{error.gender}</p>}
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
