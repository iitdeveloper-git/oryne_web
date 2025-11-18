"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const ROICalculator = () => {
  const [studentCount, setStudentCount] = useState(1000);
  const [currentCosts, setCurrentCosts] = useState(50000);
  const [showResults, setShowResults] = useState(false);

  // Calculate savings
  const oryneCost = studentCount * 12 * 12; // $12 per student per month
  const savings = currentCosts - oryneCost;
  const savingsPercent = ((savings / currentCosts) * 100).toFixed(0);
  const timeReclaimed = Math.round(studentCount * 2); // 2 hours per student annually

  const handleCalculate = () => {
    setShowResults(true);
  };

  const benefits = [
    {
      icon: "💰",
      label: "Annual Savings",
      value: `$${savings.toLocaleString()}`,
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: "📊",
      label: "Cost Reduction",
      value: `${savingsPercent}%`,
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: "⏰",
      label: "Time Saved",
      value: `${timeReclaimed.toLocaleString()} hrs`,
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: "📈",
      label: "ROI Period",
      value: "3 months",
      color: "from-orange-500 to-red-600",
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Animated money pattern background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='15' y='40' font-size='30'%3E💰%3C/text%3E%3C/svg%3E")`,
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
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0, rotateY: 180 }}
            whileInView={{ scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring", stiffness: 80 }}
            className="inline-block mb-4"
          >
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center text-4xl shadow-2xl">
              📊
            </div>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Calculate Your <span className="gradient-text">ROI</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            See how much you can save by switching to Oryne
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Calculator Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200"
          >
            <h3 className="text-2xl font-bold text-secondary-900 mb-6">
              Your Institution Details
            </h3>

            {/* Student Count Input */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-secondary-700 mb-3">
                Number of Students
              </label>
              <motion.div whileFocus={{ scale: 1.02 }} className="relative">
                <input
                  type="range"
                  min="100"
                  max="10000"
                  step="100"
                  value={studentCount}
                  onChange={(e) => setStudentCount(Number(e.target.value))}
                  className="w-full h-3 bg-gradient-to-r from-blue-200 to-purple-200 rounded-lg appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #3b82f6 0%, #8b5cf6 ${
                      (studentCount / 10000) * 100
                    }%, #e5e7eb ${
                      (studentCount / 10000) * 100
                    }%, #e5e7eb 100%)`,
                  }}
                />
              </motion.div>
              <motion.div
                key={studentCount}
                initial={{ scale: 1.5, color: "#3b82f6" }}
                animate={{ scale: 1, color: "#1f2937" }}
                transition={{ duration: 0.3 }}
                className="text-center mt-3 text-3xl font-bold text-secondary-900"
              >
                {studentCount.toLocaleString()} students
              </motion.div>
            </div>

            {/* Current Annual Costs */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-secondary-700 mb-3">
                Current Annual Software Costs ($)
              </label>
              <motion.div whileFocus={{ scale: 1.02 }} className="relative">
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-2xl text-secondary-400">
                  $
                </span>
                <input
                  type="number"
                  min="10000"
                  max="500000"
                  step="1000"
                  value={currentCosts}
                  onChange={(e) => setCurrentCosts(Number(e.target.value))}
                  className="w-full pl-12 pr-4 py-4 text-2xl font-bold border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                />
              </motion.div>
              <p className="text-sm text-secondary-500 mt-2">
                Include all current software licensing costs
              </p>
            </div>

            {/* Calculate Button */}
            <motion.button
              onClick={handleCalculate}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-5 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              Calculate My Savings 🚀
            </motion.button>
          </motion.div>

          {/* Results Display */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {showResults ? (
              <>
                {/* Animated Result Cards */}
                <div className="grid grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0, rotate: -180 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 150,
                      }}
                      whileHover={{
                        scale: 1.05,
                        rotate: 5,
                        transition: { duration: 0.3 },
                      }}
                      className={`bg-gradient-to-br ${benefit.color} rounded-2xl p-6 text-white shadow-xl`}
                    >
                      <motion.div
                        animate={{
                          rotate: [0, 10, -10, 0],
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.2,
                        }}
                        className="text-4xl mb-3"
                      >
                        {benefit.icon}
                      </motion.div>
                      <div className="text-sm opacity-90 mb-1">
                        {benefit.label}
                      </div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                        className="text-3xl font-bold"
                      >
                        {benefit.value}
                      </motion.div>
                    </motion.div>
                  ))}
                </div>

                {/* Savings Breakdown */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200"
                >
                  <h4 className="text-xl font-bold text-secondary-900 mb-6">
                    Cost Breakdown
                  </h4>

                  {/* Current Costs Bar */}
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold text-secondary-700">
                        Current Costs
                      </span>
                      <span className="text-lg font-bold text-red-600">
                        ${currentCosts.toLocaleString()}
                      </span>
                    </div>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-4 bg-gradient-to-r from-red-400 to-red-600 rounded-full"
                    />
                  </div>

                  {/* Oryne Costs Bar */}
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold text-secondary-700">
                        Oryne Costs
                      </span>
                      <span className="text-lg font-bold text-blue-600">
                        ${oryneCost.toLocaleString()}
                      </span>
                    </div>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{
                        width: `${(oryneCost / currentCosts) * 100}%`,
                      }}
                      transition={{ duration: 1, delay: 0.7 }}
                      className="h-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
                    />
                  </div>

                  {/* Savings Highlight */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-green-700 font-semibold mb-1">
                          Your Total Savings
                        </div>
                        <div className="text-4xl font-bold text-green-600">
                          ${savings.toLocaleString()}
                        </div>
                        <div className="text-sm text-green-600 mt-1">
                          per year
                        </div>
                      </div>
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                          rotate: [0, 10, -10, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                        className="text-6xl"
                      >
                        💰
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Additional Benefits */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-xl"
                >
                  <h4 className="text-xl font-bold mb-4">
                    Beyond Cost Savings
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "Reduced IT maintenance overhead",
                      "Increased operational efficiency",
                      "Better student & parent satisfaction",
                      "Real-time data insights & analytics",
                      "Seamless integration with existing tools",
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.2 + index * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <span className="text-xl">✓</span>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.5 }}
                  className="text-center"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary text-lg px-8 py-4"
                  >
                    Schedule a Demo →
                  </motion.button>
                </motion.div>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12 text-center border-2 border-dashed border-blue-300"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                  className="text-8xl mb-6"
                >
                  📊
                </motion.div>
                <h3 className="text-2xl font-bold text-secondary-900 mb-3">
                  Ready to Calculate?
                </h3>
                <p className="text-secondary-600">
                  Fill in your details and click calculate to see your potential
                  savings
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
