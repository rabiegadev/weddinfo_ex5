import { BranchDecoration, Monogram } from "@/components/decorations/SvgDecorations";
import { WeddingIcon } from "@/components/ui/WeddingIcon";
import { weddingConfig } from "@/config/wedding";

const features = [
  { label: "Responsywny design" },
  { label: "Łatwy w edycji" },
  { label: "Lekki i szybki" },
  { label: "Gotowy na RSVP" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-border bg-cream pt-16 pb-8">
      <BranchDecoration className="absolute top-4 right-8 h-12 w-20 opacity-50" />

      <div className="container-main text-center">
        <Monogram text={weddingConfig.couple.monogram} className="mb-4" />
        <p className="font-heading text-lg text-heading">
          {weddingConfig.couple.displayNames}
        </p>
        <p className="mt-1 text-sm text-body/70">{weddingConfig.weddingDate}</p>

        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-6 border-y border-border py-8 md:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.label} className="flex flex-col items-center gap-2">
              <WeddingIcon size={24} alt={feature.label} />
              <span className="text-[10px] tracking-wider text-body/60 uppercase">
                {feature.label}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs text-body/50">
          © {year} {weddingConfig.couple.displayNames}. Wszystkie prawa zastrzeżone.
        </p>
      </div>
    </footer>
  );
}
