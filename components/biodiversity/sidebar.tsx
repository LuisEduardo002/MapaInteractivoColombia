"use client";

import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FilterButtons } from "./filter-buttons";
import { SpeciesCard } from "./species-card";
import type { Species, FilterOption } from "@/lib/types/species";

interface SidebarProps {
  species: Species[];
  selectedSpecies: Species | null;
  onSpeciesSelect: (species: Species) => void;
}

/**
 * Sidebar component with search, filters and species list
 * Design matches the reference image exactly
 */
export function Sidebar({ species, selectedSpecies, onSpeciesSelect }: SidebarProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<FilterOption>("All");

  // Filter species based on search and category
  const filteredSpecies = useMemo(() => {
    return species.filter((s) => {
      const matchesCategory = activeFilter === "All" || s.category === activeFilter;
      const query = searchQuery.toLowerCase();
      const matchesSearch = 
        s.commonName.toLowerCase().includes(query) ||
        s.scientificName.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [species, activeFilter, searchQuery]);

  return (
    <aside className="w-full md:w-96 h-full flex flex-col bg-white shadow-lg z-10">
      {/* Header - Green background */}
      <header className="p-5 bg-[#2D5A27]">
        <div className="flex items-center gap-3 mb-1">
          {/* Logo icon */}
          <svg 
            width="28" 
            height="28" 
            viewBox="0 0 24 24" 
            fill="none" 
            className="text-white"
          >
            <path 
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" 
              fill="currentColor"
            />
          </svg>
          <h1 className="text-xl font-bold text-white">Mapa Interactivo Colombiano</h1>
        </div>
        <p className="text-sm text-white/90 ml-10">Mapa Hecho Con Carino</p>
      </header>

      {/* Filtrado Button */}
      <div className="px-5 py-4">
        <button className="w-full py-3 px-4 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors">
          Filtrado
        </button>
      </div>

      {/* Search Input */}
      <div className="px-5 pb-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="search"
            placeholder="Buscar por nombre"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2D5A27] focus:border-transparent"
          />
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="px-5 pb-4">
        <FilterButtons
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />
      </div>

      {/* Species Count */}
      <div className="px-5 py-2 text-xs text-gray-500 uppercase tracking-wider font-medium">
        {filteredSpecies.length} ESPECIES ENCONTRADAS
      </div>

      {/* Species List */}
      <ScrollArea className="flex-1 min-h-0 px-5">
        <div className="space-y-3 pb-4">
          {filteredSpecies.map((s) => (
            <SpeciesCard
              key={s.id}
              species={s}
              isSelected={selectedSpecies?.id === s.id}
              onClick={() => onSpeciesSelect(s)}
            />
          ))}

          {filteredSpecies.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              No se encontraron especies
            </div>
          )}
        </div>
      </ScrollArea>

      {/* Footer */}
      <footer className="p-4 text-center text-xs text-gray-500 border-t border-gray-200">
        &copy; Mapa interactivo &bull; Esquema
      </footer>
    </aside>
  );
}
