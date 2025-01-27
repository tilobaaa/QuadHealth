import React from "react";

const Onboarding = () => {
  return (
    <div className="w-full flex-grow bg-gray-100 flex flex-col">
      {/* <div className='bg-gray-50 p-10 m-auto'>
            <h3>Let’s get to know you better!</h3>
            <p>We need just a few details to set up your profile and connect you to the care you deserve.</p>
        </div> */}

      <div className="flex flex-col items-center p-6 bg-gray-50  w-1/3 m-auto">
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
          <div className="flex-1 h-2 bg-purple-500 rounded"></div>
          <div className="flex-1 h-2 bg-gray-300 rounded"></div>
          <div className="flex-1 h-2 bg-gray-300 rounded"></div>
          <div className="flex-1 h-2 bg-gray-300 rounded"></div>
          <p className="text-sm text-gray-600">Step 1/4</p>
        </div>

        {/* Form */}
        <form className="w-full max-w-md">
          {/* Name Fields */}
          <div className="flex gap-4 mb-4">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="First Name"
                className="peer w-full border border-gray-300 rounded-md px-10 py-2 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <label
                htmlFor="firstName"
                className="absolute left-3 top-2.5 text-sm text-gray-400 peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-purple-500"
              >
                First Name
              </label>
              <i className="absolute left-3 top-3 text-gray-400 material-icons">
                person
              </i>
            </div>
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Last Name"
                className="peer w-full border border-gray-300 rounded-md px-10 py-2 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <label
                htmlFor="lastName"
                className="absolute left-3 top-2.5 text-sm text-gray-400 peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-purple-500"
              >
                Last Name
              </label>
              <i className="absolute left-3 top-3 text-gray-400 material-icons">
                person
              </i>
            </div>
          </div>

          {/* Address Field */}
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Home Address"
              className="peer w-full border border-gray-300 rounded-md px-10 py-2 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <label
              htmlFor="address"
              className="absolute left-3 top-2.5 text-sm text-gray-400 peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-purple-500"
            >
              Home Address
            </label>
            <i className="absolute left-3 top-3 text-gray-400 material-icons">
              home
            </i>
          </div>

          {/* Date of Birth */}
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Date of Birth"
              className="peer w-full border border-gray-300 rounded-md px-10 py-2 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <label
              htmlFor="dob"
              className="absolute left-3 top-2.5 text-sm text-gray-400 peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-purple-500"
            >
              Date of Birth
            </label>
            <i className="absolute left-3 top-3 text-gray-400 material-icons">
              calendar_today
            </i>
          </div>

          {/* Gender Section */}
          <div className="mb-6">
            <p className="mb-2 text-gray-600">Gender</p>
            <div className="flex gap-4">
              <div className="flex flex-col items-center w-1/2 p-4 border border-gray-300 rounded-md cursor-pointer hover:border-purple-500">
                <img
                  src="/assets/images/female-icon.png"
                  alt="Female"
                  className="w-12 h-12 mb-2"
                />
                <p className="text-gray-600">Female</p>
              </div>
              <div className="flex flex-col items-center w-1/2 p-4 border border-gray-300 rounded-md cursor-pointer hover:border-purple-500">
                <img
                  src="/assets/images/male-icon.png"
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
            className="w-full py-3 text-white bg-purple-500 rounded-md hover:bg-purple-600 transition-all duration-200"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default Onboarding;
