"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { WeddingIcon } from "@/components/ui/WeddingIcon";
import { SectionWrapper, SectionTitle } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { weddingConfig } from "@/config/wedding";

export function Schedule() {
  return (
    <SectionWrapper id="harmonogram">
      <SectionTitle title="Harmonogram" subtitle="Plan naszego dnia" />

      <div className="hidden lg:block">
        <div className="relative">
          <div className="absolute top-8 right-0 left-0 h-px bg-border" />
          <div className="grid grid-cols-6 gap-4">
            {weddingConfig.schedule.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-border bg-cream shadow-sm">
                  <WeddingIcon size={32} alt={`Ikona — ${item.title}`} />
                </div>
                <p className="mt-4 font-heading text-lg font-semibold text-olive">
                  {item.time}
                </p>
                <p className="mt-2 text-sm font-medium text-heading">{item.title}</p>
                {item.description && (
                  <p className="mt-1 text-xs text-body/70">{item.description}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="lg:hidden">
        <div className="relative space-y-0 pl-8">
          <div className="absolute top-0 bottom-0 left-3 w-px bg-border" />
          {weddingConfig.schedule.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08 }}
              className="relative pb-10"
            >
              <div className="absolute -left-5 flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 bg-cream">
                <WeddingIcon size={22} alt={`Ikona — ${item.title}`} />
              </div>
              <p className="font-heading text-lg font-semibold text-olive">
                {item.time}
              </p>
              <p className="mt-1 font-medium text-heading">{item.title}</p>
              {item.description && (
                <p className="mt-1 text-sm text-body/70">{item.description}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-16 flex flex-col items-center gap-8 md:flex-row md:justify-between">
        <div className="flex gap-3">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="relative h-24 w-20 overflow-hidden rounded-2xl shadow-card md:h-28 md:w-24"
            >
              <Image
                src="/foto.jpg"
                alt={`Podgląd galerii ${i + 1}`}
                fill
                className="object-cover"
                sizes="100px"
              />
            </div>
          ))}
        </div>
        {weddingConfig.features.showGalleryButton && (
          <Link href="#galeria">
            <Button variant="outline">Przejdź do galerii</Button>
          </Link>
        )}
      </div>
    </SectionWrapper>
  );
}
