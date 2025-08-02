"use client";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

export default function HeroGlobe() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 p-6">
        <div className="flex justify-between items-center">
          <div className="w-8 h-8 border border-white/20 rounded flex items-center justify-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-white"
            >
              <path d="m7 11 2-2-2-2" />
              <path d="M11 13h4" />
            </svg>
          </div>
          <Button
            variant="secondary"
            className="bg-gray-800 text-white hover:bg-gray-700"
          >
            Contact Us
          </Button>
        </div>
      </nav>

      {/* Globe positioned just below nav, stretched to corners */}
      <div className="absolute top-35 left-1/2 transform -translate-x-1/2">
        <div className="relative w-[1600px] h-[1300px]">
          {/* Outer glow effects */}
          <div className="absolute inset-0 rounded-[50%] bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-purple-500/30 blur-[80px]"></div>
          <div className="absolute inset-0 rounded-[50%] bg-gradient-to-br from-purple-400/20 via-transparent to-pink-400/20 blur-[120px]"></div>

          {/* Main Globe - stretched ellipse */}
          <div className="absolute inset-0 rounded-[50%] bg-transparent border border-gray-700/30">
            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 rounded-[50%] opacity-40">
              <svg width="100%" height="100%" className="absolute inset-0">
                <defs>
                  <pattern
                    id="grid"
                    width="60"
                    height="40"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 60 0 L 0 0 0 40"
                      fill="none"
                      stroke="rgba(255,255,255,0.12)"
                      strokeWidth="1"
                    />
                  </pattern>
                  <pattern
                    id="fine-grid"
                    width="30"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 30 0 L 0 0 0 20"
                      fill="none"
                      stroke="rgba(255,255,255,0.06)"
                      strokeWidth="0.5"
                    />
                  </pattern>
                  <mask id="ellipse-mask">
                    <ellipse cx="50%" cy="50%" rx="50%" ry="50%" fill="white" />
                  </mask>
                </defs>
                <rect
                  width="100%"
                  height="100%"
                  fill="url(#fine-grid)"
                  mask="url(#ellipse-mask)"
                />
                <rect
                  width="100%"
                  height="100%"
                  fill="url(#grid)"
                  mask="url(#ellipse-mask)"
                />
              </svg>
            </div>

            {/* Curved Grid Lines for Stretched Sphere Effect */}
            <div className="absolute inset-0 rounded-[50%]">
              {/* Horizontal curved lines - adjusted for wider ellipse */}
              {[...Array(12)].map((_, i) => (
                <div
                  key={`h-${i}`}
                  className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent"
                  style={{
                    top: `${10 + i * 7}%`,
                    transform: `scaleX(${
                      Math.sin((i * Math.PI) / 11) * 0.95 + 0.05
                    })`,
                    opacity: Math.sin((i * Math.PI) / 11) * 0.8 + 0.2,
                  }}
                />
              ))}

              {/* Vertical curved lines - more lines for wider surface */}
              {[...Array(30)].map((_, i) => (
                <div
                  key={`v-${i}`}
                  className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"
                  style={{
                    left: `${2 + i * 3.2}%`,
                    transform: `scaleY(${
                      Math.sin((i * Math.PI) / 29) * 0.8 + 0.2
                    })`,
                    opacity: Math.sin((i * Math.PI) / 29) * 0.6 + 0.4,
                  }}
                />
              ))}
            </div>

            {/* Top lighting highlights - adjusted for ellipse */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3/5 h-2/5 bg-gradient-radial from-white/20 to-transparent rounded-[50%] blur-2xl"></div>
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-2/5 h-1/4 bg-gradient-radial from-purple-300/15 to-transparent rounded-[50%] blur-xl"></div>
          </div>

          {/* Glowing elliptical rim/edge effect */}
          <div className="absolute inset-0 rounded-[50%]">
            {/* Main rim glow */}
            <div className="absolute inset-0 rounded-[50%] border-2 border-transparent bg-gradient-to-r from-purple-400/40 via-pink-400/40 to-purple-400/40 blur-sm"></div>
            <div className="absolute inset-0 rounded-[50%] border border-transparent bg-gradient-to-r from-purple-300/60 via-pink-300/60 to-purple-300/60 blur-xs"></div>

            {/* Sharp rim highlight */}
            <div className="absolute inset-0 rounded-[50%] border border-white/20"></div>

            {/* Animated rim pulse */}
            <motion.div
              className="absolute inset-0 rounded-[50%] border border-purple-400/30"
              animate={{
                scale: [1, 1.01, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen pt-20">
        <div className="text-center max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gray-300 text-sm tracking-widest uppercase mb-4 font-medium">
              TRACK & MANAGE
            </p>

            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
              Spending
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
                With Ease
              </span>
            </h1>

            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
              Our comprehensive SaaS solutions are tailored to streamline your
              operations and drive maximum revenue for your business.
            </p>

            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-lg shadow-lg shadow-blue-600/25"
              size="lg"
            >
              Get Started Now
              <span className="ml-2 text-blue-200">• It's Free</span>
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Bottom Cards */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4 z-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-gray-900/90 backdrop-blur-md border border-gray-700/50 rounded-xl p-4 min-w-[200px] shadow-xl"
        >
          <div className="text-gray-400 text-sm mb-1">Remaining (Weekly)</div>
          <div className="text-white text-2xl font-bold">$592.50</div>
          <div className="flex gap-1 mt-2">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full ${
                  i < 6 ? "bg-green-500" : "bg-gray-600"
                }`}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gray-900/90 backdrop-blur-md border border-gray-700/50 rounded-xl p-4 min-w-[200px] shadow-xl"
        >
          <div className="text-gray-400 text-sm mb-1">Savings Goal</div>
          <div className="text-white text-2xl font-bold">$1,680.00</div>
          <div className="text-gray-400 text-xs mt-1">
            DATA FROM JAN 22 - JAN 27 2023
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-gray-900/90 backdrop-blur-md border border-gray-700/50 rounded-xl p-4 min-w-[200px] shadow-xl"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="text-gray-400 text-sm">70%</div>
            <div className="text-white text-xl font-bold">$4000</div>
          </div>
          <div className="text-gray-400 text-xs mb-2">BAC Debit Card</div>
          <div className="text-blue-400 text-xs">Bucket flower for Zainya</div>
        </motion.div>
      </div>

      {/* Close button */}
      <button className="absolute bottom-8 right-8 w-8 h-8 border border-gray-600 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors">
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
  );
}
