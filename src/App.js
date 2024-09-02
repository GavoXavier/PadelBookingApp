import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTableTennisPaddleBall } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import BookingBox from './components/BookingBox/BookingBox';
import HomePage from './components/HomePage/HomePage';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize AOS animations
    AOS.init({
      duration: 1000, // Global animation duration
      easing: 'ease-in-out', // Default easing for AOS animations
      once: true, // Whether animation should happen only once - while scrolling down
    });

    // Set a timeout to remove the loading screen
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Show loading screen for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="App flex flex-col min-h-screen">
        {loading ? (
          <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="relative">
              {/* Loading Spinner with Icon in the Center */}
              <div className="relative w-32 h-32">
                <div className="w-full h-full border-4 border-t-orange-500 border-gray-300 rounded-full animate-spin"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faTableTennisPaddleBall}
                    className="text-orange-500 text-6xl animate-pulse"
                  />
                </div>
              </div>
              <div className="mt-4 text-white text-xl text-center">
                Loading...
              </div>
            </div>
          </div>
        ) : (
          <main className="flex-grow flex flex-col">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/booking" element={<BookingBox />} />
            </Routes>
          </main>
        )}
      </div>
    </Router>
  );
}

export default App;
