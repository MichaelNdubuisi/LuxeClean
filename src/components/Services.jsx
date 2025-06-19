import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

// Correct image imports from src/assets/images
import Image1 from '../assets/images/clothes.jpeg';
import Image2 from '../assets/images/cleaner.jpeg';
import Image3 from '../assets/images/timer.jpeg';

const services = [
  {
    title: "Standard Dry Cleaning",
    description: "Experience top-notch dry cleaning services that restore the freshness and elegance of your attire.",
    button: "Book Now",
    image: Image1,
  },
  {
    title: "Eco-Friendly Options",
    description: "Our eco-friendly products ensure the safety of the environment while keeping your clothes impeccable.",
    button: "Learn More",
    image: Image2,
  },
  {
    title: "Express Services",
    description: "In a hurry? Our express services offer rapid yet thorough cleaning for your urgent needs.",
    button: "Get Started",
    image: Image3,
  },
];

const Services = () => {
  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen px-4 py-12">
      <main className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4 text-center">Our Services</h2>
        <p className="mb-10 text-gray-300 text-center max-w-2xl mx-auto">
          Discover the premium dry cleaning and laundry services offered by LuxeClean. We cater to all your garment care needs with precision and care.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] rounded-lg overflow-hidden shadow-lg flex flex-col hover:shadow-yellow-400/20 transition-shadow"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400 flex-grow">{service.description}</p>
                <button className="mt-4 bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300 self-start">
                  {service.button}
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Services;
