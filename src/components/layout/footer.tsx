import { Link } from "@tanstack/react-router";
import { agent } from "@/data/agent";
import { copy } from "@/data/copy";
import { useLang } from "@/i18n/context";
import { BrandMark } from "./brand-mark";

export function Footer() {
  const { lang } = useLang();

  return (
    <footer className="bg-navy text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-[1.3fr_1fr_1fr] md:px-6">
        <div>
          <BrandMark />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-paper/70">
            {copy.tagline[lang]}
          </p>
        </div>
        <div>
          <p className="font-display text-lg tracking-[0.12em] uppercase">
            {copy.nav.listings[lang]}
          </p>
          <ul className="mt-3 space-y-2 text-sm text-paper/75">
            <li>
              <Link to="/listings" className="hover:text-paper">
                {copy.nav.listings[lang]}
              </Link>
            </li>
            <li>
              <Link to="/developments" className="hover:text-paper">
                {copy.nav.developments[lang]}
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-paper">
                {copy.nav.contact[lang]}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-display text-lg tracking-[0.12em] uppercase">
            {copy.nav.contact[lang]}
          </p>
          <p className="mt-3 text-sm font-medium">{agent.name}</p>
          <p className="text-sm text-paper/75">{agent.role[lang]}</p>
          <p className="mt-2 text-sm text-paper/75">{agent.phoneDisplay}</p>
          <p className="text-sm text-paper/75">{agent.email}</p>
        </div>
      </div>
      <div className="border-t border-paper/10">
        <p className="mx-auto max-w-6xl px-4 py-4 text-xs text-paper/45 md:px-6">
          {copy.footerNote[lang]}
        </p>
      </div>
    </footer>
  );
}
