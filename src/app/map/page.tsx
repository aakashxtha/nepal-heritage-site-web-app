"use client";

import { useState } from "react";
import NextDynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowUpRight, Landmark, Trees } from "lucide-react";
import { SITES } from "@/data/sites";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

const Map = NextDynamic(() => import("@/components/Map/LeafletMap"), { ssr: false });

export const dynamic = "force-dynamic";

export default function MapPage() {
  const router = useRouter();
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="container-page pt-28 sm:pt-32 pb-16">
      <Reveal>
        <p className="eyebrow">Atlas</p>
        <h1 className="heading-serif mt-4 text-4xl sm:text-6xl font-semibold">Interactive map</h1>
        <p className="mt-4 text-foreground/65 max-w-xl">
          Every World Heritage Site in Nepal, from the subtropical Terai to the high Himalaya.
          Select a marker — or a card — to open the full story.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-10">
        <div className="grid gap-5 lg:grid-cols-[360px_1fr]">
          {/* Site list */}
          <div className="order-2 lg:order-1 flex flex-col gap-3 lg:max-h-[68vh] lg:overflow-y-auto lg:pr-1">
            {SITES.map((site) => (
              <Link
                key={site.id}
                href={`/sites/${site.slug}`}
                onMouseEnter={() => setHovered(site.id)}
                onMouseLeave={() => setHovered(null)}
                className={cn(
                  "group flex gap-4 rounded-2xl border bg-surface/60 p-3 transition-all duration-300",
                  hovered === site.id
                    ? "border-accent/50 shadow-[0_12px_40px_rgba(0,0,0,0.25)]"
                    : "border-border-soft hover:border-accent/40"
                )}
              >
                <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded-xl">
                  <Image
                    src={site.heroImage}
                    alt={site.name}
                    fill
                    sizes="112px"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="min-w-0 py-0.5">
                  <p className="flex items-center gap-1.5 text-[0.6rem] uppercase tracking-[0.2em] text-foreground/45">
                    {site.type === "Natural" ? (
                      <Trees className="h-3 w-3 text-accent" />
                    ) : (
                      <Landmark className="h-3 w-3 text-accent" />
                    )}
                    {site.type} · {site.unesco?.inscriptionYear}
                  </p>
                  <h2 className="heading-serif mt-1 text-lg font-semibold leading-tight group-hover:text-accent transition-colors truncate">
                    {site.name}
                  </h2>
                  <p className="mt-1 text-xs text-foreground/55 line-clamp-2">{site.description}</p>
                </div>
                <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 self-center text-foreground/30 transition group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            ))}
            <p className="text-xs text-foreground/45 px-1 pt-1">
              Tip: hover a marker on the map for a quick preview, click it to open the site page.
            </p>
          </div>

          {/* Map */}
          <div className="order-1 lg:order-2 h-[52vh] lg:h-[68vh] rounded-2xl overflow-hidden border border-border-soft shadow-[0_24px_80px_rgba(0,0,0,0.25)]">
            <Map
              center={{ lat: 27.9, lng: 84.6 }}
              zoom={7}
              markers={SITES}
              onMarkerClick={(s) => router.push(`/sites/${s.slug}`)}
              className="h-full w-full"
            />
          </div>
        </div>
      </Reveal>
    </div>
  );
}
