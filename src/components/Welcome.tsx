"use client";

import Image from "next/image";
import { LeafSeparator } from "@/components/decorations/SvgDecorations";
import { WeddingIcon } from "@/components/ui/WeddingIcon";
import { SectionWrapper, SectionTitle } from "@/components/ui/Section";
import { weddingConfig } from "@/config/wedding";

export function Welcome() {
  return (
    <SectionWrapper id="o-nas">
      <SectionTitle title={weddingConfig.welcome.title} />
      <p className="mx-auto max-w-2xl text-center text-base leading-relaxed text-body md:text-lg">
        {weddingConfig.welcome.text}
      </p>

      <LeafSeparator className="my-12 w-48" />

      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center">
            <WeddingIcon size={40} alt="Ikona ślubu" />
          </div>
          <h3 className="text-xl font-medium uppercase tracking-wider">
            {weddingConfig.ceremony.title}
          </h3>
          <p className="mt-3 text-body">{weddingConfig.ceremony.location}</p>
        </div>

        <div className="text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center">
            <WeddingIcon size={40} alt="Ikona wesela" />
          </div>
          <h3 className="text-xl font-medium uppercase tracking-wider">
            {weddingConfig.reception.title}
          </h3>
          <p className="mt-3 text-body">{weddingConfig.reception.location}</p>
        </div>
      </div>

      <div className="relative mt-16 grid items-center gap-8 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <p className="text-base leading-relaxed text-body">
            Nie możemy się doczekać, aby dzielić ten dzień z Wami. Każdy szczegół
            przygotowaliśmy z myślą o Waszym komforcie i radości.
          </p>
        </div>
        <div className="relative order-1 mx-auto h-72 w-full max-w-sm md:order-2 md:mx-0 md:h-80 md:max-w-none">
          <div className="absolute top-0 left-0 h-[85%] w-[75%] overflow-hidden rounded-[24px] shadow-card">
            <Image
              src="/foto.jpg"
              alt="Zdjęcie pary młodej"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              sizes="(max-width: 768px) 80vw, 400px"
            />
          </div>
          <div className="absolute right-0 bottom-0 h-[70%] w-[65%] overflow-hidden rounded-[24px] border-4 border-cream shadow-card">
            <Image
              src="/foto.jpg"
              alt="Zdjęcie pary młodej — drugie"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              sizes="(max-width: 768px) 70vw, 350px"
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
