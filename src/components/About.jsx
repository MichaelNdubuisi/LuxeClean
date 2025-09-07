import React from 'react';
import heroImg from '../assets/images/clearners.jpeg';
import teamImg from '../assets/images/people.jpeg';
import ecoImg from '../assets/images/rug.jpeg';
import equipmentImg from '../assets/images/janitor.jpeg';
import detailImg from '../assets/images/floor.jpeg';

const About = () => {
  return (
    <div className="bg-[#0f0f0f] text-[#f5f5f5] font-sans">
      {/* Hero Section */}
      <section>
        <img
          src={heroImg}
          alt="Cleaning team at work"
          className="w-full h-[300px] md:h-[400px] object-cover"
        />
      </section>

      {/* Our Story */}
      <section className="px-4 md:px-6 py-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Story</h2>
            <p className="mb-6 text-base md:text-lg text-[#cfcfcf]">
              LuxeClean Services was founded with one mission: to provide specialized cleaning services
              that prioritize quality and customer satisfaction. Our team of dedicated professionals is
              trained to deliver meticulous cleaning solutions, ensuring every space is treated with the utmost respect and attention.
            </p>
            <p className="text-base md:text-lg text-[#cfcfcf]">
              From residential homes to commercial offices, we have grown into a trusted name in luxury cleaning, thanks to our
              commitment to excellence and attention to detail.
            </p>
          </div>
          <div>
            <img
              src={teamImg}
              alt="Team photo"
              className="w-full rounded-lg object-cover h-64 sm:h-80 md:h-full"
            />
          </div>
        </div>
      </section>

      {/* Our Premium Processes */}
      <section className="px-4 md:px-6 py-12 max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center md:text-left">Our Premium Processes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[ecoImg, equipmentImg, detailImg].map((img, i) => {
            const texts = [
              'We only use the best materials and eco-friendly solutions to make your space feel truly clean and safe to breathe in.',
              'Our advanced equipment and tech training are specialized to deliver results that exceed expectations, leaving your environment spotless.',
              'Attention to detail is at the core of our process, ensuring every element is immaculate and every finish shines.'
            ];
            return (
              <div key={i} className="bg-[#1a1a1a] p-4 rounded-lg shadow text-[#cfcfcf]">
                <img src={img} alt="Process" className="rounded-lg w-full h-40 object-cover" />
                <p className="mt-4 text-sm">{texts[i]}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 md:px-6 py-12 max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center md:text-left">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              img: 'https://randomuser.me/api/portraits/women/44.jpg',
              name: 'Sarah L.',
              text: '“LuxeClean transformed my home into a sparkling sanctuary. Their attention to detail and professionalism are second to none.”'
            },
            {
              img: 'https://randomuser.me/api/portraits/men/45.jpg',
              name: 'James B.',
              text: '“I am thoroughly impressed with LuxeClean’s services. They truly care about their customers and it shows in their work.”'
            }
          ].map((t, i) => (
            <div
              key={i}
              className="bg-[#1a1a1a] p-6 rounded-lg shadow text-[#cfcfcf] flex gap-4 items-start"
            >
              <img
                src={t.img}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="italic mb-2 text-sm">{t.text}</p>
                <p className="font-semibold text-sm text-[#f5f5f5]">– {t.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-[#1a1a1a] text-center py-12 px-4">
        <h2 className="text-xl sm:text-2xl mb-4 text-[#f5f5f5]">We’d love to hear from you!</h2>
        <p className="mb-6 text-[#cfcfcf] max-w-xl mx-auto">
          Whether you have questions or want to book a service, we’re here to help you.
        </p>
        <button className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded hover:bg-yellow-500 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default About;
