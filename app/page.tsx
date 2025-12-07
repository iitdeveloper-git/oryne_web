"use client";

import React from "react";
import Header from "./components/Header";
import HeroSimple from "./components/HeroSimple";
import UseCases from "./components/UseCases";
import EcosystemSection from "./components/EcosystemSection";
import Features from "./components/Features";
import IntegrationPartners from "./components/IntegrationPartners";
import ModulesShowcase from "./components/ModulesShowcase";
import Statistics from "./components/Statistics";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import LiveChatWidget from "./components/LiveChatWidget";

export default function Home() {
  return (
    <div className="relative overflow-x-hidden">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main>
        {/* Hero Section - Simplified for mobile performance */}
        <HeroSimple />

        {/* Use Cases Section - Perfect for Every Educational Setting */}
        <UseCases />

        {/* Ecosystem Section - How Our Systems Work Together */}
        <EcosystemSection />

        {/* Features Section - Powerful Features for Modern Education */}
        <Features />

        {/* Integration Partners Section */}
        <IntegrationPartners />

        {/* Solutions Showcase */}
        <ModulesShowcase />

        {/* Statistics */}
        <Statistics />

        {/* Testimonials */}
        <Testimonials />

        {/* CTA Section */}
        <CTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Live Chat Widget */}
      <LiveChatWidget />
    </div>
  );
}
