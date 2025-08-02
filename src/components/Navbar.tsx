"use client";

import React from "react";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              className="text-black"
            >
              <path
                d="M7 17L17 7M17 7H7M17 7V17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="#features"
            className="text-white text-sm font-medium hover:text-gray-300 transition-colors border-b-2 border-white pb-1"
          >
            Features
          </Link>
          <Link
            href="#how-it-works"
            className="text-white text-sm font-medium hover:text-gray-300 transition-colors"
          >
            How It Works
          </Link>
          <Link
            href="#testimonials"
            className="text-white text-sm font-medium hover:text-gray-300 transition-colors"
          >
            Testimonials
          </Link>
          <Link
            href="#pricing"
            className="text-white text-sm font-medium hover:text-gray-300 transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="#faq"
            className="text-white text-sm font-medium hover:text-gray-300 transition-colors"
          >
            FAQ
          </Link>
        </div>

        {/* Contact Button */}
        <div>
          <Link
            href="#contact"
            className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
