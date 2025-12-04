import { motion } from 'framer-motion';
import { Heart, ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import fureverBg from '../../assets/fureverbg.svg';
import Particles from '../reactbits/Particles';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
};

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: `url(${fureverBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div style={{ width: '100%', height: '600px', position: 'absolute', inset: 0, zIndex: 0 }}>
        <Particles
          particleColors={['#ff914d', '#ff914d']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={120}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>
      
      <div className="relative z-10 w-full">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-8 items-center min-h-screen py-16">
            {/* Text Content */}
            <motion.div 
              className="max-w-xl"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeInUp}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              {/* Badge */}
              <motion.div 
                className="mb-6"
                variants={fadeInUp}
              >
                <motion.span 
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium shadow-sm"
                  style={{ color: '#ff914d' }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Heart size={14} className="fill-current" />
                  Premium Pet Care
                </motion.span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.05] tracking-tight"
                style={{ color: '#206a9f' }}
                variants={fadeInUp}
              >
                Where Every Pet
                <br />
                Feels Like Family
              </motion.h1>

              {/* Description */}
              <motion.p 
                className="text-lg text-slate-600 mb-8 leading-relaxed max-w-md"
                variants={fadeInUp}
              >
                Experience premium grooming, spa treatments, and boutique products. 
                Your furry friends deserve exceptional care.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-wrap gap-4"
                variants={fadeInUp}
              >
                <motion.a
                  href="#services"
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-white rounded-full font-semibold text-sm shadow-lg"
                  style={{ backgroundColor: '#ff914d' }}
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(255, 145, 77, 0.3)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  Explore Services
                  <ArrowRight size={16} />
                </motion.a>
                <motion.a
                  href="#about"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/90 backdrop-blur-sm rounded-full font-semibold text-sm shadow-md"
                  style={{ color: '#206a9f' }}
                  whileHover={{ scale: 1.05, backgroundColor: '#ffffff' }}
                  whileTap={{ scale: 0.98 }}
                >
                  Learn More
                </motion.a>
              </motion.div>

              {/* Trust indicators */}
              <motion.div 
                className="mt-8 pt-6 border-t border-slate-200/50"
                variants={fadeInUp}
              >
                <div className="flex items-center gap-8 text-sm text-slate-600">
                  <motion.div 
                    className="flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span 
                      className="font-bold text-lg" 
                      style={{ color: '#206a9f' }}
                    >
                      5000+
                    </span>
                    <span>Happy Pets</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span 
                      className="font-bold text-lg" 
                      style={{ color: '#206a9f' }}
                    >
                      8+
                    </span>
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
