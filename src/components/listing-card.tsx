import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Bath, BedDouble, Car, ChevronDown, Maximize2 } from "lucide-react";
import { amenityLabel, roomLabel } from "@/data/amenities";
import { areaName } from "@/data/areas";
import { copy } from "@/data/copy";
import type { Listing } from "@/data/listings";
import { useLang } from "@/i18n/context";
import { bathTotal, formatM2, formatPrice, statusLabel, typeLabel } from "@/lib/format";
import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";

export function ListingCard({ listing }: { listing: Listing }) {
  const { lang } = useLang();
  const [open, setOpen] = useState(false);
  const hero = listing.images[0];
  const baths = bathTotal(listing);

  return (
    <article className="group flex flex-col overflow-hidden rounded-lg bg-paper shadow-[var(--shadow-border)] transition-[box-shadow,transform] duration-200 ease-out hover:shadow-[var(--shadow-border-hover)]">
      <Link
        to="/listings/$slug"
        params={{ slug: listing.slug }}
        className="relative block aspect-[16/10] overflow-hidden bg-navy-mid"
      >
        <img
          src={hero}
          alt={listing.title[lang]}
          className="size-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
        <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
          <Badge tone="paper">{statusLabel(listing.status, lang)}</Badge>
          <Badge>{typeLabel(listing.type, lang)}</Badge>
        </div>
        <div className="absolute bottom-3 right-3">
          <Badge tone="paper">
            {listing.images.length} {copy.photoOf[lang]}
          </Badge>
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
          {listing.neighborhood[lang]} · {areaName(listing.area, lang)}
        </p>
        <Link
          to="/listings/$slug"
          params={{ slug: listing.slug }}
          className="mt-1 font-display text-2xl tracking-wide text-navy"
        >
          {listing.title[lang]}
        </Link>
        <p className="mt-1 line-clamp-2 text-sm text-muted">{listing.subtitle[lang]}</p>

        <p className="mt-3 font-display text-[1.65rem] tabular-nums tracking-wide text-navy">
          {formatPrice(listing, lang)}
        </p>

        <dl className="mt-3 grid grid-cols-4 gap-2 border-t border-line pt-3 text-center">
          <Spec icon={Maximize2} value={formatM2(listing.sizeM2, lang)} />
          <Spec
            icon={BedDouble}
            value={`${listing.bedrooms} ${copy.beds[lang]}`}
          />
          <Spec icon={Bath} value={`${baths} ${copy.baths[lang]}`} />
          <Spec
            icon={Car}
            value={`${listing.parking} ${copy.parking[lang]}`}
          />
        </dl>

        <div className="mt-2">
          <button
            type="button"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-full items-center justify-between text-left text-sm font-medium text-navy"
          >
            {copy.includes[lang]}
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
              <Facilities listing={listing} />
            </div>
          </div>
        </div>

        <Link
          to="/listings/$slug"
          params={{ slug: listing.slug }}
          className="mt-3 inline-flex h-11 items-center justify-center rounded-md bg-navy text-sm font-medium text-paper transition-transform duration-150 active:scale-[0.96]"
        >
          {copy.viewListing[lang]}
        </Link>
      </div>
    </article>
  );
}

function Spec({
  icon: Icon,
  value,
}: {
  icon: typeof BedDouble;
  value: string;
}) {
  return (
    <div className="flex flex-col items-center gap-1">
      <Icon className="size-4 text-navy" strokeWidth={1.75} />
      <span className="text-[11px] font-medium leading-tight text-navy">{value}</span>
    </div>
  );
}

function Facilities({ listing }: { listing: Listing }) {
  const { lang } = useLang();
  return (
    <div className="space-y-3 pb-2 text-sm">
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
          {copy.roomsLabel[lang]}
        </p>
        <ul className="mt-1.5 flex flex-wrap gap-1.5">
          {listing.rooms.map((room) => (
            <li
              key={room.key}
              className="rounded-sm bg-paper-deep px-2 py-1 text-xs text-navy"
            >
              {room.count} {roomLabel(room.key, lang)}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
          {copy.commonAreas[lang]}
        </p>
        <ul className="mt-1.5 flex flex-wrap gap-1.5">
          {listing.commonAreas.map((key) => (
            <li
              key={key}
              className="rounded-sm bg-paper-deep px-2 py-1 text-xs text-navy"
            >
              {amenityLabel(key, lang)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
