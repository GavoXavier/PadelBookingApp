import React from 'react';
import coachingImage1 from '../images/coaching1.png';
import coachingImage2 from '../images/coaching2.png';
import coachingImage3 from '../images/coaching3.png';

const LessonsSection = () => {
  return (
    <section
      id="lessons"
      className="min-h-screen bg-gray-800 text-white p-6 md:p-10 transition-transform duration-700 flex flex-col justify-center"
      data-aos="fade-in"  // Apply fade-in effect to the entire section
    >
      <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-4 text-center">Lessons</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
        <div
          className="bg-gray-900 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center"
          data-aos="fade-in"
          data-aos-delay="200"
        >
          <img src={coachingImage1} alt="Coaching 1" className="w-full h-48 object-cover rounded-md mb-4" />
          <h3 className="text-xl font-bold mb-2">Beginner Coaching</h3>
          <p className="text-sm text-gray-400 mb-2">Perfect for those new to Padel, with step-by-step guidance.</p>
          <p className="text-lg font-semibold text-orange-500 mb-4">$30/hour</p>
          <div className="flex items-center justify-center">
            <span className="text-yellow-400">★★★★☆</span>
            <span className="ml-2 text-gray-400">(4.5/5)</span>
          </div>
        </div>
        <div
          className="bg-gray-900 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center"
          data-aos="fade-in"
          data-aos-delay="300"
        >
          <img src={coachingImage2} alt="Coaching 2" className="w-full h-48 object-cover rounded-md mb-4" />
          <h3 className="text-xl font-bold mb-2">Intermediate Coaching</h3>
          <p className="text-sm text-gray-400 mb-2">Enhance your skills with advanced techniques and drills.</p>
          <p className="text-lg font-semibold text-orange-500 mb-4">$50/hour</p>
          <div className="flex items-center justify-center">
            <span className="text-yellow-400">★★★★★</span>
            <span className="ml-2 text-gray-400">(5/5)</span>
          </div>
        </div>
        <div
          className="bg-gray-900 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center"
          data-aos="fade-in"
          data-aos-delay="400"
        >
          <img src={coachingImage3} alt="Coaching 3" className="w-full h-48 object-cover rounded-md mb-4" />
          <h3 className="text-xl font-bold mb-2">Advanced Coaching</h3>
          <p className="text-sm text-gray-400 mb-2">Master the game with personalized coaching sessions.</p>
          <p className="text-lg font-semibold text-orange-500 mb-4">$70/hour</p>
          <div className="flex items-center justify-center">
            <span className="text-yellow-400">★★★★★</span>
            <span className="ml-2 text-gray-400">(5/5)</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LessonsSection;
