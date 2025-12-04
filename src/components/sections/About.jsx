import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Target, Eye, Scissors, Heart, Award, ShoppingBag } from 'lucide-react';
import Carousel from '../reactbits/Carousel';
import Folder from '../reactbits/Folder';
import review1 from '../../assets/review1.svg';
import review2 from '../../assets/review2.svg';
import review3 from '../../assets/review3.svg';
import review4 from '../../assets/review4.svg';
import renzelle from '../../assets/renzelle.jpg';
import aljean from '../../assets/aljean.jpg';
import trixie from '../../assets/trixie.jpg';
import mark from '../../assets/mark.jpg';

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

const carouselItems = [
  {
    title: 'Professional Grooming',
    description: 'Expert care for your beloved pets.',
    id: 1,
    img: review1
  },
  {
    title: 'Spa Treatments',
    description: 'Relaxing and rejuvenating spa services.',
    id: 2,
    img: review2
  },
  {
    title: 'Show Styling',
    description: 'Breed-specific styling for competitions.',
    id: 3,
    img: review3
  },
  {
    title: 'Pet Boutique',
    description: 'Premium products for your furry friends.',
    id: 4,
    img: review4
  }
];

const teamMembers = [
  {
    name: "Renzel Hannah Valdez",
    role: "Lead Groomer",
    bio: "10+ years of experience with show dogs and special needs pets",
    specialty: "Show Styling",
    image: renzelle
  },
  {
    name: "Aljean Sinohin",
    role: "Pet Spa Director",
    bio: "Expert in aromatherapy and therapeutic massage for pets",
    specialty: "Spa Treatments",
    image: aljean
  },
  {
    name: "Trixie Rayo",
    role: "Senior Groomer",
    bio: "Specialized in cat grooming and anxious pet handling",
    specialty: "Cat Specialist",
    image: trixie
  },
  {
    name: "Mark Lorenz Marigmen",
    role: "Boutique Manager",
    bio: "Curator of premium pet products and nutrition expert",
    specialty: "Pet Nutrition",
    image: mark
  }
];

const services = [
  { 
    icon: Scissors, 
    title: 'Premium Grooming', 
    description: 'Full-service grooming with bathing, haircuts, and nail care.',
    image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=800&auto=format"
  },
  { 
    icon: Heart, 
    title: 'Spa Treatments', 
    description: 'Relaxing spa packages with aromatherapy and massages.',
    image: "https://images.unsplash.com/photo-1604848698030-c434ba08ece1?q=80&w=800&auto=format"
  },
  { 
    icon: Award, 
    title: 'Show Styling', 
    description: 'Professional breed-specific styling for competitions.',
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?q=80&w=800&auto=format"
  },
  { 
    icon: ShoppingBag, 
    title: 'Pet Boutique', 
    description: 'Curated premium pet food, accessories, and wellness products.',
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=800&auto=format"
  },
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
          className="text-center mb-6"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={stagger}
        >
          <motion.span 
            className="section-badge mb-6"
            variants={fadeInUp}
          >
            About Us
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-[#1e3a5f]"
            variants={fadeInUp}
          >
            Our Story & Vision
          </motion.h2>
          <motion.p 
            className="text-slate-500 max-w-2xl mx-auto text-lg"
            variants={fadeInUp}
          >
            Dedicated to providing exceptional care for your beloved companions since 2016.
          </motion.p>
        </motion.div>

        
        {/* Mission & Vision Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 max-w-6xl mx-auto"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={stagger}
        >
          {/* Brand Story Card */}
          <motion.div 
            whileHover={{ y: -4 }}
            className="card-elevated p-6 text-center"
            variants={fadeInUp}
          >
            <div 
              className="w-12 h-12 icon-container-accent rounded-xl mx-auto mb-4"
            >
              <Heart className="w-6 h-6 text-[#ff914d]" />
            </div>
            
            <h3 className="text-xl font-bold mb-3 text-[#1e3a5f]">Brand Story</h3>
            <p className="text-slate-500 leading-relaxed text-sm">
              FurEver Care was created after recognizing how many pet owners struggle to find 
              affordable, reliable, and consistent grooming services in their local communities.
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div 
            whileHover={{ y: -4 }}
            className="card-elevated p-6 text-center"
            variants={fadeInUp}
          >
            <div 
              className="w-12 h-12 icon-container-accent rounded-xl mx-auto mb-4"
            >
              <Target className="w-6 h-6 text-[#ff914d]" />
            </div>
            
            <h3 className="text-xl font-bold mb-3 text-[#1e3a5f]">Our Mission</h3>
            <p className="text-slate-500 leading-relaxed text-sm">
              To provide affordable, reliable, and professional pet grooming and essentials in a 
              friendly environment where pets feel safe and owners feel valued.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div 
            whileHover={{ y: -4 }}
            className="card-elevated p-6 text-center"
            variants={fadeInUp}
          >
            <div 
              className="w-12 h-12 icon-container rounded-xl mx-auto mb-4"
            >
              <Eye className="w-6 h-6 text-[#206a9f]" />
            </div>
            
            <h3 className="text-xl font-bold mb-3 text-[#1e3a5f]">Our Vision</h3>
            <p className="text-slate-500 leading-relaxed text-sm">
              To become the most trusted neighborhood pet care in the Philippines, known for 
              convenience, quality, and compassion.
            </p>
          </motion.div>
        </motion.div>

        
        {/* Services */}
        <motion.div 
          id="services"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={stagger}
        >
          <motion.div 
            className="text-center mb-8"
            variants={fadeInUp}
          >
            <span className="section-badge-accent mb-3">
              Services
            </span>
            <h3 className="text-3xl md:text-4xl font-bold mb-3 text-[#1e3a5f]">What We Offer</h3>
            <p className="text-slate-500 max-w-3xl mx-auto text-base">
              Explore our comprehensive range of services designed to keep your pets happy, healthy, and looking their best.
            </p>
          </motion.div>

          <motion.div 
            className="grid lg:grid-cols-2 gap-6 mb-8 max-w-6xl mx-auto"
            variants={stagger}
          >
            {/* Carousel Gallery */}
            <motion.div 
              whileHover={{ y: -4 }}
              className="group relative bg-gradient-to-br from-white via-slate-50 to-white rounded-2xl overflow-hidden border border-slate-200/50 shadow-lg hover:shadow-2xl transition-all duration-500"
              variants={fadeInUp}
            >
              {/* Decorative gradient accent */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#206a9f]/5 to-[#ff914d]/5 rounded-full blur-3xl -z-10" />
              
              <div className="p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-1 h-6 bg-gradient-to-b from-[#206a9f] to-[#ff914d] rounded-full" />
                    <h4 className="text-xl font-bold text-[#1e3a5f]">Service Gallery</h4>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Explore our premium grooming, spa, styling, and boutique services. Each experience is crafted with care.
                  </p>
                </div>
                <div style={{ height: '480px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Carousel
                    items={carouselItems}
                    baseWidth={420}
                    autoplay={true}
                    autoplayDelay={3000}
                    pauseOnHover={true}
                    loop={true}
                    round={false}
                  />
                </div>
              </div>
            </motion.div>

            {/* Folder Component */}
            <motion.div 
              whileHover={{ y: -4 }}
              className="group relative bg-gradient-to-br from-white via-slate-50 to-white rounded-2xl overflow-hidden border border-slate-200/50 shadow-lg hover:shadow-2xl transition-all duration-500"
              variants={fadeInUp}
            >
              {/* Decorative gradient accent */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#ff914d]/5 to-[#206a9f]/5 rounded-full blur-3xl -z-10" />
              
              <div className="p-6">
                <div className="mb-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-1 h-6 bg-gradient-to-b from-[#ff914d] to-[#206a9f] rounded-full" />
                    <h4 className="text-xl font-bold text-[#1e3a5f]">Service Packages</h4>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Discover curated packages for every pet. Click to explore Basic, Premium, and Deluxe options.
                  </p>
                </div>
                <div style={{ width: '100%', height: '420px', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <Folder 
                    size={3.2} 
                    color="#206a9f" 
                    className="custom-folder"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto"
            variants={stagger}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                whileHover={{ y: -6 }}
                className="group relative h-[340px] rounded-2xl overflow-hidden cursor-default bg-white border border-slate-200/60 shadow-md hover:shadow-xl transition-all duration-500"
                variants={fadeInUp}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <motion.img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/50 to-slate-900/20 opacity-75 group-hover:opacity-85 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="relative h-full p-5 flex flex-col justify-end items-start text-left">
                  <div 
                    className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 transition-all duration-300 ${
                      index % 2 === 0 
                        ? 'bg-[#206a9f]/20 text-[#206a9f] group-hover:bg-[#206a9f]/30' 
                        : 'bg-[#ff914d]/20 text-[#ff914d] group-hover:bg-[#ff914d]/30'
                    }`}
                  >
                    <service.icon className="w-5 h-5" />
                  </div>
                  
                  <h4 className="text-lg font-bold text-white mb-2 transform group-hover:translate-y-0 transition-transform duration-300">
                    {service.title}
                  </h4>
                  
                  <p className="text-white/90 text-xs leading-relaxed line-clamp-2">
                    {service.description}
                  </p>

                  {/* Accent line */}
                  <div className={`h-0.5 rounded-full mt-3 w-8 transition-all duration-500 ${
                    index % 2 === 0 ? 'bg-[#206a9f]' : 'bg-[#ff914d]'
                  }`} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Team Members */}
        <motion.div 
          className="mt-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={stagger}
        >
          <motion.div 
            className="text-center mb-12"
            variants={fadeInUp}
          >
            <span className="section-badge mb-6">
              Our Team
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-[#1e3a5f]">Meet Our Pet Care Experts</h3>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={stagger}
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                whileHover={{ y: -8 }}
                className="group relative"
                variants={fadeInUp}
              >
                {/* Card Container */}
                <div className="relative bg-white rounded-[1.5rem] overflow-hidden border border-slate-100/60 shadow-sm hover:shadow-lg transition-all duration-300">
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <motion.img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-6 text-center">
                    <h4 className="text-lg font-bold text-[#1e3a5f] mb-1">{member.name}</h4>
                    <p className="text-sm text-[#ff914d] font-medium mb-3">{member.role}</p>
                    <p className="text-xs text-slate-500 leading-relaxed mb-4">{member.bio}</p>
                    
                    {/* Specialization Badge */}
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      index % 2 === 0 
                        ? 'bg-[#206a9f]/10 text-[#206a9f]' 
                        : 'bg-[#ff914d]/10 text-[#ff914d]'
                    }`}>
                      {member.specialty}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
