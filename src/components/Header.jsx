import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Make sure to install this

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#0d0d0d] text-[#f5f5f5] px-6 py-4 flex justify-between items-center relative shadow-md z-50">
      
      {/* LuxeClean Logo without space */}
      <Link to="/" className="text-2xl font-bold tracking-tight text-yellow-400">
        LuxeClean
      </Link>

      {/* Mobile menu toggle */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Desktop navigation */}
      <nav className="hidden md:flex space-x-6 text-sm font-medium text-[#cccccc]">
        <Link to="/" className="hover:text-white transition">Home</Link>
        <Link to="/services" className="hover:text-white transition">Services</Link>
        <Link to="/pricing" className="hover:text-white transition">Pricing</Link>
        <Link to="/about" className="hover:text-white transition">About Us</Link>
        <Link to="/contact" className="hover:text-white transition">Contact</Link>
      </nav>

      {/* Desktop Book Now button */}
      <div className="hidden md:block">
        <button className="bg-yellow-400 text-black px-5 py-2 rounded-md text-sm font-semibold hover:bg-yellow-300 transition">
          Book Now
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#1a1a1a] flex flex-col items-start px-6 py-4 space-y-2 md:hidden z-50 shadow-lg">
          <Link to="/" className="hover:text-white transition" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/services" className="hover:text-white transition" onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/pricing" className="hover:text-white transition" onClick={() => setIsOpen(false)}>Pricing</Link>
          <Link to="/about" className="hover:text-white transition" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link to="/contact" className="hover:text-white transition" onClick={() => setIsOpen(false)}>Contact</Link>
          <button className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300 transition w-full text-left mt-2">
            Book Now
          </button>
        </div>
      )}
    </header>
  );
}
