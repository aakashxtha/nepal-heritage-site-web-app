import type { HeritageSite } from "@/types/heritage";

export const SITES: HeritageSite[] = [
  {
    id: "kathmandu-valley",
    slug: "kathmandu-valley",
    name: "Kathmandu Valley",
    type: "Cultural",
    region: "Bagmati Province",
    coordinates: { lat: 27.7172, lng: 85.3240 },
    heroImage: "https://unsplash.com/photos/n0RIwkDfJ1g/download?force=true&w=1600",
    description:
      "A living cultural museum with seven monument zones reflecting centuries of Newar art, architecture, and religious traditions.",
    historicalOverview:
      "The Kathmandu Valley has been a center of civilization in the Himalayan region for millennia, flourishing through the Licchavi and Malla periods with remarkable temple architecture and urban planning.",
    architectureAndFeatures:
      "Distinctive pagoda and shikhara-style temples, intricately carved wooden windows, royal palaces, Buddhist stupas, and sacred Hindu complexes define the valley's built heritage.",
    culturalSignificance:
      "The valley is a confluence of Hinduism and Buddhism, home to rituals, festivals like Indra Jatra, and craftsmanship that continues to this day.",
    conservationStatus:
      "Ongoing restoration following the 2015 earthquakes has emphasized resilient techniques and community-led conservation.",
    visitorExperience:
      "Explore vibrant squares, climb sacred stupas, and observe daily worship and artisan workshops across the seven zones.",
    practicalInformation: {
      bestTimeToVisit: "Oct–Dec and Mar–May",
      access: "International access via Tribhuvan International Airport; local taxis and rideshare within the valley.",
      etiquette: [
        "Remove shoes before entering temples and monastery courtyards",
        "Ask permission before photographing people or rituals",
        "Walk clockwise around stupas",
      ],
      hours: "Most squares open 24/7; museums typically 10:00–17:00",
      fees: "Heritage entry fees vary by square; carry local currency",
    },
    timeline: [
      { year: "5th c.", title: "Licchavi Era", description: "Urban development and stone inscriptions" },
      { year: "12th–18th c.", title: "Malla Period", description: "Palaces and temple building flourish" },
      { year: "1979", title: "UNESCO Inscription", description: "Kathmandu Valley added to World Heritage List" },
      { year: "2015", title: "Earthquakes", description: "Significant damage and global restoration efforts" },
    ],
    unesco: {
      inscriptionYear: 1979,
      extensionYears: [2006],
      criteria: ["(iii)", "(iv)", "(vi)"],
      officialPage: "https://whc.unesco.org/en/list/121/",
    },
    officialLinks: [
      { title: "UNESCO: Kathmandu Valley", url: "https://whc.unesco.org/en/list/121/" },
    ],
    sources: [
      { title: "Kathmandu Valley preservation overview", url: "https://whc.unesco.org/en/list/121/" },
    ],
    itineraries: [
      {
        title: "Classic 2-day valley highlights",
        days: 2,
        highlights: [
          "Day 1: Kathmandu Durbar Square, Swayambhunath",
          "Day 2: Patan Durbar Square, Boudhanath, Pashupatinath"
        ],
        notes: "Buy combined heritage tickets where available; start early to avoid crowds",
      },
    ],
    faqs: [
      { question: "Are the sites walkable?", answer: "Each monument zone is walkable, but travel between zones needs transport (taxi/ride-share)." },
      { question: "Dress code?", answer: "Modest attire is appreciated at religious sites; remove shoes at temples and courtyards." }
    ],
    gallery: [
      { src: "https://unsplash.com/photos/-DNpsIGSVKQ/download?force=true&w=1600", alt: "Kathmandu Durbar Square at night", caption: "Durbar Square" },
      { src: "https://unsplash.com/photos/Dk8jPwMPtAk/download?force=true&w=1600", alt: "Swayambhunath Stupa", caption: "Swayambhunath" },
      { src: "https://unsplash.com/photos/N6MiaknsNX8/download?force=true&w=1600", alt: "Boudhanath Stupa", caption: "Boudhanath" },
    ],
    monumentZones: [
      {
        id: "ktm-durbar",
        name: "Kathmandu Durbar Square",
        description: "Historic royal complex with courtyards, temples, and the Kumari House.",
        images: [{ src: "https://unsplash.com/photos/FTxTyNog7BY/download?force=true&w=1600", alt: "Kathmandu Durbar Square" }],
        coordinates: { lat: 27.7045, lng: 85.3076 },
      },
      {
        id: "patan-durbar",
        name: "Patan Durbar Square",
        description: "Renowned for exquisite Newar craftsmanship and the Krishna Mandir.",
        images: [{ src: "https://unsplash.com/photos/nHiAQu38jKg/download?force=true&w=1600", alt: "Patan Durbar Square" }],
        coordinates: { lat: 27.6727, lng: 85.3255 },
      },
      {
        id: "bhaktapur-durbar",
        name: "Bhaktapur Durbar Square",
        description: "Well-preserved medieval cityscape with temples and pottery square.",
        images: [{ src: "https://unsplash.com/photos/ErntP2j0WKk/download?force=true&w=1600", alt: "Bhaktapur Durbar Square" }],
        coordinates: { lat: 27.6723, lng: 85.4280 },
      },
      { id: "swayambhu", name: "Swayambhunath", description: "Ancient stupa atop a hill.", images: [{ src: "https://unsplash.com/photos/fdO0Rm1SUDE/download?force=true&w=1600", alt: "Swayambhunath" }], coordinates: { lat: 27.7149, lng: 85.2901 } },
      { id: "boudha", name: "Boudhanath", description: "Vast mandala stupa and Tibetan quarter.", images: [{ src: "https://unsplash.com/photos/KKm1ua7MSf0/download?force=true&w=1600", alt: "Boudhanath" }], coordinates: { lat: 27.7215, lng: 85.3616 } },
      { id: "pashupati", name: "Pashupatinath", description: "Sacred Hindu temple complex on the Bagmati.", images: [{ src: "https://unsplash.com/photos/R2sI4cwPXqQ/download?force=true&w=1600", alt: "Pashupatinath" }], coordinates: { lat: 27.7104, lng: 85.3486 } },
      { id: "changu", name: "Changu Narayan", description: "One of the oldest temples in the valley.", images: [{ src: "https://commons.wikimedia.org/wiki/Special:FilePath/Changunarayan%20Temple%20of%20Nepal.jpg", alt: "Changu Narayan" }], coordinates: { lat: 27.7148, lng: 85.4271 } },
    ],
  },
  {
    id: "sagarmatha-national-park",
    slug: "sagarmatha-national-park",
    name: "Sagarmatha National Park",
    type: "Natural",
    region: "Province No. 1",
    coordinates: { lat: 27.9320, lng: 86.7250 },
    heroImage: "https://unsplash.com/photos/eyn0LjpNWV4/download?force=true&w=1600",
    description:
      "Home to Mount Everest and Sherpa culture, a dramatic high-altitude landscape of peaks, glaciers, and valleys.",
    historicalOverview:
      "Established in 1976 and inscribed by UNESCO in 1979, the park protects the Everest region's unique biodiversity and cultural heritage.",
    architectureAndFeatures:
      "High Himalayan geology, glaciers like Khumbu, alpine meadows, and monasteries such as Tengboche set within towering peaks.",
    culturalSignificance:
      "Deeply tied to Sherpa traditions and Tibetan Buddhism; mountains are revered as sacred.",
    conservationStatus:
      "Challenges include climate change impacts on glaciers and increased trekking pressure; community-based conservation is central.",
    visitorExperience:
      "Trekking routes to Everest Base Camp, Gokyo lakes, and panoramic viewpoints like Kala Patthar.",
    practicalInformation: {
      bestTimeToVisit: "Mar–May and Oct–Nov",
      access: "Flights to Lukla and multi-day trekking; permits required (SNP, Khumbu Pasang Lhamu).",
      etiquette: ["Respect local monasteries and prayer flags", "Pack out all waste", "Acclimatize properly"],
      hours: "Park open year-round; trekking seasons vary",
      fees: "Park entry and local permits apply",
    },
    timeline: [
      { year: "1976", title: "Park Established", description: "Sagarmatha National Park created" },
      { year: "1979", title: "UNESCO Inscription", description: "World Heritage listing" },
    ],
    unesco: {
      inscriptionYear: 1979,
      criteria: ["(vii)", "(x)"],
      officialPage: "https://whc.unesco.org/en/list/120/",
    },
    officialLinks: [
      { title: "UNESCO: Sagarmatha National Park", url: "https://whc.unesco.org/en/list/120/" },
    ],
    sources: [
      { title: "Sagarmatha biodiversity summary", url: "https://whc.unesco.org/en/list/120/" },
    ],
    itineraries: [
      {
        title: "Everest region intro (5–7 days)",
        days: 7,
        highlights: [
          "Lukla–Phakding–Namche acclimatization",
          "Day hikes to Khumjung/Kunde or Everest View Hotel",
          "Visit Tengboche Monastery"
        ],
        notes: "Allow extra acclimatization days; check permits (SNP + local).",
      },
    ],
    faqs: [
      { question: "Best season?", answer: "Spring (Mar–May) and autumn (Sep–Nov) for weather and views; winter is cold but clear." },
      { question: "Permits?", answer: "Sagarmatha National Park entry and Khumbu Pasang Lhamu local permits are required." }
    ],
    gallery: [
      { src: "https://unsplash.com/photos/infssQ2tjeM/download?force=true&w=1600", alt: "Mount Everest at sunset" },
      { src: "https://unsplash.com/photos/wRvqoP2QWVg/download?force=true&w=1600", alt: "Tengboche Monastery", caption: "Tengboche Monastery" },
    ],
  },
  {
    id: "chitwan-national-park",
    slug: "chitwan-national-park",
    name: "Chitwan National Park",
    type: "Natural",
    region: "Bagmati Province",
    coordinates: { lat: 27.5345, lng: 84.4610 },
    heroImage: "https://unsplash.com/photos/XWQK-9p53ts/download?force=true&w=1600",
    description:
      "Lowland Terai jungle famed for one-horned rhinoceros, Bengal tigers, gharials, and vibrant birdlife.",
    historicalOverview:
      "Nepal's first national park (1973), UNESCO-listed in 1984; pioneering anti-poaching and community buffer zones.",
    architectureAndFeatures:
      "Riverine forests, grasslands, wetlands along the Rapti and Narayani rivers with Tharu cultural landscapes.",
    culturalSignificance:
      "Tharu traditions and coexistence with wildlife form a unique cultural-ecological mosaic.",
    conservationStatus:
      "Conservation successes with rhino recovery; ongoing challenges include human-wildlife conflict and habitat connectivity.",
    visitorExperience:
      "Safari by jeep or canoe, birdwatching, and Tharu cultural programs.",
    practicalInformation: {
      bestTimeToVisit: "Oct–Mar",
      access: "Road access from Kathmandu/Pokhara; Bharatpur airport nearby.",
      etiquette: ["Keep safe distance from wildlife", "Avoid loud noises", "Follow guide instructions"],
      hours: "Park hours vary by season",
      fees: "Park entry fees apply",
    },
    timeline: [
      { year: "1973", title: "Park Established", description: "Nepal's first national park" },
      { year: "1984", title: "UNESCO Inscription", description: "World Heritage listing" },
    ],
    unesco: {
      inscriptionYear: 1984,
      criteria: ["(vii)", "(ix)", "(x)"],
      officialPage: "https://whc.unesco.org/en/list/284/",
    },
    officialLinks: [
      { title: "UNESCO: Chitwan National Park", url: "https://whc.unesco.org/en/list/284/" },
    ],
    sources: [
      { title: "Chitwan conservation context", url: "https://whc.unesco.org/en/list/284/" },
    ],
    itineraries: [
      {
        title: "Wildlife weekend (2–3 days)",
        days: 3,
        highlights: [
          "Jeep safari and river canoe",
          "Birdwatching morning walk",
          "Tharu cultural program"
        ],
        notes: "Listen to guides and follow park rules for safety and wildlife welfare.",
      },
    ],
    faqs: [
      { question: "Wildlife safety?", answer: "Always keep distance, avoid sudden movements, and follow your guide’s instructions." },
      { question: "Malaria risk?", answer: "Risk is low but bring insect repellent; consult a travel clinic if concerned." }
    ],
    gallery: [
      { src: "https://unsplash.com/photos/jApVcSuBo6E/download?force=true&w=1600", alt: "One-horned rhinoceros" },
      { src: "https://unsplash.com/photos/X4s13xUyg1k/download?force=true&w=1600", alt: "Canoe safari" },
    ],
  },
  {
    id: "lumbini",
    slug: "lumbini",
    name: "Lumbini",
    type: "Cultural",
    region: "Lumbini Province",
    coordinates: { lat: 27.4833, lng: 83.2833 },
    heroImage: "https://unsplash.com/photos/aNU8MnzWhKo/download?force=true&w=1600",
    description:
      "Birthplace of Siddhartha Gautama (Buddha), a sacred pilgrimage center with monastic zones and archaeological remains.",
    historicalOverview:
      "Identified by the Ashoka Pillar inscription (3rd century BCE); developed as a peace park with international monasteries.",
    architectureAndFeatures:
      "The Mayadevi Temple, Sacred Garden, Ashoka Pillar, and diverse monastic architectures across the Lumbini Master Plan.",
    culturalSignificance:
      "A global symbol of peace and Buddhism; continuous pilgrimage traditions and Vesak celebrations.",
    conservationStatus:
      "Balancing archaeological conservation with ongoing monastic development and visitor management.",
    visitorExperience:
      "Quiet reflection at the Sacred Garden, monastic zone cycling, and museum visits.",
    practicalInformation: {
      bestTimeToVisit: "Oct–Feb",
      access: "Gautam Buddha International Airport (Bhairahawa) and road links.",
      etiquette: ["Dress modestly", "Maintain silence in sacred areas", "No flash photography inside temples"],
      hours: "Sites generally open sunrise to sunset",
      fees: "Entry fees for museums and certain areas",
    },
    timeline: [
      { year: "3rd c. BCE", title: "Ashoka Pillar", description: "Inscription confirming Buddha's birthplace" },
      { year: "1997", title: "UNESCO Inscription", description: "World Heritage listing" },
    ],
    gallery: [
      { src: "https://unsplash.com/photos/EY7jJ40zWug/download?force=true&w=1600", alt: "Mayadevi Temple" },
      { src: "https://unsplash.com/photos/7uSwdSWjSVU/download?force=true&w=1600", alt: "Ashoka Pillar" },
    ],
    unesco: {
      inscriptionYear: 1997,
      criteria: ["(iii)", "(vi)"],
      officialPage: "https://whc.unesco.org/en/list/666/",
    },
    officialLinks: [
      { title: "UNESCO: Lumbini, the Birthplace of the Lord Buddha", url: "https://whc.unesco.org/en/list/666/" },
    ],
    sources: [
      { title: "Lumbini Development Trust", url: "https://www.lumbinidevtrust.gov.np/" },
    ],
    itineraries: [
      {
        title: "Sacred Lumbini day trip",
        days: 1,
        highlights: [
          "Mayadevi Temple & Sacred Garden",
          "Ashoka Pillar inscription",
          "Cycling through East/West Monastic Zones"
        ],
      },
    ],
    faqs: [
      { question: "Photography rules?", answer: "No flash and sometimes no photography inside temples; follow posted guidance." },
      { question: "Guides?", answer: "Local guides are available at the entrance and can enrich the historical context." }
    ],
  },
];

export function getSiteBySlug(slug: string) {
  return SITES.find((s) => s.slug === slug);
}


