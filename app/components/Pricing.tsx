"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: 99,
      period: "month",
      description: "Perfect for small educational institutions",
      features: [
        "Up to 500 students",
        "Basic ERP modules",
        "LMS with core features",
        "Email support",
        "5GB storage",
        "Basic reporting",
      ],
      notIncluded: [
        "AI-powered analytics",
        "Advanced integrations",
        "Custom branding",
        "Priority support",
      ],
      popular: false,
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Professional",
      price: 299,
      period: "month",
      description: "Ideal for medium-sized institutions",
      features: [
        "Up to 2,000 students",
        "All ERP modules",
        "Full LMS features",
        "E-Store integration",
        "Priority support",
        "50GB storage",
        "Advanced reporting",
        "AI-powered insights",
        "Custom branding",
      ],
      notIncluded: ["Advanced API access", "White-label solution"],
      popular: true,
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Enterprise",
      price: 599,
      period: "month",
      description: "For large institutions and networks",
      features: [
        "Unlimited students",
        "All modules included",
        "Complete platform access",
        "Dedicated support",
        "Unlimited storage",
        "Advanced analytics",
        "Custom integrations",
        "White-label solution",
        "Multi-tenant support",
        "SLA guarantee",
      ],
      notIncluded: [],
      popular: false,
      color: "from-green-500 to-teal-500",
    },
  ];

  return (
    <section id="pricing" className="section-padding bg-secondary-50">
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
            Simple, Transparent
            <span className="gradient-text"> Pricing</span>
          </h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            Choose the perfect plan for your institution. All plans include core
            features with no hidden fees. Get started today!
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className={`relative bg-white rounded-2xl p-8 shadow-lg border ${
                plan.popular
                  ? "border-primary-200 ring-2 ring-primary-200"
                  : "border-gray-200"
              } overflow-hidden group`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Background Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              ></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Plan Name */}
                <h3 className="text-2xl font-bold text-secondary-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-secondary-600 mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-secondary-900">
                      ${plan.price}
                    </span>
                    <span className="text-secondary-600">/{plan.period}</span>
                  </div>
                  <p className="text-sm text-secondary-500 mt-1">
                    per institution
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 bg-gradient-to-r ${plan.color} rounded-full flex items-center justify-center flex-shrink-0`}
                      >
                        <CheckIcon className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-secondary-700">{feature}</span>
                    </div>
                  ))}

                  {plan.notIncluded.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 opacity-50"
                    >
                      <div className="w-5 h-5 bg-secondary-200 rounded-full flex items-center justify-center flex-shrink-0">
                        <XMarkIcon className="w-3 h-3 text-secondary-500" />
                      </div>
                      <span className="text-secondary-500">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? `bg-gradient-to-r ${plan.color} text-white shadow-lg hover:shadow-xl`
                      : `border-2 border-secondary-300 text-secondary-700 hover:border-primary-400 hover:text-primary-600`
                  }`}
                >
                  Choose Plan
                </motion.button>
              </div>

              {/* Hover Effect Line */}
              <div
                className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${plan.color} group-hover:w-full transition-all duration-300`}
              ></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-secondary-600 mb-4">
            All plans include • No setup fees • Cancel anytime
          </p>
          <p className="text-sm text-secondary-500">
            Need a custom solution?{" "}
            <a
              href="#contact"
              className="text-primary-600 hover:text-primary-700 font-semibold"
            >
              Contact our sales team
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
