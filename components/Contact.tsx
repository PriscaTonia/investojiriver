"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  TrendingUp,
  Briefcase,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

const contactDetails = [
  {
    icon: <Mail size={15} />,
    label: "Email",
    value: "info@investojiriver.org",
    href: "mailto:info@investojiriver.org",
  },
  {
    icon: <Phone size={15} />,
    label: "Phone",
    value: "(+234) 8012191227",
    href: "tel:+2348012191227",
  },
  {
    icon: <MapPin size={15} />,
    label: "Address",
    value: "LGA Council HQ, Oji River, Enugu State",
    href: "https://maps.google.com",
  },
  {
    icon: (
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
    label: "Instagram",
    value: "@investojiriver",
    href: "https://instagram.com/investojiriver",
  },
];

const ctas = [
  {
    icon: TrendingUp,
    label: "Looking to Invest?",
    desc: "Explore active opportunities and get in early on Oji River's growth story.",
    button: "Investment Enquiry",
    href: "https://forms.google.com",
  },
  {
    icon: Briefcase,
    label: "Looking for a Job?",
    desc: "Register your interest and be first in line when new roles open up.",
    button: "Job Registration",
    href: "https://forms.google.com",
  },
  {
    icon: MessageCircle,
    label: "Got any Questions? Let's Talk",
    desc: "Have a question about ORIPA, our mandate, or Oji River as a destination?",
    button: "Send a Message",
    href: "mailto:info@investojiriver.org",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-[#1a2e25] text-white overflow-hidden">
      {/* ── Top — Bold Statement ── */}
      <div className="section-container pt-20 md:pt-24 pb-16 md:pb-20 border-b border-white/10">
        <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-px bg-[#c9a84c]" />
              <span className="text-[#c9a84c] uppercase tracking-[0.3em] text-xs font-bold">
                Get In Touch
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.05]">
              Oji River Is <br />
              <em className="italic text-[#c9a84c]">Waiting for You</em>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="md:pb-2"
          >
            <p className="text-white/55 text-lg leading-relaxed mb-8">
              Whether you&apos;re an investor, a job seeker, or simply curious —
              our team is ready to speak with you. Reach out through the right
              channel below.
            </p>

            {/* Contact details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
              {contactDetails.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 group"
                >
                  {item.icon}
                  <div>
                    <div className="text-white/35 text-xs uppercase tracking-widest mb-0.5">
                      {item.label}
                    </div>
                    <div className="text-white/80 text-sm group-hover:text-white transition-colors">
                      {item.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Office hours */}
            <div className="flex items-center gap-2 mt-6 pt-6 border-t border-white/10">
              <Clock size={14} className="text-white/25" />
              <span className="text-white/35 text-xs uppercase tracking-widest">
                Mon – Fri &nbsp;·&nbsp; 9:00 AM – 5:00 PM
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Bottom — Three CTAs ── */}
      <div className="section-container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
          {ctas.map((cta, idx) => (
            <motion.div
              key={cta.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#1a2e25] p-6 sm:p-8 md:p-10 group hover:bg-[#1f3a2e] transition-all duration-300 relative overflow-hidden"
            >
              {/* Hover top border */}
              <div className="absolute top-0 left-0 w-0 h-px bg-[#c9a84c] group-hover:w-full transition-all duration-500" />

              <div className="w-12 h-12 border border-white/15 flex items-center justify-center mb-8 group-hover:border-[#c9a84c]/50 transition-colors duration-300">
                <cta.icon size={20} className="text-[#c9a84c]" />
              </div>

              <div className="text-[#c9a84c] text-xs uppercase tracking-[0.25em] mb-2">
                {cta.label}
              </div>
              <p className="text-white/50 text-sm leading-relaxed mb-10">
                {cta.desc}
              </p>

              <a
                href={cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white text-sm font-bold uppercase tracking-widest border-b border-white/20 pb-1 hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all duration-300 group/link"
              >
                {cta.button}
                <ArrowUpRight
                  size={14}
                  className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
                />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
