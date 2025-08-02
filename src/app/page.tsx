'use client';

import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, CreditCard, PieChart } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Background gradient orb effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-orange-500/25 to-red-500/25 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 pt-20 pb-32">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white/90 mb-6">
            <span className="mr-2">🚀</span>
            TRACK & MANAGE
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
            Spending
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              With Ease
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive SaaS solutions are tailored to streamline your 
            operations and drive maximum revenue for your business
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-2xl shadow-blue-500/25 transition-all hover:shadow-blue-500/40 hover:scale-105"
            >
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <div className="flex items-center text-white/70 text-sm">
              <span className="mr-2">✨</span>
              It's Free
              <ArrowRight className="ml-1 h-4 w-4" />
            </div>
          </div>
        </div>

        {/* Floating Cards */}
        <div className="relative max-w-6xl mx-auto">
          {/* Card 1 - Spending Overview */}
          <div className="absolute -left-4 top-20 transform rotate-[-8deg] hover:rotate-[-4deg] transition-transform duration-300">
            <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 w-80 shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-400 text-sm font-medium">Remaining (Weekly)</span>
                <TrendingUp className="h-5 w-5 text-green-400" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">$892.50</div>
              <div className="flex items-center space-x-2">
                <div className="flex-1 bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-400 to-emerald-500 h-2 rounded-full w-3/4"></div>
                </div>
                <span className="text-sm text-gray-400">75%</span>
              </div>
            </div>
          </div>

          {/* Card 2 - Saving Goal */}
          <div className="absolute top-32 left-1/2 transform -translate-x-1/2 rotate-[2deg] hover:rotate-[1deg] transition-transform duration-300">
            <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 w-72 shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-400 text-sm font-medium">Saving Goal</span>
                <PieChart className="h-5 w-5 text-blue-400" />
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">Goal Reached on</div>
                <div className="text-3xl font-bold text-blue-400">27 2024</div>
                <div className="text-4xl font-bold text-white mt-2">$1,680.00</div>
              </div>
            </div>
          </div>

          {/* Card 3 - Debit Card */}
          <div className="absolute -right-4 top-16 transform rotate-[8deg] hover:rotate-[4deg] transition-transform duration-300">
            <div className="bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 w-80 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <CreditCard className="h-8 w-8 text-cyan-400" />
                <span className="text-gray-400 text-sm">Debit Card</span>
              </div>
              <div className="text-right">
                <div className="text-5xl font-bold text-white mb-2">$4000</div>
                <div className="text-cyan-400 text-lg font-medium">
                  Budget Power for Zeinab
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Available Balance</span>
                  <div className="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center">
                    <ArrowRight className="h-4 w-4 text-black" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Arrow Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-12 h-12 border-2 border-white/30 rounded-full flex items-center justify-center animate-bounce">
            <ArrowRight className="h-5 w-5 text-white/70 transform rotate-90" />
          </div>
        </div>
      </div>

      {/* Custom styles for grid pattern */}
      <style jsx>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </main>
  );
}
