"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight, CalendarDays, ChevronDown, Landmark, MapPinned, Trees } from "lucide-react";
import { SITES } from "@/data/sites";
import { CULTURAL_EVENTS } from "@/data/cultural-calendar";
import NepalMap from "@/components/Map/NepalMap";
import { Reveal, CountUp, SplitWords, EASE_OUT } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1623492701902-47dc207df5dc?q=80&w=2400&auto=format&fit=crop";
const CTA_IMAGE =
  "https://images.unsplash.com/photo-1676471049029-f93852da351d?q=80&w=2400&auto=format&fit=crop";

export default function Home() {
  return (
    <div>
      <Hero />
      <StatsBand />
      <FourTreasures />
      <MapBand />
      <FestivalsBand />
      <CtaBand />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "22%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "60%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[620px] overflow-hidden grain">
      <motion.div className="absolute inset-0" style={{ y: imageY }}>
        <motion.div
          className="absolute inset-[-4%]"
          initial={{ scale: reduce ? 1 : 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 9, ease: "easeOut" }}
        >
          <Image
            src={HERO_IMAGE}
            alt="Boudhanath Stupa rising above Kathmandu at dusk"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </motion.div>

      {/* Cinematic overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/20 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-transparent" />

      <motion.div
        className="relative h-full container-page flex flex-col justify-end pb-24 sm:pb-28"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <motion.p
          className="eyebrow mb-5"
          initial={{ opacity: 0, y: reduce ? 0 : 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: EASE_OUT }}
        >
          UNESCO World Heritage · Nepal
        </motion.p>

        <h1 className="heading-serif font-semibold text-[clamp(2.75rem,8vw,6.5rem)] leading-[1.02] max-w-5xl text-balance">
          <SplitWords text="Where gods, mountains" delay={0.35} />
          <br />
          <SplitWords text="and memory meet." className="text-gradient-gold italic" delay={0.75} />
        </h1>

        <motion.p
          className="mt-6 max-w-xl text-base sm:text-lg text-foreground/75"
          initial={{ opacity: 0, y: reduce ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15, duration: 0.9, ease: EASE_OUT }}
        >
          Journey through Nepal&apos;s four World Heritage treasures — the living temples of the
          Kathmandu Valley, the summit of Everest, the jungles of Chitwan, and the birthplace of
          the Buddha.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap items-center gap-3"
          initial={{ opacity: 0, y: reduce ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.35, duration: 0.9, ease: EASE_OUT }}
        >
          <Link
            href="/sites"
            className="group inline-flex items-center gap-2 rounded-full bg-accent text-background px-6 py-3 text-sm font-semibold hover:brightness-110 transition"
          >
            Begin the journey
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/map"
            className="inline-flex items-center gap-2 rounded-full border border-foreground/25 bg-background/30 backdrop-blur px-6 py-3 text-sm font-semibold hover:border-accent/60 hover:text-accent transition"
          >
            <MapPinned className="h-4 w-4" />
            Open the map
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-foreground/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        aria-hidden
      >
        <span className="text-[0.6rem] uppercase tracking-[0.3em]">Scroll</span>
        <motion.span
          animate={reduce ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.span>
      </motion.div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Stats                                                               */
/* ------------------------------------------------------------------ */

const STATS = [
  { value: 4, suffix: "", label: "World Heritage Sites" },
  { value: 7, suffix: "", label: "Monument zones in the Valley" },
  { value: 1979, suffix: "", label: "Year of first inscription" },
  { value: 8849, suffix: " m", label: "Height of Sagarmatha (Everest)" },
];

function StatsBand() {
  return (
    <section className="border-y border-border-soft bg-surface/50">
      <div className="container-page grid grid-cols-2 lg:grid-cols-4">
        {STATS.map((stat, i) => (
          <Reveal
            key={stat.label}
            delay={i * 0.08}
            className={cn(
              "py-10 px-2 sm:px-6 text-center",
              i !== 0 && "border-l border-border-soft"
            )}
          >
            <div className="heading-serif text-4xl sm:text-5xl text-accent tabular-nums">
              <CountUp value={stat.value} suffix={stat.suffix} />
            </div>
            <p className="mt-2 text-xs sm:text-sm text-foreground/55">{stat.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* The four treasures — editorial rows                                 */
/* ------------------------------------------------------------------ */

function FourTreasures() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="aurora" aria-hidden />
      <div className="container-page relative">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">The Collection</p>
          <h2 className="heading-serif mt-4 text-4xl sm:text-5xl font-semibold text-balance">
            Four treasures of humanity
          </h2>
          <p className="mt-4 text-foreground/65">
            Two cultural sanctuaries and two natural wonders — each inscribed by UNESCO for
            outstanding universal value, each unlike anywhere else on Earth.
          </p>
        </Reveal>

        <div className="mt-16 sm:mt-20 space-y-20 sm:space-y-28">
          {SITES.map((site, i) => (
            <TreasureRow key={site.id} site={site} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TreasureRow({
  site,
  index,
}: {
  site: (typeof SITES)[number];
  index: number;
}) {
  const flipped = index % 2 === 1;
  return (
    <div className="grid items-center gap-8 lg:gap-16 lg:grid-cols-2">
      <Reveal className={cn(flipped && "lg:order-2")}>
        <Link
          href={`/sites/${site.slug}`}
          className="group relative block overflow-hidden rounded-2xl border border-border-soft"
        >
          <div className="relative aspect-[16/11] overflow-hidden">
            <Image
              src={site.heroImage}
              alt={site.name}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-60" />
          </div>
          <span className="absolute top-4 left-4 rounded-full bg-background/55 backdrop-blur px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-foreground">
            {site.type === "Natural" ? (
              <Trees className="inline h-3 w-3 mr-1.5 -mt-px text-accent" />
            ) : (
              <Landmark className="inline h-3 w-3 mr-1.5 -mt-px text-accent" />
            )}
            {site.type}
          </span>
          <span className="absolute bottom-4 right-4 grid place-items-center h-11 w-11 rounded-full bg-accent text-background opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
            <ArrowUpRight className="h-5 w-5" />
          </span>
        </Link>
      </Reveal>

      <div className={cn(flipped && "lg:order-1")}>
        <Reveal delay={0.1}>
          <div className="heading-serif text-7xl sm:text-8xl leading-none text-foreground/10 select-none">
            {String(index + 1).padStart(2, "0")}
          </div>
          <div className="mt-2 flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-foreground/50">
            <span>{site.region}</span>
            {site.unesco && (
              <>
                <span className="h-px w-6 bg-foreground/25" aria-hidden />
                <span>Inscribed {site.unesco.inscriptionYear}</span>
              </>
            )}
          </div>
          <h3 className="heading-serif mt-3 text-3xl sm:text-4xl font-semibold">
            <Link href={`/sites/${site.slug}`} className="hover:text-accent transition-colors">
              {site.name}
            </Link>
          </h3>
          <p className="mt-4 text-foreground/70 max-w-lg">{site.description}</p>
          <Link
            href={`/sites/${site.slug}`}
            className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent"
          >
            Discover {site.name.split(" ")[0]}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
          </Link>
        </Reveal>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Map band                                                            */
/* ------------------------------------------------------------------ */

function MapBand() {
  return (
    <section className="border-y border-border-soft bg-surface/50 py-20 sm:py-24">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal className="max-w-xl">
            <p className="eyebrow">Atlas</p>
            <h2 className="heading-serif mt-4 text-4xl sm:text-5xl font-semibold">
              From the Terai to the roof of the world
            </h2>
            <p className="mt-4 text-foreground/65">
              The four sites span the full sweep of Nepal — lowland jungle at 150 metres to the
              highest point on Earth.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <Link
              href="/map"
              className="group inline-flex items-center gap-2 rounded-full border border-foreground/25 px-6 py-3 text-sm font-semibold hover:border-accent/60 hover:text-accent transition"
            >
              Explore the full map
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-10">
          <NepalMap markers={SITES} className="shadow-[0_24px_80px_rgba(0,0,0,0.25)]" />
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Festivals teaser                                                    */
/* ------------------------------------------------------------------ */

function FestivalsBand() {
  const events = CULTURAL_EVENTS.slice(0, 3);
  return (
    <section className="py-24 sm:py-32">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal className="max-w-xl">
            <p className="eyebrow">Living Culture</p>
            <h2 className="heading-serif mt-4 text-4xl sm:text-5xl font-semibold">
              A calendar that never sleeps
            </h2>
            <p className="mt-4 text-foreground/65">
              Heritage in Nepal is not behind glass — it dances through the streets. Time your
              visit with the festivals that bring these sites to life.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <Link
              href="/cultural-calendar"
              className="group inline-flex items-center gap-2 rounded-full border border-foreground/25 px-6 py-3 text-sm font-semibold hover:border-accent/60 hover:text-accent transition"
            >
              <CalendarDays className="h-4 w-4" />
              Browse the calendar
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {events.map((event, i) => (
            <Reveal key={event.id} delay={i * 0.1}>
              <Link
                href="/cultural-calendar"
                className="group block h-full rounded-2xl border border-border-soft bg-surface/60 p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-accent">
                    {event.type}
                  </span>
                  <span className="text-xs text-foreground/50">
                    {event.dates.year2025 || event.dates.dateRange}
                  </span>
                </div>
                <h3 className="heading-serif mt-5 text-2xl font-semibold group-hover:text-accent transition-colors">
                  {event.name}
                </h3>
                <p className="mt-3 text-sm text-foreground/65 line-clamp-3">{event.description}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-accent">
                  Learn more
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Closing CTA                                                         */
/* ------------------------------------------------------------------ */

function CtaBand() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [reduce ? "0%" : "-12%", reduce ? "0%" : "12%"]);

  return (
    <section ref={ref} className="relative overflow-hidden grain">
      <motion.div className="absolute inset-[-15%]" style={{ y }}>
        <Image
          src={CTA_IMAGE}
          alt="Himalayan peaks of Sagarmatha National Park"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-background/65" />
      <div className="relative container-page py-28 sm:py-40 text-center">
        <Reveal>
          <p className="eyebrow justify-center mx-auto">Your Turn</p>
          <h2 className="heading-serif mt-5 text-4xl sm:text-6xl font-semibold text-balance max-w-3xl mx-auto">
            Some places change the people who visit them.
          </h2>
          <p className="mt-5 text-foreground/70 max-w-xl mx-auto">
            Start with a map, a festival, or a single square in Kathmandu — and let Nepal do the
            rest.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              href="/sites"
              className="group inline-flex items-center gap-2 rounded-full bg-accent text-background px-7 py-3.5 text-sm font-semibold hover:brightness-110 transition"
            >
              Explore the sites
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/cultural-calendar"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/30 bg-background/30 backdrop-blur px-7 py-3.5 text-sm font-semibold hover:border-accent/60 hover:text-accent transition"
            >
              Plan around a festival
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
