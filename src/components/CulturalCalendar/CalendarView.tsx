"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Calendar, MapPin, Clock, Star } from "lucide-react";
import { getEventsByMonth, type CulturalEvent } from "@/data/cultural-calendar";
import { useReducedMotion, getMotionVariants } from "@/lib/useReducedMotion";

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const EVENT_TYPE_COLORS = {
  festival: "bg-accent/20 text-accent border-accent/30",
  religious: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  cultural: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  seasonal: "bg-green-500/20 text-green-400 border-green-500/30"
};

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

interface CalendarViewProps {
  siteFilter?: string;
}

export function CalendarView({ siteFilter }: CalendarViewProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [selectedEvent, setSelectedEvent] = useState<CulturalEvent | null>(null);
  const prefersReducedMotion = useReducedMotion();
  
  const fadeVariants = getMotionVariants(fadeInUp, reducedFadeInUp, prefersReducedMotion);
  const containerVariants = getMotionVariants(staggerContainer, reducedStaggerContainer, prefersReducedMotion);

  // Map site IDs to cultural calendar keys
  const getSiteKey = (siteId: string): string => {
    const mapping: { [key: string]: string } = {
      'kathmandu-valley': 'kathmandu',
      'sagarmatha-national-park': 'sagarmatha', 
      'chitwan-national-park': 'chitwan',
      'lumbini': 'lumbini'
    };
    return mapping[siteId] || siteId;
  };

  const currentEvents = getEventsByMonth(currentMonth + 1).filter(event => {
    if (!siteFilter) return true;
    const siteKey = getSiteKey(siteFilter);
    return event.siteRelevance && Object.keys(event.siteRelevance).includes(siteKey);
  });

  const nextMonth = () => setCurrentMonth((prev) => (prev + 1) % 12);
  const prevMonth = () => setCurrentMonth((prev) => (prev - 1 + 12) % 12);

  const getEventIcon = (type: CulturalEvent['type']) => {
    switch (type) {
      case 'festival': return '🎉';
      case 'religious': return '🙏';
      case 'cultural': return '🎭';
      case 'seasonal': return '🌾';
      default: return '📅';
    }
  };

  return (
    <motion.div 
      className="space-y-6"
      initial="initial"
      animate="animate"
      variants={containerVariants}
    >
      {/* Month Navigation */}
      <motion.div 
        className="flex items-center justify-between"
        variants={fadeVariants}
      >
        <button
          onClick={prevMonth}
          className="p-2 rounded-lg hover:bg-foreground/5 transition-colors"
          aria-label="Previous month"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        
        <div className="text-center">
          <h2 className="text-2xl font-semibold heading-serif">{MONTHS[currentMonth]} 2025</h2>
          <p className="text-sm text-foreground/60 mt-1">
            {currentEvents.length} event{currentEvents.length !== 1 ? 's' : ''} this month
          </p>
        </div>
        
        <button
          onClick={nextMonth}
          className="p-2 rounded-lg hover:bg-foreground/5 transition-colors"
          aria-label="Next month"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </motion.div>

      {/* Events Grid */}
      {currentEvents.length > 0 ? (
        <motion.div 
          className="grid gap-4 md:grid-cols-2"
          variants={containerVariants}
        >
          {currentEvents.map((event, index) => (
            <motion.div
              key={event.id}
              className="group cursor-pointer"
              variants={fadeVariants}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedEvent(event)}
              whileHover={{ scale: prefersReducedMotion ? 1 : 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="p-6 rounded-xl border border-foreground/10 bg-muted/30 hover:bg-muted/50 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{getEventIcon(event.type)}</span>
                    <span className={`px-2 py-1 rounded-full text-xs border ${EVENT_TYPE_COLORS[event.type]}`}>
                      {event.type}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-foreground/60 flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {event.dates.year2025 || event.dates.dateRange}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                  {event.name}
                </h3>
                
                <p className="text-sm text-foreground/70 mb-3 line-clamp-2">
                  {event.description}
                </p>
                
                {event.siteRelevance && siteFilter && (() => {
                  const siteKey = getSiteKey(siteFilter);
                  const relevance = event.siteRelevance[siteKey as keyof typeof event.siteRelevance];
                  return relevance ? (
                    <div className="flex items-start gap-2 mt-3 p-3 rounded-lg bg-accent/10">
                      <MapPin className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-accent">
                        {relevance}
                      </p>
                    </div>
                  ) : null;
                })()}
                
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-foreground/10">
                  <div className="flex items-center gap-4 text-xs text-foreground/60">
                    <span className="flex items-center gap-1">
                      <Star className="h-3 w-3" />
                      {event.traditions.length} traditions
                    </span>
                    {event.bestExperience && (
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        Best experience
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-accent">Learn more →</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <motion.div 
          className="text-center py-12"
          variants={fadeVariants}
        >
          <Calendar className="h-12 w-12 mx-auto text-foreground/30 mb-4" />
          <h3 className="text-lg font-medium text-foreground/60 mb-2">No events this month</h3>
          <p className="text-sm text-foreground/50">
            Try browsing other months to discover Nepal&apos;s rich cultural calendar
          </p>
        </motion.div>
      )}

      {/* Event Detail Modal */}
      {selectedEvent && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedEvent(null)}
        >
          <motion.div
            className="bg-background rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{getEventIcon(selectedEvent.type)}</span>
                  <div>
                    <h2 className="text-2xl font-bold heading-serif">{selectedEvent.name}</h2>
                    <p className="text-foreground/60">{selectedEvent.dates.year2025 || selectedEvent.dates.dateRange}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="p-2 rounded-lg hover:bg-foreground/5 transition-colors"
                >
                  ✕
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Significance</h3>
                  <p className="text-foreground/80">{selectedEvent.significance}</p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Description</h3>
                  <p className="text-foreground/80">{selectedEvent.description}</p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Traditions</h3>
                  <ul className="space-y-1">
                    {selectedEvent.traditions.map((tradition, index) => (
                      <li key={index} className="text-foreground/80 flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        {tradition}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {selectedEvent.bestExperience && (
                  <div>
                    <h3 className="font-semibold mb-2">Best Experience</h3>
                    <p className="text-foreground/80">{selectedEvent.bestExperience}</p>
                  </div>
                )}
                
                {selectedEvent.visitorTips && (
                  <div>
                    <h3 className="font-semibold mb-2">Visitor Tips</h3>
                    <ul className="space-y-1">
                      {selectedEvent.visitorTips.map((tip, index) => (
                        <li key={index} className="text-foreground/80 flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
}
