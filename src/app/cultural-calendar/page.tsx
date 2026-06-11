"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MapPin, Star } from "lucide-react";
import { CalendarView } from "@/components/CulturalCalendar/CalendarView";
import { CULTURAL_EVENTS, getCurrentSeasonEvents } from "@/data/cultural-calendar";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

const SITE_FILTERS = [
  { id: "", name: "All Sites" },
  { id: "kathmandu-valley", name: "Kathmandu Valley" },
  { id: "sagarmatha-national-park", name: "Sagarmatha" },
  { id: "chitwan-national-park", name: "Chitwan" },
  { id: "lumbini", name: "Lumbini" },
];

export default function CulturalCalendarPage() {
  const [selectedSite, setSelectedSite] = useState("");
  const reduce = useReducedMotion();

  const currentSeasonEvents = getCurrentSeasonEvents();
  const totalEvents = CULTURAL_EVENTS.length;

  return (
    <div className="container-page pt-28 sm:pt-32 pb-16 grid gap-12">
      <Reveal>
        <p className="eyebrow">Living Culture</p>
        <h1 className="heading-serif mt-4 text-4xl sm:text-6xl font-semibold text-balance">
          Cultural calendar
        </h1>
        <p className="mt-4 text-foreground/65 max-w-xl">
          Nepal&apos;s heritage sites pulse with festivals all year round. Browse month by month and
          plan a visit that coincides with the celebrations.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-foreground/55">
          <span className="flex items-center gap-2">
            <Star className="h-4 w-4 text-accent" />
            {totalEvents} festivals & events
          </span>
          <span className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-accent" />
            4 UNESCO heritage sites
          </span>
        </div>
      </Reveal>

      {/* Current season highlight */}
      {currentSeasonEvents.length > 0 && (
        <Reveal delay={0.1}>
          <div className="relative overflow-hidden rounded-2xl border border-accent/25 bg-accent/10 p-6 sm:p-8">
            <div className="aurora" aria-hidden />
            <div className="relative">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-accent">
                This season&apos;s highlights
              </p>
              <div className="mt-4 grid gap-3 md:grid-cols-3">
                {currentSeasonEvents.slice(0, 3).map((event) => (
                  <div
                    key={event.id}
                    className="flex items-center gap-3 rounded-xl border border-border-soft bg-background/50 backdrop-blur p-4"
                  >
                    <span className="text-2xl" aria-hidden>
                      {event.type === "festival"
                        ? "🎉"
                        : event.type === "religious"
                          ? "🙏"
                          : event.type === "cultural"
                            ? "🎭"
                            : "🌾"}
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-medium text-sm truncate">{event.name}</h3>
                      <p className="text-xs text-foreground/55">
                        {event.dates.year2025 || event.dates.dateRange}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      )}

      {/* Site filter */}
      <Reveal delay={0.15}>
        <div className="flex flex-wrap items-center gap-2">
          {SITE_FILTERS.map((site) => (
            <button
              key={site.id}
              onClick={() => setSelectedSite(site.id)}
              className={cn(
                "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                selectedSite === site.id
                  ? "text-background"
                  : "border border-border-soft bg-surface/60 text-foreground/65 hover:text-foreground hover:border-accent/40"
              )}
              aria-pressed={selectedSite === site.id}
            >
              {selectedSite === site.id && (
                <motion.span
                  layoutId="calendar-site-pill"
                  className="absolute inset-0 rounded-full bg-accent"
                  transition={
                    reduce ? { duration: 0 } : { type: "spring", stiffness: 400, damping: 32 }
                  }
                />
              )}
              <span className="relative">{site.name}</span>
            </button>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <CalendarView siteFilter={selectedSite || undefined} />
      </Reveal>

      <Reveal>
        <div className="text-center py-8 border-t border-border-soft">
          <p className="text-sm text-foreground/55 mb-2">
            Festival dates may vary based on lunar calendar calculations.
          </p>
          <p className="text-xs text-foreground/45">
            Always verify specific dates with local sources when planning your visit.
          </p>
        </div>
      </Reveal>
    </div>
  );
}
