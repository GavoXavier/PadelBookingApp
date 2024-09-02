import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">BiteBox Padel</h1>
        <ul className="flex space-x-6">
          <li>
            <Link 
              to="/" 
              className="bg-orange-500 text-white text-lg px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors duration-300 flex items-center"
            >
              <FontAwesomeIcon icon={faHome} className="mr-2" />
              Home
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
