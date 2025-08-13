# Nepal Heritage Web App — Roadmap and Status

This file captures what is done, what remains, known issues, and concrete next steps so we can resume quickly.

## Tech snapshot
- Next.js 15 (App Router) + TypeScript
- Tailwind CSS v4 (inline theme tokens)
- UI: minimal primitives (button, card) — shadcn/ui optional later
- Icons: lucide-react
- Map: Leaflet via react-leaflet (client-only wrapper)
- Gallery: yet-another-react-lightbox (client-only)
- Animations: framer-motion (fully implemented with accessibility support)
- Images: Unsplash download endpoints + Wikimedia; Next/Image set to `images.unoptimized = true` for stability
- SEO: layout metadata, sitemap, robots, basic manifest

## Implemented
- App shell: header, footer, global styles, fonts (Inter + Cormorant Garamond)
- Pages: landing, interactive map, sites list, site detail, not-found, about, credits, privacy, cultural calendar
- UX: search + type filter, custom map markers → site detail, hero + sections, timeline, gallery + lightbox, practical info cards
- Data: 4 UNESCO properties (Kathmandu Valley with 7 monument zones; Sagarmatha; Chitwan; Lumbini)
- Animations: Comprehensive framer-motion implementation (page transitions, hero animations, card hover effects, timeline reveals)
- Credits: Dynamic attribution system with photographer galleries and proper licensing info
- Cultural Calendar: Festival and seasonal event system with site filtering and seasonal highlights
- Custom Map: Themed markers with rich popups, hover interactions, and branded design
- Infra: Next config for remote images (Unsplash, Wikimedia, etc.) and stable image behavior

## Image status (current)
- Heroes: Kathmandu, Sagarmatha, Chitwan, Lumbini (Unsplash download endpoints)
- Kathmandu gallery: durbar, swayambhu, boudha
- Kathmandu zones (thumbnails): ktm-durbar, patan, bhaktapur, swayambhu, boudha, pashupati (Unsplash); changu (Wikimedia direct)
- Sagarmatha gallery: everest, tengboche
- Chitwan gallery: rhino, canoe
- Lumbini gallery: mayadevi, ashoka pillar

Reference sources (examples)
- Kathmandu hero: https://unsplash.com/photos/a-view-of-a-city-with-mountains-in-the-background-n0RIwkDfJ1g
- Sagarmatha hero: https://unsplash.com/photos/a-snow-covered-mountain-with-clouds-in-the-sky-eyn0LjpNWV4
- Chitwan hero: https://unsplash.com/photos/a-rhino-walking-down-a-dirt-road-through-a-forest-XWQK-9p53ts
- Lumbini hero: https://unsplash.com/photos/white-concrete-building-under-blue-sky-during-daytime-aNU8MnzWhKo
- Changu Narayan (zone): https://commons.wikimedia.org/wiki/File:Changunarayan_Temple_of_Nepal.jpg

## Known issues / decisions
- Hydration warnings can be caused by extensions that inject attributes; we added `suppressHydrationWarning` to `<body>`. Prefer testing in incognito.
- Map and lightbox are client-only; dev HTML may show CSR bailout notes — expected.
- Image optimization remains disabled (`unoptimized: true`) for stability with Unsplash redirects.
- All major features implemented and working reliably in current configuration.

## Backlog (what's left)
### Content & data
- Richer timelines; "Visitor Essentials" (permits, transit, fees matrix, etiquette, accessibility)
- Optional nested detail pages for each Kathmandu monument zone (stories, sub-map, more media)
- Expand cultural calendar with more festivals and events

### Visual polish & UX
- Breadcrumbs on detail pages
- Better focus/hover states and skeleton/loading/empty states
- Enhanced mobile responsiveness

### Accessibility
- Full keyboard navigation for gallery/lightbox
- ARIA audit for map controls and interactive elements
- Contrast checks against theme tokens

### Performance & reliability
- Consider image optimization approach (complex due to Unsplash redirects)
- Fine-grained code-splitting where helpful
- Performance monitoring and optimization

### SEO & metadata
- JSON-LD for `TouristAttraction` / `Place`
- Per-site OG images (generate with `@vercel/og` or satori)
- Canonicals; i18n-ready meta

### Offline / PWA
- App Router-friendly SW (e.g., next-pwa)
- Cache site JSON, critical images, and tiles (respect provider TOS)
- Offline page/experience

### Favorites & itinerary
- Local favorites; itinerary builder with share/export (PDF/ICS)

### Internationalization
- Add Nepali locale; split content by locale; localized dates/numbers

### Analytics & feedback
- Privacy-friendly analytics (Plausible)
- Feedback/correction form

### Testing & CI
- Vitest + RTL; Playwright (map → site → gallery → back; search/filter)
- CI: lint, typecheck, tests on PRs

### Data / asset management
- Consider Contentlayer/Sanity or structured JSON for easier content updates
- Image CDN strategy + consistent aspect ratios

## Current Status: PRODUCTION READY ✅

The Nepal Heritage Site web app is now feature-complete with all major functionality implemented:

### 🎉 Recently Completed (Dec 2024)
1) **Framer Motion Animations** - Complete with accessibility support (prefers-reduced-motion)
   - Page transitions, hero animations, card hover effects, timeline reveals
2) **Dynamic Credits System** - Full attribution system with photographer galleries  
   - Proper licensing info, external links, organized by source (Unsplash/Wikimedia)
3) **Cultural Calendar** - Comprehensive festival and event system
   - Site filtering, seasonal highlights, detailed event information
4) **Custom Map Experience** - Professional branded markers and interactions
   - Themed markers (🏛️ cultural, 🏔️ natural), rich popups, hover effects

### 🚀 Next Phase Options
- **Deploy to production** (Vercel/Netlify ready)
- **PWA/Offline features** for mobile app-like experience
- **Advanced SEO** with JSON-LD and OG image generation
- **Analytics integration** for visitor insights

## Completed checklist ✅
- [x] App scaffold, Tailwind v4, layout, fonts
- [x] Landing, Map, Sites list, Site detail
- [x] Timeline, Gallery + Lightbox, Practical info
- [x] Leaflet markers route to detail pages
- [x] 4 sites populated + 7 Kathmandu zones
- [x] Sitemap/robots/manifest
- [x] External images wired (Unsplash/Wikimedia) per provided links
- [x] **Dynamic attributions on `/credits`** - Complete with photographer galleries
- [x] **Cultural calendar** - Full festival and event system implemented
- [x] **Motion + custom markers** - Comprehensive framer-motion animations + themed map markers
- [x] **Accessibility support** - prefers-reduced-motion compliance throughout

## Future enhancements (optional)
- [ ] Image optimization (complex due to Unsplash redirects)
- [ ] i18n (Nepali translation)
- [ ] Analytics integration
- [ ] Automated testing (Vitest + Playwright)
- [ ] CI/CD pipeline
- [ ] PWA/offline capabilities