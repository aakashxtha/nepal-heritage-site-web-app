import type { HeritageSite } from "@/types/heritage";

export function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="prose prose-neutral max-w-none dark:prose-invert">
        {children}
      </div>
    </section>
  );
}

export function SiteSections({ site }: { site: HeritageSite }) {
  return (
    <div className="grid gap-8">
      {site.unesco && (
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">At a glance</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Info label="UNESCO inscription">
              {site.unesco.inscriptionYear}
              {site.unesco.extensionYears && site.unesco.extensionYears.length > 0 && (
                <span className="text-foreground/70"> (extended {site.unesco.extensionYears.join(", ")})</span>
              )}
            </Info>
            {site.unesco.criteria && (
              <Info label="Criteria">{site.unesco.criteria.join(", ")}</Info>
            )}
            {typeof site.unesco.areaKm2 === "number" && (
              <Info label="Area">{site.unesco.areaKm2} km²</Info>
            )}
            {typeof site.unesco.bufferZoneKm2 === "number" && (
              <Info label="Buffer zone">{site.unesco.bufferZoneKm2} km²</Info>
            )}
          </div>
          <div className="text-sm">
            {site.unesco.officialPage && (
              <a href={site.unesco.officialPage} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                Official UNESCO page →
              </a>
            )}
          </div>
        </section>
      )}

      <Section title="Historical Overview">
        <p>{site.historicalOverview}</p>
      </Section>
      <Section title="Architecture & Features">
        <p>{site.architectureAndFeatures}</p>
      </Section>
      <Section title="Cultural Significance">
        <p>{site.culturalSignificance}</p>
      </Section>
      <Section title="Conservation Status">
        <p>{site.conservationStatus}</p>
      </Section>
      <Section title="Visitor Experience">
        <p>{site.visitorExperience}</p>
      </Section>

      {site.itineraries && site.itineraries.length > 0 && (
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Suggested itineraries</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {site.itineraries.map((itinerary) => (
              <div key={itinerary.title} className="rounded-xl border border-foreground/10 p-4 bg-muted/30">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">{itinerary.title}</h3>
                  <span className="text-xs text-foreground/60">{itinerary.days} day{itinerary.days !== 1 ? 's' : ''}</span>
                </div>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                  {itinerary.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
                {itinerary.notes && (
                  <p className="text-xs text-foreground/60 mt-2">{itinerary.notes}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {site.faqs && site.faqs.length > 0 && (
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Frequently asked questions</h2>
          <div className="space-y-3">
            {site.faqs.map((f, i) => (
              <details key={i} className="rounded-xl border border-foreground/10 p-4 bg-muted/30">
                <summary className="cursor-pointer font-medium">{f.question}</summary>
                <p className="text-sm text-foreground/80 mt-2">{f.answer}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      {(site.officialLinks || site.sources) && (
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Sources & further reading</h2>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            {site.officialLinks?.map((l) => (
              <li key={l.url}><a href={l.url} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">{l.title}</a></li>
            ))}
            {site.sources?.map((s) => (
              <li key={s.url}><a href={s.url} target="_blank" rel="noopener noreferrer" className="hover:underline">{s.title}</a></li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}

function Info({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-foreground/10 p-4 bg-muted/30">
      <div className="text-xs text-foreground/60">{label}</div>
      <div className="font-medium">{children}</div>
    </div>
  );
}


