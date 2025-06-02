"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative h-screen overflow-hidden bg-dark">
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/80 via-primary/70 to-secondary/60 mix-blend-multiply z-10"></div>
      
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          {/* Placeholder for background image - we'll add actual image later */}
          <div className="absolute inset-0 bg-[url('/images/coworking-bg.jpg')] bg-cover bg-center"></div>
          {/* Overlay sombre pour améliorer la lisibilité */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      </div>
      
      {/* Animated shapes */}
      <div className="absolute inset-0 z-0 opacity-30">
        <motion.div
          className="absolute top-[10%] left-[20%] w-32 h-32 rounded-full bg-secondary blur-sm"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-[20%] right-[10%] w-40 h-40 rounded-full bg-primary blur-sm"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-[40%] right-[30%] w-24 h-24 rounded-full bg-wood blur-sm"
          animate={{
            x: [0, 20, 0],
            y: [0, 20, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 7,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-[30%] left-[15%] w-36 h-36 rounded-full bg-primary-dark blur-sm"
          animate={{
            x: [0, 25, 0],
            y: [0, -25, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 9,
            ease: "easeInOut",
          }}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center items-start h-full container mx-auto px-4 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <motion.div 
            className="overflow-hidden mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <motion.p 
              className="text-white/90 font-medium tracking-wider drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] text-shadow"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              ESPACES DE TRAVAIL À TOULOUSE ET ALBI
            </motion.p>
          </motion.div>
          
          <motion.div className="overflow-hidden mb-6">
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] text-shadow-lg"
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            >
              Travaillez <span className="text-secondary">autrement</span>
            </motion.h1>
          </motion.div>
          
          <motion.div className="overflow-hidden mb-8">
            <motion.p 
              className="text-xl md:text-2xl text-white font-semibold drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)] text-shadow-lg"
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Des espaces de coworking inspirants et flexibles pour les professionnels qui veulent développer leur activité dans un environnement dynamique.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#8B008B" }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg shadow-xl ring-2 ring-white/20 transition-colors"
            >
              Réserver un espace
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-black/30 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg shadow-xl transition-colors"
            >
              Découvrir nos Offres
            </motion.button>
          </motion.div>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ 
            opacity: { delay: 1.5, duration: 1 },
            y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
          }}
        >
          <svg 
            className="w-10 h-10 text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
