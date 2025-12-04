import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

// Refined animation configs
const ease = [0.25, 0.1, 0.25, 1];
const smoothSpring = { type: 'spring', stiffness: 120, damping: 20 };

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Logo', href: '#logo' },
  { name: 'Events', href: '#events' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#fefdfb]/90 backdrop-blur-xl shadow-soft py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#206a9f] to-[#1a5a8a]">
              <span className="text-white font-display font-bold">F</span>
            </div>
            <span className="font-display text-xl font-bold text-[#1e3a5f]">
              FureverCare
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-slate-500 hover:text-[#1e3a5f] rounded-xl hover:bg-[#206a9f]/5 transition-colors duration-200"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 + 0.2, duration: 0.4, ease }}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              className="ml-3 px-6 py-2.5 text-white rounded-xl font-medium text-sm bg-gradient-to-r from-[#ff914d] to-[#f5803d]"
              style={{ boxShadow: '0 4px 16px rgba(255, 145, 77, 0.3)' }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.4, ease }}
              whileHover={{ y: -2, boxShadow: '0 8px 24px rgba(255, 145, 77, 0.4)' }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Us
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2.5 text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease }}
            className="md:hidden bg-[#fefdfb]/95 backdrop-blur-xl border-t border-slate-100/50 overflow-hidden"
          >
            <div className="px-6 py-5 space-y-1">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="block px-4 py-3.5 text-slate-600 hover:bg-[#206a9f]/5 hover:text-[#1e3a5f] rounded-xl font-medium text-sm transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3, ease }}
                  whileTap={{ scale: 0.98 }}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                className="block w-full text-center mt-4 px-5 py-3.5 text-white rounded-xl font-medium text-sm bg-gradient-to-r from-[#ff914d] to-[#f5803d]"
                style={{ boxShadow: '0 4px 16px rgba(255, 145, 77, 0.25)' }}
                onClick={() => setIsMobileMenuOpen(false)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.3, ease }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Us
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
