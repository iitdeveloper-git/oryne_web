"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  AcademicCapIcon,
  BuildingLibraryIcon,
  BuildingOffice2Icon,
  BeakerIcon,
} from "@heroicons/react/24/outline";

const UseCases = () => {
  const useCases = [
    {
      icon: AcademicCapIcon,
      title: "K-12 Schools",
      description: "Streamline operations from admissions to alumni management",
      features: [
        "Student attendance & grading",
        "Parent-teacher communication",
        "Bus tracking & safety",
        "Canteen & meal management",
      ],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      stats: "500+ Schools",
    },
    {
      icon: BuildingLibraryIcon,
      title: "Universities & Colleges",
      description: "Comprehensive campus management for higher education",
      features: [
        "Course & semester management",
        "Research & publications",
        "Hostel & accommodation",
        "Library & digital resources",
      ],
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      stats: "200+ Colleges",
    },
    {
      icon: BuildingOffice2Icon,
      title: "Training Institutes",
      description: "Efficient management for coaching and training centers",
      features: [
        "Batch & schedule management",
        "Test series & assessments",
        "Performance analytics",
        "Certificate generation",
      ],
      color: "from-green-500 to-teal-500",
      bgColor: "bg-green-50",
      stats: "300+ Institutes",
    },
    {
      icon: BeakerIcon,
      title: "Research Centers",
      description: "Advanced tools for research and development institutions",
      features: [
        "Project management",
        "Lab equipment tracking",
        "Research collaboration",
        "Grant & funding management",
      ],
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      stats: "100+ Centers",
    },
  ];

  return (
    <section className="pt-8 pb-16 md:pt-12 md:pb-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-semibold mb-4"
          >
            Real-World Applications
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Perfect for Every{" "}
            <span className="gradient-text">Educational Setting</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Trusted by institutions worldwide, tailored for your specific needs
          </p>
        </motion.div>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              className="group relative"
              style={{ perspective: "1000px" }}
            >
              <div
                className={`relative ${useCase.bgColor} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 overflow-hidden`}
              >
                {/* Animated background gradient on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${useCase.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Floating particles effect */}
                <motion.div
                  className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-white/50 to-transparent rounded-full blur-2xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                />

                {/* Icon with rotation animation */}
                <motion.div
                  className="relative mb-6"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${useCase.color} flex items-center justify-center shadow-lg`}
                  >
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold text-secondary-900">
                      {useCase.title}
                    </h3>
                    <motion.span
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.15 + 0.3 }}
                      className={`text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${useCase.color} text-white`}
                    >
                      {useCase.stats}
                    </motion.span>
                  </div>

                  <p className="text-secondary-600 mb-6">
                    {useCase.description}
                  </p>

                  {/* Features list with stagger animation */}
                  <ul className="space-y-3">
                    {useCase.features.map((feature, fIndex) => (
                      <motion.li
                        key={fIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: index * 0.15 + fIndex * 0.1,
                          duration: 0.5,
                        }}
                        className="flex items-center text-secondary-700"
                      >
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 90 }}
                          transition={{ duration: 0.3 }}
                          className={`w-5 h-5 rounded-full bg-gradient-to-br ${useCase.color} flex items-center justify-center mr-3 flex-shrink-0`}
                        >
                          <svg
                            className="w-3 h-3 text-white"
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
                        <span className="text-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Hover arrow */}
                <motion.div
                  className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: -10 }}
                  whileHover={{ x: 0 }}
                >
                  <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${useCase.color} flex items-center justify-center shadow-lg`}
                  >
                    <svg
                      className="w-5 h-5 text-white"
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
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
