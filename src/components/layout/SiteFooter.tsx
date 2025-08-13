import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-foreground/10 py-8 mt-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-4 text-sm text-foreground/70">
        <div className="flex items-center justify-between gap-4 flex-col sm:flex-row">
          <p>
            © {new Date().getFullYear()} Nepal Heritage. Educational project.
          </p>
          <nav className="flex items-center gap-4">
            <Link href="/about" className="hover:text-foreground">
              About
            </Link>
            <Link href="/credits" className="hover:text-foreground">
              Credits
            </Link>
            <Link href="/privacy" className="hover:text-foreground">
              Privacy
            </Link>
          </nav>
        </div>
        <p className="text-xs">
          Content aims to be respectful and accurate; please verify details with official
          UNESCO and local sources when planning visits.
        </p>
      </div>
    </footer>
  );
}


