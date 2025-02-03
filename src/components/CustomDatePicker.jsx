import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";


export default function CustomDatePicker() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="w-72 bg-white shadow-lg rounded-lg p-4">
      {/* Month & Navigation */}
      <div className="flex justify-between items-center text-lg font-semibold text-gray-900 mb-2">
        <button
          className="p-2"
          onClick={() => setSelectedDate(new Date(selectedDate.setMonth(selectedDate.getMonth() - 1)))}
        >
          <img src='/assets/chevron-left.svg'size={18} className="text-gray-700" />
        </button>
        <p>{selectedDate.toLocaleString("en-US", { month: "long", year: "numeric" })}</p>
        <button
          className="p-2"
          onClick={() => setSelectedDate(new Date(selectedDate.setMonth(selectedDate.getMonth() + 1)))}
        >
          <img src='/assets/chevron-right.svg' />
        </button>
      </div>

      {/* Calendar */}
      <DayPicker
        mode="single"
        selected={selectedDate}
        onSelect={setSelectedDate}
        showOutsideDays={false} // Hides days from previous/next months
        classNames={{
          months: "grid grid-cols-1", // Ensures it's a single month
          weekdays: "grid grid-cols-7 text-xs uppercase text-gray-500 font-medium mb-1",
          weekday: "text-center",
          body: "grid grid-cols-7 gap-1", // Ensures proper row alignment
          day: "h-8 w-8 flex items-center justify-center rounded-full text-gray-900 hover:bg-gray-200",
          today: "font-bold text-gray-900",
          selected: "bg-purple-600 text-white font-bold",
        }}
      />
    </div>
  );
}

