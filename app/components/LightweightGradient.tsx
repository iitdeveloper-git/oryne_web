"use client";

import React from "react";

const LightweightGradient = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* CSS-only animated gradients - much lighter than JS animations */}
      <div
        className="absolute top-0 left-0 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl animate-gradient-slow"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 bg-accent-400/20 rounded-full blur-3xl animate-gradient-slow"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-400/15 rounded-full blur-3xl animate-gradient-slow"
        style={{ animationDelay: "4s" }}
      />
    </div>
  );
};

export default LightweightGradient;
