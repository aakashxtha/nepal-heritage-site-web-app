import Link from "next/link";
import { Mountain } from "lucide-react";
import { SITES } from "@/data/sites";

const explore = [
  { href: "/", label: "Explore" },
  { href: "/sites", label: "All Sites" },
  { href: "/map", label: "Interactive Map" },
  { href: "/cultural-calendar", label: "Cultural Calendar" },
];

const about = [
  { href: "/about", label: "About the Project" },
  { href: "/credits", label: "Credits" },
  { href: "/privacy", label: "Privacy" },
];

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border-soft bg-surface/60 mt-24 overflow-hidden">
      <div className="aurora opacity-50" aria-hidden />
      <div className="container-page relative py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="grid place-items-center h-9 w-9 rounded-full border border-accent/40 bg-accent/10 text-accent">
                <Mountain className="h-4.5 w-4.5" />
              </span>
              <span className="font-semibold tracking-tight">Nepal Heritage</span>
            </Link>
            <p className="heading-serif text-2xl leading-snug text-foreground/80 max-w-sm">
              Four treasures of humanity, from the roof of the world to the birthplace of the Buddha.
            </p>
            <p className="text-xs text-foreground/50 max-w-sm">
              Content aims to be respectful and accurate; please verify details with official UNESCO
              and local sources when planning visits.
            </p>
          </div>

          <FooterColumn title="The Sites">
            {SITES.map((s) => (
              <FooterLink key={s.slug} href={`/sites/${s.slug}`}>
                {s.name}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Explore">
            {explore.map((l) => (
              <FooterLink key={l.href} href={l.href}>
                {l.label}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Project">
            {about.map((l) => (
              <FooterLink key={l.href} href={l.href}>
                {l.label}
              </FooterLink>
            ))}
            <a
              href="https://whc.unesco.org/en/statesparties/np"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-sm text-foreground/60 hover:text-foreground w-fit"
            >
              UNESCO: Nepal ↗
            </a>
          </FooterColumn>
        </div>

        <div className="mt-12 pt-6 border-t border-border-soft flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-foreground/50">
          <p>© {new Date().getFullYear()} Nepal Heritage. An educational project.</p>
          <p>
            Photography via Unsplash & Wikimedia Commons —{" "}
            <Link href="/credits" className="link-underline hover:text-foreground">
              see credits
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-foreground/40">
        {title}
      </h3>
      {children}
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="link-underline text-sm text-foreground/60 hover:text-foreground w-fit">
      {children}
    </Link>
  );
}
