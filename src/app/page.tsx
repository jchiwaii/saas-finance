"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useMemo } from "react";

/**
 * Enhanced starry background with twinkling animation
 */
const Stars = ({ count = 300 }) => {
  const starShadows = useMemo(() => {
    return [...Array(count)]
      .map(() => {
        const size = Math.random() * 2 + 0.5;
        const opacity = Math.random() * 0.8 + 0.2;
        return `${Math.random() * 100}% ${
          Math.random() * 100
        }% 0 0 rgba(255, 255, 255, ${opacity})`;
      })
      .join(", ");
  }, [count]);

  return (
    <motion.div
      className="absolute inset-0 rounded-[50%]"
      style={{ boxShadow: starShadows }}
      animate={{ opacity: [0.8, 1, 0.8] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    />
  );
};

/**
 * Modern grid system with subtle geometric patterns
 */
const GlobeGrid = () => (
  <div className="absolute inset-0 rounded-[50%] overflow-hidden">
    {/* Primary grid pattern */}
    <div
      className="absolute inset-0 rounded-[50%]"
      style={{
        backgroundImage: `
          radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.15) 1px, transparent 2px),
          radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.1) 1px, transparent 2px)
        `,
        backgroundSize: "60px 40px, 40px 60px",
        backgroundPosition: "0 0, 20px 20px",
        opacity: 0.7,
      }}
    />

    {/* Longitude lines with gradient fade */}
    {[...Array(16)].map((_, i) => (
      <div
        key={`longitude-${i}`}
        className="absolute top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-indigo-400/20 to-transparent"
        style={{
          left: `${6.25 * i}%`,
          transform: `scaleY(${Math.sin((i * Math.PI) / 15) * 0.8 + 0.2})`,
          opacity: Math.sin((i * Math.PI) / 15) * 0.6 + 0.2,
        }}
      />
    ))}

    {/* Latitude lines with curve simulation */}
    {[...Array(12)].map((_, i) => (
      <div
        key={`latitude-${i}`}
        className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-pink-400/20 to-transparent"
        style={{
          top: `${8.33 * i}%`,
          transform: `scaleX(${Math.sin((i * Math.PI) / 11) * 0.9 + 0.1})`,
          opacity: Math.sin((i * Math.PI) / 11) * 0.8 + 0.2,
        }}
      />
    ))}
  </div>
);

/**
 * Floating particles for ambient effect
 */
const FloatingParticles = () => (
  <div className="absolute inset-0 rounded-[50%] overflow-hidden">
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-gradient-to-r from-indigo-400 to-pink-400 rounded-full"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
        }}
        animate={{
          x: [0, Math.random() * 40 - 20],
          y: [0, Math.random() * 40 - 20],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: Math.random() * 8 + 4,
          repeat: Infinity,
          delay: Math.random() * 2,
          ease: "easeInOut",
        }}
      />
    ))}
  </div>
);

/**
 * Navigation with glassmorphism effect
 */
const Navigation = () => (
  <nav className="absolute top-0 left-0 right-0 z-50 p-6">
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex justify-between items-center backdrop-blur-md bg-white/5 rounded-2xl px-6 py-4 border border-white/10 shadow-lg"
    >
      <div className="flex items-center space-x-3">
        <div className="relative w-8 h-8">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-pink-500 rounded-lg blur-sm opacity-60" />
          <div className="relative w-full h-full bg-gradient-to-br from-indigo-500 to-pink-600 rounded-lg flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full" />
          </div>
        </div>
        <span className="text-white font-medium">Expense</span>
      </div>

      <Button
        variant="secondary"
        className="bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-105"
      >
        Contact Us
      </Button>
    </motion.div>
  </nav>
);

export default function HeroGlobe() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950 overflow-hidden text-white">
      <Navigation />

      {/* Ambient background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Globe Container */}
      <div className="absolute top-1/2 left-1/2 w-[160vw] h-[160vw] md:w-[120vw] md:h-[120vw] lg:w-[90vw] lg:h-[90vw] -translate-x-1/2 -translate-y-[70%]">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative w-full h-full"
        >
          {/* Multi-layered glow effects */}
          <div className="absolute inset-0 rounded-[50%] bg-gradient-to-r from-indigo-600/30 via-purple-600/30 to-pink-600/30 blur-[120px]" />
          <div className="absolute inset-0 rounded-[50%] bg-gradient-to-br from-indigo-500/20 via-transparent to-pink-500/20 blur-[160px]" />
          <div className="absolute inset-0 rounded-[50%] bg-gradient-to-t from-transparent via-white/5 to-transparent blur-[80px]" />

          {/* Main Globe */}
          <div className="relative w-full h-full rounded-[50%] bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 border border-white/10 overflow-hidden backdrop-blur-sm shadow-2xl">
            <Stars />
            <GlobeGrid />
            <FloatingParticles />

            {/* Surface texture overlay */}
            <div className="absolute inset-0 rounded-[50%] bg-gradient-to-br from-transparent via-white/2 to-transparent" />
          </div>

          {/* Enhanced rim with multiple layers */}
          <motion.div
            className="absolute inset-0 rounded-[50%]"
            animate={{
              boxShadow: [
                "inset 0 0 0 1px rgba(255, 255, 255, 0.1), 0 0 0 1px rgba(99, 102, 241, 0.4), 0 0 20px rgba(99, 102, 241, 0.2)",
                "inset 0 0 0 1px rgba(255, 255, 255, 0.15), 0 0 0 1px rgba(236, 72, 153, 0.6), 0 0 30px rgba(236, 72, 153, 0.3)",
                "inset 0 0 0 1px rgba(255, 255, 255, 0.1), 0 0 0 1px rgba(99, 102, 241, 0.4), 0 0 20px rgba(99, 102, 241, 0.2)",
              ],
              scale: [1, 1.008, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "mirror",
            }}
          />
        </motion.div>
      </div>

      {/* Enhanced Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen pt-20">
        <div className="text-center max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-indigo-300 text-sm tracking-[0.3em] uppercase mb-6 font-medium"
            >
              Track & Manage
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-7xl md:text-9xl font-bold mb-8 leading-[0.9]"
            >
              <span className="block text-white">Spending</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                With Ease
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-slate-300 text-xl md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed font-light"
            >
              Transform your financial management with our intuitive SaaS
              platform designed to streamline operations and maximize your
              business potential.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <Button
                className="group relative bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-10 py-4 text-xl rounded-2xl shadow-2xl shadow-indigo-500/25 transition-all duration-300 hover:shadow-3xl hover:shadow-indigo-500/40 hover:scale-105 border border-white/10"
                size="lg"
              >
                <span className="relative z-10 flex items-center">
                  Get Started — It's Free
                  <motion.svg
                    className="ml-3 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </motion.svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Bottom Cards */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col md:flex-row gap-6 z-20 w-[95%] md:w-auto">
        {[
          {
            title: "Weekly Remaining",
            value: "$592.50",
            progress: 6,
            total: 10,
            color: "from-emerald-500 to-teal-500",
            bgColor: "emerald",
          },
          {
            title: "Savings Goal",
            value: "$1,680.00",
            detail: "Jan 22 - Jan 27, 2024",
            color: "from-blue-500 to-indigo-500",
            bgColor: "blue",
          },
          {
            title: "BAC Debit Card",
            value: "$4,000",
            detail: "Bucket flower for Zainya",
            progress: 7,
            total: 10,
            isPercent: true,
            color: "from-purple-500 to-pink-500",
            bgColor: "purple",
          },
        ].map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.3 + index * 0.15,
              ease: "easeOut",
              type: "spring",
              stiffness: 100,
            }}
            whileHover={{
              scale: 1.05,
              y: -5,
              transition: { duration: 0.2 },
            }}
            className="group relative bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 min-w-[220px] shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden"
          >
            {/* Card background gradient */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}
            />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-3">
                <div className="text-slate-400 text-sm font-medium">
                  {card.title}
                </div>
                {card.isPercent && (
                  <div
                    className={`text-sm font-bold bg-gradient-to-r ${card.color} bg-clip-text text-transparent`}
                  >
                    {Math.round((card.progress / card.total) * 100)}%
                  </div>
                )}
              </div>

              <div className="text-white text-3xl font-bold mb-3">
                {card.value}
              </div>

              {card.progress && (
                <div className="mb-3">
                  <div className="flex gap-1">
                    {[...Array(card.total)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{
                          delay: 0.5 + index * 0.1 + i * 0.05,
                          duration: 0.3,
                        }}
                        className={`h-2 rounded-full flex-1 ${
                          i < card.progress
                            ? `bg-gradient-to-r ${card.color}`
                            : "bg-slate-700"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              )}

              {card.detail && (
                <div
                  className={`text-xs ${
                    card.isPercent
                      ? `bg-gradient-to-r ${card.color} bg-clip-text text-transparent font-medium`
                      : "text-slate-500"
                  }`}
                >
                  {card.detail}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
