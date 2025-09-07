import React, { useState } from 'react';
import { motion } from 'framer-motion';
import BookingModal from './BookingModal';

// Correct image imports from src/assets/images
import Image1 from '../assets/images/floor.jpeg';
import Image2 from '../assets/images/toilet.jpeg';
import Image3 from '../assets/images/janitor.jpeg';

const services = [
  {
    title: "Residential Cleaning",
    description: "Comprehensive home cleaning services tailored to your lifestyle, ensuring every corner is spotless and inviting.",
    button: "Book Now",
    image: Image1,
  },
  {
    title: "Commercial Cleaning",
    description: "Professional office and commercial space cleaning to maintain a productive and hygienic work environment.",
    button: "Learn More",
    image: Image2,
  },
  {
    title: "Deep Cleaning",
    description: "Thorough deep cleaning for those hard-to-reach areas, using advanced techniques and eco-friendly products.",
    button: "Get Started",
    image: Image3,
  },
];

const Services = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const openModal = (serviceTitle) => {
    setSelectedService(serviceTitle);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedService('');
  };

  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen px-4 py-12">
      <main className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-semibold mb-4 text-center"
        >
          Our Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-10 text-gray-300 text-center max-w-2xl mx-auto"
        >
          Discover the premium cleaning services offered by LuxeClean. From residential to commercial spaces, we deliver exceptional results with eco-friendly practices and meticulous care.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-[#1a1a1a] rounded-lg overflow-hidden shadow-lg flex flex-col hover:shadow-yellow-400/20 transition-all duration-300"
            >
              <motion.div
                className="overflow-hidden"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover transition-transform duration-300"
                />
              </motion.div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400 flex-grow">{service.description}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => openModal(service.title)}
                  className="mt-4 bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300 self-start transition-all duration-200"
                >
                  {service.button}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
      <BookingModal isOpen={modalOpen} onClose={closeModal} serviceName={selectedService} />
    </div>
  );
};

export default Services;
