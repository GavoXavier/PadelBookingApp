import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const RentAndBuyEquipment = ({ setStep, racketCount, setRacketCount, buyBalls, setBuyBalls }) => {
  const racketCost = 500; // Updated cost per racket
  const ballPackCost = 1600; // Updated cost for a pack of 3 balls

  const incrementRacketCount = () => {
    setRacketCount(racketCount + 1);
  };

  const decrementRacketCount = () => {
    if (racketCount > 0) {
      setRacketCount(racketCount - 1);
    }
  };

  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <h2 className="text-2xl font-bold mb-6 text-orange-500">Rent & Buy Equipment</h2>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-white mb-4">Rent Rackets</h3>
          <div className="flex items-center">
            <button
              onClick={decrementRacketCount}
              className="bg-gray-300 text-gray-700 px-2 py-1 rounded-l-lg"
            >
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <div className="px-4 py-1 bg-white text-gray-800 border border-gray-300">
              {racketCount}
            </div>
            <button
              onClick={incrementRacketCount}
              className="bg-gray-300 text-gray-700 px-2 py-1 rounded-r-lg"
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
          <p className="text-gray-400 mt-2">Ksh. {racketCount * racketCost}</p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-white mb-4">Buy Pack of 3 Balls</h3>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={buyBalls}
              onChange={(e) => setBuyBalls(e.target.checked)}
              className="mr-2"
            />
            <label className="text-gray-700">
              Buy pack of 3 balls @ Ksh. {ballPackCost}
            </label>
          </div>
          {buyBalls && <p className="text-gray-400 mt-2">Ksh. {ballPackCost}</p>}
        </div>
      </div>

      <div className="mt-8 flex justify-between items-center">
        <button
          onClick={() => setStep(2)}
          className="bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center hover:bg-gray-800"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
          Previous: Courts & Time
        </button>
        <button
          onClick={() => setStep(4)}
          disabled={racketCount === 0 && !buyBalls}
          className={`bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center ${
            racketCount === 0 && !buyBalls ? 'opacity-50 cursor-not-allowed' : 'hover:bg-orange-600'
          }`}
        >
          Next: Private Booking
          <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default RentAndBuyEquipment;
