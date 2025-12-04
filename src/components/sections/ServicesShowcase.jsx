import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import Folder from '../reactbits/Folder';

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

export default function ServicesShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1, margin: "-100px" });

  return (
    <section id="services-showcase" className="section-padding bg-[#fefdfb]" ref={ref}>
      <div className="section-container">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={stagger}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.span 
            className="section-badge-accent mb-6"
            variants={fadeInUp}
          >
            Services
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-[#1e3a5f]"
            variants={fadeInUp}
          >
            What We Offer
          </motion.h2>
          <motion.p 
            className="text-slate-500 max-w-2xl mx-auto text-lg"
            variants={fadeInUp}
          >
            Explore our comprehensive range of pet care services designed to keep your furry friends happy and healthy.
          </motion.p>
        </motion.div>

        {/* Services Grid - Image Left, Folder Right */}
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={stagger}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Left Side - Image */}
          <motion.div 
            className="flex justify-center"
            variants={fadeInUp}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1516979187457-635ffe35ff15?q=80&w=600&auto=format&fit=crop"
                alt="Pet Services"
                className="w-full h-auto object-cover rounded-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl" />
            </div>
          </motion.div>

          {/* Right Side - Folder Component */}
          <motion.div 
            className="flex flex-col items-center justify-center gap-8"
            variants={fadeInUp}
          >
            <div className="flex justify-center" style={{ height: '300px', position: 'relative' }}>
              <Folder 
                size={2.5} 
                color="#ff914d" 
                className="custom-folder"
              />
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-[#1e3a5f]">
                Explore Our Services
              </h3>
              <p className="text-slate-600 mb-6">
                Click the folder to discover all the premium pet care services we offer. From grooming to spa treatments, we have everything your pet needs.
              </p>
              <motion.button
                className="px-8 py-3 bg-[#ff914d] text-white rounded-full font-semibold shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
