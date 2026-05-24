import { motion } from "framer-motion";
import { useState } from "react";

type Project = {
  title: string;
  category: string;
  client: string;
  thumb: string;
};

const projects: Project[] = [
  { title: "Echoes of Karachi", category: "Cinematic Edits", client: "Short Film", thumb: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80" },
  { title: "Valorant Highlights", category: "Gaming Montages", client: "Esports Creator", thumb: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&q=80" },
  { title: "Sunset Drift Reel", category: "Reels & Shorts", client: "Auto Brand", thumb: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&q=80" },
  { title: "Founder Story Docu", category: "YouTube Videos", client: "Tech Channel", thumb: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&q=80" },
  { title: "Skyline Perfume Ad", category: "Commercial Ads", client: "Aurum Co.", thumb: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=1200&q=80" },
  { title: "Cafe Daily Drop", category: "Social Media", client: "Brew Lab", thumb: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=1200&q=80" },
  { title: "Midnight Run", category: "Cinematic Edits", client: "Music Video", thumb: "https://images.unsplash.com/photo-1518930259200-3e5b0d5f4b66?w=1200&q=80" },
  { title: "Apex Clutch Edit", category: "Gaming Montages", client: "Streamer", thumb: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=1200&q=80" },
];

const categories = ["All", "Cinematic Edits", "Gaming Montages", "Reels & Shorts", "YouTube Videos", "Commercial Ads", "Social Media"];

export function Portfolio() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="work" className="relative py-32">
      <div className="absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-[var(--neon-blue)] opacity-10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 flex flex-wrap items-end justify-between gap-6"
        >
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[var(--neon-cyan)]">02 — Selected Work</p>
            <h2 className="font-display text-4xl font-bold sm:text-6xl">
              Frames that <span className="text-gradient-neon">move</span>.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            A curated cut of cinematic builds, gaming montages, brand stories and social drops.
          </p>
        </motion.div>

        <div className="mb-10 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full px-4 py-2 text-xs font-medium uppercase tracking-wider transition ${
                active === c
                  ? "bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] text-background shadow-neon"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (i % 6) * 0.07 }}
              className="group relative cursor-pointer overflow-hidden rounded-2xl glass-strong"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={p.thumb}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover grayscale-[40%] transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: "radial-gradient(circle at 50% 50%, oklch(0.68 0.25 295 / 0.25), transparent 70%)" }}
                />

                <div className="absolute left-4 top-4 rounded-full glass px-3 py-1 text-[10px] uppercase tracking-wider text-muted-foreground">
                  {p.category}
                </div>

                <div className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[var(--neon-blue)] to-[var(--neon-purple)] opacity-0 shadow-neon transition-all duration-500 group-hover:opacity-100 group-hover:rotate-12">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-background"><path d="M8 5v14l11-7z"/></svg>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-xs text-muted-foreground">{p.client}</p>
                  <h3 className="font-display text-xl font-bold transition group-hover:text-gradient-neon">
                    {p.title}
                  </h3>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
