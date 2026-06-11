"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Clock,
  Drama,
  MapPin,
  PartyPopper,
  Sparkles,
  Sprout,
  X,
} from "lucide-react";
import { getEventsByMonth, type CulturalEvent } from "@/data/cultural-calendar";
import { EASE_OUT } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
const MONTHS_SHORT = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const TYPE_META: Record<
  CulturalEvent["type"],
  { icon: React.ComponentType<{ className?: string }>; chip: string }
> = {
  festival: { icon: PartyPopper, chip: "border-accent/30 bg-accent/10 text-accent" },
  religious: { icon: Sparkles, chip: "border-sky-400/25 bg-sky-400/10 text-sky-500 dark:text-sky-300" },
  cultural: { icon: Drama, chip: "border-violet-400/25 bg-violet-400/10 text-violet-500 dark:text-violet-300" },
  seasonal: { icon: Sprout, chip: "border-emerald-400/25 bg-emerald-400/10 text-emerald-500 dark:text-emerald-300" },
};

interface CalendarViewProps {
  siteFilter?: string;
}

export function CalendarView({ siteFilter }: CalendarViewProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [selectedEvent, setSelectedEvent] = useState<CulturalEvent | null>(null);
  const reduce = useReducedMotion();

  // Map site IDs to cultural calendar keys
  const getSiteKey = (siteId: string): string => {
    const mapping: { [key: string]: string } = {
      "kathmandu-valley": "kathmandu",
      "sagarmatha-national-park": "sagarmatha",
      "chitwan-national-park": "chitwan",
      "lumbini": "lumbini",
    };
    return mapping[siteId] || siteId;
  };

  const currentEvents = getEventsByMonth(currentMonth + 1).filter((event) => {
    if (!siteFilter) return true;
    const siteKey = getSiteKey(siteFilter);
    return event.siteRelevance && Object.keys(event.siteRelevance).includes(siteKey);
  });

  const nextMonth = () => setCurrentMonth((prev) => (prev + 1) % 12);
  const prevMonth = () => setCurrentMonth((prev) => (prev - 1 + 12) % 12);

  // Close modal with Escape, lock scroll while open
  useEffect(() => {
    if (!selectedEvent) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSelectedEvent(null);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selectedEvent]);

  return (
    <div className="space-y-7">
      {/* Month navigation */}
      <div className="flex items-center justify-between gap-3">
        <button
          onClick={prevMonth}
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border-soft hover:border-accent/50 hover:text-accent transition-colors"
          aria-label="Previous month"
        >
          <ChevronLeft className="h-4.5 w-4.5" />
        </button>

        <div className="text-center min-w-0">
          <AnimatePresence mode="wait">
            <motion.h3
              key={currentMonth}
              className="heading-serif text-3xl sm:text-4xl font-semibold"
              initial={{ opacity: 0, y: reduce ? 0 : 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reduce ? 0 : -10 }}
              transition={{ duration: 0.3, ease: EASE_OUT }}
            >
              {MONTHS[currentMonth]}
            </motion.h3>
          </AnimatePresence>
          <p className="mt-1 text-[0.65rem] uppercase tracking-[0.22em] text-foreground/50" aria-live="polite">
            {currentEvents.length} event{currentEvents.length !== 1 ? "s" : ""} this month
          </p>
        </div>

        <button
          onClick={nextMonth}
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border-soft hover:border-accent/50 hover:text-accent transition-colors"
          aria-label="Next month"
        >
          <ChevronRight className="h-4.5 w-4.5" />
        </button>
      </div>

      {/* Month strip */}
      <div className="flex justify-between gap-1 overflow-x-auto pb-1" role="tablist" aria-label="Months">
        {MONTHS_SHORT.map((m, i) => {
          const count = getEventsByMonth(i + 1).filter((event) => {
            if (!siteFilter) return true;
            const siteKey = getSiteKey(siteFilter);
            return event.siteRelevance && Object.keys(event.siteRelevance).includes(siteKey);
          }).length;
          const active = i === currentMonth;
          return (
            <button
              key={m}
              role="tab"
              aria-selected={active}
              onClick={() => setCurrentMonth(i)}
              className={cn(
                "relative flex min-w-[3rem] flex-col items-center gap-1 rounded-xl px-2 py-2 text-xs font-medium transition-colors",
                active ? "text-accent" : "text-foreground/45 hover:text-foreground"
              )}
            >
              {m}
              <span
                className={cn(
                  "h-1 w-1 rounded-full transition-all",
                  count === 0 ? "bg-transparent" : active ? "bg-accent" : "bg-foreground/25"
                )}
                aria-hidden
              />
              {active && (
                <motion.span
                  layoutId="month-indicator"
                  className="absolute inset-0 rounded-xl border border-accent/35 bg-accent/10"
                  transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 400, damping: 32 }}
                  aria-hidden
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Events */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${currentMonth}-${siteFilter ?? "all"}`}
          initial={{ opacity: 0, y: reduce ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: reduce ? 0 : -10 }}
          transition={{ duration: 0.35, ease: EASE_OUT }}
        >
          {currentEvents.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-2">
              {currentEvents.map((event, index) => {
                const meta = TYPE_META[event.type];
                const siteKey = siteFilter ? getSiteKey(siteFilter) : null;
                const relevance =
                  siteKey && event.siteRelevance
                    ? event.siteRelevance[siteKey as keyof typeof event.siteRelevance]
                    : null;
                return (
                  <motion.button
                    key={event.id}
                    onClick={() => setSelectedEvent(event)}
                    className="group h-full rounded-2xl border border-border-soft bg-surface/60 p-6 text-left transition-all duration-500 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_18px_50px_rgba(0,0,0,0.22)]"
                    initial={{ opacity: 0, y: reduce ? 0 : 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: index * 0.06, ease: EASE_OUT }}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <span
                        className={cn(
                          "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.16em]",
                          meta.chip
                        )}
                      >
                        <meta.icon className="h-3 w-3" />
                        {event.type}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-foreground/50 shrink-0 pt-1">
                        <CalendarDays className="h-3.5 w-3.5" />
                        {event.dates.year2025 || event.dates.dateRange}
                      </span>
                    </div>

                    <h4 className="heading-serif mt-4 text-2xl font-semibold group-hover:text-accent transition-colors">
                      {event.name}
                    </h4>
                    <p className="mt-2 text-sm text-foreground/65 line-clamp-2">{event.description}</p>

                    {relevance && (
                      <p className="mt-4 flex items-start gap-2 rounded-xl border border-accent/20 bg-accent/10 p-3 text-sm text-accent">
                        <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                        {relevance}
                      </p>
                    )}

                    <div className="mt-5 flex items-center justify-between border-t border-border-soft pt-3.5 text-xs text-foreground/50">
                      <span className="flex items-center gap-4">
                        <span className="flex items-center gap-1.5">
                          <Sparkles className="h-3 w-3" />
                          {event.traditions.length} traditions
                        </span>
                        {event.bestExperience && (
                          <span className="hidden sm:flex items-center gap-1.5">
                            <Clock className="h-3 w-3" />
                            Best experience
                          </span>
                        )}
                      </span>
                      <span className="font-semibold text-accent">Details →</span>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-border-soft py-16 text-center">
              <CalendarDays className="mx-auto h-10 w-10 text-foreground/20" />
              <h4 className="heading-serif mt-4 text-2xl text-foreground/70">A quiet month</h4>
              <p className="mt-2 text-sm text-foreground/50">
                No major festivals — try the neighbouring months for celebrations.
              </p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Event detail modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            className="fixed inset-0 z-[1100] flex items-center justify-center bg-background/70 backdrop-blur-md p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setSelectedEvent(null)}
            role="presentation"
          >
            <motion.div
              className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-2xl border border-border-soft bg-surface shadow-[0_32px_100px_rgba(0,0,0,0.45)]"
              initial={{ scale: reduce ? 1 : 0.94, y: reduce ? 0 : 18, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: reduce ? 1 : 0.96, opacity: 0 }}
              transition={{ duration: 0.35, ease: EASE_OUT }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label={`${selectedEvent.name} details`}
            >
              {(() => {
                const meta = TYPE_META[selectedEvent.type];
                return (
                  <div className="p-7 sm:p-9">
                    <button
                      onClick={() => setSelectedEvent(null)}
                      className="absolute top-4 right-4 grid h-9 w-9 place-items-center rounded-full border border-border-soft hover:border-accent/50 hover:text-accent transition-colors"
                      aria-label="Close dialog"
                    >
                      <X className="h-4 w-4" />
                    </button>

                    <span
                      className={cn(
                        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.16em]",
                        meta.chip
                      )}
                    >
                      <meta.icon className="h-3 w-3" />
                      {selectedEvent.type}
                    </span>
                    <h3 className="heading-serif mt-4 text-3xl sm:text-4xl font-semibold pr-10">
                      {selectedEvent.name}
                    </h3>
                    <p className="mt-2 flex items-center gap-2 text-sm text-foreground/55">
                      <CalendarDays className="h-4 w-4 text-accent" />
                      {selectedEvent.dates.year2025 || selectedEvent.dates.dateRange}
                    </p>

                    <div className="mt-7 space-y-7">
                      <ModalSection label="Significance">
                        <p>{selectedEvent.significance}</p>
                      </ModalSection>
                      <ModalSection label="What happens">
                        <p>{selectedEvent.description}</p>
                      </ModalSection>
                      <ModalSection label="Traditions">
                        <ul className="space-y-2">
                          {selectedEvent.traditions.map((tradition, index) => (
                            <li key={index} className="flex gap-2.5">
                              <span className="text-accent" aria-hidden>
                                —
                              </span>
                              {tradition}
                            </li>
                          ))}
                        </ul>
                      </ModalSection>
                      {selectedEvent.bestExperience && (
                        <ModalSection label="Best experience">
                          <p>{selectedEvent.bestExperience}</p>
                        </ModalSection>
                      )}
                      {selectedEvent.visitorTips && (
                        <ModalSection label="Visitor tips">
                          <ul className="space-y-2">
                            {selectedEvent.visitorTips.map((tip, index) => (
                              <li key={index} className="flex gap-2.5">
                                <span className="text-accent" aria-hidden>
                                  —
                                </span>
                                {tip}
                              </li>
                            ))}
                          </ul>
                        </ModalSection>
                      )}
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ModalSection({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section>
      <h4 className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-accent">{label}</h4>
      <div className="mt-2.5 text-sm text-foreground/75 leading-relaxed">{children}</div>
    </section>
  );
}
