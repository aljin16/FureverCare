import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, MapPin, Clock, Sparkles } from 'lucide-react';

// Refined animation configs
const ease = [0.25, 0.1, 0.25, 1];
const smoothSpring = { type: 'spring', stiffness: 120, damping: 20 };

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease }
  },
};

const fadeIn = {
  hidden: { opacity: 0, y: 12 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease }
  },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const eventDetails = [
  { icon: Calendar, label: 'Date', value: 'March 15, 2024' },
  { icon: Clock, label: 'Time', value: '10:00 AM - 6:00 PM' },
  { icon: MapPin, label: 'Location', value: '123 Pet Street, Pawville' },
];

const highlights = [
  'Free pet health checkups',
  'Live grooming demonstrations',
  '20% off all services',
  'Pet photo booth',
  'Giveaways & prizes',
  'Meet & greet with experts',
];

export default function EventPoster() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section id="events" className="section-padding bg-[#fefdfb]" ref={ref}>
      <div className="section-container">
        
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={stagger}
          className="text-center mb-20"
        >
          <motion.span variants={fadeIn} className="section-badge mb-6">
            Events
          </motion.span>
          <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-bold mb-6 text-[#1e3a5f]">
            Grand Opening Event
          </motion.h2>
          <motion.p variants={fadeIn} className="text-slate-500 max-w-xl mx-auto text-lg">
            Join us for a day of celebration, special offers, and fun activities for you and your pets.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Event Poster */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeUp}
          >
            <motion.div 
              className="relative rounded-3xl overflow-hidden max-w-md mx-auto"
              style={{ 
                background: 'linear-gradient(135deg, #1e3a5f 0%, #206a9f 50%, #ff914d 100%)',
                boxShadow: '0 16px 48px rgba(30, 58, 95, 0.3), 0 32px 64px rgba(255, 145, 77, 0.15)'
              }}
              whileHover={{ y: -8 }}
              transition={smoothSpring}
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full blur-2xl" />

              {/* Poster Content */}
              <div className="relative z-10 p-12 text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/95 backdrop-blur-sm rounded-full mb-8 shadow-lg">
                  <Sparkles className="w-4 h-4 text-[#ff914d]" />
                  <span className="font-semibold text-xs tracking-wider uppercase text-[#1e3a5f]">Grand Opening</span>
                </div>

                {/* Logo */}
                <div className="w-24 h-24 mx-auto mb-6">
                  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-xl">
                    <circle cx="50" cy="60" r="20" fill="white" />
                    <circle cx="30" cy="40" r="10" fill="#fefdfb" />
                    <circle cx="50" cy="30" r="10" fill="#fefdfb" />
                    <circle cx="70" cy="40" r="10" fill="white" />
                    <path d="M50 55 C45 50, 40 52, 40 57 C40 62, 50 68, 50 68 C50 68, 60 62, 60 57 C60 52, 55 50, 50 55" fill="#ff914d" />
                  </svg>
                </div>

                {/* Event Title */}
                <h3 className="font-display text-4xl font-bold text-white mb-3 drop-shadow-lg">
                  Pawsome Party!
                </h3>
                <p className="text-white/80 text-sm mb-10">
                  Join us for a day of fun, treats & special offers!
                </p>

                {/* Event Details */}
                <div className="space-y-4 mb-10">
                  {eventDetails.map((detail) => (
                    <div key={detail.label} className="flex items-center justify-center gap-3 text-white/90 text-sm">
                      <detail.icon className="w-4 h-4" />
                      <span className="font-medium">{detail.value}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <motion.button 
                  className="px-8 py-3.5 bg-white font-bold rounded-full text-sm uppercase tracking-wide text-[#ff914d]" 
                  style={{ boxShadow: '0 8px 24px rgba(255, 255, 255, 0.25)' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  transition={smoothSpring}
                >
                  Reserve Your Spot
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          {/* Event Details */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={stagger}
            className="space-y-8"
          >
            {/* Event Info Card */}
            <motion.div 
              variants={fadeUp} 
              className="card p-8"
              whileHover={{ y: -4 }}
              transition={smoothSpring}
            >
              <h3 className="text-xl font-bold mb-6 text-[#1e3a5f]">Event Details</h3>
              <div className="space-y-4">
                {eventDetails.map((detail) => (
                  <motion.div 
                    key={detail.label} 
                    className="flex items-center gap-4 p-4 bg-slate-50/80 rounded-2xl"
                    whileHover={{ x: 4 }}
                    transition={smoothSpring}
                  >
                    <div className="w-12 h-12 icon-container-accent rounded-2xl">
                      <detail.icon className="w-5 h-5 text-[#ff914d]" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 uppercase tracking-wider font-medium">{detail.label}</p>
                      <p className="font-semibold text-[#1e3a5f]">{detail.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Highlights Card */}
            <motion.div 
              variants={fadeUp} 
              className="card p-8"
              whileHover={{ y: -4 }}
              transition={smoothSpring}
            >
              <h3 className="text-xl font-bold mb-6 text-[#1e3a5f]">Event Highlights</h3>
              <div className="grid grid-cols-2 gap-4">
                {highlights.map((highlight, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center gap-3 text-sm text-slate-600"
                    whileHover={{ x: 3 }}
                    transition={smoothSpring}
                  >
                    <span className="w-2 h-2 rounded-full bg-[#ff914d] shrink-0" />
                    {highlight}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Card */}
            <motion.div 
              variants={fadeUp} 
              className="rounded-3xl p-8 text-white"
              style={{ 
                background: 'linear-gradient(135deg, #ff914d 0%, #f5803d 100%)',
                boxShadow: '0 8px 32px rgba(255, 145, 77, 0.3)'
              }}
              whileHover={{ y: -4 }}
              transition={smoothSpring}
            >
              <h3 className="text-xl font-bold mb-3">Don't Miss Out!</h3>
              <p className="text-white/80 text-sm mb-6 leading-relaxed">
                Limited spots available. Reserve your place today and get exclusive early-bird perks.
              </p>
              <motion.button 
                className="px-7 py-3 bg-white font-semibold rounded-full text-sm text-[#1e3a5f]" 
                style={{ boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={smoothSpring}
              >
                Register Now
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
