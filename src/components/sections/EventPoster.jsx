import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, MapPin, Clock, Gift, Palette, Type, Sparkles } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    }
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const posterColors = [
  { name: 'Sky Blue', hex: '#8CE4FF' },
  { name: 'Sunshine', hex: '#FEEE91' },
  { name: 'Tangerine', hex: '#FFA239' },
  { name: 'Coral', hex: '#FF5656' },
];

const posterTypography = [
  { font: 'Playfair Display', weight: 'Bold 700', usage: 'Event Title' },
  { font: 'Poppins', weight: 'Semibold 600', usage: 'Subheadings' },
  { font: 'Poppins', weight: 'Regular 400', usage: 'Details' },
];

export default function EventPoster() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section id="events" className="py-32 bg-slate-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="text-center mb-24"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block px-4 py-1.5 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium mb-6 tracking-wide"
          >
            Special Events
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            Promotional Event Poster
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="font-body text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            Our grand opening celebration event poster design.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Event Poster */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.02, rotateY: 5 }}
              className="relative bg-gradient-to-br from-orange-400 via-red-400 to-sky-400 rounded-[2rem] shadow-2xl shadow-orange-200 overflow-hidden max-w-lg mx-auto"
              style={{ perspective: '1000px' }}
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-200/30 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-sky-300/40 rounded-full blur-2xl" />

              {/* Poster Content */}
              <div className="relative z-10 p-12 text-center flex flex-col items-center h-full">
                {/* Top badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1, rotate: [0, -5, 5, 0] } : {}}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/90 backdrop-blur-sm rounded-full mb-8 shadow-lg"
                >
                  <Sparkles className="w-4 h-4 text-orange-500" />
                  <span className="font-semibold text-slate-900 text-sm tracking-wide uppercase">Grand Opening</span>
                </motion.div>

                {/* Logo */}
                <div className="w-24 h-24 mx-auto mb-6 drop-shadow-lg">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="60" r="20" fill="white" />
                    <circle cx="30" cy="40" r="10" fill="#FEEE91" />
                    <circle cx="50" cy="30" r="10" fill="#8CE4FF" />
                    <circle cx="70" cy="40" r="10" fill="white" />
                    <path
                      d="M50 55 C45 50, 40 52, 40 57 C40 62, 50 68, 50 68 C50 68, 60 62, 60 57 C60 52, 55 50, 50 55"
                      fill="#FF5656"
                    />
                  </svg>
                </div>

                {/* Event Title */}
                <h3 className="font-display text-5xl font-bold text-white mb-4 drop-shadow-md leading-tight">
                  Pawsome
                  <br />
                  <span className="text-yellow-200">Party!</span>
                </h3>

                {/* Tagline */}
                <p className="font-body text-white/90 text-lg mb-10 font-medium">
                  Join us for a day of fun, treats & special offers!
                </p>

                {/* Event Details */}
                <div className="space-y-4 mb-10 w-full bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <div className="flex items-center justify-center gap-3 text-white">
                    <Calendar className="w-5 h-5" />
                    <span className="font-semibold tracking-wide">March 15, 2024</span>
                  </div>
                  <div className="flex items-center justify-center gap-3 text-white">
                    <Clock className="w-5 h-5" />
                    <span className="font-semibold tracking-wide">10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex items-center justify-center gap-3 text-white">
                    <MapPin className="w-5 h-5" />
                    <span className="font-semibold tracking-wide">123 Pet Street, Pawville</span>
                  </div>
                </div>

                {/* CTA */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-white text-red-500 font-bold rounded-full shadow-xl hover:shadow-2xl transition-shadow uppercase tracking-wider text-sm mt-auto"
                >
                  Reserve Your Spot!
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          {/* Poster Specifications */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
            className="space-y-8"
          >
            {/* Color Palette */}
            <motion.div variants={fadeInUp} className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <Palette className="w-5 h-5 text-orange-500" />
                <h3 className="font-display text-xl font-bold text-slate-900">Color Scheme</h3>
              </div>
              <div className="flex gap-4 justify-between">
                {posterColors.map((color) => (
                  <div key={color.name} className="flex-1 text-center group">
                    <div
                      className="w-full aspect-square rounded-2xl shadow-sm mb-3 group-hover:scale-105 transition-transform duration-300 border border-slate-100"
                      style={{ backgroundColor: color.hex }}
                    />
                    <p className="font-semibold text-slate-900 text-xs">{color.name}</p>
                    <p className="text-[10px] text-slate-400 font-mono mt-1 opacity-0 group-hover:opacity-100 transition-opacity">{color.hex}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Typography */}
            <motion.div variants={fadeInUp} className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <Type className="w-5 h-5 text-sky-500" />
                <h3 className="font-display text-xl font-bold text-slate-900">Typography</h3>
              </div>
              <div className="space-y-4">
                {posterTypography.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <div>
                      <p className={`${index === 0 ? 'font-display font-bold text-lg' : 'font-body'} text-slate-900`}>
                        {item.font}
                      </p>
                      <p className="text-xs text-slate-500 mt-1">{item.usage}</p>
                    </div>
                    <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-600">
                      {item.weight}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Design Notes */}
            <motion.div variants={fadeInUp} className="bg-gradient-to-br from-sky-50 to-orange-50 rounded-[2rem] p-8 border border-white shadow-sm">
              <h3 className="font-display text-xl font-bold text-slate-900 mb-6">Design Highlights</h3>
              <ul className="space-y-4 font-body text-slate-700 text-sm">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 shrink-0" />
                  <span>Gradient background creates visual energy and excitement</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-sky-400 rounded-full mt-2 shrink-0" />
                  <span>Centered layout ensures easy readability</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 shrink-0" />
                  <span>Paw print motifs reinforce brand identity</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-400 rounded-full mt-2 shrink-0" />
                  <span>Clear hierarchy guides viewer attention</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
