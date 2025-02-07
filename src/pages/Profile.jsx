import React, { useState, useEffect } from "react";
import Input from "../components/Input";
import { shortText, fullText } from "../../public/assets/assets";
import { useNavigate } from "react-router-dom";

const Profile = () => {

  const navigate = useNavigate()
  const [docSlot, setDocSlot] = useState([]);
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState();
  const [showFullText, setShowFullText] = useState(false);

  const getAvaialableSlot = () => {
    let today = new Date();
    let slotsArray = [];
    //<Route path='/doctor/:id/bookAppointment' element={<AppointmentBookingForm/>} />
   

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(12, 0, 0, 0);

      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(
          currentDate.getHours() > 8 ? currentDate.getHours() + 1 : 8
        );
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(8);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });

        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      slotsArray.push(timeSlots);
    }

    setDocSlot(slotsArray);
  };

  useEffect(() => {
    getAvaialableSlot();
  }, []);

  return (
    <div className="flex-grow bg-grey-100 py-10 px-20">
      <div className="lg:grid grid-cols-3">
        {/* left side */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <div className=" bg-grey-50 p-4 flex gap-1 ">
            <img
              className="w-28 h-28"
              src="/assets/profile-picture.png"
              alt=""
            />
            <div className="flex flex-col gap-2">
              <h1>Dr. Khaleemah Nuraini</h1>
              <div className="flex gap-2 items-center">
                <img
                  className="w-4 h-4"
                  src="/assets/briefcase-01.svg"
                  alt=""
                />
                <p className="text-grey-700">General Physician</p>
              </div>
              <div className="flex gap-2 items-center">
                <img
                  className="w-4 h-4"
                  src="/assets/coins-stacked-03.svg"
                  alt=""
                />
                <p className="text-grey-700">Consultation Fee: 10,000 NGN</p>
              </div>
              <div className="flex gap-2 items-center">
                <img
                  className="w-4 h-4"
                  src="/assets/marker-pin-01.svg"
                  alt=""
                />
                <p className="text-grey-700">
                  Randle General Hospital, Surulere. Lagos
                </p>
              </div>
            </div>
          </div>
          <button onClick={()=>{navigate('/doctor/e1/bookAppointment')}}  className="w-full p-3 lg:hidden text-grey-50 bg-primary-500 rounded-sm cursor-pointer hover:scale-105 duration-500">
            Book an Appointment
          </button>
          <div>
            <div className="flex justify-between">
              <p>About</p>
              <p>Insurance</p>
              <p>Reviews</p>
            </div>
            <hr />
          </div>
          <div className="bg-grey-50 p-4">
            <p className="text-grey-700">
              {showFullText ? fullText : shortText}{" "}
            </p>
            <p
              onClick={() => setShowFullText(!showFullText)}
              className="border-bottom border-b-grey-800 cursor-pointer"
            >
              {showFullText ? "See less" : "See more"}
            </p>
          </div>
          <div className="w-full grid grid-cols-2 bg-grey-50">
            <div className="col-span-1 p-4 border border-grey-300 flex flex-col gap-4">
              <h4 className="text-grey-900 font-medium">General Information</h4>
              <div className="flex flex-row gap-1">
                <p className="text-grey-800">Specialties-</p>
                <p className="text-grey-700">
                  Family Physician, General Physician, Primary Care Doctor
                </p>
              </div>
              <div className="flex flex-row gap-1">
                <p className="text-grey-800">Experience -</p>
                <p className="text-grey-700">+12 years of medical practice</p>
              </div>
              <div className="flex flex-row gap-1">
                <p className="text-grey-800">Office Hours-</p>
                <p className="text-grey-700">
                  Monday to Saturday, 8:00 AM – 8:00 PM
                </p>
              </div>
            </div>
            <div className="col-span-1 p-4 border border-grey-300 flex flex-col gap-4">
              <h4 className="text-grey-900 font-medium">
                Certifications and Memberships
              </h4>
              <p className="text-grey-700">
                Doctor of Medicine (M.D.) from the University of Ibadan
              </p>
              <p className="text-grey-700">
                Certified by the Nigerian Medical and Dental Council (NMDC)
              </p>
              <p className="text-grey-700">
                Member of the Nigerian Medical Association (NMA)
              </p>
            </div>
            <div className="col-span-1 p-4 border border-grey-300 flex flex-col gap-4">
              <h4 className="text-grey-900 font-medium">Services Provided</h4>
              <div className="flex flex-row gap-1">
                <p className="text-grey-800">1.</p>
                <p className="text-grey-700">
                  Routine health check-ups and physical examinations
                </p>
              </div>
              <div className="flex flex-row gap-1">
                <p className="text-grey-800">2.</p>
                <p className="text-grey-700">
                  Diagnosis and management of common illnesses
                </p>
              </div>
              <div className="flex flex-row gap-1">
                <p className="text-grey-800">3.</p>
                <p className="text-grey-700">Preventive health screenings</p>
              </div>
              <div className="flex flex-row gap-1">
                <p className="text-grey-800">4.</p>
                <p className="text-grey-700">
                  Lifestyle and wellness consultations
                </p>
              </div>
            </div>

            <div className="col-span-1 p-4 border border-grey-300 flex flex-col gap-4">
              <h4 className="text-grey-900 font-medium">Languages Spoken</h4>
              <div className="flex flex-row gap-1">
                <p className="text-grey-800">1.</p>
                <p className="text-grey-700">English</p>
              </div>
              <div className="flex flex-row gap-1">
                <p className="text-grey-800">2.</p>
                <p className="text-grey-700">Yoruba</p>
              </div>
              <div className="flex flex-row gap-1">
                <p className="text-grey-800">3.</p>
                <p className="text-grey-700">Hausa</p>
              </div>
              <div className="flex flex-row gap-1">
                <p className="text-grey-800">4.</p>
                <p className="text-grey-700">French</p>
              </div>
            </div>
          </div>
          <div className="w-full bg-grey-50 p-4">
            <p>Office Location</p>
            <div>
              <p>Randle General Hospital, Surulere, Lagos. Nigeria</p>
              <button className="font-medium text-grey-800">
                Get Directions
              </button>
            </div>
            {/* map of location */}
          </div>
          <div className="p-4 bg-grey-50">
            <p>Accepted Insurance Providers</p>
            <p>
              Verify if this doctor accepts your insurance provider and plan
            </p>

            <Input icon="/assets/seearch-md.svg" />
            <p>Top Insurance Providers acepted by this health provider</p>
            <div className="flex flex-wrap gap-1">
              <div className="flex items-center gap-1 text-sm w-1/3">
                <img src="/assets/AXA.svg" alt="" />
                <p>Axa Mansard</p>
              </div>
              <div className="flex items-center gap-1 text-sm w-1/3">
                <img src="/assets/blue-logo.png" alt="" />
                <p>Axa Mansard</p>
              </div>
              <div className="flex items-center gap-1 text-sm w-1/3">
                <img src="/assets/corner-stone.png" alt="" />
                <p>Cornerstone Insurance</p>
              </div>
              <div className="flex items-center gap-1 text-sm w-1/3">
                <img src="/assets/idA30xrnUh_logos.png" alt="" />
                <p>Consolidated Hallmark Insurance</p>
              </div>
              <div className="flex items-center gap-1 text-sm">
                <img src="/assets/leadway-logo.png" alt="" />
                <p>Axa Mansard</p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-grey-50 ">
            <p>Reviews</p>
            <p>
              All reviews are from verified Quad Health patients and can’t be
              altered by the health provider{" "}
            </p>
            <div className="flex justify-between ">
              <div className="flex flex-col gap-4">
                <p className="text-[2.5rem]">4.7</p>
                <img src="/assets/five-star" alt="" />
                <p>(20 Reviews)</p>
              </div>
              <div>{/* people that have rated and the rating summary */}</div>
              <div></div>
            </div>
            <div className="flex flex-col gap-2 my-10">
              <h4>Aishat Dosunmu</h4>
              <div className="flex flex-row gap-1 items-center ">
                <p className="text-xs text-grey-600">Feb 04, 2025</p>
                <div className="flex gap-2 ">
                  <img src="/assets/star.svg" alt="" />
                  <img src="/assets/star.svg" alt="" />
                  <img src="/assets/star.svg" alt="" />
                  <img src="/assets/star.svg" alt="" />
                  <img src="/assets/star.svg" alt="" />
                </div>
              </div>
              <p className="text-sm text-grey-600">
                Dr. Nuraini is the best! She listens carefully and provides
                personalized care. I feel reassured every time I visit. Thanks
                to her expertise, my backache is long gone and I can now enjoy
                better quality of life. I highly recommend her to anyone!
              </p>
            </div>
            <div className="flex flex-col gap-2 my-10">
              <h4>Aishat Dosunmu</h4>
              <div className="flex flex-row gap-1 items-center ">
                <p className="text-xs text-grey-600">Feb 04, 2025</p>
                <div className="flex gap-2 ">
                  <img src="/assets/star.svg" alt="" />
                  <img src="/assets/star.svg" alt="" />
                  <img src="/assets/star.svg" alt="" />
                  <img src="/assets/star.svg" alt="" />
                  <img src="/assets/star.svg" alt="" />
                </div>
              </div>
              <p className="text-sm text-grey-600">
                Dr. Nuraini is the best! She listens carefully and provides
                personalized care. I feel reassured every time I visit. Thanks
                to her expertise, my backache is long gone and I can now enjoy
                better quality of life. I highly recommend her to anyone!
              </p>
            </div>
            <div className="flex flex-col gap-2 my-10">
              <h4>Aishat Dosunmu</h4>
              <div className="flex flex-row gap-1 items-center ">
                <p className="text-xs text-grey-600">Feb 04, 2025</p>
                <div className="flex gap-2 ">
                  <img src="/assets/star.svg" alt="" />
                  <img src="/assets/star.svg" alt="" />
                  <img src="/assets/star.svg" alt="" />
                  <img src="/assets/star.svg" alt="" />
                  <img src="/assets/star.svg" alt="" />
                </div>
              </div>
              <p className="text-sm text-grey-600">
                Dr. Nuraini is the best! She listens carefully and provides
                personalized care. I feel reassured every time I visit. Thanks
                to her expertise, my backache is long gone and I can now enjoy
                better quality of life. I highly recommend her to anyone!
              </p>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="hidden lg:col-span-1 bg-grey-50 mx-10 p-4 h-fit lg:flex lg:flex-col gap-6">
          <h4>Book an appointment with Dr. Khaleemah Nuraini</h4>
          <select
            className="w-full border border-grey-300 rounded-sm px-4 py-3 text-sm text-grey-400"
            name=""
            id=""
          >
            <option value="">Reason for appointment</option>
          </select>
          {/* phone number */}
          <div>
            <p>Available Appointments</p>
            <p>Pick a suitable time for your appointment</p>
          </div>

          {/* booking slots */}
          <div>
            <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
              {docSlot.length > 0 &&
                docSlot.map((item, index) => (
                  <div
                    className={`text-center py-6 min-w-16 rounded-sm cursor-pointer ${
                      slotIndex === index
                        ? "bg-primary-500 text-white"
                        : "border border-grey-200"
                    }`}
                    key={index}
                  >
                    {item.length > 0 && (
                      <div onClick={() => setSlotIndex(index)}>
                        <p>{daysOfWeek[item[0].datetime.getDay()]}</p>
                        <p>{item[0].datetime.getDate()}</p>
                      </div>
                    )}
                  </div>
                ))}
            </div>

            <div className="flex flex-wrap items-center gap-2 w-full  mt-4 mb-6">
              {docSlot.length > 0 &&
                docSlot[slotIndex]?.length > 0 &&
                docSlot[slotIndex].map((item, index) => (
                  <p
                    onClick={() => setSlotTime(item.time)}
                    className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-sm cursor-pointer ${
                      item.time === slotTime
                        ? "text-grey-400 border border-grey-300"
                        : "bg-primary-500 text-grey-50"
                    }`}
                    key={index}
                  >
                    {item.time.toLowerCase()}
                  </p>
                ))}
            </div>
            <div>
              <select
                name=""
                id=""
                className="w-full border border-grey-300 rounded-sm px-4 py-3 text-sm text-grey-400"
              >
                <option value="">Select insurance provider (optional)</option>
              </select>
              <p className="text-xs font-medium text-[#515151]">
                This will only list all insurance provider accepted by this
                physician
              </p>
            </div>
            <div className="flex flex-col gap-6 my-6">
              <Input label="Enter your policy number (optional)" />
              <Input label="Enter additional notes" />
            </div>

            <button className="w-full rounded-sm bg-primary-500 text-grey-50 py-3 px-8">
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
