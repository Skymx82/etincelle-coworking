"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaQuestion, FaEnvelope } from "react-icons/fa";
import HeroSection from "../components/home/HeroSection";
import WhyChooseUsSection from "../components/home/WhyChooseUsSection";
import CtaSection from "../components/home/CtaSection";
import OurSpacesSection from "../components/home/OurSpacesSection";
import SectionDivider from "../components/home/SectionDivider";
import FaqSection from "../components/home/FaqSection";
import ContactSection from "../components/home/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyChooseUsSection />
      <CtaSection />
      <OurSpacesSection />
      <SectionDivider fromColor="#f9fafb" toColor="#f3f4f6" icon={<FaQuestion />} />
      <FaqSection />
      <SectionDivider fromColor="#f3f4f6" toColor="#ffffff" icon={<FaEnvelope />} />
      <ContactSection />
    </>
  );
}
