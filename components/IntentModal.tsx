"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, Briefcase, Eye, ArrowRight } from "lucide-react";

const options = [
  {
    id: "investments",
    label: "For Investments",
    description:
      "I'm looking for strategic investment opportunities in the region.",
    icon: TrendingUp,
    target: "#investment-opportunities",
  },
  {
    id: "jobs",
    label: "For Job Opportunities",
    description: "I'm looking for career growth and employment in Oji River.",
    icon: Briefcase,
    target: "#job-opportunities",
  },
  {
    id: "looking",
    label: "Just Looking Around",
    description: "I want to learn more about the agency and our local vision.",
    icon: Eye,
    target: "#about",
  },
];

export default function IntentModal() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleSelect = (id: string, target: string) => {
    setIsVisible(false);

    // Smooth scroll to target after modal closes
    setTimeout(() => {
      const element = document.querySelector(target);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 500);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-100 flex items-center justify-center bg-brand-green overflow-hidden p-6"
        >
          {/* Subtle grain texture overlay */}
          <div className="absolute inset-0 opacity-5 pointer-events-none grain-overlay" />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="w-full max-w-[560px] bg-brand-white p-8 md:p-12 relative shadow-2xl"
          >
            <div className="w-16 h-1 bg-brand-gold mb-8" />

            <h2 className="text-4xl md:text-5xl font-serif text-brand-green mb-4 leading-tight">
              Welcome to <br />
              ORIPA
            </h2>
            <p className="text-brand-green/60 uppercase tracking-widest text-xs font-bold mb-10">
              What brings you here today?
            </p>

            <div className="space-y-4">
              {options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleSelect(option.id, option.target)}
                  className="w-full group flex items-center p-6 text-left border border-brand-green/10 hover:border-brand-gold transition-all duration-300 hover:bg-brand-gold/5"
                >
                  <div className="w-12 h-12 bg-brand-green items-center justify-center flex mr-6 group-hover:scale-110 transition-transform">
                    <option.icon className="text-brand-gold" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="text-brand-green font-bold text-lg mb-1">
                      {option.label}
                    </div>
                    <div className="text-brand-green/50 text-sm leading-tight">
                      {option.description}
                    </div>
                  </div>
                  <ArrowRight
                    className="text-brand-green/20 group-hover:text-brand-gold group-hover:translate-x-2 transition-all"
                    size={20}
                  />
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
