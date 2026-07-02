"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionTitle } from "@/components/ui/Section";
import { weddingConfig } from "@/config/wedding";

export function Welcome() {
  return (
    <motion.section
      id="o-nas"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="section-padding container-main">
        <SectionTitle title={weddingConfig.welcome.title} />
        <p className="mx-auto max-w-2xl text-center text-base leading-relaxed text-body md:text-lg">
          {weddingConfig.welcome.text}
        </p>
      </div>

      <div className="section-padding bg-cream !pt-0">
        <div className="container-main grid items-center gap-8 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <p className="text-base leading-relaxed text-body">
              Nie możemy się doczekać, aby dzielić ten dzień z Wami. Każdy szczegół
              przygotowaliśmy z myślą o Waszym komforcie i radości.
            </p>
          </div>
          <div className="relative order-1 mx-auto h-72 w-full max-w-sm md:order-2 md:mx-0 md:h-80 md:max-w-none">
            <div className="absolute top-0 left-0 h-[85%] w-[75%] overflow-hidden rounded-[24px] shadow-card">
              <Image
                src="/foto2.png"
                alt="Zdjęcie pary młodej"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 768px) 80vw, 400px"
              />
            </div>
            <div className="absolute right-0 bottom-0 h-[70%] w-[65%] overflow-hidden rounded-[24px] border-4 border-cream shadow-card">
              <Image
                src="/foto3.png"
                alt="Zdjęcie pary młodej — drugie"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 768px) 70vw, 350px"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="h-0.5 w-full bg-olive" aria-hidden />
    </motion.section>
  );
}
