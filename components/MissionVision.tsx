"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

export default function MissionVision() {
  return (
    <section
      id="vision"
      className="relative section-py bg-[#1a2e25] text-white overflow-hidden"
    >
      {/* Background grain texture */}
      <div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E\")",
          backgroundSize: "200px 200px",
        }}
      />

      <div className="relative z-10 section-container">
        {/* Eyebrow Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="w-8 h-px bg-[#c9a84c]" />
          <span className="text-[#c9a84c] uppercase tracking-[0.3em] text-xs font-bold">
            Mission & Vision
          </span>
        </motion.div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* LEFT: Our Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative overflow-hidden rounded-xl border border-white/10 flex flex-col justify-end p-6 sm:p-8 md:p-12 min-h-[320px] sm:min-h-[400px] lg:min-h-[450px] group shadow-2xl"
          >
            {/* Background Image */}
            <Image
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=900&q=80"
              alt="Community development landscape"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Dark green overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a2e25] via-[#1a2e25]/80 to-transparent z-10" />

            {/* Content overlay */}
            <div className="relative z-20">
              <div className="flex items-center gap-4 text-[#c9a84c] mb-5">
                <div className="w-12 h-12 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex items-center justify-center shrink-0">
                  <Target size={22} />
                </div>
                <h3 className="text-3xl md:text-4xl font-serif text-white group-hover:text-[#c9a84c] transition-colors duration-500">
                  Our Mission
                </h3>
              </div>

              <p className="text-base md:text-lg text-white/75 font-serif leading-relaxed">
                To sustainably transform Oji River&apos;s economic and social
                landscape through impactful investment.
              </p>

              <div className="w-12 h-0.5 bg-[#c9a84c] mt-8 group-hover:w-24 transition-all duration-500" />
            </div>
          </motion.div>

          {/* RIGHT: Our Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative overflow-hidden rounded-xl border border-white/10 flex flex-col justify-between p-6 sm:p-8 md:p-12 min-h-[320px] sm:min-h-[400px] lg:min-h-[450px] group bg-[#162720]/90 shadow-2xl"
          >
            {/* Subtle backdrop overlay */}
            <div className="absolute inset-0 bg-radial-gradient from-[#c9a84c]/5 to-transparent opacity-30 pointer-events-none" />

            {/* Background image styled with opacity */}
            <Image
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=80"
              alt="Modern cityscape and infrastructure"
              fill
              className="object-cover opacity-10 group-hover:opacity-15 transition-opacity duration-1000"
            />

            {/* Header Content */}
            <div className="relative z-10">
              <div className="flex items-center gap-4 text-[#c9a84c] mb-5">
                <div className="w-12 h-12 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex items-center justify-center shrink-0">
                  <Eye size={22} />
                </div>
                <h3 className="text-3xl md:text-4xl font-serif text-white group-hover:text-[#c9a84c] transition-colors duration-500">
                  Our Vision
                </h3>
              </div>

              <p className="text-base md:text-lg text-white/70 font-serif leading-relaxed max-w-md">
                To deploy $100 million in investment capital, creating 10,000
                new jobs in ten years.
              </p>
            </div>

            {/* Structured Stats Grid (The "10-10-10" target metrics) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 border-t border-white/10 pt-8 mt-8 sm:mt-12 relative z-10">
              {[
                { value: "$100M", label: "Invested" },
                { value: "10K", label: "Jobs Created" },
                { value: "10YR", label: "Horizon" },
              ].map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-3xl md:text-4xl font-serif text-[#c9a84c] font-medium mb-2 group-hover:scale-105 transition-transform duration-500 origin-left">
                    {stat.value}
                  </span>
                  <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-white/40">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
