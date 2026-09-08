import { copy } from "@/data/copy";
import { useLang } from "@/i18n/context";
import { mapsEmbedUrl, mapsOpenUrl } from "@/lib/format";

export function MapEmbed({
  lat,
  lng,
  title,
}: {
  lat: number;
  lng: number;
  title: string;
}) {
  const { lang } = useLang();
  return (
    <section>
      <div className="mb-3 flex items-end justify-between gap-3">
        <h2 className="font-display text-2xl tracking-wide text-navy">
          {copy.location[lang]}
        </h2>
        <a
          href={mapsOpenUrl(lat, lng)}
          target="_blank"
          rel="noreferrer"
          className="text-sm font-medium text-navy underline-offset-4 hover:underline"
        >
          {copy.openMaps[lang]}
        </a>
      </div>
      <div className="overflow-hidden rounded-lg bg-paper-deep shadow-[var(--shadow-border)]">
        <iframe
          title={title}
          src={mapsEmbedUrl(lat, lng, lang)}
          className="h-64 w-full border-0 md:h-80"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
