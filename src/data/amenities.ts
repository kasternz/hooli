import type { Lang } from "./copy";

/** Amenity keys used in listings.ts — add a key here, then reference it on a listing. */
export const amenities: Record<string, { es: string; en: string }> = {
  pool: { es: "Alberca", en: "Pool" },
  "infinity-pool": { es: "Alberca infinity", en: "Infinity pool" },
  "kids-pool": { es: "Alberca infantil", en: "Children's pool" },
  gym: { es: "Gimnasio", en: "Gym" },
  spa: { es: "Spa", en: "Spa" },
  sauna: { es: "Sauna", en: "Sauna" },
  steam: { es: "Vapor", en: "Steam room" },
  yoga: { es: "Sala de yoga", en: "Yoga studio" },
  coworking: { es: "Coworking", en: "Coworking" },
  rooftop: { es: "Roof top", en: "Rooftop" },
  bbq: { es: "Área de asador", en: "BBQ area" },
  "beach-club": { es: "Beach club", en: "Beach club" },
  "beach-access": { es: "Acceso a playa", en: "Beach access" },
  marina: { es: "Marina", en: "Marina" },
  dock: { es: "Muelle privado", en: "Private dock" },
  "security-24": { es: "Seguridad 24/7", en: "24/7 security" },
  concierge: { es: "Concierge", en: "Concierge" },
  elevator: { es: "Elevador", en: "Elevator" },
  generator: { es: "Planta de luz", en: "Generator" },
  cistern: { es: "Cisterna", en: "Cistern" },
  solar: { es: "Paneles solares", en: "Solar panels" },
  ac: { es: "Aire acondicionado", en: "Air conditioning" },
  furnished: { es: "Amueblado", en: "Furnished" },
  "pet-friendly": { es: "Pet friendly", en: "Pet friendly" },
  garden: { es: "Jardín", en: "Garden" },
  jacuzzi: { es: "Jacuzzi", en: "Jacuzzi" },
  "walk-in": { es: "Vestidor", en: "Walk-in closet" },
  "smart-home": { es: "Domótica", en: "Smart home" },
  tennis: { es: "Cancha de tenis", en: "Tennis court" },
  padel: { es: "Pádel", en: "Padel" },
  lobby: { es: "Lobby", en: "Lobby" },
  "covered-parking": { es: "Estacionamiento cubierto", en: "Covered parking" },
  storage: { es: "Bodega", en: "Storage" },
  laundry: { es: "Lavandería", en: "Laundry" },
  "ocean-view": { es: "Vista al mar", en: "Ocean view" },
  "jungle-view": { es: "Vista a la selva", en: "Jungle view" },
  "lagoon-view": { es: "Vista a laguna", en: "Lagoon view" },
  "golf-access": { es: "Acceso a golf", en: "Golf access" },
  restaurant: { es: "Restaurante", en: "Restaurant" },
  "kids-club": { es: "Kids club", en: "Kids club" },
  "bike-storage": { es: "Bicicletero", en: "Bike storage" },
  "maid-room": { es: "Cuarto de servicio", en: "Staff room" },
  terrace: { es: "Terraza", en: "Terrace" },
  balcony: { es: "Balcón", en: "Balcony" },
  "private-pool": { es: "Alberca privada", en: "Private pool" },
  cenote: { es: "Cenote en el desarrollo", en: "On-site cenote" },
  "fire-pit": { es: "Fogatero", en: "Fire pit" },
  wine: { es: "Cava", en: "Wine cellar" },
  office: { es: "Estudio / home office", en: "Home office" },
};

export const roomLabels: Record<string, { es: string; en: string }> = {
  living: { es: "Sala", en: "Living room" },
  dining: { es: "Comedor", en: "Dining room" },
  kitchen: { es: "Cocina", en: "Kitchen" },
  family: { es: "Sala familiar", en: "Family room" },
  terrace: { es: "Terraza", en: "Terrace" },
  balcony: { es: "Balcón", en: "Balcony" },
  office: { es: "Estudio", en: "Office" },
  maid: { es: "Cuarto de servicio", en: "Staff room" },
  laundry: { es: "Cuarto de lavado", en: "Laundry room" },
  storage: { es: "Bodega", en: "Storage" },
  garage: { es: "Garage", en: "Garage" },
};

export function amenityLabel(key: string, lang: Lang) {
  return amenities[key]?.[lang] ?? key;
}

export function roomLabel(key: string, lang: Lang) {
  return roomLabels[key]?.[lang] ?? key;
}
