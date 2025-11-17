"use client";

import React from "react";
import { motion } from "framer-motion";

interface WaveTransitionProps {
  color?: string;
  position?: "top" | "bottom";
  flip?: boolean;
}

const WaveTransition = ({
  color = "from-primary-500 to-accent-500",
  position = "bottom",
  flip = false,
}: WaveTransitionProps) => {
  const waveVariants = {
    animate: {
      d: [
        "M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,48C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
        "M0,64L48,58.7C96,53,192,43,288,48C384,53,480,75,576,80C672,85,768,75,864,69.3C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
        "M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,48C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
      ],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const positionClasses = position === "top" ? "-top-1" : "-bottom-1";
  const rotationClass = flip ? "rotate-180" : "";

  return (
    <div
      className={`absolute ${positionClasses} left-0 w-full overflow-hidden leading-none ${rotationClass}`}
    >
      <svg
        className="relative block w-full h-12 md:h-16"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient
            id={`gradient-${color}`}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop
              offset="0%"
              className="text-primary-500"
              stopColor="currentColor"
            />
            <stop
              offset="100%"
              className="text-accent-500"
              stopColor="currentColor"
            />
          </linearGradient>
        </defs>
        <motion.path
          fill={`url(#gradient-${color})`}
          fillOpacity="0.3"
          variants={waveVariants}
          animate="animate"
          d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,48C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
        <motion.path
          fill={`url(#gradient-${color})`}
          fillOpacity="0.5"
          variants={waveVariants}
          animate="animate"
          style={{ animationDelay: "0.5s" }}
          d="M0,64L48,58.7C96,53,192,43,288,48C384,53,480,75,576,80C672,85,768,75,864,69.3C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>
    </div>
  );
};

export default WaveTransition;
