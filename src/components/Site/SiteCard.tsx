"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Landmark, Trees } from "lucide-react";
import type { HeritageSite } from "@/types/heritage";

export function SiteCard({ site }: { site: HeritageSite }) {
  return (
    <Link
      href={`/sites/${site.slug}`}
      className="group block h-full overflow-hidden rounded-2xl border border-border-soft bg-surface/60 transition-all duration-500 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-[0_24px_70px_rgba(0,0,0,0.3)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={site.heroImage}
          alt={site.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-[1.1s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.07]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
        <span className="absolute top-3.5 left-3.5 inline-flex items-center gap-1.5 rounded-full bg-background/55 backdrop-blur px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-foreground">
          {site.type === "Natural" ? (
            <Trees className="h-3 w-3 text-accent" />
          ) : (
            <Landmark className="h-3 w-3 text-accent" />
          )}
          {site.type}
        </span>
        {site.unesco && (
          <span className="absolute bottom-3.5 left-3.5 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-white/85">
            UNESCO · {site.unesco.inscriptionYear}
          </span>
        )}
        <span className="absolute bottom-3.5 right-3.5 grid place-items-center h-9 w-9 rounded-full bg-accent text-background opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
          <ArrowUpRight className="h-4.5 w-4.5" />
        </span>
      </div>
      <div className="p-5">
        <p className="text-[0.65rem] uppercase tracking-[0.22em] text-foreground/45">{site.region}</p>
        <h3 className="heading-serif mt-1.5 text-2xl font-semibold leading-snug group-hover:text-accent transition-colors">
          {site.name}
        </h3>
        <p className="mt-2.5 text-sm text-foreground/65 line-clamp-3">{site.description}</p>
      </div>
    </Link>
  );
}
