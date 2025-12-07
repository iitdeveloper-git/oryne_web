"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

const Footer = () => {
  const footerLinks = {
    product: [
      { name: "Features", href: "#features" },
      { name: "Solutions", href: "#solutions" },
      { name: "Pricing", href: "#pricing" },
      { name: "Security", href: "#security" },
      { name: "Integrations", href: "#integrations" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "#careers" },
      { name: "Blog", href: "/blogs" },
      { name: "Press", href: "#press" },
      { name: "Contact", href: "#contact" },
    ],
    resources: [
      { name: "Documentation", href: "#docs" },
      { name: "Help Center", href: "#help" },
      { name: "API Reference", href: "#api" },
      { name: "Webinars", href: "#webinars" },
      { name: "Case Studies", href: "#cases" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
      { name: "Cookie Policy", href: "#cookies" },
      { name: "GDPR", href: "#gdpr" },
      { name: "Security", href: "#security" },
    ],
  };

  const contactInfo = [
    {
      icon: MapPinIcon,
      label: "Address",
      value: "123 Education Street, Tech City, TC 12345",
    },
    {
      icon: PhoneIcon,
      label: "Phone",
      value: "+1 (555) 123-4567",
    },
    {
      icon: EnvelopeIcon,
      label: "Email",
      value: "hello@oryne.com",
    },
    {
      icon: GlobeAltIcon,
      label: "Website",
      value: "www.oryne.com",
    },
  ];

  return (
    <footer id="contact" className="bg-secondary-900 text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Logo */}
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">O</span>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                  Oryne
                </span>
              </div>

              {/* Description */}
              <p className="text-secondary-300 mb-6 leading-relaxed">
                Transforming educational institutions worldwide with our
                comprehensive AI-powered SaaS platform. Streamline operations,
                enhance learning experiences, and drive institutional success.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-sm">
                    <item.icon className="w-4 h-4 text-primary-400 flex-shrink-0" />
                    <span className="text-secondary-300">{item.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {Object.entries(footerLinks).map(([category, links], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="font-semibold text-white mb-4 capitalize">
                    {category}
                  </h3>
                  <ul className="space-y-2">
                    {links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a
                          href={link.href}
                          className="text-secondary-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-secondary-800"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
            <p className="text-secondary-300 mb-6">
              Get the latest updates, educational insights, and product news
              delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-secondary-800 border border-secondary-700 rounded-lg text-white placeholder-secondary-400 focus:outline-none focus:border-primary-500 transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-secondary-400 text-sm">
              © 2025 Oryne. All rights reserved. | Empowering Education
              Worldwide
            </div>
            <div className="flex items-center gap-6 text-sm">
              <a
                href="#privacy"
                className="text-secondary-400 hover:text-primary-400 transition-colors"
              >
                Privacy
              </a>
              <a
                href="#terms"
                className="text-secondary-400 hover:text-primary-400 transition-colors"
              >
                Terms
              </a>
              <a
                href="#cookies"
                className="text-secondary-400 hover:text-primary-400 transition-colors"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
