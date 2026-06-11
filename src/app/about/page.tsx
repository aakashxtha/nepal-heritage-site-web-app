import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpenText, Compass, HeartHandshake, Map } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why this project exists: an educational guide to Nepal's four UNESCO World Heritage Sites.",
};

const VALUES = [
  {
    icon: BookOpenText,
    title: "Accurate & sourced",
    body: "Every page links back to UNESCO and official sources so you can verify details before you travel.",
  },
  {
    icon: HeartHandshake,
    title: "Respect first",
    body: "These are living temples, sacred forests, and active places of worship — etiquette guidance is built into every site page.",
  },
  {
    icon: Map,
    title: "Built for planning",
    body: "Interactive maps, seasonal guides, and festival calendars turn curiosity into a real itinerary.",
  },
  {
    icon: Compass,
    title: "Made to wander",
    body: "From monument zones to monastery trails, the site is organised the way you'd actually explore Nepal.",
  },
];

export default function AboutPage() {
  return (
    <div className="container-page pt-28 sm:pt-32 pb-16">
      <Reveal>
        <p className="eyebrow">The Project</p>
        <h1 className="heading-serif mt-4 text-4xl sm:text-6xl font-semibold text-balance max-w-3xl">
          A field guide to Nepal&apos;s outstanding universal value
        </h1>
        <p className="mt-6 text-foreground/70 max-w-2xl text-lg leading-relaxed">
          Nepal Heritage is an educational project dedicated to the country&apos;s four UNESCO World
          Heritage Sites — the Kathmandu Valley, Sagarmatha National Park, Chitwan National Park,
          and Lumbini. It exists to help travellers, students, and the simply curious explore these
          places with context, care, and respect.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-14">
        <div className="relative h-[340px] sm:h-[440px] overflow-hidden rounded-2xl border border-border-soft">
          <Image
            src="https://images.unsplash.com/photo-1560747643-308411529b15?q=80&w=2000&auto=format&fit=crop"
            alt="Prayer flags at Swayambhunath overlooking Kathmandu"
            fill
            sizes="(min-width: 1280px) 1216px, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
          <p className="absolute bottom-5 left-6 text-sm text-foreground/75">
            Swayambhunath — one of seven monument zones of the Kathmandu Valley
          </p>
        </div>
      </Reveal>

      <div className="mt-16 grid gap-5 sm:grid-cols-2">
        {VALUES.map((v, i) => (
          <Reveal key={v.title} delay={i * 0.08}>
            <div className="h-full rounded-2xl border border-border-soft bg-surface/60 p-7">
              <span className="grid place-items-center h-10 w-10 rounded-full border border-accent/30 bg-accent/10 text-accent">
                <v.icon className="h-4.5 w-4.5" />
              </span>
              <h2 className="heading-serif mt-4 text-2xl font-semibold">{v.title}</h2>
              <p className="mt-2.5 text-sm text-foreground/65 leading-relaxed">{v.body}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-16">
        <div className="rounded-2xl border border-border-soft bg-surface/60 p-8 sm:p-10">
          <h2 className="heading-serif text-3xl font-semibold">A note on accuracy</h2>
          <p className="mt-4 text-foreground/70 max-w-3xl leading-relaxed">
            Content on this site aims to be respectful and accurate, but heritage sites evolve —
            fees change, restoration closes courtyards, festival dates follow lunar calendars.
            Always verify practical details with{" "}
            <a
              href="https://whc.unesco.org/en/statesparties/np"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent link-underline"
            >
              UNESCO
            </a>{" "}
            and local authorities when planning a visit. Photography is credited on the{" "}
            <Link href="/credits" className="text-accent link-underline">
              credits page
            </Link>
            .
          </p>
          <Link
            href="/sites"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-accent text-background px-6 py-3 text-sm font-semibold hover:brightness-110 transition"
          >
            Start exploring
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
