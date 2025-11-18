"use client";

import React from "react";
import { motion } from "framer-motion";

const SecurityCompliance = () => {
  const certifications = [
    {
      title: "SOC 2 Type II",
      description: "Security Organization Control",
      icon: "🛡️",
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "GDPR Compliant",
      description: "Data Protection Regulation",
      icon: "🇪🇺",
      color: "from-green-500 to-green-600",
    },
    {
      title: "ISO 27001",
      description: "Information Security Standard",
      icon: "✓",
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "FERPA",
      description: "Educational Privacy Rights",
      icon: "🎓",
      color: "from-indigo-500 to-indigo-600",
    },
  ];

  const securityFeatures = [
    {
      title: "End-to-End Encryption",
      description: "256-bit AES encryption for all data",
      icon: "🔐",
      stat: "256-bit",
    },
    {
      title: "Regular Security Audits",
      description: "Third-party penetration testing",
      icon: "🔍",
      stat: "Quarterly",
    },
    {
      title: "Data Backup",
      description: "Automated daily backups with 99.9% uptime",
      icon: "💾",
      stat: "99.9%",
    },
    {
      title: "Access Control",
      description: "Role-based permissions & 2FA",
      icon: "👤",
      stat: "Multi-factor",
    },
  ];

  const trustIndicators = [
    { label: "Uptime", value: "99.9%", icon: "⚡" },
    { label: "Data Centers", value: "15+", icon: "🌍" },
    { label: "Users Protected", value: "500K+", icon: "👥" },
    { label: "Countries", value: "50+", icon: "🗺️" },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Animated shield pattern background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 10 L40 20 L40 35 L30 45 L20 35 L20 20 Z' fill='%23000000' fill-opacity='0.4'/%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        ></div>
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
          <motion.div
            initial={{ scale: 0, rotateY: -180 }}
            whileInView={{ scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring", stiffness: 80 }}
            className="inline-block mb-4"
          >
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center text-4xl shadow-2xl">
              🔒
            </div>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Enterprise-Grade <span className="gradient-text">Security</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Your data is protected by industry-leading security standards
          </p>
        </motion.div>

        {/* Certifications - Stamp Animation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                scale: 1.05,
                rotate: 5,
                transition: { duration: 0.3 },
              }}
              className="relative"
            >
              {/* Badge container */}
              <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 relative overflow-hidden">
                {/* Stamp effect overlay */}
                <motion.div
                  initial={{ opacity: 0, scale: 2 }}
                  whileInView={{ opacity: 0.1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.5, duration: 0.5 }}
                  className={`absolute inset-0 bg-gradient-to-br ${cert.color} rounded-2xl`}
                />

                {/* Verified checkmark */}
                <motion.div
                  initial={{ scale: 0, rotate: -90 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.7, type: "spring" }}
                  className="absolute top-2 right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg"
                >
                  ✓
                </motion.div>

                <div className="relative z-10">
                  <motion.div
                    className="text-5xl mb-3"
                    animate={{
                      rotate: [0, -5, 5, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  >
                    {cert.icon}
                  </motion.div>
                  <h3 className="font-bold text-secondary-900 mb-1 text-lg">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-secondary-600">
                    {cert.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Security Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200"
            >
              <motion.div
                className="text-4xl mb-4"
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                }}
                transition={{ duration: 0.5 }}
              >
                {feature.icon}
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="inline-block px-3 py-1 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-full text-xs font-bold mb-3"
              >
                {feature.stat}
              </motion.div>
              <h4 className="font-bold text-secondary-900 mb-2">
                {feature.title}
              </h4>
              <p className="text-sm text-secondary-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators - Counter Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 shadow-2xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustIndicators.map((indicator, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  type: "spring",
                }}
                className="text-center"
              >
                <motion.div
                  className="text-4xl mb-2"
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                >
                  {indicator.icon}
                </motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1 + 0.3,
                    type: "spring",
                    stiffness: 150,
                  }}
                  className="text-3xl md:text-4xl font-bold text-white mb-1"
                >
                  {indicator.value}
                </motion.div>
                <div className="text-blue-100 text-sm font-medium">
                  {indicator.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Security Documentation CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-secondary-600 mb-4">
            Want to learn more about our security measures?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            Download Security Whitepaper →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default SecurityCompliance;
