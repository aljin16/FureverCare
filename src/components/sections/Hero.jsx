import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import fureverBg from '../../assets/fureverbg.svg';
import { FireworksBackground } from '../ui/FireworksBackground';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#8CE4FF]" 
      style={{
        backgroundImage: `url(${fureverBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Content */}
      <FireworksBackground
        color={['#FFFFFF', '#FEEE91', '#FFA239', '#FF5656']}
        population={1}
        className="absolute inset-0 z-0"
      />
      <div className="relative z-10 h-full flex items-center w-full">
        <div
          className="max-w-7xl mx-auto px-6 lg:px-8 w-full"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center h-full pb-20">
            {/* Text Content - Left Side */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left pt-20 lg:pt-0 relative z-20"
            >
              
              {/* Main Headline */}
              <h1
                className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-[1.1]"
              >
                Where Every Pet
                <br />
                <span className="text-white drop-shadow-md">
                  Feels Like Family
                </span>
              </h1>

              {/* Description */}
              <p
                className="font-body text-lg md:text-xl text-slate-800 mb-10 leading-relaxed max-w-lg font-medium"
              >
                Experience the finest in pet grooming, salon services, and premium products.
                Your furry friends deserve nothing but the best care, comfort, and style.
              </p>

              {/* Call-to-Action Buttons */}
              <div
                className="flex flex-wrap items-start gap-4"
              >
                <motion.a
                  href="#services"
                  className="px-8 py-4 bg-slate-900 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Heart size={20} className="text-red-400 fill-red-400" />
                  Explore Services
                </motion.a>
                <motion.a
                  href="#about"
                  className="px-8 py-4 bg-white/90 backdrop-blur-sm text-slate-900 rounded-full font-semibold text-lg shadow-md hover:bg-white transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.a>
              </div>
            </motion.div>

            {/* Right Side - Spacer */}
            <div className="hidden lg:block" />
          </div>
        </div>
      </div>

    </section>
  );
}
