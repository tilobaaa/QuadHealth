import { useState } from "react";

const Input = (props) => {
  const [error, setError] = useState(false);

  return (
    <div>
      <div className="relative">
        <span className="absolute left-2 top-1/2 transform -translate-y-1/2">
          <img src={props.img} className="" alt="" />
        </span>
        {error && (
          <span className="absolute right-2 top-1/2 transform -translate-y-1/2">
            <img src="/assets/x-square.svg" className="" alt="" />
          </span>
        )}
        <input
          type={props.type}
          id={props.id}
          placeholder="Enter an email address"
          className={`bg-gray-50 peer w-full border ${
            error
              ? "border-error-500 focus:ring-error-500"
              : "border-gray-300 focus:ring-primary-200"
          }  rounded pl-10 pr-2 py-4 focus:outline-none focus:ring-2   placeholder-transparent ${props.className}`}
        />
        <label
          htmlFor="email"
          className={`absolute bg-gray-50 left-10 top-4 px-1 ${
            error ? "text-error-500" : "text-gray-400"
          }  text-base transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3 peer-focus:text-sm ${
            error ? "peer-focus:text-error-500" : "peer-focus:text-primary-500"
          } `}
        >
          {props.label}
        </label>
      </div>
      {error && <p className="text-error-500">{props.errorMessage}</p>}
    </div>
  );
};

export default Input;
