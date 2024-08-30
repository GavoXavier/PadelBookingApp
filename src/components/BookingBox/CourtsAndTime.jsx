import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faTableTennisPaddleBall, faTimes } from '@fortawesome/free-solid-svg-icons';

const generateTimeSlots = () => {
  return ['8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'];
};

const COURT_SLOT_PRICE = 4000; // Price per slot

const CourtsAndTime = ({ setStep, selectedSlots, setSelectedSlots }) => {
  const court1Slots = generateTimeSlots();
  const court2Slots = generateTimeSlots();

  const toggleTimeSlot = (slot) => {
    if (selectedSlots.includes(slot)) {
      setSelectedSlots(selectedSlots.filter(s => s !== slot));
    } else {
      setSelectedSlots([...selectedSlots, slot]);
    }
  };

  const clearAllSlots = () => {
    setSelectedSlots([]);
  };

  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <h2 className="text-2xl font-bold mb-6 text-orange-500">Select Your Court & Time</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-white mb-4">Court 1</h3>
          <div className="grid grid-cols-3 gap-2">
            {court1Slots.map((slot) => (
              <button
                key={`court1-${slot}`}
                className={`py-2 px-4 rounded-lg border flex items-center justify-between ${selectedSlots.includes(`Court 1 - ${slot}`) ? 'bg-orange-500 text-white' : 'bg-gray-800 text-white hover:bg-gray-700'}`}
                onClick={() => toggleTimeSlot(`Court 1 - ${slot}`)}
              >
                <FontAwesomeIcon icon={faTableTennisPaddleBall} className="mr-2" />
                {slot}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-white mb-4">Court 2</h3>
          <div className="grid grid-cols-3 gap-2">
            {court2Slots.map((slot) => (
              <button
                key={`court2-${slot}`}
                className={`py-2 px-4 rounded-lg border flex items-center justify-between ${selectedSlots.includes(`Court 2 - ${slot}`) ? 'bg-orange-500 text-white' : 'bg-gray-800 text-white hover:bg-gray-700'}`}
                onClick={() => toggleTimeSlot(`Court 2 - ${slot}`)}
              >
                <FontAwesomeIcon icon={faTableTennisPaddleBall} className="mr-2" />
                {slot}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold text-white mb-2">Selected Time Slots</h3>
          {selectedSlots.length > 0 ? (
            <>
              <ul className="list-disc ml-5 text-white mb-4">
                {selectedSlots.map((slot, index) => (
                  <li key={index} className="flex justify-between items-center">
                    {slot} - Ksh. {COURT_SLOT_PRICE.toLocaleString()}
                    <button
                      className="ml-2 text-orange-500 hover:text-orange-700"
                      onClick={() => toggleTimeSlot(slot)}
                    >
                      <FontAwesomeIcon icon={faTimes} />
                    </button>
                  </li>
                ))}
              </ul>
              <div className="text-white mb-4">
                Total: Ksh. {selectedSlots.length * COURT_SLOT_PRICE}
              </div>
              <button
                className="text-orange-500 hover:text-orange-700 underline"
                onClick={clearAllSlots}
              >
                Clear All
              </button>
            </>
          ) : (
            <p className="text-gray-400">No time slots selected yet.</p>
          )}
        </div>
      </div>

      <div className="mt-8 flex justify-between items-center">
        <button
          onClick={() => setStep(1)}
          className="bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center hover:bg-gray-800"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
          Previous: Booking Date
        </button>
        <button
          onClick={() => setStep(3)}
          disabled={selectedSlots.length === 0}
          className={`bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center ${
            selectedSlots.length === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-orange-600'
          }`}
        >
          Next: Rent & Buy
          <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default CourtsAndTime;
