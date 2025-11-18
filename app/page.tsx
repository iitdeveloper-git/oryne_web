"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import EcosystemSection from "./components/EcosystemSection";
import Features from "./components/Features";
import UseCases from "./components/UseCases";
import IntegrationPartners from "./components/IntegrationPartners";
import Resources from "./components/Resources";
import LiveChatWidget from "./components/LiveChatWidget";
import ModulesShowcase from "./components/ModulesShowcase";
import Statistics from "./components/Statistics";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative overflow-x-hidden">
      {/* Background particles */}
      <div className="particles-bg">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Use Cases Section - Perfect for Every Educational Setting */}
        <UseCases />

        {/* Ecosystem Section - How Our Systems Work Together */}
        <EcosystemSection />

        {/* Features Section - Powerful Features for Modern Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <Features />
        </motion.div>

        {/* Integration Partners Section */}
        <IntegrationPartners />

        {/* Resources Section */}
        <Resources />

        {/* Modules Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <ModulesShowcase />
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <Statistics />
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <Testimonials />
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <CTA />
        </motion.div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Live Chat Widget */}
      <LiveChatWidget />
    </div>
  );
}
