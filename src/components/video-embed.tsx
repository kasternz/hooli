import { copy } from "@/data/copy";
import { useLang } from "@/i18n/context";

export function VideoEmbed({ videoId, title }: { videoId: string; title: string }) {
  const { lang } = useLang();
  return (
    <section>
      <h2 className="mb-3 font-display text-2xl tracking-wide text-navy">
        {copy.video[lang]}
      </h2>
      <div className="overflow-hidden rounded-lg bg-navy shadow-[var(--shadow-border)]">
        <iframe
          title={title}
          src={`https://www.youtube-nocookie.com/embed/${videoId}`}
          className="aspect-video w-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </section>
  );
}
