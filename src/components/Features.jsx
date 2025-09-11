import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaLeaf, FaTools, FaHandshake } from 'react-icons/fa';

const differentiators = [
  {
    icon: <FaShieldAlt className="text-4xl text-yellow-400" />,
    title: "Insured & Bonded",
    description: "Full insurance coverage and bonding for your complete peace of mind. All our technicians are background-checked and fully insured.",
    highlight: "100% Protected Service"
  },
  {
    icon: <FaLeaf className="text-4xl text-yellow-400" />,
    title: "Eco-Friendly Products",
    description: "We use only premium, environmentally-safe cleaning products that are effective yet gentle on your home and the planet.",
    highlight: "Green Certified Solutions"
  },
  {
    icon: <FaTools className="text-4xl text-yellow-400" />,
    title: "Advanced Equipment",
    description: "State-of-the-art cleaning technology and equipment for superior results. From steam cleaners to HEPA filtration systems.",
    highlight: "Professional Grade Tools"
  },
  {
    icon: <FaHandshake className="text-4xl text-yellow-400" />,
    title: "Satisfaction Guarantee",
    description: "Not happy with our service? We'll return within 24 hours at no extra cost. Your satisfaction is our top priority.",
    highlight: "Money-Back Promise"
  }
];

const Features = () => {
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
    hidden: { opacity: 0, x: -50 },
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
<section className="bg-gradient-to-br from-[#1a1a1a] via-[#0f0f0f] to-[#1a1a1a] py-20 px-6 sm:px-12 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-40 h-40 border-2 border-yellow-400 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 border-2 border-yellow-400 rounded-full"></div>
        <div className="absolute top-1/3 left-1/3 w-16 h-16 border-2 border-yellow-400 rounded-full"></div>
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
            What Makes Us Different
          </h2>
          <p className="text-yellow-200 max-w-4xl mx-auto text-sm sm:text-base leading-relaxed">
            Experience the LuxeClean difference with our commitment to excellence, innovation, and customer satisfaction.
            We're not just cleaners – we're your trusted partners in maintaining pristine spaces.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
            >
              <div className="card h-full p-8 hover:scale-[1.02] transition-all duration-300">
                {/* Icon with background */}
                <div className="flex items-center mb-6">
                  <div className="p-4 bg-gradient-to-br from-yellow-400/20 to-yellow-500/20 rounded-xl mr-4 group-hover:from-yellow-400/30 group-hover:to-yellow-500/30 transition-all duration-300">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-yellow-400 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <div className="text-xs font-medium text-yellow-400 bg-yellow-400/10 px-3 py-1 rounded-full inline-block">
                      {item.highlight}
                    </div>
                  </div>
                </div>

                <p className="text-gray-400 text-base leading-relaxed">
                  {item.description}
                </p>

                {/* Decorative element */}
                <div className="absolute top-4 right-4 w-8 h-8 border border-yellow-400/30 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="glass-effect p-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold mb-4 text-yellow-400">Experience the LuxeClean Advantage</h3>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Join the growing number of discerning clients who choose LuxeClean for their premium cleaning needs.
              Discover why we're the preferred choice for luxury homes and businesses across Nigeria.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary px-8 py-3">
                Get Started Today
              </button>
              <button className="btn-primary-dark px-6 py-3">
                Learn More
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
