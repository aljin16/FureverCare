import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Instagram, Heart, MessageCircle, Send, Bookmark } from 'lucide-react';
import brandPostImg from '../../assets/brandpost.png';

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

export default function BrandPost() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="brand-post" className="section-padding bg-[#fefdfb]" ref={ref}>
      <div className="section-container">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-6"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={stagger}
        >
          <motion.span 
            className="section-badge-accent mb-6"
            variants={fadeInUp}
          >
            Social Media
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-[#1e3a5f]"
            variants={fadeInUp}
          >
            First Brand Post
          </motion.h2>
          <motion.p 
            className="text-slate-500 max-w-xl mx-auto text-lg"
            variants={fadeInUp}
          >
            Our debut social media presence that introduced FureverCare to the world.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 items-start">
          {/* Instagram Post Mockup */}
          <div>
            <motion.div 
              className="card-elevated overflow-hidden max-w-sm mx-auto"
              whileHover={{ y: -6 }}
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
              <div className="relative aspect-square">
                <img 
                  src={brandPostImg} 
                  alt="We're Now Open! Premium Care for Your Furry Friends" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Post Actions */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-5">
                    <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.95 }}>
                      <Heart className="w-6 h-6 fill-current cursor-pointer text-[#ff914d]" />
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.95 }}>
                      <MessageCircle className="w-6 h-6 text-slate-600 cursor-pointer" />
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.95 }}>
                      <Send className="w-6 h-6 text-slate-600 cursor-pointer" />
                    </motion.div>
                  </div>
                  <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.95 }}>
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
          </div>

          {/* Post Details */}
          <div className="space-y-4">
            {/* Caption Card */}
            <div className="card p-8">
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
            </div>

            {/* Stats Card */}
            <div className="card p-8">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
