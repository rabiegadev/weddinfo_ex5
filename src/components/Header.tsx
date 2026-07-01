"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { weddingConfig } from "@/config/wedding";

const linkVariants = {
  closed: { opacity: 0, y: 14 },
  open: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.06 + i * 0.05, duration: 0.35, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const isCompact = useTransform(scrollY, [0, 80], [0, 1]);

  const headerTop = useTransform(isCompact, [0, 1], [0, 16]);
  const headerRadius = useTransform(isCompact, [0, 1], [0, 9999]);
  const headerMaxWidth = useTransform(isCompact, [0, 1], ["100%", "64rem"]);
  const headerBg = useTransform(
    isCompact,
    [0, 1],
    ["rgba(250,247,242,0)", "rgba(250,247,242,0.88)"]
  );
  const headerShadow = useTransform(
    isCompact,
    [0, 1],
    ["0 0 0 rgba(0,0,0,0)", "0 8px 32px rgba(0,0,0,0.08)"]
  );
  const innerPadY = useTransform(isCompact, [0, 1], [20, 10]);
  const innerPadX = useTransform(isCompact, [0, 1], [0, 24]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <motion.header
        className="fixed z-50 w-full backdrop-blur-[30px] [-webkit-backdrop-filter:blur(30px)]"
        style={{
          top: headerTop,
          left: "50%",
          x: "-50%",
          maxWidth: headerMaxWidth,
          borderRadius: headerRadius,
          backgroundColor: menuOpen ? "rgba(250, 247, 242, 0.95)" : headerBg,
          boxShadow: menuOpen ? "0 8px 32px rgba(0,0,0,0.08)" : headerShadow,
          paddingLeft: innerPadX,
          paddingRight: innerPadX,
          paddingTop: innerPadY,
          paddingBottom: innerPadY,
        }}
      >
        <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between gap-4 px-5 md:px-8 lg:px-12">
          <Link
            href="#hero"
            className="relative z-[60] font-heading text-lg font-medium text-heading md:text-xl"
            onClick={() => setMenuOpen(false)}
          >
            {weddingConfig.couple.displayNames}
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {weddingConfig.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs font-medium tracking-[0.15em] text-body uppercase transition-colors duration-300 hover:text-olive"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="relative z-[60] flex items-center gap-3">
            {weddingConfig.features.showRsvpButton && (
              <Link href="#rsvp" className="hidden sm:block">
                <Button size="sm">Potwierdź obecność</Button>
              </Link>
            )}

            <button
              type="button"
              className="relative flex h-10 w-10 items-center justify-center lg:hidden"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? "Zamknij menu" : "Otwórz menu"}
              aria-expanded={menuOpen}
            >
              <span className="relative block h-[18px] w-6">
                <motion.span
                  className="absolute left-0 h-0.5 w-6 rounded-full bg-olive"
                  animate={menuOpen ? { top: 8, rotate: 45 } : { top: 0, rotate: 0 }}
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                />
                <motion.span
                  className="absolute top-[8px] left-0 h-0.5 w-6 rounded-full bg-olive"
                  animate={menuOpen ? { opacity: 0, scaleX: 0.4 } : { opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                />
                <motion.span
                  className="absolute left-0 h-0.5 w-6 rounded-full bg-olive"
                  animate={menuOpen ? { top: 8, rotate: -45 } : { top: 16, rotate: 0 }}
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                />
              </span>
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.button
              type="button"
              className="fixed inset-0 z-40 bg-heading/25 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              onClick={() => setMenuOpen(false)}
              aria-label="Zamknij menu"
            />

            <motion.nav
              className="fixed inset-x-4 top-[5.5rem] z-50 overflow-hidden rounded-[24px] border border-border bg-cream/97 shadow-card backdrop-blur-[30px] lg:hidden"
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              aria-label="Menu mobilne"
            >
              <div className="flex flex-col gap-1 p-3">
                {weddingConfig.navigation.map((item, i) => (
                  <motion.div
                    key={item.href}
                    custom={i}
                    variants={linkVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                  >
                    <Link
                      href={item.href}
                      className="block rounded-2xl px-4 py-3 font-heading text-xl text-heading transition-colors duration-200 hover:bg-olive/5"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}

                {weddingConfig.features.showRsvpButton && (
                  <motion.div
                    custom={weddingConfig.navigation.length}
                    variants={linkVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    className="mt-2 px-2 pb-1"
                  >
                    <Link href="#rsvp" onClick={() => setMenuOpen(false)}>
                      <Button className="w-full">Potwierdź obecność</Button>
                    </Link>
                  </motion.div>
                )}
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
