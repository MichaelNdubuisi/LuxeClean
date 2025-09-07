import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { X } from 'lucide-react';

export default function BookingModal({ isOpen, onClose, serviceName }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log('Booking submitted:', { ...data, service: serviceName });
    setIsSubmitted(true);
    reset();
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 3000);
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
        >
          <motion.div
            className="bg-[#1a1a1a] rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-white">Book {serviceName}</h3>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-8"
                >
                  <div className="text-green-400 text-4xl mb-4">✓</div>
                  <h4 className="text-white text-lg mb-2">Booking Request Sent!</h4>
                  <p className="text-gray-300">We'll contact you within 24 hours to confirm your booking.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <label className="block text-sm mb-1 text-gray-300">Full Name *</label>
                    <input
                      type="text"
                      {...register('name', { required: 'Name is required' })}
                      className={`w-full px-4 py-2 rounded bg-[#0f0f0f] text-white border ${
                        errors.name ? 'border-red-500' : 'border-gray-700'
                      } focus:outline-none focus:ring-2 focus:ring-yellow-400`}
                      placeholder="Your full name"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm mb-1 text-gray-300">Email *</label>
                    <input
                      type="email"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: 'Invalid email address',
                        },
                      })}
                      className={`w-full px-4 py-2 rounded bg-[#0f0f0f] text-white border ${
                        errors.email ? 'border-red-500' : 'border-gray-700'
                      } focus:outline-none focus:ring-2 focus:ring-yellow-400`}
                      placeholder="your@email.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm mb-1 text-gray-300">Phone *</label>
                    <input
                      type="tel"
                      {...register('phone', { required: 'Phone number is required' })}
                      className={`w-full px-4 py-2 rounded bg-[#0f0f0f] text-white border ${
                        errors.phone ? 'border-red-500' : 'border-gray-700'
                      } focus:outline-none focus:ring-2 focus:ring-yellow-400`}
                      placeholder="(555) 123-4567"
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm mb-1 text-gray-300">Preferred Date *</label>
                    <input
                      type="date"
                      {...register('date', { required: 'Date is required' })}
                      className={`w-full px-4 py-2 rounded bg-[#0f0f0f] text-white border ${
                        errors.date ? 'border-red-500' : 'border-gray-700'
                      } focus:outline-none focus:ring-2 focus:ring-yellow-400`}
                    />
                    {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm mb-1 text-gray-300">Address *</label>
                    <textarea
                      rows="3"
                      {...register('address', { required: 'Address is required' })}
                      className={`w-full px-4 py-2 rounded bg-[#0f0f0f] text-white border ${
                        errors.address ? 'border-red-500' : 'border-gray-700'
                      } focus:outline-none focus:ring-2 focus:ring-yellow-400`}
                      placeholder="Your full address"
                    ></textarea>
                    {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm mb-1 text-gray-300">Special Instructions</label>
                    <textarea
                      rows="2"
                      {...register('instructions')}
                      className="w-full px-4 py-2 rounded bg-[#0f0f0f] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      placeholder="Any special requests or instructions..."
                    ></textarea>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button
                      type="button"
                      onClick={onClose}
                      className="flex-1 bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
                    >
                      Cancel
                    </button>
                    <motion.button
                      type="submit"
                      className="flex-1 bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 transition"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Book Now
                    </motion.button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
