import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import Input from "../../components/Input";

const Onboard4 = () => {
  const { step } = useParams();
  const totalSteps = 4;
  const [error, setError] = useState();
  const navigate = useNavigate();

  return <div className="flex flex-col items-center p-6 my-8 mx-6 bg-grey-50  md:w-[40%] md:m-auto">
  {/* Header Section */}
  <div className="text-center mb-6">
    <h1 className="text-2xl font-semibold text-grey-800 mb-2">
      Emergency Contact
    </h1>
    <p className="text-sm text-grey-600">
      Let’s add someone who can be contacted if you ever need urgent
      assistance.
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

    <select
      className="w-full text-grey-400 bg-grey-50 text-sm border border-grey-400 rounded-sm pl-10 pr-4 py-4"
      name=""
      id=""
    >
      <option value="">Relationship</option>
    </select>

    {/* phone number */}
    <div>
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
      <div className="text-primary-500 flex gap-2 text-lg items-center">
        <p className="text-2xl">+</p>
        <p>Add another</p>
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
</div>;
};

export default Onboard4;
