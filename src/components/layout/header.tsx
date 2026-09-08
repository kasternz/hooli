import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { copy } from "@/data/copy";
import { useLang } from "@/i18n/context";
import { cn } from "@/lib/utils";
import { LanguageToggle } from "./language-toggle";
import { BrandMark } from "./brand-mark";

const links = [
  { to: "/listings", key: "listings" as const },
  { to: "/developments", key: "developments" as const },
  { to: "/contact", key: "contact" as const },
];

export function Header() {
  const { lang } = useLang();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-navy text-paper">
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between gap-4 px-4 md:h-20 md:px-6">
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
          <BrandMark />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const active =
              pathname === link.to || pathname.startsWith(`${link.to}/`);
            return (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  "rounded-sm px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-150",
                  active ? "bg-paper/10 text-paper" : "text-paper/70 hover:text-paper",
                )}
              >
                {copy.nav[link.key][lang]}
              </Link>
            );
          })}
          <div className="ml-3">
            <LanguageToggle invert />
          </div>
        </nav>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-sm text-paper md:hidden"
          aria-expanded={open}
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      <div
        className={cn(
          "border-t border-paper/10 md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav className="mx-auto flex max-w-6xl flex-col px-4 py-3">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className="flex min-h-11 items-center text-base text-paper/90"
            >
              {copy.nav[link.key][lang]}
            </Link>
          ))}
          <div className="py-3">
            <LanguageToggle invert />
          </div>
        </nav>
      </div>
    </header>
  );
}
