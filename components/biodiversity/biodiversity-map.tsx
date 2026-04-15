"use client";

import { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import { Sidebar } from "./sidebar";
import { speciesData } from "@/lib/data/species-data";
import type { Species } from "@/lib/types/species";

// Dynamic import of MapView to avoid SSR issues with Leaflet
const MapView = dynamic(
  () => import("./map-view").then((mod) => mod.MapView),
  { 
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center bg-gray-100">
        <div className="text-gray-500">Cargando mapa...</div>
      </div>
    )
  }
);


export function BiodiversityMap() {
  const [selectedSpecies, setSelectedSpecies] = useState<Species | null>(null);

  const handleSpeciesSelect = useCallback((species: Species) => {
    setSelectedSpecies(species);
  }, []);

  return (
    <div className="flex flex-col md:flex-row h-screen w-full overflow-hidden">
      {/* Sidebar */}
      <Sidebar
        species={speciesData}
        selectedSpecies={selectedSpecies}
        onSpeciesSelect={handleSpeciesSelect}
      />

      {/* Map Container */}
      <main className="relative flex-1 h-[50vh] md:h-full">
        <MapView
          species={speciesData}
          selectedSpecies={selectedSpecies}
          onSpeciesSelect={handleSpeciesSelect}
        />
      </main>
    </div>
  );
}
