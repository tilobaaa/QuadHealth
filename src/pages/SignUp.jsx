import React from "react";

const SignUp = () => {
  return (
    <div className="flex flex-grow flex-row w-full items-center overscroll-y-none">
      {/* left side */}
      <div className="text-gray-50 flex flex-col p-5 w-1/2 h-full custom-gradient px-16 ">
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
            <div className="text-gray-100 w-96">
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
            <div className="text-gray-100 w-96">
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
            <div className="text-gray-100 w-96">
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
      <div className="bg-gray-100 w-1/2 h-full flex items-center justify-center">
        <div className="bg-white">
          <h3>Welcome to QuadHealth</h3>
          <p>
            Create an account to find doctors near you and affordable healthcare
            right at your fingertips.
          </p>
          <form action="">
            <div className="relative">
              <input
                type="text"
                id="name"
                placeholder="Name"
                className="peer w-full border border-primary-400 rounded px-2 py-4 focus:outline-none focus:ring-2 focus:ring-primary-200 placeholder-transparent"
              />
              <label
                htmlFor="name"
                className="absolute left-2 -top-2 bg-white px-1  text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-primary-500"
              >
                Name
              </label>
            </div>
            <div className="relative">
              <input
                type="text"
                id="name"
                placeholder="Name"
                className="peer w-full border border-primary-400 rounded px-2 py-4 focus:outline-none focus:ring-2 focus:ring-primary-200 placeholder-transparent"
              />
              <label
                htmlFor="name"
                className="absolute left-2 -top-2 bg-white px-1  text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-primary-500"
              >
                Name
              </label>
            </div>
            <div className="relative">
              <input
                type="text"
                id="name"
                placeholder="Name"
                className="peer w-full border border-primary-400 rounded px-2 py-4 focus:outline-none focus:ring-2 focus:ring-primary-200 placeholder-transparent"
              />
              <label
                htmlFor="name"
                className="absolute left-2 -top-2 bg-white px-1  text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-primary-500"
              >
                Name
              </label>
            </div>
            <p>Password must be at least 8 characters long and include at least one uppercase letter and one number.</p>
            <div>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
