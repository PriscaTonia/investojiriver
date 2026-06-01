"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Sectors", href: "#sectors" },
  { name: "Vision", href: "#vision" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      // Active section tracking
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const id of sections.toReversed()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#1a2e25]/95 backdrop-blur-md py-4 border-b border-white/10 shadow-xl"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="w-2 h-2 rounded-full bg-[#c9a84c] group-hover:scale-125 transition-transform duration-300" />
          <span className="text-2xl font-serif font-bold tracking-tight text-white">
            ORIPA
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-300 ${
                  isActive ? "text-[#c9a84c]" : "text-white/70 hover:text-white"
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 w-full h-px bg-[#c9a84c]"
                  />
                )}
              </Link>
            );
          })}

          <Link
            href="#contact"
            className="bg-[#c9a84c] text-[#1a2e25] px-6 py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-[#c9a84c]/90 transition-all duration-300 hover:shadow-[0_0_20px_rgba(201,168,76,0.4)]"
          >
            Invest Now
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={isOpen ? "close" : "open"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </motion.div>
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-[#1a2e25] border-t border-white/10"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link
                    href={link.href}
                    className="text-xl font-serif text-white/80 hover:text-[#c9a84c] transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.07 }}
              >
                <Link
                  href="#contact"
                  className="inline-block bg-[#c9a84c] text-[#1a2e25] px-6 py-3 text-sm font-bold uppercase tracking-widest text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Invest Now
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
