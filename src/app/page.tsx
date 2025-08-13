"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SITES } from "@/data/sites";
import { SiteCard } from "@/components/Site/SiteCard";
import MapPreview from "@/components/Map/MapPreview";
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

const cardVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
};

const reducedCardVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 }
};

export default function Home() {
  const prefersReducedMotion = useReducedMotion();
  
  const fadeVariants = getMotionVariants(fadeInUp, reducedFadeInUp, prefersReducedMotion);
  const containerVariants = getMotionVariants(staggerContainer, reducedStaggerContainer, prefersReducedMotion);
  const itemVariants = getMotionVariants(cardVariants, reducedCardVariants, prefersReducedMotion);

  return (
    <motion.div 
      className="grid gap-10"
      initial="initial"
      animate="animate"
      variants={containerVariants}
    >
      <section className="grid items-center gap-6 md:grid-cols-2">
        <motion.div className="space-y-4" variants={fadeVariants}>
          <motion.h1 
            className="heading-serif text-4xl md:text-5xl font-bold"
            variants={fadeVariants}
          >
            Nepal UNESCO World Heritage
          </motion.h1>
          <motion.p 
            className="text-foreground/80"
            variants={fadeVariants}
          >
            Explore Nepal&#39;s cultural and natural treasures across Kathmandu Valley, Sagarmatha, Chitwan, and Lumbini.
          </motion.p>
          <motion.div 
            className="flex gap-3"
            variants={fadeVariants}
          >
            <Link href="/map" className="inline-flex items-center rounded-md bg-foreground text-background px-4 py-2 text-sm font-medium hover:bg-foreground/90 transition-colors">Open Map</Link>
            <Link href="/sites" className="inline-flex items-center rounded-md border border-foreground/20 px-4 py-2 text-sm font-medium hover:bg-foreground/5 transition-colors">Browse Sites</Link>
          </motion.div>
        </motion.div>
        <motion.div 
          className="h-[360px] rounded-xl overflow-hidden border border-foreground/10"
          variants={fadeVariants}
        >
          <MapPreview center={{ lat: 28.2, lng: 84.0 }} zoom={6} markers={SITES} className="h-full w-full" />
        </motion.div>
      </section>

      <motion.section className="space-y-4" variants={fadeVariants}>
        <motion.h2 
          className="text-2xl font-semibold"
          variants={fadeVariants}
        >
          Featured Sites
        </motion.h2>
        <motion.div 
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
        >
          {SITES.map((site, index) => (
            <motion.div
              key={site.id}
              variants={itemVariants}
              transition={{ delay: prefersReducedMotion ? 0 : index * 0.1 }}
            >
              <SiteCard site={site} />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </motion.div>
  );
}
