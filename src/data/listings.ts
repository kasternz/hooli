/**
 * =============================================================================
 *  HOOLI LISTINGS DATABASE
 *  Edit this file to publish houses, condos and developments.
 *
 *  1. Drop images in  public/listings/<slug>/   (hero.jpg, 02.jpg, …)
 *     You can also reuse files from public/listings/_shared/
 *  2. Copy the template at the bottom, fill it in, push to GitHub.
 *  3. Vercel rebuilds automatically.
 *
 *  Video: paste a YouTube ID (the part after v=).
 *  Map: set lat / lng (Google Maps pin). No API key needed.
 * =============================================================================
 */

import type { AreaId } from "./areas";

export type Localized = { es: string; en: string };

export type PropertyType =
  | "house"
  | "villa"
  | "condo"
  | "penthouse"
  | "townhouse"
  | "development";

export type ListingStatus = "for-sale" | "pre-sale" | "sold";

export type RoomCount = { key: string; count: number };

export type Listing = {
  id: string;
  slug: string;
  type: PropertyType;
  status: ListingStatus;
  featured: boolean;
  title: Localized;
  subtitle: Localized;
  description: Localized;
  highlights: { es: string[]; en: string[] };
  area: AreaId;
  neighborhood: Localized;
  address: string;
  lat: number;
  lng: number;
  price: number;
  currency: "USD" | "MXN";
  /** When true, price is shown as “From …” (typical for developments). */
  priceFrom?: boolean;
  sizeM2: number;
  landM2?: number;
  bedrooms: number;
  bathrooms: number;
  halfBaths?: number;
  parking: number;
  yearBuilt?: number;
  floors?: number;
  rooms: RoomCount[];
  amenities: string[];
  commonAreas: string[];
  images: string[];
  videoId?: string;
};

export const listings: Listing[] = [
  {
    id: "casa-palmar",
    slug: "casa-palmar-playacar",
    type: "villa",
    status: "for-sale",
    featured: true,
    title: {
      es: "Casa Palmar",
      en: "Casa Palmar",
    },
    subtitle: {
      es: "Villa de 4 recámaras en Playacar Fase II",
      en: "4-bedroom villa in Playacar Phase II",
    },
    description: {
      es: "Villa de dos niveles en Playacar, a minutos de la playa del club y de la Marina. Estancia abierta hacia una alberca infinity, cocina gourmet, recámara principal con vestidor y terraza privada. El fraccionamiento es cerrado, con campo de golf, seguridad 24 horas y caseta controlada. Escritura en regla, lista para entrega.",
      en: "Two-level villa in Playacar, minutes from the beach club and marina. An open living room faces an infinity pool, with a gourmet kitchen and a primary suite with walk-in closet and private terrace. Gated community with golf, 24-hour security and a staffed gate. Title in order, ready to close.",
    },
    highlights: {
      es: [
        "Fraccionamiento cerrado con golf y playa",
        "Alberca infinity y jardín tropical",
        "Recámara principal en planta alta con vestidor",
        "Cocina integrada con isla de mármol",
      ],
      en: [
        "Gated community with golf and beach",
        "Infinity pool and tropical garden",
        "Upstairs primary suite with walk-in closet",
        "Open kitchen with marble island",
      ],
    },
    area: "playa-del-carmen",
    neighborhood: { es: "Playacar Fase II", en: "Playacar Phase II" },
    address: "Paseo Xaman-Ha, Playacar Fase II, Playa del Carmen, Q.R.",
    lat: 20.6208,
    lng: -87.0812,
    price: 1450000,
    currency: "USD",
    sizeM2: 380,
    landM2: 620,
    bedrooms: 4,
    bathrooms: 4,
    halfBaths: 1,
    parking: 2,
    yearBuilt: 2019,
    floors: 2,
    rooms: [
      { key: "living", count: 1 },
      { key: "dining", count: 1 },
      { key: "kitchen", count: 1 },
      { key: "family", count: 1 },
      { key: "terrace", count: 2 },
      { key: "office", count: 1 },
      { key: "maid", count: 1 },
      { key: "garage", count: 2 },
    ],
    amenities: [
      "private-pool",
      "infinity-pool",
      "garden",
      "ac",
      "smart-home",
      "walk-in",
      "office",
      "maid-room",
      "covered-parking",
      "security-24",
      "golf-access",
      "beach-access",
      "generator",
      "cistern",
    ],
    commonAreas: ["golf-access", "beach-access", "security-24", "tennis"],
    images: [
      "/listings/casa-palmar/hero.jpg",
      "/listings/_shared/living.jpg",
      "/listings/_shared/kitchen.jpg",
      "/listings/_shared/bedroom.jpg",
      "/listings/_shared/bathroom.jpg",
      "/listings/_shared/pool.jpg",
      "/listings/_shared/terrace.jpg",
    ],
    videoId: "69uewaLitVY",
  },
  {
    id: "alba-penthouse",
    slug: "alba-penthouse-playa",
    type: "penthouse",
    status: "for-sale",
    featured: true,
    title: {
      es: "Alba Penthouse",
      en: "Alba Penthouse",
    },
    subtitle: {
      es: "Penthouse 2 recámaras en el centro de Playa del Carmen",
      en: "2-bedroom penthouse in downtown Playa del Carmen",
    },
    description: {
      es: "Penthouse con terraza perimetral y vista al Caribe, a tres cuadras de la Quinta Avenida. Dos recámaras en suite, estancia con doble altura y roof top privado con fogatero. El edificio tiene elevador, gimnasio, alberca en roof garden y conserjería. Ideal para uso mixto: residencia y renta vacacional de alta ocupación.",
      en: "Penthouse with a wraparound terrace and Caribbean views, three blocks from Fifth Avenue. Two en-suite bedrooms, a double-height living room and a private rooftop with fire pit. The building has an elevator, gym, rooftop pool and concierge. Suited to mixed use: a home and a high-occupancy vacation rental.",
    },
    highlights: {
      es: [
        "Terraza privada y roof top con fogatero",
        "Tres cuadras de la Quinta Avenida",
        "Dos recámaras en suite",
        "Permite renta vacacional",
      ],
      en: [
        "Private terrace and rooftop with fire pit",
        "Three blocks from Fifth Avenue",
        "Two en-suite bedrooms",
        "Vacation rental permitted",
      ],
    },
    area: "playa-del-carmen",
    neighborhood: { es: "Centro / Quinta Avenida", en: "Downtown / Fifth Avenue" },
    address: "Calle 12 Norte entre Av. 10 y Av. 15, Playa del Carmen, Q.R.",
    lat: 20.6315,
    lng: -87.0721,
    price: 619000,
    currency: "USD",
    sizeM2: 177,
    bedrooms: 2,
    bathrooms: 2,
    parking: 1,
    yearBuilt: 2021,
    floors: 1,
    rooms: [
      { key: "living", count: 1 },
      { key: "dining", count: 1 },
      { key: "kitchen", count: 1 },
      { key: "terrace", count: 1 },
      { key: "balcony", count: 1 },
    ],
    amenities: [
      "rooftop",
      "fire-pit",
      "ocean-view",
      "ac",
      "furnished",
      "elevator",
      "gym",
      "pool",
      "concierge",
      "covered-parking",
      "security-24",
    ],
    commonAreas: ["pool", "gym", "rooftop", "lobby", "concierge", "elevator"],
    images: [
      "/listings/alba-penthouse/hero.jpg",
      "/listings/_shared/terrace.jpg",
      "/listings/_shared/living.jpg",
      "/listings/_shared/kitchen.jpg",
      "/listings/_shared/bedroom.jpg",
      "/listings/_shared/bathroom.jpg",
      "/listings/_shared/lobby.jpg",
    ],
    videoId: "ytS-3kaRiTc",
  },
  {
    id: "maroma-402",
    slug: "maroma-residences-402",
    type: "condo",
    status: "for-sale",
    featured: true,
    title: {
      es: "Maroma Residences 402",
      en: "Maroma Residences 402",
    },
    subtitle: {
      es: "Departamento frente al mar en Puerto Morelos",
      en: "Beachfront apartment in Puerto Morelos",
    },
    description: {
      es: "Departamento de 2 recámaras en un mid-rise de baja densidad frente a la playa de Puerto Morelos, pueblo protegido entre Cancún y Playa. Terraza con vista directa al arrecife, acabados en madera y piedra, y acceso al beach club del desarrollo. Puerto Morelos conserva escala humana, arrecife declarado y un mercado de renta más calmado que la Zona Hotelera.",
      en: "2-bedroom apartment in a low-density mid-rise on the Puerto Morelos beach, the protected town between Cancun and Playa. Terrace looking straight at the reef, wood and stone finishes, and access to the development’s beach club. Puerto Morelos keeps a human scale, a protected reef and a calmer rental market than the Hotel Zone.",
    },
    highlights: {
      es: [
        "Frente de playa en Puerto Morelos",
        "Vista al arrecife desde la terraza",
        "Beach club y alberca del desarrollo",
        "Pueblo con baja densidad",
      ],
      en: [
        "Beachfront in Puerto Morelos",
        "Reef view from the terrace",
        "Beach club and development pool",
        "Low-density town",
      ],
    },
    area: "puerto-morelos",
    neighborhood: { es: "Puerto Morelos Playa", en: "Puerto Morelos Beach" },
    address: "Av. Rafael E. Melgar, Puerto Morelos, Q.R.",
    lat: 20.8489,
    lng: -86.875,
    price: 485000,
    currency: "USD",
    sizeM2: 142,
    bedrooms: 2,
    bathrooms: 2,
    parking: 1,
    yearBuilt: 2020,
    floors: 1,
    rooms: [
      { key: "living", count: 1 },
      { key: "dining", count: 1 },
      { key: "kitchen", count: 1 },
      { key: "terrace", count: 1 },
    ],
    amenities: [
      "ocean-view",
      "beach-access",
      "beach-club",
      "pool",
      "gym",
      "ac",
      "furnished",
      "elevator",
      "covered-parking",
      "security-24",
      "concierge",
    ],
    commonAreas: ["beach-club", "pool", "gym", "lobby", "security-24"],
    images: [
      "/listings/maroma-402/hero.jpg",
      "/listings/_shared/terrace.jpg",
      "/listings/_shared/living.jpg",
      "/listings/_shared/bedroom.jpg",
      "/listings/_shared/kitchen.jpg",
      "/listings/_shared/pool.jpg",
      "/listings/_shared/bathroom.jpg",
    ],
    videoId: "uCg8X3Kysvs",
  },
  {
    id: "villa-selva",
    slug: "villa-selva-aldea-zama",
    type: "house",
    status: "for-sale",
    featured: true,
    title: {
      es: "Villa Selva",
      en: "Villa Selva",
    },
    subtitle: {
      es: "Casa contemporánea en Aldea Zama, Tulum",
      en: "Contemporary house in Aldea Zama, Tulum",
    },
    description: {
      es: "Casa de tres recámaras en Aldea Zama, el residencial más consolidado de Tulum. Concreto aparente, madera tropical y una alberca negra que refleja la selva. Planta baja social completamente abierta; recámaras en planta alta con vestidor y terraza. A 8 minutos en auto de la playa y a pie de restaurantes, supermercado y ciclovía.",
      en: "Three-bedroom house in Aldea Zama, Tulum’s most established residential district. Exposed concrete, tropical wood and a black pool that mirrors the jungle. Fully open social ground floor; upstairs bedrooms with walk-in closets and terraces. An 8-minute drive to the beach and walkable to restaurants, a supermarket and the bike path.",
    },
    highlights: {
      es: [
        "Aldea Zama, zona consolidada de Tulum",
        "Alberca negra y vegetación perimetral",
        "Tres recámaras con terraza",
        "Arquitectura tropical contemporánea",
      ],
      en: [
        "Aldea Zama, Tulum’s established district",
        "Black pool and perimeter jungle",
        "Three bedrooms with terraces",
        "Contemporary tropical architecture",
      ],
    },
    area: "tulum",
    neighborhood: { es: "Aldea Zama", en: "Aldea Zama" },
    address: "Aldea Zama, Tulum, Quintana Roo",
    lat: 20.2117,
    lng: -87.4516,
    price: 890000,
    currency: "USD",
    sizeM2: 265,
    landM2: 410,
    bedrooms: 3,
    bathrooms: 3,
    halfBaths: 1,
    parking: 2,
    yearBuilt: 2022,
    floors: 2,
    rooms: [
      { key: "living", count: 1 },
      { key: "dining", count: 1 },
      { key: "kitchen", count: 1 },
      { key: "terrace", count: 3 },
      { key: "office", count: 1 },
      { key: "garage", count: 2 },
    ],
    amenities: [
      "private-pool",
      "jungle-view",
      "garden",
      "ac",
      "walk-in",
      "office",
      "smart-home",
      "covered-parking",
      "security-24",
      "cistern",
      "solar",
    ],
    commonAreas: ["security-24", "bike-storage"],
    images: [
      "/listings/villa-selva/hero.jpg",
      "/listings/_shared/pool.jpg",
      "/listings/_shared/living.jpg",
      "/listings/_shared/kitchen.jpg",
      "/listings/_shared/bedroom.jpg",
      "/listings/_shared/bathroom.jpg",
      "/listings/_shared/terrace.jpg",
    ],
    videoId: "KT2uskVDnkY",
  },
  {
    id: "skyline-cancun",
    slug: "skyline-cancun-zona-hotelera",
    type: "condo",
    status: "for-sale",
    featured: false,
    title: {
      es: "Skyline Cancún 1204",
      en: "Skyline Cancun 1204",
    },
    subtitle: {
      es: "Departamento 3 recámaras en Zona Hotelera",
      en: "3-bedroom apartment in the Hotel Zone",
    },
    description: {
      es: "Torre frente al mar en el kilómetro 12 de la Zona Hotelera. Departamento de 3 recámaras con vista al Caribe y a la laguna Nichupté, acabados de lujo y doble terraza. El desarrollo incluye alberca infinity, spa, gimnasio, lobby de doble altura y beach club. Escriturado, con cuota de mantenimiento transparente y administración profesional.",
      en: "Oceanfront tower at kilometre 12 of the Hotel Zone. 3-bedroom apartment with Caribbean and Nichupté lagoon views, luxury finishes and a double terrace. The development includes an infinity pool, spa, gym, double-height lobby and beach club. Titled, with a transparent HOA fee and professional management.",
    },
    highlights: {
      es: [
        "Vista dual: mar y laguna",
        "Tres recámaras, dos terrazas",
        "Beach club y spa en el edificio",
        "Zona Hotelera, Cancún",
      ],
      en: [
        "Dual view: sea and lagoon",
        "Three bedrooms, two terraces",
        "On-site beach club and spa",
        "Cancun Hotel Zone",
      ],
    },
    area: "cancun",
    neighborhood: { es: "Zona Hotelera", en: "Hotel Zone" },
    address: "Blvd. Kukulcán Km 12, Zona Hotelera, Cancún, Q.R.",
    lat: 21.1213,
    lng: -86.7642,
    price: 720000,
    currency: "USD",
    sizeM2: 198,
    bedrooms: 3,
    bathrooms: 2,
    halfBaths: 1,
    parking: 2,
    yearBuilt: 2018,
    floors: 1,
    rooms: [
      { key: "living", count: 1 },
      { key: "dining", count: 1 },
      { key: "kitchen", count: 1 },
      { key: "terrace", count: 2 },
      { key: "laundry", count: 1 },
    ],
    amenities: [
      "ocean-view",
      "lagoon-view",
      "infinity-pool",
      "spa",
      "gym",
      "beach-club",
      "concierge",
      "elevator",
      "ac",
      "furnished",
      "covered-parking",
      "security-24",
      "lobby",
    ],
    commonAreas: ["infinity-pool", "spa", "gym", "beach-club", "lobby", "concierge"],
    images: [
      "/listings/skyline-cancun/hero.jpg",
      "/listings/_shared/living.jpg",
      "/listings/_shared/kitchen.jpg",
      "/listings/_shared/bedroom.jpg",
      "/listings/_shared/terrace.jpg",
      "/listings/_shared/bathroom.jpg",
      "/listings/_shared/lobby.jpg",
    ],
    videoId: "uCg8X3Kysvs",
  },
  {
    id: "harbor-house",
    slug: "harbor-house-puerto-aventuras",
    type: "house",
    status: "for-sale",
    featured: false,
    title: {
      es: "Harbor House",
      en: "Harbor House",
    },
    subtitle: {
      es: "Casa con muelle en Puerto Aventuras",
      en: "Dock-front house in Puerto Aventuras",
    },
    description: {
      es: "Casa de 4 recámaras frente a canal en Puerto Aventuras, con muelle para yate de 40 pies. Comunidad cerrada con marina, golf, bowling, escuelas y playa propia. Planta social hacia el agua, cocina abierta, recámara principal con jacuzzi y terraza al canal. Ideal para quien busca navegar el mismo día sin salir del fraccionamiento.",
      en: "4-bedroom canal-front house in Puerto Aventuras with a dock for a 40-foot yacht. Gated community with marina, golf, bowling, schools and its own beach. Social floor opens to the water, open kitchen, primary suite with jacuzzi and a canal terrace. Built for anyone who wants to be on the water without leaving the neighborhood.",
    },
    highlights: {
      es: [
        "Muelle privado para yate",
        "Comunidad con marina, golf y playa",
        "Cuatro recámaras, recámara principal con jacuzzi",
        "Frente a canal en Puerto Aventuras",
      ],
      en: [
        "Private yacht dock",
        "Community with marina, golf and beach",
        "Four bedrooms, primary suite with jacuzzi",
        "Canal front in Puerto Aventuras",
      ],
    },
    area: "puerto-aventuras",
    neighborhood: { es: "Puerto Aventuras Marina", en: "Puerto Aventuras Marina" },
    address: "Calle Delfines, Puerto Aventuras, Solidaridad, Q.R.",
    lat: 20.5006,
    lng: -87.2236,
    price: 1250000,
    currency: "USD",
    sizeM2: 320,
    landM2: 540,
    bedrooms: 4,
    bathrooms: 3,
    halfBaths: 1,
    parking: 2,
    yearBuilt: 2016,
    floors: 2,
    rooms: [
      { key: "living", count: 1 },
      { key: "dining", count: 1 },
      { key: "kitchen", count: 1 },
      { key: "family", count: 1 },
      { key: "terrace", count: 2 },
      { key: "garage", count: 2 },
    ],
    amenities: [
      "dock",
      "marina",
      "private-pool",
      "jacuzzi",
      "garden",
      "ac",
      "covered-parking",
      "security-24",
      "golf-access",
      "beach-access",
      "generator",
    ],
    commonAreas: ["marina", "golf-access", "beach-access", "tennis", "security-24"],
    images: [
      "/listings/harbor-house/hero.jpg",
      "/listings/_shared/living.jpg",
      "/listings/_shared/kitchen.jpg",
      "/listings/_shared/pool.jpg",
      "/listings/_shared/bedroom.jpg",
      "/listings/_shared/bathroom.jpg",
      "/listings/_shared/terrace.jpg",
    ],
    videoId: "ytS-3kaRiTc",
  },
  {
    id: "selva-maya",
    slug: "selva-maya-residences",
    type: "development",
    status: "pre-sale",
    featured: true,
    title: {
      es: "Selva Maya Residences",
      en: "Selva Maya Residences",
    },
    subtitle: {
      es: "Preventa de condominios en la selva de Tulum",
      en: "Pre-sale condominiums in the Tulum jungle",
    },
    description: {
      es: "Desarrollo de baja densidad alrededor de una alberca-laguna y un cenote restaurado. Departamentos de 1, 2 y 3 recámaras, entregas por etapas, y amenidades pensadas para residencia y renta: coworking, yoga, gimnasio, restaurante y lock-off en las unidades de 2 recámaras. Preventa con plan de pagos contra avance de obra. El video y la galería muestran el master plan y los interiores tipo.",
      en: "Low-density development around a lagoon pool and a restored cenote. 1-, 2- and 3-bedroom apartments, phased delivery, and amenities for living and renting: coworking, yoga, gym, restaurant and lock-off layouts on 2-bedroom units. Pre-sale with a construction-progress payment plan. The video and gallery show the master plan and typical interiors.",
    },
    highlights: {
      es: [
        "Preventa con plan contra avance de obra",
        "Cenote y alberca-laguna",
        "Unidades de 1 a 3 recámaras, algunas lock-off",
        "Coworking, yoga y restaurante en sitio",
      ],
      en: [
        "Pre-sale with progress payment plan",
        "Cenote and lagoon pool",
        "1 to 3 bedrooms, some lock-off",
        "On-site coworking, yoga and restaurant",
      ],
    },
    area: "tulum",
    neighborhood: { es: "Región Tulum / selva", en: "Tulum region / jungle" },
    address: "Carretera Tulum–Coba, Tulum, Quintana Roo",
    lat: 20.227,
    lng: -87.43,
    price: 285000,
    currency: "USD",
    priceFrom: true,
    sizeM2: 78,
    bedrooms: 2,
    bathrooms: 2,
    parking: 1,
    floors: 3,
    rooms: [
      { key: "living", count: 1 },
      { key: "kitchen", count: 1 },
      { key: "terrace", count: 1 },
    ],
    amenities: [
      "cenote",
      "pool",
      "gym",
      "yoga",
      "coworking",
      "restaurant",
      "jungle-view",
      "security-24",
      "covered-parking",
      "bike-storage",
      "pet-friendly",
    ],
    commonAreas: [
      "cenote",
      "pool",
      "gym",
      "yoga",
      "coworking",
      "restaurant",
      "lobby",
      "kids-club",
    ],
    images: [
      "/listings/selva-maya/hero.jpg",
      "/listings/_shared/pool.jpg",
      "/listings/_shared/lobby.jpg",
      "/listings/_shared/living.jpg",
      "/listings/_shared/kitchen.jpg",
      "/listings/_shared/gym.jpg",
      "/listings/_shared/bedroom.jpg",
    ],
    videoId: "ytS-3kaRiTc",
  },
  {
    id: "nizuc-garden",
    slug: "nizuc-gardens-cancun",
    type: "development",
    status: "pre-sale",
    featured: false,
    title: {
      es: "Nizuc Gardens",
      en: "Nizuc Gardens",
    },
    subtitle: {
      es: "Townhouses en preventa al sur de Cancún",
      en: "Pre-sale townhouses in southern Cancun",
    },
    description: {
      es: "Conjunto de townhouses de tres niveles alrededor de un patio con alberca y jardín. Cada unidad tiene 3 recámaras, roof top propio y cochera. Ubicado hacia Punta Nizuc, con acceso rápido a la Zona Hotelera y al aeropuerto. Preventa, entrega estimada a 18 meses, con acabados en paleta cálida y vegetación madura desde el día uno.",
      en: "A cluster of three-level townhouses around a courtyard pool and garden. Each unit has 3 bedrooms, its own rooftop and a garage. Toward Punta Nizuc, with quick access to the Hotel Zone and the airport. Pre-sale, estimated 18-month delivery, warm finishes and mature planting from day one.",
    },
    highlights: {
      es: [
        "Townhouse de 3 recámaras con roof top",
        "Alberca y jardín central",
        "Sur de Cancún, cerca de Punta Nizuc",
        "Preventa, entrega a 18 meses",
      ],
      en: [
        "3-bedroom townhouse with rooftop",
        "Central pool and garden",
        "Southern Cancun, near Punta Nizuc",
        "Pre-sale, 18-month delivery",
      ],
    },
    area: "cancun",
    neighborhood: { es: "Punta Nizuc / sur de Cancún", en: "Punta Nizuc / south Cancun" },
    address: "SM 17, cerca de Punta Nizuc, Cancún, Q.R.",
    lat: 21.041,
    lng: -86.779,
    price: 410000,
    currency: "USD",
    priceFrom: true,
    sizeM2: 165,
    landM2: 90,
    bedrooms: 3,
    bathrooms: 2,
    halfBaths: 1,
    parking: 2,
    floors: 3,
    rooms: [
      { key: "living", count: 1 },
      { key: "dining", count: 1 },
      { key: "kitchen", count: 1 },
      { key: "terrace", count: 1 },
      { key: "garage", count: 1 },
    ],
    amenities: [
      "pool",
      "garden",
      "rooftop",
      "ac",
      "covered-parking",
      "security-24",
      "pet-friendly",
      "kids-pool",
    ],
    commonAreas: ["pool", "kids-pool", "garden", "bbq", "security-24"],
    images: [
      "/listings/nizuc-garden/hero.jpg",
      "/listings/_shared/pool.jpg",
      "/listings/_shared/living.jpg",
      "/listings/_shared/kitchen.jpg",
      "/listings/_shared/bedroom.jpg",
      "/listings/_shared/terrace.jpg",
      "/listings/_shared/bathroom.jpg",
    ],
    videoId: "69uewaLitVY",
  },
];

export function listingBySlug(slug: string) {
  return listings.find((item) => item.slug === slug);
}

export function featuredListings() {
  return listings.filter((item) => item.featured);
}

export function developmentListings() {
  return listings.filter((item) => item.type === "development");
}

export function saleListings() {
  return listings.filter((item) => item.type !== "development");
}

export const houseTypes: PropertyType[] = ["house", "villa", "townhouse"];
export const condoTypes: PropertyType[] = ["condo", "penthouse"];

/*
 * ---- TEMPLATE (copy, paste above the closing ]; of `listings`) ----
 *
 * {
 *   id: "mi-propiedad",
 *   slug: "mi-propiedad-playa",          // URL: /listings/mi-propiedad-playa
 *   type: "condo",                       // house | villa | condo | penthouse | townhouse | development
 *   status: "for-sale",                  // for-sale | pre-sale | sold
 *   featured: false,
 *   title: { es: "Nombre", en: "Name" },
 *   subtitle: { es: "…", en: "…" },
 *   description: { es: "…", en: "…" },
 *   highlights: { es: ["…"], en: ["…"] },
 *   area: "playa-del-carmen",            // cancun | playa-del-carmen | tulum | puerto-morelos | puerto-aventuras
 *   neighborhood: { es: "Colonia", en: "Neighborhood" },
 *   address: "Calle, ciudad, Q.R.",
 *   lat: 20.6296,
 *   lng: -87.0739,
 *   price: 350000,
 *   currency: "USD",
 *   priceFrom: false,
 *   sizeM2: 120,
 *   landM2: 120,
 *   bedrooms: 2,
 *   bathrooms: 2,
 *   halfBaths: 0,
 *   parking: 1,
 *   yearBuilt: 2024,
 *   floors: 1,
 *   rooms: [
 *     { key: "living", count: 1 },
 *     { key: "kitchen", count: 1 },
 *   ],
 *   amenities: ["pool", "gym", "ac"],
 *   commonAreas: ["pool", "gym", "lobby"],
 *   images: [
 *     "/listings/mi-propiedad-playa/hero.jpg",
 *     "/listings/_shared/living.jpg",
 *   ],
 *   videoId: "dQw4w9WgXcQ",
 * },
 */
