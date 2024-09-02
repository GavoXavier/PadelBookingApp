import React from 'react';
import { Link } from 'react-router-dom';
import HomeNav from './HomeNav';
import backgroundImage from './images/1.png'; // Importing the image directly

const HomePage = () => {
  return (
    <div className="relative w-full h-full bg-gray-900 text-white">
      {/* HomeNav at the top of the HomePage */}
      <HomeNav />

      {/* Home Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }} // Use the imported image
      >
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        
        {/* Content within the Home section */}
        <div className="relative z-10 text-center text-white px-4 md:px-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-orange-500">
            Welcome to BiteBox Padel
          </h1>
          <p className="text-lg md:text-2xl mb-8">
            Experience the thrill of Padel in an exciting and vibrant environment!
          </p>
          <Link
            to="/booking"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-orange-600"
          >
            Book Now
          </Link>
        </div>
      </section>

      <section id="whatIsPadel" className="min-h-screen bg-gray-900 text-white p-10 pt-16">
        <h2 className="text-4xl font-bold text-orange-500 mb-4">What is Padel?</h2>
        <p>Padel is a racquet sport typically played in doubles on an enclosed court slightly smaller than a tennis court...</p>
      </section>

      <section id="lessons" className="min-h-screen bg-gray-800 text-white p-10 pt-16">
        <h2 className="text-4xl font-bold text-orange-500 mb-4">Lessons</h2>
        <p>We offer professional coaching sessions for all skill levels...</p>
      </section>

      <section id="store" className="min-h-screen bg-gray-900 text-white p-10 pt-16">
        <h2 className="text-4xl font-bold text-orange-500 mb-4">Store</h2>
        <p>Get the best Padel equipment from our store...</p>
      </section>

      <section id="aboutUs" className="min-h-screen bg-gray-800 text-white p-10 pt-16">
        <h2 className="text-4xl font-bold text-orange-500 mb-4">About Us</h2>
        <p>Welcome to PadelZone, where passion meets performance...</p>
      </section>

      <section id="contactUs" className="min-h-screen bg-gray-900 text-white p-10 pt-16">
        <h2 className="text-4xl font-bold text-orange-500 mb-4">Contact Us</h2>
        <p>Get in touch with us through the following channels...</p>
      </section>

      <footer className="bg-gray-800 text-white text-center p-4">
        <p>© 2024 PadelZone. All rights reserved.</p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-orange-500 hover:text-white"
        >
          Back to Top
        </button>
      </footer>
    </div>
  );
};

export default HomePage;
