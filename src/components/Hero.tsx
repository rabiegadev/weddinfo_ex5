"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BranchDecoration } from "@/components/decorations/SvgDecorations";
import { Button } from "@/components/ui/Button";
import { weddingConfig } from "@/config/wedding";
import { useCountdown } from "@/hooks/useCountdown";

const countdownLabels = ["Dni", "Godzin", "Minut", "Sekund"] as const;

export function Hero() {
  const countdown = useCountdown(weddingConfig.weddingDateISO);
  const { scrollY } = useScroll();
  const photoY = useTransform(scrollY, [0, 500], [0, 20]);
  const values = [
    countdown.days,
    countdown.hours,
    countdown.minutes,
    countdown.seconds,
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden pt-24 pb-16 md:pt-32 lg:pb-24"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-olive/5 blur-3xl" />
        <BranchDecoration className="absolute top-32 left-4 h-16 w-24 md:left-12 md:h-20 md:w-32" />
        <BranchDecoration
          flip
          className="absolute right-4 bottom-40 h-16 w-24 md:right-12 md:h-20 md:w-32"
        />
        <div
          className="absolute inset-x-0 bottom-0 h-40"
          style={{
            background:
              "linear-gradient(180deg, rgba(250,247,242,0), rgba(250,247,242,.95))",
          }}
        />
      </div>

      <div className="container-main relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="order-1 text-center lg:text-left"
        >
          <p className="font-script text-4xl text-gold md:text-5xl lg:text-6xl">
            {weddingConfig.couple.displayNames}
          </p>
          <h1 className="mt-2 text-3xl font-medium tracking-wide md:text-4xl lg:text-5xl">
            {weddingConfig.weddingDate}
          </h1>
          <p className="mt-4 text-sm uppercase tracking-[0.25em] text-gold">
            {weddingConfig.hero.subtitle}
          </p>
          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-body lg:mx-0">
            {weddingConfig.hero.description}
          </p>

          <div className="mx-auto mt-10 grid max-w-xs grid-cols-2 gap-4 sm:max-w-md lg:mx-0 lg:max-w-lg lg:grid-cols-4">
            {values.map((value, i) => (
              <motion.div
                key={countdownLabels[i]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="rounded-2xl border border-border bg-white/50 px-3 py-4 backdrop-blur-sm"
              >
                <p className="font-heading text-2xl font-semibold text-olive md:text-3xl">
                  {String(value).padStart(2, "0")}
                </p>
                <p className="mt-1 text-[10px] tracking-widest text-body/70 uppercase md:text-xs">
                  {countdownLabels[i]}
                </p>
              </motion.div>
            ))}
          </div>

          {weddingConfig.features.showRsvpButton && (
            <div className="mt-10 flex justify-center lg:justify-start">
              <Link href="#rsvp">
                <Button size="lg">Potwierdź obecność</Button>
              </Link>
            </div>
          )}
        </motion.div>

        <motion.div
          style={{ y: photoY }}
          className="relative order-2 mx-auto w-[70%] lg:order-2 lg:mx-0 lg:w-full"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative mx-auto aspect-square max-w-md lg:max-w-lg"
          >
            <div className="absolute inset-4 rounded-full border border-gold/30" />
            <div className="absolute inset-0 rounded-full border-2 border-gold/50" />
            <div className="absolute -inset-6 rounded-full border border-gold/15" />
            <div className="absolute inset-6 overflow-hidden rounded-full shadow-card">
              <Image
                src="/foto.jpg"
                alt={`${weddingConfig.couple.displayNames} — zdjęcie pary młodej`}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 70vw, 500px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cream/20 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            className="absolute -bottom-4 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="flex flex-col items-center gap-2 text-gold/60">
              <span className="text-[10px] tracking-widest uppercase">Przewiń</span>
              <div className="h-8 w-5 rounded-full border border-gold/40 p-1">
                <motion.div
                  className="mx-auto h-1.5 w-1 rounded-full bg-gold/60"
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
