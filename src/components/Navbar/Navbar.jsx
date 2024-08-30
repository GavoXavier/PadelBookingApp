import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">BiteBox Padel</h1>
        <ul className="flex space-x-6">
          <li>
            <button className="text-white text-lg hover:text-gray-300 transition-colors duration-300">
              Home
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
