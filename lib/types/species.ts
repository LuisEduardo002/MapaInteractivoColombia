/**
 * Types for the Colombian Biodiversity Map
 */

export type SpeciesCategory = 
  | "Mammal" 
  | "Bird" 
  | "Amphibian" 
  | "Reptile" 
  | "Plant";

export interface Species {
  id: number;
  commonName: string;
  scientificName: string;
  category: SpeciesCategory;
  description: string;
  imageUrl: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export type FilterOption = "All" | SpeciesCategory;
