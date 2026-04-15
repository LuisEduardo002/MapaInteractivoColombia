"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import type { Species } from "@/lib/types/species";

interface MapViewProps {
  species: Species[];
  selectedSpecies: Species | null;
  onSpeciesSelect: (species: Species) => void;
}

// Colombia center coordinates - adjusted to show more of the region like in the image
const COLOMBIA_CENTER: L.LatLngExpression = [4.0, -72.0];
const INITIAL_ZOOM = 5;

/**
 * Create custom marker icon matching the reference image
 * Yellow circle with blue border
 */
function createMarkerIcon(): L.DivIcon {
  return L.divIcon({
    className: "custom-marker-icon",
    html: `<div class="marker-circle"></div>`,
    iconSize: [20, 20],
    iconAnchor: [10, 10],
    popupAnchor: [0, -10]
  });
}

/**
 * Interactive map component using Leaflet
 * Displays species locations on a map of Colombia
 */
export function MapView({ species, selectedSpecies, onSpeciesSelect }: MapViewProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const markersRef = useRef<Map<number, L.Marker>>(new Map());

  // Initialize map
  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    // Create map instance
    const map = L.map(mapContainerRef.current, {
      center: COLOMBIA_CENTER,
      zoom: INITIAL_ZOOM,
      zoomControl: true
    });

    // Add OpenStreetMap tiles
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    mapRef.current = map;

    // Cleanup on unmount
    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  // Update markers when species data changes
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    // Clear existing markers
    markersRef.current.forEach((marker) => marker.remove());
    markersRef.current.clear();

    // Add markers for each species
    species.forEach((s) => {
      const marker = L.marker([s.coordinates.lat, s.coordinates.lng], {
        icon: createMarkerIcon()
      });

      // Create popup content
      const popupContent = `
        <div class="species-popup">
          <div class="popup-image-container">
            <img src="${s.imageUrl}" alt="${s.commonName}" class="popup-image" />
          </div>
          <h3 class="popup-title">${s.commonName}</h3>
          <p class="popup-scientific">${s.scientificName}</p>
          <span class="popup-category">${s.category}</span>
        </div>
      `;

      marker.bindPopup(popupContent);
      marker.on("click", () => onSpeciesSelect(s));
      marker.addTo(map);
      markersRef.current.set(s.id, marker);
    });
  }, [species, selectedSpecies, onSpeciesSelect]);

  // Pan to selected species
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !selectedSpecies) return;

    map.flyTo(
      [selectedSpecies.coordinates.lat, selectedSpecies.coordinates.lng],
      8,
      { duration: 0.5 }
    );

    // Open popup for selected marker
    const marker = markersRef.current.get(selectedSpecies.id);
    if (marker) {
      marker.openPopup();
    }
  }, [selectedSpecies]);

  return (
    <>
      {/* CSS for markers and popups - separated from inline styles */}
      <style jsx global>{`
        .custom-marker-icon {
          background: transparent;
          border: none;
        }
        
        .marker-circle {
          width: 20px;
          height: 20px;
          background: #FFD700;
          border: 3px solid #0077B6;
          border-radius: 50%;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
          transition: transform 0.2s ease;
        }
        
        .marker-circle:hover {
          transform: scale(1.2);
        }
        
        .species-popup {
          font-family: 'Comfortaa', sans-serif;
          min-width: 200px;
          padding: 2px;
        }

        .popup-image-container {
          width: 100%;
          height: 120px;
          margin-bottom: 8px;
          border-radius: 8px;
          overflow: hidden;
          background: #f0f0f0;
        }

        .popup-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .popup-title {
          margin: 0 0 2px 0;
          font-weight: 700;
          font-size: 16px;
          color: #2D5A27;
        }
        
        .popup-scientific {
          margin: 0 0 10px 0;
          font-style: italic;
          color: #666;
          font-size: 13px;
        }
        
        .popup-category {
          display: inline-block;
          padding: 3px 12px;
          background: #2D5A27;
          color: white;
          border-radius: 6px;
          font-size: 11px;
          font-weight: 600;
        }
        
        .leaflet-popup-content-wrapper {
          border-radius: 12px;
        }
        
        .leaflet-popup-tip {
          background: white;
        }
      `}</style>
      
      <div 
        ref={mapContainerRef} 
        className="w-full h-full"
      />
    </>
  );
}
