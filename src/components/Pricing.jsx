import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaStar, FaCrown, FaGem } from 'react-icons/fa';

const pricingPlans = [
  {
    name: "Essential Clean",
    icon: <FaCheck className="text-2xl text-yellow-400" />,
    price: "₦15,000",
    period: "per visit",
    description: "Perfect for regular maintenance and basic cleaning needs",
    features: [
      "2-3 hours service time",
      "Basic cleaning supplies included",
      "Standard equipment",
      "Email support",
      "Flexible scheduling",
      "Satisfaction guarantee"
    ],
    popular: false,
    buttonText: "Get Started"
  },
  {
    name: "Premium Clean",
    icon: <FaStar className="text-2xl text-yellow-400" />,
    price: "₦25,000",
    period: "per visit",
    description: "Comprehensive cleaning with premium products and equipment",
    features: [
      "3-4 hours service time",
      "Premium eco-friendly products",
      "Advanced cleaning equipment",
      "Priority scheduling",
      "Dedicated account manager",
      "Deep cleaning options",
      "24/7 support",
      "Quality inspection"
    ],
    popular: true,
    buttonText: "Most Popular"
  },
  {
    name: "Luxury Clean",
    icon: <FaCrown className="text-2xl text-yellow-400" />,
    price: "₦40,000",
    period: "per visit",
    description: "Ultimate luxury experience with specialized care and attention",
    features: [
      "4-6 hours service time",
      "Luxury cleaning products",
      "Specialized equipment",
      "White-glove service",
      "Personal concierge",
      "Custom cleaning plans",
      "VIP support line",
      "Monthly maintenance included",
      "Move-in/move-out services"
    ],
    popular: false,
    buttonText: "Go Luxury"
  }
];

const frequencyOptions = [
  { label: "One-time", multiplier: 1, savings: "" },
  { label: "Weekly", multiplier: 4, savings: "Save 10%" },
  { label: "Bi-weekly", multiplier: 2, savings: "Save 5%" },
  { label: "Monthly", multiplier: 1, savings: "" }
];

const Pricing = () => {
  const [selectedFrequency, setSelectedFrequency] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
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
<section className="bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f] py-20 px-6 sm:px-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-yellow-400 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-yellow-400 rounded-full"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 border border-yellow-400 rounded-full"></div>
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
            Transparent Pricing
          </h2>
          <p className="text-yellow-200 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed mb-8">
            Choose the perfect cleaning plan for your needs. All prices include premium products,
            professional equipment, and our satisfaction guarantee.
          </p>

          {/* Frequency Selector */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {frequencyOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => setSelectedFrequency(index)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  selectedFrequency === index
                    ? 'bg-yellow-400 text-black shadow-lg'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-yellow-400/20'
                }`}
              >
                {option.label}
                {option.savings && (
                  <span className="ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded">
                    {option.savings}
                  </span>
                )}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative group ${plan.popular ? 'lg:scale-105 lg:-mt-4' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}

              <div className={`card h-full p-8 ${plan.popular ? 'ring-2 ring-yellow-400 shadow-yellow-400/20' : ''}`}>
                {/* Header */}
                <div className="text-center mb-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-yellow-400/10 rounded-xl">
                      {plan.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{plan.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{plan.description}</p>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-yellow-400 mb-1">
                      ₦{(parseInt(plan.price.replace(/[^\d]/g, '')) * frequencyOptions[selectedFrequency].multiplier).toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-400">
                      {frequencyOptions[selectedFrequency].label.toLowerCase() === 'one-time' ? 'per visit' :
                       frequencyOptions[selectedFrequency].label.toLowerCase() === 'monthly' ? 'per month' :
                       `per ${frequencyOptions[selectedFrequency].label.toLowerCase()}`}
                    </div>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <FaCheck className="text-yellow-400 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-black hover:from-yellow-500 hover:to-yellow-600 shadow-lg hover:shadow-yellow-400/50 transform hover:-translate-y-0.5'
                      : 'btn-primary'
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Services */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="glass-effect p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold mb-4 text-yellow-400">Additional Services</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              <div className="text-center">
                <FaGem className="text-yellow-400 text-2xl mx-auto mb-2" />
                <div className="text-sm font-medium text-white">Deep Cleaning</div>
                <div className="text-xs text-gray-400">+₦10,000</div>
              </div>
              <div className="text-center">
                <FaStar className="text-yellow-400 text-2xl mx-auto mb-2" />
                <div className="text-sm font-medium text-white">Carpet Cleaning</div>
                <div className="text-xs text-gray-400">+₦8,000</div>
              </div>
              <div className="text-center">
                <FaCrown className="text-yellow-400 text-2xl mx-auto mb-2" />
                <div className="text-sm font-medium text-white">Window Cleaning</div>
                <div className="text-xs text-gray-400">+₦6,000</div>
              </div>
              <div className="text-center">
                <FaCheck className="text-yellow-400 text-2xl mx-auto mb-2" />
                <div className="text-sm font-medium text-white">Move Services</div>
                <div className="text-xs text-gray-400">+₦15,000</div>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              All additional services include our premium products and satisfaction guarantee.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
