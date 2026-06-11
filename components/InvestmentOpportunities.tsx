"use client";

import { motion } from "framer-motion";
import { Factory, Store, Building2, ArrowRight } from "lucide-react";

const opportunities = [
  {
    title: "SME Production & Processing Park",
    icon: Factory,
    description:
      "A dedicated industrial park for small and medium enterprises in production and agro-processing — with shared infrastructure, streamlined permitting, and ORIPA concierge support.",
    status: "Now Open",
  },
  {
    title: "Rebuilding Ugwuoba Cattle Market",
    icon: Store,
    description:
      "Revitalization of one of the region's key livestock trading hubs — expanding market capacity, modernizing facilities, and unlocking new value for traders and investors.",
    status: "Now Open",
  },
  {
    title: "Construction of 200 Units of Residential Housing",
    icon: Building2,
    description:
      "Development of 200 quality residential units to meet growing housing demand, support workforce expansion, and anchor long-term investment in Oji River.",
    status: "Now Open",
  },
];

export default function InvestmentOpportunities() {
  return (
    <section
      id="investment-opportunities"
      className="section-py bg-white border-t border-brand-green/5"
    >
      <div className="section-container">
        <div className="max-w-4xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-brand-green font-serif mb-6 md:mb-8 leading-tight">
              Investment Opportunities <br />
              in Oji River
            </h2>
            <p className="text-lg text-brand-green/70 leading-relaxed max-w-2xl">
              Oji River is undergoing a transformational decade of growth. ORIPA
              is actively identifying and structuring investment opportunities
              across key sectors — and inviting serious investors to get in
              early.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {opportunities.map((opp, idx) => (
            <motion.div
              key={opp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-6 sm:p-8 border border-brand-green/5 shadow-sm hover:shadow-xl transition-all duration-500 group"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="w-14 h-14 bg-brand-green flex items-center justify-center group-hover:scale-110 transition-transform">
                  <opp.icon className="text-brand-gold" size={28} />
                </div>
                <span
                  className={`text-[10px] uppercase tracking-widest font-bold px-3 py-1 ${
                    opp.status === "Now Open"
                      ? "bg-brand-green text-brand-gold"
                      : "bg-brand-gold/20 text-brand-green"
                  }`}
                >
                  {opp.status}
                </span>
              </div>
              <h3 className="text-xl font-serif text-brand-green mb-4 group-hover:text-brand-gold transition-colors">
                {opp.title}
              </h3>
              <p className="text-brand-green/60 text-sm leading-relaxed mb-6">
                {opp.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-brand-green p-8 sm:p-12 md:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full -mr-32 -mt-32" />

          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl md:text-4xl text-brand-white font-serif mb-4">
              Ready to invest in Oji River&apos;s future?
            </h3>
            <p className="text-brand-white/60 mb-8 md:mb-10 max-w-xl mx-auto text-sm sm:text-base">
              Join a growing network of investors building the next decade of
              Oji River.
            </p>

            <a
              href="https://forms.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center text-center bg-brand-gold text-brand-green px-6 sm:px-10 py-4 sm:py-5 text-xs sm:text-sm font-bold uppercase tracking-widest hover:bg-brand-gold/90 transition-all hover:shadow-[0_0_30px_rgba(201,168,76,0.2)] group max-w-full"
            >
              Contact Us for Investment & SME Funding Inquiries
              <ArrowRight
                className="ml-3 group-hover:translate-x-2 transition-transform"
                size={18}
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
