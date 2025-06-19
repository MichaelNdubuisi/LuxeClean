export default function Contact() {
  return (
    <section className="bg-[#0f0f0f] text-white px-4 sm:px-6 py-12">
      <h2 className="text-3xl font-semibold mb-10 text-center">Contact Us</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Contact Form */}
        <form className="bg-[#1a1a1a] p-6 rounded-lg shadow space-y-4">
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded bg-[#0f0f0f] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded bg-[#0f0f0f] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea
              rows="4"
              className="w-full px-4 py-2 rounded bg-[#0f0f0f] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Your message..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded hover:bg-yellow-500 transition-all w-full sm:w-auto"
          >
            Send Inquiry
          </button>
        </form>

        {/* Map Location */}
        <div className="rounded-lg overflow-hidden shadow min-h-[300px] h-full">
          <iframe
            title="LuxeClean USA Location"
            src="https://maps.google.com/maps?q=123+Main+Street,+Los+Angeles,+CA,+USA&z=14&output=embed"
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
