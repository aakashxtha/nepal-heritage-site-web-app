"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { HeritageSite } from "@/types/heritage";

export function SiteCard({ site }: { site: HeritageSite }) {
  return (
    <Link href={`/sites/${site.slug}`}>
      <motion.div
        whileHover={{ 
          y: -4,
          transition: { duration: 0.2, ease: "easeOut" }
        }}
        whileTap={{ scale: 0.98 }}
      >
        <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <motion.div 
            className="relative aspect-[16/9] overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <Image src={site.heroImage} alt={site.name} fill className="object-cover" />
          </motion.div>
          <CardHeader>
            <h3 className="text-lg font-semibold">{site.name}</h3>
            <p className="text-sm text-foreground/70">{site.type} • {site.region}</p>
          </CardHeader>
          <CardContent>
            <p className="text-sm line-clamp-3">{site.description}</p>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  );
}


