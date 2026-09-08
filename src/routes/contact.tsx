import { createFileRoute } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { MapEmbed } from "@/components/map-embed";
import { Button } from "@/components/ui/button";
import { BrandMark } from "@/components/layout/brand-mark";
import { WhatsappIcon } from "@/components/layout/whatsapp-fab";
import { agent, whatsappLink } from "@/data/agent";
import { copy } from "@/data/copy";
import { useLang } from "@/i18n/context";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  const { lang } = useLang();
  const greeting =
    lang === "es"
      ? "Hola Nicolas, quiero información para invertir en la Riviera Maya."
      : "Hi Nicolas, I would like information on investing in the Riviera Maya.";

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
        Hooli Real Estate
      </p>
      <h1 className="mt-2 font-display text-4xl tracking-wide text-navy md:text-5xl">
        {copy.contactTitle[lang]}
      </h1>
      <p className="mt-3 max-w-2xl text-muted">{copy.contactLead[lang]}</p>

      <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(280px,0.9fr)_minmax(0,1.2fr)]">
        <aside className="rounded-lg bg-navy p-6 text-paper md:p-8">
          <BrandMark />
          <h2 className="mt-8 font-display text-3xl tracking-wide">{agent.name}</h2>
          <p className="mt-2 text-sm text-paper/75">{agent.role[lang]}</p>
          <p className="mt-3 inline-flex rounded-sm bg-paper/10 px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.14em]">
            {copy.ampiBadge[lang]}
          </p>
          <p className="mt-6 text-sm leading-relaxed text-paper/80">{agent.bio[lang]}</p>
          <p className="mt-4 text-sm text-paper/70">{agent.markets[lang]}</p>
          <p className="mt-6 font-display text-2xl tracking-wide">{agent.phoneDisplay}</p>
          <p className="text-sm text-paper/70">{agent.email}</p>
          <div className="mt-6 flex flex-col gap-2">
            <Button variant="whatsapp" asChild>
              <a href={whatsappLink(greeting)} target="_blank" rel="noreferrer">
                <WhatsappIcon className="size-4 fill-current" />
                WhatsApp
              </a>
            </Button>
            <Button variant="invert" asChild>
              <a href={`tel:+${agent.phoneDigits}`}>
                <Phone className="size-4" />
                {copy.call[lang]}
              </a>
            </Button>
          </div>
        </aside>

        <div className="rounded-lg bg-paper p-5 shadow-[var(--shadow-border)] md:p-8">
          <h2 className="font-display text-2xl tracking-wide text-navy">
            {copy.askAbout[lang]}
          </h2>
          <p className="mt-2 mb-6 text-sm text-muted">{copy.formWhen[lang]}</p>
          <ContactForm />
        </div>
      </div>

      <div className="mt-12">
        <MapEmbed lat={20.6296} lng={-87.0739} title="Riviera Maya" />
      </div>
    </div>
  );
}
