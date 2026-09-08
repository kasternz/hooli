import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { amenityLabel, roomLabel } from "@/data/amenities";
import { copy } from "@/data/copy";
import type { Listing } from "@/data/listings";
import { useLang } from "@/i18n/context";
import { bathTotal, formatM2 } from "@/lib/format";
import { cn } from "@/lib/utils";

export function AmenitiesPanel({ listing }: { listing: Listing }) {
  const { lang } = useLang();
  return (
    <div className="space-y-3">
      <h2 className="font-display text-2xl tracking-wide text-navy">
        {copy.details[lang]}
      </h2>
      <Fold title={copy.roomsLabel[lang]} defaultOpen>
        <ul className="grid grid-cols-2 gap-2 text-sm md:grid-cols-3">
          <Row
            label={lang === "es" ? "Recámaras" : "Bedrooms"}
            value={String(listing.bedrooms)}
          />
          <Row
            label={lang === "es" ? "Baños" : "Bathrooms"}
            value={String(bathTotal(listing))}
          />
          <Row
            label={lang === "es" ? "Construcción" : "Interior"}
            value={formatM2(listing.sizeM2, lang)}
          />
          {listing.landM2 ? (
            <Row
              label={lang === "es" ? "Terreno" : "Lot"}
              value={formatM2(listing.landM2, lang)}
            />
          ) : null}
          <Row
            label={lang === "es" ? "Estacionamiento" : "Parking"}
            value={String(listing.parking)}
          />
          {listing.floors ? (
            <Row
              label={lang === "es" ? "Niveles" : "Floors"}
              value={String(listing.floors)}
            />
          ) : null}
          {listing.yearBuilt ? (
            <Row
              label={lang === "es" ? "Año" : "Year"}
              value={String(listing.yearBuilt)}
            />
          ) : null}
          {listing.rooms.map((room) => (
            <Row
              key={room.key}
              label={roomLabel(room.key, lang)}
              value={String(room.count)}
            />
          ))}
        </ul>
      </Fold>
      <Fold title={copy.commonAreas[lang]} defaultOpen>
        <ul className="flex flex-wrap gap-2">
          {listing.commonAreas.map((key) => (
            <li
              key={key}
              className="rounded-sm bg-paper-deep px-3 py-1.5 text-sm text-navy"
            >
              {amenityLabel(key, lang)}
            </li>
          ))}
        </ul>
      </Fold>
      <Fold title={copy.facilities[lang]} defaultOpen>
        <ul className="flex flex-wrap gap-2">
          {listing.amenities.map((key) => (
            <li
              key={key}
              className="rounded-sm bg-paper-deep px-3 py-1.5 text-sm text-navy"
            >
              {amenityLabel(key, lang)}
            </li>
          ))}
        </ul>
      </Fold>
    </div>
  );
}

function Fold({
  title,
  defaultOpen = false,
  children,
}: {
  title: string;
  defaultOpen?: boolean;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="overflow-hidden rounded-md bg-paper shadow-[var(--shadow-border)]">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex h-12 w-full items-center justify-between px-4 text-left text-sm font-semibold uppercase tracking-[0.12em] text-navy"
        aria-expanded={open}
      >
        {title}
        <ChevronDown
          className={cn(
            "size-4 transition-transform duration-200",
            open && "rotate-180",
          )}
        />
      </button>
      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-200 ease-out",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <div className="px-4 pb-4">{children}</div>
        </div>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <li className="flex items-baseline justify-between gap-2 border-b border-line py-1.5">
      <span className="text-muted">{label}</span>
      <span className="font-medium tabular-nums text-navy">{value}</span>
    </li>
  );
}
