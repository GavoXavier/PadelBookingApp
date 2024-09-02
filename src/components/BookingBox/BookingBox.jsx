import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import BookingSteps from './BookingSteps';
import BookingDate from './BookingDate';
import CourtsAndTime from './CourtsAndTime';
import RentAndBuyEquipment from './RentAndBuyEquipment';
import PrivateBooking from './PrivateBooking';
import PaymentAndSummary from './PaymentAndSummary';

const BookingBox = () => {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlots, setSelectedSlots] = useState([]);
  const [racketCount, setRacketCount] = useState(0);
  const [buyBalls, setBuyBalls] = useState(false);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const COURT_SLOT_PRICE = 4000;
  const RACKET_COST = 500;
  const BALL_COST = 1600;

  const totalAmount = selectedSlots.length * COURT_SLOT_PRICE + racketCount * RACKET_COST + (buyBalls ? BALL_COST : 0);

  const bookingDetails = {
    date: selectedDate,
    slots: selectedSlots,
    racketCount,
    buyBalls,
    players: selectedPlayers,
    totalAmount,
  };

  // Function to go back to the previous step
  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navbar />
      </header>
      <main className="flex-grow flex flex-col justify-center items-center py-10 px-4 bg-gray-900">
        <div className="bg-gray-800 shadow-lg flex flex-col rounded-lg overflow-hidden w-full max-w-6xl">
          <BookingSteps step={step} bookingDetails={bookingDetails} />

          <div className="flex-1 p-6">
            {step === 1 && (
              <BookingDate
                selectedDate={selectedDate}
                handleDateChange={(date) => {
                  setSelectedDate(date);
                  setStep(2);
                }}
              />
            )}

            {step === 2 && (
              <CourtsAndTime
                setStep={setStep}
                selectedSlots={selectedSlots}
                setSelectedSlots={setSelectedSlots}
              />
            )}

            {step === 3 && (
              <RentAndBuyEquipment
                setStep={setStep}
                racketCount={racketCount}
                setRacketCount={setRacketCount}
                buyBalls={buyBalls}
                setBuyBalls={setBuyBalls}
              />
            )}

            {step === 4 && (
              <PrivateBooking
                setStep={setStep}
                selectedPlayers={selectedPlayers}
                setSelectedPlayers={setSelectedPlayers}
              />
            )}

            {step === 5 && (
              <PaymentAndSummary 
                bookingDetails={bookingDetails} 
                onBack={handleBack}  // Pass the back function here
              />
            )}

            <div className="mt-8 text-right">
              <h3 className="text-xl font-semibold text-orange-500">
                Total Cost: Ksh. {totalAmount.toLocaleString()}
              </h3>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default BookingBox;
