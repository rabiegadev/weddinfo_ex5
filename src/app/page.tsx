import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Locations, WeddingInfo } from "@/components/Locations";
import { Preloader } from "@/components/Preloader";
import { QuickLinks } from "@/components/QuickLinks";
import { Rsvp } from "@/components/Rsvp";
import { Schedule } from "@/components/Schedule";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Welcome } from "@/components/Welcome";

export default function HomePage() {
  return (
    <>
      <Preloader />
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Welcome />
        <QuickLinks />
        <Schedule />
        <Locations />
        <WeddingInfo />
        <Gallery />
        <Rsvp />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
