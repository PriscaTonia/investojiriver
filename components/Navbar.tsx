"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Mission & Vision", href: "#vision" },
  { name: "Principles", href: "#principles" },
  { name: "Sectors", href: "#sectors" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

const SECTION_ORDER = [
  "about",
  "vision",
  "principles",
  "sectors",
  "gallery",
  "investment-opportunities",
  "contact",
];

function getSectionDocumentTop(el: HTMLElement) {
  return el.getBoundingClientRect().top + window.scrollY;
}

function getActiveSectionSnapshot() {
  const scrollMarker = window.scrollY + window.innerHeight * 0.35;
  let current = "";

  for (const id of SECTION_ORDER) {
    const el = document.getElementById(id);
    if (el && scrollMarker >= getSectionDocumentTop(el)) {
      current = id;
    }
  }

  return current;
}

function subscribeToScroll(onStoreChange: () => void) {
  window.addEventListener("scroll", onStoreChange, { passive: true });
  window.addEventListener("resize", onStoreChange);
  return () => {
    window.removeEventListener("scroll", onStoreChange);
    window.removeEventListener("resize", onStoreChange);
  };
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [navOverride, setNavOverride] = useState<string | null>(null);

  const scrolled = useSyncExternalStore(
    subscribeToScroll,
    () => window.scrollY > 60,
    () => false
  );

  const scrollActiveSection = useSyncExternalStore(
    subscribeToScroll,
    getActiveSectionSnapshot,
    () => ""
  );

  const activeSection = navOverride ?? scrollActiveSection;

  useEffect(() => {
    const clearOverride = () => setNavOverride(null);
    window.addEventListener("scroll", clearOverride, { passive: true });
    return () => window.removeEventListener("scroll", clearOverride);
  }, []);

  const handleNavClick = (href: string) => {
    setNavOverride(href.replace("#", ""));
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#1a2e25]/95 backdrop-blur-md py-4 border-b border-white/10 shadow-xl"
          : "bg-transparent py-6"
      }`}
    >
      <div className="section-container relative flex items-center min-h-14">
        {/* Logo — hidden at top of hero, fades in on scroll */}
        <Link
          href="/"
          aria-hidden={!scrolled}
          tabIndex={scrolled ? 0 : -1}
          className={`flex items-center shrink-0 overflow-hidden transition-all duration-500 ease-out ${
            scrolled
              ? "opacity-100 w-auto translate-x-0 pointer-events-auto"
              : "opacity-0 w-0 -translate-x-2 pointer-events-none"
          }`}
        >
          <Image
            src="/images/logo.png"
            alt="ORIPA Logo"
            width={200}
            height={80}
            className="h-14 md:h-16 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav — centered at top, shifts right when logo appears */}
        <div
          className={`hidden lg:flex items-center gap-5 xl:gap-6 2xl:gap-8 transition-all duration-500 ease-out min-w-0 ${
            scrolled
              ? "ml-auto translate-x-0"
              : "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          }`}
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`relative shrink-0 text-[11px] xl:text-xs uppercase tracking-[0.15em] xl:tracking-[0.2em] font-medium transition-colors duration-300 whitespace-nowrap ${
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
            href="#investment-opportunities"
            onClick={() => handleNavClick("#investment-opportunities")}
            className="shrink-0 whitespace-nowrap bg-[#c9a84c] text-[#1a2e25] px-5 xl:px-6 py-2.5 text-[11px] xl:text-xs font-bold uppercase tracking-wider xl:tracking-widest hover:bg-[#c9a84c]/90 transition-all duration-300 hover:shadow-[0_0_20px_rgba(201,168,76,0.4)]"
          >
            Invest Now
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          className="lg:hidden text-white p-1 ml-auto"
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
            className="lg:hidden overflow-hidden bg-[#1a2e25] border-t border-white/10"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link, i) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                  >
                    <Link
                      href={link.href}
                      className={`text-xl font-serif transition-colors ${
                        isActive
                          ? "text-[#c9a84c]"
                          : "text-white/80 hover:text-[#c9a84c]"
                      }`}
                      onClick={() => handleNavClick(link.href)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.07 }}
              >
                <Link
                  href="#investment-opportunities"
                  className="inline-block bg-[#c9a84c] text-[#1a2e25] px-6 py-3 text-sm font-bold uppercase tracking-widest text-center"
                  onClick={() => handleNavClick("#investment-opportunities")}
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
