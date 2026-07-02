"use client";

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
                <WeddingIcon
                  src={weddingConfig.icons.contact.phone}
                  size={18}
                  alt="Telefon"
                />
                {person.phone}
              </a>
              <a
                href={`mailto:${person.email}`}
                className="flex items-center gap-2 text-sm text-body transition-colors hover:text-olive"
              >
                <WeddingIcon
                  src={weddingConfig.icons.contact.email}
                  size={18}
                  alt="E-mail"
                />
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
    </SectionWrapper>
  );
}
