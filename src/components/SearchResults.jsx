import React from "react";
import MapComponent from "./MapContainer";
import { useNavigate } from "react-router-dom";

const SearchResults = () => {

  const navigate = useNavigate();
  return (
    <div>
      <div className="flex gap-4 sm:hidden">
        <button className="flex gap-3 items-center justify-center border border-grey-800 p-3 w-full rounded-sm text-grey-800 font-medium">
          <img src="/assets/settings-04.svg" alt="" />
          <p>Filter</p>
        </button>
        <button className="flex gap-3 items-center justify-center border border-grey-800 py-3 w-full rounded-sm text-grey-800 font-medium">
          <img className="w-6 h-6" src="/assets/map-01.svg" alt="" />
          <p>View Map</p>
        </button>
      </div>
      <div className="flex justify-between items-center mb-6">
        <p className="text-grey-800 text-sm sm:text-xl ">24 Results</p>
        <p className="text-grey-700 text-sm sm:text-lg">Saturday, 22.02.2025</p>
        <div className="flex gap-2">
          <img src="/assets/chevron-left.svg" alt="" />
          <img src="/assets/chevron-right.svg" alt="" />
        </div>
      </div>
      <div className="sm:grid grid-cols-5">
        {/* left side  */}
        <div className="hidden sm:col-span-2 lg:col-span-1 bg-grey-50 py-6 px-4">
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
        <div className="col-span-3 bg-grey-50 sm:ml-4  lg:ml-6 lg:mr-6">
          <div className="flex flex-row justify-between my-6">
            <div className="flex flex-row gap-2 p-6 ">
              <img
                className="w-16 h-16 lg:w-24 lg:h-24 object-contain cursor-pointer"
                src="/assets/doc-profile.png"
                alt=""
                onClick={()=>{navigate('/doctor/e1/profile')}}
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
                  <p className="text-grey-700 text-sm">
                    Randle General Hospital, Surulere. Lagos
                  </p>
                </div>
                <div className="flex gap-2 items-start">
                  <img src="/assets/file-heart-02.svg" alt="" />
                  <p className="text-grey-700 text-sm">
                    Accepts insurance <br className="lg:hidden" />
                    <span className="text-grey-800 border-b border-b-grey-800">
                      View Accepted Insurance
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className=" bg-primary-500 text-grey-50 p-2 hidden sm:flex flex-col justify-between">
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
