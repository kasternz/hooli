import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { copy } from "@/data/copy";
import { useLang } from "@/i18n/context";
import { cn } from "@/lib/utils";

export function Gallery({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const { lang } = useLang();
  const [index, setIndex] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const current = images[index] ?? images[0];

  function go(delta: number) {
    setIndex((i) => (i + delta + images.length) % images.length);
  }

  return (
    <div>
      <div className="relative overflow-hidden rounded-lg bg-navy-mid">
        <button
          type="button"
          onClick={() => setLightbox(true)}
          className="block w-full"
        >
          <img
            src={current}
            alt={`${alt} — ${copy.photoOf[lang]} ${index + 1}`}
            className="aspect-[16/10] w-full object-cover"
          />
        </button>
        {images.length > 1 ? (
          <>
            <NavButton side="left" onClick={() => go(-1)} />
            <NavButton side="right" onClick={() => go(1)} />
          </>
        ) : null}
        <span className="absolute bottom-3 right-3 rounded-sm bg-navy/80 px-2 py-1 text-xs font-medium text-paper">
          {index + 1} / {images.length}
        </span>
      </div>
      {images.length > 1 ? (
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
          {images.map((src, i) => (
            <button
              key={src + i}
              type="button"
              onClick={() => setIndex(i)}
              className={cn(
                "h-16 w-24 shrink-0 overflow-hidden rounded-sm ring-2 ring-offset-2 ring-offset-paper transition-opacity duration-150",
                i === index ? "ring-navy" : "ring-transparent opacity-70 hover:opacity-100",
              )}
            >
              <img src={src} alt="" className="size-full object-cover" />
            </button>
          ))}
        </div>
      ) : null}

      {lightbox ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy/92 p-4"
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            className="absolute right-4 top-4 flex size-11 items-center justify-center text-paper"
            onClick={() => setLightbox(false)}
            aria-label="Close"
          >
            <X className="size-6" />
          </button>
          {images.length > 1 ? (
            <>
              <NavButton side="left" onClick={() => go(-1)} />
              <NavButton side="right" onClick={() => go(1)} />
            </>
          ) : null}
          <img
            src={current}
            alt={alt}
            className="max-h-[86vh] max-w-full object-contain outline-none"
          />
        </div>
      ) : null}
    </div>
  );
}

function NavButton({
  side,
  onClick,
}: {
  side: "left" | "right";
  onClick: () => void;
}) {
  const Icon = side === "left" ? ChevronLeft : ChevronRight;
  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      className={cn(
        "absolute top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-navy/70 text-paper",
        side === "left" ? "left-3" : "right-3",
      )}
      aria-label={side === "left" ? "Previous" : "Next"}
    >
      <Icon className="size-5" />
    </button>
  );
}
