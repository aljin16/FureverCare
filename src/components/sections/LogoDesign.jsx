import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Palette, Type, Lightbulb, PenTool, Layers, CheckCircle } from 'lucide-react';

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

const logoProcess = [
  {
    step: 1,
    title: 'Research & Concept',
    description: 'Explored pet care industry trends, competitor analysis, and brand values.',
    icon: Lightbulb,
  },
  {
    step: 2,
    title: 'Sketching',
    description: 'Created multiple hand-drawn concepts combining paw prints with heart motifs.',
    icon: PenTool,
  },
  {
    step: 3,
    title: 'Digital Refinement',
    description: 'Vectorized the best concepts and refined proportions for scalability.',
    icon: Layers,
  },
  {
    step: 4,
    title: 'Color Application',
    description: 'Applied brand color palette to create warm, inviting visual identity.',
    icon: Palette,
  },
  {
    step: 5,
    title: 'Final Selection',
    description: 'Chose the design that best represents care, trust, and professionalism.',
    icon: CheckCircle,
  },
];

const colorPalette = [
  { name: 'Sky Blue', hex: '#8CE4FF', description: 'Trust & Calm', text: 'text-slate-800' },
  { name: 'Sunshine Yellow', hex: '#FEEE91', description: 'Joy & Energy', text: 'text-slate-800' },
  { name: 'Tangerine Orange', hex: '#FFA239', description: 'Warmth & Friendliness', text: 'text-white' },
  { name: 'Coral Red', hex: '#FF5656', description: 'Love & Passion', text: 'text-white' },
];

const typography = [
  {
    name: 'Playfair Display',
    usage: 'Headlines & Logo',
    sample: 'FureverCare',
    className: 'font-display text-4xl font-bold',
  },
  {
    name: 'Poppins',
    usage: 'Body Text & UI',
    sample: 'Premium Pet Grooming Services',
    className: 'font-body text-xl',
  },
];

export default function LogoDesign() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section id="logo" className="py-32 bg-slate-50" ref={ref}>
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
            className="inline-block px-4 py-1.5 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-6 tracking-wide"
          >
            Brand Identity
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            Logo Design
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="font-body text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            The visual identity that captures our commitment to exceptional pet care.
          </motion.p>
        </motion.div>

        {/* Logo Showcase */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="mb-32"
        >
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Main Logo */}
            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-[2.5rem] p-12 border border-slate-100 shadow-sm flex flex-col items-center justify-center min-h-[400px]"
            >
              <div className="text-center">
                <div className="relative inline-block mb-8">
                  {/* Logo Mark */}
                  <div className="w-40 h-40 mx-auto relative transform hover:scale-105 transition-transform duration-500">
                    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
                      <defs>
                        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#8CE4FF" />
                          <stop offset="50%" stopColor="#FFA239" />
                          <stop offset="100%" stopColor="#FF5656" />
                        </linearGradient>
                      </defs>
                      <circle cx="50" cy="60" r="20" fill="url(#logoGradient)" />
                      <circle cx="30" cy="40" r="10" fill="#FEEE91" />
                      <circle cx="50" cy="30" r="10" fill="#8CE4FF" />
                      <circle cx="70" cy="40" r="10" fill="#FFA239" />
                      <path
                        d="M50 55 C45 50, 40 52, 40 57 C40 62, 50 68, 50 68 C50 68, 60 62, 60 57 C60 52, 55 50, 50 55"
                        fill="#FF5656"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="font-display text-4xl font-bold text-slate-900 mb-2">FureverCare</h3>
                <p className="font-body text-slate-400 uppercase tracking-widest text-sm">Premium Pet Grooming</p>
              </div>
            </motion.div>

            {/* Logo Variations */}
            <motion.div variants={fadeInUp} className="flex flex-col gap-6">
              <div className="flex-1 bg-slate-900 rounded-[2.5rem] p-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-6">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
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
                  <span className="font-display text-2xl font-bold text-white">FureverCare</span>
                  <p className="text-xs text-slate-500 mt-2 uppercase tracking-widest">Dark Background</p>
                </div>
              </div>
              <div className="flex gap-6 h-40">
                <div className="flex-1 bg-[#8CE4FF] rounded-[2rem] flex items-center justify-center">
                  <span className="font-display text-3xl font-bold text-white">FC</span>
                </div>
                <div className="flex-1 bg-[#FFA239] rounded-[2rem] flex items-center justify-center">
                  <span className="font-display text-3xl font-bold text-white">FC</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Logo Process */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="mb-32"
        >
          <motion.h3
            variants={fadeInUp}
            className="font-display text-2xl font-bold text-slate-900 text-center mb-16"
          >
            Design Process
          </motion.h3>

          <div className="relative">
            {/* Process line */}
            <div className="absolute top-10 left-0 right-0 h-0.5 bg-slate-200 hidden lg:block" />

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {logoProcess.map((item, index) => (
                <motion.div
                  key={item.step}
                  variants={fadeInUp}
                  className="relative group"
                >
                  <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-lg hover:border-orange-100 transition-all duration-300 text-center relative z-10 h-full flex flex-col items-center">
                    <div className="w-20 h-20 bg-white border-4 border-slate-50 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-8 h-8 text-orange-400" />
                    </div>
                    <span className="inline-block px-3 py-1 bg-slate-100 rounded-full text-xs font-bold text-slate-600 mb-4">
                      Step {item.step}
                    </span>
                    <h4 className="font-display text-lg font-bold text-slate-900 mb-3 leading-tight">{item.title}</h4>
                    <p className="font-body text-sm text-slate-500 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Color Palette */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="mb-32"
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-3 justify-center mb-12">
            <Palette className="w-6 h-6 text-orange-500" />
            <h3 className="font-display text-2xl font-bold text-slate-900">Color Palette</h3>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {colorPalette.map((color, index) => (
              <motion.div
                key={color.name}
                variants={fadeInUp}
                className="group rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 bg-white"
              >
                <div
                  className="h-40 w-full flex items-center justify-center"
                  style={{ backgroundColor: color.hex }}
                >
                  <span className={`opacity-0 group-hover:opacity-100 transition-opacity font-mono font-medium ${color.text}`}>
                    {color.hex}
                  </span>
                </div>
                <div className="p-6 text-center border-x border-b border-slate-100 rounded-b-3xl">
                  <h4 className="font-display font-bold text-slate-900 mb-1">{color.name}</h4>
                  <p className="text-xs text-slate-400 uppercase tracking-wider">{color.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Typography */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-3 justify-center mb-12">
            <Type className="w-6 h-6 text-sky-500" />
            <h3 className="font-display text-2xl font-bold text-slate-900">Typography</h3>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {typography.map((font, index) => (
              <motion.div
                key={font.name}
                variants={fadeInUp}
                className="bg-white rounded-3xl p-10 border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h4 className="font-display text-xl font-bold text-slate-900">{font.name}</h4>
                    <p className="text-sm text-orange-500 font-medium mt-1">{font.usage}</p>
                  </div>
                  <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-medium text-slate-600">
                    Google Fonts
                  </span>
                </div>
                <div className="border-t border-slate-100 pt-8">
                  <p className={font.className + ' text-slate-800'}>{font.sample}</p>
                </div>
                <div className="mt-8 flex gap-6 text-sm text-slate-400 font-mono bg-slate-50 p-4 rounded-xl">
                  <span>Aa Bb Cc</span>
                  <span>123</span>
                  <span>!@#$</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
