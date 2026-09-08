import { useLang } from "@/i18n/context";
import { cn } from "@/lib/utils";

export function LanguageToggle({ invert = false }: { invert?: boolean }) {
  const { lang, setLang } = useLang();
  const base = invert
    ? "text-paper/55 data-active:text-paper data-active:bg-paper/12"
    : "text-muted data-active:text-navy data-active:bg-navy/8";

  return (
    <div
      className={cn(
        "inline-flex h-10 items-center rounded-sm p-1 ring-1",
        invert ? "ring-paper/20" : "ring-navy/15",
      )}
      role="group"
      aria-label="Language"
    >
      {(["es", "en"] as const).map((code) => (
        <button
          key={code}
          type="button"
          data-active={lang === code ? true : undefined}
          onClick={() => setLang(code)}
          className={cn(
            "h-8 min-w-10 rounded-[6px] px-2.5 text-xs font-semibold uppercase tracking-[0.12em] transition-colors duration-150",
            base,
          )}
        >
          {code}
        </button>
      ))}
    </div>
  );
}
