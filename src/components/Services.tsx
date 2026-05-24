import { motion } from "framer-motion";

const services = [
  { title: "Short Form Editing", desc: "TikTok, Reels & Shorts that hook in 3 seconds.", icon: "▶" },
  { title: "YouTube Editing", desc: "Long-form storytelling with retention-driven cuts.", icon: "◆" },
  { title: "Gaming Montages", desc: "High-energy frag movies synced to the beat.", icon: "✦" },
  { title: "Motion Graphics", desc: "Custom animated titles, transitions & VFX.", icon: "✺" },
  { title: "Color Grading", desc: "Cinematic looks tuned for emotion & brand.", icon: "◉" },
  { title: "Commercial Edits", desc: "Ad creatives built to convert across platforms.", icon: "▲" },
  { title: "Social Content", desc: "Daily content systems for creators & brands.", icon: "✧" },
  { title: "Thumbnail Design", desc: "Click-worthy thumbnails that move the CTR.", icon: "■" },
];

export function Services() {
  return (
    <section id="services" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-2xl"
        >
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[var(--neon-cyan)]">03 — Services</p>
          <h2 className="font-display text-4xl font-bold sm:text-6xl">
            Built to <span className="text-gradient-neon">ship</span>.
          </h2>
          <p className="mt-4 text-muted-foreground">
            End-to-end post-production crafted for creators, brands and agencies who want the bar raised.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className="group relative overflow-hidden rounded-2xl glass-strong p-6 transition hover:-translate-y-1 hover:shadow-neon"
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: "radial-gradient(circle at top right, oklch(0.68 0.25 295 / 0.18), transparent 60%)" }}
              />

              <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--neon-blue)] to-[var(--neon-purple)] text-lg font-bold text-background shadow-neon">
                {s.icon}
              </div>
              <h3 className="relative mt-5 font-display text-lg font-bold">{s.title}</h3>
              <p className="relative mt-2 text-sm text-muted-foreground">{s.desc}</p>

              <div className="relative mt-6 flex items-center gap-1 text-xs uppercase tracking-wider text-muted-foreground transition group-hover:text-[var(--neon-cyan)]">
                Learn more <span className="transition group-hover:translate-x-1">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
