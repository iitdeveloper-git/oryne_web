"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const IntegrationPartners = () => {
  const partners: { name: string; logo: string; category: string }[] = [];

  const integrationCategories = [
    {
      title: "Payment Gateways",
      description: "Seamless payment integration",
      icon: "💳",
      count: "15+",
    },
    {
      title: "Communication Tools",
      description: "Connect with your team",
      icon: "📱",
      count: "20+",
    },
    {
      title: "Cloud Storage",
      description: "Secure file management",
      icon: "☁️",
      count: "10+",
    },
    {
      title: "Analytics",
      description: "Data-driven insights",
      icon: "📊",
      count: "12+",
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

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
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="inline-block mb-4"
          >
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-3xl shadow-lg">
              🔌
            </div>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Seamless <span className="gradient-text">Integrations</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Connect with your favorite tools and services
          </p>
        </motion.div>

        {/* Integration Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {integrationCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                scale: 1.05,
                rotateY: 10,
                transition: { duration: 0.3 },
              }}
              className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200"
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.div
                className="text-4xl mb-3"
                animate={{
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
              >
                {category.icon}
              </motion.div>
              <h3 className="font-bold text-secondary-900 mb-1">
                {category.title}
              </h3>
              <p className="text-sm text-secondary-600 mb-2">
                {category.description}
              </p>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="inline-block text-xs font-semibold px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full"
              >
                {category.count}
              </motion.span>
            </motion.div>
          ))}
        </div>

        {/* Partner Logos - Floating Animation */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                animate={{
                  y: [0, -10, 0],
                }}
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  type: "spring",
                  y: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2,
                  },
                  scale: { duration: 0.3 },
                  rotate: { duration: 0.3 },
                }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group cursor-pointer"
              >
                <div className="text-center">
                  <motion.div
                    className="text-5xl mb-4"
                    whileHover={{
                      scale: 1.2,
                      rotate: 360,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {partner.logo}
                  </motion.div>
                  <h4 className="font-bold text-secondary-900 mb-1 group-hover:text-primary-600 transition-colors">
                    {partner.name}
                  </h4>
                  <p className="text-sm text-secondary-500">
                    {partner.category}
                  </p>
                </div>

                {/* Hover glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400/0 to-purple-400/0 group-hover:from-blue-400/10 group-hover:to-purple-400/10 transition-all duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationPartners;
