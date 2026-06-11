import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Banknote, Clock, Compass, HandHeart, Sun } from "lucide-react";
import { getSiteBySlug, SITES } from "@/data/sites";
import { SiteHero } from "@/components/Site/SiteHero";
import { SiteSections, SectionHeading } from "@/components/Site/SiteSections";
import GalleryGrid from "./GalleryGrid";
import { Timeline } from "@/components/Site/Timeline";
import { CalendarView } from "@/components/CulturalCalendar/CalendarView";
import { SeasonalGuide } from "@/components/CulturalCalendar/SeasonalGuide";
import { Reveal } from "@/components/motion/Reveal";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SITES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const site = getSiteBySlug(slug);
  if (!site) return {};
  return {
    title: site.name,
    description: site.description,
  };
}

export default async function SiteDetailPage({ params }: Props) {
  const { slug } = await params;
  const site = getSiteBySlug(slug);
  if (!site) notFound();

  const related = (site.relatedSiteSlugs ?? SITES.filter((s) => s.slug !== site.slug).map((s) => s.slug))
    .map((s) => getSiteBySlug(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s))
    .slice(0, 3);

  return (
    <div>
      <SiteHero site={site} />

      <div className="container-page py-16 sm:py-20 grid gap-16 sm:gap-20">
        {site.monumentZones && (
          <Reveal>
            <section className="space-y-6">
              <SectionHeading>The seven monument zones</SectionHeading>
              <p className="text-foreground/65 max-w-2xl">
                One inscription, seven sacred precincts — three royal squares, two great stupas,
                and two temple complexes scattered across the valley.
              </p>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {site.monumentZones.map((mz, i) => (
                  <Reveal key={mz.id} delay={(i % 3) * 0.08}>
                    <div className="group h-full overflow-hidden rounded-2xl border border-border-soft bg-surface/60 transition-all duration-500 hover:-translate-y-1 hover:border-accent/40">
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={mz.images[0]?.src || site.heroImage}
                          alt={mz.name}
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                          className="object-cover transition-transform duration-[1.1s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        <span className="absolute bottom-3 left-4 heading-serif text-3xl text-white/35 select-none">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <div className="p-5">
                        <h3 className="heading-serif text-xl font-semibold group-hover:text-accent transition-colors">
                          {mz.name}
                        </h3>
                        <p className="mt-1.5 text-sm text-foreground/65">{mz.description}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </section>
          </Reveal>
        )}

        <SiteSections site={site} />

        <Reveal>
          <section className="space-y-6">
            <SectionHeading>Through the centuries</SectionHeading>
            <Timeline events={site.timeline} />
          </section>
        </Reveal>

        <Reveal>
          <section className="space-y-6">
            <SectionHeading>Cultural calendar & festivals</SectionHeading>
            <CalendarView siteFilter={site.id} />
          </section>
        </Reveal>

        <section>
          <SeasonalGuide siteId={site.id} siteName={site.name} />
        </section>

        {site.gallery && site.gallery.length > 0 && (
          <Reveal>
            <section className="space-y-6">
              <SectionHeading>Gallery</SectionHeading>
              <GalleryGrid images={site.gallery} />
            </section>
          </Reveal>
        )}

        <Reveal>
          <section className="space-y-6">
            <SectionHeading>Practical information</SectionHeading>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <InfoCard icon={<Sun className="h-4 w-4" />} title="Best time">
                {site.practicalInformation.bestTimeToVisit}
              </InfoCard>
              <InfoCard icon={<Compass className="h-4 w-4" />} title="Getting there">
                {site.practicalInformation.access}
              </InfoCard>
              <InfoCard icon={<HandHeart className="h-4 w-4" />} title="Etiquette">
                <ul className="space-y-1.5">
                  {site.practicalInformation.etiquette.map((e, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-accent" aria-hidden>
                        —
                      </span>
                      {e}
                    </li>
                  ))}
                </ul>
              </InfoCard>
              <InfoCard icon={<Clock className="h-4 w-4" />} title="Hours & fees">
                <div className="space-y-2">
                  {site.practicalInformation.hours && <p>{site.practicalInformation.hours}</p>}
                  {site.practicalInformation.fees && (
                    <p className="flex gap-2">
                      <Banknote className="h-4 w-4 text-accent shrink-0 mt-0.5" aria-hidden />
                      {site.practicalInformation.fees}
                    </p>
                  )}
                </div>
              </InfoCard>
            </div>
          </section>
        </Reveal>

        {related.length > 0 && (
          <Reveal>
            <section className="space-y-6 border-t border-border-soft pt-14">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <SectionHeading>Continue exploring</SectionHeading>
                <Link
                  href="/sites"
                  className="group inline-flex items-center gap-1.5 text-sm font-semibold text-accent"
                >
                  All sites
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
              <div className="grid gap-5 sm:grid-cols-3">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/sites/${r.slug}`}
                    className="group relative block overflow-hidden rounded-2xl border border-border-soft"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={r.heroImage}
                        alt={r.name}
                        fill
                        sizes="(min-width: 640px) 33vw, 100vw"
                        className="object-cover transition-transform duration-[1.1s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.07]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
                    </div>
                    <div className="absolute bottom-0 inset-x-0 p-4">
                      <p className="text-[0.6rem] uppercase tracking-[0.2em] text-white/65">{r.type}</p>
                      <h3 className="heading-serif text-xl font-semibold text-white group-hover:text-accent transition-colors">
                        {r.name}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </Reveal>
        )}
      </div>
    </div>
  );
}

function InfoCard({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-border-soft bg-surface/60 p-6">
      <h3 className="flex items-center gap-2.5 font-semibold">
        <span className="grid place-items-center h-8 w-8 rounded-full border border-accent/30 bg-accent/10 text-accent">
          {icon}
        </span>
        {title}
      </h3>
      <div className="mt-3.5 text-sm text-foreground/75 leading-relaxed">{children}</div>
    </div>
  );
}
