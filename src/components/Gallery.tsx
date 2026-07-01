"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { SectionWrapper, SectionTitle } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { weddingConfig } from "@/config/wedding";
import { cn } from "@/lib/utils";

const masonryHeights = [
  "h-56",
  "h-72",
  "h-48",
  "h-64",
  "h-80",
  "h-52",
  "h-60",
  "h-64",
  "h-72",
  "h-48",
  "h-56",
  "h-60",
];

export function Gallery() {
  const [activeFilter, setActiveFilter] = useState("all");
  const images = Array.from({ length: weddingConfig.gallery.imageCount }, (_, i) => i);

  return (
    <SectionWrapper id="galeria" className="bg-cream-alt">
      <SectionTitle title="Galeria gości" subtitle="Wspólne wspomnienia" />

      <div className="mb-10 flex flex-wrap justify-center gap-2 md:gap-4">
        {weddingConfig.gallery.filters.map((filter) => (
          <button
            key={filter.id}
            type="button"
            onClick={() => setActiveFilter(filter.id)}
            className={cn(
              "rounded-full px-5 py-2 text-xs font-medium tracking-wider uppercase transition-all",
              activeFilter === filter.id
                ? "bg-olive text-white"
                : "border border-border bg-white text-body hover:border-gold/40"
            )}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="columns-2 gap-4 md:columns-3 md:gap-6 lg:columns-4">
        {images.map((i) => (
          <motion.div
            key={`${activeFilter}-${i}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: (i % 6) * 0.05 }}
            className={cn(
              "relative mb-4 break-inside-avoid overflow-hidden rounded-[24px] shadow-card md:mb-6",
              masonryHeights[i % masonryHeights.length]
            )}
          >
            <Image
              src="/foto.jpg"
              alt={`Zdjęcie z galerii ${i + 1}`}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              sizes="(max-width: 768px) 50vw, 300px"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />
          </motion.div>
        ))}
      </div>

      {weddingConfig.features.showGalleryUpload && (
        <div className="mt-12 text-center">
          <Button size="lg">Dodaj zdjęcie</Button>
        </div>
      )}
    </SectionWrapper>
  );
}
