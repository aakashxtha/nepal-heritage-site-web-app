"use client";

import { motion } from "framer-motion";
import { useReducedMotion, getMotionVariants } from "@/lib/useReducedMotion";

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -20,
  },
};

const reducedPageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const pageTransition = {
  type: "tween" as const,
  ease: "anticipate" as const,
  duration: 0.4,
};

const reducedPageTransition = {
  type: "tween" as const,
  ease: "anticipate" as const,
  duration: 0.1,
};

export default function Template({ children }: { children: React.ReactNode }) {
  const prefersReducedMotion = useReducedMotion();
  
  const variants = getMotionVariants(pageVariants, reducedPageVariants, prefersReducedMotion);
  const transition = getMotionVariants(pageTransition, reducedPageTransition, prefersReducedMotion);

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={variants}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}


