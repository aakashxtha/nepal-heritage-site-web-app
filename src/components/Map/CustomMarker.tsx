"use client";

import L from "leaflet";
import { HeritageSite } from "@/types/heritage";

// Custom marker icon SVG
const createCustomMarkerIcon = (site: HeritageSite) => {
  const isNatural = site.type === "Natural";
  const color = isNatural ? "#0d9472" : "#c98a3e"; // emerald for natural, himalayan gold for cultural
  const iconSymbol = isNatural ? "🏔️" : "🏛️";
  
  const svgIcon = `
    <svg width="32" height="40" viewBox="0 0 32 40" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="rgba(0,0,0,0.3)"/>
        </filter>
      </defs>
      <!-- Main marker shape -->
      <path d="M16 0C7.163 0 0 7.163 0 16c0 8.837 16 24 16 24s16-15.163 16-24C32 7.163 24.837 0 16 0z" 
            fill="${color}" 
            filter="url(#shadow)"/>
      <!-- Inner circle -->
      <circle cx="16" cy="16" r="10" fill="white" opacity="0.9"/>
      <!-- Icon background -->
      <circle cx="16" cy="16" r="8" fill="${color}"/>
      <!-- Text icon -->
      <text x="16" y="20" font-size="10" text-anchor="middle" fill="white">${iconSymbol}</text>
    </svg>
  `;

  return L.divIcon({
    html: svgIcon,
    className: 'custom-marker',
    iconSize: [32, 40],
    iconAnchor: [16, 40],
    popupAnchor: [0, -40],
  });
};

// Enhanced popup content (uses theme CSS variables so it works in dark & light)
const createPopupContent = (site: HeritageSite) => {
  return `
    <div class="custom-popup" style="width: 260px;">
      <div style="position: relative; height: 130px; overflow: hidden;">
        <img src="${site.heroImage}"
             alt="${site.name}"
             style="width: 100%; height: 100%; object-fit: cover;"
             loading="lazy" />
        <div style="position: absolute; top: 10px; left: 10px; background: rgba(0,0,0,0.55); backdrop-filter: blur(6px); color: #fff; padding: 3px 9px; border-radius: 999px; font-size: 9px; letter-spacing: 0.14em; text-transform: uppercase; font-weight: 600;">
          ${site.type}
        </div>
      </div>
      <div style="padding: 12px 14px 14px;">
        <h3 style="margin: 0 0 4px 0; font-size: 16px; font-weight: 600; font-family: var(--font-serif); color: var(--foreground);">
          ${site.name}
        </h3>
        <p style="margin: 0 0 10px 0; font-size: 12px; color: var(--foreground); opacity: 0.65; line-height: 1.5;">
          ${site.description.substring(0, 100)}${site.description.length > 100 ? '...' : ''}
        </p>
        <div style="display: flex; align-items: center; justify-content: space-between; gap: 8px; font-size: 11px; color: var(--foreground);">
          <span style="opacity: 0.55;">${site.region}</span>
          <a href="/sites/${site.slug}"
             style="background: var(--accent); color: var(--background); padding: 5px 12px; border-radius: 999px; text-decoration: none; font-size: 10px; font-weight: 600;">
            Learn more →
          </a>
        </div>
      </div>
    </div>
  `;
};

export { createCustomMarkerIcon, createPopupContent };
