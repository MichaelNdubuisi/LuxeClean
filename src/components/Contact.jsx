import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
    // Simulate form submission
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 3000); // Hide success message after 3 seconds
  };

  return (
    <section className="bg-[#0f0f0f] text-white px-4 sm:px-6 py-12">
      <h2 className="text-3xl font-semibold mb-10 text-center">Contact Us</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Contact Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="bg-[#1a1a1a] p-6 rounded-lg shadow space-y-4">
          {isSubmitted && (
            <div className="bg-green-600 text-white p-3 rounded mb-4">
              Thank you! Your inquiry has been sent successfully.
            </div>
          )}
          <div>
            <label className="block text-sm mb-1">Name *</label>
            <input
              type="text"
              {...register('name', { required: 'Name is required' })}
              className={`w-full px-4 py-2 rounded bg-[#0f0f0f] text-white border ${
                errors.name ? 'border-red-500' : 'border-gray-700'
              } focus:outline-none focus:ring-2 focus:ring-yellow-400`}
              placeholder="Your name"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>
          <div>
            <label className="block text-sm mb-1">Email *</label>
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
              placeholder="you@example.com"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>
          <div>
            <label className="block text-sm mb-1">Message *</label>
            <textarea
              rows="4"
              {...register('message', { required: 'Message is required' })}
              className={`w-full px-4 py-2 rounded bg-[#0f0f0f] text-white border ${
                errors.message ? 'border-red-500' : 'border-gray-700'
              } focus:outline-none focus:ring-2 focus:ring-yellow-400`}
              placeholder="Your message..."
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
          </div>
          <button
            type="submit"
            className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded hover:bg-yellow-500 transition-all w-full sm:w-auto sm:px-8 sm:py-3 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Send Inquiry
          </button>
        </form>

        {/* Map Location */}
        <div className="rounded-lg overflow-hidden shadow min-h-[300px] h-full">
          <iframe
            title="LuxeClean Nigeria Location"
            src="https://maps.google.com/maps?q=12+Adeola+Odeku+Street,+Victoria+Island,+Lagos,+Nigeria&z=14&output=embed"
            className="w-full h-full min-h-[300px] border-none"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
