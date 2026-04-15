import type { Species } from "@/lib/types/species";

/**
 * Static data for Colombian species
 * Each species includes location coordinates for map markers
 */
export const speciesData: Species[] = [
  {
    id: 1,
    commonName: "Jaguar",
    scientificName: "Panthera onca",
    category: "Mammal",
    description: "El felino más grande de América, habita en las selvas colombianas y es un depredador apex fundamental para el ecosistema.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Standing_jaguar.jpg",
    coordinates: { lat: 6.25, lng: -75.56 }
  },
  {
    id: 2,
    commonName: "Condor Andino",
    scientificName: "Vultur gryphus",
    category: "Bird",
    description: "El ave voladora más grande del mundo, símbolo nacional de Colombia y guardián de los Andes.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b9/AndeanCondorMale.jpg",
    coordinates: { lat: 4.71, lng: -74.07 }
  },
  {
    id: 3,
    commonName: "Rana Dorada Venenosa",
    scientificName: "Phyllobates terribilis",
    category: "Amphibian",
    description: "Una de las criaturas más venenosas del planeta, endémica del Pacífico colombiano. Su brillante color advierte a los depredadores.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Schrecklicherpfeilgiftfrosch-01.jpg",
    coordinates: { lat: 3.88, lng: -77.05 }
  },
  {
    id: 4,
    commonName: "Orquidea Cattleya",
    scientificName: "Cattleya trianae",
    category: "Plant",
    description: "La flor nacional de Colombia, conocida como la 'Reina de las Orquideas' por su extraordinaria belleza.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Cattleya_trianae1.jpg",
    coordinates: { lat: 5.07, lng: -75.52 }
  },
  {
    id: 5,
    commonName: "Oso de Anteojos",
    scientificName: "Tremarctos ornatus",
    category: "Mammal",
    description: "El único oso de Sudamérica, llamado así por las marcas alrededor de sus ojos que asemejan anteojos.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/99/Spectacled_Bear_-_Houston_Zoo.jpg",
    coordinates: { lat: 6.82, lng: -73.03 }
  },
  {
    id: 6,
    commonName: "Cocodrilo del Orinoco",
    scientificName: "Crocodylus intermedius",
    category: "Reptile",
    description: "El reptil más grande de las Américas, en peligro crítico de extinción y endémic o de la cuenca del Orinoco.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Croc_inter.jpg",
    coordinates: { lat: 4.44, lng: -70.68 }
  },
  {
    id: 7,
    commonName: "Guacamaya Bandera",
    scientificName: "Ara macao",
    category: "Bird",
    description: "Ave de colores vibrantes que representa los colores de la bandera colombiana, símbolo de la fauna tropical.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Ara_macao_en_Zooaquarium_de_valencia%2C_Venezuela.jpg",
    coordinates: { lat: 3.43, lng: -76.52 }
  },
  {
    id: 8,
    commonName: "Tortuga Carey",
    scientificName: "Eretmochelys imbricata",
    category: "Reptile",
    description: "Tortuga marina en peligro crítico, habita las aguas del Caribe colombiano y es vital para los arrecifes de coral.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Tortuga_carey_%28Eretmochelys_imbricata%29%2C_parque_nacional_Ras_Muhammad%2C_Egipto%2C_2022-03-28%2C_DD_56.jpg",
    coordinates: { lat: 11.24, lng: -74.21 }
  },
  {
    id: 9,
    commonName: "Delfin Rosado",
    scientificName: "Inia geoffrensis",
    category: "Mammal",
    description: "El delfín de agua dulce más grande del mundo, habita en los ríos Amazonas y Orinoco de Colombia.",
    imageUrl: "https://www.amazonate.com/hs-fs/hubfs/delfin_rosado.jpg?width=986&name=delfin_rosado.jpg",
    coordinates: { lat: -4.21, lng: -69.94 }
  }
];


