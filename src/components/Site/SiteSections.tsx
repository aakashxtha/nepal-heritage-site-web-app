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
    </div>
  );
}


