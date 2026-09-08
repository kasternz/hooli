import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as cn, d as areas, o as useLang, r as Route$1, s as copy } from "./router-DfBzAlA4.mjs";
import { l as listings, n as condoTypes, s as houseTypes } from "./format-D3JgkcQL.mjs";
import { t as ListingGrid } from "./listing-grid-Cuyu5nuG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/listings-DnwDAgwy.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function matchesType(type, filter) {
	if (filter === "all") return true;
	if (filter === "houses") return houseTypes.includes(type);
	if (filter === "condos") return condoTypes.includes(type);
	return type === "development";
}
function AreaFilter({ area, onArea, typeFilter, onType, showTypes = true }) {
	const { lang } = useLang();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChipRow, { children: [
			"all",
			"cancun",
			"playa-del-carmen",
			"tulum",
			"puerto-morelos",
			"puerto-aventuras"
		].map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
			active: area === id,
			onClick: () => onArea(id),
			label: id === "all" ? copy.filterAll[lang] : areas[id][lang]
		}, id)) }), showTypes && onType && typeFilter ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChipRow, { children: [
			["all", copy.filterAll[lang]],
			["houses", copy.filterHouses[lang]],
			["condos", copy.filterCondos[lang]],
			["developments", copy.filterDevelopments[lang]]
		].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
			active: typeFilter === id,
			onClick: () => onType(id),
			label
		}, id)) }) : null]
	});
}
function ChipRow({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
		children
	});
}
function Chip({ active, onClick, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: cn("h-10 shrink-0 rounded-full px-4 text-sm font-medium transition-colors duration-150", active ? "bg-navy text-paper" : "bg-paper-deep text-navy hover:bg-navy/10"),
		children: label
	});
}
function ListingsPage() {
	const { lang } = useLang();
	const { area: areaFromUrl } = Route$1.useSearch();
	const [area, setArea] = (0, import_react.useState)(areaFromUrl ?? "all");
	const [typeFilter, setTypeFilter] = (0, import_react.useState)("all");
	const items = listings.filter((item) => {
		if (area !== "all" && item.area !== area) return false;
		return matchesType(item.type, typeFilter);
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold uppercase tracking-[0.22em] text-muted",
				children: "Hooli Real Estate"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl tracking-wide text-navy md:text-5xl",
				children: copy.allListings[lang]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-2xl text-muted",
				children: copy.heroLead[lang]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AreaFilter, {
					area,
					onArea: setArea,
					typeFilter,
					onType: setTypeFilter
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListingGrid, { items })
			})
		]
	});
}
//#endregion
export { ListingsPage as component };
