"use client"

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaMapMarkerAlt, FaUsers, FaWifi, FaCoffee, FaChair } from 'react-icons/fa';

const OurSpacesSection = () => {
  const [activeSpace, setActiveSpace] = useState(0);
  const [titleRef, titleInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [spacesRef, spacesInView] = useInView({ threshold: 0.1, triggerOnce: true });

  // Données des différents espaces
  const spaces = [
    {
      id: 1,
      name: "Toulouse Wilson",
      description: "Notre espace emblématique au cœur de Toulouse, à deux pas de la place du Capitole.",
      features: [
        { icon: <FaMapMarkerAlt />, text: "Place Wilson, hypercentre" },
        { icon: <FaUsers />, text: "Capacité de 80 coworkers" },
        { icon: <FaWifi />, text: "Internet très haut débit" },
        { icon: <FaCoffee />, text: "Espace café convivial" },
        { icon: <FaChair />, text: "Standing-desks disponibles" }
      ],
      images: [
        "/images/coworking-space-1.jpg",
        "/images/coworking-space-2.jpg",
        "/images/coworking-space-3.jpg"
      ],
      color: "#1a9e5c"
    },
    {
      id: 2,
      name: "Toulouse Alsace Lorraine",
      description: "Un espace moderne et spacieux situé sur l'axe central de Toulouse.",
      features: [
        { icon: <FaMapMarkerAlt />, text: "Rue d'Alsace Lorraine" },
        { icon: <FaUsers />, text: "Capacité de 75 coworkers" },
        { icon: <FaWifi />, text: "Fibre optique sécurisée" },
        { icon: <FaCoffee />, text: "Espace lounge premium" },
        { icon: <FaChair />, text: "Postes de travail modulables" }
      ],
      images: [
        "/images/coworking-space-2.jpg",
        "/images/coworking-space-3.jpg",
        "/images/coworking-space-4.jpg"
      ],
      color: "#8B008B"
    },
    {
      id: 3,
      name: "Toulouse Victor Hugo",
      description: "Un espace chaleureux et lumineux au cœur du quartier des Carmes.",
      features: [
        { icon: <FaMapMarkerAlt />, text: "Quartier Victor Hugo" },
        { icon: <FaUsers />, text: "Capacité de 60 coworkers" },
        { icon: <FaWifi />, text: "Fibre optique dédiée" },
        { icon: <FaCoffee />, text: "Terrasse ensoleillée" },
        { icon: <FaChair />, text: "Mobilier ergonomique" }
      ],
      images: [
        "/images/coworking-space-4.jpg",
        "/images/coworking-space-5.jpg",
        "/images/coworking-space-1.jpg"
      ],
      color: "#1a9e5c"
    },
    {
      id: 4,
      name: "Toulouse Carmes",
      description: "Un espace intimiste dans un quartier historique et dynamique.",
      features: [
        { icon: <FaMapMarkerAlt />, text: "Quartier des Carmes" },
        { icon: <FaUsers />, text: "Capacité de 40 coworkers" },
        { icon: <FaWifi />, text: "Connexion ultra-rapide" },
        { icon: <FaCoffee />, text: "Cuisine équipée" },
        { icon: <FaChair />, text: "Bureaux privatifs disponibles" }
      ],
      images: [
        "/images/coworking-space-3.jpg",
        "/images/coworking-space-2.jpg",
        "/images/coworking-space-5.jpg"
      ],
      color: "#8B008B"
    },
    {
      id: 5,
      name: "Albi Centre",
      description: "Notre espace albigeois, alliant charme historique et modernité.",
      features: [
        { icon: <FaMapMarkerAlt />, text: "Centre historique d'Albi" },
        { icon: <FaUsers />, text: "Capacité de 50 coworkers" },
        { icon: <FaWifi />, text: "Internet haut débit" },
        { icon: <FaCoffee />, text: "Salon de détente" },
        { icon: <FaChair />, text: "Salles de réunion équipées" }
      ],
      images: [
        "/images/coworking-space-5.jpg",
        "/images/coworking-space-4.jpg",
        "/images/coworking-space-2.jpg"
      ],
      color: "#1a9e5c"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-24 bg-gray-100 relative overflow-hidden">
      {/* Éléments de fond */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-[#1a9e5c] to-transparent blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-[#8B008B] to-transparent blur-3xl"></div>
        <div className="absolute top-3/4 right-1/3 w-64 h-64 rounded-full bg-gradient-to-r from-[#1a9e5c] to-transparent blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Titre de la section */}
        <motion.div
          ref={titleRef}
          initial="hidden"
          animate={titleInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
          >
            Nos <span className="text-[#1a9e5c]">espaces</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Découvrez nos différents espaces de coworking, chacun avec son ambiance unique et ses avantages spécifiques.
          </motion.p>
        </motion.div>

        {/* Navigation des espaces */}
        <div className="flex justify-center mb-12 overflow-x-auto pb-4 space-x-2 md:space-x-4">
          {spaces.map((space, index) => (
            <motion.button
              key={space.id}
              onClick={() => setActiveSpace(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-3 rounded-full font-medium transition-all duration-300 min-w-max ${
                activeSpace === index 
                  ? `bg-[${space.color}] text-white shadow-lg shadow-[${space.color}]/30` 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {space.name}
            </motion.button>
          ))}
        </div>

        {/* Contenu de l'espace actif */}
        <motion.div
          ref={spacesRef}
          initial="hidden"
          animate={spacesInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
        >
          {/* Informations sur l'espace */}
          <motion.div
            key={spaces[activeSpace].id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-800">{spaces[activeSpace].name}</h3>
            <p className="text-xl text-gray-600">{spaces[activeSpace].description}</p>
            
            <div className="space-y-4 mt-6">
              {spaces[activeSpace].features.map((feature, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-[${spaces[activeSpace].color}]`}>
                    <span className="text-white">{feature.icon}</span>
                  </div>
                  <span className="text-gray-700">{feature.text}</span>
                </div>
              ))}
            </div>

            <motion.div className="pt-6">
              <Link href={`/espaces/${spaces[activeSpace].name.toLowerCase().replace(/\s+/g, '-')}`}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`bg-[${spaces[activeSpace].color}] text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg shadow-[${spaces[activeSpace].color}]/30 hover:bg-opacity-90 transition-all`}
                >
                  Découvrir cet espace
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Galerie d'images */}
          <motion.div
            key={`gallery-${spaces[activeSpace].id}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 gap-4 relative"
          >
            <div className="col-span-2">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image 
                  src={spaces[activeSpace].images[0]} 
                  alt={`${spaces[activeSpace].name} - Vue principale`}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image 
                src={spaces[activeSpace].images[1]} 
                alt={`${spaces[activeSpace].name} - Détail 1`}
                fill
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image 
                src={spaces[activeSpace].images[2]} 
                alt={`${spaces[activeSpace].name} - Détail 2`}
                fill
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-500 hover:scale-105"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurSpacesSection;
