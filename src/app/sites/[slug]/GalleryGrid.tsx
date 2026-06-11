"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Maximize2 } from "lucide-react";
import { Lightbox, useLightbox } from "@/components/Gallery/Lightbox";
import { EASE_OUT } from "@/components/motion/Reveal";

export default function GalleryGrid({
  images,
}: {
  images: { src: string; alt: string; caption?: string }[];
}) {
  const lb = useLightbox();
  const reduce = useReducedMotion();

  return (
    <>
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-3">
        {images.map((img, i) => (
          <motion.button
            key={i}
            className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-border-soft text-left"
            onClick={() => lb.show(i)}
            aria-label={`Open image: ${img.alt}`}
            initial={{ opacity: 0, y: reduce ? 0 : 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: reduce ? 0.2 : 0.6, delay: (i % 3) * 0.08, ease: EASE_OUT }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(min-width: 1024px) 33vw, 50vw"
              className="object-cover transition-transform duration-[1.1s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <span className="absolute bottom-3 left-4 right-12 text-sm font-medium text-white opacity-0 translate-y-1.5 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
              {img.caption || img.alt}
            </span>
            <span className="absolute bottom-3 right-3 grid place-items-center h-8 w-8 rounded-full bg-background/55 backdrop-blur text-foreground opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <Maximize2 className="h-3.5 w-3.5" />
            </span>
          </motion.button>
        ))}
      </div>
      <Lightbox images={images} open={lb.open} onClose={lb.hide} index={lb.index} />
    </>
  );
}
