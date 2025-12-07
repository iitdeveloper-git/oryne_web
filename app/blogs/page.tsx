"use client";

import React from "react";
import Header from "../components/Header";
import Resources from "../components/Resources";
import Footer from "../components/Footer";
import LiveChatWidget from "../components/LiveChatWidget";

export default function BlogsPage() {
  return (
    <div className="relative overflow-x-hidden">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="pt-20">
        {/* Resource Library Section */}
        <Resources />
      </main>

      {/* Footer */}
      <Footer />

      {/* Live Chat Widget */}
      <LiveChatWidget />
    </div>
  );
}
