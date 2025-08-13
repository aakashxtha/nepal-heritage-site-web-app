export interface CulturalEvent {
  id: string;
  name: string;
  dates: {
    month: number; // 1-12
    day?: number; // Fixed day if applicable
    dateRange?: string; // For multi-day events or lunar calendar dates
    year2025?: string; // Specific 2025 dates
  };
  type: "festival" | "seasonal" | "religious" | "cultural";
  significance: string;
  description: string;
  traditions: string[];
  siteRelevance: {
    kathmandu?: string;
    sagarmatha?: string;
    chitwan?: string;
    lumbini?: string;
  };
  bestExperience?: string;
  visitorTips?: string[];
}

export const CULTURAL_EVENTS: CulturalEvent[] = [
  // January
  {
    id: "maghe-sankranti",
    name: "Maghe Sankranti",
    dates: {
      month: 1,
      day: 14,
      year2025: "January 14, 2025"
    },
    type: "festival",
    significance: "Marks the end of winter solstice and beginning of longer days",
    description: "A harvest festival celebrating the transition from winter to spring, when the sun begins its northward journey.",
    traditions: [
      "Ritual baths in holy rivers",
      "Eating sesame seeds, molasses, and sweet potatoes",
      "Flying kites",
      "Charitable giving and donations"
    ],
    siteRelevance: {
      kathmandu: "Pilgrims gather at Pashupatinath and along the Bagmati River for ritual baths",
      chitwan: "Tharu communities celebrate with traditional foods and cultural programs"
    },
    bestExperience: "Join the sunrise rituals at Pashupatinath Temple",
    visitorTips: [
      "Arrive early for the best river ceremony experience",
      "Try traditional til-laddoo and ghee",
      "Dress warmly as January mornings are cold"
    ]
  },

  // March
  {
    id: "holi",
    name: "Holi (Festival of Colors)",
    dates: {
      month: 3,
      dateRange: "Mid-March",
      year2025: "March 13-14, 2025"
    },
    type: "festival",
    significance: "Celebrates the arrival of spring and victory of good over evil",
    description: "A joyous festival where people throw colored powders and water, dance, and celebrate the triumph of good over evil.",
    traditions: [
      "Throwing colored powders (gulal) and water",
      "Dancing and singing in the streets",
      "Preparing special sweets like gujiya",
      "Burning of Holika effigy on the eve"
    ],
    siteRelevance: {
      kathmandu: "Vibrant celebrations in Durbar Squares with traditional music and dance",
      chitwan: "Tharu communities celebrate with unique regional variations"
    },
    bestExperience: "Experience the colorful festivities in Kathmandu's historic squares",
    visitorTips: [
      "Wear old clothes that you don't mind getting stained",
      "Use natural, skin-safe colors",
      "Keep cameras protected from color powder",
      "Stay hydrated and have fun!"
    ]
  },

  // April
  {
    id: "bisket-jatra",
    name: "Bisket Jatra",
    dates: {
      month: 4,
      dateRange: "Mid-April (Nepali New Year)",
      year2025: "April 10-18, 2025"
    },
    type: "festival",
    significance: "Celebrates the Nepali New Year with ancient traditions unique to Bhaktapur",
    description: "Bhaktapur's most spectacular festival featuring massive wooden chariots, tug-of-war contests, and ceremonial pole erection.",
    traditions: [
      "Chariot processions through narrow streets",
      "Tug-of-war between upper and lower town",
      "Erection of ceremonial lingo (pole)",
      "Traditional mask dances"
    ],
    siteRelevance: {
      kathmandu: "The main celebration occurs in Bhaktapur Durbar Square, one of the valley's UNESCO sites"
    },
    bestExperience: "Witness the dramatic chariot pulling and tug-of-war in Bhaktapur",
    visitorTips: [
      "Arrive early to secure good viewing spots",
      "Be prepared for large crowds",
      "Respect local customs and traditions",
      "Stay aware of safety during chariot processions"
    ]
  },

  // May
  {
    id: "buddha-jayanti",
    name: "Buddha Jayanti (Vesak)",
    dates: {
      month: 5,
      dateRange: "Full moon day of May",
      year2025: "May 12, 2025"
    },
    type: "religious",
    significance: "Commemorates the birth, enlightenment, and death of Lord Buddha",
    description: "The most sacred day for Buddhists worldwide, celebrating the life and teachings of Siddhartha Gautama.",
    traditions: [
      "Lighting butter lamps and candles",
      "Chanting mantras and prayers",
      "Offering flowers and incense",
      "Meditation and dharma teachings",
      "Acts of charity and kindness"
    ],
    siteRelevance: {
      lumbini: "The most significant celebration at Buddha's birthplace with thousands of pilgrims",
      kathmandu: "Special ceremonies at Swayambhunath and Boudhanath stupas"
    },
    bestExperience: "Join the dawn prayers and lamp lighting at Lumbini's Sacred Garden",
    visitorTips: [
      "Dress modestly and respectfully",
      "Maintain silence during prayer ceremonies",
      "Participate in meditation sessions",
      "Bring offerings of flowers or incense"
    ]
  },

  // June
  {
    id: "ropai-jatra",
    name: "Ropai Jatra (National Paddy Day)",
    dates: {
      month: 6,
      day: 29,
      year2025: "June 29, 2025"
    },
    type: "seasonal",
    significance: "Marks the beginning of rice planting season",
    description: "A celebration of agriculture and the monsoon season, when farmers begin planting rice across Nepal.",
    traditions: [
      "Community rice planting ceremonies",
      "Folk songs and dances in the fields",
      "Playing in mud and water",
      "Eating curd and beaten rice (dahi-chiura)"
    ],
    siteRelevance: {
      chitwan: "Tharu farmers celebrate with traditional planting songs and community feasts",
      kathmandu: "Cultural programs showcasing agricultural heritage"
    },
    bestExperience: "Participate in community rice planting in Chitwan villages",
    visitorTips: [
      "Wear clothes suitable for muddy fields",
      "Learn traditional planting songs",
      "Respect local farming customs",
      "Try traditional monsoon foods"
    ]
  },

  // August
  {
    id: "gai-jatra",
    name: "Gai Jatra (Festival of Cows)",
    dates: {
      month: 8,
      dateRange: "Day after Janai Purnima",
      year2025: "August 10, 2025"
    },
    type: "cultural",
    significance: "Honors deceased family members and celebrates life through humor",
    description: "A unique Newar festival where families who lost loved ones lead cows (or children dressed as cows) through the streets.",
    traditions: [
      "Cow processions through the streets",
      "Children dressed as cows",
      "Satirical performances and comedy",
      "Social commentary through humor",
      "Memorial rituals for the deceased"
    ],
    siteRelevance: {
      kathmandu: "Major processions through Kathmandu, Patan, and Bhaktapur Durbar Squares"
    },
    bestExperience: "Watch the colorful processions and satirical performances in Kathmandu",
    visitorTips: [
      "Understand the cultural significance before attending",
      "Respect the memorial aspect of the festival",
      "Enjoy the humor and social commentary",
      "Photography should be respectful"
    ]
  },

  {
    id: "teej",
    name: "Teej (Women's Festival)",
    dates: {
      month: 8,
      dateRange: "Third day of bright fortnight in Bhadra",
      year2025: "August 26, 2025"
    },
    type: "religious",
    significance: "Women's festival dedicated to Goddess Parvati for marital bliss and family welfare",
    description: "A vibrant celebration where women dress in red, fast, sing devotional songs, and pray for their families' well-being.",
    traditions: [
      "Women wearing red saris and jewelry",
      "Fasting and prayer rituals",
      "Singing traditional Teej songs",
      "Dancing and celebrations",
      "Visiting temples and shrines"
    ],
    siteRelevance: {
      kathmandu: "Special celebrations at Pashupatinath Temple with thousands of women devotees"
    },
    bestExperience: "Witness the colorful gatherings at Pashupatinath Temple",
    visitorTips: [
      "Respect the religious nature of the festival",
      "Appreciate the beautiful traditional attire",
      "Learn about women's roles in Nepali culture",
      "Photography should be respectful and with permission"
    ]
  },

  // September
  {
    id: "indra-jatra",
    name: "Indra Jatra",
    dates: {
      month: 9,
      dateRange: "Eight days starting from Bhadra Krishna Chaturdashi",
      year2025: "September 6-14, 2025"
    },
    type: "festival",
    significance: "Honors Indra, god of rain, and showcases the living goddess Kumari",
    description: "Kathmandu's most iconic street festival featuring masked dances, chariot processions, and the rare public appearance of the Kumari.",
    traditions: [
      "Erection of Indra's ceremonial pole",
      "Masked dances (Lakhe dance)",
      "Kumari's chariot procession",
      "Traditional music and performances",
      "Blessing ceremonies"
    ],
    siteRelevance: {
      kathmandu: "The main celebration occurs in and around Kathmandu Durbar Square"
    },
    bestExperience: "Witness the Kumari's chariot procession and traditional mask dances",
    visitorTips: [
      "Arrive early for the best viewing positions",
      "Learn about the significance of different masks",
      "Respect the sacred nature of Kumari appearances",
      "Be prepared for large crowds"
    ]
  },

  // October
  {
    id: "dashain",
    name: "Dashain",
    dates: {
      month: 10,
      dateRange: "15 days in September/October",
      year2025: "October 1-15, 2025"
    },
    type: "festival",
    significance: "Nepal's most important festival celebrating victory of good over evil",
    description: "The longest and most significant festival in Nepal, bringing families together for 15 days of celebration, feasting, and blessings.",
    traditions: [
      "Family reunions and feasts",
      "Flying kites",
      "Receiving tika and blessings from elders",
      "Animal sacrifices at temples",
      "New clothes and gifts"
    ],
    siteRelevance: {
      kathmandu: "Special ceremonies at all major temples, especially Durga temples",
      chitwan: "Tharu communities celebrate with unique traditions",
      lumbini: "Buddhist communities participate with their own variations"
    },
    bestExperience: "Experience the family atmosphere and temple ceremonies throughout the valley",
    visitorTips: [
      "Many businesses close during the festival",
      "Book accommodations well in advance",
      "Respect family time and traditions",
      "Try traditional Dashain foods"
    ]
  },

  {
    id: "tihar",
    name: "Tihar (Festival of Lights)",
    dates: {
      month: 10,
      dateRange: "Five days after Dashain",
      year2025: "October 19-23, 2025"
    },
    type: "festival",
    significance: "Honors animals and celebrates the bond between brothers and sisters",
    description: "A five-day festival of lights honoring crows, dogs, cows, and culminating in Bhai Tika celebrating sibling relationships.",
    traditions: [
      "Lighting oil lamps and candles",
      "Honoring different animals each day",
      "Rangoli (decorative patterns) with flowers",
      "Deusi-Bhailo singing groups",
      "Bhai Tika ceremony between siblings"
    ],
    siteRelevance: {
      kathmandu: "Beautiful light displays throughout the valley's heritage sites",
      chitwan: "Tharu communities celebrate with traditional songs and dances"
    },
    bestExperience: "See the valley illuminated with thousands of lights and join Deusi-Bhailo groups",
    visitorTips: [
      "Enjoy the beautiful light displays in the evening",
      "Participate in Deusi-Bhailo if invited",
      "Try traditional Tihar sweets",
      "Respect the animal worship traditions"
    ]
  },

  // November
  {
    id: "sita-vivaha",
    name: "Sita Vivaha Panchami",
    dates: {
      month: 11,
      dateRange: "Fifth day of bright fortnight in Margashirsha",
      year2025: "November 26, 2025"
    },
    type: "religious",
    significance: "Celebrates the marriage of Goddess Sita and Lord Ram",
    description: "A significant Hindu festival commemorating the divine wedding, especially celebrated in Janakpur but observed throughout Nepal.",
    traditions: [
      "Wedding procession reenactments",
      "Temple decorations and prayers",
      "Cultural performances",
      "Reading of Ramayana",
      "Community feasts"
    ],
    siteRelevance: {
      kathmandu: "Special prayers and cultural programs at Ram temples"
    },
    bestExperience: "Attend the cultural programs and temple ceremonies",
    visitorTips: [
      "Learn about the Ramayana story",
      "Appreciate the wedding ceremony traditions",
      "Enjoy classical music and dance performances",
      "Respect the religious significance"
    ]
  },

  // December
  {
    id: "yomari-punhi",
    name: "Yomari Punhi",
    dates: {
      month: 12,
      dateRange: "Full moon day of Margashirsha",
      year2025: "December 4, 2025"
    },
    type: "cultural",
    significance: "Newari festival marking the end of rice harvest",
    description: "A traditional Newari festival celebrating the rice harvest with special steamed dumplings called Yomari.",
    traditions: [
      "Making and sharing Yomari dumplings",
      "Worshipping goddess Annapurna",
      "Community feasts",
      "Cultural performances",
      "Gratitude for good harvest"
    ],
    siteRelevance: {
      kathmandu: "Celebrated throughout the Newar communities in all three Durbar Squares"
    },
    bestExperience: "Learn to make Yomari and participate in community celebrations",
    visitorTips: [
      "Try authentic Yomari dumplings",
      "Learn about Newari culture and traditions",
      "Participate in cooking workshops if available",
      "Appreciate the harvest celebration significance"
    ]
  }
];

// Seasonal information for each heritage site
export interface SeasonalInfo {
  site: string;
  seasons: {
    spring: {
      months: string;
      weather: string;
      highlights: string[];
      festivals: string[];
    };
    summer: {
      months: string;
      weather: string;
      highlights: string[];
      festivals: string[];
    };
    autumn: {
      months: string;
      weather: string;
      highlights: string[];
      festivals: string[];
    };
    winter: {
      months: string;
      weather: string;
      highlights: string[];
      festivals: string[];
    };
  };
}

export const SEASONAL_INFO: SeasonalInfo[] = [
  {
    site: "kathmandu-valley",
    seasons: {
      spring: {
        months: "March - May",
        weather: "Pleasant temperatures (15-25°C), clear skies, blooming flowers",
        highlights: ["Perfect weather for sightseeing", "Clear mountain views", "Rhododendrons in bloom"],
        festivals: ["Holi", "Bisket Jatra", "Buddha Jayanti"]
      },
      summer: {
        months: "June - August",
        weather: "Warm and humid (20-30°C), monsoon rains",
        highlights: ["Lush green landscapes", "Fewer crowds", "Cultural festivals"],
        festivals: ["Ropai Jatra", "Gai Jatra", "Teej"]
      },
      autumn: {
        months: "September - November",
        weather: "Clear skies, excellent visibility (10-25°C)",
        highlights: ["Best weather of the year", "Crystal clear mountain views", "Major festivals"],
        festivals: ["Indra Jatra", "Dashain", "Tihar"]
      },
      winter: {
        months: "December - February",
        weather: "Cool and dry (2-20°C), occasional fog",
        highlights: ["Clear skies", "Good for photography", "Fewer tourists"],
        festivals: ["Yomari Punhi", "Maghe Sankranti"]
      }
    }
  },
  {
    site: "sagarmatha-national-park",
    seasons: {
      spring: {
        months: "March - May",
        weather: "Clear skies, moderate temperatures, rhododendrons bloom",
        highlights: ["Best trekking season", "Clear mountain views", "Rhododendron forests"],
        festivals: ["Dumji (Sherpa festival)", "Buddha Jayanti"]
      },
      summer: {
        months: "June - August",
        weather: "Monsoon clouds, afternoon rains, warmer temperatures",
        highlights: ["Fewer trekkers", "Green landscapes", "Sherpa cultural events"],
        festivals: ["Mani Rimdu preparations"]
      },
      autumn: {
        months: "September - November",
        weather: "Crystal clear skies, stable weather, cold nights",
        highlights: ["Peak trekking season", "Best mountain views", "Stable weather"],
        festivals: ["Mani Rimdu at Tengboche Monastery"]
      },
      winter: {
        months: "December - February",
        weather: "Very cold, clear skies, snow at higher elevations",
        highlights: ["Fewer crowds", "Clear mountain views", "Winter landscapes"],
        festivals: ["Sherpa New Year (Losar)"]
      }
    }
  },
  {
    site: "chitwan-national-park",
    seasons: {
      spring: {
        months: "March - May",
        weather: "Warm and dry (20-35°C), excellent visibility",
        highlights: ["Best wildlife viewing", "Clear weather", "Active animals"],
        festivals: ["Holi", "Tharu cultural programs"]
      },
      summer: {
        months: "June - August",
        weather: "Hot and humid (25-40°C), monsoon rains",
        highlights: ["Lush vegetation", "Bird watching", "Tharu festivals"],
        festivals: ["Maghi (Tharu New Year)", "Ropai Jatra"]
      },
      autumn: {
        months: "September - November",
        weather: "Pleasant temperatures (15-30°C), clear skies",
        highlights: ["Excellent wildlife viewing", "Perfect weather", "Active animals"],
        festivals: ["Dashain", "Tihar", "Tharu cultural events"]
      },
      winter: {
        months: "December - February",
        weather: "Cool and dry (5-25°C), misty mornings",
        highlights: ["Good wildlife viewing", "Clear afternoons", "Comfortable temperatures"],
        festivals: ["Maghe Sankranti", "Tharu traditional ceremonies"]
      }
    }
  },
  {
    site: "lumbini",
    seasons: {
      spring: {
        months: "March - May",
        weather: "Pleasant and warm (15-30°C), clear skies",
        highlights: ["Perfect pilgrimage weather", "Blooming gardens", "Comfortable temperatures"],
        festivals: ["Buddha Jayanti (major celebration)"]
      },
      summer: {
        months: "June - August",
        weather: "Hot and humid (25-40°C), monsoon rains",
        highlights: ["Lush Sacred Garden", "Fewer pilgrims", "Green landscapes"],
        festivals: ["Monsoon meditation retreats"]
      },
      autumn: {
        months: "September - November",
        weather: "Clear and pleasant (15-28°C), excellent visibility",
        highlights: ["Peak pilgrimage season", "Perfect weather", "Clear skies"],
        festivals: ["Various Buddhist celebrations", "International pilgrim gatherings"]
      },
      winter: {
        months: "December - February",
        weather: "Cool and dry (5-22°C), misty mornings",
        highlights: ["Peaceful atmosphere", "Good for meditation", "Clear afternoons"],
        festivals: ["Winter meditation retreats", "New Year celebrations"]
      }
    }
  }
];

// Helper functions
export function getEventsByMonth(month: number): CulturalEvent[] {
  return CULTURAL_EVENTS.filter(event => event.dates.month === month);
}

export function getEventsBySite(siteId: string): CulturalEvent[] {
  return CULTURAL_EVENTS.filter(event => 
    event.siteRelevance && Object.keys(event.siteRelevance).includes(siteId)
  );
}

export function getCurrentSeasonEvents(): CulturalEvent[] {
  const currentMonth = new Date().getMonth() + 1;
  const currentSeason = getSeason(currentMonth);
  return CULTURAL_EVENTS.filter(event => getSeason(event.dates.month) === currentSeason);
}

export function getSeason(month: number): string {
  if (month >= 3 && month <= 5) return "spring";
  if (month >= 6 && month <= 8) return "summer";
  if (month >= 9 && month <= 11) return "autumn";
  return "winter";
}

export function getSeasonalInfo(siteId: string): SeasonalInfo | undefined {
  return SEASONAL_INFO.find(info => info.site === siteId);
}
