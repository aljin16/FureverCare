import { motion } from 'framer-motion';
import { Heart, ArrowRight } from 'lucide-react';
import fureverBg from '../../assets/fureverbg.svg';
import { FireworksBackground } from '../ui/FireworksBackground';

// Ultra-smooth easing
const smoothEase = [0.22, 1, 0.36, 1];
const fastSpring = { type: 'spring', stiffness: 400, damping: 30 };

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const slideUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: smoothEase }
  }
};

const fadeScale = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.4, ease: smoothEase }
  }
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: `url(${fureverBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <FireworksBackground
        color={['#ffffff', '#fffdf5', '#ff914d', '#206a9f']}
        population={1}
        className="absolute inset-0 z-0"
      />
      
      <div className="relative z-10 w-full">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-24">
            {/* Text Content */}
            <motion.div
              variants={container}
              initial="hidden"
              animate="visible"
              className="max-w-xl"
            >
              {/* Badge */}
              <motion.div variants={fadeScale} className="mb-6">
                <motion.span 
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium shadow-sm"
                  style={{ color: '#ff914d' }}
                  whileHover={{ scale: 1.05 }}
                  transition={fastSpring}
                >
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Heart size={14} className="fill-current" />
                  </motion.span>
                  Premium Pet Care
                </motion.span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                variants={slideUp}
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.05] tracking-tight"
                style={{ color: '#206a9f' }}
              >
                <motion.span 
                  className="inline-block"
                  whileHover={{ scale: 1.02 }}
                  transition={fastSpring}
                >
                  Where Every Pet
                </motion.span>
                <br />
                <motion.span 
                  className="inline-block"
                  whileHover={{ scale: 1.02 }}
                  transition={fastSpring}
                >
                  Feels Like Family
                </motion.span>
              </motion.h1>

              {/* Description */}
              <motion.p
                variants={slideUp}
                className="text-lg text-slate-600 mb-8 leading-relaxed max-w-md"
              >
                Experience premium grooming, spa treatments, and boutique products. 
                Your furry friends deserve exceptional care.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div variants={slideUp} className="flex flex-wrap gap-4">
                <motion.a
                  href="#services"
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-white rounded-full font-semibold text-sm shadow-lg"
                  style={{ backgroundColor: '#ff914d' }}
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(255, 145, 77, 0.3)' }}
                  whileTap={{ scale: 0.98 }}
                  transition={fastSpring}
                >
                  Explore Services
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowRight size={16} />
                  </motion.span>
                </motion.a>
                <motion.a
                  href="#about"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/90 backdrop-blur-sm rounded-full font-semibold text-sm shadow-md"
                  style={{ color: '#206a9f' }}
                  whileHover={{ scale: 1.05, backgroundColor: '#ffffff' }}
                  whileTap={{ scale: 0.98 }}
                  transition={fastSpring}
                >
                  Learn More
                </motion.a>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                variants={slideUp}
                className="mt-12 pt-8 border-t border-slate-200/50"
              >
                <div className="flex items-center gap-8 text-sm text-slate-600">
                  <motion.div 
                    className="flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    transition={fastSpring}
                  >
                    <motion.span 
                      className="font-bold text-lg" 
                      style={{ color: '#206a9f' }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 }}
                    >
                      5000+
                    </motion.span>
                    <span>Happy Pets</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    transition={fastSpring}
                  >
                    <motion.span 
                      className="font-bold text-lg" 
                      style={{ color: '#206a9f' }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.9 }}
                    >
                      8+
                    </motion.span>
                    <span>Years Experience</span>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Spacer */}
            <div className="hidden lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
