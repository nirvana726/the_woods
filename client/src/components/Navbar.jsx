import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/rooms", label: "Rooms" },
  { to: "/activities", label: "Activities" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // The header should be transparent on ANY page when at the very top
  const isAtTop = !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine navbar classes based on state
  const navBackground = isAtTop ? 'bg-transparent' : 'bg-[var(--bg)] shadow-md';
  const textColor = isAtTop ? 'text-white' : 'text-[var(--text)]';

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navBackground} ${textColor}`}>
      <div className="container mx-auto px-4 flex justify-between items-center h-20">
        {/* Logo */}
        <NavLink to="/" className="flex items-center h-14">
          <div className="bg-white rounded-full h-12 w-12 flex items-center justify-center shadow-md">
            <img
              src="/logo.avif"
              alt="The Woods Charikot Resort Logo"
              className="h-8 w-8 object-contain"
            />
          </div>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className="relative px-3 py-1"
            >
              <span className="relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#a89c7c] after:transition-all after:duration-300 hover:after:w-full font-semibold">
                {item.label}
              </span>
            </NavLink>
          ))}
          <NavLink
            to="/booking"
            className="rounded-full bg-green-600 hover:bg-green-700 text-white px-3 py-2 text-sm font-semibold ml-4"
          >
            Book Now
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Open Menu">
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <nav className="md:hidden bg-[var(--bg)] text-[var(--text)] absolute top-full left-0 w-full shadow-xl">
          <div className="container mx-auto px-4 pt-2 pb-6 flex flex-col items-center space-y-3">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="w-full text-center py-2 hover:bg-gray-100 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <NavLink
              to="/booking"
              className="mt-4 w-full text-center bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg shadow-md transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Now
            </NavLink>
          </div>
        </nav>
      )}
    </header>
  );
}
