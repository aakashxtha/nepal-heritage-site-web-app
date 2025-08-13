import Image from "next/image";
import type { HeritageSite } from "@/types/heritage";

export function SiteHero({ site }: { site: HeritageSite }) {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-foreground/10">
      <div className="relative h-[40vh] min-h-[320px]">
        <Image src={site.heroImage} alt={site.name} fill priority className="object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/0" />
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h1 className="text-3xl md:text-5xl font-bold drop-shadow-lg">{site.name}</h1>
        <p className="max-w-2xl mt-2 text-white/90">
          {site.description}
        </p>
      </div>
    </section>
  );
}


