"use client";

import React from "react";
import { motion } from "framer-motion";

const TeamAbout = () => {
  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "CEO & Co-Founder",
      image: "👩‍💼",
      bio: "Former EdTech leader at Google with 15+ years experience",
      social: { linkedin: "#", twitter: "#" },
    },
    {
      name: "Michael Rodriguez",
      role: "CTO & Co-Founder",
      image: "👨‍💻",
      bio: "Ex-Microsoft engineer, built systems for 10M+ users",
      social: { linkedin: "#", twitter: "#" },
    },
    {
      name: "Dr. Priya Sharma",
      role: "Chief Product Officer",
      image: "👩‍🔬",
      bio: "PhD in Educational Technology from MIT",
      social: { linkedin: "#", twitter: "#" },
    },
    {
      name: "James Wilson",
      role: "VP of Engineering",
      image: "👨‍🔧",
      bio: "Led engineering teams at Amazon and Salesforce",
      social: { linkedin: "#", twitter: "#" },
    },
  ];

  const timeline = [
    {
      year: "2020",
      title: "The Beginning",
      description: "Founded with a mission to transform education management",
      icon: "🚀",
    },
    {
      year: "2021",
      title: "First 100 Schools",
      description: "Reached our first milestone serving institutions globally",
      icon: "🎓",
    },
    {
      year: "2022",
      title: "Major Funding",
      description: "Raised $50M Series B to accelerate growth",
      icon: "💰",
    },
    {
      year: "2023",
      title: "Global Expansion",
      description: "Expanded to 50+ countries with 500K+ active users",
      icon: "🌍",
    },
    {
      year: "2024",
      title: "AI Integration",
      description: "Launched ORYNE BRAIN with advanced AI capabilities",
      icon: "🤖",
    },
    {
      year: "2025",
      title: "Industry Leader",
      description: "Recognized as #1 education platform globally",
      icon: "🏆",
    },
  ];

  const values = [
    {
      title: "Innovation First",
      description: "Constantly pushing boundaries in educational technology",
      icon: "💡",
      color: "from-yellow-400 to-orange-500",
    },
    {
      title: "Student-Centric",
      description: "Every decision focuses on improving student outcomes",
      icon: "🎯",
      color: "from-blue-400 to-cyan-500",
    },
    {
      title: "Data Security",
      description: "Protecting privacy with enterprise-grade security",
      icon: "🔒",
      color: "from-green-400 to-emerald-500",
    },
    {
      title: "Global Impact",
      description: "Making quality education accessible to everyone",
      icon: "🌟",
      color: "from-purple-400 to-pink-500",
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 10 L50 30 L30 50 L10 30 Z' fill='%23000000' fill-opacity='0.4'/%3E%3C/svg%3E")`,
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
            initial={{ scale: 0, rotate: 360 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, type: "spring", stiffness: 100 }}
            className="inline-block mb-4"
          >
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center text-4xl shadow-2xl">
              👥
            </div>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Meet Our <span className="gradient-text">Team</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Passionate educators and technologists transforming education
            worldwide
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, rotateY: -90 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                type: "spring",
              }}
              className="group perspective-1000"
            >
              <motion.div
                whileHover={{ rotateY: 180 }}
                transition={{ duration: 0.6 }}
                className="relative preserve-3d"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Front of card */}
                <div className="backface-hidden bg-white rounded-2xl p-6 shadow-xl border border-gray-200">
                  <motion.div
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                    className="text-8xl mb-4 text-center"
                  >
                    {member.image}
                  </motion.div>
                  <h3 className="text-xl font-bold text-secondary-900 text-center mb-2">
                    {member.name}
                  </h3>
                  <p className="text-sm text-blue-600 font-semibold text-center mb-4">
                    {member.role}
                  </p>
                  <p className="text-sm text-secondary-600 text-center">
                    Hover to see more →
                  </p>
                </div>

                {/* Back of card */}
                <div
                  className="absolute inset-0 backface-hidden bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-6 shadow-xl text-white"
                  style={{ transform: "rotateY(180deg)" }}
                >
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                      <p className="text-sm text-blue-100 mb-4">
                        {member.role}
                      </p>
                      <p className="text-sm mb-4">{member.bio}</p>
                    </div>
                    <div className="flex gap-3">
                      <motion.a
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        href={member.social.linkedin}
                        className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                      >
                        <span className="text-xl">💼</span>
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        href={member.social.twitter}
                        className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                      >
                        <span className="text-xl">🐦</span>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Company Story Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-secondary-900 text-center mb-12">
            Our <span className="gradient-text">Journey</span>
          </h3>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 via-purple-200 to-pink-200"></div>

            {timeline.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Content */}
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`w-5/12 ${
                    index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"
                  }`}
                >
                  <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-200">
                    <motion.div
                      animate={{
                        rotate: [0, 10, -10, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                      className="text-4xl mb-3"
                    >
                      {event.icon}
                    </motion.div>
                    <div className="text-2xl font-bold text-blue-600 mb-2">
                      {event.year}
                    </div>
                    <h4 className="text-xl font-bold text-secondary-900 mb-2">
                      {event.title}
                    </h4>
                    <p className="text-secondary-600">{event.description}</p>
                  </div>
                </motion.div>

                {/* Center dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1 + 0.3,
                    type: "spring",
                  }}
                  className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full border-4 border-white shadow-lg z-10"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Company Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-secondary-900 text-center mb-12">
            Our <span className="gradient-text">Values</span>
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
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
                <div
                  className={`bg-gradient-to-br ${value.color} rounded-2xl p-8 text-white shadow-xl relative overflow-hidden`}
                >
                  {/* Animated background circle */}
                  <motion.div
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 0.1, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                    className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-3xl"
                  />

                  <motion.div
                    animate={{
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                    className="text-6xl mb-4 relative z-10"
                  >
                    {value.icon}
                  </motion.div>
                  <h4 className="text-xl font-bold mb-2 relative z-10">
                    {value.title}
                  </h4>
                  <p className="text-sm opacity-90 relative z-10">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Join Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden">
            {/* Animated background elements */}
            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"
            />

            <div className="relative z-10">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="text-7xl mb-6"
              >
                🚀
              </motion.div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Join Our Mission
              </h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals who share our
                passion for transforming education
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-2xl transition-all"
              >
                View Open Positions →
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
};

export default TeamAbout;
