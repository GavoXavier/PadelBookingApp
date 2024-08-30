import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import BookingBox from './components/BookingBox/BookingBox';
import HomePage from './components/HomePage/HomePage';

function App() {
  return (
    <Router>
      <div className="App flex flex-col min-h-screen">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/booking" element={<BookingBox />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
