import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Eye, Scissors, Heart, Award, ShoppingBag } from 'lucide-react';
import Stack from '../reactbits/Stack';

// Refined animation configs
const ease = [0.25, 0.1, 0.25, 1];
const smoothSpring = { type: 'spring', stiffness: 120, damping: 20 };

const stackImages = [
  { id: 1, img: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format" },
  { id: 2, img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format" },
  { id: 3, img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format" },
  { id: 4, img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format" }
];

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

const scaleUp = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease }
  },
};

const services = [
  { icon: Scissors, title: 'Premium Grooming', description: 'Full-service grooming with bathing, haircuts, and nail care.' },
  { icon: Heart, title: 'Spa Treatments', description: 'Relaxing spa packages with aromatherapy and massages.' },
  { icon: Award, title: 'Show Styling', description: 'Professional breed-specific styling for competitions.' },
  { icon: ShoppingBag, title: 'Pet Boutique', description: 'Curated premium pet food, accessories, and wellness products.' },
];

const timeline = [
  { year: '2016', event: 'Founded with a single grooming station' },
  { year: '2018', event: 'Expanded to full-service salon' },
  { year: '2020', event: 'Launched pet boutique' },
  { year: '2022', event: 'Opened second location' },
  { year: '2024', event: '5000+ happy pets served' },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="about" className="section-padding bg-[#fefdfb]" ref={ref}>
      <div className="section-container">
        
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={stagger}
          className="text-center mb-20"
        >
          <motion.span variants={fadeIn} className="section-badge mb-6">
            About Us
          </motion.span>
          <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-bold mb-6 text-[#1e3a5f]">
            Our Story & Vision
          </motion.h2>
          <motion.p variants={fadeIn} className="text-slate-500 max-w-2xl mx-auto text-lg">
            Dedicated to providing exceptional care for your beloved companions since 2016.
          </motion.p>
        </motion.div>

        {/* Brand Story */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={stagger}
          className="mb-20"
        >
          <motion.div variants={fadeIn} className="max-w-4xl mx-auto">
            <motion.h3 variants={fadeIn} className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#1e3a5f]">
              Brand Story
            </motion.h3>
            <motion.div 
              variants={fadeUp} 
              className="card-elevated p-10 text-center"
              whileHover={{ y: -6 }}
              transition={smoothSpring}
            >
              <p className="text-slate-500 leading-relaxed text-lg">
                FurEver Care was created after recognizing how many pet owners struggle to find 
                affordable, reliable, and consistent grooming services in their local communities. 
                Our team may not all be pet owners, but we saw the opportunity to build a brand 
                that addresses this need by offering both grooming and pet essentials in one welcoming space. 
                FurEver Care is a haven where pets are treated with comfort and care.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Mission & Vision Cards */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={stagger}
          className="grid md:grid-cols-2 gap-8 mb-28 max-w-5xl mx-auto"
        >
          {/* Mission Card */}
          <motion.div 
            variants={fadeUp} 
            whileHover={{ y: -6 }}
            transition={smoothSpring}
            className="card-elevated p-10"
          >
            <div 
              className="w-14 h-14 icon-container-accent rounded-2xl mb-8"
            >
              <Target className="w-7 h-7 text-[#ff914d]" />
            </div>
            
            <h3 className="text-2xl font-bold mb-4 text-[#1e3a5f]">Our Mission</h3>
            <p className="text-slate-500 leading-relaxed">
              To provide affordable, reliable, and professional pet grooming and essentials in a 
              friendly environment where pets feel safe and owners feel valued.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div 
            variants={fadeUp} 
            whileHover={{ y: -6 }}
            transition={smoothSpring}
            className="card-elevated p-10"
          >
            <div 
              className="w-14 h-14 icon-container rounded-2xl mb-8"
            >
              <Eye className="w-7 h-7 text-[#206a9f]" />
            </div>
            
            <h3 className="text-2xl font-bold mb-4 text-[#1e3a5f]">Our Vision</h3>
            <p className="text-slate-500 leading-relaxed">
              To become the most trusted neighborhood pet care in the Philippines, known for 
              convenience, quality, and compassion.
            </p>
          </motion.div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={stagger}
          className="mb-28"
        >
          <motion.h3 variants={fadeIn} className="text-2xl md:text-3xl font-semibold text-center mb-16 text-[#1e3a5f]">
            Our Journey
          </motion.h3>
          <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {timeline.slice(0, 3).map((item, index) => (
              <motion.div
                key={item.year}
                variants={scaleUp}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={smoothSpring}
                className="card-elevated p-8 text-center cursor-default group"
              >
                <div className="mb-4">
                  <span className="text-3xl md:text-4xl font-bold text-[#ff914d] block">{item.year}</span>
                </div>
                <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium">{item.event}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Services */}
        <motion.div
          id="services"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={stagger}
        >
          <motion.div variants={fadeIn} className="text-center mb-14">
            <span className="section-badge-accent mb-6">
              Services
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-[#1e3a5f]">What We Offer</h3>
          </motion.div>

          <motion.div variants={fadeIn} className="flex flex-col items-center mb-16">
            <Stack
              randomRotation={true}
              sensitivity={180}
              sendToBackOnClick={false}
              cardDimensions={{ width: 500, height: 500 }}
              cardsData={stackImages}
            />
            <p className="text-sm text-slate-400 mt-4 italic">swipe it</p>
          </motion.div>

          <motion.div variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={smoothSpring}
                className="card p-7 cursor-default group"
              >
                <div
                  className={`w-12 h-12 rounded-xl mb-5 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                    index % 2 === 0 ? 'icon-container' : 'icon-container-accent'
                  }`}
                >
                  <service.icon className="w-6 h-6" style={{ color: index % 2 === 0 ? '#206a9f' : '#ff914d' }} />
                </div>
                <h4 className="font-semibold text-lg mb-2 text-[#1e3a5f]">{service.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
