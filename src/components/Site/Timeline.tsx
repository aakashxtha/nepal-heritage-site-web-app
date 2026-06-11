"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import type { TimelineEvent } from "@/types/heritage";
import { EASE_OUT } from "@/components/motion/Reveal";

export function Timeline({ events }: { events: TimelineEvent[] }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.5"],
  });
  const lineScale = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <ol ref={ref} className="relative pl-8 sm:pl-10 space-y-10">
      {/* Track + animated progress line */}
      <span className="absolute left-[5px] top-1 bottom-1 w-px bg-foreground/10" aria-hidden />
      <motion.span
        className="absolute left-[5px] top-1 bottom-1 w-px bg-accent origin-top"
        style={{ scaleY: reduce ? 1 : lineScale }}
        aria-hidden
      />

      {events.map((e, i) => (
        <motion.li
          key={i}
          className="relative"
          initial={{ opacity: 0, x: reduce ? 0 : -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: reduce ? 0.2 : 0.7, delay: i * 0.05, ease: EASE_OUT }}
        >
          <motion.span
            className="absolute -left-8 sm:-left-10 top-1 grid place-items-center"
            initial={{ scale: reduce ? 1 : 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: 0.15 + i * 0.05, type: "spring", bounce: 0.4 }}
            aria-hidden
          >
            <span className="h-[11px] w-[11px] rounded-full bg-accent ring-4 ring-accent/15" />
          </motion.span>
          <div className="heading-serif text-2xl text-accent leading-none">{e.year}</div>
          <div className="mt-1.5 font-semibold">{e.title}</div>
          <p className="mt-1 text-sm text-foreground/65 max-w-xl">{e.description}</p>
        </motion.li>
      ))}
    </ol>
  );
}
