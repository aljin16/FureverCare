import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const FloatingPawPrints = () => {
  const [pawPrints, setPawPrints] = useState([]);
  const [windowHeight, setWindowHeight] = useState(1000);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
    
    const prints = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: 5 + Math.random() * 90,
      animationDelay: Math.random() * 12,
      animationDuration: 18 + Math.random() * 12,
      size: 14 + Math.random() * 10,
      opacity: 0.04 + Math.random() * 0.06,
      rotateStart: -20 + Math.random() * 10,
      rotateEnd: 10 + Math.random() * 10,
      xOffset: -15 + Math.random() * 30,
    }));
    setPawPrints(prints);

    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const PawIcon = ({ size }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="currentColor"
    >
      <ellipse cx="50" cy="65" rx="16" ry="14" />
      <circle cx="35" cy="38" r="7" />
      <circle cx="50" cy="28" r="7" />
      <circle cx="65" cy="38" r="7" />
      <circle cx="40" cy="50" r="5" />
      <circle cx="60" cy="50" r="5" />
    </svg>
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden">
      {pawPrints.map((paw) => (
        <motion.div
          key={paw.id}
          className="absolute"
          style={{
            color: '#ff914d',
            left: `${paw.left}%`,
            opacity: paw.opacity,
          }}
          initial={{ y: -60, rotate: paw.rotateStart, x: 0 }}
          animate={{
            y: windowHeight + 60,
            rotate: paw.rotateEnd,
            x: paw.xOffset,
          }}
          transition={{
            duration: paw.animationDuration,
            delay: paw.animationDelay,
            repeat: Infinity,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          <PawIcon size={paw.size} />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingPawPrints;
