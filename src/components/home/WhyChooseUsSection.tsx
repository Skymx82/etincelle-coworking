"use client"

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaMapMarkerAlt, FaSubway, FaWifi, FaBuilding, FaStar, FaBriefcase } from 'react-icons/fa';

const WhyChooseUsSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12
      }
    }
  };

  // Intersection observer hooks for each section
  const [titleRef, titleInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [cardsRef, cardsInView] = useInView({ threshold: 0.1, triggerOnce: true });

  // Features data - Arguments généraux applicables à tous les espaces Etincelle
  const features = [
    {
      id: 1,
      title: "Emplacement premium",
      description: "Situés aux meilleurs emplacements possibles, en plein cœur de ville et dans des quartiers dynamiques.",
      icon: <FaMapMarkerAlt className="text-white" />,
      bgColor: "bg-[#1a9e5c]",
      accentColor: "border-[#1a9e5c]"
    },
    {
      id: 2,
      title: "Accessibilité idéale",
      description: "Toujours situés à moins de 10 minutes d'une station de métro ou d'un arrêt de bus, avec parkings à proximité.",
      icon: <FaSubway className="text-white" />,
      bgColor: "bg-[#8B008B]",
      accentColor: "border-[#8B008B]"
    },
    {
      id: 3,
      title: "Internet très haut débit",
      description: "Connexion fibre optique ultra-rapide et sécurisée dans tous nos espaces pour un travail sans interruption.",
      icon: <FaWifi className="text-white" />,
      bgColor: "bg-[#1a9e5c]",
      accentColor: "border-[#1a9e5c]"
    },
    {
      id: 4,
      title: "Espaces polyvalents",
      description: "Coworking, bureaux privés, salles de réunion et espaces détente adaptés à tous vos besoins professionnels.",
      icon: <FaBuilding className="text-white" />,
      bgColor: "bg-[#8B008B]",
      accentColor: "border-[#8B008B]"
    },
    {
      id: 5,
      title: "Environnement de qualité",
      description: "Des espaces baignés de lumière naturelle, soigneusement aménagés et climatisés pour votre confort.",
      icon: <FaStar className="text-white" />,
      bgColor: "bg-[#1a9e5c]",
      accentColor: "border-[#1a9e5c]"
    },
    {
      id: 6,
      title: "Équipements professionnels",
      description: "Postes ergonomiques, prises multiples, espaces de rangement et accès aux imprimantes et scanners.",
      icon: <FaBriefcase className="text-white" />,
      bgColor: "bg-[#8B008B]",
      accentColor: "border-[#8B008B]"
    }
  ];
  
  // Images pour le carrousel
  const carouselImages = [
    {
      src: "/images/coworking-space-1.jpg",
      alt: "Espace de coworking lumineux"
    },
    {
      src: "/images/coworking-space-2.jpg",
      alt: "Salle de réunion moderne"
    },
    {
      src: "/images/coworking-space-3.jpg",
      alt: "Espace café convivial"
    },
    {
      src: "/images/coworking-space-4.jpg",
      alt: "Bureau privé équipé"
    },
    {
      src: "/images/coworking-space-5.jpg",
      alt: "Espace événementiel"
    }
  ];
  
  // Configuration du carrousel
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false
        }
      }
    ]
  };

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-[#1a9e5c]/10 via-black to-[#8B008B]/10">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#1a9e5c] rounded-full filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#8B008B] rounded-full filter blur-3xl opacity-30 translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section title */}
        <motion.div 
          ref={titleRef}
          initial="hidden"
          animate={titleInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
          }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Pourquoi <span className="text-[#8B008B]">nous choisir</span> ?
          </h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { delay: 0.3 } }
            }}
          >
            Etincelle Coworking, c'est bien plus qu'un espace de travail partagé.
            C'est un écosystème pensé pour votre réussite.
          </motion.p>
        </motion.div>

        {/* Layout avec avantages à gauche et carrousel à droite */}
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {/* Avantages à gauche */}
          <motion.div 
            ref={cardsRef}
            initial="hidden"
            animate={cardsInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="w-full lg:w-1/2 space-y-6"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.id}
                variants={itemVariants}
                whileHover={{ 
                  x: 10, 
                  transition: { type: 'spring', stiffness: 300, damping: 15 }
                }}
                className="flex items-start gap-5 group"
              >
                <div className={`flex-shrink-0 w-12 h-12 ${feature.bgColor} border-2 ${feature.accentColor} rounded-full flex items-center justify-center text-xl group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#8B008B] transition-colors">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Carrousel à droite */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="relative aspect-[4/3] bg-black">
              <Slider {...sliderSettings} className="carousel-slider">
                {carouselImages.map((image, index) => (
                  <div key={index} className="relative h-[400px]">
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-900 text-white text-xl font-medium">
                      Chargement de l'image...
                    </div>
                    <div className="relative h-full w-full">
                      <Image 
                        src={image.src} 
                        alt={image.alt}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="brightness-90"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                        <h3 className="text-xl font-bold text-white">{image.alt}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#1a9e5c] text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg shadow-[#1a9e5c]/30 hover:bg-[#8B008B] transition-colors duration-300"
          >
            Réserver une visite
          </motion.button>
        </motion.div>
      </div>

      {/* Styles CSS pour le carrousel */}
      <style jsx global>{`
        .carousel-slider .slick-dots li button:before {
          color: white;
          opacity: 0.5;
          font-size: 10px;
        }
        .carousel-slider .slick-dots li.slick-active button:before {
          color: var(--color-primary);
          opacity: 1;
        }
        .carousel-slider .slick-prev, .carousel-slider .slick-next {
          z-index: 10;
          width: 40px;
          height: 40px;
        }
        .carousel-slider .slick-prev {
          left: 15px;
        }
        .carousel-slider .slick-next {
          right: 15px;
        }
        .carousel-slider .slick-prev:before, .carousel-slider .slick-next:before {
          font-size: 40px;
          opacity: 0.7;
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUsSection;
