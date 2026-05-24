import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-strong py-3" : "py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#home" className="flex items-center gap-2 font-display text-lg font-bold tracking-tight">
          <span className="inline-block h-2 w-2 rounded-full bg-[var(--neon-purple)] shadow-[0_0_12px_var(--neon-purple)]" />
          SAM<span className="text-muted-foreground">.studio</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-muted-foreground transition hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://wa.me/" 
          className="hidden rounded-full bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] px-5 py-2 text-sm font-semibold text-background shadow-neon transition hover:scale-105 md:inline-block"
        >
          Hire Me
        </a>

        <button
          aria-label="menu"
          onClick={() => setOpen((o) => !o)}
          className="md:hidden text-foreground"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="glass-strong mx-6 mt-3 overflow-hidden rounded-2xl md:hidden"
          >
            <ul className="flex flex-col p-4">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-sm text-muted-foreground hover:text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
