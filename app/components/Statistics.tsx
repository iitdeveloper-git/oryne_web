"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  UsersIcon,
  BuildingOfficeIcon,
  GlobeAltIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";
import ContactFormModal from "./ContactFormModal";

// Animated Counter Component with Milestones
const AnimatedCounter = ({
  end,
  suffix = "",
  duration = 2,
  color,
  isDecimal = false,
  milestones = [],
}: {
  end: number;
  suffix?: string;
  duration?: number;
  color: string;
  isDecimal?: boolean;
  milestones?: number[];
}) => {
  const [count, setCount] = useState(0);
  const [showMilestone, setShowMilestone] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number | null = null;
      const startValue = 0;
      const triggeredMilestones = new Set();

      const animate = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const progress = Math.min(
          (currentTime - startTime) / (duration * 1000),
          1
        );

        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = easeOutQuart * (end - startValue) + startValue;

        setCount(currentCount);

        // Check for milestone celebrations
        milestones.forEach((milestone) => {
          if (
            currentCount >= milestone &&
            !triggeredMilestones.has(milestone)
          ) {
            triggeredMilestones.add(milestone);
            setShowMilestone(milestone);
            setTimeout(() => setShowMilestone(null), 800);
          }
        });

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration, milestones]);

  const displayValue = isDecimal
    ? count.toFixed(1)
    : Math.floor(count).toLocaleString();

  return (
    <div className="relative">
      <div
        ref={ref}
        className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent mb-2`}
      >
        {displayValue}
        {suffix}
      </div>
      {/* Milestone Celebration */}
      {showMilestone !== null && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1.5, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <div className="text-6xl">🎉</div>
        </motion.div>
      )}
    </div>
  );
};

const Statistics = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const stats = [
    {
      icon: UsersIcon,
      value: 500,
      suffix: "K+",
      label: "Active Users",
      description: "Students, teachers, and staff using Oryne daily",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: BuildingOfficeIcon,
      value: 1200,
      suffix: "+",
      label: "Institutions",
      description: "Educational institutions trust Oryne worldwide",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: GlobeAltIcon,
      value: 45,
      suffix: "+",
      label: "Countries",
      description: "Oryne serves educational institutions globally",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: ChartBarIcon,
      value: 99.9,
      suffix: "%",
      label: "Uptime",
      description: "Reliable cloud infrastructure with guaranteed uptime",
      color: "from-yellow-500 to-orange-500",
      isDecimal: true,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="section-padding bg-gradient-to-br from-indigo-50 via-white to-pink-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 -right-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-secondary-900 mb-4">
            Trusted by Educational
            <span className="gradient-text"> Leaders Worldwide</span>
          </h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            Join thousands of educational institutions that have transformed
            their operations with Oryne's comprehensive platform.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="text-center group"
            >
              <div className="relative mb-6">
                {/* Background Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                ></div>

                {/* Icon Container */}
                <div
                  className={`relative w-20 h-20 mx-auto bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  {React.createElement(stat.icon, {
                    className: "w-10 h-10 text-white",
                  })}
                </div>
              </div>

              {/* Counter - Simplified without milestones for performance */}
              <AnimatedCounter
                end={stat.value}
                suffix={stat.suffix}
                duration={2}
                color={stat.color}
                isDecimal={stat.isDecimal}
                milestones={[]}
              />

              {/* Label */}
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                {stat.label}
              </h3>

              {/* Description */}
              <p className="text-secondary-600 text-sm leading-relaxed">
                {stat.description}
              </p>

              {/* Hover Effect Line */}
              <div
                className={`w-0 h-1 bg-gradient-to-r ${stat.color} mx-auto mt-4 group-hover:w-full transition-all duration-300`}
              ></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4">
              Ready to Join the Revolution?
            </h3>
            <p className="text-secondary-600 mb-6 max-w-2xl mx-auto">
              Experience the power of AI-driven educational management. Request
              a demo today and see why institutions worldwide choose Oryne.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsModalOpen(true)}
              className="btn-primary text-lg px-8 py-4"
            >
              Request Demo
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Contact Form Modal */}
      <ContactFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default Statistics;
