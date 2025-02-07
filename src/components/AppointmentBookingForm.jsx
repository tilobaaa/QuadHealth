import React, { useState, useEffect } from "react";
import Input from "../components/Input";
import ConfirmModal from "./ConfirmModal";

const AppointmentBookingForm = () => {
  const [docSlot, setDocSlot] = useState([]);
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState();
  const [showModal, setShowModal] = useState(false)

  const getAvaialableSlot = () => {
    let today = new Date();
    let slotsArray = [];

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
    <div className="lg:col-span-1 bg-grey-50 mx-10 p-4 h-fit lg:flex lg:flex-col gap-6">
      <h4 className="text-center mb-6">
        Book an appointment with Dr. Khaleemah Nuraini
      </h4>
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

        <button onClick={()=>{setShowModal(true)}} className="w-full rounded-sm bg-primary-500 text-grey-50 py-3 px-8 cursor-pointer hover:scale-105 duration-500">
          Book Appointment
        </button>
        {showModal && <ConfirmModal closeModal={()=>{setShowModal(false)}}/>}
      </div>
    </div>
  );
};

export default AppointmentBookingForm;
