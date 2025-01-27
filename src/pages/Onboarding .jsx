import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import Input from "../components/Input";

const Onboarding = () => {
  const { step } = useParams();
  const totalSteps = 4;
  const [error, setError] = useState();
  const navigate = useNavigate()

  return (
    <div className="w-full flex-grow bg-gray-100 flex flex-col">
      

{  step === "1" &&    <div className="flex flex-col items-center p-6 bg-gray-50  w-1/3 m-auto">
        {/* Header Section */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-800 mb-2">
            Let's get to know you better!
          </h1>
          <p className="text-sm text-gray-600">
            We need just a few details to set up your profile and connect you to
            the care you deserve.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-full flex items-center gap-4 mb-6">
          {Array.from({ length: totalSteps }).map((_, index) => (
            <div
              key={index}
              className={`h-2 w-full ${
                index < step ? "bg-purple-500" : "bg-gray-300"
              } rounded`}
            ></div>
          ))}
          <p className="text-sm text-gray-600">{`Step ${step}/4`}</p>
        </div>

        {/* Form */}
        <form className="w-full max-w-md flex flex-col gap-4">
          {/* Name Fields */}
          <div className="flex gap-4">
            <Input
              img="/assets/user-02.svg"
              label="First Name"
              errorMessage="This is a required field"
              type="text"
              id="first-name"
            />
            <Input
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
            <p className="mb-2 text-gray-600">Gender</p>
            <div className="flex gap-4">
              <div className="flex flex-col items-center w-1/2 p-4 border border-gray-300 rounded-md cursor-pointer hover:border-purple-500">
                <img
                  src="/assets/group-female.svg"
                  alt="Female"
                  className="w-12 h-12 mb-2"
                />
                <p className="text-gray-600">Female</p>
              </div>
              <div className="flex flex-col items-center w-1/2 p-4 border border-gray-300 rounded-md cursor-pointer hover:border-purple-500">
                <img
                  src="/assets/group-male.svg"
                  alt="Male"
                  className="w-12 h-12 mb-2"
                />
                <p className="text-gray-600">Male</p>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            onClick={()=>{navigate('/onboarding/2')}}
            className="w-full py-3 text-white bg-purple-500 cursor-pointer rounded-md  hover:scale-105 transition-all duration-500"
          >
            Continue
          </button>
        </form>
      </div>}

      {
        step === "2" && <div className="flex flex-col items-center p-6 bg-gray-50  w-1/3 m-auto">
        {/* Header Section */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-800 mb-2">
            Medical History
          </h1>
          <p className="text-sm text-gray-600">
            Help us provide the best care by sharing any important medical details.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-full flex items-center gap-4 mb-6">
          {Array.from({ length: totalSteps }).map((_, index) => (
            <div
              key={index}
              className={`h-2 w-full ${
                index < step ? "bg-purple-500" : "bg-gray-300"
              } rounded`}
            ></div>
          ))}
          <p className="text-sm text-gray-600">{`Step ${step}/4`}</p>
        </div>

        {/* Form */}
        <form className="w-full max-w-md flex flex-col gap-4">
          {/* Name Fields */}
          <select className="w-full text-gray-400 bg-gray-50 text-sm border border-gray-400 rounded-sm px-4 py-3" name="" id="">
            <option value="--">Existing medical conditions</option>
            <option value="">Asthma</option>
            <option value="">Arthritis (e.g., Rheumatoid Arthritis, Osteoarthritis)</option>
            <option value="">Breast Cancer</option>
            <option value="">Congestibe Heart Failure</option>
            <option value="">HIV/AIDS</option>
            <option value="">Epilepsy</option>
            <option value="">Hepatitis (A, B, C)</option>
            <option value="">Type 2 Diabetes</option>
            <option value="">Sickle Cell Disease</option>
          </select>
          <select className="w-full text-gray-400 bg-gray-50 text-sm border border-gray-400 rounded-sm px-4 py-3" name="" id="">
            <option value="--">Allergies</option>
            <option value="">Asthma</option>
            <option value="">Arthritis (e.g., Rheumatoid Arthritis, Osteoarthritis)</option>
            <option value="">Breast Cancer</option>
            <option value="">Congestibe Heart Failure</option>
            <option value="">HIV/AIDS</option>
            <option value="">Epilepsy</option>
            <option value="">Hepatitis (A, B, C)</option>
            <option value="">Type 2 Diabetes</option>
            <option value="">Sickle Cell Disease</option>
          </select>
          <div className="w-full flex gap-4">
            <select className="w-full text-gray-400 bg-gray-50 text-sm border border-gray-400 rounded-sm px-4 py-3" name="" id="">
              <option value="">A Positive (A+)</option>
              <option value="">A Negative (A-)</option>
              <option value="">B Positive (B+)</option>
              <option value="">B Negative (B-)</option>
              <option value="">AB Negative (AB+)</option>
              <option value="">AB Positive (AB-)</option>
              <option value="">O Positive (O+)</option>
              <option value="">O Negative (O-)</option>
              <option value=""></option>
            </select>
            <select className="w-full text-gray-400 bg-gray-50 text-sm border border-gray-400 rounded-sm px-4 py-3" name="" id="">
              <option value="">AA</option>
              <option value="">AS</option>
              <option value="">AS</option>
              <option value="">AC</option>
              <option value="">SC</option>
            </select>
          </div>
          <select className="w-full text-gray-400 bg-gray-50 text-sm border border-gray-400 rounded-sm px-4 py-3" name="" id="">
            <option value="">Appendectomy</option>
            <option value="">Cataract Surgery</option>
            <option value="">Coronary Artery Bypass Graft (CABG)</option>
            <option value="">C-Section (Cesarean Delivery)</option>
            <option value="">Gallbladder Removal</option>
          </select>
          <div className="w-full flex gap-4">
            <button className="bg-primary-500 text-gray-50">Continue</button>
            <button>Skip</button>
          </div>
        </form>
      </div>
      }
    </div>
  );
};

export default Onboarding;
