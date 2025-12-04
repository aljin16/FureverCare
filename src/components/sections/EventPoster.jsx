import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Calendar, MapPin, Clock, Sparkles } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
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
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="events" className="section-padding bg-[#fefdfb]" ref={ref}>
      <div className="section-container">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-6"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={stagger}
        >
          <motion.span 
            className="section-badge mb-6"
            variants={fadeInUp}
          >
            Events
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-[#1e3a5f]"
            variants={fadeInUp}
          >
            Grand Opening Event
          </motion.h2>
          <motion.p 
            className="text-slate-500 max-w-xl mx-auto text-lg"
            variants={fadeInUp}
          >
            Join us for a day of celebration, special offers, and fun activities for you and your pets.
          </motion.p>
        </motion.div>

        {/* Main Grid - 2 Columns */}
        <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          
          {/* Left Column - Event Poster */}
          <div className="row-span-2">
            <motion.div 
              className="relative rounded-[2rem] overflow-hidden h-full min-h-[520px]"
              style={{ 
                background: 'linear-gradient(165deg, #1e3a5f 0%, #206a9f 60%, #ff914d 100%)',
              }}
              whileHover={{ y: -6, scale: 1.01 }}
            >
              {/* Subtle glass overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/20" />
              
              {/* Floating orbs */}
              <div className="absolute top-12 right-12 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
              <div className="absolute bottom-20 left-8 w-24 h-24 bg-[#ff914d]/20 rounded-full blur-xl" />

              {/* Content */}
              <div className="relative z-10 p-10 h-full flex flex-col items-center justify-center text-center">
                {/* Badge */}
                <motion.div 
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/95 backdrop-blur-md rounded-full mb-8"
                  style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#ff914d]" />
                  <span className="font-semibold text-[11px] tracking-widest uppercase text-[#1e3a5f]">Grand Opening</span>
                </motion.div>

                {/* Minimal Paw Icon */}
                <div className="w-16 h-16 mb-6 opacity-90">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="58" r="18" fill="white" fillOpacity="0.95" />
                    <circle cx="32" cy="42" r="9" fill="white" fillOpacity="0.85" />
                    <circle cx="50" cy="32" r="9" fill="white" fillOpacity="0.85" />
                    <circle cx="68" cy="42" r="9" fill="white" fillOpacity="0.85" />
                    <path d="M50 54 C46 50, 42 51, 42 55 C42 59, 50 64, 50 64 C50 64, 58 59, 58 55 C58 51, 54 50, 50 54" fill="#ff914d" />
                  </svg>
                </div>

                {/* Title */}
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
                  Pawsome Party!
                </h3>
                <p className="text-white/70 text-sm mb-8 font-light">
                  A day of fun, treats & special offers
                </p>

                {/* Minimal Details */}
                <div className="space-y-3 mb-8 w-full max-w-[220px]">
                  {eventDetails.map((detail) => (
                    <div key={detail.label} className="flex items-center gap-3 text-white/80 text-sm">
                      <detail.icon className="w-4 h-4 opacity-70" strokeWidth={1.5} />
                      <span className="font-light">{detail.value}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button 
                  className="px-8 py-3 bg-white font-semibold rounded-full text-sm text-[#1e3a5f] tracking-wide"
                  style={{ boxShadow: '0 8px 30px rgba(0,0,0,0.15)' }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Reserve Your Spot
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Stacked Cards */}
          <div className="flex flex-col gap-6">
            
            {/* Event Details Card */}
            <div>
              <motion.div 
                className="bg-white rounded-[1.5rem] p-6 border border-slate-100/80"
                style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.04)' }}
                whileHover={{ y: -4 }}
              >
                <h3 className="text-lg font-semibold mb-5 text-[#1e3a5f]">Event Details</h3>
                <div className="space-y-3">
                  {eventDetails.map((detail) => (
                    <motion.div 
                      key={detail.label} 
                      className="flex items-center gap-4 p-3 bg-gradient-to-r from-slate-50 to-transparent rounded-xl"
                      whileHover={{ x: 4 }}
                    >
                      <div className="w-10 h-10 bg-[#fff5ed] rounded-xl flex items-center justify-center">
                        <detail.icon className="w-4 h-4 text-[#ff914d]" strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="text-[10px] text-slate-400 uppercase tracking-wider font-medium">{detail.label}</p>
                        <p className="font-medium text-sm text-[#1e3a5f]">{detail.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Highlights Card */}
            <div>
              <motion.div 
                className="bg-white rounded-[1.5rem] p-6 border border-slate-100/80"
                style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.04)' }}
                whileHover={{ y: -4 }}
              >
                <h3 className="text-lg font-semibold mb-5 text-[#1e3a5f]">Event Highlights</h3>
                <div className="grid grid-cols-2 gap-3">
                  {highlights.map((highlight, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-center gap-2.5 text-sm text-slate-600"
                      whileHover={{ x: 2 }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#ff914d] to-[#ffb380] shrink-0" />
                      <span className="font-light">{highlight}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* CTA Card */}
            <div>
              <motion.div 
                className="rounded-[1.5rem] p-6 text-white relative overflow-hidden"
                style={{ 
                  background: 'linear-gradient(135deg, #ff914d 0%, #ff7a2e 100%)',
                }}
                whileHover={{ y: -4, scale: 1.01 }}
              >
                {/* Subtle pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold mb-2">Don't Miss Out!</h3>
                  <p className="text-white/80 text-sm mb-5 font-light leading-relaxed">
                    Limited spots available. Reserve today for exclusive early-bird perks.
                  </p>
                  <motion.button 
                    className="px-6 py-2.5 bg-white font-medium rounded-full text-sm text-[#ff914d]"
                    style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Register Now
                  </motion.button>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
