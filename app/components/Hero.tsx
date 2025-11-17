"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon, PlayIcon } from "@heroicons/react/24/outline";
import {
  AcademicCapIcon,
  BookOpenIcon,
  BuildingLibraryIcon,
  ShoppingBagIcon,
  HomeIcon,
  TruckIcon,
} from "@heroicons/react/24/solid";
import { Parallax } from "./Parallax";
import LightweightGradient from "./LightweightGradient";
import EcosystemGraph from "./EcosystemGraph";
import ContactFormModal from "./ContactFormModal";

const Hero = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
  };

  const fadeInUpTransition = { duration: 0.6 };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const floatingIcons = [
    { Icon: AcademicCapIcon, position: { top: "20%", left: "10%" }, delay: 0 },
    { Icon: BookOpenIcon, position: { top: "30%", right: "15%" }, delay: 0.5 },
    {
      Icon: BuildingLibraryIcon,
      position: { bottom: "30%", left: "8%" },
      delay: 1,
    },
    {
      Icon: ShoppingBagIcon,
      position: { top: "60%", right: "10%" },
      delay: 1.5,
    },
    { Icon: HomeIcon, position: { bottom: "20%", right: "20%" }, delay: 2 },
    { Icon: TruckIcon, position: { top: "50%", left: "5%" }, delay: 2.5 },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-accent-50 pt-32 md:pt-40 pb-20 overflow-hidden">
      {/* Lightweight CSS Gradient Background */}
      <LightweightGradient />

      {/* Background Elements with Subtle Parallax */}
      <Parallax speed={0.5} className="absolute inset-0">
        <div className="absolute inset-0 bg-hero-pattern opacity-30"></div>
      </Parallax>

      {/* Simplified Floating Icons - Only 3 for performance */}
      {floatingIcons.slice(0, 3).map(({ Icon, position, delay }, index) => (
        <motion.div
          key={index}
          className="absolute text-primary-300/30"
          style={position}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay, duration: 0.6 }}
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: delay,
            }}
          >
            <Icon className="w-16 h-16 md:w-20 md:h-20" />
          </motion.div>
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="container-custom relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="text-center max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 bg-primary-500 rounded-full mr-2 animate-pulse"></span>
            AI-Powered Educational Platform
          </motion.div>

          {/* Main Headline - Simple fade in */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-secondary-900 mb-8 leading-tight"
          >
            Transform Your{" "}
            <span className="gradient-text">Educational Institution</span>
            <br />
            with <span className="gradient-text">Oryne</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            transition={fadeInUpTransition}
            className="text-xl md:text-2xl text-secondary-600 mb-6 max-w-4xl mx-auto leading-relaxed"
          >
            Complete AI-powered platform with{" "}
            <span className="font-semibold text-primary-600">
              ERP, LMS, E-Store, Library, Hostel & Transport
            </span>{" "}
            — all in one solution.
          </motion.p>

          {/* Data Isolation Badge */}
          <motion.div
            variants={fadeInUp}
            transition={fadeInUpTransition}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 mb-10 shadow-sm"
          >
            <svg
              className="w-5 h-5 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            <span className="text-base font-bold text-green-800">
              🔒 Complete Data Isolation • Schema-per-Tenant Architecture
            </span>
          </motion.div>

          {/* CTA Buttons with Micro-interactions */}
          <motion.div
            variants={fadeInUp}
            transition={fadeInUpTransition}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(14, 165, 233, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              onClick={() => setIsContactModalOpen(true)}
              className="btn-primary text-lg px-10 py-4 flex items-center gap-2 group shadow-lg"
            >
              Request Demo
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="flex items-center gap-3 text-secondary-700 hover:text-primary-600 font-semibold group"
            >
              <div className="w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center group-hover:shadow-xl transition-shadow">
                <PlayIcon className="w-6 h-6 ml-1" />
              </div>
              Watch Demo
            </motion.button>
          </motion.div>

          {/* Feature Highlights */}
          <motion.div
            variants={fadeInUp}
            transition={fadeInUpTransition}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-32"
          >
            {[
              { label: "AI-Powered", value: "100%" },
              { label: "Uptime", value: "99.9%" },
              { label: "Data Security", value: "SOC 2" },
              { label: "Support", value: "24/7" },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/90 backdrop-blur-sm rounded-xl p-5 shadow-xl border border-primary-100"
              >
                <div className="text-2xl font-bold gradient-text mb-1">
                  {item.value}
                </div>
                <div className="text-sm text-secondary-600 font-medium">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Section Title for Ecosystem - Scroll Effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6"
            >
              How Our Systems{" "}
              <motion.span
                className="gradient-text"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Work Together
              </motion.span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed"
            >
              8 powerful systems seamlessly integrated through our AI-powered
              core. Click any module to explore its features.
            </motion.p>
          </motion.div>

          {/* Ecosystem Graph - Enhanced Scroll Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
              scale: { duration: 0.7 },
            }}
            className="w-full mx-auto"
          >
            <EcosystemGraph />
          </motion.div>
        </motion.div>
      </div>

      {/* Contact Form Modal */}
      <ContactFormModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </section>
  );
};

export default Hero;
