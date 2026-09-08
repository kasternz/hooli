import { useMemo, useState, type FormEvent, type ReactNode } from "react";
import { agent, whatsappLink } from "@/data/agent";
import { copy } from "@/data/copy";
import { listings, type Listing } from "@/data/listings";
import { useLang } from "@/i18n/context";
import { Button } from "./ui/button";
import { Input, Label, SelectField, Textarea } from "./ui/input";
import { WhatsappIcon } from "./layout/whatsapp-fab";

const whenKeys = ["now", "m1", "m3", "m6", "y1", "explore"] as const;

export function ContactForm({ listing }: { listing?: Listing }) {
  const { lang } = useLang();
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [when, setWhen] = useState<(typeof whenKeys)[number]>("explore");
  const [slug, setSlug] = useState(listing?.slug ?? "");
  const [message, setMessage] = useState("");

  const chosen = listings.find((item) => item.slug === slug);
  const whenLabel = copy.whenOptions[when][lang];

  const composed = useMemo(() => {
    const propertyLine = chosen
      ? lang === "es"
        ? `Propiedad: ${chosen.title.es} (${chosen.slug})`
        : `Listing: ${chosen.title.en} (${chosen.slug})`
      : lang === "es"
        ? "Propiedad: aún no elijo una"
        : "Listing: not chosen yet";
    const body = [
      lang === "es" ? `Nombre: ${name}` : `Name: ${name}`,
      lang === "es" ? `Correo: ${email}` : `Email: ${email}`,
      lang === "es" ? `Teléfono: ${phone}` : `Phone: ${phone}`,
      lang === "es"
        ? `¿Cuándo planea invertir?: ${whenLabel}`
        : `When planning to invest: ${whenLabel}`,
      propertyLine,
      "",
      message,
    ].join("\n");
    const subject =
      lang === "es"
        ? `Consulta Hooli — ${chosen?.title.es ?? "general"}`
        : `Hooli enquiry — ${chosen?.title.en ?? "general"}`;
    return { subject, body };
  }, [chosen, email, lang, message, name, phone, whenLabel]);

  function onEmail(e: FormEvent) {
    e.preventDefault();
    const href = `mailto:${agent.email}?subject=${encodeURIComponent(composed.subject)}&body=${encodeURIComponent(composed.body)}`;
    window.location.href = href;
    setSent(true);
  }

  return (
    <form onSubmit={onEmail} className="space-y-4">
      <Field id="name" label={copy.formName[lang]}>
        <Input
          id="name"
          required
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Field>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="email" label={copy.formEmail[lang]}>
          <Input
            id="email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Field>
        <Field id="phone" label={copy.formPhone[lang]}>
          <Input
            id="phone"
            type="tel"
            autoComplete="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Field>
      </div>
      <Field id="when" label={copy.formWhen[lang]}>
        <SelectField
          id="when"
          value={when}
          onChange={(e) => setWhen(e.target.value as (typeof whenKeys)[number])}
        >
          {whenKeys.map((key) => (
            <option key={key} value={key}>
              {copy.whenOptions[key][lang]}
            </option>
          ))}
        </SelectField>
      </Field>
      {!listing ? (
        <Field id="listing" label={copy.formListing[lang]}>
          <SelectField id="listing" value={slug} onChange={(e) => setSlug(e.target.value)}>
            <option value="">{copy.formListingNone[lang]}</option>
            {listings.map((item) => (
              <option key={item.slug} value={item.slug}>
                {item.title[lang]}
              </option>
            ))}
          </SelectField>
        </Field>
      ) : null}
      <Field id="message" label={copy.formMessage[lang]}>
        <Textarea
          id="message"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </Field>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Button type="submit" className="flex-1">
          {copy.formSend[lang]}
        </Button>
        <Button variant="whatsapp" className="flex-1" asChild>
          <a href={whatsappLink(composed.body)} target="_blank" rel="noreferrer">
            <WhatsappIcon className="size-4 fill-current" />
            {copy.formWhatsapp[lang]}
          </a>
        </Button>
      </div>
      {sent ? <p className="text-sm text-muted">{copy.formSent[lang]}</p> : null}
    </form>
  );
}

function Field({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      {children}
    </div>
  );
}
