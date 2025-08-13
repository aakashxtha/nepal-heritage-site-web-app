"use client";
import NextDynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { SITES } from "@/data/sites";
import { useReducedMotion, getMotionVariants } from "@/lib/useReducedMotion";

const Map = NextDynamic(() => import("@/components/Map/LeafletMap"), { ssr: false });

export const dynamic = "force-dynamic";

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

export default function MapPage() {
  const router = useRouter();
  const prefersReducedMotion = useReducedMotion();
  const fadeVariants = getMotionVariants(fadeInUp, reducedFadeInUp, prefersReducedMotion);

  return (
    <motion.div 
      className="grid gap-6"
      initial="initial"
      animate="animate"
    >
      <motion.h1 
        className="heading-serif text-3xl font-bold"
        variants={fadeVariants}
      >
        Interactive Map
      </motion.h1>
      <motion.div 
        className="h-[70vh] rounded-xl overflow-hidden border border-foreground/10"
        variants={fadeVariants}
        transition={{ delay: 0.1 }}
      >
        <Map
          center={{ lat: 28.2, lng: 84.0 }}
          zoom={6}
          markers={SITES}
          onMarkerClick={(s) => router.push(`/sites/${s.slug}`)}
          className="h-full w-full"
        />
      </motion.div>
    </motion.div>
  );
}


