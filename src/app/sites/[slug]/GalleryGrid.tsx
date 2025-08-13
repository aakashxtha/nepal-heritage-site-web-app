"use client";
import Image from "next/image";
import { Lightbox, useLightbox } from "@/components/Gallery/Lightbox";

export default function GalleryGrid({ images }: { images: { src: string; alt: string; caption?: string }[] }) {
  const lb = useLightbox();
  return (
    <>
      <div className="grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {images.map((img, i) => (
          <button key={i} className="relative aspect-square overflow-hidden rounded-lg border border-foreground/10"
            onClick={() => lb.show(i)} aria-label={`Open image ${i + 1}`}
          >
            <Image src={img.src} alt={img.alt} fill className="object-cover hover:scale-105 transition-transform" />
          </button>
        ))}
      </div>
      <Lightbox images={images} open={lb.open} onClose={lb.hide} index={lb.index} />
    </>
  );
}


