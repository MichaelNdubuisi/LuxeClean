import heroImage from '../assets/images/hero.jpg';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Hero() {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
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

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
<section className="relative h-[500px] md:h-[350px] w-full overflow-hidden mt-0">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 bg-center bg-no-repeat bg-cover z-0 opacity-80 filter brightness-90"
        style={{ backgroundImage: `url(${heroImage})` }}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.8 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      ></motion.div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>

      {/* Content */}
      <motion.div
        className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-6 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-5 drop-shadow-lg"
          variants={itemVariants}
        >
          Experience the Luxury of Clean
        </motion.h2>
        <motion.p
          className="mb-8 max-w-3xl text-base sm:text-lg md:text-xl text-yellow-100 drop-shadow-md"
          variants={itemVariants}
        >
          LuxeClean Services offers premium cleaning solutions for those who demand the best. Elevate your space with our meticulous attention to detail and eco-friendly practices.
        </motion.p>
        <motion.button
          onClick={() => navigate('/contact')}
          className="btn-primary px-8 py-3 text-lg font-semibold"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          Book Your Service
        </motion.button>
      </motion.div>
    </section>
  );
}
