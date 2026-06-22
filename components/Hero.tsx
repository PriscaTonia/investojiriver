"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { sulphurPoint } from "@/lib/fonts";

const stats = [
  { label: "Investment Target", value: "$10M", sublabel: "per year" },
  { label: "Jobs Target", value: "10K", sublabel: "over 10 years" },
  { label: "Strategic Vision", value: "10YR", sublabel: "development plan" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* ── Background Image ── */}
      <Image
        src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1920&q=80"
        alt="Nigeria landscape"
        fill
        priority
        className="object-cover object-center"
      />

      {/* ── Overlays ── */}
      {/* Dark green tint over the image */}
      <div className="absolute inset-0 bg-[#1a2e25]/80 z-10" />
      {/* Subtle grain texture */}
      <div
        className="absolute inset-0 z-10 opacity-30"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E\")",
          backgroundSize: "200px 200px",
        }}
      />
      {/* Gold gradient edge */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-[#c9a84c]/10 to-transparent z-10 pointer-events-none" />

      {/* ── Content ── */}
      <div className="relative z-20 section-container pt-28 pb-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <Image
              src="/images/logo.png"
              alt="Oji River Investment Promotion Agency (ORIPA)"
              width={480}
              height={192}
              className="h-28 sm:h-36 md:h-44 w-auto object-contain mb-10 mx-auto"
              priority
            />

            <div className="max-w-3xl mb-12 mx-auto">
              <h1
                className={`${sulphurPoint.className} text-lg sm:text-xl md:text-2xl font-normal text-white/80 leading-snug tracking-[0.04em]`}
              >
                Welcome to the official website of the Oji River Investment
                Promotion Agency (ORIPA). <br /> Nigeria’s First Local
                Government IPA.
              </h1>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-24 justify-center">
              <a
                href="#sectors"
                className="bg-[#c9a84c] text-[#1a2e25] px-8 py-4 text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-2 group hover:bg-[#c9a84c]/90 transition-all hover:shadow-[0_0_30px_rgba(201,168,76,0.35)]"
              >
                Explore Opportunities
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="#about"
                className="border border-white/25 text-white px-8 py-4 text-sm font-bold uppercase tracking-widest flex items-center justify-center hover:bg-white/5 hover:border-white/40 transition-all"
              >
                About Us
              </a>
            </div>
          </motion.div>

          {/* Stats */}
          {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 border-t border-white/10 pt-10 max-w-3xl mx-auto">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 + idx * 0.12 }}
                className="group text-center"
              >
                <div className="text-3xl md:text-4xl lg:text-5xl text-[#c9a84c] font-serif mb-1">
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-widest text-white/35 mb-0.5">
                  {stat.sublabel}
                </div>
                <div className="text-xs text-white/50">{stat.label}</div>
              </motion.div>
            ))}
          </div> */}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <span className="text-white/30 text-xs uppercase tracking-widest">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-linear-to-b from-[#c9a84c]/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
