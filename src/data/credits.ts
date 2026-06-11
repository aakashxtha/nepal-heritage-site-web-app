export interface ImageCredit {
  id: string;
  url: string;
  photographer: string;
  photographerUrl?: string;
  source: "unsplash" | "wikimedia" | "other";
  license: string;
  licenseUrl?: string;
  title?: string;
  description?: string;
}

export const IMAGE_CREDITS: ImageCredit[] = [
  // Kathmandu Valley
  {
    id: "kathmandu-hero",
    url: "https://images.unsplash.com/photo-1623492701902-47dc207df5dc?q=80&w=1200&auto=format&fit=crop",
    photographer: "Raimond Klavins",
    photographerUrl: "https://unsplash.com/@raimondklavins",
    source: "unsplash",
    license: "Unsplash License",
    licenseUrl: "https://unsplash.com/license",
    title: "Kathmandu Valley Overview",
    description: "A view of a city with mountains in the background"
  },
  {
    id: "kathmandu-durbar-night",
    url: "https://images.unsplash.com/photo-1731490912730-6ec3b0a22533?q=80&w=1200&auto=format&fit=crop",
    photographer: "Dipesh Manandhar",
    photographerUrl: "https://unsplash.com/@dipeshmdr",
    source: "unsplash",
    license: "Unsplash License",
    licenseUrl: "https://unsplash.com/license",
    title: "Kathmandu Durbar Square at Night",
    description: "Historic architecture illuminated at night"
  },
  {
    id: "swayambhunath-stupa",
    url: "https://images.unsplash.com/photo-1672338127087-d46c9ecd48f9?q=80&w=1200&auto=format&fit=crop",
    photographer: "Danylo Istominov 🇺🇦",
    photographerUrl: "https://unsplash.com/@istominov",
    source: "unsplash",
    license: "Unsplash License",
    licenseUrl: "https://unsplash.com/license",
    title: "Swayambhunath Stupa",
    description: "The iconic monkey temple stupa"
  },
  {
    id: "boudhanath-stupa",
    url: "https://images.unsplash.com/photo-1617469170169-55626c028519?q=80&w=1200&auto=format&fit=crop",
    photographer: "Raimond Klavins",
    photographerUrl: "https://unsplash.com/@raimondklavins",
    source: "unsplash",
    license: "Unsplash License",
    licenseUrl: "https://unsplash.com/license",
    title: "Boudhanath Stupa",
    description: "One of the largest Buddhist stupas in the world"
  },
  {
    id: "kathmandu-durbar-square",
    url: "https://images.unsplash.com/photo-1706188370039-e0cf9bd6ea16?q=80&w=1200&auto=format&fit=crop",
    photographer: "Martijn Vonk",
    photographerUrl: "https://unsplash.com/@vonkm737",
    source: "unsplash",
    license: "Unsplash License",
    licenseUrl: "https://unsplash.com/license",
    title: "Kathmandu Durbar Square",
    description: "Historic royal complex architecture"
  },
  {
    id: "patan-durbar-square",
    url: "https://images.unsplash.com/photo-1699204121879-f7d805d3bc41?q=80&w=1200&auto=format&fit=crop",
    photographer: "Jochen van Wylick",
    photographerUrl: "https://unsplash.com/@jochenvw",
    source: "unsplash",
    license: "Unsplash License",
    licenseUrl: "https://unsplash.com/license",
    title: "Patan Durbar Square",
    description: "Newar architecture and craftsmanship"
  },
  {
    id: "bhaktapur-durbar-square",
    url: "https://images.unsplash.com/photo-1634150527341-56267a30704d?q=80&w=1200&auto=format&fit=crop",
    photographer: "Sarad Shrestha",
    photographerUrl: "https://unsplash.com/@saradhaku",
    source: "unsplash",
    license: "Unsplash License",
    licenseUrl: "https://unsplash.com/license",
    title: "Bhaktapur Durbar Square",
    description: "Medieval cityscape and pottery traditions"
  },
  {
    id: "swayambhunath-temple",
    url: "https://images.unsplash.com/photo-1560747643-308411529b15?q=80&w=1200&auto=format&fit=crop",
    photographer: "Meghraj Neupane",
    photographerUrl: "https://unsplash.com/@meghraz",
    source: "unsplash",
    license: "Unsplash License",
    licenseUrl: "https://unsplash.com/license",
    title: "Swayambhunath Temple",
    description: "Ancient hilltop temple complex"
  },
  {
    id: "boudhanath-detail",
    url: "https://images.unsplash.com/photo-1611516491426-03025e6043c8?q=80&w=1200&auto=format&fit=crop",
    photographer: "Raimond Klavins",
    photographerUrl: "https://unsplash.com/@raimondklavins",
    source: "unsplash",
    license: "Unsplash License",
    licenseUrl: "https://unsplash.com/license",
    title: "Boudhanath Stupa Detail",
    description: "Tibetan Buddhist architecture details"
  },
  {
    id: "pashupatinath-temple",
    url: "https://images.unsplash.com/photo-1648298470994-7065f521375c?q=80&w=1200&auto=format&fit=crop",
    photographer: "Ajeet Manandhar",
    photographerUrl: "https://unsplash.com/@ajeets",
    source: "unsplash",
    license: "Unsplash License",
    licenseUrl: "https://unsplash.com/license",
    title: "Pashupatinath Temple",
    description: "Sacred Hindu temple complex on the Bagmati River"
  },
  {
    id: "changu-narayan",
    url: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Changunarayan_Temple_of_Nepal.jpg",
    photographer: "Krish Dulal",
    photographerUrl: "https://commons.wikimedia.org/wiki/User:Krish_Dulal",
    source: "wikimedia",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    title: "Changu Narayan Temple",
    description: "One of the oldest Hindu temples in Nepal"
  },

  // Sagarmatha National Park
  {
    id: "sagarmatha-hero",
    url: "https://images.unsplash.com/photo-1676471049029-f93852da351d?q=80&w=1200&auto=format&fit=crop",
    photographer: "Weichao Deng",
    photographerUrl: "https://unsplash.com/@juniperphoton",
    source: "unsplash",
    license: "Unsplash License",
    licenseUrl: "https://unsplash.com/license",
    title: "Mount Everest",
    description: "Snow-covered mountain with clouds in the sky"
  },
  {
    id: "everest-sunset",
    url: "https://images.unsplash.com/photo-1637846959991-18e54d6e2035?q=80&w=1200&auto=format&fit=crop",
    photographer: "Eugene Ga",
    photographerUrl: "https://unsplash.com/@eugene_ga",
    source: "unsplash",
    license: "Unsplash License",
    licenseUrl: "https://unsplash.com/license",
    title: "Mount Everest at Sunset",
    description: "Himalayan peaks in golden hour light"
  },
  {
    id: "tengboche-monastery",
    url: "https://images.unsplash.com/photo-1485872325464-50f17b82075a?q=80&w=1200&auto=format&fit=crop",
    photographer: "Martin Jernberg",
    photographerUrl: "https://unsplash.com/@martinjernberg",
    source: "unsplash",
    license: "Unsplash License",
    licenseUrl: "https://unsplash.com/license",
    title: "Tengboche Monastery",
    description: "Photography of house in front of mountain - on our way to Everest Base Camp"
  },

  // Chitwan National Park
  {
    id: "chitwan-hero",
    url: "https://images.unsplash.com/photo-1647679147029-508c62f35c33?q=80&w=1200&auto=format&fit=crop",
    photographer: "Shreyashka Maharjan",
    photographerUrl: "https://unsplash.com/@shreyashka",
    source: "unsplash",
    license: "Unsplash License",
    licenseUrl: "https://unsplash.com/license",
    title: "One-horned Rhinoceros",
    description: "Rhino walking through forest in Chitwan"
  },
  {
    id: "chitwan-rhino",
    url: "https://images.unsplash.com/photo-1713429237605-8e09fed4db90?q=80&w=1200&auto=format&fit=crop",
    photographer: "Denise Elbs",
    photographerUrl: "https://unsplash.com/@deniseelbs",
    source: "unsplash",
    license: "Unsplash License",
    licenseUrl: "https://unsplash.com/license",
    title: "Greater One-horned Rhinoceros",
    description: "Wildlife conservation success story"
  },
  {
    id: "chitwan-canoe",
    url: "https://images.unsplash.com/photo-1713429236994-d369e1aaae9d?q=80&w=1200&auto=format&fit=crop",
    photographer: "Denise Elbs",
    photographerUrl: "https://unsplash.com/@deniseelbs",
    source: "unsplash",
    license: "Unsplash License",
    licenseUrl: "https://unsplash.com/license",
    title: "Canoe Safari",
    description: "Traditional canoe safari experience in Chitwan"
  },

  // Lumbini
  {
    id: "lumbini-hero",
    url: "https://images.unsplash.com/photo-1616166831462-48a3e9089c20?q=80&w=1200&auto=format&fit=crop",
    photographer: "ashok acharya",
    photographerUrl: "https://unsplash.com/@ashokjkshetri",
    source: "unsplash",
    license: "Unsplash License",
    licenseUrl: "https://unsplash.com/license",
    title: "Lumbini Temple",
    description: "White concrete building under blue sky during daytime"
  },
  {
    id: "mayadevi-temple",
    url: "https://images.unsplash.com/photo-1611892370612-0ac8e4a4507a?q=80&w=1200&auto=format&fit=crop",
    photographer: "ashok acharya",
    photographerUrl: "https://unsplash.com/@ashokjkshetri",
    source: "unsplash",
    license: "Unsplash License",
    licenseUrl: "https://unsplash.com/license",
    title: "Mayadevi Temple",
    description: "Sacred birthplace of Buddha"
  },
  {
    id: "ashoka-pillar",
    url: "https://images.unsplash.com/photo-1617587684591-082bc7f60f54?q=80&w=1200&auto=format&fit=crop",
    photographer: "ashok acharya",
    photographerUrl: "https://unsplash.com/@ashokjkshetri",
    source: "unsplash",
    license: "Unsplash License",
    licenseUrl: "https://unsplash.com/license",
    title: "Ashoka Pillar",
    description: "Ancient stone inscription marking Buddha's birthplace"
  }
];

// Helper function to find credit by URL
export function getCreditByUrl(url: string): ImageCredit | undefined {
  return IMAGE_CREDITS.find(credit => credit.url === url);
}

// Helper function to get all credits by source
export function getCreditsBySource(source: ImageCredit['source']): ImageCredit[] {
  return IMAGE_CREDITS.filter(credit => credit.source === source);
}

// Helper function to get all unique photographers
export function getAllPhotographers(): Array<{ name: string; url?: string; source: ImageCredit['source'] }> {
  const photographers = new Map();
  
  IMAGE_CREDITS.forEach(credit => {
    if (!photographers.has(credit.photographer)) {
      photographers.set(credit.photographer, {
        name: credit.photographer,
        url: credit.photographerUrl,
        source: credit.source
      });
    }
  });
  
  return Array.from(photographers.values());
}
