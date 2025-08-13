"use client";
import { useMemo, useState } from "react";
import { SITES } from "@/data/sites";
import { SiteCard } from "@/components/Site/SiteCard";

export default function SitesListPage() {
  const [q, setQ] = useState("");
  const [type, setType] = useState<string | "All">("All");

  const filtered = useMemo(() => {
    return SITES.filter((s) => {
      const matchType = type === "All" || s.type === type;
      const matchQuery = q.trim().length === 0 ||
        s.name.toLowerCase().includes(q.toLowerCase()) ||
        s.description.toLowerCase().includes(q.toLowerCase()) ||
        (s.slug.includes("lumbini") && q.toLowerCase().includes("buddhist")) ||
        (s.slug.includes("kathmandu") && q.toLowerCase().includes("buddhist"));
      return matchType && matchQuery;
    });
  }, [q, type]);

  return (
    <div className="space-y-6">
      <div className="flex items-end justify-between gap-4 flex-wrap">
        <div>
          <h1 className="heading-serif text-3xl font-bold">All Sites</h1>
          <p className="text-foreground/70">Explore Nepal&#39;s 4 UNESCO World Heritage Sites</p>
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search sites..."
            className="flex-1 sm:w-64 rounded-md border border-foreground/20 bg-transparent px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-foreground/30"
            aria-label="Search sites"
          />
          <select
            value={type}
            onChange={(e) => setType(e.target.value as "All" | "Cultural" | "Natural")}
            className="rounded-md border border-foreground/20 bg-transparent px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-foreground/30"
            aria-label="Filter by type"
          >
            <option value="All">All Types</option>
            <option value="Cultural">Cultural</option>
            <option value="Natural">Natural</option>
          </select>
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((site) => (
          <SiteCard key={site.id} site={site} />
        ))}
      </div>
    </div>
  );
}


