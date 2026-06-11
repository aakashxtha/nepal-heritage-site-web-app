"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CalendarDays, Cloud, Flower2, Leaf, Snowflake, Sparkles, Thermometer } from "lucide-react";
import { getSeasonalInfo, getSeason, type SeasonalInfo } from "@/data/cultural-calendar";
import { EASE_OUT } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

type SeasonKey = keyof SeasonalInfo["seasons"];

const SEASON_META: Record<
  SeasonKey,
  { icon: React.ComponentType<{ className?: string }>; badge: string; ring: string }
> = {
  spring: {
    icon: Flower2,
    badge: "border-emerald-400/30 bg-emerald-400/10 text-emerald-500 dark:text-emerald-300",
    ring: "hover:border-emerald-400/40",
  },
  summer: {
    icon: Cloud,
    badge: "border-sky-400/30 bg-sky-400/10 text-sky-500 dark:text-sky-300",
    ring: "hover:border-sky-400/40",
  },
  autumn: {
    icon: Leaf,
    badge: "border-accent/30 bg-accent/10 text-accent",
    ring: "hover:border-accent/40",
  },
  winter: {
    icon: Snowflake,
    badge: "border-violet-400/30 bg-violet-400/10 text-violet-500 dark:text-violet-300",
    ring: "hover:border-violet-400/40",
  },
};

interface SeasonalGuideProps {
  siteId: string;
  siteName: string;
}

export function SeasonalGuide({ siteId, siteName }: SeasonalGuideProps) {
  const seasonalInfo = getSeasonalInfo(siteId);
  const currentSeason = getSeason(new Date().getMonth() + 1);
  const reduce = useReducedMotion();

  if (!seasonalInfo) {
    return (
      <div className="rounded-2xl border border-dashed border-border-soft py-12 text-center">
        <p className="text-foreground/55">Seasonal information not available for this site.</p>
      </div>
    );
  }

  const seasons = Object.entries(seasonalInfo.seasons) as [
    SeasonKey,
    SeasonalInfo["seasons"][SeasonKey],
  ][];

  return (
    <div className="space-y-7">
      <div>
        <h2 className="heading-serif text-3xl font-semibold flex items-baseline gap-4">
          <span className="h-px w-8 bg-accent shrink-0 self-center" aria-hidden />
          A year at {siteName.split(" ")[0]}
        </h2>
        <p className="mt-3 text-foreground/65 max-w-2xl">
          Four seasons, four very different experiences — what to expect whenever you arrive.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {seasons.map(([seasonKey, season], index) => {
          const meta = SEASON_META[seasonKey];
          const isCurrent = seasonKey === currentSeason;
          return (
            <motion.article
              key={seasonKey}
              className={cn(
                "relative rounded-2xl border bg-surface/60 p-7 transition-colors duration-300",
                isCurrent ? "border-accent/45" : "border-border-soft",
                meta.ring
              )}
              initial={{ opacity: 0, y: reduce ? 0 : 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (index % 2) * 0.1, ease: EASE_OUT }}
            >
              {isCurrent && (
                <span className="absolute top-5 right-5 rounded-full bg-accent px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-background">
                  Now
                </span>
              )}

              <div className="flex items-center gap-3.5">
                <span
                  className={cn(
                    "grid h-11 w-11 place-items-center rounded-full border",
                    meta.badge
                  )}
                >
                  <meta.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="heading-serif text-2xl font-semibold capitalize">{seasonKey}</h3>
                  <p className="text-xs uppercase tracking-[0.18em] text-foreground/45">
                    {season.months}
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-5 text-sm">
                <div>
                  <h4 className="flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-foreground/45">
                    <Thermometer className="h-3.5 w-3.5 text-accent" />
                    Weather
                  </h4>
                  <p className="mt-2 text-foreground/75 leading-relaxed">{season.weather}</p>
                </div>

                <div>
                  <h4 className="flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-foreground/45">
                    <Sparkles className="h-3.5 w-3.5 text-accent" />
                    Highlights
                  </h4>
                  <ul className="mt-2 space-y-1.5 text-foreground/75">
                    {season.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex gap-2.5">
                        <span className="text-accent" aria-hidden>
                          —
                        </span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {season.festivals.length > 0 && (
                  <div>
                    <h4 className="flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-foreground/45">
                      <CalendarDays className="h-3.5 w-3.5 text-accent" />
                      Festivals & events
                    </h4>
                    <ul className="mt-2 space-y-1.5 text-foreground/75">
                      {season.festivals.map((festival, idx) => (
                        <li key={idx} className="flex gap-2.5">
                          <span className="text-accent" aria-hidden>
                            —
                          </span>
                          {festival}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.article>
          );
        })}
      </div>

      <motion.div
        className="relative overflow-hidden rounded-2xl border border-accent/25 bg-accent/10 p-7 sm:p-8"
        initial={{ opacity: 0, y: reduce ? 0 : 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: EASE_OUT }}
      >
        <div className="aurora opacity-60" aria-hidden />
        <div className="relative">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-accent">
            Planning your visit
          </p>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="font-semibold">Best overall time</h4>
              <p className="mt-1.5 text-sm text-foreground/70 leading-relaxed">
                October to December and March to May offer the best weather conditions for most
                activities.
              </p>
            </div>
            <div>
              <h4 className="font-semibold">Festival season</h4>
              <p className="mt-1.5 text-sm text-foreground/70 leading-relaxed">
                September to November is peak festival season with Dashain, Tihar, and other major
                celebrations.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
