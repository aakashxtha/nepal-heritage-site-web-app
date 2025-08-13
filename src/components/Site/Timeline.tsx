"use client";

import { motion } from "framer-motion";
import type { TimelineEvent } from "@/types/heritage";

const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  initial: { 
    opacity: 0, 
    x: -20,
    scale: 0.8
  },
  animate: { 
    opacity: 1, 
    x: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const
    }
  }
};

const dotVariants = {
  initial: { 
    scale: 0,
    backgroundColor: "rgba(156, 163, 175, 0.3)"
  },
  animate: { 
    scale: 1,
    backgroundColor: "hsl(var(--accent))",
    transition: {
      duration: 0.3,
      delay: 0.2,
      ease: "easeOut" as const
    }
  }
};

export function Timeline({ events }: { events: TimelineEvent[] }) {
  return (
    <motion.ol 
      className="relative border-s border-foreground/15 pl-6 space-y-6"
      variants={containerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
    >
      {events.map((e, i) => (
        <motion.li 
          key={i} 
          className="relative"
          variants={itemVariants}
        >
          <motion.span 
            className="absolute -start-[9px] top-1.5 h-3 w-3 rounded-full shadow" 
            variants={dotVariants}
          />
          <motion.div 
            className="text-sm uppercase tracking-wide text-foreground/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 + i * 0.1 }}
          >
            {e.year}
          </motion.div>
          <motion.div 
            className="font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 + i * 0.1 }}
          >
            {e.title}
          </motion.div>
          <motion.p 
            className="text-sm text-foreground/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 + i * 0.1 }}
          >
            {e.description}
          </motion.p>
        </motion.li>
      ))}
    </motion.ol>
  );
}


