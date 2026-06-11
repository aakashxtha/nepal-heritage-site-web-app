"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";

export const EASE_OUT = [0.22, 1, 0.36, 1] as const;

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Vertical travel distance in px */
  y?: number;
  delay?: number;
  duration?: number;
  once?: boolean;
};

/** Fade-and-rise the moment the element scrolls into view. */
export function Reveal({
  children,
  className,
  y = 28,
  delay = 0,
  duration = 0.8,
  once = true,
}: RevealProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-60px" }}
      transition={{
        duration: reduce ? 0.25 : duration,
        delay: reduce ? 0 : delay,
        ease: EASE_OUT,
      }}
    >
      {children}
    </motion.div>
  );
}

/** Animated number that counts up when scrolled into view. */
export function CountUp({
  value,
  suffix = "",
  className,
}: {
  value: number;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1.8, bounce: 0 });

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, value, motionValue]);

  useEffect(() => {
    if (reduce) {
      if (ref.current) ref.current.textContent = `${value}${suffix}`;
      return;
    }
    return spring.on("change", (latest) => {
      if (ref.current) ref.current.textContent = `${Math.round(latest)}${suffix}`;
    });
  }, [spring, value, suffix, reduce]);

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}

/** Per-word staggered reveal for display headlines. */
export function SplitWords({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  if (reduce) {
    return (
      <motion.span
        className={className}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay }}
      >
        {text}
      </motion.span>
    );
  }

  return (
    <span className={className} aria-label={text}>
      {words.map((word, i) => (
        <span key={i}>
          <span className="inline-block overflow-hidden align-bottom pb-[0.12em] -mb-[0.12em]">
            <motion.span
              className="inline-block"
              aria-hidden
              initial={{ y: "115%" }}
              animate={{ y: "0%" }}
              transition={{
                duration: 0.9,
                delay: delay + i * 0.07,
                ease: EASE_OUT,
              }}
            >
              {word}
            </motion.span>
          </span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </span>
  );
}
