import Link from "next/link";
import { weddingConfig } from "@/config/wedding";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-olive py-8">
      <div className="container-main px-5 text-center md:px-8 lg:px-12">
        <p className="text-xs text-white/60">
          © {year} {weddingConfig.couple.displayNames}. Wszystkie prawa zastrzeżone.
        </p>
        <p className="mt-2 text-xs text-white/50">
          Created by{" "}
          <Link
            href="https://weddinfo.pl"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 transition-colors hover:text-gold"
          >
            weddinfo.pl
          </Link>
        </p>
      </div>
    </footer>
  );
}
