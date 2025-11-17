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
      icon: CloudIcon,
      title: "Cloud-Native Architecture",
      description:
        "Scalable, resilient cloud infrastructure with 99.9% uptime guarantee and automatic scaling.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: ShieldCheckIcon,
      title: "Enterprise Security",
      description:
        "SOC 2 compliant with end-to-end encryption, RBAC, and comprehensive audit logging.",
      gradient: "from-green-500 to-teal-500",
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
    {
      icon: GlobeAltIcon,
      title: "Multi-Tenant SaaS",
      description:
        "Schema-per-tenant architecture ensuring complete data isolation and customization.",
      gradient: "from-cyan-500 to-blue-500",
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
    <section id="features" className="section-padding bg-secondary-50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-secondary-900 mb-4">
            Powerful Features for
            <span className="gradient-text"> Modern Education</span>
          </h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            Built with cutting-edge technology and educational expertise, Oryne
            delivers everything your institution needs to thrive in the digital
            age.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              className="floating-card bg-white p-6 rounded-2xl shadow-lg border border-gray-100 group relative overflow-hidden"
            >
              {/* Background Gradient Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              ></div>

              {/* Icon */}
              <div
                className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-secondary-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect Border */}
              <div
                className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${feature.gradient} group-hover:w-full transition-all duration-300`}
              ></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-secondary-600 mb-6">
            Ready to experience the future of educational management?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary text-lg px-8 py-4"
          >
            Explore All Features
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
