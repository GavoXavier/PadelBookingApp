import React from 'react';
import padelBackground from '../images/5.png';

const PadelSection = () => {
  return (
    <section
      id="whatIsPadel"
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center p-6 md:p-10 transition-transform duration-700"
      style={{ backgroundImage: `url(${padelBackground})` }}
      data-aos="fade-left"  // Add AOS attribute here
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 bg-white bg-opacity-70 backdrop-blur-lg p-6 md:p-10 rounded-lg shadow-lg max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-4">What is Padel?</h2>
        <p className="text-sm md:text-base text-gray-800">
          Padel is a hybrid racket sport that combines elements of tennis, squash, and badminton. Faster than tennis but slower than squash, Padel offers a stimulating yet enjoyable workout. The game is played in a glass-enclosed court on artificial turf, featuring rallies, lobs, smashes, and drop shots.
        </p>
        <p className="text-sm md:text-base text-gray-800 mt-4">
          A standard Padel court measures 10 meters by 20 meters, roughly one-third the size of a squash court and thirty percent smaller than a tennis court. The balls used are similar to tennis balls but with slightly less pressure, and the rackets are stringless, perforated, and commonly made of carbon and fiberglass.
        </p>
      </div>
    </section>
  );
};

export default PadelSection;
