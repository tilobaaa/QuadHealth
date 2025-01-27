import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import Input from "../components/Input";

const Onboarding = () => {
  const { step } = useParams();
  const totalSteps = 4;
  const [error, setError] = useState();
  const navigate = useNavigate();

  return (
    <div className="w-full flex-grow bg-grey-100 flex flex-col">
      {step === "1" && (
        <div className="flex flex-col items-center p-6 bg-grey-50  w-[40%] m-auto">
          {/* Header Section */}
          <div className="text-center mb-6">
            <h1 className="text-2xl font-semibold text-grey-800 mb-2">
              Let's get to know you better!
            </h1>
            <p className="text-sm text-grey-600">
              We need just a few details to set up your profile and connect you
              to the care you deserve.
            </p>
          </div>

          {/* Progress Bar */}
          <div className="w-full flex items-center justify-center gap-4 mb-6">
            <div className="flex gap-2">
              <img
                className="w-6 h-6"
                src="/assets/arrow-narrow-left.svg"
                alt=""
              />
              <p>Back</p>
            </div>
            <div></div>
            {Array.from({ length: totalSteps }).map((_, index) => (
              <div
                key={index}
                className={`h-3 w-16 ${
                  index < step ? "bg-purple-500" : "bg-grey-300"
                } rounded`}
              ></div>
            ))}
            <p className="text-sm text-grey-600">{`Step ${step}/4`}</p>
          </div>

          {/* Form */}
          <form className="w-full max-w-md flex flex-col gap-4">
            {/* Name Fields */}
            <div className="flex gap-4">
              <Input
              name='first'
                img="/assets/user-02.svg"
                label="First Name"
                errorMessage="This is a required field"
                type="text"
                id="first-name"
              />
              <Input
               name='last'
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
              onClick={() => {
                navigate("/onboarding/2");
              }}
              className="w-full py-3 text-white bg-purple-500 cursor-pointer rounded-md  hover:scale-105 transition-all duration-500"
            >
              Continue
            </button>
          </form>
        </div>
      )}

      {step === "2" && (
        <div className="flex flex-col items-center p-6 bg-grey-50  w-1/3 m-auto">
          {/* Header Section */}
          <div className="text-center mb-6">
            <h1 className="text-2xl font-semibold text-grey-800 mb-2">
              Medical History
            </h1>
            <p className="text-sm text-grey-600">
              Help us provide the best care by sharing any important medical
              details.
            </p>
          </div>

          {/* Progress Bar */}
          <div className="w-full flex items-center justify-center gap-4 mb-6">
            <div className="flex gap-2">
              <img
                className="w-6 h-6"
                src="/assets/arrow-narrow-left.svg"
                alt=""
              />
              <p>Back</p>
            </div>
            <div></div>
            {Array.from({ length: totalSteps }).map((_, index) => (
              <div
                key={index}
                className={`h-3 w-16 ${
                  index < step ? "bg-purple-500" : "bg-grey-300"
                } rounded`}
              ></div>
            ))}
            <p className="text-sm text-grey-600">{`Step ${step}/4`}</p>
          </div>

          {/* Form */}
          <form className="w-full max-w-md flex flex-col gap-4">
            {/* Name Fields */}
            <select
              className="w-full text-grey-400 bg-grey-50 text-sm border border-grey-400 rounded-sm px-4 py-3"
              name=""
              id=""
            >
              <option value="--">Existing medical conditions</option>
              <option value="">Asthma</option>
              <option value="">
                Arthritis (e.g., Rheumatoid Arthritis, Osteoarthritis)
              </option>
              <option value="">Breast Cancer</option>
              <option value="">Congestibe Heart Failure</option>
              <option value="">HIV/AIDS</option>
              <option value="">Epilepsy</option>
              <option value="">Hepatitis (A, B, C)</option>
              <option value="">Type 2 Diabetes</option>
              <option value="">Sickle Cell Disease</option>
            </select>
            <select
              className="w-full text-grey-400 bg-grey-50 text-sm border border-grey-400 rounded-sm px-4 py-3"
              name=""
              id=""
            >
              <option value="--">Allergies</option>
              <option value="">Allergies</option>
              <option value="">Asthma</option>
              <option value="">
                Arthritis (e.g., Rheumatoid Arthritis, Osteoarthritis)
              </option>
              <option value="">Breast Cancer</option>
              <option value="">Congestibe Heart Failure</option>
              <option value="">HIV/AIDS</option>
              <option value="">Epilepsy</option>
              <option value="">Hepatitis (A, B, C)</option>
              <option value="">Type 2 Diabetes</option>
              <option value="">Sickle Cell Disease</option>
            </select>
            <div className="w-full flex gap-4">
              <select
                className="w-full text-grey-400 bg-grey-50 text-sm border border-grey-400 rounded-sm px-4 py-3"
                name=""
                id=""
              > 
              <option value="--">Blood Type</option>
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
              <select
                className="w-full text-grey-400 bg-grey-50 text-sm border border-grey-400 rounded-sm px-4 py-3"
                name=""
                id=""
              >
                <option value="--">Genotype</option>
                <option value="">AA</option>
                <option value="">AS</option>
                <option value="">AS</option>
                <option value="">AC</option>
                <option value="">SC</option>
              </select>
            </div>
            <select
              className="w-full text-grey-400 bg-grey-50 text-sm border border-grey-400 rounded-sm px-4 py-3"
              name=""
              id=""
            >
              <option value="--">Post surgical procedures</option>
              <option value="">Appendectomy</option>
              <option value="">Cataract Surgery</option>
              <option value="">Coronary Artery Bypass Graft (CABG)</option>
              <option value="">C-Section (Cesarean Delivery)</option>
              <option value="">Gallbladder Removal</option>
            </select>
            <div className="w-full flex gap-4">
              <button onClick={()=>{navigate("/onboarding/3")}} className="w-full py-3 text-grey-50 bg-purple-500 cursor-pointer rounded-sm hover:scale-105 transition-all duration-500">
                Continue
              </button>
              <button className="w-full py-3 text-grey-800 bg-grey-50 border border-grey-800 cursor-pointer rounded-sm hover:scale-105 transition-all duration-500">
                Skip
              </button>
            </div>
          </form>
          <button className="mt-4 py-3 rounded-sm hover:scale-105 duration-100 cursor-pointer">
            Skip onboarding
          </button>
        </div>
      )}

      {step === "3" && (
        <div className="flex flex-col items-center p-6 bg-grey-50  w-[40%] m-auto">
          {/* Header Section */}
          <div className="text-center mb-6">
            <h1 className="text-2xl font-semibold text-grey-800 mb-2">
              Insurance Information
            </h1>
            <p className="text-sm text-grey-600">
              Adding your insurance info can help you see costs upfront and save
              time later.
            </p>
          </div>

          {/* Progress Bar */}
          <div className="w-full flex items-center justify-center gap-4 mb-6">
            <div className="flex gap-2">
              <img
                className="w-6 h-6"
                src="/assets/arrow-narrow-left.svg"
                alt=""
              />
              <p>Back</p>
            </div>
            <div></div>
            {Array.from({ length: totalSteps }).map((_, index) => (
              <div
                key={index}
                className={`h-3 w-16 ${
                  index < step ? "bg-purple-500" : "bg-grey-300"
                } rounded`}
              ></div>
            ))}
            <p className="text-sm text-grey-600">{`Step ${step}/4`}</p>
          </div>

          {/* Form */}
          <form className="w-full max-w-md flex flex-col gap-4">
            {/* Name Fields */}
            <select
              className="w-full text-grey-400 bg-grey-50 text-sm border border-grey-400 rounded-sm px-4 py-3"
              name=""
              id=""
            >
              <option value="--">Insurance provider</option>
              <option value="">Leadway Assurance Company Limited</option>
              <option value="">AIICO Insurance PLC</option>
              <option value="">Allianz Nigeria Insurance Ltd</option>
              <option value="">Cornerstone Insurance Plc</option>
              <option value="">Custodian Investment Plc</option>
            </select>
            <select
              className="w-full text-grey-400 bg-grey-50 text-sm border border-grey-400 rounded-sm px-4 py-3"
              name=""
              id=""
            >
              <option value="--">Insurance plan</option>
              <option value="">Asthma</option>
              <option value="">
                Arthritis (e.g., Rheumatoid Arthritis, Osteoarthritis)
              </option>
              <option value="">Breast Cancer</option>
              <option value="">Congestibe Heart Failure</option>
              <option value="">HIV/AIDS</option>
              <option value="">Epilepsy</option>
              <option value="">Hepatitis (A, B, C)</option>
              <option value="">Type 2 Diabetes</option>
              <option value="">Sickle Cell Disease</option>
            </select>
            {/* input for policy number */}
            <Input
              
              label="Policy Number"
              errorMessage="This is a required field"
              type="number"
              id="policy"
            />
          
           
            <div className="w-full flex gap-4">
              <button onClick={()=>{navigate('/onboarding/4')}} className="w-full py-3 text-grey-50 bg-purple-500 cursor-pointer rounded-sm hover:scale-105 transition-all duration-500">
                Continue
              </button>
              <button className="w-full py-3 text-grey-800 bg-grey-50 border border-grey-800 cursor-pointer rounded-sm hover:scale-105 transition-all duration-500">
                Skip
              </button>
            </div>
          </form>
          <button className="mt-4 py-3 rounded-sm hover:scale-105 duration-100 cursor-pointer">
            Skip onboarding
          </button>
        </div>
      )}

{step === "4" && (
        <div className="flex flex-col items-center p-6 bg-grey-50  w-[40%] m-auto">
          {/* Header Section */}
          <div className="text-center mb-6">
            <h1 className="text-2xl font-semibold text-grey-800 mb-2">
            Emergency Contact
            </h1>
            <p className="text-sm text-grey-600">
            Let’s add someone who can be contacted if you ever need urgent assistance.
            </p>
          </div>

          {/* Progress Bar */}
          <div className="w-full flex items-center justify-center gap-4 mb-6">
            <div className="flex gap-2">
              <img
                className="w-6 h-6"
                src="/assets/arrow-narrow-left.svg"
                alt=""
              />
              <p>Back</p>
            </div>
            <div></div>
            {Array.from({ length: totalSteps }).map((_, index) => (
              <div
                key={index}
                className={`h-3 w-16 ${
                  index < step ? "bg-purple-500" : "bg-grey-300"
                } rounded`}
              ></div>
            ))}
            <p className="text-sm text-grey-600">{`Step ${step}/4`}</p>
          </div>

          {/* Form */}
          <form className="w-full max-w-md flex flex-col gap-4">
            {/* Name Fields */}
            <Input
              name='first'
                img="/assets/user-02.svg"
                label="First Name"
                errorMessage="This is a required field"
                type="text"
                id="first-name"
              />
              <Input
               name='last'
                label="Last Name"
                errorMessage="This is a required field"
                type="text"
                id="last-name"
              />
              
              <select className="w-full text-grey-400 bg-grey-50 text-sm border border-grey-400 rounded-sm px-4 py-3" name="" id="">
                <option value="">Relationship</option>
              </select>

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
                {error && (
                  <span className="absolute right-2 top-1/2 transform -translate-y-1/2">
                    <img src="/assets/x-square.svg" className="" alt="" />
                  </span>
                )}
                <input
                  type="password"
                  id="password"
                  placeholder="Enter a Password"
                  className={`bg-grey-50 peer w-full border ${
                    error
                      ? "border-error-500 focus:ring-error-500"
                      : "border-grey-300 focus:ring-primary-200"
                  }  rounded pl-20 pr-2 py-4 focus:outline-none focus:ring-2   placeholder-transparent`}
                />
                <label
                  htmlFor="password"
                  className={`absolute bg-grey-50 left-20 top-4 px-1 ${
                    error ? "text-error-500" : "text-grey-400"
                  }  text-base transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-grey-400 peer-focus:-top-3 peer-focus:text-sm ${
                    error
                      ? "peer-focus:text-error-500"
                      : "peer-focus:text-primary-500"
                  } `}
                >
                 (+234) 000-0000-000
                </label>
              </div>
              {error && (
                <p className="text-error-500">Enter a valid phone number</p>
              )}
              </div>
           
            <div className="w-full flex gap-4">
              <button className="w-full py-3 text-grey-50 bg-purple-500 cursor-pointer rounded-sm hover:scale-105 transition-all duration-500">
                Finish
              </button>
              <button className="w-full py-3 text-grey-800 bg-grey-50 border border-grey-800 cursor-pointer rounded-sm hover:scale-105 transition-all duration-500">
                Skip
              </button>
            </div>
          </form>
          <button className="mt-4 py-3 rounded-sm hover:scale-105 duration-100 cursor-pointer">
            Skip onboarding
          </button>
        </div>
      )}

    </div>
  );
};

export default Onboarding;
