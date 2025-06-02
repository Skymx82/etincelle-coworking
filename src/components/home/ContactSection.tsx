"use client"

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

const ContactSection = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<null | 'success' | 'error'>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation d'envoi de formulaire
    setTimeout(() => {
      setFormStatus('success');
      // Réinitialiser le formulaire
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      // Réinitialiser le statut après 5 secondes
      setTimeout(() => setFormStatus(null), 5000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: "Adresse",
      content: "2 Place Wilson, 31000 Toulouse"
    },
    {
      icon: <FaPhone />,
      title: "Téléphone",
      content: "05 34 44 55 66"
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      content: "contact@etincelle-coworking.com"
    }
  ];

  const socialLinks = [
    { icon: <FaLinkedin />, url: "https://linkedin.com" },
    { icon: <FaFacebook />, url: "https://facebook.com" },
    { icon: <FaInstagram />, url: "https://instagram.com" }
  ];

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
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Contactez-nous</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Une question ? Besoin d'informations ? Notre équipe est à votre disposition pour vous aider et vous conseiller.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Informations de contact */}
            <motion.div variants={itemVariants} className="md:col-span-1">
              <div className="bg-gray-50 p-6 rounded-lg h-full">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Informations</h3>
                
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#1a9e5c] flex items-center justify-center text-white">
                        {item.icon}
                      </div>
                      <div className="ml-4">
                        <h4 className="text-base font-medium text-gray-800">{item.title}</h4>
                        <p className="text-gray-600">{item.content}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <h4 className="text-base font-medium text-gray-800 mb-4">Suivez-nous</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((link, index) => (
                      <a 
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#1a9e5c] hover:text-white transition-colors duration-300"
                      >
                        {link.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Formulaire de contact */}
            <motion.div variants={itemVariants} className="md:col-span-2">
              <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Envoyez-nous un message</h3>
                
                {formStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md text-green-700">
                    Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.
                  </div>
                )}
                
                {formStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md text-red-700">
                    Une erreur s'est produite lors de l'envoi du message. Veuillez réessayer.
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#1a9e5c] focus:border-[#1a9e5c] outline-none transition"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#1a9e5c] focus:border-[#1a9e5c] outline-none transition"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Sujet</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#1a9e5c] focus:border-[#1a9e5c] outline-none transition"
                      required
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="information">Demande d'information</option>
                      <option value="visite">Réservation de visite</option>
                      <option value="abonnement">Abonnement</option>
                      <option value="partenariat">Partenariat</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#1a9e5c] focus:border-[#1a9e5c] outline-none transition"
                      required
                    ></textarea>
                  </div>
                  
                  <div>
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02, backgroundColor: "#8B008B" }}
                      whileTap={{ scale: 0.98 }}
                      className="px-6 py-3 bg-[#1a9e5c] text-white rounded-md font-medium shadow-sm transition-all duration-300 hover:shadow-md w-full sm:w-auto"
                    >
                      Envoyer le message
                    </motion.button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
