import React, { useState } from "react";
import {
  checklistOptions,
  coreTeam,
  recommendedCheckup,
} from "../../public/assets/assets";
import DoctorsAppointed from "./DoctorsAppointed";

const Checklist = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [appointments, setAppointments] = useState([0,1])

  const handleChange = (event) => {
    const { value, checked } = event.target;

    setSelectedOptions((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  }

  const toggleAll = () => {
    if (selectedOptions.length === checklistOptions.length) {
      setSelectedOptions([]); // Uncheck all
    } else {
      setSelectedOptions(checklistOptions.map((check) => check.label)); // Check all
    }
  };

  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-6 py-6">
      {/* first row */}

      {/* appointments */}
      <div className="bg-grey-50 px-6 py-3 row-span-2">
        <div className="flex justify-between items-center text-grey-900 font-medium">
          <p>Your Appointments</p>
          <button className="flex  rounded-sm border border-grey-800 gap-2 p-2 items-center cursor-pointer hover:scale-105 duration-500">
            <img className="w-6 h-6" src="/assets/plus.svg" alt="" />
            <p className="text-sm">Book an appointment</p>
          </button>
        </div>

        {appointments.length ? <DoctorsAppointed />   : (
          <div className="flex items-center justify-center">
          <img src="/assets/Task_empty.svg" alt="" />
        </div>
        ) }
        
        
      </div>

      {/* checklist */}
      <div className="bg-grey-50 py-6 px-5 ">
        <div className="flex justify-between">
          <h3 className="font-medium">Your Checklist</h3>
          <div className="border border-grey-300 w-6 h-6 cursor-pointer"  onClick={toggleAll}></div>
        </div>
        <div>
          {checklistOptions.map((check) => {
            return (
              <label
                className="flex items-center justify-between mt-4"
                key={check.label}
              >
                <div className="flex gap-4">
                  <img src={check.img} alt="" />
                  <span>{check.label}</span>
                </div>
                <input
                  className="w-6 h-6 cursor-pointer"
                  type="checkbox"
                  value={check.label}
                  checked={selectedOptions.includes(check.label)}
                  onChange={handleChange}
                />
              </label>
            );
          })}
        </div>
      </div>

      {/* recommended annual checks */}
      <div className="bg-grey-50 p-5 col-span-1">
        <p className="font-medium text-grey-900 mb-6">
          Recommended Annual Checkup
        </p>
        <p>Essential health screenings to maintain overall well-being</p>
        <div>
          {recommendedCheckup.map((check) => {
            return (
              <div
                className="flex items-center justify-between mt-4"
                key={check.title}
              >
                <div className="flex gap-4">
                  <img src={check.img} alt="" />
                  <span className="text-grey-600">{check.title}</span>
                </div>
                <button className="py-1 px-2 border border-grey-800 rounded-sm bg-grey-50 text-grey-800 ">
                  Book
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* second row */}
      {/* core team */}
      <div className="bg-grey-50 p-5">
        <p className="font-medium mb-6 text-grey-900">Your Core Team</p>
        <div className="flex flex-col gap-6">
          {coreTeam.map((core) => {
            return (
              <div
                key={core.heading}
                className="flex justify-between items-start"
              >
                <div className="flex flex-col">
                  <span className="text-sm text-grey-700 font-medium">
                    {core.heading}
                  </span>
                  <span className="text-grey-700 text-xs ">{core.body}</span>
                </div>
                <button className="py-1 px-2 border border-grey-800 rounded-sm bg-grey-50 text-grey-800 ">
                  Add
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* insurance provider */}
      <div className="bg-grey-50 p-5 col-span-1">
        <p className="text-grey-900 font-medium mb-6">
          Your Insurance Provider
        </p>
        <div className="flex flex-col gap-6">
          {/* medical */}
          <div className="flex justify-between items-start">
            <div className="flex flex-col">
              <p className="text-grey-700 text-sm">Medical</p>
              <span className="text-grey-500 text-xs">None Added</span>
            </div>
            <button className="py-1 px-2 border border-grey-800 rounded-sm bg-grey-50 text-grey-800 ">
              Add
            </button>
          </div>

          {/* dental */}
          <div className="flex flex-col gap-6">
            <div className="flex justify-between items-start">
              <div className="flex flex-col">
                <p className="text-grey-700 text-sm">Dental</p>
                <span className="text-grey-500 text-xs">None Added</span>
              </div>
              <button className="py-1 px-2 border border-grey-800 rounded-sm bg-grey-50 text-grey-800 ">
                Add
              </button>
            </div>
          </div>

          {/* visiom */}
          <div className="flex flex-col gap-6">
            <div className="flex justify-between items-start">
              <div className="flex flex-col">
                <p className="text-grey-700 text-sm">Vision</p>
                <span className="text-grey-500 text-xs">None Added</span>
              </div>
              <button className="py-1 px-2 border border-grey-800 rounded-sm bg-grey-50 text-grey-800 ">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checklist;
