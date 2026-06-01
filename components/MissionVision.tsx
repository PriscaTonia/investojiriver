"use client";

import { motion } from "framer-motion";
import {
  Target,
  Eye,
  MapPin,
  Users,
  ShieldCheck,
  Globe,
  Zap,
  Scale,
} from "lucide-react";

const hiptea = [
  {
    letter: "H",
    icon: MapPin,
    title: "Hyperlocal",
    desc: "Deeply rooted in Oji River's unique economic ecosystem, ensuring growth starts at the grassroots.",
  },
  {
    letter: "I",
    icon: Users,
    title: "Investor-Centric",
    desc: "Tailored support systems and protection for every domestic and foreign capital partner.",
  },
  {
    letter: "P",
    icon: ShieldCheck,
    title: "Professional",
    desc: "Private-sector discipline and executive excellence in every public interaction.",
  },
  {
    letter: "T",
    icon: Globe,
    title: "Transparent",
    desc: "Open-book governance and legislative accountability that builds enduring trust.",
  },
  {
    letter: "E",
    icon: Zap,
    title: "Efficient",
    desc: "Streamlined processes that turn capital into community impact, faster.",
  },
  {
    letter: "A",
    icon: Scale,
    title: "Accountable",
    desc: "Taking full ownership of results for both investors and the people of Oji River.",
  },
];

export default function MissionVision() {
  return (
    <section id="vision" className="bg-[#1a2e25] text-white overflow-hidden">
      {/* ── Mission & Vision ── */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="w-8 h-px bg-[#c9a84c]" />
          <span className="text-[#c9a84c] uppercase tracking-[0.3em] text-xs font-bold">
            Purpose & Direction
          </span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-20 mb-24 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="border-l-4 border-brand-gold pl-8"
          >
            <div className="flex items-center mb-6 text-brand-gold">
              <Target size={24} className="mr-3" />
              <span className="uppercase tracking-[0.2em] text-sm font-bold">
                Our Mission
              </span>
            </div>
            <h3 className="text-3xl md:text-4xl font-serif mb-6 leading-tight">
              Sustainably transform Oji River's economic and social landscape
              through impactful investment.
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="border-l-4 border-brand-gold pl-8"
          >
            <div className="flex items-center mb-6 text-brand-gold">
              <Eye size={24} className="mr-3" />
              <span className="uppercase tracking-[0.2em] text-sm font-bold">
                Our Vision
              </span>
            </div>
            <h3 className="text-3xl md:text-4xl font-serif mb-6 leading-tight">
              $10M invested annually · 10,000 jobs created · over a 10-year
              transformative horizon.
            </h3>
          </motion.div>
        </div>

        {/* ── HIPTEA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-4">
            The <span className="text-[#c9a84c] italic">HIPTEA</span> Principles
          </h2>
          <p className="text-white/45 text-sm uppercase tracking-widest">
            The foundational values driving ORIPA's operational excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {hiptea.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="group bg-[#1a2e25] p-8 hover:bg-[#1f3a2e] transition-all duration-300 relative overflow-hidden"
            >
              {/* Large background letter */}
              <span className="absolute top-4 right-6 text-8xl font-serif text-white/3 select-none group-hover:text-white/6 transition-all duration-500">
                {item.letter}
              </span>

              <div className="relative z-10">
                <item.icon
                  size={24}
                  className="text-[#c9a84c] mb-6 group-hover:scale-110 transition-transform duration-300"
                />
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="text-[#c9a84c]/50 text-xs font-bold uppercase tracking-widest">
                    {item.letter}
                  </span>
                  <h4 className="text-lg font-serif text-white">
                    {item.title}
                  </h4>
                </div>
                <p className="text-white/45 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Bottom border reveal on hover */}
              <div className="absolute bottom-0 left-0 w-0 h-px bg-[#c9a84c] group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
