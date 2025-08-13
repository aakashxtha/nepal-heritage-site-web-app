"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Filter, MapPin, Star } from "lucide-react";
import { CalendarView } from "@/components/CulturalCalendar/CalendarView";
import { CULTURAL_EVENTS, getCurrentSeasonEvents } from "@/data/cultural-calendar";
import { useReducedMotion, getMotionVariants } from "@/lib/useReducedMotion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const reducedFadeInUp = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.2 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const reducedStaggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.05
    }
  }
};

const SITE_FILTERS = [
  { id: "", name: "All Sites" },
  { id: "kathmandu-valley", name: "Kathmandu Valley" },
  { id: "sagarmatha-national-park", name: "Sagarmatha National Park" },
  { id: "chitwan-national-park", name: "Chitwan National Park" },
  { id: "lumbini", name: "Lumbini" }
];

export default function CulturalCalendarPage() {
  const [selectedSite, setSelectedSite] = useState("");
  const prefersReducedMotion = useReducedMotion();
  
  const fadeVariants = getMotionVariants(fadeInUp, reducedFadeInUp, prefersReducedMotion);
  const containerVariants = getMotionVariants(staggerContainer, reducedStaggerContainer, prefersReducedMotion);
  
  const currentSeasonEvents = getCurrentSeasonEvents();
  const totalEvents = CULTURAL_EVENTS.length;

  return (
    <motion.div 
      className="grid gap-8"
      initial="initial"
      animate="animate"
      variants={containerVariants}
    >
      {/* Header */}
      <motion.div className="text-center space-y-4" variants={fadeVariants}>
        <div className="flex items-center justify-center gap-3 mb-4">
          <Calendar className="h-8 w-8 text-accent" />
          <h1 className="heading-serif text-3xl font-bold">Cultural Calendar</h1>
        </div>
        <p className="text-foreground/80 max-w-2xl mx-auto">
          Discover Nepal&apos;s rich cultural heritage through its vibrant festivals and seasonal celebrations. 
          Plan your visit around these incredible cultural experiences.
        </p>
        <div className="flex items-center justify-center gap-6 text-sm text-foreground/60">
          <div className="flex items-center gap-2">
            <Star className="h-4 w-4 text-accent" />
            <span>{totalEvents} festivals & events</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-accent" />
            <span>4 UNESCO heritage sites</span>
          </div>
        </div>
      </motion.div>

      {/* Current Season Highlight */}
      {currentSeasonEvents.length > 0 && (
        <motion.div 
          className="p-6 rounded-xl bg-accent/10 border border-accent/20"
          variants={fadeVariants}
        >
          <h2 className="text-lg font-semibold text-accent mb-3">This Season&apos;s Highlights</h2>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {currentSeasonEvents.slice(0, 3).map((event) => (
              <div key={event.id} className="flex items-center gap-3 p-3 rounded-lg bg-background/50">
                <span className="text-2xl">
                  {event.type === 'festival' ? '🎉' : 
                   event.type === 'religious' ? '🙏' : 
                   event.type === 'cultural' ? '🎭' : '🌾'}
                </span>
                <div>
                  <h3 className="font-medium text-sm">{event.name}</h3>
                  <p className="text-xs text-foreground/70">{event.dates.year2025 || event.dates.dateRange}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Site Filter */}
      <motion.div className="space-y-4" variants={fadeVariants}>
        <div className="flex items-center gap-3">
          <Filter className="h-5 w-5 text-accent" />
          <h2 className="text-lg font-semibold">Filter by Heritage Site</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {SITE_FILTERS.map((site) => (
            <button
              key={site.id}
              onClick={() => setSelectedSite(site.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedSite === site.id
                  ? "bg-accent text-background"
                  : "bg-muted/30 hover:bg-muted/50 text-foreground/80"
              }`}
            >
              {site.name}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Calendar */}
      <motion.div variants={fadeVariants}>
        <CalendarView siteFilter={selectedSite || undefined} />
      </motion.div>

      {/* Footer Info */}
      <motion.div 
        className="text-center py-8 border-t border-foreground/10"
        variants={fadeVariants}
      >
        <p className="text-sm text-foreground/60 mb-2">
          Festival dates may vary based on lunar calendar calculations
        </p>
        <p className="text-xs text-foreground/50">
          Always verify specific dates with local sources when planning your visit
        </p>
      </motion.div>
    </motion.div>
  );
}
