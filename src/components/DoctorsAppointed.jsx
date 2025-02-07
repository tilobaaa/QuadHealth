import React from "react";
import { useNavigate } from "react-router-dom";

const DoctorsAppointed = () => {

  const navigate = useNavigate()
  return (
    <div className="flex flex-row gap-2 items-start mt-6">
      <img onClick={()=>{navigate('/doctor/e1/profile')}} className="cursor-pointer hover:scale-110 duration-500" src="/assets/doc1.png" alt="" />
      <div className="flex flex-col gap-2">
        <div>
          <p className="text-primary-500 text-xs">GOPD</p>
          <p className="text-grey-900 text-sm">Dr. John Doe</p>
        </div>
        <div className="text-grey-600  flex flex-col gap-2">
          <div className="flex flex-row gap-2 items-center">
            <img src="/assets/briefcase-01.svg" alt="" />
            <p>General Practitioner</p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <img src="/assets/marker-pin-01.svg" alt="" />
            <p>Randle General Hospital, Surulere. Lagos</p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <img  src="/assets/calendar-check-01.svg" alt="" />
            <div className="flex flex-row gap-1 items-center">
              <p>20/2/2025</p>
              <hr className="h-full  border border-grey-800"/>
              <p>13:10pm</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <button onClick={()=>{navigate('/doctor/e1/profile')}} className="px-4 py-2 text-lg text-grey-50 cursor-pointer bg-grey-800 rounded-sm cursor-pointer hover:scale-105 transition-all duration-500">
            Reshedule
          </button>
          <button className="px-4 py-2 text-lg text-error-500 border border-error-500 rounded-sm cursor-pointer hover:scale-105 transition-all duration-500">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorsAppointed;
