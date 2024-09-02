import React from 'react';
import racketImage from '../images/racket.png';
import ballPackImage from '../images/ballpack.png';

const StoreSection = () => {
  return (
    <section
      id="store"
      className="min-h-screen bg-gray-900 text-white p-6 md:p-10 transition-transform duration-700 flex flex-col justify-center"
      data-aos="fade-in"  // Apply fade-in effect to the entire section
    >
      <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-4 text-center">Store</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
        <div
          className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center"
          data-aos="fade-in"
          data-aos-delay="200"
        >
          <img src={racketImage} alt="Racket" className="w-full h-48 object-cover rounded-md mb-4" />
          <h3 className="text-xl font-bold mb-2">Padel Racket</h3>
          <p className="text-lg font-semibold text-orange-500 mb-4">$150</p>
          <div className="flex items-center justify-center">
            <span className="text-yellow-400">★★★★☆</span>
            <span className="ml-2 text-gray-400">(4.7/5)</span>
          </div>
        </div>
        <div
          className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center"
          data-aos="fade-in"
          data-aos-delay="300"
        >
          <img src={ballPackImage} alt="Ball Pack" className="w-full h-48 object-cover rounded-md mb-4" />
          <h3 className="text-xl font-bold mb-2">Ball Pack (6 balls)</h3>
          <p className="text-lg font-semibold text-orange-500 mb-4">$25</p>
          <div className="flex items-center justify-center">
            <span className="text-yellow-400">★★★★★</span>
            <span className="ml-2 text-gray-400">(5/5)</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreSection;
