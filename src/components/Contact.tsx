"use client";

import Link from "next/link";
import { WeddingIcon } from "@/components/ui/WeddingIcon";
import { SectionWrapper, SectionTitle } from "@/components/ui/Section";
import { weddingConfig } from "@/config/wedding";

function ContactCard({
  title,
  people,
}: {
  title: string;
  people: typeof weddingConfig.contact.couple;
}) {
  return (
    <div className="rounded-[24px] border border-border bg-white p-6 shadow-card md:p-8">
      <h3 className="mb-6 text-center text-sm font-medium tracking-[0.2em] text-gold uppercase">
        {title}
      </h3>
      <div className="space-y-6">
        {people.map((person) => (
          <div key={person.email} className="text-center">
            <p className="font-heading text-xl text-heading">{person.name}</p>
            <div className="mt-3 flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-6">
              <a
                href={`tel:${person.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-sm text-body transition-colors hover:text-olive"
              >
                <WeddingIcon size={18} alt="Telefon" />
                {person.phone}
              </a>
              <a
                href={`mailto:${person.email}`}
                className="flex items-center gap-2 text-sm text-body transition-colors hover:text-olive"
              >
                <WeddingIcon size={18} alt="E-mail" />
                {person.email}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Contact() {
  return (
    <SectionWrapper id="kontakt" className="bg-cream-alt">
      <SectionTitle title="Kontakt" subtitle="Skontaktuj się z nami" />

      <div className="grid gap-8 md:grid-cols-2">
        <ContactCard title="Para młoda" people={weddingConfig.contact.couple} />
        <ContactCard title="Świadkowie" people={weddingConfig.contact.witnesses} />
      </div>

      <div className="mt-12 flex justify-center gap-6">
        {weddingConfig.contact.social.instagram && (
          <Link
            href={weddingConfig.contact.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-white transition-transform hover:scale-105 hover:border-gold/40"
            aria-label="Instagram"
          >
            <WeddingIcon size={24} alt="Instagram" />
          </Link>
        )}
        {weddingConfig.contact.social.facebook && (
          <Link
            href={weddingConfig.contact.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-white transition-transform hover:scale-105 hover:border-gold/40"
            aria-label="Facebook"
          >
            <WeddingIcon size={24} alt="Facebook" />
          </Link>
        )}
      </div>

      <div className="mt-10 overflow-hidden rounded-[24px] border border-border shadow-card">
        <iframe
          src={weddingConfig.locations[1]?.mapEmbedUrl}
          title="Mapa — miejsce wesela"
          className="h-64 w-full md:h-80"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </SectionWrapper>
  );
}
