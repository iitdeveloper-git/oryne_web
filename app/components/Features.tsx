"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  CpuChipIcon,
  CloudIcon,
  ShieldCheckIcon,
  BoltIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

const Features = () => {
  const features = [
    {
      icon: CpuChipIcon,
      title: "AI-Powered Intelligence",
      description:
        "Advanced AI algorithms for personalized learning paths, predictive analytics, and intelligent recommendations.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: BoltIcon,
      title: "Lightning Fast",
      description:
        "Optimized performance with Redis caching, CDN delivery, and efficient database queries.",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: ChartBarIcon,
      title: "Advanced Analytics",
      description:
        "Real-time dashboards, predictive insights, and comprehensive reporting for data-driven decisions.",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      icon: Cog6ToothIcon,
      title: "Easy Integration",
      description:
        "RESTful APIs, webhooks, and pre-built integrations with popular educational tools.",
      gradient: "from-red-500 to-pink-500",
    },
    {
      icon: DevicePhoneMobileIcon,
      title: "Mobile First",
      description:
        "Responsive design with native mobile apps for iOS and Android platforms.",
      gradient: "from-teal-500 to-blue-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="features"
      className="section-padding bg-gradient-to-br from-violet-50 via-white to-cyan-50 relative overflow-hidden"
    >
      {/* Animated Background Elements - Enhanced */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-96 h-96 bg-violet-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 left-[15%] w-4 h-4 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full opacity-40"
        />
        <motion.div
          animate={{
            y: [0, 40, 0],
            x: [0, -20, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-40 right-[20%] w-3 h-3 bg-gradient-to-r from-accent-400 to-purple-400 rounded-full opacity-30"
        />
        <motion.div
          animate={{
            y: [0, -25, 0],
            x: [0, 25, 0],
            rotate: [0, 90, 180],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-32 left-[10%] w-5 h-5 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-30"
        />
        <motion.div
          animate={{
            y: [0, 35, 0],
            x: [0, -15, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-[60%] right-[15%] w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-25"
        />
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:48px_48px]"></div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-gradient-to-r from-primary-100 to-accent-100 rounded-full mb-6 border border-primary-200"
          >
            <span className="text-primary-700 font-semibold text-sm tracking-wider">
              ⚡ POWERFUL FEATURES
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Built for
            <span className="block bg-gradient-to-r from-primary-600 via-accent-600 to-purple-600 bg-clip-text text-transparent">
              Modern Education
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience cutting-edge technology designed specifically for
            educational excellence
          </p>
        </motion.div>

        {/* Features Grid - New Design */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 h-full hover:bg-white hover:shadow-2xl hover:border-primary-300 transition-all duration-300">
                {/* Gradient Border Effect */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300`}
                ></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6">
                    <div
                      className={`inline-flex p-4 bg-gradient-to-br ${feature.gradient} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Arrow Icon */}
                  <div className="mt-6 flex items-center text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-semibold mr-2">
                      Learn more
                    </span>
                    <svg
                      className="w-4 h-4 group-hover:translate-x-2 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Stats/CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-8 bg-white/80 backdrop-blur-lg border border-gray-200 rounded-2xl px-8 py-6 shadow-xl">
            <div>
              <div className="text-3xl font-bold text-gray-900">500+</div>
              <div className="text-sm text-gray-600">Institutions</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div>
              <div className="text-3xl font-bold text-gray-900">99.9%</div>
              <div className="text-sm text-gray-600">Uptime</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div>
              <div className="text-3xl font-bold text-gray-900">24/7</div>
              <div className="text-sm text-gray-600">Support</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
