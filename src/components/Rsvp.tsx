"use client";

import { FormEvent, useState } from "react";
import { SectionWrapper, SectionTitle } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { weddingConfig } from "@/config/wedding";

export function Rsvp() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <SectionWrapper id="rsvp" className="bg-cream-alt">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionTitle
            title={weddingConfig.rsvp.title}
            centered={false}
          />
          <p className="text-base leading-relaxed text-body">
            Będzie nam niezmiernie miło, jeśli potwierdzicie swoją obecność do
            1 maja 2027 roku. Dziękujemy, że jesteście częścią naszej historii.
          </p>
        </div>

        <div className="rounded-[24px] border border-border bg-white p-6 shadow-card md:p-10">
          {submitted ? (
            <div className="flex min-h-[280px] flex-col items-center justify-center text-center">
              <p className="font-heading text-2xl text-olive">Dziękujemy!</p>
              <p className="mt-3 text-body">
                Otrzymaliśmy Twoje potwierdzenie. Do zobaczenia!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-xs font-medium tracking-wider text-body uppercase"
                >
                  Imię i nazwisko
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-2xl border border-border bg-cream/50 px-4 py-3 text-heading outline-none transition-colors focus:border-gold/50"
                  placeholder="Jan Kowalski"
                />
              </div>

              <div>
                <label
                  htmlFor="guests"
                  className="mb-2 block text-xs font-medium tracking-wider text-body uppercase"
                >
                  Liczba osób
                </label>
                <select
                  id="guests"
                  name="guests"
                  required
                  className="w-full rounded-2xl border border-border bg-cream/50 px-4 py-3 text-heading outline-none transition-colors focus:border-gold/50"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Wybierz liczbę osób
                  </option>
                  {weddingConfig.rsvp.guestOptions.map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? "osoba" : n < 5 ? "osoby" : "osób"}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="notes"
                  className="mb-2 block text-xs font-medium tracking-wider text-body uppercase"
                >
                  Alergie / uwagi
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={4}
                  className="w-full resize-none rounded-2xl border border-border bg-cream/50 px-4 py-3 text-heading outline-none transition-colors focus:border-gold/50"
                  placeholder="Np. alergia na orzechy..."
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                Potwierdzam obecność
              </Button>
            </form>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}
