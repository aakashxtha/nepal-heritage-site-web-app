"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import type { GalleryImage } from "@/types/heritage";

const LightboxBase = dynamic(() => import("yet-another-react-lightbox").then(m => m.default), { ssr: false });
// Plugins can be added later if needed

type Props = {
  images: GalleryImage[];
  open: boolean;
  onClose: () => void;
  index?: number;
};

export function Lightbox({ images, open, onClose, index = 0 }: Props) {
  const slides = images.map((img) => ({ src: img.src, description: img.caption, alt: img.alt }));
  return (
    <LightboxBase open={open} close={onClose} slides={slides} index={index} />
  );
}

export function useLightbox() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  return {
    open,
    index,
    show: (i: number) => { setIndex(i); setOpen(true); },
    hide: () => setOpen(false),
  };
}


