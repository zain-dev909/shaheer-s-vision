import { motion } from "framer-motion";

const socials = [
  { label: "WhatsApp", handle: "Message directly", href: "https://wa.me/", accent: "var(--neon-cyan)" },
  { label: "Instagram", handle: "@shaheerasifmirza", href: "https://instagram.com/", accent: "var(--neon-purple)" },
  { label: "TikTok", handle: "@shaheerasifmirza", href: "https://tiktok.com/", accent: "var(--neon-blue)" },
  { label: "YouTube", handle: "Shaheer Asif Mirza", href: "https://youtube.com/", accent: "var(--neon-purple)" },
  { label: "Discord", handle: "shaheer.edits", href: "#", accent: "var(--neon-blue)" },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-32">
      <div className="absolute left-1/2 top-1/4 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[var(--neon-purple)] opacity-15 blur-[150px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[var(--neon-cyan)]">05 — Contact</p>
          <h2 className="font-display text-5xl font-bold sm:text-7xl">
            Let's build the <br />
            <span className="text-gradient-neon">next cut.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            Available for freelance projects, collaborations, and creative partnerships.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-strong rounded-3xl p-8 sm:p-12"
        >
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Point of Contact</p>
              <div className="mt-6 space-y-5">
                <Row label="Name" value="Shaheer Asif Mirza" />
                <Row label="Profession" value="Video Editor" />
                <Row label="POC" value="Shaheer Asif Mirza" />
                <Row label="Phone" value="+92 300 0000000" />
                <Row label="Location" value="Pakistan · Worldwide" />
              </div>

              <a
                href="https://wa.me/"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] px-7 py-4 text-sm font-semibold text-background shadow-neon transition hover:scale-[1.02]"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.2-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5 1.8.8 2.5.8 3.3.7.5-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.2-.3-.3-.6-.4zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.4c1.4.8 3.1 1.2 4.8 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2z"/></svg>
                Chat on WhatsApp
              </a>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Find me online</p>
              <div className="mt-6 grid gap-3">
                {socials.map((s, i) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="group flex items-center justify-between rounded-2xl glass p-5 transition hover:bg-white/5"
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className="h-2.5 w-2.5 rounded-full transition group-hover:scale-150"
                        style={{ background: s.accent, boxShadow: `0 0 12px ${s.accent}` }}
                      />
                      <div>
                        <p className="font-display text-base font-semibold">{s.label}</p>
                        <p className="text-xs text-muted-foreground">{s.handle}</p>
                      </div>
                    </div>
                    <span className="text-muted-foreground transition group-hover:translate-x-1 group-hover:text-foreground">→</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between border-b border-border/50 pb-3">
      <span className="text-xs uppercase tracking-wider text-muted-foreground">{label}</span>
      <span className="font-display text-base font-medium">{value}</span>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative border-t border-border/50 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground sm:flex-row">
        <p className="flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-[var(--neon-purple)] shadow-[0_0_10px_var(--neon-purple)]" />
          © 2026 Shaheer Asif Mirza — All rights reserved.
        </p>
        <p className="text-xs uppercase tracking-[0.2em]">Crafted in the dark, cut for the light.</p>
      </div>
    </footer>
  );
}
