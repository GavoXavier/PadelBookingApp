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

  const steps = [
    { icon: faCalendarAlt, label: "Booking Date" },
    { icon: faTrophy, label: "Courts & Time" },
    { icon: faShoppingCart, label: "Rent & Buy Equipment" },
    { icon: faLock, label: "Private Booking" },
    { icon: faFileInvoiceDollar, label: "Pay Booking" }
  ];

  const progressPercentage = (step / steps.length) * 100;

  return (
    <div className="w-full p-4 bg-gray-900 text-white flex-shrink-0 rounded-lg shadow-lg">
      {/* Icons and Labels for Normal Screens */}
      <div className="hidden lg:flex justify-between items-center mb-4">
        {steps.map((stepItem, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-500 ease-in-out ${step > index ? 'bg-orange-500 text-white' : 'bg-gray-700 text-gray-400'}`}
            >
              <FontAwesomeIcon icon={stepItem.icon} />
            </div>
            <span className="mt-2 text-sm">{stepItem.label}</span>
          </div>
        ))}
      </div>

      {/* Icons and Progress Bar for Mobile Screens */}
      <div className="lg:hidden flex flex-col items-center mb-4">
        <div className="flex justify-between w-full mb-2">
          {steps.map((stepItem, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-500 ease-in-out ${step > index ? 'bg-orange-500 text-white' : 'bg-gray-700 text-gray-400'}`}
              >
                <FontAwesomeIcon icon={stepItem.icon} />
              </div>
            </div>
          ))}
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2 relative overflow-hidden">
          <div
            className="bg-orange-500 h-2 absolute top-0 left-0 transition-all duration-700 ease-in-out"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      {/* Overlay for Payment Summary */}
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
