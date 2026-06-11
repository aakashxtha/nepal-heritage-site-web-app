"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { HeritageSite } from "@/types/heritage";
import { NEPAL_OUTLINE, NEPAL_VIEWBOX, projectToMap } from "./nepal-geometry";
import { EASE_OUT } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

const ACCENT_NATURAL = "#34b393";

/** Great Himalayan peaks, drawn as decorative summits along the northern border. */
const PEAKS: Array<{
  name: string;
  elevation: string;
  x: number;
  y: number;
  labelSide: "above" | "left" | "right";
}> = [
  { name: "Dhaulagiri", elevation: "8,167 m", x: 420, y: 258, labelSide: "left" },
  { name: "Annapurna", elevation: "8,091 m", x: 478, y: 286, labelSide: "right" },
  { name: "Everest", elevation: "8,849 m", x: 822, y: 348, labelSide: "above" },
  { name: "Kanchenjunga", elevation: "8,586 m", x: 940, y: 390, labelSide: "left" },
];

type Props = {
  markers: HeritageSite[];
  /** Slug of an externally highlighted site (e.g. hovered list card) */
  highlightSlug?: string | null;
  className?: string;
};

export default function NepalMap({ markers, highlightSlug = null, className }: Props) {
  const router = useRouter();
  const reduce = useReducedMotion();
  const [hoverSlug, setHoverSlug] = useState<string | null>(null);
  const activeSlug = hoverSlug ?? highlightSlug;

  const points = useMemo(
    () =>
      markers.map((site) => ({
        site,
        ...projectToMap(site.coordinates.lng, site.coordinates.lat),
      })),
    [markers]
  );
  const active = points.find((p) => p.site.slug === activeSlug);

  // Gentle west-to-east pilgrim route through the four sites
  const journeyPath = useMemo(() => {
    const sorted = [...points].sort((a, b) => a.x - b.x);
    if (sorted.length < 2) return "";
    let d = `M ${sorted[0].x},${sorted[0].y}`;
    for (let i = 1; i < sorted.length; i++) {
      const prev = sorted[i - 1];
      const cur = sorted[i];
      const mx = (prev.x + cur.x) / 2;
      d += ` C ${mx},${prev.y - 18} ${mx},${cur.y - 18} ${cur.x},${cur.y}`;
    }
    return d;
  }, [points]);

  return (
    <div
      className={cn(
        "group/map relative overflow-hidden rounded-2xl border border-border-soft bg-surface grain",
        className
      )}
    >
      {/* Warm atmospheric glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 80% at 70% 20%, color-mix(in srgb, var(--accent) 9%, transparent), transparent 70%), radial-gradient(50% 60% at 20% 85%, color-mix(in srgb, var(--accent-deep) 7%, transparent), transparent 70%)",
        }}
        aria-hidden
      />

      <svg
        viewBox={`0 0 ${NEPAL_VIEWBOX.width} ${NEPAL_VIEWBOX.height}`}
        className="relative w-full h-auto select-none"
        role="img"
        aria-label="Stylized map of Nepal showing the four UNESCO World Heritage Sites"
      >
        <defs>
          <linearGradient id="np-land" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.10" />
            <stop offset="55%" stopColor="var(--accent)" stopOpacity="0.045" />
            <stop offset="100%" stopColor="var(--accent-deep)" stopOpacity="0.09" />
          </linearGradient>
          <clipPath id="np-clip">
            <path d={NEPAL_OUTLINE} />
          </clipPath>
        </defs>

        {/* Faint graticule */}
        <g stroke="var(--foreground)" strokeOpacity="0.05" strokeWidth="1" aria-hidden>
          {Array.from({ length: 8 }, (_, i) => {
            const gx = 138.5 + i * 115.42; // whole degrees of longitude, 81°–88°E
            return <line key={`v${i}`} x1={gx} y1="0" x2={gx} y2={NEPAL_VIEWBOX.height} />;
          })}
          {Array.from({ length: 4 }, (_, i) => {
            const gy = 92.1 + i * 131.23; // whole degrees of latitude, 30°–27°N
            return <line key={`h${i}`} x1="0" y1={gy} x2={NEPAL_VIEWBOX.width} y2={gy} />;
          })}
        </g>

        {/* Land mass */}
        <motion.path
          d={NEPAL_OUTLINE}
          fill="url(#np-land)"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.4, delay: reduce ? 0 : 0.8 }}
        />

        {/* Elevation contours hinted inside the border */}
        <g clipPath="url(#np-clip)" aria-hidden>
          {[26, 54, 84].map((off, i) => (
            <motion.path
              key={off}
              d={NEPAL_OUTLINE}
              fill="none"
              stroke="var(--accent)"
              strokeOpacity={0.1 - i * 0.025}
              strokeWidth={1.2}
              style={{ transform: `translate(0px, ${off}px) scale(0.995)`, transformOrigin: "50% 50%" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.2, delay: reduce ? 0 : 1.1 + i * 0.15 }}
            />
          ))}
        </g>

        {/* Border draw */}
        <motion.path
          d={NEPAL_OUTLINE}
          fill="none"
          stroke="var(--accent)"
          strokeOpacity="0.75"
          strokeWidth="1.8"
          strokeLinejoin="round"
          initial={{ pathLength: reduce ? 1 : 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 2.6, ease: "easeInOut" }}
        />

        {/* Himalayan summits */}
        {PEAKS.map((peak, i) => (
          <motion.g
            key={peak.name}
            initial={{ opacity: 0, scale: reduce ? 1 : 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: reduce ? 0 : 1.5 + i * 0.12, duration: 0.5, ease: EASE_OUT }}
            style={{ transformOrigin: `${peak.x}px ${peak.y}px` }}
            aria-hidden
          >
            <path
              d={`M ${peak.x - 9} ${peak.y + 7} L ${peak.x} ${peak.y - 9} L ${peak.x + 9} ${peak.y + 7} Z`}
              fill="none"
              stroke="var(--foreground)"
              strokeOpacity="0.5"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
            <path
              d={`M ${peak.x - 3.5} ${peak.y - 2} L ${peak.x} ${peak.y - 9} L ${peak.x + 3.5} ${peak.y - 2} Z`}
              fill="var(--foreground)"
              fillOpacity="0.5"
            />
            {(() => {
              const lx = peak.labelSide === "left" ? peak.x - 16 : peak.labelSide === "right" ? peak.x + 16 : peak.x;
              const anchor = peak.labelSide === "left" ? "end" : peak.labelSide === "right" ? "start" : "middle";
              const ly = peak.labelSide === "above" ? peak.y - 29 : peak.y - 3;
              return (
                <>
                  <text
                    x={lx}
                    y={ly}
                    textAnchor={anchor}
                    fill="var(--foreground)"
                    fillOpacity="0.55"
                    fontSize="13"
                    letterSpacing="2"
                    style={{ textTransform: "uppercase" }}
                  >
                    {peak.name}
                  </text>
                  <text
                    x={lx}
                    y={ly + 14}
                    textAnchor={anchor}
                    fill="var(--foreground)"
                    fillOpacity="0.35"
                    fontSize="11"
                  >
                    {peak.elevation}
                  </text>
                </>
              );
            })()}
          </motion.g>
        ))}

        {/* Pilgrim route through the four sites */}
        <motion.path
          d={journeyPath}
          fill="none"
          stroke="var(--accent)"
          strokeOpacity="0.5"
          strokeWidth="1.6"
          strokeDasharray="2 7"
          strokeLinecap="round"
          initial={{ pathLength: reduce ? 1 : 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 2, delay: reduce ? 0 : 2, ease: "easeInOut" }}
          aria-hidden
        />

        {/* Site markers */}
        {points.map(({ site, x, y }, i) => {
          const isNatural = site.type === "Natural";
          const color = isNatural ? ACCENT_NATURAL : "var(--accent)";
          const isActive = activeSlug === site.slug;
          return (
            <motion.g
              key={site.slug}
              initial={{ opacity: 0, scale: reduce ? 1 : 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: reduce ? 0 : 2.2 + i * 0.15, duration: 0.6, type: "spring", bounce: 0.45 }}
              style={{ transformOrigin: `${x}px ${y}px`, cursor: "pointer" }}
              onMouseEnter={() => setHoverSlug(site.slug)}
              onMouseLeave={() => setHoverSlug(null)}
              onClick={() => router.push(`/sites/${site.slug}`)}
              role="link"
              tabIndex={0}
              aria-label={`${site.name} — open site page`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") router.push(`/sites/${site.slug}`);
              }}
            >
              {/* Pulse */}
              {!reduce && (
                <motion.circle
                  cx={x}
                  cy={y}
                  r={10}
                  fill="none"
                  stroke={color}
                  strokeWidth="1.5"
                  animate={{ r: [10, 26], opacity: [0.7, 0] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut", delay: i * 0.5 }}
                  aria-hidden
                />
              )}
              {/* Hit area */}
              <circle cx={x} cy={y} r={26} fill="transparent" />
              <motion.circle
                cx={x}
                cy={y}
                r={9}
                fill={color}
                animate={{ scale: isActive ? 1.45 : 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 22 }}
                style={{ transformOrigin: `${x}px ${y}px` }}
              />
              <circle cx={x} cy={y} r={3.2} fill="var(--background)" />
              <text
                x={x}
                y={y + 32}
                textAnchor="middle"
                fill="var(--foreground)"
                fillOpacity={isActive ? 0.95 : 0.7}
                fontSize="15"
                fontWeight="600"
                letterSpacing="1.5"
              >
                {site.name.replace(" National Park", "")}
              </text>
            </motion.g>
          );
        })}

        {/* Country label */}
        <text
          x={NEPAL_VIEWBOX.width - 34}
          y={NEPAL_VIEWBOX.height - 70}
          textAnchor="end"
          fill="var(--foreground)"
          fillOpacity="0.16"
          fontSize="58"
          fontFamily="var(--font-serif)"
          fontStyle="italic"
          aria-hidden
        >
          नेपाल · Nepal
        </text>

        {/* Compass */}
        <g transform={`translate(${NEPAL_VIEWBOX.width - 52}, 56)`} aria-hidden>
          <circle r="20" fill="none" stroke="var(--foreground)" strokeOpacity="0.25" strokeWidth="1" />
          <path d="M 0 -13 L 4.5 6 L 0 2.5 L -4.5 6 Z" fill="var(--accent)" fillOpacity="0.85" />
          <text y="-26" textAnchor="middle" fill="var(--foreground)" fillOpacity="0.5" fontSize="12" letterSpacing="2">
            N
          </text>
        </g>
      </svg>

      {/* Legend */}
      <div className="absolute bottom-3 left-4 flex items-center gap-4 text-[0.62rem] uppercase tracking-[0.18em] text-foreground/55">
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-accent" />
          Cultural
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full" style={{ background: ACCENT_NATURAL }} />
          Natural
        </span>
        <span className="hidden sm:flex items-center gap-1.5">
          <span className="inline-block w-5 border-t border-dashed border-accent/60" />
          Pilgrim route
        </span>
      </div>

      {/* Hover tooltip */}
      <AnimatePresence>
        {active && (
          <motion.div
            key={active.site.slug}
            className="pointer-events-none absolute z-10 w-52 hidden sm:block"
            style={{
              left: `${(active.x / NEPAL_VIEWBOX.width) * 100}%`,
              top: `${(active.y / NEPAL_VIEWBOX.height) * 100}%`,
            }}
            initial={{ opacity: 0, x: "-50%", y: 6, scale: 0.96 }}
            animate={{ opacity: 1, x: "-50%", y: -14, scale: 1 }}
            exit={{ opacity: 0, x: "-50%", y: 6, scale: 0.96 }}
            transition={{ duration: 0.25, ease: EASE_OUT }}
          >
            <div className="-translate-y-full overflow-hidden rounded-xl border border-border-soft bg-surface shadow-[0_16px_48px_rgba(0,0,0,0.35)]">
              <div className="relative h-24">
                <Image
                  src={active.site.heroImage}
                  alt={active.site.name}
                  fill
                  sizes="208px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="p-3">
                <p className="text-[0.58rem] uppercase tracking-[0.18em] text-foreground/50">
                  {active.site.type} · UNESCO {active.site.unesco?.inscriptionYear}
                </p>
                <p className="heading-serif mt-0.5 text-base font-semibold leading-tight flex items-center gap-1">
                  {active.site.name}
                  <ArrowUpRight className="h-3.5 w-3.5 text-accent shrink-0" />
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
