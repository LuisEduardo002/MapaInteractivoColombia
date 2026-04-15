import { BiodiversityMap } from "@/components/biodiversity";

/**
 * Main page for the Colombian Biodiversity Interactive Map
 * 
 * Features:
 * - Interactive Leaflet map centered on Colombia
 * - Species markers with popups
 * - Sidebar with search and category filters
 * - Featured species card overlay on initial load
 */
export default function HomePage() {
  return <BiodiversityMap />;
}
