import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as useLang, s as copy } from "./router-DfBzAlA4.mjs";
import { r as developmentListings } from "./format-D3JgkcQL.mjs";
import { t as ListingGrid } from "./listing-grid-Cuyu5nuG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/developments-jdosbnBH.js
var import_jsx_runtime = require_jsx_runtime();
function DevelopmentsPage() {
	const { lang } = useLang();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold uppercase tracking-[0.22em] text-muted",
				children: "Hooli Real Estate"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl tracking-wide text-navy md:text-5xl",
				children: copy.developmentsTitle[lang]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-2xl text-muted",
				children: copy.developmentsLead[lang]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListingGrid, { items: developmentListings() })
			})
		]
	});
}
//#endregion
export { DevelopmentsPage as component };
