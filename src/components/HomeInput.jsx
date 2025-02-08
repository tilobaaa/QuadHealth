import React, { useState, useEffect, useRef } from "react";

const HomeInput = () => {
  const [isFocused, setIsFocused] = useState(false);
  const options = [
    "Apple",
    "Banana",
    "Cherry",
    "Grapes",
    "Mango",
    "Orange",
    "Strawberry",
  ];
  const [query, setQuery] = useState("");

  const dropdownRef = useRef(null);

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(query.toLowerCase())
  );


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <div ref={dropdownRef} className="flex-1 lg:flex-5 relative ">
      <input
        className="w-full h-full py-6 sm:px-4 lg:pr-4 lg:pl-10  lg:py-6 border border-grey-400"
        type="text"
        placeholder="Search for  condition,  field or doctor name "
        onFocus={() => {
          setIsFocused(true);
        }}
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
      <img
        className="absolute top-1/2 -translate-1/2 left-6 "
        src="/assets/input-search-md.svg"
        alt=""
      />
      {isFocused && (
        <img
          onClick={() => {
            setIsFocused(false);
          }}
          className="absolute top-1/2 -translate-1/2 right-1 cursor-pointer"
          src="/assets/x-square.svg"
          alt=""
        />
      )}
      {isFocused && (
        <div className="absolute w-full mt-1 bg-white border rounded-md shadow-md max-h-48 overflow-y-auto z-50">
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option, index) => (
              <div
                key={index}
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => {
                  setQuery(option);
                  setIsFocused(false);
                }}
              >
                {option}
              </div>
            ))
          ) : (
            <div className="px-4 py-2 text-gray-500">No results found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default HomeInput;
