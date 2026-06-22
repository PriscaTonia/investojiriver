"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const leaders = [
  {
    src: "/images/Chairman.jpg",
    alt: "Hon. Greg Chijioke Anyaegbudike",
    role: "CHAIRMAN, OJI RIVER LGA",
    name: "Hon. Greg Chijioke Anyaegbudike",
    imageClass: "object-cover object-[center_15%]",
    containerClass: "bg-[#1a2e25]",
  },
  {
    src: "/images/MD-CEO.png",
    alt: "Mr. Donald Madueke",
    role: "Managing Director / CEO, ORIPA",
    name: "Mr. Donald Madueke",
    imageClass: "object-cover object-[center_18%] scale-[1.65] origin-center",
    containerClass: "bg-[#1a2e25]",
  },
];

export default function About() {
  return (
    <section id="about" className="section-py bg-[#f5f0e8] overflow-hidden">
      <div className="section-container">
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
            About Us
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
              <em className="italic text-[#c9a84c]">Strategic Growth</em>
            </h2>
            <p className="text-lg text-[#1a2e25]/65 leading-relaxed mb-6">
              The Oji River Investment Promotion Agency (ORIPA) is a pioneering
              organization dedicated to driving economic growth and development
              in Oji River Local Government Area, Enugu State.
            </p>
            <p className="text-lg text-[#1a2e25]/65 leading-relaxed mb-12">
              Established under a landmark legislative bill passed in 2025,
              ORIPA is uniquely structured as a commercially driven entity.
              With the full backing of the Local Government Council, our
              private-sector framework enables us to access a broader pool of
              investment capital, allowing us to operate with agility,
              transparency, and efficiency.
            </p>

            {/* Stat pills */}
            <div className="flex flex-wrap gap-4">
              {[
                { value: "2025", label: "Established" },
                { value: "LGA", label: "Oji River" },
                { value: "State", label: "Enugu" },
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

          {/* Right — Leadership Portraits */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4"
          >
            {leaders.map((leader, idx) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 + idx * 0.1 }}
                className="relative"
              >
                <div
                  className={`relative w-full aspect-3/4 overflow-hidden ${leader.containerClass}`}
                >
                  <Image
                    src={leader.src}
                    alt={leader.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className={leader.imageClass}
                    priority={idx === 0}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#1a2e25]/90 via-[#1a2e25]/20 to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5">
                    <div className="text-[#c9a84c] text-[10px] sm:text-xs uppercase tracking-[0.25em] mb-1">
                      {leader.role}
                    </div>
                    <div className="text-white text-lg sm:text-xl font-serif leading-snug">
                      {leader.name}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
