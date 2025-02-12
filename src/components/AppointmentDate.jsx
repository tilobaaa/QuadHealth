import { forwardRef } from "react";

const AppointmentInput = forwardRef(
  (
    {
      label,
      type = "text",
      name,
      setError,
      value,
      onChange,
      error,
      icon,
  
    },
    ref
  ) => {
    return (
      <div className="flex-1 lg:flex-3">
        <div className="relative h-full">
          {/* Left Icon */}
          {icon && (
            <span onClick={type === 'date' ? ()=> ref.current?.showPicker() : undefined} className="absolute left-2 top-1/2 transform -translate-y-1/2 cursor-pointer">
              <img src={icon} alt="" />
            </span>
          )}
          {error && (
            <span className="absolute right-2 top-1/2 transform -translate-y-1/2">
              <img
                onClick={() => {
                  setError("");

                  ref.current.value = "";
                }}
                src="/assets/x-square.svg"
                className=""
                alt=""
              />
            </span>
          )}

          {/* Input Field */}
          <input
            id={name}
            ref={ref}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder="" // Keep placeholder empty for label animation
            className={` peer w-full h-full border ${
              error
                ? "border-error-500 focus:ring-error-500"
                : "border-grey-300 focus:ring-primary-200"
            } 
              rounded ${
                icon ? "pl-10" : "pl-4"
              } pr-2 py-4 bg-grey-50 focus:outline-none focus:ring-2 focus:ring-primary-200 placeholder-transparent text-grey-800 `}
          />

          {/* Floating Label */}
          <label
            htmlFor={name}
            className={`absolute bg-grey-50 left-${icon ? "10" : "2"} ${
              error
                ? "text-error-500 peer-focus:text-error-500"
                : "text-grey-400 peer-focus:text-primary-500"
            } px-1 text-base transition-all 
peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-grey-400 
peer-focus:-top-2 peer-focus:text-sm peer-focus:px-1 `}
          >
            {label}
          </label>

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
      </div>
    );
  }
);

export default AppointmentInput;