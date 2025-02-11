import { useState, useEffect, useRef } from "react";

const CityInput = () => {
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
    <div ref={dropdownRef} className="flex-1 lg-flex-3 relative ">
      <input
        className={`peer w-full h-full pl-10 py-6 sm:px-4 lg:pr-4 lg:pl-10  lg:py-6 border border-grey-400  bg-grey-50 focus:outline-none focus:ring-2 focus:ring-primary-200 placeholder-transparent  `}
        type="text"
        id="location"
        name="location"
        placeholder="your city or location"
        onFocus={() => {
          setIsFocused(true);
        }}
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
      {/* Floating Label */}
      <label
        htmlFor={"location"}
        className={`absolute bg-grey-50 left-10  px-1 text-base transition-all 
peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-grey-400 
peer-focus:-top-2 peer-focus:text-sm peer-focus:px-1 peer-focus:text-grey-400 `}
      >
        Your city, state or location
      </label>

      <img
        className="absolute top-1/2 -translate-1/2 left-6"
        src="/assets/marker-pin-01.svg"
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
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer flex gap-4"
                onClick={() => {
                  setQuery(option);
                  setIsFocused(false);
                }}
              >
                <img src="/assets/marker-pin-01.svg" alt="" />
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

export default CityInput;
