import { motion } from "framer-motion";
import shaheer from "@/assets/shaheer.png";

const skills = [
  { name: "Adobe Premiere Pro", level: 95 },
  { name: "After Effects", level: 90 },
  { name: "Color Grading", level: 92 },
  { name: "Motion Graphics", level: 85 },
  { name: "Sound Design", level: 80 },
  { name: "Cinematic Editing", level: 96 },
  { name: "Reel Editing", level: 94 },
  { name: "YouTube Content", level: 93 },
];

const traits = [
  { label: "4+ Years", sub: "Hands-on editing experience" },
  { label: "Creative", sub: "Story-first mindset" },
  { label: "Detail", sub: "Frame-perfect precision" },
  { label: "Fast", sub: "Quick delivery, zero compromise" },
];

export function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="absolute left-1/4 top-1/3 h-[400px] w-[400px] rounded-full bg-[var(--neon-purple)] opacity-10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-3xl"
        >
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[var(--neon-cyan)]">
            01 — About
          </p>
          <h2 className="font-display text-4xl font-bold sm:text-6xl">
            The mind behind the <span className="text-gradient-neon">cuts</span>.
          </h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="w-[350px] h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-blue-500/20 flex items-center justify-center bg-black">
  <img
    src={shaheer}
    alt="Shaheer Asif Mirza"
    className="w-full h-full object-contain rounded-3xl"
  />

              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-display text-xl font-bold">Shaheer Asif Mirza</p>
                <p className="text-sm text-muted-foreground">Video Editor · Storyteller</p>
              </div>
            </div>
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-[var(--neon-blue)]/30 to-[var(--neon-purple)]/30 blur-2xl" />
          </motion.div>

          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-lg leading-relaxed text-muted-foreground"
            >
              Shaheer is a passionate and creative video editor specializing in
              cinematic edits, gaming montages, reels, YouTube content, commercials,
              motion graphics, and social media content. Every project is a chance
              to translate raw footage into a story that lands.
            </motion.p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {traits.map((t, i) => (
                <motion.div
                  key={t.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="glass rounded-2xl p-5"
                >
                  <p className="font-display text-2xl font-bold text-gradient-neon">{t.label}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{t.sub}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 space-y-4">
              {skills.map((s, i) => (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                >
                  <div className="mb-1.5 flex items-center justify-between text-sm">
                    <span className="text-foreground">{s.name}</span>
                    <span className="text-muted-foreground tabular-nums">{s.level}%</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: i * 0.05, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] shadow-[0_0_12px_var(--neon-purple)]"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
