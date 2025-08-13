"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Camera, Heart } from "lucide-react";
import { getCreditsBySource, getAllPhotographers } from "@/data/credits";
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

export default function CreditsPage() {
  const prefersReducedMotion = useReducedMotion();
  const fadeVariants = getMotionVariants(fadeInUp, reducedFadeInUp, prefersReducedMotion);
  const containerVariants = getMotionVariants(staggerContainer, reducedStaggerContainer, prefersReducedMotion);
  
  const unsplashCredits = getCreditsBySource("unsplash");
  const wikimediaCredits = getCreditsBySource("wikimedia");
  const photographers = getAllPhotographers();

  return (
    <motion.div 
      className="grid gap-8"
      initial="initial"
      animate="animate"
      variants={containerVariants}
    >
      <motion.div className="text-center space-y-4" variants={fadeVariants}>
        <h1 className="heading-serif text-3xl font-bold">Credits & Attributions</h1>
        <p className="text-foreground/80 max-w-2xl mx-auto">
          This Nepal Heritage site is made possible by the generous contributions of photographers, developers, and the open-source community. 
          We gratefully acknowledge all creators whose work helps showcase Nepal&apos;s incredible cultural and natural heritage.
        </p>
      </motion.div>

      {/* Photographers Section */}
      <motion.section className="space-y-6" variants={fadeVariants}>
        <div className="flex items-center gap-3">
          <Camera className="h-6 w-6 text-accent" />
          <h2 className="text-2xl font-semibold">Photography</h2>
        </div>
        
        <motion.div 
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
        >
          {photographers.map((photographer, index) => (
            <motion.div
              key={photographer.name}
              className="p-4 rounded-lg border border-foreground/10 bg-muted/30"
              variants={fadeVariants}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">{photographer.name}</h3>
                  <p className="text-sm text-foreground/60 capitalize">{photographer.source}</p>
                </div>
                {photographer.url && (
                  <Link 
                    href={photographer.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent/80 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Unsplash Credits */}
      <motion.section className="space-y-6" variants={fadeVariants}>
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded bg-black flex items-center justify-center">
            <span className="text-white text-xs font-bold">U</span>
          </div>
          <h2 className="text-2xl font-semibold">Unsplash</h2>
        </div>
        
        <p className="text-foreground/70 text-sm">
          Beautiful, free images from the Unsplash community. All images are used under the{" "}
          <Link href="https://unsplash.com/license" target="_blank" className="text-accent hover:underline">
            Unsplash License
          </Link>.
        </p>

        <motion.div 
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
        >
          {unsplashCredits.map((credit, index) => (
            <motion.div
              key={credit.id}
              className="group relative overflow-hidden rounded-lg border border-foreground/10"
              variants={fadeVariants}
              transition={{ delay: index * 0.05 }}
            >
              <div className="relative h-48">
                <Image
                  src={credit.url}
                  alt={credit.title || credit.description || "Heritage site image"}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="text-white font-medium text-sm">{credit.title}</h3>
                  <div className="flex items-center justify-between mt-1">
                    <p className="text-white/80 text-xs">by {credit.photographer}</p>
                    {credit.photographerUrl && (
                      <Link
                        href={credit.photographerUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/80 hover:text-white transition-colors"
                      >
                        <ExternalLink className="h-3 w-3" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Wikimedia Credits */}
      {wikimediaCredits.length > 0 && (
        <motion.section className="space-y-6" variants={fadeVariants}>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded bg-foreground/10 flex items-center justify-center">
              <span className="text-foreground text-xs font-bold">W</span>
            </div>
            <h2 className="text-2xl font-semibold">Wikimedia Commons</h2>
          </div>
          
          <p className="text-foreground/70 text-sm">
            Images from Wikimedia Commons, the free media repository. These images are used under Creative Commons licenses.
          </p>

          <motion.div 
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
          >
            {wikimediaCredits.map((credit, index) => (
              <motion.div
                key={credit.id}
                className="p-4 rounded-lg border border-foreground/10 bg-muted/30"
                variants={fadeVariants}
                transition={{ delay: index * 0.05 }}
              >
                <h3 className="font-medium text-sm">{credit.title}</h3>
                <p className="text-xs text-foreground/60 mt-1">by {credit.photographer}</p>
                <div className="flex items-center gap-2 mt-2">
                  <Link
                    href={credit.licenseUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-accent hover:underline"
                  >
                    {credit.license}
                  </Link>
                  {credit.photographerUrl && (
                    <Link
                      href={credit.photographerUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent/80 transition-colors"
                    >
                      <ExternalLink className="h-3 w-3" />
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      )}

      {/* Technical Credits */}
      <motion.section className="space-y-6" variants={fadeVariants}>
        <div className="flex items-center gap-3">
          <Heart className="h-6 w-6 text-accent" />
          <h2 className="text-2xl font-semibold">Technology & Open Source</h2>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2">
          <div className="p-4 rounded-lg border border-foreground/10 bg-muted/30">
            <h3 className="font-medium">Development</h3>
            <ul className="text-sm text-foreground/70 mt-2 space-y-1">
              <li>• Next.js - React framework</li>
              <li>• Tailwind CSS - Styling</li>
              <li>• TypeScript - Type safety</li>
              <li>• Framer Motion - Animations</li>
            </ul>
          </div>
          
          <div className="p-4 rounded-lg border border-foreground/10 bg-muted/30">
            <h3 className="font-medium">Maps & Icons</h3>
            <ul className="text-sm text-foreground/70 mt-2 space-y-1">
              <li>• OpenStreetMap - Map tiles</li>
              <li>• Leaflet - Interactive maps</li>
              <li>• Lucide - Icon library</li>
              <li>• React Leaflet - Map components</li>
            </ul>
          </div>
    </div>
      </motion.section>

      {/* Footer */}
      <motion.div 
        className="text-center py-8 border-t border-foreground/10"
        variants={fadeVariants}
      >
        <p className="text-sm text-foreground/60">
          Made with love for Nepal&apos;s incredible heritage. All rights reserved to respective creators and organizations.
        </p>
      </motion.div>
    </motion.div>
  );
}


