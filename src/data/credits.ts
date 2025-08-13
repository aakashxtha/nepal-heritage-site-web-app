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
    url: "https://unsplash.com/photos/n0RIwkDfJ1g/download?force=true&w=1600",
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
    url: "https://unsplash.com/photos/-DNpsIGSVKQ/download?force=true&w=1600",
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
    url: "https://unsplash.com/photos/Dk8jPwMPtAk/download?force=true&w=1600",
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
    url: "https://unsplash.com/photos/N6MiaknsNX8/download?force=true&w=1600",
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
    url: "https://unsplash.com/photos/FTxTyNog7BY/download?force=true&w=1600",
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
    url: "https://unsplash.com/photos/nHiAQu38jKg/download?force=true&w=1600",
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
    url: "https://unsplash.com/photos/ErntP2j0WKk/download?force=true&w=1600",
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
    url: "https://unsplash.com/photos/fdO0Rm1SUDE/download?force=true&w=1600",
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
    url: "https://unsplash.com/photos/KKm1ua7MSf0/download?force=true&w=1600",
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
    url: "https://unsplash.com/photos/R2sI4cwPXqQ/download?force=true&w=1600",
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
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Changunarayan%20Temple%20of%20Nepal.jpg",
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
    url: "https://unsplash.com/photos/eyn0LjpNWV4/download?force=true&w=1600",
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
    url: "https://unsplash.com/photos/infssQ2tjeM/download?force=true&w=1600",
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
    url: "https://unsplash.com/photos/wRvqoP2QWVg/download?force=true&w=1600",
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
    url: "https://unsplash.com/photos/XWQK-9p53ts/download?force=true&w=1600",
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
    url: "https://unsplash.com/photos/jApVcSuBo6E/download?force=true&w=1600",
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
    url: "https://unsplash.com/photos/X4s13xUyg1k/download?force=true&w=1600",
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
    url: "https://unsplash.com/photos/aNU8MnzWhKo/download?force=true&w=1600",
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
    url: "https://unsplash.com/photos/EY7jJ40zWug/download?force=true&w=1600",
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
    url: "https://unsplash.com/photos/7uSwdSWjSVU/download?force=true&w=1600",
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
