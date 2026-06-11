"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ChevronRight, Landmark, MapPin, Trees } from "lucide-react";
import type { HeritageSite } from "@/types/heritage";
import { EASE_OUT } from "@/components/motion/Reveal";

export function SiteHero({ site }: { site: HeritageSite }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "20%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-[78svh] min-h-[520px] overflow-hidden grain">
      <motion.div className="absolute inset-0" style={{ y: imageY }}>
        <motion.div
          className="absolute inset-[-4%]"
          initial={{ scale: reduce ? 1 : 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 7, ease: "easeOut" }}
        >
          <Image
            src={site.heroImage}
            alt={site.name}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-background/65 via-background/15 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/55 via-transparent to-transparent" />

      <motion.div
        className="relative h-full container-page flex flex-col justify-end pb-14 sm:pb-20"
        style={{ opacity: contentOpacity }}
      >
        <motion.nav
          aria-label="Breadcrumb"
          className="flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-foreground/55"
          initial={{ opacity: 0, y: reduce ? 0 : 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7, ease: EASE_OUT }}
        >
          <Link href="/sites" className="hover:text-accent transition-colors">
            Sites
          </Link>
          <ChevronRight className="h-3 w-3" aria-hidden />
          <span className="text-foreground/80">{site.name}</span>
        </motion.nav>

        <motion.div
          className="mt-5 flex flex-wrap items-center gap-2.5"
          initial={{ opacity: 0, y: reduce ? 0 : 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28, duration: 0.7, ease: EASE_OUT }}
        >
          <Badge>
            {site.type === "Natural" ? (
              <Trees className="h-3 w-3 text-accent" />
            ) : (
              <Landmark className="h-3 w-3 text-accent" />
            )}
            {site.type}
          </Badge>
          {site.unesco && <Badge>UNESCO · {site.unesco.inscriptionYear}</Badge>}
          <Badge>
            <MapPin className="h-3 w-3 text-accent" />
            {site.region}
          </Badge>
        </motion.div>

        <motion.h1
          className="heading-serif mt-4 text-[clamp(2.5rem,6.5vw,5.5rem)] font-semibold leading-[1.04] max-w-4xl text-balance"
          initial={{ opacity: 0, y: reduce ? 0 : 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9, ease: EASE_OUT }}
        >
          {site.name}
        </motion.h1>

        <motion.p
          className="mt-4 max-w-2xl text-foreground/75 sm:text-lg"
          initial={{ opacity: 0, y: reduce ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.9, ease: EASE_OUT }}
        >
          {site.description}
        </motion.p>
      </motion.div>
    </section>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-foreground/15 bg-background/45 backdrop-blur px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em]">
      {children}
    </span>
  );
}
