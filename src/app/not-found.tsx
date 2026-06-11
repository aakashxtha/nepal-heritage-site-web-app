import Link from "next/link";
import { ArrowLeft, Mountain } from "lucide-react";

export default function NotFound() {
  return (
    <div className="container-page pt-28 pb-16 min-h-[70vh] grid place-items-center">
      <div className="text-center max-w-md">
        <span className="mx-auto grid place-items-center h-14 w-14 rounded-full border border-accent/30 bg-accent/10 text-accent">
          <Mountain className="h-6 w-6" />
        </span>
        <p className="eyebrow justify-center mt-8">Off the trail</p>
        <h1 className="heading-serif mt-4 text-5xl font-semibold">404</h1>
        <p className="mt-4 text-foreground/65">
          This path doesn&apos;t lead anywhere — but the heritage sites are still waiting.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-full bg-accent text-background px-6 py-3 text-sm font-semibold hover:brightness-110 transition"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back home
          </Link>
          <Link
            href="/sites"
            className="inline-flex items-center rounded-full border border-foreground/25 px-6 py-3 text-sm font-semibold hover:border-accent/60 hover:text-accent transition"
          >
            Browse sites
          </Link>
        </div>
      </div>
    </div>
  );
}
