import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReceipt } from '@fortawesome/free-solid-svg-icons';

const PaymentAndSummary = ({ bookingDetails }) => {
  const [showReceipt, setShowReceipt] = useState(false);

  if (!bookingDetails) {
    return <p className="text-red-500">Booking details are not available.</p>;
  }

  const { date, slots, racketCount, buyBalls, players, totalAmount } = bookingDetails;

  const handleShowReceipt = () => setShowReceipt(true);
  const handleCloseReceipt = () => setShowReceipt(false);

  return (
    <div className="p-6 bg-gray-800 shadow-md rounded-lg max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-orange-500">Booking Summary</h2>
      
      <div className="mb-4 text-white">
        <h3 className="text-xl font-semibold mb-2">Details</h3>
        <p><strong>Date:</strong> {date ? date.toLocaleDateString() : 'N/A'}</p>
        <p><strong>Selected Time Slots:</strong></p>
        <ul className="list-disc ml-5">
          {slots.length > 0 ? slots.map((slot, index) => <li key={index}>{slot}</li>) : <li>No slots selected</li>}
        </ul>
        <p><strong>Rackets:</strong> {racketCount}</p>
        <p><strong>Buy Ball Pack:</strong> {buyBalls ? 'Yes' : 'No'}</p>
        <p><strong>Players:</strong> {players.join(', ') || 'N/A'}</p>
        <p><strong>Total Amount:</strong> Ksh. {totalAmount}</p>
      </div>
      
      <button
        onClick={handleShowReceipt}
        className="bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:bg-orange-600 flex items-center"
      >
        <FontAwesomeIcon icon={faReceipt} className="mr-2" />
        Show Receipt
      </button>

      {showReceipt && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h3 className="text-xl font-bold mb-4">Receipt</h3>
            <div className="mb-4">
              <p><strong>Date:</strong> {date ? date.toLocaleDateString() : 'N/A'}</p>
              <p><strong>Time Slots:</strong> {slots.join(', ') || 'N/A'}</p>
              <p><strong>Rackets:</strong> {racketCount}</p>
              <p><strong>Buy Ball Pack:</strong> {buyBalls ? 'Yes' : 'No'}</p>
              <p><strong>Players:</strong> {players.join(', ') || 'N/A'}</p>
              <p><strong>Total Amount:</strong> Ksh. {totalAmount}</p>
            </div>
            <button
              onClick={handleCloseReceipt}
              className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:bg-red-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentAndSummary;
