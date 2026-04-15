"use client";

import type { FilterOption, SpeciesCategory } from "@/lib/types/species";

interface FilterButtonsProps {
  activeFilter: FilterOption;
  onFilterChange: (filter: FilterOption) => void;
}

const FILTER_OPTIONS: FilterOption[] = [
  "All",
  "Mammal",
  "Bird",
  "Amphibian",
  "Plant",
  "Reptile"
];

/**
 * Get display label for filter option
 */
function getFilterLabel(filter: FilterOption): string {
  if (filter === "All") return "All";
  return filter;
}

/**
 * Filter buttons for species categories
 */
export function FilterButtons({ activeFilter, onFilterChange }: FilterButtonsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {FILTER_OPTIONS.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`
            px-4 py-1.5 text-sm font-medium rounded-full
            transition-all duration-200 ease-in-out
            focus:outline-none focus:ring-2 focus:ring-[#2D5A27] focus:ring-offset-2
            ${activeFilter === filter
              ? "bg-[#2D5A27] text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }
          `}
        >
          {getFilterLabel(filter)}
        </button>
      ))}
    </div>
  );
}
