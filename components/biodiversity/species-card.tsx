"use client";

import Image from "next/image";
import { ChevronRight } from "lucide-react";
import type { Species } from "@/lib/types/species";

interface SpeciesCardProps {
  species: Species;
  isSelected?: boolean;
  onClick?: () => void;
}

/**
 * Get Spanish label for category badge
 */
function getCategoryLabel(category: string): string {
  const labels: Record<string, string> = {
    Mammal: "Mammal",
    Bird: "Bird",
    Amphibian: "Amphibian",
    Plant: "Plant",
    Reptile: "Reptile"
  };
  return labels[category] || category;
}

/**
 * Card component displaying a species in the sidebar list
 * Matches the design from the reference image
 */
export function SpeciesCard({ species, isSelected, onClick }: SpeciesCardProps) {
  return (
    <button
      onClick={onClick}
      className={`
        w-full flex items-center gap-3 p-3 rounded-lg
        border bg-white
        transition-all duration-200 ease-in-out
        hover:shadow-md hover:border-gray-300
        focus:outline-none focus:ring-2 focus:ring-[#2D5A27] focus:ring-offset-2
        ${isSelected ? "border-[#0077B6] shadow-md" : "border-gray-200"}
      `}
    >
      {/* Species Image */}
      <div className="relative w-14 h-14 rounded-lg overflow-hidden flex-shrink-0 border border-gray-200">
        <Image
          src={species.imageUrl}
          alt={species.commonName}
          fill
          className="object-cover"
          sizes="56px"
        />
      </div>

      {/* Species Info */}
      <div className="flex-1 text-left min-w-0">
        <h3 className="font-semibold text-[#2D5A27] truncate text-base">
          {species.commonName}
        </h3>
        <p className="text-sm text-gray-500 italic truncate">
          {species.scientificName}
        </p>
        <span className="inline-block mt-1 px-2 py-0.5 text-xs rounded border border-gray-300 bg-gray-50 text-gray-600">
          {getCategoryLabel(species.category)}
        </span>
      </div>

      {/* Arrow Icon */}
      <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
    </button>
  );
}
