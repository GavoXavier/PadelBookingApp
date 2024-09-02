import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ContactsSection = () => {
  return (
    <section
      id="contactUs"
      className="min-h-screen bg-gray-900 text-white p-6 md:p-10 transition-transform duration-700 flex flex-col justify-center items-center"
      data-aos="fade-down"  // Apply fade-down effect to the entire section
    >
      <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-8 text-center">Contact Us</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl">
        {/* WhatsApp */}
        <div
          className="flex flex-col items-center text-center bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition-all duration-300"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          <FontAwesomeIcon icon={faWhatsapp} className="text-5xl text-green-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
          <p className="text-gray-400">Chat with us on WhatsApp</p>
          <a href="https://wa.me/your_number" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded-full font-semibold transition-all duration-300 hover:bg-green-600">
            Send a Message
          </a>
        </div>
        {/* Instagram */}
        <div
          className="flex flex-col items-center text-center bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition-all duration-300"
          data-aos="fade-down"
          data-aos-delay="300"
        >
          <FontAwesomeIcon icon={faInstagram} className="text-5xl text-pink-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Instagram</h3>
          <p className="text-gray-400">Follow us on Instagram</p>
          <a href="https://instagram.com/your_profile" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-pink-500 text-white px-4 py-2 rounded-full font-semibold transition-all duration-300 hover:bg-pink-600">
            Visit Profile
          </a>
        </div>
        {/* Twitter */}
        <div
          className="flex flex-col items-center text-center bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition-all duration-300"
          data-aos="fade-down"
          data-aos-delay="400"
        >
          <FontAwesomeIcon icon={faTwitter} className="text-5xl text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Twitter</h3>
          <p className="text-gray-400">Follow us on Twitter</p>
          <a href="https://twitter.com/your_profile" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-full font-semibold transition-all duration-300 hover:bg-blue-600">
            Follow Us
          </a>
        </div>
        {/* Phone */}
        <div
          className="flex flex-col items-center text-center bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition-all duration-300"
          data-aos="fade-down"
          data-aos-delay="500"
        >
          <FontAwesomeIcon icon={faPhoneAlt} className="text-5xl text-yellow-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Phone</h3>
          <p className="text-gray-400">Give us a call</p>
          <a href="tel:+your_phone_number" className="mt-4 inline-block bg-yellow-500 text-white px-4 py-2 rounded-full font-semibold transition-all duration-300 hover:bg-yellow-600">
            Call Now
          </a>
        </div>
        {/* Email */}
        <div
          className="flex flex-col items-center text-center bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition-all duration-300"
          data-aos="fade-down"
          data-aos-delay="600"
        >
          <FontAwesomeIcon icon={faEnvelope} className="text-5xl text-orange-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Email</h3>
          <p className="text-gray-400">Send us an email</p>
          <a href="mailto:your_email@example.com" className="mt-4 inline-block bg-orange-500 text-white px-4 py-2 rounded-full font-semibold transition-all duration-300 hover:bg-orange-600">
            Email Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
