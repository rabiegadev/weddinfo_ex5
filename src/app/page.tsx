import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Locations, WeddingInfo } from "@/components/Locations";
import { Preloader } from "@/components/Preloader";
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
        <Schedule />
        <Locations />
        <WeddingInfo />
        <Rsvp />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
