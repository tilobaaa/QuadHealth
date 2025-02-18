import React, { useState } from "react";

const FilterItem = ({ label, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  {
    /* <div className="flex flex-row justify-between items-center">
        <p className="text-grey-800 text-sm">Consultation Fee</p>
        <img src="/assets/chevron-down.svg" alt="" />
    </div> */
  }

  const handleSelection = (option) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [label]: prev[label]?.includes(option)
        ? prev[label].filter((item) => item !== option) // Uncheck
        : [...(prev[label] || []), option], // Check
    }));
  };

  return (
    <div className="flex flex-col gap-2">
      <div
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="flex flex-row justify-between items-center cursor-pointer"
      >
        <p className="text-grey-800 text-sm">{label}</p>
        <img
          src={isOpen ? "/assets/chevron-up.svg" : "/assets/chevron-down.svg"}
          alt=""
        />
      </div>
      {/* Options (Only show when open) */}
      {isOpen && (
        <div className="bg-gray-100 p-2 rounded-md">
          {options.map((option, index) => (
            <label
              key={index}
              className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selectedFilters[label]?.includes(option) || false}
                onChange={() => handleSelection(option)}
                className="w-4 h-4"
              />
              {option}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterItem;
