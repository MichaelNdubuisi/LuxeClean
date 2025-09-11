import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import adannaOkoye from '../assets/images/Adanna Okoy.png';
import chukwumaNwosu from '../assets/images/Chukwuma Nwosu.png';
import funmiAdebayo from '../assets/images/Funmi Adebayo.png';
import emekaOkafor from '../assets/images/Emeka Okafor.png';
import person1 from '../assets/images/person1.jpeg';
import person2 from '../assets/images/person2.jpeg';

const testimonials = [
  {
    name: "Adanna Okoye",
    role: "Real Estate Agent",
    location: "Lagos, Nigeria",
    photo: adannaOkoye,
    rating: 5,
    text: "LuxeClean has been an absolute game-changer for my property showings. Their attention to detail and professional service ensures every home looks its absolute best. My clients are always impressed!",
    service: "Premium Home Cleaning"
  },
  {
    name: "Chukwuma Nwosu",
    role: "Restaurant Owner",
    location: "Port Harcourt, Nigeria",
    photo: chukwumaNwosu,
    rating: 5,
    text: "As a busy restaurant owner, maintaining cleanliness is crucial for health standards and customer satisfaction. LuxeClean's team is reliable, thorough, and always on time. Highly recommended!",
    service: "Commercial Deep Cleaning"
  },
  {
    name: "Funmi Adebayo",
    role: "Working Mother",
    location: "Abuja, Nigeria",
    photo: funmiAdebayo,
    rating: 5,
    text: "With my demanding job and three children, keeping the house clean was becoming impossible. LuxeClean gives me peace of mind knowing my home is in good hands. Their eco-friendly products are a plus!",
    service: "Regular Home Maintenance"
  },
  {
    name: "Emeka Okafor",
    role: "Office Manager",
    location: "Enugu, Nigeria",
    photo: emekaOkafor,
    rating: 5,
    text: "Our office space needed a complete transformation. LuxeClean exceeded our expectations with their professional service and attention to detail. The team was courteous and efficient throughout.",
    service: "Office Renovation Cleaning"
  },
  {
    name: "Ngozi Eze",
    role: "Hotel Manager",
    location: "Kano, Nigeria",
    photo: person1,
    rating: 5,
    text: "Maintaining hotel standards requires exceptional cleaning services. LuxeClean consistently delivers excellence, ensuring our guest rooms sparkle and our common areas are immaculate. A trusted partner!",
    service: "Hospitality Cleaning"
  },
  {
    name: "Ibrahim Musa",
    role: "Property Developer",
    location: "Ibadan, Nigeria",
    photo: person2,
    rating: 5,
    text: "For our luxury property developments, only the best will do. LuxeClean's premium service and use of high-quality products make them our go-to choice for move-in ready properties.",
    service: "Luxury Property Cleaning"
  }
];

const Testimonials = () => {
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
<section className="bg-gradient-to-br from-[#0f0f0f] via-[#121212] to-[#0f0f0f] py-20 px-6 sm:px-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 border-2 border-yellow-400 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 border-2 border-yellow-400 rounded-full"></div>
        <div className="absolute top-1/3 right-1/3 w-24 h-24 border-2 border-yellow-400 rounded-full"></div>
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
            What Our Clients Say
          </h2>
          <p className="text-yellow-200 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
            Don't just take our word for it. Hear from satisfied clients across Nigeria who trust LuxeClean
            for their premium cleaning needs.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="card p-6 h-full hover:scale-[1.02] transition-all duration-300">
                {/* Quote Icon */}
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-yellow-400/10 rounded-full">
                    <FaQuoteLeft className="text-yellow-400 text-xl" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-sm" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Service Tag */}
                <div className="mb-4">
                  <span className="inline-block bg-yellow-400/10 text-yellow-400 text-xs px-3 py-1 rounded-full font-medium">
                    {testimonial.service}
                  </span>
                </div>

                {/* Client Info */}
                <div className="flex items-center">
                  <img
                    src={testimonial.photo}
                    alt={`${testimonial.name} photo`}
                    className="w-12 h-12 rounded-full object-cover border-2 border-yellow-400 mr-4"
                  />
                  <div className="flex-1">
                    <p className="font-semibold text-white text-sm">{testimonial.name}</p>
                    <p className="text-yellow-400 text-xs font-medium">{testimonial.role}</p>
                    <p className="text-gray-400 text-xs">{testimonial.location}</p>
                  </div>
                </div>
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
            <h3 className="text-xl font-semibold mb-4 text-yellow-400">Join Our Happy Clients</h3>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Experience the LuxeClean difference that has made thousands of Nigerians choose us for their cleaning needs.
              Your satisfaction is our guarantee.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary px-8 py-3">
                Book Your Service
              </button>
              <button className="btn-primary-dark px-6 py-3">
                View Our Work
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
