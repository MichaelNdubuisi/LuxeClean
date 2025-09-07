import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import BookingModal from "./BookingModal";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
<header className="bg-[#121212] text-white px-8 py-5 flex justify-between items-center relative shadow-xl z-50 border-b border-yellow-400/20">
      
      {/* LuxeClean Logo without space */} 
      <Link to="/" className="text-3xl font-extrabold tracking-wide text-yellow-400 drop-shadow-md">
        LuxeClean
      </Link>

      {/* Mobile menu toggle */} 
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu" className="focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded">
          {isOpen ? <X size={28} className="text-yellow-400" /> : <Menu size={28} className="text-yellow-400" />}
        </button>
      </div>

      {/* Desktop navigation */} 
      <nav className="hidden md:flex space-x-8 text-sm font-semibold text-gray-300 tracking-wide">
        <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
        <Link to="/services" className="hover:text-yellow-400 transition">Services</Link>
        <Link to="/pricing" className="hover:text-yellow-400 transition">Pricing</Link>
        <Link to="/about" className="hover:text-yellow-400 transition">About Us</Link>
        <Link to="/contact" className="hover:text-yellow-400 transition">Contact</Link>
      </nav>

      {/* Desktop Book Now button */} 
      <div className="hidden md:block">
        <button
          onClick={() => setIsBookingModalOpen(true)}
          className="btn-primary-dark"
        >
          Book Now
        </button>
      </div>

      {/* Mobile dropdown menu */} 
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#1a1a1a] flex flex-col items-start px-6 py-6 space-y-3 md:hidden z-50 shadow-lg rounded-b-lg border border-yellow-400/20">
          <Link to="/" className="hover:text-yellow-400 transition" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/services" className="hover:text-yellow-400 transition" onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/pricing" className="hover:text-yellow-400 transition" onClick={() => setIsOpen(false)}>Pricing</Link>
          <Link to="/about" className="hover:text-yellow-400 transition" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link to="/contact" className="hover:text-yellow-400 transition" onClick={() => setIsOpen(false)}>Contact</Link>
          <button
            onClick={() => setIsBookingModalOpen(true)}
            className="btn-primary-dark w-full text-left mt-3"
          >
            Book Now
          </button>
        </div>
      )}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        serviceName="General Service"
      />
    </header>
  );
}
