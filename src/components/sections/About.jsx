import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Target, Eye, Scissors, Heart, Award, ShoppingBag } from 'lucide-react';
import Stack from '../reactbits/Stack';
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

const stackImages = [
  { id: 1, img: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format" },
  { id: 2, img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format" },
  { id: 3, img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format" },
  { id: 4, img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format" }
];

const teamMembers = [
  {
    name: "Renzel Hannah Valdez",
    role: "Lead Groomer",
    bio: "10+ years of experience with show dogs and special needs pets",
    specialty: "Show Styling",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format"
  },
  {
    name: "Aljean Sinohin",
    role: "Pet Spa Director",
    bio: "Expert in aromatherapy and therapeutic massage for pets",
    specialty: "Spa Treatments",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format"
  },
  {
    name: "Trixie Rayo",
    role: "Senior Groomer",
    bio: "Specialized in cat grooming and anxious pet handling",
    specialty: "Cat Specialist",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format"
  },
  {
    name: "Mark Lorenz Marigmen",
    role: "Boutique Manager",
    bio: "Curator of premium pet products and nutrition expert",
    specialty: "Pet Nutrition",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format"
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
            className="text-center mb-6"
            variants={fadeInUp}
          >
            <span className="section-badge-accent mb-6">
              Services
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-[#1e3a5f]">What We Offer</h3>
          </motion.div>

          <motion.div 
            className="grid lg:grid-cols-2 gap-12 mb-8 w-full"
            variants={stagger}
          >
            {/* Stack Gallery */}
            <motion.div 
              className="flex flex-col items-center justify-start"
              variants={fadeInUp}
            >
              <div style={{ width: '100%', maxWidth: '600px', height: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Stack
                  randomRotation={true}
                  sensitivity={180}
                  sendToBackOnClick={false}
                  cardDimensions={{ width: 600, height: 600 }}
                  cardsData={stackImages}
                />
              </div>
              <p className="text-sm text-slate-400 mt-6 italic">swipe it</p>
            </motion.div>

            {/* Folder Component */}
            <motion.div 
              className="flex flex-col items-center justify-start"
              variants={fadeInUp}
            >
              <div style={{ width: '100%', maxWidth: '600px', height: '600px', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingTop: '80px' }}>
                <Folder 
                  size={3.6} 
                  color="#206a9f" 
                  className="custom-folder"
                />
              </div>
              <p className="text-sm text-slate-500 text-center max-w-xs mt-2">
                Click the folder to explore our service offerings and pet care packages
              </p>
            </motion.div>
          </motion.div>

          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
            variants={stagger}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                whileHover={{ y: -8 }}
                className="group relative h-[400px] rounded-[2rem] overflow-hidden cursor-default bg-[#1e3a5f]"
                variants={fadeInUp}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <motion.img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/90 via-[#1e3a5f]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="relative h-full p-8 flex flex-col justify-end items-start text-left">
                  <div 
                    className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300"
                  >
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h4 className="text-2xl font-bold text-white mb-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    {service.title}
                  </h4>
                  
                  <p className="text-white/80 text-sm leading-relaxed line-clamp-2 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-75">
                    {service.description}
                  </p>

                  {/* Decor line */}
                  <div className={`h-1 rounded-full mt-6 w-0 group-hover:w-12 transition-all duration-500 delay-100 ${
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
