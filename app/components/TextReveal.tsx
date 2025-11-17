"use client";

import React from "react";
import { motion } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  type?: "word" | "char";
}

export const TextReveal = ({
  text,
  className = "",
  delay = 0,
  type = "word",
}: TextRevealProps) => {
  const elements = type === "word" ? text.split(" ") : text.split("");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: type === "word" ? 0.12 : 0.03,
        delayChildren: delay,
      },
    }),
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: type === "word" ? "0.25em" : "0",
      }}
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {elements.map((element, index) => (
        <motion.span
          key={index}
          variants={child}
          style={{ display: "inline-block" }}
        >
          {element === " " ? "\u00A0" : element}
        </motion.span>
      ))}
    </motion.div>
  );
};

// Scroll-triggered text reveal
export const ScrollTextReveal = ({
  text,
  className = "",
  delay = 0,
  type = "word",
}: TextRevealProps) => {
  const elements = type === "word" ? text.split(" ") : text.split("");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: type === "word" ? 0.08 : 0.02,
        delayChildren: delay,
      },
    }),
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: type === "word" ? "0.25em" : "0",
      }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {elements.map((element, index) => (
        <motion.span
          key={index}
          variants={child}
          style={{ display: "inline-block" }}
        >
          {element === " " ? "\u00A0" : element}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default TextReveal;
