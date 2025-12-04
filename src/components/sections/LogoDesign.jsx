import { motion } from 'framer-motion';
import { Palette, Type } from 'lucide-react';
import logoBrandImg from '../../assets/logobrand.png';
import logoBrandDraw from '../../assets/logobrand-draw.jpg';

const colorPalette = [
  { name: 'Azure Blue', hex: '#206a9f', description: 'Primary' },
  { name: 'Light Yellow', hex: '#fffdf5', description: 'Background' },
  { name: 'Orange', hex: '#ff914d', description: 'Accent' },
];

const typography = [
  { name: 'Playfair Display', usage: 'Headlines', sample: 'FureverCare', className: 'font-display text-2xl font-bold' },
  { name: 'Poppins', usage: 'Body Text', sample: 'Premium Pet Grooming', className: 'font-body text-lg' },
];

export default function LogoDesign() {
  return (
    <section id="logo" className="section-padding bg-[#fefdfb]">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="text-center mb-6">
          <span className="section-badge-accent mb-6">
            Brand Identity
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1e3a5f]">
            Logo Design
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-lg">
            The visual identity that captures our commitment to exceptional pet care.
          </p>
        </div>

        {/* Logo Showcase */}
        <div className="mb-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Main Logo - Light */}
            <motion.div
              whileHover={{ y: -6 }}
              className="card-elevated p-12 flex flex-col items-center justify-center min-h-[360px] cursor-default"
            >
              <motion.div 
                className="w-48 h-48 mb-8"
                whileHover={{ scale: 1.05 }}
              >
                <img 
                  src={logoBrandImg} 
                  alt="FureverCare Logo" 
                  className="w-full h-full object-contain drop-shadow-lg"
                />
              </motion.div>
              <h3 className="font-display text-3xl font-bold mb-2 text-[#1e3a5f]">FureverCare</h3>
              <p className="text-slate-400 text-xs uppercase tracking-[0.2em]">Premium Pet Grooming</p>
            </motion.div>

            {/* Main Logo - Dark */}
            <motion.div
              whileHover={{ y: -6 }}
              className="rounded-3xl p-12 flex flex-col items-center justify-center min-h-[360px] cursor-default"
              style={{ 
                backgroundColor: '#1e3a5f',
                boxShadow: '0 8px 32px rgba(30, 58, 95, 0.3), 0 24px 48px rgba(30, 58, 95, 0.2)'
              }}
            >
              <motion.div 
                className="w-44 h-44 mb-8"
                whileHover={{ scale: 1.05 }}
              >
                <img 
                  src={logoBrandDraw} 
                  alt="FureverCare Logo Drawing" 
                  className="w-full h-full object-contain drop-shadow-lg"
                />
              </motion.div>
              <span className="font-display text-2xl font-bold text-white mb-2">FureverCare</span>
              <p className="text-white/50 text-xs uppercase tracking-[0.2em]">Sketch/Drawing Process</p>
            </motion.div>
          </div>
        </div>

        {/* Color Palette & Typography */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Color Palette */}
          <div className="card p-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 icon-container-accent rounded-2xl">
                <Palette className="w-6 h-6 text-[#ff914d]" />
              </div>
              <h3 className="text-xl font-bold text-[#1e3a5f]">Color Palette</h3>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {colorPalette.map((color) => (
                <motion.div 
                  key={color.name} 
                  className="text-center"
                >
                  <motion.div
                    className="aspect-square rounded-2xl mb-3 cursor-pointer"
                    style={{ 
                      backgroundColor: color.hex,
                      boxShadow: color.hex === '#fffdf5' 
                        ? 'inset 0 0 0 1px rgba(0,0,0,0.06)' 
                        : `0 8px 24px ${color.hex}40`
                    }}
                    whileHover={{ scale: 1.05, y: -4 }}
                  />
                  <p className="text-sm font-medium text-slate-700">{color.name}</p>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">{color.hex}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Typography */}
          <div className="card p-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 icon-container rounded-2xl">
                <Type className="w-6 h-6 text-[#206a9f]" />
              </div>
              <h3 className="text-xl font-bold text-[#1e3a5f]">Typography</h3>
            </div>
            <div className="space-y-4">
              {typography.map((font) => (
                <motion.div
                  key={font.name}
                  className="p-5 bg-slate-50/80 rounded-2xl"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-slate-700">{font.name}</span>
                    <span className="text-xs text-slate-400 bg-white px-2.5 py-1 rounded-full">{font.usage}</span>
                  </div>
                  <p className={`${font.className} text-[#1e3a5f]`}>{font.sample}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
