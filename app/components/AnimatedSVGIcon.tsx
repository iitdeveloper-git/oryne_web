"use client";

import React from "react";
import { motion } from "framer-motion";

interface AnimatedSVGIconProps {
  icon: React.ComponentType<{ className?: string }>;
  className?: string;
  strokeWidth?: number;
  duration?: number;
}

const AnimatedSVGIcon = ({
  icon: Icon,
  className = "w-12 h-12",
  strokeWidth = 2,
  duration = 2,
}: AnimatedSVGIconProps) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
    >
      <motion.svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full h-full"
        initial="hidden"
        animate="visible"
      >
        <Icon className="w-full h-full" />
      </motion.svg>
    </motion.div>
  );
};

// Animated path drawing component
export const DrawingIcon = ({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
    >
      <motion.svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-full h-full"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <motion.g
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            pathLength: { duration: 2, ease: "easeInOut" },
            opacity: { duration: 0.5 },
          }}
        >
          {children}
        </motion.g>
      </motion.svg>
    </motion.div>
  );
};

// Pre-built animated icons
export const AnimatedCheckIcon = ({
  className = "w-16 h-16",
}: {
  className?: string;
}) => (
  <motion.div className={className}>
    <svg viewBox="0 0 52 52" className="w-full h-full">
      <motion.circle
        cx="26"
        cy="26"
        r="25"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
      <motion.path
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        d="M14 27l7 7 16-16"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeInOut" }}
      />
    </svg>
  </motion.div>
);

export const AnimatedRocketIcon = ({
  className = "w-16 h-16",
}: {
  className?: string;
}) => (
  <motion.div className={className}>
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      {/* Rocket body */}
      <motion.path
        d="M12 2l4 4v6l-4 4-4-4V6l4-4z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      />
      {/* Window */}
      <motion.circle
        cx="12"
        cy="9"
        r="2"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 0.8 }}
      />
      {/* Flames */}
      <motion.path
        d="M9 16l-2 3 2 3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      />
      <motion.path
        d="M15 16l2 3-2 3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
      />
      <motion.path
        d="M12 16v6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      />
    </svg>
  </motion.div>
);

export const AnimatedGearIcon = ({
  className = "w-16 h-16",
}: {
  className?: string;
}) => (
  <motion.div
    className={className}
    animate={{ rotate: 360 }}
    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
  >
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <motion.path
        d="M12 2L14 7L19 9L14 11L12 16L10 11L5 9L10 7L12 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
      <motion.circle
        cx="12"
        cy="9"
        r="3"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      />
    </svg>
  </motion.div>
);

export default AnimatedSVGIcon;
