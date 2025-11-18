import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oryne - AI-Powered Educational Institution Management Platform",
  description:
    "Transform your educational institution with Oryne's comprehensive SaaS platform featuring ERP, LMS, E-Store, Hostel Management, Library System, and more.",
  keywords:
    "educational software, ERP, LMS, learning management system, school management, college management, AI-powered education",
  authors: [{ name: "Oryne Team" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Oryne - AI-Powered Educational Institution Management Platform",
    description:
      "Transform your educational institution with Oryne's comprehensive SaaS platform.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oryne - AI-Powered Educational Platform",
    description:
      "Transform your educational institution with Oryne's comprehensive SaaS platform.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="font-sans antialiased bg-white text-secondary-900 overflow-x-hidden">
        <div className="relative min-h-screen overflow-x-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
