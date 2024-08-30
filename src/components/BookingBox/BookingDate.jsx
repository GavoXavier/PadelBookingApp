import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const BookingDate = ({ selectedDate, handleDateChange }) => {
  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <h2 className="text-2xl font-bold mb-6 text-orange-500">Select Booking Date</h2>
        <div className="mb-6">
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholderText="Click to select a date"
            dateFormat="MMMM d, yyyy"
            minDate={new Date()}
          />
        </div>
      </div>

      <div className="mt-8 flex justify-end items-center flex-1">
        <button
          onClick={() => handleDateChange(selectedDate)}
          disabled={!selectedDate}
          className={`bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center ${
            !selectedDate ? 'opacity-50 cursor-not-allowed' : 'hover:bg-orange-600'
          }`}
        >
          Next: Courts & Time
          <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default BookingDate;
