"use client";

import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import { InfoCard } from "./InfoCard";
import { GlowingEffect } from "./ui/glowing-effect";

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950/50 to-black" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6">
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-purple-300 text-sm tracking-widest uppercase mb-4">
            Track & Manage
          </p>

          <div className="relative inline-block">
            <GlowingEffect
              className="rounded-full"
              disabled={false}
              proximity={100}
              spread={50}
              blur={15}
              glow={true}
            />
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              Spending
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                With Ease
              </span>
            </h1>
          </div>

          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Take control of your finances with intelligent tracking and seamless
            expense management.
          </p>

          <div className="relative inline-block">
            <GlowingEffect
              className="rounded-xl"
              disabled={false}
              proximity={0.8}
              spread={0.8}
              blur={10}
              glow={true}
            />
            <MovingBorderButton
              containerClassName="w-auto h-auto"
              className="bg-white/10 border border-white/20 text-white px-8 py-3 rounded-xl hover:bg-white/20 transition-colors"
              borderRadius="0.75rem"
              duration={3000}
            >
              Get Started — It&apos;s Free
            </MovingBorderButton>
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
          <InfoCard title="Weekly Remaining" value="$592.50" />
          <InfoCard
            title="Savings Goal"
            value="$1,680.00"
            detail="Jan 22 - Jan 27, 2024"
          />
          <InfoCard
            title="BAC Debit Card"
            value="$4,000"
            detail="Bucket flower for Zainya"
          />
        </div>
      </div>
    </div>
  );
}
