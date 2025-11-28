import { motion } from 'framer-motion';
import { Heart, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#8CE4FF] to-[#FFA239] flex items-center justify-center shadow-md">
                <span className="text-white font-display font-bold text-lg">F</span>
              </div>
              <span className="font-display text-2xl font-bold tracking-tight">FureverCare</span>
            </div>
            <p className="text-slate-400 mb-8 max-w-md leading-relaxed">
              Premium pet grooming, salon services, and boutique products. 
              Where every pet is treated like family.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-[#FFA239] transition-colors text-slate-300 hover:text-white"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Services', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-400 hover:text-[#FFA239] transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <MapPin className="w-5 h-5 text-[#FFA239] shrink-0" />
                <span>123 Pet Street, Pawville</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <Phone className="w-5 h-5 text-[#8CE4FF] shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <Mail className="w-5 h-5 text-[#FF5656] shrink-0" />
                <span>hello@furevercare.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © 2024 FureverCare. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm flex items-center gap-2">
            Made with <Heart className="w-4 h-4 text-[#FF5656] fill-[#FF5656]" /> for pets everywhere
          </p>
        </div>
      </div>
    </footer>
  );
}
