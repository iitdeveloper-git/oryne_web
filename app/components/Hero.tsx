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
import ContactFormModal from "./ContactFormModal";

const Hero = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [institutionText, setInstitutionText] = useState("Institution");

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-rotate institution text
  useEffect(() => {
    const institutions = [
      "Institution",
      "School",
      "College",
      "University",
      "Academy",
      "Campus",
    ];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % institutions.length;
      setInstitutionText(institutions[index]);
    }, 2500);

    return () => clearInterval(interval);
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
    <section className="relative min-h-screen flex items-center justify-center pt-32 md:pt-40 pb-16 md:pb-20 overflow-x-hidden">
      {/* Enhanced Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-to-br from-blue-400/30 to-cyan-400/30 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-1/3 w-[700px] h-[700px] bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -50, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Lightweight CSS Gradient Background */}
      <LightweightGradient />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOCAxOC04LjA1OSAxOC0xOC04LjA1OS0xOC0xOC0xOHoiIHN0cm9rZT0iIzk0YTNiOCIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMiIvPjwvZz48L3N2Zz4=')] opacity-30"></div>

      {/* Background Elements with Subtle Parallax */}
      <Parallax speed={0.5} className="absolute inset-0">
        <div className="absolute inset-0 bg-hero-pattern opacity-20"></div>
      </Parallax>

      {/* Simplified Floating Icons - Only 3 for performance */}
      {floatingIcons.slice(0, 3).map(({ Icon, position, delay }, index) => (
        <motion.div
          key={index}
          className="absolute text-primary-300/20"
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
      <div className="container-custom relative z-10 px-6 md:px-12">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="text-center max-w-6xl mx-auto space-y-8"
        >
          {/* Badge - Enhanced Style and Effect */}
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-primary-300/50 text-sm font-semibold mb-8 shadow-lg"
          >
            <motion.span
              className="w-2.5 h-2.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [1, 0.7, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.span
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0%", "100%", "0%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              AI-Powered Educational Platform
            </motion.span>
            <motion.span
              className="ml-3 text-xs px-2 py-0.5 bg-gradient-to-r from-green-400 to-emerald-400 text-white rounded-full"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              NEW
            </motion.span>
          </motion.div>

          {/* Main Headline - Enhanced animations */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-12 md:mb-16 leading-tight px-4"
          >
            {/* "One Platform Infinite Possibilities" with enhanced styling */}
            <div className="relative inline-block">
              {/* "One Platform" with spotlight effect */}
              <motion.span
                className="inline-block relative"
                initial={{ opacity: 0, scale: 0.5, rotateX: -90 }}
                animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                transition={{
                  delay: 0.4,
                  duration: 1,
                  type: "spring",
                  stiffness: 80,
                }}
              >
                <span className="relative z-10">
                  {"One Platform".split("").map((char, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 50, rotateZ: -45 }}
                      animate={{ opacity: 1, y: 0, rotateZ: 0 }}
                      transition={{
                        delay: 0.5 + index * 0.04,
                        duration: 0.4,
                        type: "spring",
                        stiffness: 150,
                      }}
                      className="inline-block text-secondary-900 font-black"
                      style={{
                        display: char === " " ? "inline" : "inline-block",
                        textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
                      }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </span>

                {/* Glowing underline for "One Platform" */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
                  style={{
                    boxShadow: "0 0 20px rgba(59, 130, 246, 0.6)",
                  }}
                />
              </motion.span>

              <br className="md:hidden" />

              {/* "Infinite Possibilities" with 3D effect and particles */}
              <motion.span
                className="inline-block relative ml-0 md:ml-4 mt-2 md:mt-0"
                initial={{ opacity: 0, scale: 0.5, z: -100 }}
                animate={{ opacity: 1, scale: 1, z: 0 }}
                transition={{
                  delay: 1.3,
                  duration: 1,
                  type: "spring",
                  stiffness: 80,
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <span className="relative z-10 inline-block">
                  {"Infinite Possibilities".split("").map((char, index) => (
                    <motion.span
                      key={index + 100}
                      initial={{ opacity: 0, scale: 0, rotateY: 180 }}
                      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                      transition={{
                        delay: 1.4 + index * 0.04,
                        duration: 0.5,
                        type: "spring",
                        stiffness: 120,
                      }}
                      className="inline-block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-black"
                      style={{
                        display: char === " " ? "inline" : "inline-block",
                        textShadow: "0 0 30px rgba(139, 92, 246, 0.3)",
                        transform:
                          char !== " "
                            ? `translateZ(${20 + index * 2}px)`
                            : undefined,
                      }}
                      whileHover={{
                        scale: 1.1,
                        y: -5,
                        transition: { duration: 0.2 },
                      }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </span>

                {/* Animated background glow */}
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-lg blur-xl"
                  animate={{
                    opacity: [0.5, 0.8, 0.5],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Sparkle particles */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={`sparkle-${i}`}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${Math.random() * 100}%`,
                      boxShadow: "0 0 10px #fff",
                    }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1.5, 0],
                      y: [0, -20, -40],
                    }}
                    transition={{
                      duration: 2,
                      delay: 2 + i * 0.3,
                      repeat: Infinity,
                      repeatDelay: 1,
                    }}
                  />
                ))}
              </motion.span>
            </div>
            <br />
            <div className="h-8 md:h-12"></div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5, duration: 0.6 }}
              className="inline-block text-secondary-900"
            >
              Transform Your
            </motion.span>
            <br />
            {/* Revolutionary rotating text effect with particle explosion */}
            <div className="relative inline-block mt-4 perspective-1000">
              <motion.div
                className="relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 0.5 }}
              >
                {/* Rotating institution text with unique effects */}
                <motion.span
                  key={institutionText}
                  initial={{
                    opacity: 0,
                    scale: 0,
                    rotateY: -180,
                    filter: "blur(20px)",
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    rotateY: 0,
                    filter: "blur(0px)",
                  }}
                  exit={{
                    opacity: 0,
                    scale: 2,
                    rotateY: 180,
                    filter: "blur(20px)",
                  }}
                  transition={{
                    duration: 0.8,
                    type: "spring",
                    stiffness: 80,
                  }}
                  className="gradient-text inline-block text-6xl md:text-7xl lg:text-8xl font-black relative"
                  style={{
                    transformStyle: "preserve-3d",
                    textShadow: "0 0 30px rgba(59, 130, 246, 0.5)",
                  }}
                >
                  {institutionText.split("").map((char, index) => (
                    <motion.span
                      key={`${institutionText}-${index}`}
                      initial={{
                        opacity: 0,
                        y: -50,
                        rotateZ: -180,
                        scale: 0,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        rotateZ: 0,
                        scale: 1,
                      }}
                      transition={{
                        delay: index * 0.05,
                        duration: 0.5,
                        type: "spring",
                        stiffness: 200,
                      }}
                      className="inline-block"
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.span>

                {/* Glowing animated particles around the text */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={`particle-${institutionText}-${i}`}
                    className="absolute w-2 h-2 rounded-full"
                    style={{
                      background: `linear-gradient(135deg, 
                        ${
                          i % 3 === 0
                            ? "#3b82f6"
                            : i % 3 === 1
                            ? "#8b5cf6"
                            : "#ec4899"
                        }, 
                        ${
                          i % 3 === 0
                            ? "#06b6d4"
                            : i % 3 === 1
                            ? "#a855f7"
                            : "#f472b6"
                        })`,
                      boxShadow: `0 0 20px ${
                        i % 3 === 0
                          ? "#3b82f6"
                          : i % 3 === 1
                          ? "#8b5cf6"
                          : "#ec4899"
                      }`,
                      left: "50%",
                      top: "50%",
                    }}
                    initial={{
                      x: 0,
                      y: 0,
                      scale: 0,
                      opacity: 0,
                    }}
                    animate={{
                      x: [
                        0,
                        Math.cos((i * Math.PI) / 4) * 150,
                        Math.cos((i * Math.PI) / 4) * 200,
                      ],
                      y: [
                        0,
                        Math.sin((i * Math.PI) / 4) * 150,
                        Math.sin((i * Math.PI) / 4) * 200,
                      ],
                      scale: [0, 1.5, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      delay: 0.3 + i * 0.05,
                      ease: "easeOut",
                    }}
                  />
                ))}

                {/* Circular ripple effect */}
                <motion.div
                  key={`ripple-${institutionText}`}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-primary-500/30"
                  initial={{ width: 0, height: 0, opacity: 0.8 }}
                  animate={{
                    width: 400,
                    height: 400,
                    opacity: 0,
                    borderColor: [
                      "rgba(59, 130, 246, 0.3)",
                      "rgba(139, 92, 246, 0.3)",
                      "rgba(236, 72, 153, 0.3)",
                    ],
                  }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />

                {/* Holographic shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    x: ["-200%", "200%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1,
                    ease: "easeInOut",
                  }}
                  style={{
                    maskImage:
                      "linear-gradient(to right, transparent, black, transparent)",
                  }}
                />
              </motion.div>
            </div>
          </motion.h1>

          {/* Subtitle - Enhanced with unique context */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.8 }}
            className="max-w-5xl mx-auto mb-12 md:mb-16 px-4"
          >
            <p className="text-xl md:text-2xl text-secondary-700 leading-relaxed mb-8">
              <span className="font-semibold text-secondary-900">
                8 Intelligent Systems.
              </span>{" "}
              <span className="font-semibold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                One Brain.
              </span>{" "}
              <span className="font-semibold text-secondary-900">
                Zero Silos.
              </span>
            </p>

            <motion.div
              className="flex flex-wrap items-center justify-center gap-3 md:gap-4 text-base md:text-lg px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3, duration: 0.8 }}
            >
              {[
                { name: "Command Center", color: "from-blue-500 to-cyan-500" },
                { name: "Learn Sphere", color: "from-purple-500 to-pink-500" },
                { name: "Campus Mart", color: "from-green-500 to-teal-500" },
                {
                  name: "Knowledge Vault",
                  color: "from-indigo-500 to-purple-500",
                },
                { name: "Stay Hub", color: "from-yellow-500 to-orange-500" },
                { name: "Route Master", color: "from-red-500 to-pink-500" },
                {
                  name: "Campus Pulse",
                  color: "from-violet-500 to-purple-500",
                },
              ].map((module, index) => (
                <motion.span
                  key={module.name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 3.2 + index * 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                  whileHover={{
                    scale: 1.1,
                    y: -5,
                    transition: { duration: 0.2 },
                  }}
                  className={`px-4 py-2 rounded-full bg-gradient-to-r ${module.color} text-white font-semibold text-sm shadow-lg cursor-default`}
                >
                  {module.name}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Data Isolation Badge - Enhanced Style */}
          <motion.div
            variants={fadeInUp}
            transition={fadeInUpTransition}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-green-50 via-emerald-50 to-teal-50 border-2 border-green-400/60 mb-10 shadow-xl relative overflow-hidden group"
          >
            {/* Animated background shimmer */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Lock icon with animation */}
            <motion.svg
              className="w-6 h-6 text-green-600 relative z-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{
                rotate: [0, -10, 10, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </motion.svg>

            <motion.span
              className="text-lg font-bold bg-gradient-to-r from-green-700 via-emerald-700 to-teal-700 bg-clip-text text-transparent relative z-10"
              animate={{
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Complete Data Isolation
            </motion.span>

            {/* Checkmark badge */}
            <motion.div
              className="w-7 h-7 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center relative z-10"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </motion.div>
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
