"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, ArrowUp, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "About Agency", href: "#about" },
  { label: "Key Sectors", href: "#sectors" },
  { label: "Vision & Mission", href: "#vision" },
  { label: "Contact", href: "#contact" },
];

const legalLinks = [
  { label: "Investment Act", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Public Reports", href: "#" },
  { label: "Tenders", href: "#" },
];

const socials: { label: string; href: string; icon: React.ReactNode }[] = [
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
    href: "https://instagram.com/investojiriver",
  },
  {
    icon: <Mail size={15} />,
    label: "Email",
    href: "mailto:info@investojiriver.org",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#111f18] text-white border-t border-white/5">
      {/* ── Main Footer Body ── */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 pb-16 border-b border-white/5">
          {/* Brand col */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center group mb-6">
              <Image
                src="/images/logo-white-text.png"
                alt="ORIPA Logo"
                width={124}
                height={50}
                className="h-10 md:h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-white/35 text-sm font-serif italic leading-relaxed mb-8">
              Driving Growth. <br />
              Building Futures.
            </p>

            {/* Socials */}
            <div className="flex gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/35 hover:text-[#c9a84c] hover:border-[#c9a84c]/40 transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Spacer on md */}
          <div className="hidden md:block" />

          {/* Explore */}
          <div>
            <h4 className="text-[#c9a84c] text-xs uppercase tracking-[0.25em] font-bold mb-6">
              Explore
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/45 text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legislative */}
          <div>
            <h4 className="text-[#c9a84c] text-xs uppercase tracking-[0.25em] font-bold mb-6">
              Legislative
            </h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/45 text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 gap-4">
          <p className="text-white/20 text-xs tracking-wide">
            © 2026 Oji River Investment Promotion Agency (ORIPA). All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-6">
              <span className="text-white/15 text-xs uppercase tracking-widest hidden sm:block">
                Enugu State, Nigeria
              </span>
              <span className="w-px h-3 bg-white/10 hidden sm:block" />
              <a
                href="https://investojiriver.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/20 text-xs uppercase tracking-widest hover:text-white/40 transition-colors flex items-center gap-1"
              >
                investojiriver.org
                <ArrowUpRight size={10} />
              </a>
              <span className="w-px h-3 bg-white/10" />
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="flex items-center gap-2 text-white/25 hover:text-[#c9a84c] transition-colors text-xs uppercase tracking-widest group"
              >
                Top
                <ArrowUp
                  size={12}
                  className="group-hover:-translate-y-0.5 transition-transform"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
