import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as ArrowRight } from "../_libs/lucide-react.mjs";
import { d as areas, o as useLang, s as copy } from "./router-DfBzAlA4.mjs";
import { i as featuredListings } from "./format-D3JgkcQL.mjs";
import { t as Button } from "./button-CeqPbGQJ.mjs";
import { t as ListingGrid } from "./listing-grid-Cuyu5nuG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-8fCWS1cK.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const { lang } = useLang();
	const featured = featuredListings();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative isolate overflow-hidden bg-navy text-paper",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/hero/riviera-maya.jpg",
					alt: "",
					className: "absolute inset-0 size-full object-cover opacity-45 outline-none"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/55 to-navy" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto flex max-w-6xl flex-col gap-8 px-4 py-16 md:px-6 md:py-24 lg:py-28",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold uppercase tracking-[0.22em] text-paper/80",
							children: copy.heroEyebrow[lang]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "max-w-3xl font-display text-5xl tracking-wide md:text-7xl",
							children: copy.heroTitle[lang]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-xl text-base leading-relaxed text-paper/80 md:text-lg",
							children: copy.heroLead[lang]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-3 sm:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "invert",
								size: "lg",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/listings",
									children: [copy.ctaListings[lang], /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "lg",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									children: copy.ctaContact[lang]
								})
							})]
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-14 md:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-8 flex items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl tracking-wide text-navy md:text-4xl",
					children: copy.featured[lang]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/listings",
					className: "hidden text-sm font-medium text-navy underline-offset-4 hover:underline sm:inline",
					children: copy.allListings[lang]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListingGrid, { items: featured })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-navy text-paper",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4 py-14 md:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl tracking-wide md:text-4xl",
					children: copy.areasTitle[lang]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
					children: [
						"cancun",
						"playa-del-carmen",
						"tulum",
						"puerto-morelos",
						"puerto-aventuras"
					].map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/listings",
						search: { area: id },
						className: "rounded-lg bg-navy-mid p-5 ring-1 ring-paper/10 transition-colors duration-150 hover:bg-navy-soft",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-2xl tracking-wide",
							children: areas[id][lang]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-paper/70",
							children: areas[id].blurb[lang]
						})]
					}, id))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-6xl px-4 py-14 md:px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-6 rounded-xl bg-paper-deep p-8 md:flex-row md:items-center md:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl tracking-wide text-navy",
					children: copy.ctaContact[lang]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-lg text-sm text-muted",
					children: copy.contactLead[lang]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "lg",
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						children: copy.nav.contact[lang]
					})
				})]
			})
		})
	] });
}
//#endregion
export { Home as component };
