import React from 'react';
import HomeNav from './HomeNav';
import HomeSection from './sections/Home';
import PadelSection from './sections/Padel';
import LessonsSection from './sections/Lessons';
import StoreSection from './sections/Store';
import LocationSection from './sections/Location';
import ContactsSection from './sections/Contacts';

const HomePage = () => {
  return (
    <div className="relative w-full h-full bg-gray-900 text-white overflow-x-hidden">
      {/* HomeNav at the top of the HomePage */}
      <HomeNav />

      {/* Sections */}
      <HomeSection />
      <div className="w-full h-16 bg-gradient-to-r from-orange-500 to-gray-800 clip-path-skew-y-3"></div>
      <PadelSection />
      <div className="w-full h-16 bg-gradient-to-l from-gray-900 to-orange-500 clip-path-skew-y-3"></div>
      <LessonsSection />
      <div className="w-full h-16 bg-gradient-to-r from-orange-500 to-gray-900 clip-path-skew-y-3"></div>
      <StoreSection />
      <div className="w-full h-16 bg-gradient-to-l from-gray-900 to-orange-500 clip-path-skew-y-3"></div>
      <LocationSection />
      <div className="w-full h-16 bg-gradient-to-r from-orange-500 to-gray-900 clip-path-skew-y-3"></div>
      <ContactsSection />
    </div>
  );
};

export default HomePage;
