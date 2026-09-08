import { copy } from "@/data/copy";
import type { Listing } from "@/data/listings";
import { useLang } from "@/i18n/context";
import { ListingCard } from "./listing-card";

export function ListingGrid({ items }: { items: Listing[] }) {
  const { lang } = useLang();
  if (items.length === 0) {
    return (
      <p className="rounded-lg bg-paper-deep px-5 py-10 text-center text-muted">
        {copy.empty[lang]}
      </p>
    );
  }
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((listing) => (
        <ListingCard key={listing.id} listing={listing} />
      ))}
    </div>
  );
}
