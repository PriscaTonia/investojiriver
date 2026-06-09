"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Cpu,
  Sprout,
  Trophy,
  ShoppingBag,
  Gem,
  Store,
  ArrowUpRight,
} from "lucide-react";

const sectors = [
  {
    name: "ICT",
    icon: Cpu,
    desc: "Building digital infrastructure and tech-enabled service centers for a connected Oji River.",
    image: "/images/sectors/ict.png",
  },
  {
    name: "Agriculture",
    icon: Sprout,
    desc: "Modernizing crop production, agro-processing and industrial agricultural value chains.",
    image: "/images/sectors/agriculture.png",
  },
  {
    name: "Sports",
    icon: Trophy,
    desc: "Developing world-class sporting facilities and an ecosystem for athletic excellence.",
    image: "/images/sectors/sports.png",
  },
  {
    name: "Trade",
    icon: ShoppingBag,
    desc: "Positioning Oji River as a thriving commercial hub for local and cross-border trade.",
    image: "/images/sectors/trade.png",
  },
  {
    name: "Mineral Devt.",
    icon: Gem,
    desc: "Unlocking the region's vast solid mineral resources through responsible extraction.",
    image: "/images/sectors/mineral.png",
  },
  {
    name: "SME Support",
    icon: Store,
    desc: "Empowering small and medium enterprises with capital, mentorship and market access.",
    image: "/images/sectors/sme.png",
  },
];

export default function Sectors() {
  return (
    <section id="sectors" className="py-24 bg-[#f5f0e8]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-[#c9a84c]" />
              <span className="text-[#c9a84c] uppercase tracking-[0.3em] text-xs font-bold">
                Strategic Focus Areas
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl text-[#1a2e25] font-serif leading-tight">
              Primary Investment <br />
              <em className="italic">Sectors</em>
            </h2>
          </div>
          <p className="text-[#1a2e25]/55 max-w-sm mt-6 md:mt-0 text-sm leading-relaxed">
            We target industries that offer high growth potential and
            significant social impact for the Oji River community.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sectors.map((sector, idx) => (
            <motion.div
              key={sector.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="group relative overflow-hidden cursor-pointer"
              style={{ height: "340px" }}
            >
              {/* Background Image */}
              <Image
                src={sector.image}
                alt={sector.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-[#1a2e25]/70 group-hover:bg-[#1a2e25]/55 transition-all duration-500" />

              {/* Gold top bar sweeps on hover */}
              <div className="absolute top-0 left-0 w-0 h-1 bg-[#c9a84c] group-hover:w-full transition-all duration-500" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                {/* Top row */}
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 border border-white/20 flex items-center justify-center group-hover:border-[#c9a84c]/60 transition-colors duration-300">
                    <sector.icon size={22} className="text-[#c9a84c]" />
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="text-white/0 group-hover:text-[#c9a84c] -translate-y-1 translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300"
                  />
                </div>

                {/* Bottom */}
                <div>
                  <h3 className="text-2xl font-serif text-white mb-3">
                    {sector.name}
                  </h3>
                  <p className="text-white/0 group-hover:text-white/70 text-sm leading-relaxed transition-all duration-300 max-h-0 group-hover:max-h-24 overflow-hidden">
                    {sector.desc}
                  </p>
                  <div className="w-8 h-px bg-[#c9a84c]/50 mt-4 group-hover:w-16 transition-all duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
