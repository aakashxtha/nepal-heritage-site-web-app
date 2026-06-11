"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Search, SearchX } from "lucide-react";
import { SITES } from "@/data/sites";
import { SiteCard } from "@/components/Site/SiteCard";
import { Reveal, EASE_OUT } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

const TYPES = ["All", "Cultural", "Natural"] as const;

export default function SitesListPage() {
  const [q, setQ] = useState("");
  const [type, setType] = useState<(typeof TYPES)[number]>("All");
  const reduce = useReducedMotion();

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return SITES.filter((s) => {
      const matchType = type === "All" || s.type === type;
      const matchQuery =
        query.length === 0 ||
        s.name.toLowerCase().includes(query) ||
        s.region.toLowerCase().includes(query) ||
        s.description.toLowerCase().includes(query);
      return matchType && matchQuery;
    });
  }, [q, type]);

  return (
    <div className="container-page pt-28 sm:pt-32 pb-16">
      <Reveal>
        <p className="eyebrow">The Sites</p>
        <h1 className="heading-serif mt-4 text-4xl sm:text-6xl font-semibold text-balance">
          Nepal&apos;s World Heritage
        </h1>
        <p className="mt-4 text-foreground/65 max-w-xl">
          All four UNESCO-inscribed sites — search by name or region, or filter cultural treasures
          from natural wonders.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* Type filter pills */}
          <div className="flex items-center gap-1 rounded-full border border-border-soft bg-surface/60 p-1">
            {TYPES.map((t) => (
              <button
                key={t}
                onClick={() => setType(t)}
                className={cn(
                  "relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
                  type === t ? "text-background" : "text-foreground/60 hover:text-foreground"
                )}
                aria-pressed={type === t}
              >
                {type === t && (
                  <motion.span
                    layoutId="type-pill"
                    className="absolute inset-0 rounded-full bg-accent"
                    transition={
                      reduce ? { duration: 0 } : { type: "spring", stiffness: 400, damping: 32 }
                    }
                  />
                )}
                <span className="relative">{t}</span>
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/40" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search sites or regions…"
              className="w-full rounded-full border border-border-soft bg-surface/60 pl-10 pr-4 py-2.5 text-sm outline-none transition focus:border-accent/50 focus:ring-2 focus:ring-accent/20"
              aria-label="Search sites"
            />
          </div>
        </div>
      </Reveal>

      <p className="mt-8 text-xs uppercase tracking-[0.22em] text-foreground/45" aria-live="polite">
        {filtered.length} site{filtered.length !== 1 ? "s" : ""}
      </p>

      <motion.div layout className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((site, i) => (
            <motion.div
              key={site.id}
              layout
              initial={{ opacity: 0, y: reduce ? 0 : 24, scale: reduce ? 1 : 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: reduce ? 1 : 0.96 }}
              transition={{ duration: reduce ? 0.15 : 0.55, delay: i * 0.05, ease: EASE_OUT }}
            >
              <SiteCard site={site} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="py-24 text-center"
        >
          <SearchX className="mx-auto h-10 w-10 text-foreground/25" />
          <h2 className="heading-serif mt-4 text-2xl">Nothing found</h2>
          <p className="mt-2 text-sm text-foreground/55">
            Try a different search — or clear the filters.
          </p>
          <button
            onClick={() => {
              setQ("");
              setType("All");
            }}
            className="mt-6 rounded-full border border-foreground/25 px-5 py-2 text-sm font-medium hover:border-accent/60 hover:text-accent transition"
          >
            Reset filters
          </button>
        </motion.div>
      )}
    </div>
  );
}
