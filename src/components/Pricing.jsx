import React from 'react';
import Image4 from '../assets/images/houese.jpeg';
import Image5 from '../assets/images/toilet.jpeg';
import Image6 from '../assets/images/parlour.jpeg';

const plans = [
  {
    title: 'Basic Plan',
    price: '$99/month',
    description: 'Perfect for small spaces and light cleaning.',
    features: ['General Cleaning', 'Floor Cleaning', 'Dust Removal'],
  },
  {
    title: 'Standard Plan',
    price: '$199/month',
    description: 'Ideal for medium-sized homes and regular maintenance.',
    features: ['All Basic Plan Features', 'Window Cleaning', 'Kitchen Cleaning'],
  },
  {
    title: 'Premium Plan',
    price: '$299/month',
    description: 'For large homes and premium cleaning services.',
    features: ['All Standard Plan Features', 'Deep Cleaning', 'Carpet Cleaning'],
  },
];

const comparisonFeatures = [
  { feature: 'General Cleaning', basic: true, standard: true, premium: true },
  { feature: 'Window Cleaning', basic: false, standard: true, premium: true },
  { feature: 'Carpet Cleaning', basic: false, standard: false, premium: true },
];

const Pricing = () => {
  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen px-4 py-12">
      <h2 className="text-3xl font-semibold text-center mb-10">Our Pricing Plans</h2>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {plans.map((plan, index) => (
          <div key={index} className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg text-center flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
              <p className="mb-4 text-gray-300">{plan.description}</p>
              <ul className="mb-4 text-left list-disc list-inside text-gray-400">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <p className="text-yellow-400 font-bold text-lg mb-4">{plan.price}</p>
            </div>
            <button className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300 transition">
              Choose Plan
            </button>
          </div>
        ))}
      </div>

      {/* Comparison Chart */}
      <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg mb-16 overflow-x-auto">
        <h3 className="text-2xl font-semibold mb-4">Comparison Chart</h3>
        <table className="w-full text-left border-collapse min-w-[500px]">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="py-3 px-4 text-sm font-medium text-gray-400">Feature</th>
              <th className="py-3 px-4 text-sm font-medium text-gray-400 text-center">Basic</th>
              <th className="py-3 px-4 text-sm font-medium text-gray-400 text-center">Standard</th>
              <th className="py-3 px-4 text-sm font-medium text-gray-400 text-center">Premium</th>
            </tr>
          </thead>
          <tbody>
            {comparisonFeatures.map((item, index) => (
              <tr key={index} className="border-b border-gray-700">
                <td className="py-3 px-4 text-gray-300">{item.feature}</td>
                <td className="py-3 px-4 text-center">{item.basic ? '✔️' : '❌'}</td>
                <td className="py-3 px-4 text-center">{item.standard ? '✔️' : '❌'}</td>
                <td className="py-3 px-4 text-center">{item.premium ? '✔️' : '❌'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Gallery Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
        {[Image4, Image5, Image6].map((img, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
          >
            <img
              src={img}
              alt={`Gallery image ${index + 1}`}
              className="w-[180px] h-[180px] object-cover rounded-lg"
              style={{ imageRendering: 'auto' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
