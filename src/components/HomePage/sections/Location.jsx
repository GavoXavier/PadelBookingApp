import React from 'react';

const LocationSection = () => {
  return (
    <section id="location" className="min-h-screen bg-gray-800 text-white p-6 md:p-10 transition-transform duration-700 flex flex-col justify-center">
      <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-4 text-center">Location</h2>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="w-full md:w-1/2 h-64 mb-6 md:mb-0">
          <iframe
            src="https://maps.google.com/maps?q=-1.293889,36.822764&z=15&output=embed"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            title="Padel Location"
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
        <div className="w-full md:w-1/2 md:pl-6 text-center md:text-left">
          <p className="text-sm md:text-base text-gray-400">
            BiteBox Padel is located here. Our state-of-the-art facilities are designed to provide the best Padel experience for players of all skill levels. Whether you're here to learn, compete, or simply enjoy a fun game with friends, BiteBox Padel has something for everyone.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
