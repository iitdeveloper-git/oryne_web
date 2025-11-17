"use client";

import React from "react";
import { motion } from "framer-motion";
import { StarIcon } from "@heroicons/react/24/solid";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "Principal, Cambridge International School",
      image: "/api/placeholder/80/80",
      rating: 5,
      content:
        "Oryne has revolutionized how we manage our institution. The AI-powered insights have helped us improve student outcomes by 40%. The platform is intuitive and our staff adopted it quickly.",
      company: "Cambridge International School",
    },
    {
      name: "Prof. Michael Chen",
      role: "Dean of Technology, Stanford Institute",
      image: "/api/placeholder/80/80",
      rating: 5,
      content:
        "The comprehensive nature of Oryne impressed us most. From ERP to LMS, everything is seamlessly integrated. Our operational efficiency has increased dramatically since implementation.",
      company: "Stanford Institute",
    },
    {
      name: "Maria Rodriguez",
      role: "IT Director, Global Education Network",
      image: "/api/placeholder/80/80",
      rating: 5,
      content:
        "Security and scalability were our top concerns. Oryne delivered on both fronts. The multi-tenant architecture is perfect for our network of 50+ institutions worldwide.",
      company: "Global Education Network",
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-secondary-900 via-primary-900 to-secondary-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-hero-pattern"></div>
      </div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500 rounded-full blur-3xl opacity-20"></div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/20 border border-primary-400/30 mb-6"
          >
            <span className="text-primary-300 text-sm font-semibold">
              ⭐ TRUSTED BY THOUSANDS
            </span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            What Our Customers
            <br />
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              Say About Us
            </span>
          </h2>
          <p className="text-lg text-secondary-300 max-w-3xl mx-auto">
            Hear from educational leaders who have transformed their
            institutions with Oryne.
          </p>
        </motion.div>

        {/* Testimonials Grid - New Modern Design */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              {/* Card Background with Glassmorphism */}
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl overflow-hidden">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-accent-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Animated Border Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary-400 to-accent-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>

                <div className="relative z-10">
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <svg
                      className="w-12 h-12 text-primary-400 opacity-50"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className="w-5 h-5 text-yellow-400 drop-shadow-lg"
                      />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-white/90 leading-relaxed mb-8 text-base">
                    "{testimonial.content}"
                  </p>

                  {/* Divider */}
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6"></div>

                  {/* Author Info */}
                  <div className="flex items-center gap-4">
                    {/* Avatar with Gradient Border */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full blur-md opacity-75"></div>
                      <div className="relative w-14 h-14 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center border-2 border-white/20 shadow-lg">
                        <span className="text-white font-bold text-lg">
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                    </div>

                    {/* Author Details */}
                    <div>
                      <div className="font-semibold text-white text-base">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-secondary-300">
                        {testimonial.role}
                      </div>
                      <div className="text-sm font-medium bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Corner Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-accent-500/20 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Bottom Glow Effect */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-gradient-to-r from-primary-500 to-accent-500 blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-6 px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-400 to-accent-400 border-2 border-secondary-900 flex items-center justify-center"
                  >
                    <span className="text-white text-xs font-bold">
                      {String.fromCharCode(64 + i)}
                    </span>
                  </div>
                ))}
              </div>
              <span className="text-white font-semibold text-sm ml-2">
                Join 1,200+ Institutions
              </span>
            </div>
            <div className="h-8 w-px bg-white/20"></div>
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-4 h-4 text-yellow-400" />
                ))}
              </div>
              <span className="text-white font-semibold text-sm">
                4.9/5 Average Rating
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
