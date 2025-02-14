import React, { useEffect, useState } from "react";
import MedicalFields from "../components/medicalFields";
import Checklist from "../components/Checklist";
import CustomDatePicker from "../components/CustomDatePicker";
import HomeInput from "../components/HomeInput";
import CityInput from "../components/CityInput";
import SearchResults from "../components/SearchResults";
import { currentTime, getUserLocation } from "../components/utilities";
import { useRef } from "react";
import AppointmentInput from "../components/AppointmentDate";
import useOnboardingStore from "../store/onBoardingStore";

const Home = () => {
  const dateRef = useRef();
  const [timeNow, setTimeNow] = useState(currentTime());
  const [location, setLocation] = useState({ state: "", country: "" });
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const {searchData} = useOnboardingStore()

  // to get the current time
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeNow(currentTime());
    }, 60000);

    return () => clearTimeout(timer);
  }, [timeNow]);

  //to get the user location
  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const userLocation = await getUserLocation();
        setLocation(userLocation);
      } catch (error) {
        console.error("where are you");
      }
    };
    fetchLocation();
  }, []);

  

  // after user submits search input 
  const handleSearch = (e) => {
    setShowSearchResults(true);
    console.log({guy:searchData});
  }
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
              <p>{`${location.state}, ${location.country}`}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:hidden flex gap-2 mb-6 ">
        <div className="flex items-center gap-1">
          <img src="/assets/marker-pin-01.svg" alt="" />
          <p>{`${location.state}, ${location.country}`}</p>
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

        <button onClick={handleSearch} className="bg-primary-500 flex items-center justify-center rounded-sm p-6 gap-2 cursor-pointer hover:scale-105 duration-500">
          <img className="sm:m-auto w-fit" src="/assets/search-md.svg" alt="" />
          <span className="text-grey-50 font-medium sm:hidden">
            Find Doctors
          </span>
        </button>
      </div>
      {showSearchResults ? (
        <SearchResults />
      ) : (
        <>
          <MedicalFields />
          <Checklist />
        </>
      )}
    </div>
  );
};

export default Home;
