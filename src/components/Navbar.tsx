"use client";

import React from "react";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                className="text-white"
              >
                <path
                  d="M12 2L2 7L12 12L22 7L12 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 17L12 22L22 17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 12L12 17L22 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg blur-sm opacity-50 -z-10"></div>
          </div>
          <span className="text-white font-semibold text-lg">ExpenseFlow</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="#features"
            className="text-slate-400 text-sm font-medium hover:text-white transition-colors duration-200"
          >
            Features
          </Link>
          <Link
            href="#pricing"
            className="text-slate-400 text-sm font-medium hover:text-white transition-colors duration-200"
          >
            Pricing
          </Link>
          <Link
            href="#about"
            className="text-slate-400 text-sm font-medium hover:text-white transition-colors duration-200"
          >
            About
          </Link>
        </div>

        {/* Contact Button */}
        <div>
          <Link
            href="#contact"
            className="bg-white/10 border border-white/20 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-white/20 transition-colors backdrop-blur-sm"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
