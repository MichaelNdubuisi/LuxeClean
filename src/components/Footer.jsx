import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
<footer className="glass-effect text-gray-300 px-8 py-12 text-sm border-t border-yellow-400/20">
      <div className="max-w-7xl mx-auto grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
        
        {/* Logo / Description */} 
        <div>
          <h3 className="text-yellow-400 text-xl font-extrabold mb-4 drop-shadow-md">LuxeClean</h3>
          <p className="leading-relaxed text-gray-400 max-w-xs">
            LuxeClean provides premium cleaning services tailored to luxury homes, offices, and businesses in Nigeria.
            Experience cleanliness with unparalleled class and attention to detail.
          </p>
        </div>

        {/* Contact Info */} 
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Contact</h4>
          <p>LuxeClean Nigeria</p>
          <p>12 Adeola Odeku Street, Victoria Island</p>
          <p>Lagos, Nigeria</p>
          <p className="mt-3">
            Phone:{" "}
            <a
              href="tel:+2348012345678"
              className="text-yellow-400 hover:underline"
            >
              +234 801 234 5678
            </a>
          </p>
          <p>
            Email:{" "}
            <a
              href="mailto:info@luxeclean.ng"
              className="text-yellow-400 hover:underline"
            >
              info@luxeclean.ng
            </a>
          </p>
        </div>

        {/* Working Hours */} 
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Working Hours</h4>
          <p>Mon – Fri: 8:00 AM – 6:00 PM</p>
          <p>Saturday: 9:00 AM – 4:00 PM</p>
          <p>Sunday: Closed</p>
        </div>

        {/* Social Media */} 
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Connect with Us</h4>
          <div className="flex flex-wrap gap-6 text-yellow-400 text-3xl">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-yellow-300 transition"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-yellow-300 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-yellow-300 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-yellow-300 transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-gray-500 text-xs select-none">
        &copy; {new Date().getFullYear()} LuxeClean Nigeria. All rights reserved.
      </div>
    </footer>
  );
}
