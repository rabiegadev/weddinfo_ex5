"use client";

import Link from "next/link";
import { WeddingIcon } from "@/components/ui/WeddingIcon";
import { weddingConfig } from "@/config/wedding";

export function QuickLinks() {
  return (
    <section className="bg-olive py-10 md:py-14">
      <div className="container-main">
        <p className="mb-8 text-center text-sm tracking-[0.2em] text-white/80 uppercase">
          Wszystko w jednym miejscu
        </p>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4">
          {weddingConfig.quickLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className="group flex flex-col items-center text-center transition-transform hover:-translate-y-1"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15 transition-colors group-hover:bg-white/25">
                <WeddingIcon
                  size={28}
                  className="brightness-0 invert"
                  alt={`Ikona — ${link.label}`}
                />
              </div>
              <span className="mt-3 text-xs font-medium tracking-wider text-white uppercase">
                {link.label}
              </span>
              <span className="mt-1 text-[10px] text-white/60">({link.subtitle})</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
