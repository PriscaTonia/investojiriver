"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const YOUTUBE_VIDEO_ID = "3qKZ1Z0bLcA";

const galleryImages = [
  // Right — top (1)
  {
    src: "/images/gallery/conference-attendees.png",
    alt: "ORIPA leadership and delegates at a conference session",
  },
  // Right — middle row (2)
  {
    src: "/images/gallery/networking-portrait.png",
    alt: "ORIPA representatives networking at a professional event",
  },
  {
    src: "/images/gallery/partnership-handshake.png",
    alt: "Partnership handshake at an official ORIPA engagement",
  },
  // Left — under video
  {
    src: "/images/gallery/outdoor-event.png",
    alt: "ORIPA team at an outdoor community and investment event",
  },
  // Right — bottom (1)
  {
    src: "/images/gallery/conference-networking.png",
    alt: "Delegates networking at a conference hall in Oji River",
  },
];

function GalleryImage({
  image,
  index,
  wide = false,
  onOpen,
}: {
  image: (typeof galleryImages)[number];
  index: number;
  wide?: boolean;
  onOpen: (index: number) => void;
}) {
  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      onClick={() => onOpen(index)}
      className={`group relative w-full overflow-hidden bg-brand-green/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold ${
        wide ? "aspect-[16/9]" : "aspect-square"
      }`}
      aria-label={`View ${image.alt}`}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-brand-green/0 group-hover:bg-brand-green/20 transition-colors duration-300" />
    </motion.button>
  );
}

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Right column: 1 wide → 2 portrait → 1 wide
  const rightTop = galleryImages[0];
  const rightMiddle = galleryImages.slice(1, 3);
  const leftImage = galleryImages[3];
  const rightBottom = galleryImages[4];

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

  const openLightbox = (index: number) => setLightboxIndex(index);

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 lg:gap-5 md:items-stretch max-w-6xl mx-auto">
          {/* Left: video fills remaining height; image beneath matches right-column proportions */}
          <div className="flex flex-col gap-3 sm:gap-4 lg:gap-5 min-w-0 w-full md:h-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full aspect-[2/3] md:aspect-auto md:flex-1 md:min-h-0 bg-brand-green overflow-hidden shadow-xl"
            >
              <iframe
                src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`}
                title="ORIPA video highlight"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </motion.div>

            {leftImage && (
              <div className="shrink-0">
                <GalleryImage
                  image={leftImage}
                  index={3}
                  wide
                  onOpen={openLightbox}
                />
              </div>
            )}
          </div>

          {/* Right: 1 → 2 → 1 — sets the column height on desktop */}
          <div className="flex flex-col gap-3 sm:gap-4 lg:gap-5 min-w-0 w-full shrink-0">
            {rightTop && (
              <GalleryImage
                image={rightTop}
                index={1}
                wide
                onOpen={openLightbox}
              />
            )}

            {rightMiddle.length > 0 && (
              <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-5">
                {rightMiddle.map((image, idx) => (
                  <GalleryImage
                    key={image.src}
                    image={image}
                    index={idx + 2}
                    onOpen={openLightbox}
                  />
                ))}
              </div>
            )}

            {rightBottom && (
              <GalleryImage
                image={rightBottom}
                index={4}
                wide
                onOpen={openLightbox}
              />
            )}
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
