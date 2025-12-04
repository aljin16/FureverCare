import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Calendar, MapPin, Clock, Sparkles } from 'lucide-react';
import promotionalPostImg from '../../assets/promotionalpost.png';

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
  const isInView = useInView(ref, { once: true, amount: 0.1, margin: "-100px" });

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
              whileHover={{ y: -6, scale: 1.01 }}
            >
              <img 
                src={promotionalPostImg} 
                alt="Grand Opening Event - Pawsome Party!" 
                className="absolute inset-0 w-full h-full object-cover"
              />
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
