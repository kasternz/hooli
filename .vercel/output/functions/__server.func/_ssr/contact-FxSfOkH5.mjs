import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as Phone } from "../_libs/lucide-react.mjs";
import { c as agent, i as WhatsappIcon, l as whatsappLink, o as useLang, s as copy } from "./router-DfBzAlA4.mjs";
import { t as Button } from "./button-CeqPbGQJ.mjs";
import { n as MapEmbed, t as ContactForm } from "./map-embed-BfJj598F.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-FxSfOkH5.js
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	const { lang } = useLang();
	const greeting = lang === "es" ? "Hola Nicolas, quiero información para invertir en la Riviera Maya." : "Hi Nicolas, I would like information on investing in the Riviera Maya.";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold uppercase tracking-[0.22em] text-muted",
				children: "Hooli Real Estate"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl tracking-wide text-navy md:text-5xl",
				children: copy.contactTitle[lang]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-2xl text-muted",
				children: copy.contactLead[lang]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 grid gap-10 lg:grid-cols-[minmax(280px,0.9fr)_minmax(0,1.2fr)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "rounded-lg bg-navy p-6 text-paper md:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/brand/logo-white.png",
							alt: "Hooli Real Estate",
							className: "h-14 w-auto max-w-[220px] object-contain object-left outline-none"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-8 font-display text-3xl tracking-wide",
							children: agent.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-paper/75",
							children: agent.role[lang]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 inline-flex rounded-sm bg-paper/10 px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.14em]",
							children: copy.ampiBadge[lang]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-sm leading-relaxed text-paper/80",
							children: agent.bio[lang]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm text-paper/70",
							children: agent.markets[lang]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 font-display text-2xl tracking-wide",
							children: agent.phoneDisplay
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-paper/70",
							children: agent.email
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-col gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "whatsapp",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: whatsappLink(greeting),
									target: "_blank",
									rel: "noreferrer",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsappIcon, { className: "size-4 fill-current" }), "WhatsApp"]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "invert",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `tel:+${agent.phoneDigits}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }), copy.call[lang]]
								})
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg bg-paper p-5 shadow-[var(--shadow-border)] md:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl tracking-wide text-navy",
							children: copy.askAbout[lang]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 mb-6 text-sm text-muted",
							children: copy.formWhen[lang]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactForm, {})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapEmbed, {
					lat: 20.6296,
					lng: -87.0739,
					title: "Riviera Maya"
				})
			})
		]
	});
}
//#endregion
export { ContactPage as component };
