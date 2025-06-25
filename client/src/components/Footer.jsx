import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';

const quickLinks = [
  { to: "/about", label: "About Us" },
  { to: "/rooms", label: "Rooms & Suites" },
  { to: "/activities", label: "Activities" },
  { to: "/contact", label: "Contact" },
  { to: "/booking", label: "Book Now" },
];

const legalLinks = [
    { to: "/privacy-policy", label: "Privacy Policy" },
    { to: "/terms", label: "Terms of Service" },
    { to: "/cancellation", label: "Cancellation Policy" },
];

const socialLinks = [
    { href: "https://facebook.com", icon: <FaFacebookF />, label: "Facebook" },
    { href: "https://instagram.com", icon: <FaInstagram />, label: "Instagram" },
    { href: "https://tiktok.com", icon: <FaTiktok />, label: "TikTok" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-16 border-b border-gray-200">
          
          {/* Resort Info */}
          <div className="w-full md:w-1/3 lg:w-2/5">
            <Link to="/" className="text-2xl font-bold text-gray-900">
              The Woods
            </Link>
            <p className="max-w-sm mt-4 text-sm leading-relaxed">
              Your luxury mountain retreat in the heart of the Himalayas, where nature meets comfort and tranquility awaits.
            </p>
            <div className="mt-6 space-y-2 text-sm">
                <p><strong>Location:</strong> Charikot, Dolakha, Nepal</p>
                <p><strong>Phone:</strong> +977 9851-122519</p>
                <p><strong>Email:</strong> info@thewoodscharikot.com</p>
            </div>
          </div>

          {/* Links Grid */}
          <div className="w-full md:w-2/3 lg:w-3/5 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-base text-gray-900 mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="text-sm hover:text-gray-900 hover:underline transition-colors">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-base text-gray-900 mb-4">Legal</h3>
              <ul className="space-y-2">
                {legalLinks.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-sm hover:text-gray-900 hover:underline transition-colors">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-base text-gray-900 mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                   <a key={social.label} href={social.href} aria-label={social.label} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 transition-colors">
                     {social.icon}
                   </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="py-6 text-center text-sm text-gray-500">
          <p>Copyright © {new Date().getFullYear()} The Woods Charikot Resort. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
