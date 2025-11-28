import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Instagram, Heart, MessageCircle, Send, Bookmark, Palette, Type } from 'lucide-react';

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

const brandPostColors = [
  { name: 'Primary', hex: '#FFA239', usage: 'Background accent' },
  { name: 'Secondary', hex: '#8CE4FF', usage: 'Highlight elements' },
  { name: 'Accent', hex: '#FEEE91', usage: 'Text highlights' },
  { name: 'CTA', hex: '#FF5656', usage: 'Call to action' },
];

export default function BrandPost() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section id="brand-post" className="py-32 bg-white" ref={ref}>
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
            className="inline-block px-4 py-1.5 bg-red-50 text-red-600 rounded-full text-sm font-medium mb-6 tracking-wide"
          >
            Social Media Launch
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            First Ever Brand Post
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="font-body text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            Our debut social media presence that introduced FureverCare to the world.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Instagram Post Mockup */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-[2rem] shadow-xl border border-slate-100 overflow-hidden max-w-md mx-auto"
            >
              {/* Post Header */}
              <div className="flex items-center gap-3 p-4 border-b border-slate-100">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-red-400 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">FC</span>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-slate-900 text-sm">furevercare_official</p>
                  <p className="text-xs text-slate-500">Pet Grooming & Salon</p>
                </div>
                <button className="text-slate-400">•••</button>
              </div>

              {/* Post Image */}
              <div className="relative aspect-square bg-gradient-to-br from-sky-200 via-orange-100 to-orange-200">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
                  {/* Main content */}
                  <div className="relative z-10">
                    <div className="w-24 h-24 mx-auto mb-6 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <svg viewBox="0 0 100 100" className="w-16 h-16">
                        <circle cx="50" cy="60" r="20" fill="#FFA239" />
                        <circle cx="30" cy="40" r="10" fill="#FEEE91" />
                        <circle cx="50" cy="30" r="10" fill="#8CE4FF" />
                        <circle cx="70" cy="40" r="10" fill="#FFA239" />
                        <path
                          d="M50 55 C45 50, 40 52, 40 57 C40 62, 50 68, 50 68 C50 68, 60 62, 60 57 C60 52, 55 50, 50 55"
                          fill="#FF5656"
                        />
                      </svg>
                    </div>
                    <h3 className="font-display text-3xl font-bold text-slate-900 mb-3">
                      We're Now Open!
                    </h3>
                    <p className="font-body text-slate-700 text-lg mb-6 font-medium">Premium Care for Your Furry Friends</p>
                    <div className="inline-block px-6 py-2 bg-slate-900 rounded-full shadow-lg">
                      <span className="font-semibold text-white text-sm">Book Now</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Post Actions */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-5">
                    <Heart className="w-6 h-6 text-red-500 fill-red-500" />
                    <MessageCircle className="w-6 h-6 text-slate-800" />
                    <Send className="w-6 h-6 text-slate-800" />
                  </div>
                  <Bookmark className="w-6 h-6 text-slate-800" />
                </div>
                <p className="font-semibold text-slate-900 text-sm mb-2">2,847 likes</p>
                <div className="text-sm text-slate-800">
                  <span className="font-semibold mr-2">furevercare_official</span>
                  🐾 Welcome to FureverCare! We're thrilled to announce our grand opening! 
                </div>
                <p className="text-slate-400 text-xs mt-3 uppercase tracking-wide">March 15, 2024</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Post Details */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
            className="space-y-8"
          >
            {/* Caption */}
            <motion.div variants={fadeInUp} className="bg-slate-50 rounded-[2rem] p-8 border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <Instagram className="w-5 h-5 text-orange-500" />
                <h3 className="font-display text-xl font-bold text-slate-900">Post Caption</h3>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-slate-100">
                <p className="font-body text-slate-600 leading-relaxed text-sm">
                  🐾 Welcome to <span className="font-semibold text-slate-900">FureverCare</span>! We're thrilled to announce our grand opening! 
                  <br /><br />
                  Your furry friends deserve the best care, and we're here to deliver just that. From premium grooming to spa treatments, we treat every pet like family. 💕
                  <br /><br />
                  ✨ <span className="font-semibold text-slate-900">Grand Opening Special:</span> 20% off your first grooming session!
                  <br /><br />
                  📍 Visit us today and let your pets experience the FureverCare difference!
                  <br /><br />
                  <span className="text-sky-500">#FureverCare #PetGrooming #PetSpa #GrandOpening #PetLovers</span>
                </p>
              </div>
            </motion.div>

            {/* Color Scheme */}
            <motion.div variants={fadeInUp} className="bg-slate-50 rounded-[2rem] p-8 border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <Palette className="w-5 h-5 text-orange-500" />
                <h3 className="font-display text-xl font-bold text-slate-900">Color Scheme</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {brandPostColors.map((color) => (
                  <div key={color.name} className="flex items-center gap-3 bg-white p-3 rounded-xl border border-slate-100">
                    <div
                      className="w-10 h-10 rounded-lg shadow-sm"
                      style={{ backgroundColor: color.hex }}
                    />
                    <div>
                      <p className="font-semibold text-slate-900 text-sm">{color.name}</p>
                      <p className="text-xs text-slate-400 font-mono">{color.hex}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
