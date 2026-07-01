import "./globals.css";
import type { Metadata } from "next";
import { Allura, Cormorant_Garamond, Lato } from "next/font/google";
import { weddingConfig } from "@/config/wedding";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-family-heading",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "700"],
  variable: "--font-family-body",
  display: "swap",
});

const allura = Allura({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-family-script",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://weddinfo-ex5.vercel.app"),
  title: `${weddingConfig.couple.displayNames} — Zaproszenie ślubne`,
  description: `Zapraszamy na ślub ${weddingConfig.couple.displayNames}. ${weddingConfig.weddingDate}.`,
  openGraph: {
    title: `${weddingConfig.couple.displayNames} — Zaproszenie ślubne`,
    description: `Zapraszamy na nasz ślub — ${weddingConfig.weddingDate}`,
    images: ["/foto.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${cormorant.variable} ${lato.variable} ${allura.variable} scroll-smooth`}
    >
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
