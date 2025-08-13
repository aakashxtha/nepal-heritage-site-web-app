export type Coordinates = {
  lat: number;
  lng: number;
};

export type GalleryImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type TimelineEvent = {
  year: string;
  title: string;
  description: string;
};

export type VisitorInfo = {
  bestTimeToVisit: string;
  access: string;
  etiquette: string[];
  hours?: string;
  fees?: string;
};

export type MonumentZone = {
  id: string;
  name: string;
  description: string;
  images: GalleryImage[];
  coordinates?: Coordinates;
};

export type HeritageSite = {
  id: string;
  slug: string;
  name: string;
  type: "Cultural" | "Natural" | "Mixed";
  region: string;
  coordinates: Coordinates;
  heroImage: string;
  description: string;
  historicalOverview: string;
  architectureAndFeatures: string;
  culturalSignificance: string;
  conservationStatus: string;
  visitorExperience: string;
  practicalInformation: VisitorInfo;
  timeline: TimelineEvent[];
  gallery: GalleryImage[];
  relatedSiteSlugs?: string[];
  monumentZones?: MonumentZone[]; // For Kathmandu Valley
};


