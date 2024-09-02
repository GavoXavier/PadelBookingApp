import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faUserPlus, faUser, faSearch } from '@fortawesome/free-solid-svg-icons';

const availablePlayers = [
  'John Doe',
  'Jane Smith',
  'Alice Johnson',
  'Robert Brown',
  'Emily Davis',
  'Michael Wilson',
  'Jessica Garcia',
  'Chris Martinez',
  'Sarah Thompson',
  'David Harris'
];

const PrivateBooking = ({ setStep, selectedPlayers, setSelectedPlayers }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const addPlayer = (player) => {
    if (!selectedPlayers.includes(player) && selectedPlayers.length < 4) {
      setSelectedPlayers([...selectedPlayers, player]);
    }
  };

  const removePlayer = (player) => {
    setSelectedPlayers(selectedPlayers.filter(p => p !== player));
  };

  const filteredPlayers = searchTerm
    ? availablePlayers.filter(player =>
        player.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <h2 className="text-2xl font-bold mb-6 text-orange-500">Private Booking</h2>

        <div className="mt-6">
          <h3 className="text-xl font-semibold text-white mb-4">Add Players (Optional)</h3>
          <div className="mb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search players..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border border-gray-300 rounded-full py-2 px-4 w-full"
              />
              <FontAwesomeIcon icon={faSearch} className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500" />
            </div>
            {searchTerm && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                {filteredPlayers.map((player) => (
                  <button
                    key={player}
                    className={`py-2 px-3 rounded-full border flex items-center justify-between ${selectedPlayers.includes(player) ? 'bg-green-600 text-white' : 'bg-gray-800 text-white hover:bg-gray-700'}`}
                    onClick={() => addPlayer(player)}
                    disabled={selectedPlayers.length >= 4 && !selectedPlayers.includes(player)}
                  >
                    <FontAwesomeIcon icon={faUser} className="mr-2" />
                    {player}
                  </button>
                ))}
              </div>
            )}
          </div>

          <h4 className="text-lg font-semibold text-white mb-2">Selected Players:</h4>
          <div className="flex flex-wrap gap-4">
            {selectedPlayers.length > 0 ? (
              selectedPlayers.map((player, index) => (
                <div key={index} className="bg-gray-700 shadow-md rounded-full flex items-center p-2">
                  <FontAwesomeIcon icon={faUser} className="mr-2 text-white" />
                  <span className="text-white">{player}</span>
                  <button
                    onClick={() => removePlayer(player)}
                    className="ml-2 text-red-600 hover:text-red-800"
                  >
                    <FontAwesomeIcon icon={faUserPlus} />
                  </button>
                </div>
              ))
            ) : (
              <p className="text-gray-400">No players selected.</p>
            )}
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-between items-center">
        <button
          onClick={() => setStep(3)}
          className="bg-gray-700 text-white px-4 py-2 rounded-full font-semibold transition-all duration-300 flex items-center hover:bg-gray-800"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
          Previous  
        </button>
        <button
          onClick={() => setStep(5)}
          className="bg-orange-500 text-white px-4 py-2 rounded-full font-semibold transition-all duration-300 flex items-center hover:bg-orange-600"
        >
          Next: Payment
          <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default PrivateBooking;
