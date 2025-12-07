"use client";

import React, { useState, useEffect } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import {
  AcademicCapIcon,
  BookOpenIcon,
  BuildingLibraryIcon,
  UserGroupIcon,
  ChartBarIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import ContactFormModal from "./ContactFormModal";

const Hero = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [currentInstitution, setCurrentInstitution] = useState(0);
  const [mounted, setMounted] = useState(false);

  const institutions = [
    "Schools",
    "Colleges",
    "Universities",
    "Coaching Institutes",
    "Training Centers",
  ];

  const solutions = [
    {
      icon: AcademicCapIcon,
      title: "Student Management",
      description: "Complete student lifecycle",
    },
    {
      icon: BookOpenIcon,
      title: "Learning Management",
      description: "Digital classrooms & content",
    },
    {
      icon: UserGroupIcon,
      title: "Faculty Portal",
      description: "Empower your educators",
    },
    {
      icon: ChartBarIcon,
      title: "Analytics & Reports",
      description: "Data-driven insights",
    },
    {
      icon: ClockIcon,
      title: "Attendance System",
      description: "Automated tracking",
    },
    {
      icon: BuildingLibraryIcon,
      title: "Administration",
      description: "Streamline operations",
    },
  ];

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setCurrentInstitution((prev) => (prev + 1) % institutions.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 md:pt-40 pb-16 md:pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"></div>

      {/* Main Content - NO ANIMATIONS, DIRECT VISIBLE */}
      <div className="container-custom relative z-10 px-4 sm:px-6 md:px-12 opacity-100">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-primary-300/50 text-sm font-semibold shadow-sm">
            <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-2"></span>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI-Powered Educational Platform
            </span>
          </div>

          {/* Main Heading - ONE PLATFORM INFINITE POSSIBILITIES */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-primary-600 via-accent-600 to-secondary-600 bg-clip-text text-transparent">
              ONE PLATFORM
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent inline-block">
              INFINITE POSSIBILITIES
            </span>
          </h1>

          {/* Rotating Institution Types - Only after mount to avoid hydration error */}
          <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 min-h-[4rem] flex items-center justify-center">
            <span className="mr-3">Perfect for</span>
            {mounted ? (
              <span
                key={currentInstitution}
                className="bg-gradient-to-r from-primary-600 via-accent-500 to-secondary-600 bg-clip-text text-transparent font-bold transition-opacity duration-300"
              >
                {institutions[currentInstitution]}
              </span>
            ) : (
              <span className="bg-gradient-to-r from-primary-600 via-accent-500 to-secondary-600 bg-clip-text text-transparent font-bold">
                Schools
              </span>
            )}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              Schedule a Demo
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#features"
              className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-primary-600 text-primary-600 rounded-xl font-semibold text-lg hover:bg-primary-50 transition-all duration-300 hover:scale-105 text-center"
            >
              Explore Features
            </a>
          </div>

          {/* Solutions Grid - 6 Cards */}
          <div className="pt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {solutions.map((solution) => {
              const IconComponent = solution.icon;
              return (
                <div
                  key={solution.title}
                  className="bg-white/80 backdrop-blur-sm rounded-lg p-4 hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-200/50"
                >
                  <IconComponent className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                  <h3 className="text-sm font-semibold text-gray-900 text-center mb-1">
                    {solution.title}
                  </h3>
                  <p className="text-xs text-gray-600 text-center">
                    {solution.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
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
