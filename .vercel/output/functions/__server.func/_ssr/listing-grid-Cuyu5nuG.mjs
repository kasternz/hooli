import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Maximize2, c as ChevronDown, d as Bath, l as Car, u as BedDouble } from "../_libs/lucide-react.mjs";
import { a as cn, o as useLang, s as copy, u as areaName } from "./router-DfBzAlA4.mjs";
import { a as formatM2, f as statusLabel, o as formatPrice, p as typeLabel, t as bathTotal } from "./format-D3JgkcQL.mjs";
import { n as amenityLabel, r as roomLabel, t as Badge } from "./badge-D0HW4Yem.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/listing-grid-Cuyu5nuG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ListingCard({ listing }) {
	const { lang } = useLang();
	const [open, setOpen] = (0, import_react.useState)(false);
	const hero = listing.images[0];
	const baths = bathTotal(listing);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "group flex flex-col overflow-hidden rounded-lg bg-paper shadow-[var(--shadow-border)] transition-[box-shadow,transform] duration-200 ease-out hover:shadow-[var(--shadow-border-hover)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/listings/$slug",
			params: { slug: listing.slug },
			className: "relative block aspect-[16/10] overflow-hidden bg-navy-mid",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: hero,
					alt: listing.title[lang],
					className: "size-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute left-3 top-3 flex flex-wrap gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						tone: "paper",
						children: statusLabel(listing.status, lang)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: typeLabel(listing.type, lang) })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute bottom-3 right-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
						tone: "paper",
						children: [
							listing.images.length,
							" ",
							copy.photoOf[lang]
						]
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs font-semibold uppercase tracking-[0.14em] text-muted",
					children: [
						listing.neighborhood[lang],
						" · ",
						areaName(listing.area, lang)
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/listings/$slug",
					params: { slug: listing.slug },
					className: "mt-1 font-display text-2xl tracking-wide text-navy",
					children: listing.title[lang]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 line-clamp-2 text-sm text-muted",
					children: listing.subtitle[lang]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 font-display text-[1.65rem] tabular-nums tracking-wide text-navy",
					children: formatPrice(listing, lang)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-3 grid grid-cols-4 gap-2 border-t border-line pt-3 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spec, {
							icon: Maximize2,
							value: formatM2(listing.sizeM2, lang)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spec, {
							icon: BedDouble,
							value: `${listing.bedrooms} ${copy.beds[lang]}`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spec, {
							icon: Bath,
							value: `${baths} ${copy.baths[lang]}`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spec, {
							icon: Car,
							value: `${listing.parking} ${copy.parking[lang]}`
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						"aria-expanded": open,
						onClick: () => setOpen((v) => !v),
						className: "flex h-11 w-full items-center justify-between text-left text-sm font-medium text-navy",
						children: [copy.includes[lang], /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("size-4 transition-transform duration-200", open && "rotate-180") })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: cn("grid transition-[grid-template-rows] duration-200 ease-out", open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facilities, { listing })
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/listings/$slug",
					params: { slug: listing.slug },
					className: "mt-3 inline-flex h-11 items-center justify-center rounded-md bg-navy text-sm font-medium text-paper transition-transform duration-150 active:scale-[0.96]",
					children: copy.viewListing[lang]
				})
			]
		})]
	});
}
function Spec({ icon: Icon, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center gap-1",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
			className: "size-4 text-navy",
			strokeWidth: 1.75
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-[11px] font-medium leading-tight text-navy",
			children: value
		})]
	});
}
function Facilities({ listing }) {
	const { lang } = useLang();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3 pb-2 text-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[11px] font-semibold uppercase tracking-[0.14em] text-muted",
			children: copy.roomsLabel[lang]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-1.5 flex flex-wrap gap-1.5",
			children: listing.rooms.map((room) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "rounded-sm bg-paper-deep px-2 py-1 text-xs text-navy",
				children: [
					room.count,
					" ",
					roomLabel(room.key, lang)
				]
			}, room.key))
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[11px] font-semibold uppercase tracking-[0.14em] text-muted",
			children: copy.commonAreas[lang]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-1.5 flex flex-wrap gap-1.5",
			children: listing.commonAreas.map((key) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
				className: "rounded-sm bg-paper-deep px-2 py-1 text-xs text-navy",
				children: amenityLabel(key, lang)
			}, key))
		})] })]
	});
}
function ListingGrid({ items }) {
	const { lang } = useLang();
	if (items.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "rounded-lg bg-paper-deep px-5 py-10 text-center text-muted",
		children: copy.empty[lang]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-6 sm:grid-cols-2 xl:grid-cols-3",
		children: items.map((listing) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListingCard, { listing }, listing.id))
	});
}
//#endregion
export { ListingGrid as t };
