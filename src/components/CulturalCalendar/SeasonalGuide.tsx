"use client";

import { motion } from "framer-motion";
import { Thermometer, Cloud, Sun, Snowflake, Calendar, MapPin } from "lucide-react";
import { getSeasonalInfo, getSeason, type SeasonalInfo } from "@/data/cultural-calendar";
import { useReducedMotion, getMotionVariants } from "@/lib/useReducedMotion";

const SEASON_ICONS = {
  spring: <Sun className="h-5 w-5" />,
  summer: <Cloud className="h-5 w-5" />,
  autumn: <Thermometer className="h-5 w-5" />,
  winter: <Snowflake className="h-5 w-5" />
};

const SEASON_COLORS = {
  spring: "from-green-500/20 to-yellow-500/20 border-green-500/30",
  summer: "from-blue-500/20 to-green-500/20 border-blue-500/30",
  autumn: "from-orange-500/20 to-red-500/20 border-orange-500/30",
  winter: "from-blue-500/20 to-purple-500/20 border-blue-500/30"
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

interface SeasonalGuideProps {
  siteId: string;
  siteName: string;
}

export function SeasonalGuide({ siteId, siteName }: SeasonalGuideProps) {
  const seasonalInfo = getSeasonalInfo(siteId);
  const currentSeason = getSeason(new Date().getMonth() + 1);
  const prefersReducedMotion = useReducedMotion();
  
  const fadeVariants = getMotionVariants(fadeInUp, reducedFadeInUp, prefersReducedMotion);
  const containerVariants = getMotionVariants(staggerContainer, reducedStaggerContainer, prefersReducedMotion);

  if (!seasonalInfo) {
    return (
      <div className="text-center py-8">
        <p className="text-foreground/60">Seasonal information not available for this site.</p>
      </div>
    );
  }

  const seasons = Object.entries(seasonalInfo.seasons) as [keyof SeasonalInfo['seasons'], SeasonalInfo['seasons'][keyof SeasonalInfo['seasons']]][];

  return (
    <motion.div 
      className="space-y-6"
      initial="initial"
      animate="animate"
      variants={containerVariants}
    >
      <motion.div className="text-center space-y-2" variants={fadeVariants}>
        <h2 className="text-2xl font-bold heading-serif">Seasonal Guide</h2>
        <p className="text-foreground/70">
          Best times to visit {siteName} throughout the year
        </p>
      </motion.div>

      <motion.div 
        className="grid gap-6 md:grid-cols-2"
        variants={containerVariants}
      >
        {seasons.map(([seasonKey, season], index) => {
          const isCurrentSeason = seasonKey === currentSeason;
          
          return (
            <motion.div
              key={seasonKey}
              className={`relative p-6 rounded-xl border bg-gradient-to-br ${SEASON_COLORS[seasonKey]} ${
                isCurrentSeason ? 'ring-2 ring-accent' : ''
              }`}
              variants={fadeVariants}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: prefersReducedMotion ? 1 : 1.02 }}
            >
              {isCurrentSeason && (
                <div className="absolute -top-2 -right-2 bg-accent text-background px-2 py-1 rounded-full text-xs font-medium">
                  Current Season
                </div>
              )}
              
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-background/20">
                  {SEASON_ICONS[seasonKey]}
                </div>
                <div>
                  <h3 className="text-lg font-semibold capitalize">{seasonKey}</h3>
                  <p className="text-sm text-foreground/70">{season.months}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <Thermometer className="h-4 w-4" />
                    Weather
                  </h4>
                  <p className="text-sm text-foreground/80">{season.weather}</p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Highlights
                  </h4>
                  <ul className="space-y-1">
                    {season.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm text-foreground/80 flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {season.festivals.length > 0 && (
                  <div>
                    <h4 className="font-medium mb-2 flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      Festivals & Events
                    </h4>
                    <ul className="space-y-1">
                      {season.festivals.map((festival, idx) => (
                        <li key={idx} className="text-sm text-foreground/80 flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          {festival}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div 
        className="p-6 rounded-xl bg-accent/10 border border-accent/20"
        variants={fadeVariants}
      >
        <h3 className="font-semibold mb-3 text-accent">Planning Your Visit</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <h4 className="font-medium mb-2">Best Overall Time</h4>
            <p className="text-sm text-foreground/80">
              October to December and March to May offer the best weather conditions for most activities.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-2">Festival Season</h4>
            <p className="text-sm text-foreground/80">
              September to November is peak festival season with Dashain, Tihar, and other major celebrations.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
