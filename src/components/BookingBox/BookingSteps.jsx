import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faShoppingCart, faLock, faFileInvoiceDollar, faTrophy } from '@fortawesome/free-solid-svg-icons';

import ReceiptOverlay from './ReceiptOverlay';

const BookingSteps = ({ step, user, bookingDetails }) => {
  const [isOverlayVisible, setOverlayVisible] = useState(false);

  const handleOpenOverlay = () => {
    setOverlayVisible(true);
  };

  const handleCloseOverlay = () => {
    setOverlayVisible(false);
  };

  return (
    <div className="w-full lg:w-1/3 p-6 bg-gray-900 text-white flex-shrink-0 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-orange-500">BOOKING STEPS</h2>
      <ul className="space-y-4">
        <li>
          <button 
            className={`flex items-center w-full text-left py-2 px-4 rounded-lg transition-all duration-300 ${
              step >= 1 ? 'bg-white text-gray-900' : 'bg-gray-700 text-gray-400'
            }`}
            disabled={step < 1}
          >
            <FontAwesomeIcon icon={faCalendarAlt} className="mr-3 text-orange-500" />
            Booking Date
          </button>
        </li>
        <li>
          <button 
            className={`flex items-center w-full text-left py-2 px-4 rounded-lg transition-all duration-300 ${
              step >= 2 ? 'bg-white text-gray-900' : 'bg-gray-700 text-gray-400'
            }`}
            disabled={step < 2}
          >
            <FontAwesomeIcon icon={faTrophy} className="mr-3 text-orange-500" />
            Courts & Time
          </button>
        </li>
        <li>
          <button 
            className={`flex items-center w-full text-left py-2 px-4 rounded-lg transition-all duration-300 ${
              step >= 3 ? 'bg-white text-gray-900' : 'bg-gray-700 text-gray-400'
            }`}
            disabled={step < 3}
          >
            <FontAwesomeIcon icon={faShoppingCart} className="mr-3 text-orange-500" />
            Rent & Buy Equipment
          </button>
        </li>
        <li>
          <button 
            className={`flex items-center w-full text-left py-2 px-4 rounded-lg transition-all duration-300 ${
              step >= 4 ? 'bg-white text-gray-900' : 'bg-gray-700 text-gray-400'
            }`}
            disabled={step < 4}
          >
            <FontAwesomeIcon icon={faLock} className="mr-3 text-orange-500" />
            Private Booking
          </button>
        </li>
        <li>
          <button 
            className={`flex items-center w-full text-left py-2 px-4 rounded-lg transition-all duration-300 ${
              step >= 5 ? 'bg-white text-gray-900' : 'bg-gray-700 text-gray-400'
            }`}
            disabled={step < 5}
            onClick={handleOpenOverlay}
          >
            <FontAwesomeIcon icon={faFileInvoiceDollar} className="mr-3 text-orange-500" />
            Pay Booking
          </button>
        </li>
      </ul>
      {isOverlayVisible && (
        <ReceiptOverlay 
          user={user} 
          bookingDetails={bookingDetails} 
          onClose={handleCloseOverlay} 
        />
      )}
    </div>
  );
};

BookingSteps.propTypes = {
  step: PropTypes.number.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
  }),
  bookingDetails: PropTypes.shape({
    date: PropTypes.string,
    courts: PropTypes.string,
    time: PropTypes.string,
    equipment: PropTypes.string,
    total: PropTypes.number,
  }),
};

export default BookingSteps;
