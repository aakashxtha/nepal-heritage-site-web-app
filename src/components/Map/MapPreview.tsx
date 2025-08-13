"use client";
import dynamic from "next/dynamic";
import type { HeritageSite, Coordinates } from "@/types/heritage";

const LeafletMap = dynamic(() => import("@/components/Map/LeafletMap"), { ssr: false });

type Props = {
  center: Coordinates;
  zoom?: number;
  markers?: HeritageSite[];
  className?: string;
};

export default function MapPreview(props: Props) {
  return <LeafletMap {...props} />;
}


