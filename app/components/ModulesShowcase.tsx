"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AcademicCapIcon,
  BookOpenIcon,
  BuildingLibraryIcon,
  ShoppingBagIcon,
  HomeIcon,
  TruckIcon,
  CalendarDaysIcon,
  BellAlertIcon,
  ChartBarIcon,
  UserGroupIcon,
  ClipboardDocumentListIcon,
  CreditCardIcon,
} from "@heroicons/react/24/outline";

const ModulesShowcase = () => {
  const [activeModule, setActiveModule] = useState(0);

  // Listen for module selection from EcosystemGraph
  useEffect(() => {
    const handleSelectModule = (event: CustomEvent) => {
      const { index } = event.detail;
      setActiveModule(index);
    };

    window.addEventListener(
      "selectModule",
      handleSelectModule as EventListener
    );

    // Check sessionStorage on mount
    const savedModule = sessionStorage.getItem("selectedModule");
    if (savedModule !== null) {
      setActiveModule(parseInt(savedModule));
      sessionStorage.removeItem("selectedModule");
    }

    return () => {
      window.removeEventListener(
        "selectModule",
        handleSelectModule as EventListener
      );
    };
  }, []);

  const modules = [
    {
      id: "erp",
      title: "COMMAND CENTER",
      icon: AcademicCapIcon,
      color: "from-blue-500 to-cyan-500",
      description:
        "Comprehensive Enterprise Resource Planning for educational institutions",
      features: [
        "Student Information Management",
        "Teacher & Staff Management",
        "Admissions & Enrollment",
        "Fee Management & Billing",
        "Attendance Tracking",
        "Timetable Management",
      ],
      image: "/api/placeholder/600/400",
      stats: { users: "10K+", institutions: "500+", efficiency: "85%" },
    },
    {
      id: "lms",
      title: "LEARN SPHERE",
      icon: BookOpenIcon,
      color: "from-purple-500 to-pink-500",
      description: "Advanced LMS with AI-powered personalized learning paths",
      features: [
        "Course Creation & Management",
        "Assignment & Submissions",
        "Automated Grading",
        "Live Virtual Classes",
        "Progress Tracking",
        "AI-Powered Recommendations",
      ],
      image: "/api/placeholder/600/400",
      stats: { courses: "50K+", students: "100K+", satisfaction: "95%" },
    },
    {
      id: "estore",
      title: "CAMPUS MART",
      icon: ShoppingBagIcon,
      color: "from-green-500 to-teal-500",
      description:
        "Integrated e-commerce platform for educational materials and services",
      features: [
        "Product Catalog Management",
        "Shopping Cart & Checkout",
        "Payment Gateway Integration",
        "Order Management",
        "Inventory Tracking",
        "Digital Content Delivery",
      ],
      image: "/api/placeholder/600/400",
      stats: { products: "25K+", orders: "200K+", revenue: "$5M+" },
    },
    {
      id: "hostel",
      title: "STAY HUB",
      icon: HomeIcon,
      color: "from-yellow-500 to-orange-500",
      description: "Complete hostel and accommodation management solution",
      features: [
        "Room Allocation & Management",
        "Resident Check-in/out",
        "Meal Plan Management",
        "Maintenance Requests",
        "Visitor Management",
        "Security & Access Control",
      ],
      image: "/api/placeholder/600/400",
      stats: { rooms: "5K+", residents: "15K+", occupancy: "92%" },
    },
    {
      id: "library",
      title: "KNOWLEDGE VAULT",
      icon: BuildingLibraryIcon,
      color: "from-indigo-500 to-purple-500",
      description:
        "Digital library management with advanced search and analytics",
      features: [
        "Catalog Management",
        "Book Issue & Return",
        "Digital Resource Access",
        "Fine Management",
        "Reading Analytics",
        "Inter-library Loans",
      ],
      image: "/api/placeholder/600/400",
      stats: { books: "100K+", members: "25K+", circulation: "500K+" },
    },
    {
      id: "transport",
      title: "ROUTE MASTER",
      icon: TruckIcon,
      color: "from-red-500 to-pink-500",
      description: "Smart transportation management with real-time tracking",
      features: [
        "Route Planning & Optimization",
        "Vehicle Tracking",
        "Driver Management",
        "Student Transportation",
        "Maintenance Scheduling",
        "GPS Integration",
      ],
      image: "/api/placeholder/600/400",
      stats: { vehicles: "500+", routes: "200+", students: "30K+" },
    },
    {
      id: "events",
      title: "CAMPUS PULSE",
      icon: CalendarDaysIcon,
      color: "from-violet-500 to-purple-500",
      description: "Complete event management system for campus activities",
      features: [
        "Event Planning & Scheduling",
        "Registration & Ticketing",
        "Venue Management",
        "Attendance Tracking",
        "Photo & Media Gallery",
        "Calendar Integration",
      ],
      image: "/api/placeholder/600/400",
      stats: { events: "1K+", attendees: "50K+", satisfaction: "90%" },
    },
  ];

  return (
    <section
      id="modules"
      className="section-padding bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-900 text-white relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Complete Educational
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              {" "}
              Ecosystem
            </span>
          </h2>
          <p className="text-lg text-secondary-300 max-w-3xl mx-auto">
            Six powerful modules working together to transform your educational
            institution. From student management to transportation logistics,
            we've got you covered.
          </p>
        </motion.div>

        {/* Module Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {modules.map((module, index) => (
            <motion.button
              key={module.id}
              onClick={() => setActiveModule(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-300 ${
                activeModule === index
                  ? `bg-gradient-to-r ${module.color} text-white shadow-lg`
                  : "bg-secondary-800 text-secondary-300 hover:bg-secondary-700"
              }`}
            >
              {React.createElement(module.icon, { className: "w-5 h-5" })}
              <span className="font-medium">{module.title}</span>
            </motion.button>
          ))}
        </div>

        {/* Active Module Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeModule}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Content */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${modules[activeModule].color} rounded-2xl flex items-center justify-center`}
                >
                  {React.createElement(modules[activeModule].icon, {
                    className: "w-8 h-8 text-white",
                  })}
                </div>
                <div>
                  <h3 className="text-3xl font-bold">
                    {modules[activeModule].title}
                  </h3>
                  <p className="text-secondary-300">
                    {modules[activeModule].description}
                  </p>
                </div>
              </div>

              {/* Features */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {modules[activeModule].features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div
                      className={`w-2 h-2 bg-gradient-to-r ${modules[activeModule].color} rounded-full`}
                    ></div>
                    <span className="text-secondary-200">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                {Object.entries(modules[activeModule].stats).map(
                  ([key, value], index) => (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="text-center"
                    >
                      <div
                        className={`text-2xl font-bold bg-gradient-to-r ${modules[activeModule].color} bg-clip-text text-transparent`}
                      >
                        {value}
                      </div>
                      <div className="text-sm text-secondary-400 capitalize">
                        {key}
                      </div>
                    </motion.div>
                  )
                )}
              </div>
            </div>

            {/* Visual/Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${modules[activeModule].color} rounded-3xl blur-2xl opacity-20`}
              ></div>
              <div className="relative bg-secondary-800 rounded-3xl p-8 border border-secondary-700">
                <div className="aspect-video bg-secondary-700 rounded-2xl flex items-center justify-center">
                  {React.createElement(modules[activeModule].icon, {
                    className: "w-24 h-24 text-secondary-500",
                  })}
                </div>
                <div className="mt-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-secondary-300">Module Status</span>
                    <span className="text-green-400 font-medium">Active</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-secondary-300">Integration</span>
                    <span className="text-primary-400 font-medium">
                      Seamless
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-secondary-300">Performance</span>
                    <span className="text-accent-400 font-medium">
                      Optimized
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ModulesShowcase;
