import React from "react";

const ConfirmModal = (props) => {
  
  return (
    <div className="absolute w-full h-full top-0 left-0 flex justify-center items-center ">
      <div onClick={props.closeModal} className="w-full h-full bg-gray-400 opacity-50 fixed"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 p-10 border border-gray-300 rounded-sm bg-gray-50 flex flex-col gap-10 w-4/5 z-10">
        <div className="flex justify-between items-center">
          <h1 className="font-medium text-grey-900 text-xl sm:text-2xl">
            Review your Booking Information
          </h1>
          <img className="cursor-pointer" onClick={props.closeModal} src="/assets/x-close.svg" alt="Close" />
        </div>
        <div className="flex gap-2 p-4 border border-gray-300">
          <img
            className="w-15 h-15 sm:w-28 sm:h-28"
            src="/assets/profile-picture.png"
            alt="Doctor"
          />
          <div className="flex flex-col gap-2 text-sm">
            <h1 className="">Dr. Khaleemah Nuraini</h1>
            <div className="flex gap-2 items-center">
              <img
                className="w-4 h-4"
                src="/assets/briefcase-01.svg"
                alt="Briefcase"
              />
              <p className="text-gray-700">General Physician</p>
            </div>
            <div className="flex gap-2 items-center">
              <img
                className="w-4 h-4"
                src="/assets/coins-stacked-03.svg"
                alt="Fee"
              />
              <p className="text-gray-700">Consultation Fee: 10,000 NGN</p>
            </div>
            <div className="flex gap-2 items-center">
              <img
                className="w-4 h-4"
                src="/assets/marker-pin-01.svg"
                alt="Location"
              />
              <p className="text-gray-700">
                Randle General Hospital, Surulere. Lagos
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 text-sm">
          <div className="p-4 border border-gray-300 ">
            <p className="text-grey-700 font-medium">Reason for Visit</p>
            <p className="text-grey-900">General Wellness Checkup</p>
          </div>
          <div className="p-4 border border-gray-300">
            <p className="text-grey-700 font-medium">Phone Number</p>
            <p className="text-grey-900">+234 8184498068</p>
          </div>
          <div className="p-4 border border-gray-300">
            <p className="text-grey-700 font-medium">Date and Time</p>
            <p className="text-grey-900">
              Saturday, 22 February, 2025 | 8:30 am
            </p>
          </div>
          <div className="p-4 border border-gray-300">
            <p className="text-grey-700 font-medium">
              Insurance Provider and Policy Number
            </p>
            <p className="text-grey-900">Leadway Health | 12345678</p>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" name="confirmInfo" id="confirmInfo" />
            <label htmlFor="confirmInfo" className="text-sm">
              I confirm that the information provided is accurate and belongs to
              me, and Quad Health is not liable for any incorrect details
              submitted.
            </label>
          </div>
        </div>
        <div className="flex gap-4">
          <button className=" cursor-pointer w-full bg-primary-500 text-grey-50 px-4 py-2 rounded  ">
            Book Appointment
          </button>
          <button className=" cursor-pointer w-full bg-gray-300 px-4 py-2 rounded hover:scale-105 duration-500">
            Edit Information
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
