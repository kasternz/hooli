import type { Lang } from "@/data/copy";
import type { Listing } from "@/data/listings";
import { copy } from "@/data/copy";

export function formatPrice(listing: Listing, lang: Lang) {
  const locale = lang === "es" ? "es-MX" : "en-US";
  const formatted = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: listing.currency,
    maximumFractionDigits: 0,
  }).format(listing.price);
  const prefix = listing.priceFrom ? `${copy.from[lang]} ` : "";
  return `${prefix}${formatted}`;
}

export function formatM2(value: number, lang: Lang) {
  const locale = lang === "es" ? "es-MX" : "en-US";
  return `${new Intl.NumberFormat(locale).format(value)} ${copy.m2}`;
}

export function bathTotal(listing: Listing) {
  return listing.bathrooms + (listing.halfBaths ? 0.5 : 0);
}

export function typeLabel(type: Listing["type"], lang: Lang) {
  const map = {
    house: { es: "Casa", en: "House" },
    villa: { es: "Villa", en: "Villa" },
    condo: { es: "Condominio", en: "Condominium" },
    penthouse: { es: "Penthouse", en: "Penthouse" },
    townhouse: { es: "Townhouse", en: "Townhouse" },
    development: { es: "Desarrollo", en: "Development" },
  } as const;
  return map[type][lang];
}

export function statusLabel(status: Listing["status"], lang: Lang) {
  if (status === "pre-sale") return copy.presale[lang];
  if (status === "sold") return copy.sold[lang];
  return copy.sale[lang];
}

export function mapsEmbedUrl(lat: number, lng: number, lang: Lang) {
  const hl = lang === "es" ? "es" : "en";
  return `https://maps.google.com/maps?q=${lat},${lng}&z=15&hl=${hl}&output=embed`;
}

export function mapsOpenUrl(lat: number, lng: number) {
  return `https://www.google.com/maps?q=${lat},${lng}`;
}
