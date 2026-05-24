import { motion } from "framer-motion";
import { Particles } from "./Particles";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-glow)" }}
      />
      <div className="absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full bg-[var(--neon-blue)] opacity-20 blur-[120px] animate-pulse-glow" />
      <div className="absolute -right-40 bottom-1/4 h-[500px] w-[500px] rounded-full bg-[var(--neon-purple)] opacity-20 blur-[120px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
      <Particles count={40} />

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground"
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--neon-cyan)] shadow-[0_0_10px_var(--neon-cyan)]" />
          Available for Freelance · 2026
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="font-display text-[clamp(3rem,10vw,8rem)] font-bold leading-[0.95] tracking-tight"
        >
          Shaheer Asif
          <br />
          <span className="text-gradient-neon">Mirza</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground sm:text-xl"
        >
          Professional Video Editor & Creative Storyteller — transforming raw footage
          into cinematic experiences that capture attention and tell powerful stories.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#work"
            className="group relative rounded-full bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] px-7 py-3.5 text-sm font-semibold text-background shadow-neon transition hover:scale-105"
          >
            View Portfolio →
          </a>
          <a
            href="#contact"
            className="rounded-full glass-strong px-7 py-3.5 text-sm font-semibold text-foreground transition hover:bg-white/10"
          >
            Hire Me
          </a>
          <a
            href="https://wa.me/923367372243"
            className="flex items-center gap-2 rounded-full border border-[var(--neon-cyan)]/30 px-7 py-3.5 text-sm font-semibold text-[var(--neon-cyan)] transition hover:bg-[var(--neon-cyan)]/10"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.2-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5 1.8.8 2.5.8 3.3.7.5-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.2-.3-.3-.6-.4zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.4c1.4.8 3.1 1.2 4.8 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2z"/></svg>
            WhatsApp
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20 flex items-center justify-center gap-12 text-xs uppercase tracking-[0.25em] text-muted-foreground"
        >
          <span>Premiere Pro</span>
          <span className="hidden h-px w-12 bg-border sm:block" />
          <span>After Effects</span>
          <span className="hidden h-px w-12 bg-border sm:block" />
          <span>DaVinci</span>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs text-muted-foreground"
      >
        ↓ Scroll
      </motion.div>
    </section>
  );
}
