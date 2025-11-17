"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import ModulesShowcase from "./components/ModulesShowcase";
import Statistics from "./components/Statistics";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
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

        {/* Independent Scroll Indicator - Between Hero and Features */}
        <div className="relative -mt-8 mb-32 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
            style={{
              opacity: Math.max(0, 1 - scrollY / 400),
            }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex flex-col items-center gap-3"
            >
              {/* Modern Circular Design */}
              <div className="relative">
                {/* Outer rotating ring */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-transparent"
                  style={{
                    borderTopColor: "#3b82f6",
                    borderRightColor: "#8b5cf6",
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <div className="w-16 h-16" />
                </motion.div>

                {/* Inner glowing circle */}
                <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-primary-500/20 via-accent-500/20 to-purple-500/20 backdrop-blur-md border border-white/30 shadow-xl flex items-center justify-center">
                  {/* Animated chevron */}
                  <motion.div
                    animate={{ y: [0, 4, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="flex flex-col gap-0.5"
                  >
                    <svg
                      className="w-5 h-5 text-primary-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                    <svg
                      className="w-5 h-5 text-accent-600 -mt-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </motion.div>

                  {/* Pulsing effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-400 to-accent-400"
                    animate={{
                      scale: [1, 1.4, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                  />
                </div>
              </div>

              {/* Animated Text with Scroll Progress */}
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-xs font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-accent-600 to-purple-600 tracking-[0.2em]"
              >
                EXPLORE
              </motion.div>

              {/* Scroll Progress Dots */}
              <div className="flex gap-1 mb-2">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-1 h-1 rounded-full bg-primary-400"
                    animate={{
                      scale: scrollY > i * 100 ? 1.5 : 1,
                      opacity: scrollY > i * 100 ? 1 : 0.3,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Features Section - Fade In from Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Features />
        </motion.div>

        {/* Modules Showcase - Slide In from Left */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <ModulesShowcase />
        </motion.div>

        {/* Statistics - Scale Up with Fade */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Statistics />
        </motion.div>

        {/* Testimonials - Fade In with Rotation */}
        <motion.div
          initial={{ opacity: 0, rotateX: -15 }}
          whileInView={{ opacity: 1, rotateX: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ perspective: 1000 }}
        >
          <Testimonials />
        </motion.div>

        {/* Pricing - Slide In from Right */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <Pricing />
        </motion.div>

        {/* CTA Section - Zoom In with Bounce */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: [0.34, 1.56, 0.64, 1],
            type: "spring",
            stiffness: 100,
          }}
        >
          <CTA />
        </motion.div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
