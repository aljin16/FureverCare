import { Heart, Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const quickLinks = ['Home', 'About', 'Services', 'Events', 'Contact'];
const socialLinks = [
  { icon: Instagram, href: '#' },
  { icon: Facebook, href: '#' },
];

export default function Footer() {
  return (
    <footer id="contact" className="text-white" style={{ backgroundColor: '#1e3a5f' }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[#ff914d] to-[#f5803d]">
                <span className="text-white font-display font-bold text-lg">F</span>
              </div>
              <span className="font-display text-2xl font-bold text-white">FureverCare</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-sm">
              Premium pet grooming, salon services, and boutique products. 
              Where every pet is treated like family.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-[#ff914d] transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-xs uppercase tracking-[0.15em] mb-6 text-white/50">Quick Links</h4>
            <ul className="space-y-3.5">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/70 hover:text-white transition-colors text-sm hover:translate-x-1 inline-block duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-xs uppercase tracking-[0.15em] mb-6 text-white/50">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[#ff914d]" />
                <span>123 Pet Street, Pawville</span>
              </li>
              <li className="flex items-center gap-3 text-white/70 text-sm">
                <Phone className="w-4 h-4 shrink-0 text-[#ff914d]" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-white/70 text-sm">
                <Mail className="w-4 h-4 shrink-0 text-[#ff914d]" />
                <span>hello@furevercare.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © 2024 FureverCare. All rights reserved.
          </p>
          <p className="text-white/40 text-sm flex items-center gap-1.5">
            Made with <Heart className="w-3.5 h-3.5 fill-current text-[#ff914d]" /> for pets everywhere
          </p>
        </div>
      </div>
    </footer>
  );
}
