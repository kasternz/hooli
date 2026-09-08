import { createFileRoute } from "@tanstack/react-router";
import { ListingGrid } from "@/components/listing-grid";
import { copy } from "@/data/copy";
import { developmentListings } from "@/data/listings";
import { useLang } from "@/i18n/context";

export const Route = createFileRoute("/developments/")({
  component: DevelopmentsPage,
});

function DevelopmentsPage() {
  const { lang } = useLang();
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
        Hooli Real Estate
      </p>
      <h1 className="mt-2 font-display text-4xl tracking-wide text-navy md:text-5xl">
        {copy.developmentsTitle[lang]}
      </h1>
      <p className="mt-3 max-w-2xl text-muted">{copy.developmentsLead[lang]}</p>
      <div className="mt-8">
        <ListingGrid items={developmentListings()} />
      </div>
    </div>
  );
}
