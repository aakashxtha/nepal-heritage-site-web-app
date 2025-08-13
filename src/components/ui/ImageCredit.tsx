"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { getCreditByUrl, type ImageCredit } from "@/data/credits";

interface ImageCreditProps {
  imageUrl: string;
  className?: string;
  showFullCredit?: boolean;
}

export function ImageCredit({ imageUrl, className = "", showFullCredit = false }: ImageCreditProps) {
  const credit = getCreditByUrl(imageUrl);
  
  if (!credit) return null;

  if (showFullCredit) {
    return (
      <div className={`text-xs text-foreground/60 ${className}`}>
        <span>Photo by </span>
        {credit.photographerUrl ? (
          <Link 
            href={credit.photographerUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-accent hover:underline inline-flex items-center gap-1"
          >
            {credit.photographer}
            <ExternalLink className="h-3 w-3" />
          </Link>
        ) : (
          <span className="text-accent">{credit.photographer}</span>
        )}
        <span> on </span>
        {credit.source === "unsplash" && (
          <Link 
            href="https://unsplash.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            Unsplash
          </Link>
        )}
        {credit.source === "wikimedia" && (
          <Link 
            href="https://commons.wikimedia.org" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            Wikimedia Commons
          </Link>
        )}
      </div>
    );
  }

  // Compact version
  return (
    <div className={`text-xs text-foreground/60 ${className}`}>
      {credit.photographerUrl ? (
        <Link 
          href={credit.photographerUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-accent hover:underline inline-flex items-center gap-1"
        >
          {credit.photographer}
          <ExternalLink className="h-2.5 w-2.5" />
        </Link>
      ) : (
        <span className="text-accent">{credit.photographer}</span>
      )}
    </div>
  );
}

// Helper component for overlay credits on images
export function ImageCreditOverlay({ imageUrl, className = "" }: ImageCreditProps) {
  const credit = getCreditByUrl(imageUrl);
  
  if (!credit) return null;

  return (
    <div className={`absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm rounded px-2 py-1 ${className}`}>
      <ImageCredit imageUrl={imageUrl} />
    </div>
  );
}
