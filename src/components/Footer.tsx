import { Facebook, Instagram, Linkedin, Mail, ArrowUp, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Our Process', href: '#process' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/ma-vihat-impex-a311663a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://www.facebook.com/share/17L2SGTWvb/?mibextid=wwXIfr',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/maavihatimpex2323?igsh=a3VlNmZuaDB2Mzcx&utm_source=qr',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="bg-organic-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <div className="flex items-center space-x-3 mb-4">
              <img src="/mvi-main-logo.png" alt="Maa Vihat Impex Logo" className="h-[4.5rem] w-[15rem] md:h-[4.5rem] md:w-[15rem] object-contain" />
            </div>
            <p className="text-white/80 mb-4 text-sm">
              Premium organic cotton trading and export. Purely ginned, truly organic.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                    aria-label={social.name}
                    whileHover={{ scale: 1.2 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4">Our Products</h4>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>Organic Cotton Bales</li>
              <li>Pure Ginned Cotton</li>
              <li>Cotton Seeds</li>
              <li>Custom Sourcing</li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href="mailto:Enquiry@maavihatimpex.com"
                className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-300 text-sm"
              >
                <Mail className="w-5 h-5" />
                <span>Enquiry@maavihatimpex.com</span>
              </a>
              <a
                href="tel:+919988003877"
                className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-300 text-sm"
              >
                <Phone className="w-5 h-5" />
                <span>+91 99880 03877 (Mukesh Desai)</span>
              </a>
              <a
                href="tel:+917041440230"
                className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-300 text-sm"
              >
                <Phone className="w-5 h-5" />
                <span>+91 70414 40230 (Sales & Enquiries)</span>
              </a>
              <p className="text-white/80 text-sm">
                Survey No 1416, Plot No 2/A, Kamla Amrut Industrial Estate, Indrad Road, Nr. Indrad Village, Indrad-384440, Mehsana, Gujarat
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="border-t border-white/20 mt-8 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/80 text-sm text-center md:text-left">
              &copy; 2025 Maa Vihat Impex. All Rights Reserved.
            </p>
            <motion.button
              onClick={scrollToTop}
              className="mt-4 md:mt-0 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300"
              aria-label="Scroll to top"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
