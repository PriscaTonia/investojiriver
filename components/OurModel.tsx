"use client";

import { motion } from "framer-motion";
import { Heart, Coins } from "lucide-react";

export default function OurModel() {
  return (
    <section className="section-py bg-brand-white">
      <div className="section-container">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-brand-green mb-4">
            Our Collaborative Model
          </h2>
          <p className="text-brand-green/60 max-w-xl mx-auto">
            Bridging the gap between elite investment and local community
            empowerment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-12">
          {/* The People */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group bg-brand-white p-6 sm:p-8 md:p-12 rounded-3xl border border-brand-green/10 hover:border-brand-gold/30 hover:shadow-2xl transition-all duration-500"
          >
            <div className="w-16 h-16 bg-brand-green rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
              <Heart className="text-brand-gold" size={32} />
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif text-brand-green mb-6">
              The People
            </h3>
            <p className="text-base sm:text-lg text-brand-green/70 leading-relaxed">
              At the heart of our mission are the people of Oji River. We
              prioritize high-impact initiatives that provide measurable
              improvements to the quality of life, ensuring that external
              investment translates into tangible opportunities for every local
              indigene and resident.
            </p>
          </motion.div>

          {/* The Investors */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group bg-brand-green p-6 sm:p-8 md:p-12 rounded-3xl hover:shadow-2xl transition-all duration-500"
          >
            <div className="w-16 h-16 bg-brand-gold rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
              <Coins className="text-brand-green" size={32} />
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif text-white mb-6">
              The Investors
            </h3>
            <p className="text-base sm:text-lg text-white/70 leading-relaxed">
              We define our investors as any individual, institution, or legally
              recognized entity that commits strategic resources—whether
              financial capital, advanced machinery, raw materials, or skilled
              human talent—to the sustainable development of Oji River.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
