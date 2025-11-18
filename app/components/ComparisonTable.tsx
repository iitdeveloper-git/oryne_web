"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ComparisonTable = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">(
    "annual"
  );

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small schools",
      monthlyPrice: 299,
      annualPrice: 2990,
      popular: false,
      color: "from-gray-500 to-gray-600",
      features: [
        { name: "Up to 500 students", included: true },
        { name: "3 Core Modules", included: true },
        { name: "Basic Analytics", included: true },
        { name: "Email Support", included: true },
        { name: "Mobile App Access", included: true },
        { name: "Advanced Analytics", included: false },
        { name: "Custom Integrations", included: false },
        { name: "Dedicated Support", included: false },
        { name: "White Label", included: false },
      ],
    },
    {
      name: "Professional",
      description: "Most popular choice",
      monthlyPrice: 699,
      annualPrice: 6990,
      popular: true,
      color: "from-blue-500 to-purple-600",
      features: [
        { name: "Up to 2,000 students", included: true },
        { name: "All 8 Modules", included: true },
        { name: "Advanced Analytics", included: true },
        { name: "Priority Support", included: true },
        { name: "Mobile App Access", included: true },
        { name: "Custom Integrations", included: true },
        { name: "API Access", included: true },
        { name: "Dedicated Support", included: false },
        { name: "White Label", included: false },
      ],
    },
    {
      name: "Enterprise",
      description: "For large institutions",
      monthlyPrice: 1499,
      annualPrice: 14990,
      popular: false,
      color: "from-purple-500 to-pink-600",
      features: [
        { name: "Unlimited students", included: true },
        { name: "All 8 Modules", included: true },
        { name: "Advanced Analytics", included: true },
        { name: "24/7 Support", included: true },
        { name: "Mobile App Access", included: true },
        { name: "Custom Integrations", included: true },
        { name: "API Access", included: true },
        { name: "Dedicated Support", included: true },
        { name: "White Label", included: true },
      ],
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Animated dots background */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, #3b82f6 1px, transparent 1px)",
            backgroundSize: "30px 30px",
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
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0, rotate: 360 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
            className="inline-block mb-4"
          >
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-4xl shadow-2xl">
              💎
            </div>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Choose Your <span className="gradient-text">Perfect Plan</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto mb-8">
            Transparent pricing that scales with your institution
          </p>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-4 bg-white rounded-full p-2 shadow-lg border border-gray-200"
          >
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                billingCycle === "monthly"
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("annual")}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 relative ${
                billingCycle === "annual"
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Annual
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                Save 17%
              </span>
            </button>
          </motion.div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, planIndex) => (
            <motion.div
              key={planIndex}
              initial={{ opacity: 0, x: -100, rotateY: -90 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: planIndex * 0.2,
                type: "spring",
                stiffness: 80,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              className={`relative bg-white rounded-3xl p-8 shadow-xl border-2 ${
                plan.popular ? "border-blue-500" : "border-gray-200"
              }`}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: planIndex * 0.2 + 0.4, type: "spring" }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                >
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    ⭐ MOST POPULAR
                  </div>
                </motion.div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: planIndex * 0.2 + 0.3, type: "spring" }}
                  className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center text-3xl shadow-lg`}
                >
                  {planIndex === 0 ? "🚀" : planIndex === 1 ? "⚡" : "👑"}
                </motion.div>
                <h3 className="text-2xl font-bold text-secondary-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-secondary-600 mb-6">{plan.description}</p>

                {/* Price with animation */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={billingCycle}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-5xl font-bold text-secondary-900">
                      $
                      {billingCycle === "monthly"
                        ? plan.monthlyPrice
                        : Math.round(plan.annualPrice / 12)}
                      <span className="text-xl text-secondary-600">/mo</span>
                    </div>
                    {billingCycle === "annual" && (
                      <p className="text-sm text-secondary-500 mt-2">
                        Billed annually (${plan.annualPrice}/year)
                      </p>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Features List with staggered checkmarks */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <motion.div
                    key={featureIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: planIndex * 0.2 + featureIndex * 0.05,
                    }}
                    className="flex items-center gap-3"
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: planIndex * 0.2 + featureIndex * 0.05 + 0.1,
                        type: "spring",
                      }}
                      className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                        feature.included
                          ? "bg-green-100 text-green-600"
                          : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      {feature.included ? "✓" : "✗"}
                    </motion.div>
                    <span
                      className={`text-sm ${
                        feature.included
                          ? "text-secondary-700"
                          : "text-secondary-400"
                      }`}
                    >
                      {feature.name}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-4 rounded-xl font-bold transition-all duration-300 ${
                  plan.popular
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg hover:shadow-xl"
                    : "bg-gray-100 text-secondary-900 hover:bg-gray-200"
                }`}
              >
                Get Started →
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Feature Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl shadow-2xl p-8 overflow-hidden"
        >
          <h3 className="text-2xl font-bold text-secondary-900 mb-6 text-center">
            Detailed Feature Comparison
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 font-bold text-secondary-900">
                    Feature
                  </th>
                  {plans.map((plan, index) => (
                    <th key={index} className="text-center py-4 px-4">
                      <div className="font-bold text-secondary-900">
                        {plan.name}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {plans[0].features.map((_, featureIndex) => (
                  <motion.tr
                    key={featureIndex}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: featureIndex * 0.05,
                    }}
                    className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    <td className="py-4 px-4 text-secondary-700">
                      {plans[0].features[featureIndex].name}
                    </td>
                    {plans.map((plan, planIndex) => (
                      <td key={planIndex} className="text-center py-4 px-4">
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            delay: featureIndex * 0.05 + planIndex * 0.05,
                            type: "spring",
                          }}
                          className="inline-block"
                        >
                          {plan.features[featureIndex].included ? (
                            <span className="text-green-600 text-xl">✓</span>
                          ) : (
                            <span className="text-gray-300 text-xl">✗</span>
                          )}
                        </motion.div>
                      </td>
                    ))}
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-secondary-600 mb-4">
            Need a custom plan for your institution?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary"
          >
            Contact Sales Team →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonTable;
