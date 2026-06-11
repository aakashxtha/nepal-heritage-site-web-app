"use client";

import { useState } from "react";
import NextDynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Landmark, Map as MapIcon, Mountain, Trees } from "lucide-react";
import { SITES } from "@/data/sites";
import NepalMap from "@/components/Map/NepalMap";
import { Reveal, EASE_OUT } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

const LeafletMap = NextDynamic(() => import("@/components/Map/LeafletMap"), { ssr: false });

export const dynamic = "force-dynamic";

const VIEWS = [
  { id: "illustrated", label: "Illustrated", icon: Mountain },
  { id: "street", label: "Street map", icon: MapIcon },
] as const;

export default function MapPage() {
  const router = useRouter();
  const reduce = useReducedMotion();
  const [hovered, setHovered] = useState<string | null>(null);
  const [view, setView] = useState<(typeof VIEWS)[number]["id"]>("illustrated");

  return (
    <div className="container-page pt-28 sm:pt-32 pb-16">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Atlas</p>
            <h1 className="heading-serif mt-4 text-4xl sm:text-6xl font-semibold">
              The map of treasures
            </h1>
            <p className="mt-4 text-foreground/65 max-w-xl">
              Four sites strung along the Himalaya, from the subtropical Terai to the highest
              point on Earth. Hover a marker — or a card — and click through to the full story.
            </p>
          </div>

          {/* View toggle */}
          <div className="flex items-center gap-1 rounded-full border border-border-soft bg-surface/60 p-1">
            {VIEWS.map((v) => (
              <button
                key={v.id}
                onClick={() => setView(v.id)}
                className={cn(
                  "relative flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  view === v.id ? "text-background" : "text-foreground/60 hover:text-foreground"
                )}
                aria-pressed={view === v.id}
              >
                {view === v.id && (
                  <motion.span
                    layoutId="map-view-pill"
                    className="absolute inset-0 rounded-full bg-accent"
                    transition={
                      reduce ? { duration: 0 } : { type: "spring", stiffness: 400, damping: 32 }
                    }
                  />
                )}
                <v.icon className="relative h-4 w-4" />
                <span className="relative">{v.label}</span>
              </button>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.1} className="mt-10">
        <div className="grid gap-5 lg:grid-cols-[340px_1fr] lg:items-start">
          {/* Site list */}
          <div className="order-2 lg:order-1 flex flex-col gap-3">
            {SITES.map((site) => (
              <Link
                key={site.id}
                href={`/sites/${site.slug}`}
                onMouseEnter={() => setHovered(site.slug)}
                onMouseLeave={() => setHovered(null)}
                className={cn(
                  "group flex gap-4 rounded-2xl border bg-surface/60 p-3 transition-all duration-300",
                  hovered === site.slug
                    ? "border-accent/50 shadow-[0_12px_40px_rgba(0,0,0,0.25)]"
                    : "border-border-soft hover:border-accent/40"
                )}
              >
                <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded-xl">
                  <Image
                    src={site.heroImage}
                    alt={site.name}
                    fill
                    sizes="112px"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="min-w-0 py-0.5">
                  <p className="flex items-center gap-1.5 text-[0.6rem] uppercase tracking-[0.2em] text-foreground/45">
                    {site.type === "Natural" ? (
                      <Trees className="h-3 w-3 text-accent" />
                    ) : (
                      <Landmark className="h-3 w-3 text-accent" />
                    )}
                    {site.type} · {site.unesco?.inscriptionYear}
                  </p>
                  <h2 className="heading-serif mt-1 text-lg font-semibold leading-tight group-hover:text-accent transition-colors truncate">
                    {site.name}
                  </h2>
                  <p className="mt-1 text-xs text-foreground/55 line-clamp-2">{site.description}</p>
                </div>
                <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 self-center text-foreground/30 transition group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            ))}
            <p className="text-xs text-foreground/45 px-1 pt-1">
              The illustrated map is drawn from real boundary data; switch to the street map for
              roads, towns, and trails.
            </p>
          </div>

          {/* Map panel */}
          <div className="order-1 lg:order-2">
            <AnimatePresence mode="wait">
              {view === "illustrated" ? (
                <motion.div
                  key="illustrated"
                  initial={{ opacity: 0, scale: reduce ? 1 : 0.985 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: EASE_OUT }}
                >
                  <NepalMap markers={SITES} highlightSlug={hovered} />
                </motion.div>
              ) : (
                <motion.div
                  key="street"
                  className="h-[52vh] lg:h-[64vh] rounded-2xl overflow-hidden border border-border-soft shadow-[0_24px_80px_rgba(0,0,0,0.25)]"
                  initial={{ opacity: 0, scale: reduce ? 1 : 0.985 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: EASE_OUT }}
                >
                  <LeafletMap
                    center={{ lat: 27.9, lng: 84.6 }}
                    zoom={7}
                    markers={SITES}
                    onMarkerClick={(s) => router.push(`/sites/${s.slug}`)}
                    className="h-full w-full"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
