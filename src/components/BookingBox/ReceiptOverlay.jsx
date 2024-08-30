import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCreditCard, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

const ReceiptOverlay = ({ user, bookingDetails, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Receipt</h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Customer Details</h3>
          <p className="text-gray-600">Name: {user.name}</p>
          <p className="text-gray-600">Email: {user.email}</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Booking Details</h3>
          <p className="text-gray-600">Date: {bookingDetails.date}</p>
          <p className="text-gray-600">Courts: {bookingDetails.courts}</p>
          <p className="text-gray-600">Time: {bookingDetails.time}</p>
          <p className="text-gray-600">Equipment: {bookingDetails.equipment}</p>
          <p className="font-semibold text-gray-800">Total Amount: Ksh. {bookingDetails.total}</p>
        </div>
        <div className="flex justify-between mt-6">
          <button
            className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center hover:bg-green-700"
          >
            <FontAwesomeIcon icon={faCreditCard} className="mr-2" />
            Pay with Credit Card
          </button>
          <button
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center hover:bg-blue-700"
          >
            <FontAwesomeIcon icon={faMobileAlt} className="mr-2" />
            Pay with Mpesa
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReceiptOverlay;
