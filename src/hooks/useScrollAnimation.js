import { useRef } from 'react';
import { useInView } from 'framer-motion';

export function useScrollAnimation(options = {}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    amount: 0.2,
    ...options 
  });

  return { ref, isInView };
}
