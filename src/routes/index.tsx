import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Portfolio } from "@/components/Portfolio";
import { Services } from "@/components/Services";
import { Stats } from "@/components/Stats";
import { Contact, Footer } from "@/components/Contact";
import { CursorGlow } from "@/components/CursorGlow";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shaheer Portfolio — Cinematic Video Editor" },
      { name: "description", content: "Shaheer Asif Mirza — professional video editor & creative storyteller. Cinematic edits, gaming montages, reels, YouTube content, and commercials." },
      { property: "og:title", content: "Shaheer Portfolio — Cinematic Video Editor" },
      { property: "og:description", content: "Transforming raw footage into cinematic experiences that capture attention and tell powerful stories." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <CursorGlow />
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Stats />
      <Contact />
      <Footer />
    </main>
  );
}
