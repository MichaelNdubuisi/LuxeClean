import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaStar, FaShieldAlt, FaClock } from 'react-icons/fa';

const TwoColumnSection = () => {
  const benefits = [
    { icon: <FaCheckCircle className="text-yellow-400" />, text: "Professional & Experienced Staff" },
    { icon: <FaStar className="text-yellow-400" />, text: "5-Star Quality Service" },
    { icon: <FaShieldAlt className="text-yellow-400" />, text: "Fully Insured & Bonded" },
    { icon: <FaClock className="text-yellow-400" />, text: "Flexible Scheduling" }
  ];

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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-16 px-6 sm:px-12 bg-gradient-to-r from-[#0f0f0f] via-[#121212] to-[#0f0f0f]">
      <div className="container">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Left Column - Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-yellow-400 text-glow">
              Premium Cleaning Services
            </h2>
            <p className="text-gray-300 text-base leading-relaxed">
              Experience the difference with LuxeClean's premium cleaning services. We combine cutting-edge techniques with eco-friendly products to deliver exceptional results that exceed your expectations.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-2xl">{benefit.icon}</div>
                  <span className="text-white font-medium">{benefit.text}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="pt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <button className="btn-primary">
                Learn More About Our Services
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual/Image */}
          <motion.div variants={imageVariants} className="relative">
            <div className="glass-effect rounded-xl p-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-yellow-400/20 to-yellow-500/20 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-yellow-400">500+</div>
                    <div className="text-sm text-gray-300">Happy Clients</div>
                  </div>
                  <div className="bg-gradient-to-br from-yellow-400/20 to-yellow-500/20 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-yellow-400">4.9</div>
                    <div className="text-sm text-gray-300">Average Rating</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-yellow-400/20 to-yellow-500/20 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-yellow-400">5</div>
                    <div className="text-sm text-gray-300">Years Experience</div>
                  </div>
                  <div className="bg-gradient-to-br from-yellow-400/20 to-yellow-500/20 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-yellow-400">24/7</div>
                    <div className="text-sm text-gray-300">Support</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <p className="text-yellow-400 font-semibold text-lg">Trusted by Professionals</p>
                <p className="text-gray-300 text-sm mt-2">
                  Join thousands of satisfied customers who trust LuxeClean for their cleaning needs.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TwoColumnSection;
