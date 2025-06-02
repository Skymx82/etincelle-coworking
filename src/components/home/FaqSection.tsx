"use client"

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaChevronDown } from 'react-icons/fa';

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
}

const FaqItem = ({ question, answer, isOpen, toggleOpen }: FaqItemProps) => {
  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        className="w-full flex justify-between items-center text-left focus:outline-none"
        onClick={toggleOpen}
      >
        <h3 className="text-lg font-medium text-gray-800">{question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-[#1a9e5c]"
        >
          <FaChevronDown />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pt-3 text-gray-600">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FaqSection = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Premier élément ouvert par défaut
  
  const faqItems = [
    {
      question: "Quels sont les horaires d'ouverture des espaces Etincelle ?",
      answer: "La plupart de nos espaces sont accessibles 24h/24 et 7j/7 pour nos membres avec abonnement. L'accueil est généralement ouvert du lundi au vendredi de 9h à 18h. Les horaires spécifiques peuvent varier selon l'espace, n'hésitez pas à nous contacter pour plus de détails."
    },
    {
      question: "Comment puis-je réserver une salle de réunion ?",
      answer: "La réservation des salles de réunion se fait très simplement via notre plateforme en ligne ou directement à l'accueil. Les membres bénéficient de tarifs préférentiels et d'un certain nombre d'heures incluses selon leur formule d'abonnement."
    },
    {
      question: "Quels services sont inclus dans l'abonnement ?",
      answer: "Tous nos abonnements incluent l'accès à l'espace de coworking, une connexion internet très haut débit, l'utilisation des espaces communs, le café/thé à volonté, et l'accès aux événements communautaires. Des services supplémentaires comme les salles de réunion, l'impression ou la domiciliation sont disponibles selon les formules."
    },
    {
      question: "Puis-je essayer l'espace avant de m'engager ?",
      answer: "Absolument ! Nous proposons des journées d'essai gratuites ainsi que des formules flexibles sans engagement. Vous pouvez également réserver une visite guidée pour découvrir nos espaces et rencontrer notre équipe."
    },
    {
      question: "Est-il possible de domicilier mon entreprise chez Etincelle ?",
      answer: "Oui, nous proposons des services de domiciliation d'entreprise dans tous nos espaces. Ce service comprend la réception de courrier, la gestion des recommandés et une adresse professionnelle prestigieuse pour votre entreprise."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Questions fréquentes</h2>
            <p className="text-gray-600">Tout ce que vous devez savoir sur nos espaces de coworking</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            {faqItems.map((item, index) => (
              <FaqItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                toggleOpen={() => toggleFaq(index)}
              />
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">Vous ne trouvez pas la réponse à votre question ?</p>
            <motion.button
              whileHover={{ scale: 1.03, backgroundColor: "#8B008B" }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-2 bg-[#1a9e5c] text-white rounded-md font-medium text-sm md:text-base shadow-sm transition-all duration-300"
            >
              Contactez-nous
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;
