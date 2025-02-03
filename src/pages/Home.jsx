import React from "react";
import MedicalFields from "../components/medicalFields";
import Checklist from "../components/Checklist";
import CustomDatePicker from "../components/CustomDatePicker";
import HomeInput from "../components/HomeInput";
import CityInput from "../components/CityInput";
import SearchResults from "../components/SearchResults";

const Home = () => {
  return (
    <div className="py-10 px-20 w-full flex-grow bg-grey-100 relative">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-grey-800 text-3xl">Good Morning!</h1>
          <p className="text-grey-600">
            Ready to take charge of your health today?
          </p>
        </div>
        <div className="text-right">
          <div className=" ">
            <div className="flex items-center">
              <img src="/assets/clock.svg" alt="" />
              <p>12:15 PM</p>
            </div>

            <div className="flex items-center">
              <img src="/assets/marker-pin-01.svg" alt="" />
              <p>Lagos, Nigeria</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex">
        <HomeInput/>
        <CityInput/>
        <div className="flex-3 relative ">
        <input
          className="w-full h-full pr-4 pl-10 py-6 border border-grey-400"
          type="text"
          placeholder="Your location"
        />
        <img className="absolute top-1/2 -translate-1/2 left-6" src="/assets/marker-pin-01.svg" alt="" />
        </div>
       
        <button className="bg-primary-500 flex items-center rounded-sm p-6">
          <img className="m-auto" src="/assets/search-md.svg" alt="" />
        </button>
      </div>

      <MedicalFields/>
      <Checklist/>
      <SearchResults/>
      
    </div>
  );
};

export default Home;
