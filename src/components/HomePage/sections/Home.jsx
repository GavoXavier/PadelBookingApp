import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faTicketAlt } from '@fortawesome/free-solid-svg-icons';
import image1 from '../images/1.png';
import image2 from '../images/2.png';
import image3 from '../images/3.png';
import image4 from '../images/4.png';

const HomeSection = () => {
  const [currentImage, setCurrentImage] = React.useState(image1);

  React.useEffect(() => {
    const images = [image1, image2, image3, image4];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % images.length;
      setCurrentImage(images[index]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-start bg-cover bg-center transition-transform duration-700"
      style={{ backgroundImage: `url(${currentImage})` }}
      data-aos="fade-up"
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-left p-6 md:p-10 bg-white bg-opacity-20 backdrop-blur-sm max-w-xs md:max-w-lg lg:max-w-xl mx-auto transform -skew-x-6">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 lg:mb-8 text-orange-500 skew-x-6">
          Welcome to BiteBox Padel
        </h1>
        <p className="text-base md:text-lg lg:text-xl mb-4 md:mb-6 lg:mb-8 skew-x-6">
          Experience the thrill of Padel in an exciting and vibrant environment!
        </p>
        <div className="skew-x-6">
          <a
            href="https://www.bitebox.co.ke/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-orange-500 px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold transition-all duration-300 hover:bg-gray-800 mr-2 md:mr-4"
          >
            <FontAwesomeIcon icon={faUtensils} className="mr-2" />
            Go to Restaurant
          </a>
          <Link
            to="/booking"
            className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold transition-all duration-300 hover:from-orange-600 hover:to-orange-700"
          >
            <FontAwesomeIcon icon={faTicketAlt} className="mr-2" />
            Book Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
