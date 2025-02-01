import React, { useState } from "react";
import { checklistOptions } from "../../public/assets/assets";

const Checklist = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (event) => {
    const { value, checked } = event.target;

    setSelectedOptions((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  return (
    <div className="grid grid-cols-3 gap-4 py-6">
      {/* first row */}
      {/* checklist */}
      <div className="bg-grey-50 py-6 px-5">
        <div className="flex justify-between">
          <h3 className="font-medium">Your Checklist</h3>
          <div className="border border-grey-300 w-6 h-6"></div>
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
                  className="w-6 h-6"
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

      {/* appointments */}
      <div className="col-span-2 bg-grey-50 p-6">
        <div className="flex justify-between text-grey-900 font-medium">
          <p>Your Appointments</p>
          <button className="flex rounded-sm border border-grey-800 gap-2 p-2">
          
            <img className="w-6 h-6" src="/assets/plus.svg" alt="" />
            <p>Book an appointment</p>
          </button>
        </div>
        <div className="flex items-center justify-center">
          <img src="/assets/Task_empty.svg" alt="" />
        </div>
      </div>

      {/* second row */}

      {/* core team */}
      <div className="bg-grey-50 p-5">
        <p className="font-medium mb-6 text-grey-900">Your Core Team</p>
        <p className="text-grey-700">Find a Primary Care Doctor</p>
      </div>

      {/* recommended annual checks */}
      <div className="bg-grey-50 p-5">
        <p className="font-medium text-grey-900 mb-6">Recommended Annual Checkup</p>
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
                  className="w-6 h-6"
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

      {/* insurance provider */}
      <div className="bg-grey-50 p-5 ">
        <p className="text-grey-900 font-medium mb-6">Your Insurance Provider</p>
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
                  className="w-6 h-6"
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
    </div>
  );
};

export default Checklist;
