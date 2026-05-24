import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 850, suffix: "+", label: "Videos Edited" },
  { value: 120, suffix: "+", label: "Happy Clients" },
  { value: 4, suffix: "+", label: "Years Experience" },
  { value: 25, suffix: "M+", label: "Views Generated" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1600;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setN(Math.floor(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {n}
      {suffix}
    </span>
  );
}

const testimonials = [
  { name: "Hamza R.", role: "YouTube Creator · 1.2M subs", quote: "Shaheer turned my raw vlogs into cinema. Retention shot up immediately." },
  { name: "Ayesha K.", role: "Founder, Aurum Studio", quote: "He understood our brand in one call. The ad delivered our highest ROAS yet." },
  { name: "Zain M.", role: "Pro Esports Player", quote: "Best montage editor I've worked with. The timing is unreal." },
];

export function Stats() {
  return (
    <section className="relative py-32">
      <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-gradient-to-r from-transparent via-[var(--neon-purple)] to-transparent opacity-50" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-strong rounded-2xl p-8 text-center"
            >
              <p className="font-display text-5xl font-bold text-gradient-neon sm:text-6xl">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-12 max-w-2xl"
          >
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[var(--neon-cyan)]">04 — Words</p>
            <h2 className="font-display text-4xl font-bold sm:text-5xl">
              Clients who came back for <span className="text-gradient-neon">more</span>.
            </h2>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.figure
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-2xl glass-strong p-7 transition hover:shadow-neon"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[var(--neon-purple)] opacity-0 blur-3xl transition group-hover:opacity-30" />
                <div className="text-3xl text-gradient-neon">"</div>
                <blockquote className="mt-2 text-foreground/90">{t.quote}</blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[var(--neon-blue)] to-[var(--neon-purple)] font-display font-bold text-background">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
