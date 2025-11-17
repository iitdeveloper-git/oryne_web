"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface TimelineItem {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline = ({ items }: TimelineProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={ref} className="relative max-w-4xl mx-auto py-12">
      {/* Vertical Line */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gray-200">
        <motion.div
          style={{ height: lineHeight }}
          className="w-full bg-gradient-to-b from-primary-500 to-accent-500"
        />
      </div>

      {/* Timeline Items */}
      <div className="space-y-12">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`flex items-center ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } flex-row`}
          >
            {/* Content */}
            <div
              className={`flex-1 ${
                index % 2 === 0
                  ? "md:pr-12 md:text-right"
                  : "md:pl-12 md:text-left"
              } pl-16 md:pl-0 text-left`}
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
              >
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-secondary-600">{item.description}</p>
              </motion.div>
            </div>

            {/* Center Dot */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.2 + 0.2 }}
              viewport={{ once: true }}
              className="absolute left-8 md:left-1/2 w-8 h-8 -ml-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full border-4 border-white shadow-lg z-10 flex items-center justify-center"
            >
              {item.icon && (
                <div className="text-white text-sm">{item.icon}</div>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
