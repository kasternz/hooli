import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { areas } from "@/data/areas";
import { copy } from "@/data/copy";
import { featuredListings } from "@/data/listings";
import { useLang } from "@/i18n/context";
import { ListingGrid } from "@/components/listing-grid";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const { lang } = useLang();
  const featured = featuredListings();

  return (
    <div>
      <section className="relative isolate overflow-hidden bg-navy text-paper">
        <img
          src="/hero/riviera-maya.jpg"
          alt=""
          className="absolute inset-0 size-full object-cover opacity-45 outline-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/55 to-navy" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-4 py-16 md:px-6 md:py-24 lg:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-paper/80">
            {copy.heroEyebrow[lang]}
          </p>
          <h1 className="max-w-3xl font-display text-5xl tracking-wide md:text-7xl">
            {copy.heroTitle[lang]}
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-paper/80 md:text-lg">
            {copy.heroLead[lang]}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button variant="invert" size="lg" asChild>
              <Link to="/listings">
                {copy.ctaListings[lang]}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <Link to="/contact">{copy.ctaContact[lang]}</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="font-display text-3xl tracking-wide text-navy md:text-4xl">
            {copy.featured[lang]}
          </h2>
          <Link
            to="/listings"
            className="hidden text-sm font-medium text-navy underline-offset-4 hover:underline sm:inline"
          >
            {copy.allListings[lang]}
          </Link>
        </div>
        <ListingGrid items={featured} />
      </section>

      <section className="bg-navy text-paper">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
          <h2 className="font-display text-3xl tracking-wide md:text-4xl">
            {copy.areasTitle[lang]}
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {(
              [
                "cancun",
                "playa-del-carmen",
                "tulum",
                "puerto-morelos",
                "puerto-aventuras",
              ] as const
            ).map((id) => (
              <Link
                key={id}
                to="/listings"
                search={{ area: id }}
                className="rounded-lg bg-navy-mid p-5 ring-1 ring-paper/10 transition-colors duration-150 hover:bg-navy-soft"
              >
                <p className="font-display text-2xl tracking-wide">{areas[id][lang]}</p>
                <p className="mt-2 text-sm leading-relaxed text-paper/70">
                  {areas[id].blurb[lang]}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <div className="flex flex-col gap-6 rounded-xl bg-paper-deep p-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-3xl tracking-wide text-navy">
              {copy.ctaContact[lang]}
            </h2>
            <p className="mt-2 max-w-lg text-sm text-muted">{copy.contactLead[lang]}</p>
          </div>
          <Button size="lg" asChild>
            <Link to="/contact">{copy.nav.contact[lang]}</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
