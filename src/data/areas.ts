import type { Lang } from "./copy";

export const areas = {
  "playa-del-carmen": {
    es: "Playa del Carmen",
    en: "Playa del Carmen",
    blurb: {
      es: "Quinta Avenida, Playacar y el centro urbano. Caminable, con playa y renta vacacional sólida.",
      en: "Fifth Avenue, Playacar and the urban core. Walkable, beach access and a strong vacation-rental market.",
    },
    lat: 20.6296,
    lng: -87.0739,
  },
  cancun: {
    es: "Cancún",
    en: "Cancun",
    blurb: {
      es: "Zona Hotelera, Puerto Cancún y residenciales con vista al Caribe y laguna.",
      en: "Hotel Zone, Puerto Cancun and residences with Caribbean and lagoon views.",
    },
    lat: 21.1619,
    lng: -86.8515,
  },
  tulum: {
    es: "Tulum",
    en: "Tulum",
    blurb: {
      es: "Aldea Zama, región y selva. Arquitectura contemporánea y plusvalía de mediano plazo.",
      en: "Aldea Zama, region and jungle. Contemporary architecture and medium-term appreciation.",
    },
    lat: 20.211,
    lng: -87.465,
  },
  "puerto-morelos": {
    es: "Puerto Morelos",
    en: "Puerto Morelos",
    blurb: {
      es: "Pueblo de pescadores entre Cancún y Playa. Arrecife, playa tranquila y baja densidad.",
      en: "Fishing town between Cancun and Playa. Reef, a quiet beach and low density.",
    },
    lat: 20.8538,
    lng: -86.8754,
  },
  "puerto-aventuras": {
    es: "Puerto Aventuras",
    en: "Puerto Aventuras",
    blurb: {
      es: "Marina privada, golf y casas frente a canales. Comunidad cerrada y consolidada.",
      en: "Private marina, golf and canal-front homes. A gated, established community.",
    },
    lat: 20.5006,
    lng: -87.2236,
  },
} as const;

export type AreaId = keyof typeof areas;

export function areaName(id: AreaId, lang: Lang) {
  return areas[id][lang];
}
