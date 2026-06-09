"use client";

import { motion } from "framer-motion";
import { Sprout, Factory, Building2, ArrowRight } from "lucide-react";

const opportunities = [
  {
    title: "Agriculture & Agro-processing",
    icon: Sprout,
    description:
      "Expansion of rice mills and cashew processing hubs. Leveraging the fertile basin of Oji River for industrial scale production.",
    status: "Now Open",
  },
  {
    title: "Manufacturing & Industry",
    icon: Factory,
    description:
      "Creation of a light-industrial manufacturing cluster. Focus on component assembly and local material engineering.",
    status: "Coming Soon",
  },
  {
    title: "Real Estate & Infrastructure",
    icon: Building2,
    description:
      "Premium residential estates and modern commercial office spaces to support the growing white-collar demographic.",
    status: "Now Open",
  },
];

export default function InvestmentOpportunities() {
  return (
    <section id="investment-opportunities" className="py-24 bg-brand-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl text-brand-green font-serif mb-8 leading-tight">
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
              className="bg-white p-8 border border-brand-green/5 shadow-sm hover:shadow-xl transition-all duration-500 group"
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
          className="bg-brand-green p-12 md:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full -mr-32 -mt-32" />

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl text-brand-white font-serif mb-4">
              Ready to invest in Oji River's future?
            </h3>
            <p className="text-brand-white/60 mb-10 max-w-xl mx-auto">
              Join a growing network of investors building the next decade of
              Oji River.
            </p>

            <a
              href="https://forms.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-brand-gold text-brand-green px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-brand-gold/90 transition-all hover:shadow-[0_0_30px_rgba(201,168,76,0.2)] group"
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
