"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
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

export default function Principles() {
  return (
    <section
      id="principles"
      className="relative section-py bg-brand-white text-brand-green overflow-hidden"
    >
      {/* Subtle decorative pattern */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231a2e25' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative z-10 section-container">
        {/* Header row with visual anchor */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="relative w-full aspect-4/3 overflow-hidden rounded-xl shadow-2xl border border-brand-green/10 bg-brand-green">
              <Image
                src="/images/principles-market.jpg"
                alt="Vendors at a bustling Nigerian marketplace"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-[center_35%]"
              />
              <div className="absolute inset-0 bg-linear-to-t from-brand-green/75 via-brand-green/25 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white/90 text-sm font-medium leading-relaxed">
                  Grounded in Nigerian communities — where local markets,
                  trade, and everyday enterprise drive lasting growth.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-brand-gold" />
              <span className="text-brand-gold uppercase tracking-[0.3em] text-xs font-bold">
                Foundational Values
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight text-brand-green">
              The <span className="text-brand-gold italic">HIPTEA</span>{" "}
              Principles
            </h2>

            <p className="text-brand-green/65 text-base max-w-xl leading-relaxed">
              The Guiding Principles that shape our interactions with investors
              and our communities.
            </p>
          </motion.div>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hiptea.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08, ease: "easeOut" }}
              className="group relative bg-white border border-brand-green/8 p-8 rounded-lg hover:border-brand-gold/30 hover:shadow-lg transition-all duration-500 overflow-hidden"
            >
              {/* Large backdrop letter */}
              <span className="absolute -top-6 -right-6 text-[10rem] font-serif font-bold text-brand-green/[0.03] group-hover:text-brand-gold/[0.06] transition-all duration-700 select-none pointer-events-none">
                {item.letter}
              </span>

              <div className="relative z-10">
                <div className="relative w-14 h-14 rounded-lg bg-brand-green/5 border border-brand-green/10 flex items-center justify-center mb-6 group-hover:border-brand-gold/40 group-hover:bg-brand-gold/10 transition-all duration-500">
                  <item.icon
                    size={26}
                    className="text-brand-gold group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="flex items-baseline gap-3 mb-3">
                  <span className="text-brand-gold text-sm font-bold uppercase tracking-wider">
                    {item.letter}
                  </span>
                  <h3 className="text-xl font-serif text-brand-green font-medium group-hover:text-brand-gold transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>

                <p className="text-brand-green/60 text-sm leading-relaxed group-hover:text-brand-green/75 transition-colors duration-300">
                  {item.desc}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-gold group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
