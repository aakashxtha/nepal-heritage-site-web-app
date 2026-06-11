"use client";

import { motion } from "framer-motion";

/**
 * Soft cross-fade between route changes. Pages handle their own
 * entrance choreography, so the template stays out of the way.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
