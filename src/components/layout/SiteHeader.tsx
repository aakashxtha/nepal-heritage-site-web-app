"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import { Mountain, MapPinned, Sun, Moon, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "./ThemeProvider";
import { EASE_OUT } from "@/components/motion/Reveal";

const nav = [
  { href: "/", label: "Explore" },
  { href: "/sites", label: "Sites" },
  { href: "/map", label: "Map" },
  { href: "/cultural-calendar", label: "Calendar" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  // Close the menu on navigation and lock scroll while it is open
  useEffect(() => setMenuOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-[1000] transition-[background-color,border-color,box-shadow] duration-500 border-b",
          scrolled || menuOpen
            ? "bg-background/75 backdrop-blur-xl border-border-soft shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
            : "bg-transparent border-transparent"
        )}
      >
        <div className="container-page h-16 flex items-center justify-between">
          <Link href="/" className="group flex items-center gap-2.5">
            <span className="grid place-items-center h-9 w-9 rounded-full border border-accent/40 bg-accent/10 text-accent transition-transform duration-500 group-hover:rotate-[360deg]">
              <Mountain className="h-4.5 w-4.5" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-semibold tracking-tight">Nepal Heritage</span>
              <span className="text-[0.6rem] uppercase tracking-[0.24em] text-foreground/50 mt-1">
                UNESCO World Heritage
              </span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {nav.map((item) => {
              const active =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative px-3.5 py-2 text-sm font-medium transition-colors",
                    active ? "text-foreground" : "text-foreground/60 hover:text-foreground"
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-3 -bottom-px h-px bg-accent"
                      transition={
                        reduce ? { duration: 0 } : { type: "spring", stiffness: 400, damping: 35 }
                      }
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={toggle}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border-soft hover:border-accent/50 hover:text-accent transition-colors"
              aria-label="Toggle theme"
              title="Toggle theme"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <Link
              href="/map"
              className="hidden sm:inline-flex items-center gap-2 h-9 rounded-full bg-accent text-background px-4 text-sm font-semibold hover:brightness-110 transition"
            >
              <MapPinned className="h-4 w-4" />
              Open Map
            </Link>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border border-border-soft"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[999] md:hidden bg-background/95 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="container-page pt-28 flex flex-col gap-2">
              {nav.map((item, i) => {
                const active =
                  item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: reduce ? 0 : 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: reduce ? 0 : 0.05 + i * 0.06, duration: 0.5, ease: EASE_OUT }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "heading-serif block text-4xl py-3 border-b border-border-soft transition-colors",
                        active ? "text-accent" : "text-foreground hover:text-accent"
                      )}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, y: reduce ? 0 : 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: reduce ? 0 : 0.4, duration: 0.5, ease: EASE_OUT }}
                className="pt-6"
              >
                <Link
                  href="/map"
                  className="inline-flex items-center gap-2 rounded-full bg-accent text-background px-6 py-3 text-sm font-semibold"
                >
                  <MapPinned className="h-4 w-4" />
                  Open the interactive map
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
