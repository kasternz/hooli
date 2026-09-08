import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as createRootRoute, b as require_jsx_runtime, d as useRouterState, g as createFileRoute, h as lazyRouteComponent, l as Scripts, m as Outlet, p as createRouter, u as HeadContent, v as Link, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Menu, n as TriangleAlert, t as X } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
import { n as clsx } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/areas-Djy2LGFQ.js
var areas = {
	"playa-del-carmen": {
		es: "Playa del Carmen",
		en: "Playa del Carmen",
		blurb: {
			es: "Quinta Avenida, Playacar y el centro urbano. Caminable, con playa y renta vacacional sólida.",
			en: "Fifth Avenue, Playacar and the urban core. Walkable, beach access and a strong vacation-rental market."
		},
		lat: 20.6296,
		lng: -87.0739
	},
	cancun: {
		es: "Cancún",
		en: "Cancun",
		blurb: {
			es: "Zona Hotelera, Puerto Cancún y residenciales con vista al Caribe y laguna.",
			en: "Hotel Zone, Puerto Cancun and residences with Caribbean and lagoon views."
		},
		lat: 21.1619,
		lng: -86.8515
	},
	tulum: {
		es: "Tulum",
		en: "Tulum",
		blurb: {
			es: "Aldea Zama, región y selva. Arquitectura contemporánea y plusvalía de mediano plazo.",
			en: "Aldea Zama, region and jungle. Contemporary architecture and medium-term appreciation."
		},
		lat: 20.211,
		lng: -87.465
	},
	"puerto-morelos": {
		es: "Puerto Morelos",
		en: "Puerto Morelos",
		blurb: {
			es: "Pueblo de pescadores entre Cancún y Playa. Arrecife, playa tranquila y baja densidad.",
			en: "Fishing town between Cancun and Playa. Reef, a quiet beach and low density."
		},
		lat: 20.8538,
		lng: -86.8754
	},
	"puerto-aventuras": {
		es: "Puerto Aventuras",
		en: "Puerto Aventuras",
		blurb: {
			es: "Marina privada, golf y casas frente a canales. Comunidad cerrada y consolidada.",
			en: "Private marina, golf and canal-front homes. A gated, established community."
		},
		lat: 20.5006,
		lng: -87.2236
	}
};
function areaName(id, lang) {
	return areas[id][lang];
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-DfBzAlA4.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
/**
* Agent & office contact — edit this file when details change.
* Phone must stay in international format (digits only) for WhatsApp links.
*/
var agent = {
	name: "Nicolas Zarfino",
	role: {
		es: "Asesor inmobiliario certificado AMPI",
		en: "AMPI-certified real estate advisor"
	},
	phoneDisplay: "+52 984 157 7492",
	phoneDigits: "529841577492",
	email: "nicolas@hoolirealestate.com",
	ampi: true,
	markets: {
		es: "Cancún, Playa del Carmen, Tulum, Puerto Morelos y Riviera Maya",
		en: "Cancun, Playa del Carmen, Tulum, Puerto Morelos and the Riviera Maya"
	},
	bio: {
		es: "Nicolas Zarfino es asesor inmobiliario con certificación AMPI. Acompaña a compradores e inversionistas en la compra de casas, condominios y desarrollos en el Caribe Mexicano, con un proceso claro, documentación en regla y seguimiento de principio a cierre.",
		en: "Nicolas Zarfino is an AMPI-certified real estate advisor. He guides buyers and investors through homes, condominiums and new developments on the Mexican Caribbean — clear process, proper documentation, and follow-through from first viewing to closing."
	}
};
function whatsappLink(text) {
	const base = `https://wa.me/${agent.phoneDigits}`;
	if (!text) return base;
	return `${base}?text=${encodeURIComponent(text)}`;
}
var copy = {
	brand: "Hooli Real Estate",
	tagline: {
		es: "Casas, condominios y desarrollos en la Riviera Maya",
		en: "Homes, condominiums and developments on the Riviera Maya"
	},
	nav: {
		listings: {
			es: "Propiedades",
			en: "Listings"
		},
		developments: {
			es: "Desarrollos",
			en: "Developments"
		},
		contact: {
			es: "Contacto",
			en: "Contact"
		}
	},
	heroEyebrow: {
		es: "Riviera Maya · Quintana Roo",
		en: "Riviera Maya · Quintana Roo"
	},
	heroTitle: {
		es: "Vivir e invertir frente al Caribe.",
		en: "Live and invest on the Caribbean."
	},
	heroLead: {
		es: "Selección de villas, departamentos y proyectos en Cancún, Playa del Carmen, Tulum y Puerto Morelos. Cada ficha incluye plano de ubicación, metraje, precio y amenidades.",
		en: "A curated set of villas, apartments and projects in Cancun, Playa del Carmen, Tulum and Puerto Morelos. Every listing includes a location map, size, price and amenities."
	},
	ctaListings: {
		es: "Ver propiedades",
		en: "View listings"
	},
	ctaContact: {
		es: "Hablar con Nicolas",
		en: "Talk with Nicolas"
	},
	featured: {
		es: "Propiedades destacadas",
		en: "Featured listings"
	},
	allListings: {
		es: "Todas las propiedades",
		en: "All listings"
	},
	developmentsTitle: {
		es: "Proyectos y desarrollos",
		en: "Projects and developments"
	},
	developmentsLead: {
		es: "Preventas y residenciales nuevos. Al abrir un proyecto verás el video, la galería y el desglose de áreas comunes.",
		en: "Pre-sales and new residences. Open a project for the video, gallery and a breakdown of common areas."
	},
	areasTitle: {
		es: "Mercados",
		en: "Markets"
	},
	filterAll: {
		es: "Todas",
		en: "All"
	},
	filterHouses: {
		es: "Casas y villas",
		en: "Houses & villas"
	},
	filterCondos: {
		es: "Condominios",
		en: "Condominiums"
	},
	filterDevelopments: {
		es: "Desarrollos",
		en: "Developments"
	},
	from: {
		es: "Desde",
		en: "From"
	},
	sale: {
		es: "En venta",
		en: "For sale"
	},
	presale: {
		es: "Preventa",
		en: "Pre-sale"
	},
	sold: {
		es: "Vendida",
		en: "Sold"
	},
	m2: "m²",
	beds: {
		es: "rec.",
		en: "bed"
	},
	baths: {
		es: "baños",
		en: "bath"
	},
	parking: {
		es: "estac.",
		en: "park"
	},
	includes: {
		es: "Áreas y amenidades",
		en: "Areas & amenities"
	},
	commonAreas: {
		es: "Áreas comunes",
		en: "Common areas"
	},
	facilities: {
		es: "Interior y acabados",
		en: "Interior & finishes"
	},
	location: {
		es: "Ubicación",
		en: "Location"
	},
	openMaps: {
		es: "Abrir en Google Maps",
		en: "Open in Google Maps"
	},
	video: {
		es: "Video del proyecto",
		en: "Project video"
	},
	gallery: {
		es: "Galería",
		en: "Gallery"
	},
	details: {
		es: "Ficha técnica",
		en: "Property details"
	},
	highlights: {
		es: "Puntos clave",
		en: "Highlights"
	},
	askAbout: {
		es: "Consultar esta propiedad",
		en: "Enquire about this property"
	},
	viewListing: {
		es: "Ver ficha",
		en: "View listing"
	},
	back: {
		es: "Volver",
		en: "Back"
	},
	contactTitle: {
		es: "Contacto",
		en: "Contact"
	},
	contactLead: {
		es: "Escríbele a Nicolas por WhatsApp o envía el formulario. Responde en español e inglés.",
		en: "Message Nicolas on WhatsApp or send the form. He replies in Spanish and English."
	},
	formName: {
		es: "Nombre",
		en: "Name"
	},
	formEmail: {
		es: "Correo",
		en: "Email"
	},
	formPhone: {
		es: "Teléfono",
		en: "Phone"
	},
	formWhen: {
		es: "¿Cuándo planeas invertir?",
		en: "When are you planning to invest?"
	},
	formListing: {
		es: "Propiedad de interés",
		en: "Property of interest"
	},
	formListingNone: {
		es: "Aún no elijo una",
		en: "I have not chosen one yet"
	},
	formMessage: {
		es: "Mensaje",
		en: "Message"
	},
	formSend: {
		es: "Enviar por correo",
		en: "Send by email"
	},
	formWhatsapp: {
		es: "Enviar por WhatsApp",
		en: "Send on WhatsApp"
	},
	formSent: {
		es: "Se abrió tu correo. Si no ves nada, usa el botón de WhatsApp.",
		en: "Your email app opened. If nothing appeared, use the WhatsApp button."
	},
	whenOptions: {
		now: {
			es: "De inmediato",
			en: "Immediately"
		},
		m1: {
			es: "En 1 a 3 meses",
			en: "In 1–3 months"
		},
		m3: {
			es: "En 3 a 6 meses",
			en: "In 3–6 months"
		},
		m6: {
			es: "En 6 a 12 meses",
			en: "In 6–12 months"
		},
		y1: {
			es: "En más de un año",
			en: "In more than a year"
		},
		explore: {
			es: "Solo estoy investigando",
			en: "I am just exploring"
		}
	},
	ampiBadge: {
		es: "Certificación AMPI",
		en: "AMPI certification"
	},
	whatsapp: "WhatsApp",
	call: {
		es: "Llamar",
		en: "Call"
	},
	footerNote: {
		es: "Hooli Real Estate · Riviera Maya. Las fichas se editan en un solo archivo para publicar en GitHub y Vercel.",
		en: "Hooli Real Estate · Riviera Maya. Listings live in a single file, ready to publish on GitHub and Vercel."
	},
	empty: {
		es: "No hay propiedades en este filtro. Prueba otra zona o tipo.",
		en: "No listings in this filter. Try another area or type."
	},
	notFound: {
		es: "No encontramos esta propiedad.",
		en: "We could not find this listing."
	},
	roomsLabel: {
		es: "Recorrido interior",
		en: "Interior layout"
	},
	photoOf: {
		es: "Foto",
		en: "Photo"
	}
};
var I18nContext = (0, import_react.createContext)(null);
var STORAGE_KEY = "hooli-lang";
function I18nProvider({ children }) {
	const [lang, setLangState] = (0, import_react.useState)("es");
	(0, import_react.useEffect)(() => {
		const saved = window.localStorage.getItem(STORAGE_KEY);
		if (saved === "es" || saved === "en") {
			setLangState(saved);
			return;
		}
		if (window.navigator.language.toLowerCase().startsWith("en")) setLangState("en");
	}, []);
	(0, import_react.useEffect)(() => {
		document.documentElement.lang = lang;
		document.documentElement.dataset.lang = lang;
		window.localStorage.setItem(STORAGE_KEY, lang);
	}, [lang]);
	const setLang = (0, import_react.useCallback)((next) => setLangState(next), []);
	const toggle = (0, import_react.useCallback)(() => setLangState((current) => current === "es" ? "en" : "es"), []);
	const value = (0, import_react.useMemo)(() => ({
		lang,
		setLang,
		toggle
	}), [
		lang,
		setLang,
		toggle
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I18nContext.Provider, {
		value,
		children
	});
}
function useLang() {
	const ctx = (0, import_react.useContext)(I18nContext);
	if (!ctx) throw new Error("useLang must be used inside I18nProvider");
	return ctx;
}
function Footer() {
	const { lang } = useLang();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-navy text-paper",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-[1.3fr_1fr_1fr] md:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/brand/logo-white.png",
					alt: "Hooli Real Estate",
					className: "h-14 w-auto max-w-[220px] object-contain object-left outline-none"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-sm text-sm leading-relaxed text-paper/70",
					children: copy.tagline[lang]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-lg tracking-[0.12em] uppercase",
					children: copy.nav.listings[lang]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 space-y-2 text-sm text-paper/75",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/listings",
							className: "hover:text-paper",
							children: copy.nav.listings[lang]
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/developments",
							className: "hover:text-paper",
							children: copy.nav.developments[lang]
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "hover:text-paper",
							children: copy.nav.contact[lang]
						}) })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-lg tracking-[0.12em] uppercase",
						children: copy.nav.contact[lang]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm font-medium",
						children: agent.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-paper/75",
						children: agent.role[lang]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-paper/75",
						children: agent.phoneDisplay
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-paper/75",
						children: agent.email
					})
				] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-paper/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto max-w-6xl px-4 py-4 text-xs text-paper/45 md:px-6",
				children: copy.footerNote[lang]
			})
		})]
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function LanguageToggle({ invert = false }) {
	const { lang, setLang } = useLang();
	const base = invert ? "text-paper/55 data-active:text-paper data-active:bg-paper/12" : "text-muted data-active:text-navy data-active:bg-navy/8";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("inline-flex h-10 items-center rounded-sm p-1 ring-1", invert ? "ring-paper/20" : "ring-navy/15"),
		role: "group",
		"aria-label": "Language",
		children: ["es", "en"].map((code) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			"data-active": lang === code ? true : void 0,
			onClick: () => setLang(code),
			className: cn("h-8 min-w-10 rounded-[6px] px-2.5 text-xs font-semibold uppercase tracking-[0.12em] transition-colors duration-150", base),
			children: code
		}, code))
	});
}
var links = [
	{
		to: "/listings",
		key: "listings"
	},
	{
		to: "/developments",
		key: "developments"
	},
	{
		to: "/contact",
		key: "contact"
	}
];
function Header() {
	const { lang } = useLang();
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-30 bg-navy text-paper",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 md:h-[4.5rem] md:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "flex items-center gap-3",
					onClick: () => setOpen(false),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/brand/logo-white.png",
						alt: "Hooli Real Estate",
						className: "h-10 w-auto max-w-[168px] object-contain object-left outline-none md:h-12 md:max-w-[200px]"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden items-center gap-1 md:flex",
					children: [links.map((link) => {
						const active = pathname === link.to || pathname.startsWith(`${link.to}/`);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: link.to,
							className: cn("rounded-sm px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-150", active ? "bg-paper/10 text-paper" : "text-paper/70 hover:text-paper"),
							children: copy.nav[link.key][lang]
						}, link.to);
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "ml-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageToggle, { invert: true })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "inline-flex size-11 items-center justify-center rounded-sm text-paper md:hidden",
					"aria-expanded": open,
					"aria-label": "Menu",
					onClick: () => setOpen((v) => !v),
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-6" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-6" })
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("border-t border-paper/10 md:hidden", open ? "block" : "hidden"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "mx-auto flex max-w-6xl flex-col px-4 py-3",
				children: [links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: link.to,
					onClick: () => setOpen(false),
					className: "flex min-h-11 items-center text-base text-paper/90",
					children: copy.nav[link.key][lang]
				}, link.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "py-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageToggle, { invert: true })
				})]
			})
		})]
	});
}
function WhatsappFab() {
	const { lang } = useLang();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: whatsappLink(lang === "es" ? `Hola Nicolas, me interesa una propiedad de Hooli Real Estate.` : `Hi Nicolas, I am interested in a Hooli Real Estate listing.`),
		target: "_blank",
		rel: "noreferrer",
		className: "fixed bottom-5 right-5 z-40 flex h-14 items-center gap-2 rounded-full bg-whatsapp px-4 pl-3.5 text-whatsapp-fg shadow-[var(--shadow-border)] transition-transform duration-150 hover:brightness-110 active:scale-[0.96] md:bottom-7 md:right-7",
		"aria-label": `WhatsApp ${agent.name}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsappIcon, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "pr-1 text-sm font-semibold",
			children: copy.whatsapp
		})]
	});
}
function WhatsappIcon({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		"aria-hidden": "true",
		className: className ?? "size-6 fill-current",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.02Zm-7.01 15.24h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.55-3.7 8.25-8.24 8.25Zm4.52-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.76-1.84-.2-.48-.4-.42-.56-.42h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.23-.17-.48-.29Z" })
	});
}
function SiteShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col bg-paper text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsappFab, {})
		]
	});
}
var styles_default = "/assets/styles-DMrjBcpX.css";
var APP_NAME = "Hooli Real Estate";
var Route$5 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "Hooli Real Estate — casas, condominios y desarrollos en Cancún, Playa del Carmen, Tulum y la Riviera Maya. Homes and developments on the Mexican Caribbean."
			},
			{
				name: "theme-color",
				content: "#070224"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700&family=Manrope:wght@400;500;600;700&display=swap"
			}
		]
	}),
	component: Root
});
function Root() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "es",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "antialiased",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I18nProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
			]
		})]
	});
}
var $$splitComponentImporter$4 = () => import("./routes-8fCWS1cK.mjs");
var Route$4 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./contact-FxSfOkH5.mjs");
var Route$3 = createFileRoute("/contact")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./developments-jdosbnBH.mjs");
var Route$2 = createFileRoute("/developments/")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./listings-DnwDAgwy.mjs");
function isArea(value) {
	return typeof value === "string" && value in areas;
}
var Route$1 = createFileRoute("/listings/")({
	validateSearch: (search) => ({ area: isArea(search.area) ? search.area : void 0 }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("../_slug-B4v2Zaq4.mjs");
var Route = createFileRoute("/listings/$slug")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var IndexRoute = Route$4.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$5
});
var ContactRoute = Route$3.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$5
});
var DevelopmentsIndexRoute = Route$2.update({
	id: "/developments/",
	path: "/developments/",
	getParentRoute: () => Route$5
});
var ListingsIndexRoute = Route$1.update({
	id: "/listings/",
	path: "/listings/",
	getParentRoute: () => Route$5
});
var rootRouteChildren = {
	IndexRoute,
	ContactRoute,
	ListingsSlugRoute: Route.update({
		id: "/listings/$slug",
		path: "/listings/$slug",
		getParentRoute: () => Route$5
	}),
	DevelopmentsIndexRoute,
	ListingsIndexRoute
};
var routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { cn as a, agent as c, areas as d, WhatsappIcon as i, whatsappLink as l, Route as n, useLang as o, Route$1 as r, copy as s, router_exports as t, areaName as u };
