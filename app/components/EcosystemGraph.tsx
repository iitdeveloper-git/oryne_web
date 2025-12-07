"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  AcademicCapIcon,
  BookOpenIcon,
  ShoppingBagIcon,
  HomeIcon,
  TruckIcon,
  BuildingLibraryIcon,
  CalendarDaysIcon,
  CpuChipIcon,
} from "@heroicons/react/24/solid";

interface EcosystemNode {
  id: string;
  title: string;
  Icon: React.ComponentType<{ className?: string }>;
  description: string;
  color: string;
  connections: string[];
}

const nodes: EcosystemNode[] = [
  {
    id: "ai-core",
    title: "ORYNE BRAIN",
    Icon: CpuChipIcon,
    description: "Central Intelligence Hub",
    color: "from-purple-500 to-indigo-600",
    connections: [
      "erp",
      "lms",
      "estore",
      "hostel",
      "library",
      "transport",
      "events",
    ],
  },
  {
    id: "erp",
    title: "COMMAND CENTER",
    Icon: AcademicCapIcon,
    description: "Enterprise Resource Planning",
    color: "from-blue-500 to-cyan-600",
    connections: ["ai-core", "lms", "estore"],
  },
  {
    id: "lms",
    title: "LEARN SPHERE",
    Icon: BookOpenIcon,
    description: "Learning Management System",
    color: "from-green-500 to-emerald-600",
    connections: ["ai-core", "erp", "library"],
  },
  {
    id: "estore",
    title: "CAMPUS MART",
    Icon: ShoppingBagIcon,
    description: "E-Commerce Platform",
    color: "from-orange-500 to-red-600",
    connections: ["ai-core", "erp", "hostel"],
  },
  {
    id: "hostel",
    title: "STAY HUB",
    Icon: HomeIcon,
    description: "Accommodation Management",
    color: "from-pink-500 to-rose-600",
    connections: ["ai-core", "estore", "transport"],
  },
  {
    id: "library",
    title: "KNOWLEDGE VAULT",
    Icon: BuildingLibraryIcon,
    description: "Digital & Physical Resources",
    color: "from-teal-500 to-cyan-600",
    connections: ["ai-core", "lms", "events"],
  },
  {
    id: "transport",
    title: "ROUTE MASTER",
    Icon: TruckIcon,
    description: "Fleet & Logistics",
    color: "from-yellow-500 to-amber-600",
    connections: ["ai-core", "hostel", "events"],
  },
  {
    id: "events",
    title: "CAMPUS PULSE",
    Icon: CalendarDaysIcon,
    description: "Event Management",
    color: "from-violet-500 to-purple-600",
    connections: ["ai-core", "library", "transport"],
  },
];

const EcosystemGraph = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  // Map node IDs to module indices in ModulesShowcase
  const nodeToModuleMap: { [key: string]: number } = {
    erp: 0,
    lms: 1,
    estore: 2,
    hostel: 3,
    library: 4,
    transport: 5,
    events: 6,
  };

  // Handle node click to navigate to ModulesShowcase
  const handleNodeClick = (nodeId: string) => {
    if (nodeId === "ai-core") {
      setActiveNode(activeNode === nodeId ? null : nodeId);
      return;
    }

    // For other nodes, navigate to solutions section
    const moduleIndex = nodeToModuleMap[nodeId];
    if (moduleIndex !== undefined) {
      // Store the module index in sessionStorage
      sessionStorage.setItem("selectedModule", moduleIndex.toString());

      // Scroll to solutions section
      const solutionsSection = document.getElementById("solutions");
      if (solutionsSection) {
        solutionsSection.scrollIntoView({ behavior: "smooth", block: "start" });

        // Dispatch custom event to update module selection
        setTimeout(() => {
          window.dispatchEvent(
            new CustomEvent("selectModule", { detail: { index: moduleIndex } })
          );
        }, 500);
      }
    }
  };

  // Position nodes in a circular layout around the AI Core with custom spacing
  const getNodePosition = (index: number, total: number) => {
    if (index === 0) {
      // AI Core in center
      return { x: 50, y: 48 };
    }

    // Custom angles for better spacing - preventing overlaps
    const customAngles = [
      -90, // ERP - top
      -40, // LMS - shifted up (more negative = more up)
      20, // E-Store - right side (more gap from LMS)
      65, // Hostel - bottom right
      115, // Library - bottom
      165, // Transport - bottom left
      230, // Events - left
    ];

    const angleInRadians = (customAngles[index - 1] * Math.PI) / 180;
    const radiusX = 48; // Horizontal distance - using more background space
    const radiusY = 34; // Vertical distance - using more background space
    const x = 50 + radiusX * Math.cos(angleInRadians);
    // Adjust y position relative to AI Core's y position
    const y = 48 + radiusY * Math.sin(angleInRadians);
    return { x, y };
  };

  const isConnectionActive = (from: string, to: string) => {
    if (!hoveredNode && !activeNode) return false;
    const active = hoveredNode || activeNode;
    return (
      (from === active &&
        nodes.find((n) => n.id === from)?.connections.includes(to)) ||
      (to === active &&
        nodes.find((n) => n.id === to)?.connections.includes(from))
    );
  };

  return (
    <div className="w-full h-[700px] md:h-[800px] relative overflow-visible pb-20">
      {/* Enhanced Background with Mesh Gradient - Full Width - Extended Bottom */}
      <div className="absolute left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] w-screen h-[calc(100%+200px)] bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOCAxOC04LjA1OSAxOC0xOC04LjA1OS0xOC0xOC0xOHoiIHN0cm9rZT0iIzFmMmEzYSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>

        {/* Enhanced Legend - Inside Background Frame on Left */}
        <div className="absolute bottom-32 left-8 md:bottom-32 md:left-12 lg:left-16 bg-gradient-to-br from-white/95 to-white/80 backdrop-blur-xl rounded-2xl p-5 shadow-2xl border border-white/50 z-30 max-w-xs">
          <h4 className="text-base font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
            Complete Educational Ecosystem
          </h4>
          <p className="text-sm text-gray-700 mb-3 font-medium">
            {activeNode || hoveredNode
              ? `🎯 Viewing: ${
                  nodes.find((n) => n.id === (activeNode || hoveredNode))?.title
                }`
              : "✨ Hover or click nodes to see connections"}
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-4 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full" />
              <span className="font-medium">Active</span>
            </div>
            <div className="flex items-center gap-2">
              <div
                className="w-4 h-1 bg-gray-400 rounded-full"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(to right, #9ca3af 0px, #9ca3af 3px, transparent 3px, transparent 6px)",
                }}
              />
              <span className="font-medium">Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Connection Lines - Behind nodes */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#a78bfa" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient
            id="lineGradientInactive"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#64748b" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#94a3b8" stopOpacity="0.5" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="strongGlow">
            <feGaussianBlur stdDeviation="8" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {nodes.map((node, i) => {
          const fromPos = getNodePosition(i, nodes.length);
          return node.connections.map((connId) => {
            const toIndex = nodes.findIndex((n) => n.id === connId);
            if (toIndex === -1) return null;
            const toPos = getNodePosition(toIndex, nodes.length);
            const isActive = isConnectionActive(node.id, connId);

            return (
              <motion.line
                key={`${node.id}-${connId}`}
                x1={`${fromPos.x}%`}
                y1={`${fromPos.y}%`}
                x2={`${toPos.x}%`}
                y2={`${toPos.y}%`}
                stroke={
                  isActive ? "url(#lineGradient)" : "url(#lineGradientInactive)"
                }
                strokeWidth={isActive ? "4" : "3"}
                strokeOpacity="1"
                strokeDasharray="0"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: i * 0.1 }}
                filter={isActive ? "url(#strongGlow)" : undefined}
              />
            );
          });
        })}

        {/* Animated Data Particles */}
        {(hoveredNode || activeNode) &&
          nodes
            .find((n) => n.id === (hoveredNode || activeNode))
            ?.connections.map((connId, idx) => {
              const fromIndex = nodes.findIndex(
                (n) => n.id === (hoveredNode || activeNode)
              );
              const toIndex = nodes.findIndex((n) => n.id === connId);
              const fromPos = getNodePosition(fromIndex, nodes.length);
              const toPos = getNodePosition(toIndex, nodes.length);

              return (
                <motion.circle
                  key={`particle-${connId}-${idx}`}
                  r="4"
                  fill="url(#lineGradient)"
                  initial={{
                    cx: `${fromPos.x}%`,
                    cy: `${fromPos.y}%`,
                    opacity: 0,
                  }}
                  animate={{
                    cx: [`${fromPos.x}%`, `${toPos.x}%`],
                    cy: [`${fromPos.y}%`, `${toPos.y}%`],
                    opacity: [0, 1, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: idx * 0.3,
                    ease: "linear",
                  }}
                  filter="url(#glow)"
                />
              );
            })}
      </svg>

      {/* Node Cards Container - Same coordinate system as SVG */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        {/* Node Cards - In front of lines */}
        {nodes.map((node, index) => {
          const position = getNodePosition(index, nodes.length);
          const isCenter = index === 0;
          const isActive = hoveredNode === node.id || activeNode === node.id;

          return (
            <motion.div
              key={node.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-auto"
              style={{
                left: `${position.x}%`,
                top: `${position.y}%`,
                zIndex: isActive ? 100 : 20,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              onMouseEnter={() => setHoveredNode(node.id)}
              onMouseLeave={() => setHoveredNode(null)}
              onClick={() => handleNodeClick(node.id)}
            >
              <motion.div
                className={`relative ${
                  isCenter
                    ? "w-40 h-40 md:w-52 md:h-52"
                    : "w-32 h-32 md:w-40 md:h-40"
                } cursor-pointer`}
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                animate={{
                  scale: isActive ? 1.2 : 1,
                  y: isActive ? -5 : 0,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Multiple Glow Layers */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${node.color} rounded-3xl blur-2xl`}
                  animate={{
                    opacity: isActive ? 0.6 : 0.2,
                    scale: isActive ? 1.4 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${node.color} rounded-3xl blur-xl`}
                  animate={{
                    opacity: isActive ? 0.4 : 0.15,
                    scale: isActive ? 1.2 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Card with Glass Effect */}
                <div
                  className={`relative w-full h-full backdrop-blur-xl rounded-3xl shadow-2xl flex flex-col items-center justify-center p-4 border-2 transition-all duration-300 ${
                    isActive
                      ? "bg-white/95 border-white/50 shadow-[0_0_30px_rgba(59,130,246,0.5)]"
                      : "bg-white/10 border-white/20"
                  }`}
                >
                  {/* Icon Container with Enhanced Gradient */}
                  <motion.div
                    className={`${
                      isCenter
                        ? "w-20 h-20 md:w-24 md:h-24"
                        : "w-16 h-16 md:w-20 md:h-20"
                    } rounded-2xl bg-gradient-to-br ${
                      node.color
                    } flex items-center justify-center mb-3 shadow-lg relative overflow-hidden`}
                    animate={{
                      rotate: isActive ? 360 : 0,
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    {/* Shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      animate={{
                        x: ["-100%", "200%"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3,
                      }}
                    />
                    <node.Icon
                      className={`${
                        isCenter
                          ? "w-10 h-10 md:w-12 md:h-12"
                          : "w-8 h-8 md:w-10 md:h-10"
                      } text-white relative z-10`}
                    />
                  </motion.div>

                  {/* Title */}
                  <h3
                    className={`${
                      isCenter ? "text-lg md:text-xl" : "text-base md:text-lg"
                    } font-bold text-center mb-1 ${
                      isActive ? "text-gray-900" : "text-white"
                    }`}
                  >
                    {node.title}
                  </h3>

                  {/* Description for center node */}
                  {isCenter && (
                    <p
                      className={`text-sm text-center hidden md:block ${
                        isActive ? "text-gray-600" : "text-gray-300"
                      }`}
                    >
                      {node.description}
                    </p>
                  )}

                  {/* Connection Badge with Pulse */}
                  {!isCenter && (
                    <motion.div
                      className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full text-white text-sm flex items-center justify-center font-bold shadow-lg"
                      animate={{
                        scale: isActive ? [1, 1.2, 1] : 1,
                      }}
                      transition={{
                        duration: 0.5,
                        repeat: isActive ? Infinity : 0,
                        repeatDelay: 0.5,
                      }}
                    >
                      {node.connections.length - 1}
                    </motion.div>
                  )}

                  {/* Active Indicator Ring */}
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 rounded-3xl border-4 border-blue-400"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                    />
                  )}
                </div>
              </motion.div>

              {/* Enhanced Tooltip - Always on top */}
              {isActive && !isCenter && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: position.y > 50 ? -10 : 10,
                    scale: 0.9,
                  }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className={`absolute ${
                    position.y > 50 ? "bottom-full mb-8" : "top-full mt-8"
                  } left-1/2 transform -translate-x-1/2 bg-gradient-to-br from-gray-900 to-gray-800 text-white text-sm rounded-2xl px-5 py-3 shadow-2xl border border-white/20 min-w-[200px]`}
                  style={{
                    whiteSpace: "normal",
                    maxWidth: "250px",
                    zIndex: 200,
                  }}
                >
                  <div className="font-semibold mb-1 text-center">
                    {node.description}
                  </div>
                  <div className="text-xs text-gray-400 text-center">
                    {node.connections.length - 1} active connections
                  </div>
                  <div
                    className={`absolute ${
                      position.y > 50 ? "top-full -mt-2" : "-top-2"
                    } left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-900 rotate-45 border-white/20 ${
                      position.y > 50
                        ? "border-b border-r"
                        : "border-l border-t"
                    }`}
                  />
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Enhanced Stats Badge */}
      <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-2xl px-6 py-3 shadow-2xl border border-white/20 z-30">
        <p className="text-sm font-bold flex items-center gap-2">
          <span className="text-2xl">🎯</span>
          {nodes.length} Integrated Systems
        </p>
      </div>
    </div>
  );
};

export default EcosystemGraph;
