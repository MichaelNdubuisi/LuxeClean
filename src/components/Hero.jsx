import heroImage from '../assets/images/hero.jpg';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative h-[500px] md:h-[300px] w-full overflow-hidden mt-0">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-cover z-0 opacity-70"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0  bg-opacity-80 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Experience the Luxury of Clean
        </h2>
        <p className="mb-6 max-w-2xl text-sm md:text-lg">
          LuxeClean Services offers premium cleaning solutions for those who demand the best.
        </p>
        <button
          onClick={() => navigate('/about')}
          className="bg-yellow-400 text-black px-6 py-2 rounded-md font-medium hover:bg-yellow-300 transition duration-200"
        >
          Learn More
        </button>
      </div>
    </section>
  );
}
