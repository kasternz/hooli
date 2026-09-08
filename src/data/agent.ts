/**
 * Agent & office contact — edit this file when details change.
 * Phone must stay in international format (digits only) for WhatsApp links.
 */
export const agent = {
  name: "Nicolas Zarfino",
  role: {
    es: "Asesor inmobiliario certificado AMPI",
    en: "AMPI-certified real estate advisor",
  },
  phoneDisplay: "+52 984 157 7492",
  phoneDigits: "529841577492",
  email: "nicolas@hoolirealestate.com",
  ampi: true,
  markets: {
    es: "Cancún, Playa del Carmen, Tulum, Puerto Morelos y Riviera Maya",
    en: "Cancun, Playa del Carmen, Tulum, Puerto Morelos and the Riviera Maya",
  },
  bio: {
    es: "Nicolas Zarfino es asesor inmobiliario con certificación AMPI. Acompaña a compradores e inversionistas en la compra de casas, condominios y desarrollos en el Caribe Mexicano, con un proceso claro, documentación en regla y seguimiento de principio a cierre.",
    en: "Nicolas Zarfino is an AMPI-certified real estate advisor. He guides buyers and investors through homes, condominiums and new developments on the Mexican Caribbean — clear process, proper documentation, and follow-through from first viewing to closing.",
  },
} as const;

export function whatsappLink(text?: string) {
  const base = `https://wa.me/${agent.phoneDigits}`;
  if (!text) return base;
  return `${base}?text=${encodeURIComponent(text)}`;
}
