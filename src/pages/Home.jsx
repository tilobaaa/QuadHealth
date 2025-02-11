import React, { useEffect, useState } from "react";
import MedicalFields from "../components/medicalFields";
import Checklist from "../components/Checklist";
import CustomDatePicker from "../components/CustomDatePicker";
import HomeInput from "../components/HomeInput";
import CityInput from "../components/CityInput";
import SearchResults from "../components/SearchResults";
import { currentTime } from "../components/utilities";
import { useRef} from "react";
import AppointmentInput from "../components/AppointmentDate";

const Home = () => {
  const dateRef = useRef();
  const [timeNow, setTimeNow] = useState(currentTime())
  
  useEffect(()=>{
    const timer = setTimeout(()=>{
      setTimeNow(currentTime());
    }, 60000)

    return ()=>clearTimeout(timer)
  }, [])
  return (
    <div className="py-8 px-14 lg:py-10 lg:px-20 w-full flex-grow bg-grey-100 relative">
      <div className="flex justify-between items-center mb-4 sm:mb-6">
        <div>
          <h1 className="text-grey-800 text-3xl">Good Morning!</h1>
          <p className="text-grey-600">
            Ready to take charge of your health today?
          </p>
        </div>
        <div className="hidden sm:block text-right">
          <div className=" ">
            <div className="flex items-center">
              <img src="/assets/clock.svg" alt="" />
              <p>{timeNow}</p>
            </div>

            <div className="flex items-center">
              <img src="/assets/marker-pin-01.svg" alt="" />
              <p>Lagos, Nigeria</p>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:hidden flex gap-2 mb-6 ">
      <div className="flex items-center gap-1">
          <img src="/assets/marker-pin-01.svg" alt="" />
          <p>Lagos, Nigeria</p>
        </div>
        <div className="flex items-center gap-1">
          <img src="/assets/clock.svg" alt="" />
          <p>{timeNow}</p>
        </div>

       
      </div>

      <div className="w-full flex flex-col sm:flex-row">
        <HomeInput />
        <CityInput />
        <AppointmentInput
          icon={"/assets/calendar.svg"}
          ref={dateRef}
          name="appointmentDate"
          type="date"
          label="Appointment Date"
        />
        {/* <div className="flex-1 lg-flex-3 relative ">
        <input
          className="w-full h-full pr-4 pl-10 py-6 border border-grey-400"
          type="date"
          placeholder="Your location"
        />
        <img className="absolute top-1/2 -translate-1/2 left-6" src="/assets/marker-pin-01.svg" alt="" />
        </div> */}
        {/* 
         <Input
          icon={"/assets/calendar.svg"}
          ref={dateRef}
          name="appointmentDate"
          type="date"
          label="Appointment Date"

        /> */}

        <button className="bg-primary-500 flex items-center justify-center rounded-sm p-6 gap-2">
          <img className="sm:m-auto w-fit" src="/assets/search-md.svg" alt="" />
          <span className="text-grey-50 font-medium sm:hidden">Find Doctors</span>
        </button>
      </div>

      <MedicalFields />
      <Checklist />
      <SearchResults />
    </div>
  );
};

export default Home;
