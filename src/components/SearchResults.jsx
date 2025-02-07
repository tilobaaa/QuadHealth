import React from "react";
import MapComponent from "./MapContainer";

const SearchResults = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <p className="text-grey-800 text-xl ">24 Results</p>
        <p className="text-grey-700">Saturday, 22.02.2025</p>
        <div className="flex gap-2">
          <img src="/assets/chevron-left.svg" alt="" />
          <img src="/assets/chevron-right.svg" alt="" />
        </div>
      </div>
      <div className="grid grid-cols-5">
        {/* left side  */}
        <div className="sm:col-span-2 lg:col-span-1 bg-grey-50 py-6 px-4">
          <p className="font-semibold text-grey-900">Filter</p>
          <div className="flex flex-row gap-2 mb-7">
            <button className="w-full rounded-sm px-3 py-2 font-medium text-grey-50 bg-primary-500">
              Apply
            </button>
            <button className="w-full rounded-sm px-3 py-2 font-medium text-grey-300 bg-grey-50 border border-grey-300">
              Reset
            </button>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-row justify-between items-center">
              <p className="text-grey-800 text-sm">Consultation Fee</p>
              <img src="/assets/chevron-down.svg" alt="" />
            </div>
            <div className="flex flex-row justify-between items-center">
              <p className="text-grey-800 text-sm">Time of Day</p>
              <img src="/assets/chevron-down.svg" alt="" />
            </div>
            <div className="flex flex-row justify-between items-center">
              <p className="text-grey-800 text-sm">Specialty</p>
              <img src="/assets/chevron-down.svg" alt="" />
            </div>
            <div className="flex flex-row justify-between items-center">
              <p className="text-grey-800 text-sm">Distance</p>
              <img src="/assets/chevron-down.svg" alt="" />
            </div>
            <div className="flex flex-row justify-between items-center">
              <p className="text-grey-800 text-sm">Language</p>
              <img src="/assets/chevron-down.svg" alt="" />
            </div>
            <div className="flex flex-row justify-between items-center">
              <p className="text-grey-800 text-sm">Gender</p>
              <img src="/assets/chevron-down.svg" alt="" />
            </div>
          </div>
        </div>
        {/* middle */}
        <div className="col-span-3 bg-grey-50 ml-4  lg:ml-6 lg:mr-6">
          <div className="flex flex-row justify-between my-6">
            <div className="flex flex-row gap-2 p-6 ">
              <img
                className="w-24 h-24 object-contain"
                src="/assets/doctor-full.png"
                alt=""
              />
              <div className="flex flex-col gap-2">
                <p className="text-grey-900 text-sm">Dr. John Doe</p>
                <div className="flex gap-2">
                  <img src="/assets/star-01.svg" alt="" />
                  <p className="text-grey-400 text-sm">4.91 • 204 reviews</p>
                </div>
                <div className="flex gap-2">
                  <img src="/assets/briefcase-01.svg" alt="" />
                  <p className="text-grey-700 text-sm">General Physician</p>
                </div>
                <div className="flex gap-2">
                  <img src="/assets/marker-pin-01.svg" alt="" />
                  <p className="text-grey-700 text-sm">Randle General Hospital, Surulere. Lagos</p>
                </div>
                <div className="flex gap-2">
                  <img src="/assets/file-heart-02.svg" alt="" />
                  <p className="text-grey-700 text-sm">
                    Accepts insurance <br className="lg:hidden"/><span className="text-grey-800 border-b border-b-grey-800">View Accepted Insurance</span>
                  </p>
                </div>
              </div>
            </div>
            <div className=" bg-primary-500 text-grey-50 p-2 flex flex-col justify-between">
              <div>
                <p>sat</p>
                <p>Feb 22</p>
              </div>

              <p className="">6 appts available</p>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className=" hidden lg-col-span-1">
          <MapComponent />
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
