import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const CallToAction = () => {
  const navigate = useNavigate();

  const containerVariants = {
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

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.3,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <section className="bg-gradient-to-r from-yellow-400 to-yellow-500 py-12 sm:py-16 px-4">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4">
          Ready to Experience Luxury Cleaning?
        </h2>
        <p className="text-black/80 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
          Book your premium cleaning service today and transform your space into a pristine sanctuary.
          Our professional team is ready to exceed your expectations.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            onClick={() => navigate('/services')}
            className="bg-black text-yellow-400 px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:bg-gray-800 transition duration-200 text-sm sm:text-base"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Book Now
          </motion.button>

          <motion.button
            onClick={() => navigate('/contact')}
            className="bg-transparent border-2 border-black text-black px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:bg-black hover:text-yellow-400 transition duration-200 text-sm sm:text-base"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Get Quote
          </motion.button>
        </div>

        <motion.div
          className="mt-6 sm:mt-8 text-black/70"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-sm">✓ Free consultation • ✓ Eco-friendly products • ✓ 100% satisfaction guarantee</p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CallToAction;
