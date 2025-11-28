import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Eye, Users, Clock, Heart, Award, Scissors, ShoppingBag } from 'lucide-react';

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
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const owners = [
  {
    name: 'Sarah Mitchell',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face',
    description: 'Veterinary specialist with 15 years of experience in pet care.',
  },
  {
    name: 'Michael Chen',
    role: 'Co-Founder & Head Groomer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    description: 'Award-winning pet groomer and animal behavior expert.',
  },
  {
    name: 'Emma Rodriguez',
    role: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
    description: 'Brand strategist passionate about pet wellness and design.',
  },
];

const services = [
  {
    icon: Scissors,
    title: 'Premium Grooming',
    description: 'Full-service grooming including bathing, haircuts, nail trimming, and ear cleaning.',
    color: 'bg-sky-100 text-sky-600',
  },
  {
    icon: Heart,
    title: 'Spa Treatments',
    description: 'Relaxing spa packages with aromatherapy, massages, and skin treatments.',
    color: 'bg-yellow-100 text-yellow-600',
  },
  {
    icon: Award,
    title: 'Show Styling',
    description: 'Professional breed-specific styling for competitions and special occasions.',
    color: 'bg-orange-100 text-orange-600',
  },
  {
    icon: ShoppingBag,
    title: 'Pet Boutique',
    description: 'Curated selection of premium pet food, accessories, and wellness products.',
    color: 'bg-red-100 text-red-600',
  },
];

const timeline = [
  { year: '2016', event: 'FureverCare founded with a single grooming station' },
  { year: '2018', event: 'Expanded to full-service pet salon with 5 groomers' },
  { year: '2020', event: 'Launched pet boutique and online store' },
  { year: '2022', event: 'Opened second location and spa services' },
  { year: '2024', event: 'Celebrating 5000+ happy pets served' },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="about" className="py-32 bg-white" ref={ref}>
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
            className="inline-block px-4 py-1.5 bg-sky-50 text-sky-600 rounded-full text-sm font-medium mb-6 tracking-wide"
          >
            About FureverCare
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            Our Story & Vision
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="font-body text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            Dedicated to providing exceptional care for your beloved companions since 2016.
          </motion.p>
        </motion.div>

        {/* Mission & Vision */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-8 mb-32"
        >
          <motion.div
            variants={fadeInUp}
            className="group bg-slate-50 rounded-[2rem] p-10 transition-all hover:bg-orange-50/50"
          >
            <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <Target className="w-7 h-7 text-orange-500" />
            </div>
            <h3 className="font-display text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
            <p className="font-body text-slate-600 leading-relaxed">
              To provide exceptional, compassionate care for every pet that walks through our doors.
              We believe every animal deserves to feel loved, pampered, and beautiful. Our mission
              is to create a stress-free, nurturing environment where pets can thrive.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="group bg-slate-50 rounded-[2rem] p-10 transition-all hover:bg-sky-50/50"
          >
            <div className="w-14 h-14 bg-sky-100 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <Eye className="w-7 h-7 text-sky-500" />
            </div>
            <h3 className="font-display text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
            <p className="font-body text-slate-600 leading-relaxed">
              To become the most trusted name in pet care, setting the gold standard for grooming
              excellence and pet wellness. We envision a world where every pet owner has access
              to premium care services that enhance the bond between pets and their families.
            </p>
          </motion.div>
        </motion.div>

        {/* The Owners */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="mb-32"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h3 className="font-display text-3xl font-bold text-slate-900">The Founders</h3>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {owners.map((owner, index) => (
              <motion.div
                key={owner.name}
                variants={fadeInUp}
                className="group"
              >
                <div className="bg-white rounded-3xl p-4 border border-slate-100 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-100/20 transition-all duration-500">
                  <div className="relative mb-6 overflow-hidden rounded-2xl aspect-[4/5]">
                    <img
                      src={owner.image}
                      alt={owner.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  <div className="px-2 pb-2 text-center">
                    <h4 className="font-display text-xl font-bold text-slate-900 mb-1">{owner.name}</h4>
                    <p className="text-orange-500 font-medium text-sm mb-3 uppercase tracking-wide">{owner.role}</p>
                    <p className="font-body text-slate-500 text-sm leading-relaxed">{owner.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* History Timeline */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="mb-32 max-w-4xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h3 className="font-display text-3xl font-bold text-slate-900">History</h3>
          </motion.div>

          <div className="relative border-l-2 border-slate-100 ml-4 md:ml-0 md:border-l-0">
            {/* Timeline line for desktop centered */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 hidden md:block" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  variants={fadeInUp}
                  className={`flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0 ${
                    index % 2 === 0 ? '' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`pl-12 md:pl-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                    <span className="font-display text-4xl font-bold text-orange-400/80 block mb-2">{item.year}</span>
                    <p className="font-body text-slate-600 font-medium">{item.event}</p>
                  </div>
                  
                  {/* Center Dot */}
                  <div className="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 w-3 h-3 bg-orange-500 rounded-full ring-4 ring-white md:ring-slate-50" />
                  
                  {/* Spacer for the other side */}
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Services */}
        <motion.div
          id="services"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-orange-50 text-orange-600 rounded-full text-sm font-medium mb-6 tracking-wide">
              What We Offer
            </span>
            <h3 className="font-display text-3xl font-bold text-slate-900">Our Services</h3>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                className="bg-slate-50 rounded-[2rem] p-8 transition-all hover:bg-white hover:shadow-xl hover:shadow-slate-200/50"
              >
                <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <service.icon className="w-7 h-7" />
                </div>
                <h4 className="font-display text-lg font-bold text-slate-900 mb-3">{service.title}</h4>
                <p className="font-body text-slate-500 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
