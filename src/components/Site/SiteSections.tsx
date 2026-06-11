import { ExternalLink } from "lucide-react";
import type { HeritageSite } from "@/types/heritage";
import { Reveal } from "@/components/motion/Reveal";

export function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Reveal>
      <section className="space-y-4">
        <SectionHeading>{title}</SectionHeading>
        <div className="text-foreground/75 leading-relaxed max-w-3xl">{children}</div>
      </section>
    </Reveal>
  );
}

export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="heading-serif text-3xl font-semibold flex items-baseline gap-4">
      <span className="h-px w-8 bg-accent shrink-0 self-center" aria-hidden />
      {children}
    </h2>
  );
}

export function SiteSections({ site }: { site: HeritageSite }) {
  return (
    <div className="grid gap-14">
      {site.unesco && (
        <Reveal>
          <section className="space-y-5">
            <SectionHeading>At a glance</SectionHeading>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Info label="UNESCO inscription">
                {site.unesco.inscriptionYear}
                {site.unesco.extensionYears && site.unesco.extensionYears.length > 0 && (
                  <span className="text-foreground/60 text-sm">
                    {" "}
                    (extended {site.unesco.extensionYears.join(", ")})
                  </span>
                )}
              </Info>
              {site.unesco.criteria && <Info label="Criteria">{site.unesco.criteria.join(", ")}</Info>}
              {typeof site.unesco.areaKm2 === "number" && (
                <Info label="Area">{site.unesco.areaKm2} km²</Info>
              )}
              {typeof site.unesco.bufferZoneKm2 === "number" && (
                <Info label="Buffer zone">{site.unesco.bufferZoneKm2} km²</Info>
              )}
              <Info label="Type">{site.type}</Info>
              <Info label="Region">{site.region}</Info>
            </div>
            {site.unesco.officialPage && (
              <a
                href={site.unesco.officialPage}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent link-underline"
              >
                Official UNESCO page
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
          </section>
        </Reveal>
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
        <Reveal>
          <section className="space-y-5">
            <SectionHeading>Suggested itineraries</SectionHeading>
            <div className="grid gap-4 sm:grid-cols-2">
              {site.itineraries.map((itinerary) => (
                <div
                  key={itinerary.title}
                  className="rounded-2xl border border-border-soft bg-surface/60 p-6 transition-colors hover:border-accent/35"
                >
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="heading-serif text-xl font-semibold">{itinerary.title}</h3>
                    <span className="shrink-0 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-accent">
                      {itinerary.days} day{itinerary.days !== 1 ? "s" : ""}
                    </span>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-foreground/75">
                    {itinerary.highlights.map((h, i) => (
                      <li key={i} className="flex gap-2.5">
                        <span className="text-accent mt-0.5" aria-hidden>
                          —
                        </span>
                        {h}
                      </li>
                    ))}
                  </ul>
                  {itinerary.notes && (
                    <p className="mt-4 text-xs text-foreground/50 italic">{itinerary.notes}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        </Reveal>
      )}

      {site.faqs && site.faqs.length > 0 && (
        <Reveal>
          <section className="space-y-5">
            <SectionHeading>Frequently asked questions</SectionHeading>
            <div className="space-y-3 max-w-3xl">
              {site.faqs.map((f, i) => (
                <details
                  key={i}
                  className="group rounded-2xl border border-border-soft bg-surface/60 px-6 py-4 open:border-accent/35 transition-colors"
                >
                  <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-medium">
                    {f.question}
                    <span className="text-accent transition-transform duration-300 group-open:rotate-45 text-xl leading-none">
                      +
                    </span>
                  </summary>
                  <p className="text-sm text-foreground/70 mt-3 leading-relaxed">{f.answer}</p>
                </details>
              ))}
            </div>
          </section>
        </Reveal>
      )}

      {(site.officialLinks || site.sources) && (
        <Reveal>
          <section className="space-y-5">
            <SectionHeading>Sources & further reading</SectionHeading>
            <ul className="space-y-2 text-sm">
              {site.officialLinks?.map((l) => (
                <li key={l.url}>
                  <a
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-accent link-underline"
                  >
                    {l.title}
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </li>
              ))}
              {site.sources?.map((s) => (
                <li key={s.url}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-foreground/70 link-underline hover:text-foreground"
                  >
                    {s.title}
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </Reveal>
      )}
    </div>
  );
}

function Info({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-border-soft bg-surface/60 p-5">
      <div className="text-[0.65rem] uppercase tracking-[0.2em] text-foreground/45">{label}</div>
      <div className="heading-serif mt-1.5 text-xl font-semibold">{children}</div>
    </div>
  );
}
