"use client";

import Image from "next/image";
import Link from "next/link";
import { WeddingIcon } from "@/components/ui/WeddingIcon";
import { SectionWrapper, SectionTitle } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { weddingConfig } from "@/config/wedding";

export function Locations() {
  return (
    <SectionWrapper id="lokalizacje" className="bg-cream-alt">
      <SectionTitle title="Lokalizacje" subtitle="Czyli gdzie będziemy się bawić" />

      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        {weddingConfig.locations.map((location) => (
          <article
            key={location.id}
            className="overflow-hidden rounded-[24px] bg-white shadow-card transition-transform duration-300 hover:-translate-y-1.5"
          >
            <div className="relative h-64 overflow-hidden md:h-80">
              <Image
                src={location.image}
                alt={`Zdjęcie — ${location.title}`}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 600px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <h3 className="absolute bottom-4 left-6 font-heading text-2xl text-white">
                {location.title}
              </h3>
            </div>
            <div className="p-6 md:p-8">
              <p className="whitespace-pre-line text-body">{location.address}</p>
              <Link
                href={location.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block"
              >
                <Button size="sm">Jak dojechać?</Button>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}

export function WeddingInfo() {
  return (
    <SectionWrapper id="informacje">
      <SectionTitle title="Informacje weselne" subtitle="Wszystko, co warto wiedzieć" />

      <div className="overflow-hidden rounded-[24px] border border-border bg-white shadow-card">
        {weddingConfig.info.map((item, i) => (
          <div
            key={item.id}
            className={`flex gap-5 p-6 md:gap-8 md:p-8 ${
              i < weddingConfig.info.length - 1 ? "border-b border-border" : ""
            }`}
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-cream">
              <WeddingIcon
                src={item.icon}
                size={28}
                alt={`Ikona — ${item.title}`}
              />
            </div>
            <div>
              <h3 className="text-lg font-medium uppercase tracking-wider">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-body md:text-base">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
