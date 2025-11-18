"use client";

import React from "react";
import { motion } from "framer-motion";

const Resources = () => {
  const resources = [
    {
      type: "Case Study",
      title: "How Stanford Reduced Costs by 45%",
      description:
        "Learn how a leading university transformed their operations",
      image: "📚",
      readTime: "8 min read",
      category: "University",
      link: "#",
    },
    {
      type: "Whitepaper",
      title: "The Future of Educational Technology",
      description: "Comprehensive guide to digital transformation in education",
      image: "📄",
      readTime: "15 min read",
      category: "Research",
      link: "#",
    },
    {
      type: "Blog Post",
      title: "10 Ways to Improve Student Engagement",
      description: "Proven strategies for increasing participation",
      image: "✍️",
      readTime: "5 min read",
      category: "Best Practices",
      link: "#",
    },
    {
      type: "Video",
      title: "Platform Demo & Walkthrough",
      description: "See Oryne in action with our comprehensive demo",
      image: "🎥",
      readTime: "12 min watch",
      category: "Tutorial",
      link: "#",
    },
    {
      type: "eBook",
      title: "Digital Campus Transformation Guide",
      description: "Complete roadmap for modernizing your institution",
      image: "📖",
      readTime: "25 min read",
      category: "Guide",
      link: "#",
    },
    {
      type: "Webinar",
      title: "Best Practices in Education Management",
      description: "Live session with industry experts and Q&A",
      image: "🎓",
      readTime: "45 min watch",
      category: "Event",
      link: "#",
    },
  ];

  const categories = [
    { name: "All", icon: "📑", count: 48 },
    { name: "Case Studies", icon: "📚", count: 12 },
    { name: "Whitepapers", icon: "📄", count: 8 },
    { name: "Blog Posts", icon: "✍️", count: 20 },
    { name: "Videos", icon: "🎥", count: 8 },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-80 h-80 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:48px_48px]"></div>

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
            initial={{ scale: 0, rotate: -360 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, type: "spring", stiffness: 100 }}
            className="inline-block mb-4"
          >
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center text-4xl shadow-2xl">
              📚
            </div>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Resource{" "}
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Library
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore insights, guides, and success stories from education leaders
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
                type: "spring",
              }}
              whileHover={{
                scale: 1.05,
                y: -5,
              }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                index === 0
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                  : "bg-gray-100 text-secondary-700 hover:bg-gray-200"
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
              <span className="ml-2 text-sm opacity-75">
                ({category.count})
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
              }}
              whileHover={{
                y: -15,
                rotateY: 5,
                transition: { duration: 0.3 },
              }}
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 group"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Resource Type Badge */}
              <div className="relative">
                <motion.div
                  className="absolute top-4 right-4 z-10"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                >
                  <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    {resource.type}
                  </span>
                </motion.div>

                {/* Image/Icon Area */}
                <motion.div
                  className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center relative overflow-hidden"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Animated background circles */}
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0 opacity-20"
                  >
                    <div className="absolute top-0 left-0 w-32 h-32 bg-blue-400 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-400 rounded-full blur-3xl"></div>
                  </motion.div>

                  <motion.div
                    className="text-8xl relative z-10"
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                  >
                    {resource.image}
                  </motion.div>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {resource.category}
                  </span>
                  <span className="text-xs text-secondary-500">
                    {resource.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-secondary-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {resource.title}
                </h3>
                <p className="text-secondary-600 mb-4 line-clamp-2">
                  {resource.description}
                </p>

                {/* Read More Link */}
                <motion.a
                  href={resource.link}
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all duration-300"
                >
                  <span>Read More</span>
                  <motion.span
                    animate={{
                      x: [0, 5, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                    }}
                  >
                    →
                  </motion.span>
                </motion.a>
              </div>

              {/* Hover overlay effect */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent pointer-events-none"
              />
            </motion.div>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
        >
          {/* Animated background elements */}
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"
          />

          <div className="relative z-10 text-center">
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="text-6xl mb-4"
            >
              📬
            </motion.div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Updated with Latest Resources
            </h3>
            <p className="text-blue-100 mb-8 text-lg">
              Get weekly insights, case studies, and tips delivered to your
              inbox
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-xl text-secondary-900 font-medium focus:outline-none focus:ring-4 focus:ring-white/50 transition-all w-full md:w-auto"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap"
              >
                Subscribe Now 🚀
              </motion.button>
            </div>

            <p className="text-blue-100 text-sm mt-4">
              Join 10,000+ education leaders. Unsubscribe anytime.
            </p>
          </div>
        </motion.div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary"
          >
            Load More Resources →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Resources;
