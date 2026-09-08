import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { AreaFilter, matchesType, type TypeFilter } from "@/components/area-filter";
import { ListingGrid } from "@/components/listing-grid";
import { areas, type AreaId } from "@/data/areas";
import { copy } from "@/data/copy";
import { listings } from "@/data/listings";
import { useLang } from "@/i18n/context";

type Search = { area?: AreaId };

function isArea(value: unknown): value is AreaId {
  return typeof value === "string" && value in areas;
}

export const Route = createFileRoute("/listings/")({
  validateSearch: (search: Record<string, unknown>): Search => ({
    area: isArea(search.area) ? search.area : undefined,
  }),
  component: ListingsPage,
});

function ListingsPage() {
  const { lang } = useLang();
  const { area: areaFromUrl } = Route.useSearch();
  const [area, setArea] = useState<AreaId | "all">(areaFromUrl ?? "all");
  const [typeFilter, setTypeFilter] = useState<TypeFilter>("all");

  const items = listings.filter((item) => {
    if (area !== "all" && item.area !== area) return false;
    return matchesType(item.type, typeFilter);
  });

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
        Hooli Real Estate
      </p>
      <h1 className="mt-2 font-display text-4xl tracking-wide text-navy md:text-5xl">
        {copy.allListings[lang]}
      </h1>
      <p className="mt-3 max-w-2xl text-muted">{copy.heroLead[lang]}</p>
      <div className="mt-8">
        <AreaFilter
          area={area}
          onArea={setArea}
          typeFilter={typeFilter}
          onType={setTypeFilter}
        />
      </div>
      <div className="mt-8">
        <ListingGrid items={items} />
      </div>
    </div>
  );
}
