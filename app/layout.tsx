// app/layout.tsx
"use client";

import "./globals.css";
import { useState, useEffect } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [darkMode, setDarkMode] = useState(false);

  // Detectar preferencia del sistema al montar
  useEffect(() => {
    const isDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle("dark", newMode);
  };

  return (
    <html lang="en">
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300 font-display">
        {/* Navbar */}
        <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
            {/* Brand */}
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg text-white bg-primary-500">
                <span className="material-symbols-outlined !text-xl">
                  insights
                </span>
              </div>
              <h2 className="text-xl font-black tracking-tight">
                FlowMetrics
              </h2>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a
                className="text-sm font-semibold hover:text-primary-500 transition-colors"
                href="#features"
              >
                Features
              </a>
              <a
                className="text-sm font-semibold hover:text-primary-500 transition-colors"
                href="#how-it-works"
              >
                How It Works
              </a>
              <a
                className="text-sm font-semibold hover:text-primary-500 transition-colors"
                href="#pricing"
              >
                Pricing
              </a>
              <a
                className="text-sm font-semibold hover:text-primary-500 transition-colors"
                href="#faq"
              >
                FAQ
              </a>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {darkMode ? <MdLightMode size={20} /> : <MdDarkMode size={20} />}
              </button>

              <button className="text-sm font-bold hover:text-primary-500 transition-colors">
                Login
              </button>

              <button className="bg-primary-500 hover:bg-primary-600 text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-md hover:shadow-lg transition-all">
                Get Started
              </button>
            </div>
          </div>
        </header>

        {/* Main content */}
        <main>{children}</main>
      </body>
    </html>
  );
}
