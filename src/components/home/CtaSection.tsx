"use client"

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Link from 'next/link';

const CtaSection = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section className="py-16 bg-gradient-to-r from-[#1a9e5c]/90 to-[#8B008B]/90 relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <Image 
            src="/images/coworking-space-1.jpg" 
            alt="Coworking background" 
            fill 
            style={{ objectFit: 'cover' }}
            className="opacity-10"
          />
        </div>
        <div className="absolute -top-24 -left-24 w-48 h-48 border-4 border-white/20 rounded-full"></div>
        <div className="absolute -bottom-12 -right-12 w-32 h-32 border-4 border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-white/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Prêt à transformer votre façon de travailler ?
          </h2>
          
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Réservez une visite gratuite et découvrez l'espace qui correspond à vos besoins professionnels.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#ffffff", color: "#1a9e5c" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-[#1a9e5c] rounded-full font-bold text-lg shadow-xl transition-all duration-300"
            >
              Réserver une visite
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg shadow-xl transition-all duration-300"
            >
              Nos tarifs
            </motion.button>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-white"
          >
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold mb-2">5+</span>
              <span className="text-white/80">Espaces</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold mb-2">500+</span>
              <span className="text-white/80">Membres</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold mb-2">24/7</span>
              <span className="text-white/80">Accès</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold mb-2">100%</span>
              <span className="text-white/80">Satisfaits</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
