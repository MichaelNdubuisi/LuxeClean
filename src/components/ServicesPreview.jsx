import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaHome, FaBuilding, FaBroom } from 'react-icons/fa';

const services = [
  {
    icon: <FaHome className="text-3xl text-yellow-400" />,
    title: "Residential Cleaning",
    description: "Transform your home into a pristine sanctuary with our comprehensive residential cleaning services.",
    features: ["Deep cleaning", "Regular maintenance", "Eco-friendly products"]
  },
  {
    icon: <FaBuilding className="text-3xl text-yellow-400" />,
    title: "Commercial Cleaning",
    description: "Maintain a professional and hygienic workspace with our commercial cleaning solutions.",
    features: ["Office cleaning", "Sanitization", "Flexible scheduling"]
  },
  {
    icon: <FaBroom className="text-3xl text-yellow-400" />,
    title: "Deep Cleaning",
    description: "Thorough deep cleaning for those hard-to-reach areas using advanced techniques.",
    features: ["Detailed cleaning", "Specialized equipment", "Move-in/move-out"]
  }
];

const ServicesPreview = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
<section className="bg-[#121212] py-16 px-6 sm:px-12">
      <div className="container">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-yellow-400 drop-shadow-md">Our Premium Services</h2>
          <p className="text-yellow-200 max-w-3xl mx-auto text-base sm:text-lg">
            Discover our range of professional cleaning services designed to meet your specific needs.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card"
            >
              <div className="flex justify-center mb-6">
                <div className="text-4xl text-yellow-400 drop-shadow-lg">
                  {service.icon.props.children}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">{service.title}</h3>
              <p className="text-gray-400 mb-6 text-center text-base">{service.description}</p>
              <ul className="text-sm text-gray-500 space-y-2 max-w-xs mx-auto">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="text-yellow-400 mr-3">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <button
            onClick={() => navigate('/services')}
            className="btn-primary"
          >
            View All Services
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;
