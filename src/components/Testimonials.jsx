export default function Testimonials() {
  const feedback = [
    {
      quote: "LuxeClean transformed my home! The attention to detail is unmatched. Highly recommend!",
      name: "Amelia Clarke",
    },
    {
      quote: "Our office has never looked better. LuxeClean’s team is professional and thorough.",
      name: "James Anderson",
    },
    {
      quote: "Exceptional service and results every time. LuxeClean is our go-to for all cleaning needs.",
      name: "Sophia Lee",
    },
  ];

  return (
    <section className="px-6 py-12 bg-[#0f0f0f]">
      <h3 className="text-xl font-bold mb-6 text-white">What Our Clients Say</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {feedback.map((item, i) => (
          <div key={i} className="bg-[#1a1a1a] p-4 rounded-md shadow text-white">
            <p className="mb-2 italic">“{item.quote}”</p>
            <p className="text-sm text-gray-400">- {item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
