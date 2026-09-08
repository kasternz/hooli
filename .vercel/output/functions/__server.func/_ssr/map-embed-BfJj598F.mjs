import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as cn, c as agent, i as WhatsappIcon, l as whatsappLink, o as useLang, s as copy } from "./router-DfBzAlA4.mjs";
import { d as mapsOpenUrl, l as listings, u as mapsEmbedUrl } from "./format-D3JgkcQL.mjs";
import { t as Button } from "./button-CeqPbGQJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/map-embed-BfJj598F.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var field = "w-full rounded-md bg-paper px-3.5 text-ink ring-1 ring-navy/15 placeholder:text-muted transition-[box-shadow] duration-150 focus:ring-2 focus:ring-navy/40 focus:outline-none";
function Input({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		className: cn(field, "h-11", className),
		...props
	});
}
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn(field, "min-h-28 py-3 resize-y", className),
		...props
	});
}
function SelectField({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
		className: cn(field, "h-11", className),
		...props,
		children
	});
}
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: cn("mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-muted", className),
		...props
	});
}
var whenKeys = [
	"now",
	"m1",
	"m3",
	"m6",
	"y1",
	"explore"
];
function ContactForm({ listing }) {
	const { lang } = useLang();
	const [sent, setSent] = (0, import_react.useState)(false);
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [when, setWhen] = (0, import_react.useState)("explore");
	const [slug, setSlug] = (0, import_react.useState)(listing?.slug ?? "");
	const [message, setMessage] = (0, import_react.useState)("");
	const chosen = listings.find((item) => item.slug === slug);
	const whenLabel = copy.whenOptions[when][lang];
	const composed = (0, import_react.useMemo)(() => {
		const propertyLine = chosen ? lang === "es" ? `Propiedad: ${chosen.title.es} (${chosen.slug})` : `Listing: ${chosen.title.en} (${chosen.slug})` : lang === "es" ? "Propiedad: aún no elijo una" : "Listing: not chosen yet";
		const body = [
			lang === "es" ? `Nombre: ${name}` : `Name: ${name}`,
			lang === "es" ? `Correo: ${email}` : `Email: ${email}`,
			lang === "es" ? `Teléfono: ${phone}` : `Phone: ${phone}`,
			lang === "es" ? `¿Cuándo planea invertir?: ${whenLabel}` : `When planning to invest: ${whenLabel}`,
			propertyLine,
			"",
			message
		].join("\n");
		return {
			subject: lang === "es" ? `Consulta Hooli — ${chosen?.title.es ?? "general"}` : `Hooli enquiry — ${chosen?.title.en ?? "general"}`,
			body
		};
	}, [
		chosen,
		email,
		lang,
		message,
		name,
		phone,
		whenLabel
	]);
	function onEmail(e) {
		e.preventDefault();
		const href = `mailto:${agent.email}?subject=${encodeURIComponent(composed.subject)}&body=${encodeURIComponent(composed.body)}`;
		window.location.href = href;
		setSent(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: onEmail,
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				id: "name",
				label: copy.formName[lang],
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "name",
					required: true,
					autoComplete: "name",
					value: name,
					onChange: (e) => setName(e.target.value)
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					id: "email",
					label: copy.formEmail[lang],
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "email",
						type: "email",
						required: true,
						autoComplete: "email",
						value: email,
						onChange: (e) => setEmail(e.target.value)
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					id: "phone",
					label: copy.formPhone[lang],
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "phone",
						type: "tel",
						autoComplete: "tel",
						value: phone,
						onChange: (e) => setPhone(e.target.value)
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				id: "when",
				label: copy.formWhen[lang],
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
					id: "when",
					value: when,
					onChange: (e) => setWhen(e.target.value),
					children: whenKeys.map((key) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: key,
						children: copy.whenOptions[key][lang]
					}, key))
				})
			}),
			!listing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				id: "listing",
				label: copy.formListing[lang],
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectField, {
					id: "listing",
					value: slug,
					onChange: (e) => setSlug(e.target.value),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "",
						children: copy.formListingNone[lang]
					}), listings.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: item.slug,
						children: item.title[lang]
					}, item.slug))]
				})
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				id: "message",
				label: copy.formMessage[lang],
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					id: "message",
					required: true,
					value: message,
					onChange: (e) => setMessage(e.target.value)
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3 sm:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					className: "flex-1",
					children: copy.formSend[lang]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "whatsapp",
					className: "flex-1",
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: whatsappLink(composed.body),
						target: "_blank",
						rel: "noreferrer",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsappIcon, { className: "size-4 fill-current" }), copy.formWhatsapp[lang]]
					})
				})]
			}),
			sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: copy.formSent[lang]
			}) : null
		]
	});
}
function Field({ id, label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
		htmlFor: id,
		children: label
	}), children] });
}
function MapEmbed({ lat, lng, title }) {
	const { lang } = useLang();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-3 flex items-end justify-between gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-2xl tracking-wide text-navy",
			children: copy.location[lang]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: mapsOpenUrl(lat, lng),
			target: "_blank",
			rel: "noreferrer",
			className: "text-sm font-medium text-navy underline-offset-4 hover:underline",
			children: copy.openMaps[lang]
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "overflow-hidden rounded-lg bg-paper-deep shadow-[var(--shadow-border)]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
			title,
			src: mapsEmbedUrl(lat, lng, lang),
			className: "h-64 w-full border-0 md:h-80",
			loading: "lazy",
			referrerPolicy: "no-referrer-when-downgrade"
		})
	})] });
}
//#endregion
export { MapEmbed as n, ContactForm as t };
