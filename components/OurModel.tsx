"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, Coins } from "lucide-react";

export default function OurModel() {
  return (
    <section className="py-24 bg-brand-white border-t border-brand-green/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 px-4">
          <h2 className="text-4xl md:text-5xl text-brand-green mb-4">Our Collaborative Model</h2>
          <p className="text-brand-green/60 max-w-xl mx-auto">Bridging the gap between elite investment and local community empowerment.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* The People */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group bg-brand-white p-12 rounded-3xl border border-brand-green/10 hover:border-brand-gold/30 hover:shadow-2xl transition-all duration-500"
          >
            <div className="w-16 h-16 bg-brand-green rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
              <Heart className="text-brand-gold" size={32} />
            </div>
            <h3 className="text-3xl font-serif text-brand-green mb-6">The People</h3>
            <p className="text-lg text-brand-green/70 leading-relaxed mb-6">
              We ensure every project creates localized value. Our model mandates that investments contribute to community health, education, and long-term skill acquisition for Oji River residents.
            </p>
            <ul className="space-y-3 text-brand-green/60 font-medium">
              <li className="flex items-center">• 10,000 Job Guarantee Program</li>
              <li className="flex items-center">• Local Content Procurement</li>
              <li className="flex items-center">• Skill Transfer Initiatives</li>
            </ul>
          </motion.div>

          {/* The Investors */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group bg-brand-green p-12 rounded-3xl hover:shadow-2xl transition-all duration-500"
          >
            <div className="w-16 h-16 bg-brand-gold rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
              <Coins className="text-brand-green" size={32} />
            </div>
            <h3 className="text-3xl font-serif text-white mb-6">The Investors</h3>
            <p className="text-lg text-white/70 leading-relaxed mb-6">
              We provide the legislative and infrastructural security investors need to thrive. Whether supplying financial or in-kind capital, our partners benefit from a streamlined business environment.
            </p>
            <ul className="space-y-3 text-white/50 font-medium">
              <li className="flex items-center">• Protected Legislative Framework</li>
              <li className="flex items-center">• Accelerated Permitting Cycles</li>
              <li className="flex items-center">• 24/7 Agency Concierge Support</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
