import React from "react";

const LeftSide = () => {
  return (
    <div className="text-grey-50 hidden lg:flex flex-col p-5 w-1/2 h-full custom-gradient px-16 ">
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
            <p className=" font-semibold text-lg">Find Nearby Doctors Easily</p>
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
              Compare consultation fees upfront to access quality care that fits
              your budget.
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
              Quickly see which healthcare providers accept your insurance plan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
