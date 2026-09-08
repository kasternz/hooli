import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Phone } from "lucide-react";
import { AmenitiesPanel } from "@/components/amenities-panel";
import { ContactForm } from "@/components/contact-form";
import { Gallery } from "@/components/gallery";
import { MapEmbed } from "@/components/map-embed";
import { VideoEmbed } from "@/components/video-embed";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { WhatsappIcon } from "@/components/layout/whatsapp-fab";
import { agent, whatsappLink } from "@/data/agent";
import { areaName } from "@/data/areas";
import { copy } from "@/data/copy";
import { listingBySlug } from "@/data/listings";
import { useLang } from "@/i18n/context";
import { bathTotal, formatM2, formatPrice, statusLabel, typeLabel } from "@/lib/format";

export const Route = createFileRoute("/listings/$slug")({
  component: ListingDetail,
});

function ListingDetail() {
  const { slug } = Route.useParams();
  const { lang } = useLang();
  const listing = listingBySlug(slug);

  if (!listing) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center">
        <p className="text-muted">{copy.notFound[lang]}</p>
        <Link to="/listings" className="mt-4 inline-block text-navy underline">
          {copy.back[lang]}
        </Link>
      </div>
    );
  }

  const waText =
    lang === "es"
      ? `Hola Nicolas, me interesa ${listing.title.es} (${listing.slug}).`
      : `Hi Nicolas, I am interested in ${listing.title.en} (${listing.slug}).`;

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 md:px-6 md:py-12">
      <Link
        to="/listings"
        className="inline-flex h-11 items-center gap-2 text-sm font-medium text-navy"
      >
        <ArrowLeft className="size-4" />
        {copy.back[lang]}
      </Link>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <Badge>{statusLabel(listing.status, lang)}</Badge>
        <Badge tone="line">{typeLabel(listing.type, lang)}</Badge>
        <span className="text-sm text-muted">
          {listing.neighborhood[lang]} · {areaName(listing.area, lang)}
        </span>
      </div>

      <div className="mt-3 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="font-display text-4xl tracking-wide text-navy md:text-5xl">
            {listing.title[lang]}
          </h1>
          <p className="mt-2 max-w-2xl text-muted">{listing.subtitle[lang]}</p>
        </div>
        <p className="font-display text-3xl tabular-nums tracking-wide text-navy md:text-4xl">
          {formatPrice(listing, lang)}
        </p>
      </div>

      <dl className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Stat label={copy.m2} value={formatM2(listing.sizeM2, lang)} />
        <Stat
          label={copy.beds[lang]}
          value={`${listing.bedrooms}`}
        />
        <Stat label={copy.baths[lang]} value={`${bathTotal(listing)}`} />
        <Stat label={copy.parking[lang]} value={`${listing.parking}`} />
      </dl>

      <div className="mt-8">
        <Gallery images={listing.images} alt={listing.title[lang]} />
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.6fr)_minmax(280px,0.9fr)]">
        <div className="space-y-10">
          <p className="text-base leading-relaxed text-ink">{listing.description[lang]}</p>

          <div>
            <h2 className="font-display text-2xl tracking-wide text-navy">
              {copy.highlights[lang]}
            </h2>
            <ul className="mt-3 space-y-2">
              {listing.highlights[lang].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-ink">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-navy" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <AmenitiesPanel listing={listing} />

          {listing.videoId ? (
            <VideoEmbed videoId={listing.videoId} title={listing.title[lang]} />
          ) : null}

          <MapEmbed
            lat={listing.lat}
            lng={listing.lng}
            title={listing.address}
          />
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-lg bg-paper p-5 shadow-[var(--shadow-border)]">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
              {copy.askAbout[lang]}
            </p>
            <p className="mt-2 font-medium text-navy">{agent.name}</p>
            <p className="text-sm text-muted">{agent.role[lang]}</p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-navy">
              {copy.ampiBadge[lang]}
            </p>
            <div className="mt-4 flex flex-col gap-2">
              <Button variant="whatsapp" asChild>
                <a href={whatsappLink(waText)} target="_blank" rel="noreferrer">
                  <WhatsappIcon className="size-4 fill-current" />
                  WhatsApp
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href={`tel:+${agent.phoneDigits}`}>
                  <Phone className="size-4" />
                  {agent.phoneDisplay}
                </a>
              </Button>
            </div>
            <div className="mt-6 border-t border-line pt-5">
              <ContactForm listing={listing} />
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md bg-paper-deep px-4 py-3">
      <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
        {label}
      </dt>
      <dd className="mt-1 font-display text-2xl tabular-nums tracking-wide text-navy">
        {value}
      </dd>
    </div>
  );
}
