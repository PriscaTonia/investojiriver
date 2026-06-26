"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const YOUTUBE_VIDEO_ID = "3qKZ1Z0bLcA";

const galleryImages = [
  {
    src: "/images/gallery/conference-attendees.png",
    alt: "ORIPA leadership and delegates at a conference session",
  },
  {
    src: "/images/gallery/networking-portrait.png",
    alt: "ORIPA representatives networking at a professional event",
  },
  {
    src: "/images/gallery/partnership-handshake.png",
    alt: "Partnership handshake at an official ORIPA engagement",
  },
  {
    src: "/images/gallery/outdoor-event.png",
    alt: "ORIPA team at an outdoor community and investment event",
  },
  {
    src: "/images/gallery/conference-networking.png",
    alt: "Delegates networking at a conference hall in Oji River",
  },
];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxIndex, closeLightbox]);

  return (
    <section
      id="gallery"
      className="section-py bg-brand-white border-t border-brand-green/5"
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-4 sm:mb-6"
        >
          <span className="w-8 h-px bg-brand-gold" />
          <span className="text-brand-gold uppercase tracking-[0.3em] text-xs font-bold">
            Gallery
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-10 sm:mb-12 md:mb-16 max-w-3xl"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-brand-green leading-tight mb-4 sm:mb-6">
            Our Work in <em className="italic text-brand-gold">Pictures</em>
          </h2>
          <p className="text-brand-green/70 text-base sm:text-lg leading-relaxed">
            A glimpse into ORIPA&apos;s engagements, events, and the people
            driving investment and development across Oji River.
          </p>
        </motion.div>

        {/* 50/50 from md up; stacked on small phones */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start mb-10 sm:mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full max-w-[280px] sm:max-w-[340px] mx-auto md:max-w-none md:mx-0 aspect-[9/16] md:max-h-[min(75vh,680px)] bg-brand-green overflow-hidden shadow-xl"
          >
            <iframe
              src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`}
              title="ORIPA video highlight"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </motion.div>

          <div className="grid grid-cols-2 gap-2.5 sm:gap-3 md:gap-4 min-w-0">
            {galleryImages.map((image, idx) => (
              <motion.button
                key={image.src}
                type="button"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                onClick={() => setLightboxIndex(idx)}
                className={`group relative overflow-hidden bg-brand-green/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold ${
                  idx === 0
                    ? "col-span-2 aspect-[16/10] sm:aspect-[2/1] md:aspect-[16/10]"
                    : "aspect-square"
                }`}
                aria-label={`View ${image.alt}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-brand-green/0 group-hover:bg-brand-green/20 transition-colors duration-300" />
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-6 md:p-8"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label="Image preview"
          >
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute top-3 right-3 sm:top-6 sm:right-6 text-white/80 hover:text-white transition-colors p-2 z-10"
              aria-label="Close image viewer"
            >
              <X size={24} className="sm:w-7 sm:h-7" />
            </button>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-5xl h-[60vh] sm:h-[70vh] md:h-[75vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages[lightboxIndex].src}
                alt={galleryImages[lightboxIndex].alt}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
