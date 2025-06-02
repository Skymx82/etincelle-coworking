"use client"

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaChevronDown } from 'react-icons/fa';

interface SectionDividerProps {
  fromColor?: string;
  toColor?: string;
  icon?: React.ReactNode;
}

const SectionDivider = ({ 
  fromColor = "#f9fafb", 
  toColor = "#f3f4f6",
  icon = <FaChevronDown />
}: SectionDividerProps) => {
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true });

  return (
    <div 
      className="relative h-24 overflow-hidden" 
      style={{
        background: `linear-gradient(to bottom, ${fromColor} 0%, ${toColor} 100%)`
      }}
    >
      {/* Courbe décorative */}
      <div className="absolute inset-0 w-full h-full">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="absolute bottom-0 w-full h-24"
          style={{ transform: 'rotate(180deg)' }}
        >
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            className="fill-current opacity-10"
            style={{ color: fromColor }}
          ></path>
        </svg>
      </div>

      {/* Points décoratifs */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-[#1a9e5c]/30"></div>
        <div className="absolute top-1/2 left-1/3 w-3 h-3 rounded-full bg-[#8B008B]/20"></div>
        <div className="absolute top-3/4 left-2/3 w-2 h-2 rounded-full bg-[#1a9e5c]/30"></div>
        <div className="absolute top-1/3 right-1/4 w-4 h-4 rounded-full bg-[#8B008B]/10"></div>
      </div>

      {/* Icône centrale avec animation */}
      <motion.div 
        ref={ref}
        initial={{ y: -20, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#1a9e5c]">
          {icon}
        </div>
      </motion.div>
    </div>
  );
};

export default SectionDivider;
