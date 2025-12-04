import { Instagram, Facebook, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Events', href: '#events' },
];

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-200/60 bg-[#fefdfb]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Main Footer Row */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br from-[#206a9f] to-[#ff914d]">
              <span className="text-white font-display font-bold text-sm">F</span>
            </div>
            <span className="font-display text-lg font-bold text-[#1e3a5f]">FureverCare</span>
          </div>

          {/* Nav Links */}
          <nav className="flex items-center gap-6">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-slate-500 hover:text-[#ff914d] text-sm font-medium transition-colors"
                whileHover={{ y: -1 }}
              >
                {link.name}
              </motion.a>
            ))}
          </nav>

          {/* Social + CTA */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <motion.a
                href="#"
                className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-[#ff914d] hover:text-white transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram className="w-3.5 h-3.5" />
              </motion.a>
              <motion.a
                href="#"
                className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-[#ff914d] hover:text-white transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Facebook className="w-3.5 h-3.5" />
              </motion.a>
            </div>
            <motion.a
              href="#services"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#ff914d] text-white text-xs font-semibold rounded-full hover:bg-[#1e3a5f] transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Book Now
              <ArrowUpRight className="w-3 h-3" />
            </motion.a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400">
          <span>© 2024 FureverCare. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-slate-600 transition-colors">Terms</a>
            <span className="text-slate-300">·</span>
            <span>hello@furevercare.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
