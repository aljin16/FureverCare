import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Instagram, Heart, MessageCircle, Send, Bookmark } from 'lucide-react';

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

export default function BrandPost() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section id="brand-post" className="section-padding bg-[#fefdfb]" ref={ref}>
      <div className="section-container">
        
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={stagger}
          className="text-center mb-20"
        >
          <motion.span variants={fadeIn} className="section-badge-accent mb-6">
            Social Media
          </motion.span>
          <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-bold mb-6 text-[#1e3a5f]">
            First Brand Post
          </motion.h2>
          <motion.p variants={fadeIn} className="text-slate-500 max-w-xl mx-auto text-lg">
            Our debut social media presence that introduced FureverCare to the world.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Instagram Post Mockup */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeUp}
          >
            <motion.div 
              className="card-elevated overflow-hidden max-w-sm mx-auto"
              whileHover={{ y: -6 }}
              transition={smoothSpring}
            >
              {/* Post Header */}
              <div className="flex items-center gap-3 p-5 border-b border-slate-100/80">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br from-[#206a9f] to-[#1a5a8a]">
                  <span className="text-white font-bold text-xs">FC</span>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-sm text-[#1e3a5f]">furevercare_official</p>
                  <p className="text-xs text-slate-400">Pet Grooming & Salon</p>
                </div>
              </div>

              {/* Post Image */}
              <div className="relative aspect-square" style={{ background: 'linear-gradient(135deg, #1e3a5f 0%, #206a9f 40%, #ff914d 100%)' }}>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  <div className="w-24 h-24 mx-auto mb-6 bg-white rounded-full flex items-center justify-center shadow-elevated">
                    <svg viewBox="0 0 100 100" className="w-16 h-16">
                      <circle cx="50" cy="60" r="20" fill="#ff914d" />
                      <circle cx="30" cy="40" r="10" fill="#fefdfb" stroke="#206a9f" strokeWidth="2" />
                      <circle cx="50" cy="30" r="10" fill="#206a9f" />
                      <circle cx="70" cy="40" r="10" fill="#ff914d" />
                      <path d="M50 55 C45 50, 40 52, 40 57 C40 62, 50 68, 50 68 C50 68, 60 62, 60 57 C60 52, 55 50, 50 55" fill="#ff914d" />
                    </svg>
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-2 text-white drop-shadow-md">We're Now Open!</h3>
                  <p className="text-white/90 text-sm mb-6">Premium Care for Your Furry Friends</p>
                  <span className="px-6 py-2.5 bg-white text-[#ff914d] text-xs font-semibold rounded-full shadow-lg">Book Now</span>
                </div>
              </div>

              {/* Post Actions */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-5">
                    <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.95 }} transition={smoothSpring}>
                      <Heart className="w-6 h-6 fill-current cursor-pointer text-[#ff914d]" />
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.95 }} transition={smoothSpring}>
                      <MessageCircle className="w-6 h-6 text-slate-600 cursor-pointer" />
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.95 }} transition={smoothSpring}>
                      <Send className="w-6 h-6 text-slate-600 cursor-pointer" />
                    </motion.div>
                  </div>
                  <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.95 }} transition={smoothSpring}>
                    <Bookmark className="w-6 h-6 text-slate-600 cursor-pointer" />
                  </motion.div>
                </div>
                <p className="font-semibold text-sm mb-1.5 text-[#1e3a5f]">2,847 likes</p>
                <p className="text-sm text-slate-600 line-clamp-2">
                  <span className="font-semibold mr-1 text-[#1e3a5f]">furevercare_official</span>
                  Welcome to FureverCare! We're thrilled to announce our grand opening!
                </p>
                <p className="text-slate-400 text-xs mt-3">March 15, 2024</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Post Details */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={stagger}
            className="space-y-8"
          >
            {/* Caption Card */}
            <motion.div variants={fadeIn} className="card p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[#ff914d] to-[#f5803d]">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1e3a5f]">Post Caption</h3>
              </div>
              <div className="bg-slate-50/80 rounded-2xl p-6">
                <p className="text-slate-600 text-sm leading-relaxed">
                  Welcome to <span className="font-semibold text-[#1e3a5f]">FureverCare</span>! We're thrilled to announce our grand opening!
                </p>
                <p className="text-slate-600 text-sm leading-relaxed mt-4">
                  Your furry friends deserve the best care, and we're here to deliver just that. From premium grooming to spa treatments, we treat every pet like family.
                </p>
                <p className="text-slate-600 text-sm leading-relaxed mt-4">
                  <span className="font-semibold text-[#1e3a5f]">Grand Opening Special:</span> 20% off your first grooming session!
                </p>
                <p className="text-sm mt-5 text-[#206a9f] font-medium">
                  #FureverCare #PetGrooming #PetSpa #GrandOpening
                </p>
              </div>
            </motion.div>

            {/* Stats Card */}
            <motion.div variants={fadeIn} className="card p-8">
              <h3 className="text-xl font-bold mb-6 text-[#1e3a5f]">Post Performance</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-5 bg-slate-50/80 rounded-2xl">
                  <p className="text-3xl font-bold text-[#1e3a5f]">2.8K</p>
                  <p className="text-xs text-slate-500 mt-1.5 font-medium">Likes</p>
                </div>
                <div className="text-center p-5 bg-slate-50/80 rounded-2xl">
                  <p className="text-3xl font-bold text-[#1e3a5f]">156</p>
                  <p className="text-xs text-slate-500 mt-1.5 font-medium">Comments</p>
                </div>
                <div className="text-center p-5 bg-slate-50/80 rounded-2xl">
                  <p className="text-3xl font-bold text-[#1e3a5f]">89</p>
                  <p className="text-xs text-slate-500 mt-1.5 font-medium">Shares</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
