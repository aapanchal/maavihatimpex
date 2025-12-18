import { useState } from 'react';
import { Menu, X, Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Our Process', href: '#process' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.div
        className="bg-white border-b border-organic shadow-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 py-3 hidden md:block">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center flex-wrap gap-6">
              <a href="mailto:Enquiry@maavihatimpex.com" className="flex items-center space-x-2 text-organic-dark hover:text-organic-light transition-colors">
                <Mail size={16} />
                <span>Enquiry@maavihatimpex.com</span>
              </a>
              <a href="tel:+919988003877" className="flex items-center space-x-2 text-organic-dark hover:text-organic-light transition-colors">
                <Phone size={16} />
                <span>+91 99880 03877 (Mukesh Desai)</span>
              </a>
              <div className="flex items-center space-x-2 text-organic-dark">
                <MapPin size={16} />
                <span>Survey No 1416, Plot No 2/A, Kamla Amrut Industrial Estate, Indrad Road, Nr. Indrad Village, Indrad-384440, Mehsana, Gujarat</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.header
        className="fixed top-0 left-0 right-0 bg-white z-50 md:static md:relative shadow-sm"
        style={{ paddingTop: 'env(safe-area-inset-top)' }}
      >
        <nav className="container mx-auto">
          <div className="flex items-center justify-between">
            <div
              className="flex items-center space-x-3"
            >
              <img
                src="/mvi-main-logo.jpeg"
                alt="Maa Vihat Impex Logo"
                className="h-[4.5rem] w-[15rem] md:h-[4.5rem] md:w-[5rem] object-contain"
              />
              <p className="text-organic-dark text-1xl font-bold">Maa Vihat Impex</p>
            </div>

            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 text-organic-dark hover:text-organic-light transition-colors duration-300 font-medium text-sm"
                  whileHover={{ y: -2 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>

            <button
              className="md:hidden text-organic-dark"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {isMenuOpen && (
            <motion.div
              className="md:hidden mt-4 pb-4 space-y-2"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 px-4 text-organic-dark hover:text-organic-light hover:bg-organic-light transition-colors duration-300 rounded"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </motion.div>
          )}
        </nav>
      </motion.header>
    </>
  );
};

export default Header;
