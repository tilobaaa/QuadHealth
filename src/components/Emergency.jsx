import React from 'react'
import Input from './Input'
import { useState } from 'react'

const Emergency = () => {

    const [error,setError] = useState(false)
  return (
    <div className='mt-10 w-full max-w-md flex flex-col gap-4'>
        <Input
          name=""
          icon="/assets/user-02.svg"
          label="First Name"
          errorMessage="This is a required field"
          type="text"
          id=""
        />
        <Input
          name=""
          label="Last Name"
           icon="/assets/user-02.svg"
          errorMessage="This is a required field"
          type="text"
          id=""
        />

        <select
          className="w-full text-grey-400 bg-grey-50 text-sm border border-grey-400 rounded-sm pl-10 pr-4 py-4"
          name=""
          id=""
        >
          <option value="">Relationship</option>
         
        </select>

        {/* phone number */}
        <div>
          <div className="relative">
            <span className="absolute left-2 top-1/2 transform -translate-y-1/2 flex gap-2 items-center">
              <div className="flex gap-2">
                <div className="w-2 h-4 bg-[#6DA544]"></div>
                <div className="w-2 h-4 bg-[#6DA544]"></div>
              </div>
              <img src="/assets/chevron-down.svg" className="" alt="" />
            </span>
            {error && (
              <span className="absolute right-2 top-1/2 transform -translate-y-1/2">
                <img src="/assets/x-square.svg" className="" alt="" />
              </span>
            )}
            <input
              type="password"
              id="password"
              placeholder="Enter a Password"
              className={`bg-grey-50 peer w-full border ${
                error
                  ? "border-error-500 focus:ring-error-500"
                  : "border-grey-300 focus:ring-primary-200"
              }  rounded pl-20 pr-2 py-4 focus:outline-none focus:ring-2   placeholder-transparent`}
            />
            <label
              htmlFor="password"
              className={`absolute bg-grey-50 left-20 top-4 px-1 ${
                error ? "text-error-500" : "text-grey-400"
              }  text-base transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-grey-400 peer-focus:-top-3 peer-focus:text-sm ${
                error
                  ? "peer-focus:text-error-500"
                  : "peer-focus:text-primary-500"
              } `}
            >
              (+234) 000-0000-000
            </label>
          </div>
          {error && (
            <p className="text-error-500">Enter a valid phone number</p>
          )}
        </div>
    </div>
  )
}

export default Emergency