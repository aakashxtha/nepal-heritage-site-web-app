"use client";

import L from "leaflet";
import { HeritageSite } from "@/types/heritage";

// Custom marker icon SVG
const createCustomMarkerIcon = (site: HeritageSite) => {
  const isNatural = site.type === "Natural";
  const color = isNatural ? "#059669" : "#b45309"; // emerald for natural, terracotta for cultural
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

// Enhanced popup content
const createPopupContent = (site: HeritageSite) => {
  return `
    <div class="custom-popup" style="min-width: 250px;">
      <div style="position: relative; height: 120px; overflow: hidden; border-radius: 8px; margin-bottom: 8px;">
        <img src="${site.heroImage}" 
             alt="${site.name}" 
             style="width: 100%; height: 100%; object-fit: cover;"
             loading="lazy" />
        <div style="position: absolute; top: 8px; right: 8px; background: rgba(0,0,0,0.7); color: white; padding: 2px 6px; border-radius: 4px; font-size: 10px;">
          ${site.type}
        </div>
      </div>
      <div style="padding: 0 4px;">
        <h3 style="margin: 0 0 4px 0; font-size: 14px; font-weight: 600; color: #0f0f0f;">
          ${site.name}
        </h3>
        <p style="margin: 0 0 8px 0; font-size: 12px; color: #666; line-height: 1.4;">
          ${site.description.substring(0, 100)}${site.description.length > 100 ? '...' : ''}
        </p>
        <div style="display: flex; align-items: center; justify-content: space-between; font-size: 11px; color: #888;">
          <span>${site.region}</span>
          <a href="/sites/${site.slug}" 
             style="background: #b45309; color: white; padding: 4px 8px; border-radius: 4px; text-decoration: none; font-size: 10px;">
            Learn More
          </a>
        </div>
      </div>
    </div>
  `;
};

export { createCustomMarkerIcon, createPopupContent };
