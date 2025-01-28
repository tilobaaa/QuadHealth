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
          name={props.name}
          type={props.type}
          id={props.id}
          value={props.value}
          
          placeholder="Enter an email address"
          className={`bg-grey-50 peer w-full border ${
            error
              ? "border-error-500 focus:ring-error-500"
              : "border-grey-300 focus:ring-primary-200"
          }  rounded pl-10 pr-2 py-4 focus:outline-none focus:ring-2 placeholder-transparent `}
          
        />
        <label
          htmlFor={props.id}
          className={`absolute bg-grey-50 left-10 top-4 px-1 ${
            error ? "text-error-500" : "text-grey-400"
          }  text-base transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-grey-400 peer-focus:-top-3 peer-focus:text-sm ${
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
