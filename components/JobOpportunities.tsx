"use client";

import React from "react";
import { motion } from "framer-motion";
import { Wheat, Hammer, Monitor } from "lucide-react";

const jobCategories = [
  {
    title: "Agriculture & Food Processing",
    icon: Wheat,
    description: "Roles in mechanized farming, mill operations, and quality control processing.",
    status: "Upcoming",
  },
  {
    title: "Construction & Infrastructure",
    icon: Hammer,
    description: "Civil engineering, site management, and technical construction roles for upcoming projects.",
    status: "Upcoming",
  },
  {
    title: "Technology & Administration",
    icon: Monitor,
    description: "Digital operations, project management, and administrative support within the agency cluster.",
    status: "Upcoming",
  },
];

export default function JobOpportunities() {
  return (
    <section id="job-opportunities" className="py-24 bg-brand-green text-brand-white grain-overlay">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              Job Opportunities <br />in Oji River
            </h2>
            <p className="text-lg text-brand-white/70 leading-relaxed max-w-2xl">
              As investment flows into Oji River, thousands of new jobs will be created across sectors. Register now to be first in line when opportunities open.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {jobCategories.map((job, idx) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 p-8 border border-white/10 hover:border-brand-gold transition-all duration-500 group"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="w-14 h-14 bg-brand-gold flex items-center justify-center group-hover:scale-110 transition-transform">
                  <job.icon className="text-brand-green" size={28} />
                </div>
                <span className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 bg-brand-gold text-brand-green">
                  {job.status}
                </span>
              </div>
              <h3 className="text-xl font-serif mb-4 group-hover:text-brand-gold transition-colors">{job.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6">{job.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-brand-gold p-12 md:p-16 text-center"
        >
          <h3 className="text-3xl md:text-4xl text-brand-green font-serif mb-4">Be First in Line for New Jobs</h3>
          <p className="text-brand-green/70 mb-10 max-w-xl mx-auto">Register your interest today and get notified when job opportunities open in your sector.</p>
          
          <a 
            href="https://forms.google.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-green text-brand-white px-10 py-5 text-sm font-bold uppercase tracking-widest hover:opacity-90 transition-all font-sans"
          >
            Register for Job Opportunities
          </a>
        </motion.div>
      </div>
    </section>
  );
}
