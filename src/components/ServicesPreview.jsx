import React from 'react';
import { motion } from 'framer-motion';
import { FaClipboardList, FaCalendarAlt, FaMagic, FaCheckCircle } from 'react-icons/fa';

const processSteps = [
  {
    step: "01",
    icon: <FaClipboardList className="text-3xl text-yellow-400" />,
    title: "Book Your Service",
    description: "Choose your preferred cleaning service and schedule a convenient time through our easy booking system.",
    details: "Quick online booking • Flexible scheduling • Instant confirmation"
  },
  {
    step: "02",
    icon: <FaCalendarAlt className="text-3xl text-yellow-400" />,
    title: "Schedule & Confirm",
    description: "Our team reviews your booking and confirms the details. We'll send you a reminder before the service.",
    details: "Personalized confirmation • Service details • Pre-service reminder"
  },
  {
    step: "03",
    icon: <FaMagic className="text-3xl text-yellow-400" />,
    title: "Professional Cleaning",
    description: "Our certified cleaners arrive with premium equipment and eco-friendly products to transform your space.",
    details: "Expert technicians • Premium equipment • Eco-friendly products"
  },
  {
    step: "04",
    icon: <FaCheckCircle className="text-3xl text-yellow-400" />,
    title: "Quality Assurance",
    description: "We ensure 100% satisfaction with our quality check process and follow-up support.",
    details: "Quality inspection • Satisfaction guarantee • Ongoing support"
  }
];

const ServicesPreview = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
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
<section className="bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f] py-20 px-6 sm:px-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-yellow-400 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-yellow-400 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-yellow-400 rounded-full"></div>
      </div>

      <div className="container relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 text-yellow-400 drop-shadow-md text-glow">
            How LuxeClean Works
          </h2>
          <p className="text-yellow-200 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
            Experience our streamlined process designed for maximum convenience and exceptional results.
            From booking to completion, we make premium cleaning effortless.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center text-black font-bold text-lg shadow-lg z-10">
                {step.step}
              </div>

              {/* Card */}
              <div className="card pt-8 h-full">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-yellow-400/10 rounded-full">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center text-white">{step.title}</h3>
                <p className="text-gray-400 mb-6 text-center text-base leading-relaxed">{step.description}</p>

                {/* Details */}
                <div className="border-t border-yellow-400/20 pt-4">
                  <p className="text-xs text-yellow-200 text-center leading-relaxed">
                    {step.details}
                  </p>
                </div>

                {/* Connecting Line (except for last item) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-8 h-0.5 bg-gradient-to-r from-yellow-400 to-transparent transform -translate-x-4"></div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="glass-effect p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4 text-yellow-400">Ready to Experience Luxury Cleaning?</h3>
            <p className="text-gray-300 mb-6 text-sm">
              Join thousands of satisfied customers who trust LuxeClean for their premium cleaning needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Start Your Booking
              </button>
              <button className="btn-primary-dark">
                Call Us Now
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;
