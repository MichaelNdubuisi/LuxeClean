import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaAward, FaClock, FaStar } from 'react-icons/fa';

const features = [
  {
    icon: <FaUsers className="text-4xl text-yellow-400" />,
    number: "500+",
    title: "Happy Clients",
    description: "Satisfied customers across Nigeria"
  },
  {
    icon: <FaAward className="text-4xl text-yellow-400" />,
    number: "5",
    title: "Years Experience",
    description: "Professional cleaning services"
  },
  {
    icon: <FaClock className="text-4xl text-yellow-400" />,
    number: "24/7",
    title: "Support",
    description: "Always here when you need us"
  },
  {
    icon: <FaStar className="text-4xl text-yellow-400" />,
    number: "4.9",
    title: "Rating",
    description: "Average customer satisfaction"
  }
];

const Features = () => {
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
<section className="bg-[#0f0f0f] py-16 px-6 sm:px-12">
      <div className="container">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-yellow-400 drop-shadow-md">Why Choose LuxeClean?</h2>
          <p className="text-yellow-200 max-w-3xl mx-auto text-base sm:text-lg">
            We deliver exceptional cleaning services with a commitment to quality, reliability, and customer satisfaction.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card"
            >
              <div className="flex justify-center mb-5">
                <div className="text-5xl text-yellow-400 drop-shadow-lg">
                  {feature.icon.props.children}
                </div>
              </div>
              <div className="text-3xl font-extrabold text-yellow-400 mb-3">
                {feature.number}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-base">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
