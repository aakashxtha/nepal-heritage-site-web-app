import { notFound } from "next/navigation";
import Image from "next/image";
import { getSiteBySlug } from "@/data/sites";
import { SiteHero } from "@/components/Site/SiteHero";
import { SiteSections } from "@/components/Site/SiteSections";
import GalleryGrid from "./GalleryGrid";
import { Timeline } from "@/components/Site/Timeline";
import { CalendarView } from "@/components/CulturalCalendar/CalendarView";
import { SeasonalGuide } from "@/components/CulturalCalendar/SeasonalGuide";

type Props = { params: Promise<{ slug: string }> };

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

  return (
    <div className="grid gap-8">
      <SiteHero site={site} />

      {site.monumentZones && (
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Monument Zones</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {site.monumentZones.map((mz) => (
              <div key={mz.id} className="rounded-xl overflow-hidden border border-foreground/10">
                <div className="relative aspect-[16/9]">
                  <Image src={mz.images[0]?.src || site.heroImage} alt={mz.name} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">{mz.name}</h3>
                  <p className="text-sm text-foreground/70">{mz.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <SiteSections site={site} />

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Timeline</h2>
        <Timeline events={site.timeline} />
      </section>

      <section className="space-y-6">
        <h2 className="text-xl font-semibold">Cultural Calendar & Festivals</h2>
        <CalendarView siteFilter={site.id} />
      </section>

      <section className="space-y-6">
        <SeasonalGuide siteId={site.id} siteName={site.name} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Gallery</h2>
        <GalleryGrid images={site.gallery} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Practical Information</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <InfoCard title="Best Time">{site.practicalInformation.bestTimeToVisit}</InfoCard>
          <InfoCard title="Access">{site.practicalInformation.access}</InfoCard>
          <InfoCard title="Etiquette">
            <ul className="list-disc pl-5 space-y-1">
              {site.practicalInformation.etiquette.map((e, i) => (
                <li key={i}>{e}</li>
              ))}
            </ul>
          </InfoCard>
          <InfoCard title="Hours & Fees">
            <div className="space-y-1">
              {site.practicalInformation.hours && <p><strong>Hours:</strong> {site.practicalInformation.hours}</p>}
              {site.practicalInformation.fees && <p><strong>Fees:</strong> {site.practicalInformation.fees}</p>}
            </div>
          </InfoCard>
        </div>
      </section>
    </div>
  );
}

function InfoCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-foreground/10 p-4 bg-muted/30">
      <h3 className="font-semibold mb-2">{title}</h3>
      <div className="text-sm text-foreground/90">{children}</div>
    </div>
  );
}




