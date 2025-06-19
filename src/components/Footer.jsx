import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-[#cccccc] px-4 sm:px-6 lg:px-8 py-10 text-sm">
      <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        
        {/* Logo / Description */}
        <div>
          <h3 className="text-yellow-400 text-lg font-semibold mb-3">LuxeClean</h3>
          <p className="leading-relaxed">
            Premium cleaning services tailored to luxury homes, offices, and businesses in Los Angeles.
            Cleanliness with class.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white text-base font-semibold mb-3">Contact</h4>
          <p>LuxeClean Los Angeles</p>
          <p>123 Beverly Blvd, Suite 202</p>
          <p>Los Angeles, CA 90036</p>
          <p className="mt-2">
            Phone:{" "}
            <a
              href="tel:+13235556666"
              className="text-yellow-400 hover:underline"
            >
              +1 (323) 555-6666
            </a>
          </p>
          <p>
            Email:{" "}
            <a
              href="mailto:la@luxeclean.com"
              className="text-yellow-400 hover:underline"
            >
              la@luxeclean.com
            </a>
          </p>
        </div>

        {/* Working Hours */}
        <div>
          <h4 className="text-white text-base font-semibold mb-3">Working Hours</h4>
          <p>Mon – Fri: 8:00 AM – 6:00 PM</p>
          <p>Saturday: 9:00 AM – 4:00 PM</p>
          <p>Sunday: Closed</p>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-white text-base font-semibold mb-3">Connect with Us</h4>
          <div className="flex flex-wrap gap-4 text-yellow-400 text-2xl">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-500 text-xs">
        &copy; {new Date().getFullYear()} LuxeClean Los Angeles. All rights reserved.
      </div>
    </footer>
  );
}
