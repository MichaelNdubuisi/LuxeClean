import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Jane Doe",
    role: "Homeowner",
    photo: "/path/to/photo1.jpg",
    text: "LuxeClean transformed my home! Highly recommend their services."
  },
  {
    name: "John Smith",
    role: "Business Owner",
    photo: "/path/to/photo2.jpg",
    text: "Professional and reliable. My office has never looked better."
  }
];

const Testimonials = () => {
  return (
    <section className="bg-[#121212] py-16 px-6 sm:px-12">
      <div className="container text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12 text-yellow-400 drop-shadow-md">What Our Clients Say</h2>
        <div className="space-y-10 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-[#1a1a1a] p-8 rounded-lg shadow-lg shadow-yellow-400/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
              viewport={{ once: true }}
            >
              <p className="text-yellow-200 italic mb-6 text-lg leading-relaxed">"{testimonial.text}"</p>
              <div className="flex items-center justify-center space-x-6">
                <img
                  src={testimonial.photo}
                  alt={`${testimonial.name} photo`}
                  className="w-14 h-14 rounded-full object-cover border-2 border-yellow-400"
                />
                <div>
                  <p className="font-semibold text-yellow-400 text-lg">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
