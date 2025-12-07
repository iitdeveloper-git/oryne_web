"use client";

import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LiveChatWidget from "../components/LiveChatWidget";
import {
  RocketLaunchIcon,
  HeartIcon,
  LightBulbIcon,
  UserGroupIcon,
  GlobeAltIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline";

export default function AboutPage() {
  const values = [
    {
      icon: LightBulbIcon,
      title: "Innovation First",
      description: "Constantly pushing boundaries to deliver cutting-edge solutions",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: HeartIcon,
      title: "Student-Centric",
      description: "Every decision we make puts students' success at the forefront",
      gradient: "from-red-500 to-pink-500",
    },
    {
      icon: UserGroupIcon,
      title: "Collaboration",
      description: "Working together with educators to build better solutions",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: TrophyIcon,
      title: "Excellence",
      description: "Committed to delivering the highest quality in everything we do",
      gradient: "from-purple-500 to-indigo-500",
    },
  ];

  const stats = [
    { value: "500+", label: "Institutions Served" },
    { value: "1M+", label: "Active Users" },
    { value: "50+", label: "Countries" },
    { value: "99.9%", label: "Uptime" },
  ];

  return (
    <div className="relative overflow-x-hidden">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-accent-50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-20 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
            <div className="absolute top-40 right-20 w-96 h-96 bg-accent-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          </div>

          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl mb-6"
              >
                <RocketLaunchIcon className="w-10 h-10 text-white" />
              </motion.div>

              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Transforming Education
                <span className="block bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                  One Institution at a Time
                </span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                We believe that every educational institution deserves access to world-class technology 
                that empowers educators, engages students, and streamlines operations.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="section-padding bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          </div>

          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Our Mission
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                To revolutionize educational management by providing an intelligent, 
                integrated platform that adapts to the unique needs of every institution, 
                enabling them to focus on what matters most—delivering exceptional education.
              </p>
              <p className="text-lg text-gray-400">
                Founded in 2020, Oryne has grown from a simple vision to a comprehensive 
                ecosystem trusted by institutions across the globe.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-padding bg-gradient-to-br from-slate-50 via-white to-blue-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  <div className={`inline-flex p-4 bg-gradient-to-br ${value.gradient} rounded-xl mb-4`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section-padding bg-gradient-to-br from-primary-600 via-accent-600 to-purple-600 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:48px_48px]"></div>
          </div>

          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Our Impact
              </h2>
              <p className="text-xl text-white/80">
                Making a difference in education worldwide
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                  className="text-center"
                >
                  <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-lg text-white/80">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Reach */}
        <section className="section-padding bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          </div>

          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl mb-8">
                <GlobeAltIcon className="w-10 h-10 text-white" />
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Global Reach, Local Touch
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                With presence in over 50 countries, we understand that every educational 
                system is unique. Our platform adapts to local requirements while 
                maintaining global standards of excellence. From small coaching centers 
                to large universities, we're proud to serve institutions of all sizes.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Live Chat Widget */}
      <LiveChatWidget />
    </div>
  );
}
