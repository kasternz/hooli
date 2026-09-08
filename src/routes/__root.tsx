import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { SiteShell } from "@/components/layout/site-shell";
import { I18nProvider } from "@/i18n/context";
import appCss from "../styles.css?url";

const APP_NAME = "Hooli Real Estate";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      {
        name: "description",
        content:
          "Hooli Real Estate — casas, condominios y desarrollos en Cancún, Playa del Carmen, Tulum y la Riviera Maya. Homes and developments on the Mexican Caribbean.",
      },
      { name: "theme-color", content: "#070224" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700&family=Manrope:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: Root,
});

function Root() {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="antialiased">
        <PreviewHostBridge />
        <AuthProvider>
          <I18nProvider>
            <SiteShell>
              <Outlet />
            </SiteShell>
          </I18nProvider>
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}
