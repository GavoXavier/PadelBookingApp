import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTableTennisPaddleBall, faUtensils, faQuestionCircle, faUserGraduate, faStore, faMapMarkerAlt, faEnvelope, faTicketAlt } from '@fortawesome/free-solid-svg-icons';

const HomeNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-transparent fixed w-full z-50 top-0 flex justify-between items-center px-6 py-4 shadow-lg">
      <div className="flex items-center">
        <ScrollLink to="home" smooth={true} duration={500} className="flex items-center text-white cursor-pointer">
          <FontAwesomeIcon icon={faTableTennisPaddleBall} className="text-orange-500 text-3xl mr-2" />
          <span className="text-2xl font-bold">BiteBox Padel</span>
        </ScrollLink>
      </div>
      <div className="flex-1"></div> {/* Space between logo and buttons */}
      <div className="hidden md:flex space-x-6 items-center">
        <a
          href="https://www.bitebox.co.ke/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-orange-500 font-semibold"
          style={{ cursor: `url('/images/racket-cursor.png'), pointer` }}  // Custom cursor
        >
          <FontAwesomeIcon icon={faUtensils} className="mr-1" /> BiteBox Restaurant
        </a>
        <ScrollLink
          to="whatIsPadel"
          smooth={true}
          duration={500}
          className="text-white hover:text-orange-500 font-semibold"
          style={{ cursor: `url('/images/racket-cursor.png'), pointer` }}  // Custom cursor
        >
          <FontAwesomeIcon icon={faQuestionCircle} className="mr-1" /> What is Padel
        </ScrollLink>
        <ScrollLink
          to="lessons"
          smooth={true}
          duration={500}
          className="text-white hover:text-orange-500 font-semibold"
          style={{ cursor: `url('/images/racket-cursor.png'), pointer` }}  // Custom cursor
        >
          <FontAwesomeIcon icon={faUserGraduate} className="mr-1" /> Lessons
        </ScrollLink>
        <ScrollLink
          to="store"
          smooth={true}
          duration={500}
          className="text-white hover:text-orange-500 font-semibold"
          style={{ cursor: `url('/images/racket-cursor.png'), pointer` }}  // Custom cursor
        >
          <FontAwesomeIcon icon={faStore} className="mr-1" /> Store
        </ScrollLink>
        <ScrollLink
          to="location"
          smooth={true}
          duration={500}
          className="text-white hover:text-orange-500 font-semibold"
          style={{ cursor: `url('/images/racket-cursor.png'), pointer` }}  // Custom cursor
        >
          <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-1" /> Location
        </ScrollLink>
        <ScrollLink
          to="contactUs"
          smooth={true}
          duration={500}
          className="text-white hover:text-orange-500 font-semibold"
          style={{ cursor: `url('/images/racket-cursor.png'), pointer` }}  // Custom cursor
        >
          <FontAwesomeIcon icon={faEnvelope} className="mr-1" /> Contact Us
        </ScrollLink>
        <RouterLink
          to="/booking"
          className="ml-6 bg-orange-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-orange-600 transition duration-300"
          style={{ cursor: `url('/images/racket-cursor.png'), pointer` }}  // Custom cursor
        >
          <FontAwesomeIcon icon={faTicketAlt} className="mr-1" /> Book Now
        </RouterLink>
      </div>
      <div className="md:hidden">
        <button onClick={toggleNav} className="text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'} />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-gray-900 text-white w-full py-4 space-y-2 absolute top-16 left-0 shadow-lg">
          <ScrollLink to="home" smooth={true} duration={500} onClick={toggleNav} className="block px-4 py-2 rounded-md text-base font-semibold">
            Home
          </ScrollLink>
          <a href="https://www.bitebox.co.ke/" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 rounded-md text-base font-semibold">
            <FontAwesomeIcon icon={faUtensils} className="mr-1" /> BiteBox Restaurant
          </a>
          <ScrollLink to="whatIsPadel" smooth={true} duration={500} onClick={toggleNav} className="block px-4 py-2 rounded-md text-base font-semibold">
            <FontAwesomeIcon icon={faQuestionCircle} className="mr-1" /> What is Padel
          </ScrollLink>
          <ScrollLink to="lessons" smooth={true} duration={500} onClick={toggleNav} className="block px-4 py-2 rounded-md text-base font-semibold">
            <FontAwesomeIcon icon={faUserGraduate} className="mr-1" /> Lessons
          </ScrollLink>
          <ScrollLink to="store" smooth={true} duration={500} onClick={toggleNav} className="block px-4 py-2 rounded-md text-base font-semibold">
            <FontAwesomeIcon icon={faStore} className="mr-1" /> Store
          </ScrollLink>
          <ScrollLink to="location" smooth={true} duration={500} onClick={toggleNav} className="block px-4 py-2 rounded-md text-base font-semibold">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-1" /> Location
          </ScrollLink>
          <ScrollLink to="contactUs" smooth={true} duration={500} onClick={toggleNav} className="block px-4 py-2 rounded-md text-base font-semibold">
            <FontAwesomeIcon icon={faEnvelope} className="mr-1" /> Contact Us
          </ScrollLink>
          <RouterLink
            to="/booking"
            className="bg-orange-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-orange-600 transition duration-300"
            style={{ cursor: `url('/images/racket-cursor.png'), pointer` }}  // Custom cursor
          >
            <FontAwesomeIcon icon={faTicketAlt} className="mr-1" /> Book Now
          </RouterLink>
        </div>
      )}
    </nav>
  );
};

export default HomeNav;
