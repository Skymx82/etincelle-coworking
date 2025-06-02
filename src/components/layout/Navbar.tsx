"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

// Définition de l'espace actuel (à remplacer par une détection dynamique basée sur la route)
const currentSpace = 'Toulouse Wilson';

// Liste de tous les espaces disponibles
const allSpaces = [
  { name: 'Toulouse Wilson', href: '/espaces/toulouse-wilson' },
  { name: 'Toulouse Carmes', href: '/espaces/toulouse-carmes' },
  { name: 'Toulouse Victor Hugo', href: '/espaces/toulouse-victor-hugo' },
  { name: 'Toulouse Alsace-Lorraine', href: '/espaces/toulouse-alsace-lorraine' },
  { name: 'Albi', href: '/espaces/albi' },
];

const navItems = [
  { name: 'Nos offres', href: '/offres', 
    subItems: [
      { name: 'Coworking', href: '/services/coworking' },
      { name: 'Location de salles', href: '/services/location-salles' },
      { name: 'Location de bureaux', href: '/services/location-bureaux' },
      { name: 'Domiciliation', href: '/services/domiciliation' },
    ] 
  },
  { name: 'Lieu', href: '/espaces/toulouse-wilson', 
    subItems: allSpaces // Tous les espaces disponibles
  },
  { name: 'Membres', href: '/membres' },
  { name: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <motion.nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2 text-black' : 'bg-transparent py-4'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <span className={`text-2xl font-bold ${isScrolled ? 'text-primary' : 'text-white'}`}>Etincelle</span>
            <span className={`text-2xl font-light ml-1 ${isScrolled ? 'text-secondary' : 'text-white'}`}>Coworking</span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              {item.subItems ? (
                <div className="flex items-center">
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className={`text-base font-medium flex items-center ${isScrolled ? 'text-primary' : 'text-white'} hover:${isScrolled ? 'text-primary-dark' : 'text-white/80'} transition-colors`}
                  >
                    {item.name}
                    <svg
                      className={`ml-1 h-4 w-4 transition-transform ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </div>
              ) : (
                <Link 
                  href={item.href}
                  className={`text-base font-medium ${isScrolled ? 'text-primary' : 'text-white'} hover:${isScrolled ? 'text-black' : 'text-white/80'} transition-colors`}
                >
                  {item.name}
                </Link>
              )}

              {/* Dropdown for desktop */}
              {item.subItems && (
                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20 text-black"
                    >
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm font-medium text-dark hover:bg-gray-100 hover:text-primary"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${isScrolled ? 'bg-white text-black' : 'bg-primary text-white'} px-6 py-2 rounded-full font-medium shadow-md`}
          >
            Réserver
          </motion.button>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`focus:outline-none ${isScrolled ? 'text-primary' : 'text-white'}`}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white shadow-lg"
          >
            <div className="container mx-auto px-4 py-4">
              {navItems.map((item) => (
                <div key={item.name} className="py-2">
                  {item.subItems ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="w-full flex justify-between items-center text-primary font-medium py-2 text-base"
                      >
                        {item.name}
                        <svg
                          className={`h-4 w-4 transition-transform ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 mt-2 border-l-2 border-gray-200"
                          >
                            {item.subItems.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="block py-2 text-primary hover:text-primary-dark font-medium"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block py-2 text-primary hover:text-primary-dark font-medium text-base"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="w-full bg-primary text-white py-3 rounded-full font-medium mt-4 shadow-md"
              >
                Réserver
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
