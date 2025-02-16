import React, {forwardRef, useState, useEffect, useRef } from "react";
import { generalOptions as options } from "../../public/assets/assets";


const HomeInput = forwardRef((props,ref) => {
  const [isFocused, setIsFocused] = useState(false);

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
        className={`peer w-full h-full pl-10 py-6 sm:px-4 lg:pr-4 lg:pl-10  lg:py-6 border border-grey-400  bg-grey-50 focus:outline-none focus:ring-2 focus:ring-primary-200 placeholder-transparent  `}
        type="text"
        ref={ref}
        id="random-search"
        name="random-search"
        placeholder="Search for  condition,  field or doctor name "
        onFocus={() => {
          setIsFocused(true);
        }}
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
      {/* Floating Label */}
      <label
        htmlFor={"random-search"}
        className={`absolute bg-grey-50 left-10  px-1 text-base transition-all 
peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-grey-400 
peer-focus:-top-2 peer-focus:text-sm peer-focus:px-1 peer-focus:text-grey-400 `}
      >
        Search for  condition, field or doctor name 
      </label>

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
});

export default HomeInput;


