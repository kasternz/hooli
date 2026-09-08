import type { ReactNode } from "react";
import { areas, type AreaId } from "@/data/areas";
import { copy } from "@/data/copy";
import { condoTypes, houseTypes, type PropertyType } from "@/data/listings";
import { useLang } from "@/i18n/context";
import { cn } from "@/lib/utils";

export type TypeFilter = "all" | "houses" | "condos" | "developments";

export function matchesType(type: PropertyType, filter: TypeFilter) {
  if (filter === "all") return true;
  if (filter === "houses") return houseTypes.includes(type);
  if (filter === "condos") return condoTypes.includes(type);
  return type === "development";
}

export function AreaFilter({
  area,
  onArea,
  typeFilter,
  onType,
  showTypes = true,
}: {
  area: AreaId | "all";
  onArea: (next: AreaId | "all") => void;
  typeFilter?: TypeFilter;
  onType?: (next: TypeFilter) => void;
  showTypes?: boolean;
}) {
  const { lang } = useLang();
  const areaOptions: Array<AreaId | "all"> = [
    "all",
    "cancun",
    "playa-del-carmen",
    "tulum",
    "puerto-morelos",
    "puerto-aventuras",
  ];

  return (
    <div className="space-y-3">
      <ChipRow>
        {areaOptions.map((id) => (
          <Chip
            key={id}
            active={area === id}
            onClick={() => onArea(id)}
            label={id === "all" ? copy.filterAll[lang] : areas[id][lang]}
          />
        ))}
      </ChipRow>
      {showTypes && onType && typeFilter ? (
        <ChipRow>
          {(
            [
              ["all", copy.filterAll[lang]],
              ["houses", copy.filterHouses[lang]],
              ["condos", copy.filterCondos[lang]],
              ["developments", copy.filterDevelopments[lang]],
            ] as const
          ).map(([id, label]) => (
            <Chip
              key={id}
              active={typeFilter === id}
              onClick={() => onType(id)}
              label={label}
            />
          ))}
        </ChipRow>
      ) : null}
    </div>
  );
}

function ChipRow({ children }: { children: ReactNode }) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {children}
    </div>
  );
}

function Chip({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "h-10 shrink-0 rounded-full px-4 text-sm font-medium transition-colors duration-150",
        active ? "bg-navy text-paper" : "bg-paper-deep text-navy hover:bg-navy/10",
      )}
    >
      {label}
    </button>
  );
}
