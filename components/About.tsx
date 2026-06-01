"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#f5f0e8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="w-8 h-px bg-[#c9a84c]" />
          <span className="text-[#c9a84c] uppercase tracking-[0.3em] text-xs font-bold">
            Who We Are
          </span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left — Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:sticky md:top-32"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#1a2e25] font-serif leading-[1.1] mb-8">
              A Mandate Founded on{" "}
              <em className="italic text-[#c9a84c]"> Strategic Growth</em>
            </h2>
            <p className="text-lg text-[#1a2e25]/65 leading-relaxed mb-6">
              Founded under state legislation in 2025, the Oji River Investment
              Promotion Agency (ORIPA) serves as the dedicated facilitator for
              capital entry and industrial expansion within our region.
            </p>
            <p className="text-lg text-[#1a2e25]/65 leading-relaxed mb-12">
              We operate at the intersection of public policy and private
              efficiency — ensuring every investment is shielded by transparency
              and supported by world-class infrastructure.
            </p>

            {/* Stat pills */}
            <div className="flex flex-wrap gap-4">
              {[
                { value: "2025", label: "Founded" },
                { value: "LGA", label: "Enugu State" },
                { value: "10YR", label: "Vision" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="border border-[#1a2e25]/15 px-5 py-3"
                >
                  <div className="text-[#1a2e25] font-serif text-xl font-bold">
                    {item.value}
                  </div>
                  <div className="text-[#1a2e25]/40 text-xs uppercase tracking-widest">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Image + Leadership Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative"
          >
            {/* Portrait Image */}
            <div className="relative w-full aspect-4/3 overflow-hidden bg-[#1a2e25]">
              <Image
                src="/images/Chairman.jpg"
                alt="Hon. Greg Chijioke Anyaegbudike"
                fill
                className="object-cover object-[center_15%]"
                priority
              />
              {/* Bottom gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-48 bg-linear-to-t from-[#1a2e25]/90 to-transparent" />

              {/* Name overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-[#c9a84c] text-xs uppercase tracking-[0.25em] mb-1">
                  Chairman
                </div>
                <div className="text-white text-2xl font-serif">
                  Hon. Greg Chijioke Anyaegbudike
                </div>
              </div>
            </div>

            {/* Floating Managing Director card */}
            <div className="bg-[#c9a84c] p-6 flex items-center justify-between">
              <div>
                <div className="text-[#1a2e25]/60 text-xs uppercase tracking-widest mb-1">
                  Managing Director
                </div>
                <div className="text-[#1a2e25] text-xl font-serif font-bold">
                  Mr. Donald Madueke
                </div>
              </div>
              <div className="w-px h-12 bg-[#1a2e25]/20" />
              <div className="text-[#1a2e25]/60 text-xs text-right max-w-[140px] leading-relaxed italic">
                Private-sector discipline. Public-sector mandate.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
