"use client";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { useMemo } from "react";
import type { Coordinates, HeritageSite } from "@/types/heritage";
import { createCustomMarkerIcon, createPopupContent } from "./CustomMarker";

const MapContainer = dynamic(() => import("react-leaflet").then(m => m.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then(m => m.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then(m => m.Marker), { ssr: false });
const Popup = dynamic(() => import("react-leaflet").then(m => m.Popup), { ssr: false });

type Props = {
  center: Coordinates;
  zoom?: number;
  markers?: HeritageSite[];
  onMarkerClick?: (site: HeritageSite) => void;
  className?: string;
};

export default function LeafletMap({ center, zoom = 7, markers = [], onMarkerClick, className }: Props) {
  // Create custom icons for each marker
  const customMarkers = useMemo(() => 
    markers.map(site => ({
      site,
      icon: createCustomMarkerIcon(site),
      popupContent: createPopupContent(site)
    })), [markers]);

  return (
    <div className={className}>
      <MapContainer 
        center={[center.lat, center.lng]} 
        zoom={zoom} 
        style={{ height: "100%", width: "100%" }}
        zoomControl={true}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {customMarkers.map(({ site, icon, popupContent }) => (
          <Marker 
            key={site.id} 
            position={[site.coordinates.lat, site.coordinates.lng]} 
            icon={icon}
            eventHandlers={{ 
              click: () => onMarkerClick?.(site),
              mouseover: (e) => {
                e.target.openPopup();
              }
            }}
          >
            <Popup 
              closeButton={true}
              autoClose={false}
              closeOnEscapeKey={true}
              className="custom-heritage-popup"
            >
              <div dangerouslySetInnerHTML={{ __html: popupContent }} />
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}


