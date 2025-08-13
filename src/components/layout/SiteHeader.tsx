"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mountain, MapPinned, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "./ThemeProvider";

const nav = [
  { href: "/", label: "Explore" },
  { href: "/map", label: "Map" },
  { href: "/sites", label: "Sites" },
  { href: "/cultural-calendar", label: "Calendar" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const { theme, toggle } = useTheme();
  return (
    <header className="sticky top-0 z-[1000] w-full border-b border-foreground/10 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Mountain className="h-6 w-6" />
          <span className="font-semibold tracking-tight">Nepal Heritage</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-foreground",
                pathname === item.href ? "text-foreground" : "text-foreground/60"
              )}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            className="inline-flex items-center justify-center rounded-md border border-foreground/20 px-2 py-2 text-sm hover:bg-foreground/5"
            aria-label="Toggle theme"
            title="Toggle theme"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <Link href="/map" className="inline-flex items-center gap-2 rounded-md border border-foreground/20 px-3 py-2 text-sm font-medium hover:bg-foreground/5">
            <MapPinned className="h-4 w-4" />
            Open Map
          </Link>
        </div>
      </div>
    </header>
  );
}


