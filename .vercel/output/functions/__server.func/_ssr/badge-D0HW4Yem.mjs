import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as cn } from "./router-DfBzAlA4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/badge-D0HW4Yem.js
var import_jsx_runtime = require_jsx_runtime();
/** Amenity keys used in listings.ts — add a key here, then reference it on a listing. */
var amenities = {
	pool: {
		es: "Alberca",
		en: "Pool"
	},
	"infinity-pool": {
		es: "Alberca infinity",
		en: "Infinity pool"
	},
	"kids-pool": {
		es: "Alberca infantil",
		en: "Children's pool"
	},
	gym: {
		es: "Gimnasio",
		en: "Gym"
	},
	spa: {
		es: "Spa",
		en: "Spa"
	},
	sauna: {
		es: "Sauna",
		en: "Sauna"
	},
	steam: {
		es: "Vapor",
		en: "Steam room"
	},
	yoga: {
		es: "Sala de yoga",
		en: "Yoga studio"
	},
	coworking: {
		es: "Coworking",
		en: "Coworking"
	},
	rooftop: {
		es: "Roof top",
		en: "Rooftop"
	},
	bbq: {
		es: "Área de asador",
		en: "BBQ area"
	},
	"beach-club": {
		es: "Beach club",
		en: "Beach club"
	},
	"beach-access": {
		es: "Acceso a playa",
		en: "Beach access"
	},
	marina: {
		es: "Marina",
		en: "Marina"
	},
	dock: {
		es: "Muelle privado",
		en: "Private dock"
	},
	"security-24": {
		es: "Seguridad 24/7",
		en: "24/7 security"
	},
	concierge: {
		es: "Concierge",
		en: "Concierge"
	},
	elevator: {
		es: "Elevador",
		en: "Elevator"
	},
	generator: {
		es: "Planta de luz",
		en: "Generator"
	},
	cistern: {
		es: "Cisterna",
		en: "Cistern"
	},
	solar: {
		es: "Paneles solares",
		en: "Solar panels"
	},
	ac: {
		es: "Aire acondicionado",
		en: "Air conditioning"
	},
	furnished: {
		es: "Amueblado",
		en: "Furnished"
	},
	"pet-friendly": {
		es: "Pet friendly",
		en: "Pet friendly"
	},
	garden: {
		es: "Jardín",
		en: "Garden"
	},
	jacuzzi: {
		es: "Jacuzzi",
		en: "Jacuzzi"
	},
	"walk-in": {
		es: "Vestidor",
		en: "Walk-in closet"
	},
	"smart-home": {
		es: "Domótica",
		en: "Smart home"
	},
	tennis: {
		es: "Cancha de tenis",
		en: "Tennis court"
	},
	padel: {
		es: "Pádel",
		en: "Padel"
	},
	lobby: {
		es: "Lobby",
		en: "Lobby"
	},
	"covered-parking": {
		es: "Estacionamiento cubierto",
		en: "Covered parking"
	},
	storage: {
		es: "Bodega",
		en: "Storage"
	},
	laundry: {
		es: "Lavandería",
		en: "Laundry"
	},
	"ocean-view": {
		es: "Vista al mar",
		en: "Ocean view"
	},
	"jungle-view": {
		es: "Vista a la selva",
		en: "Jungle view"
	},
	"lagoon-view": {
		es: "Vista a laguna",
		en: "Lagoon view"
	},
	"golf-access": {
		es: "Acceso a golf",
		en: "Golf access"
	},
	restaurant: {
		es: "Restaurante",
		en: "Restaurant"
	},
	"kids-club": {
		es: "Kids club",
		en: "Kids club"
	},
	"bike-storage": {
		es: "Bicicletero",
		en: "Bike storage"
	},
	"maid-room": {
		es: "Cuarto de servicio",
		en: "Staff room"
	},
	terrace: {
		es: "Terraza",
		en: "Terrace"
	},
	balcony: {
		es: "Balcón",
		en: "Balcony"
	},
	"private-pool": {
		es: "Alberca privada",
		en: "Private pool"
	},
	cenote: {
		es: "Cenote en el desarrollo",
		en: "On-site cenote"
	},
	"fire-pit": {
		es: "Fogatero",
		en: "Fire pit"
	},
	wine: {
		es: "Cava",
		en: "Wine cellar"
	},
	office: {
		es: "Estudio / home office",
		en: "Home office"
	}
};
var roomLabels = {
	living: {
		es: "Sala",
		en: "Living room"
	},
	dining: {
		es: "Comedor",
		en: "Dining room"
	},
	kitchen: {
		es: "Cocina",
		en: "Kitchen"
	},
	family: {
		es: "Sala familiar",
		en: "Family room"
	},
	terrace: {
		es: "Terraza",
		en: "Terrace"
	},
	balcony: {
		es: "Balcón",
		en: "Balcony"
	},
	office: {
		es: "Estudio",
		en: "Office"
	},
	maid: {
		es: "Cuarto de servicio",
		en: "Staff room"
	},
	laundry: {
		es: "Cuarto de lavado",
		en: "Laundry room"
	},
	storage: {
		es: "Bodega",
		en: "Storage"
	},
	garage: {
		es: "Garage",
		en: "Garage"
	}
};
function amenityLabel(key, lang) {
	return amenities[key]?.[lang] ?? key;
}
function roomLabel(key, lang) {
	return roomLabels[key]?.[lang] ?? key;
}
function Badge({ className, tone = "navy", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex items-center rounded-sm px-2 py-0.5 text-[11px] font-semibold uppercase tracking-[0.14em]", tone === "navy" && "bg-navy text-paper", tone === "paper" && "bg-paper/90 text-navy", tone === "line" && "bg-paper-deep text-navy", className),
		...props
	});
}
//#endregion
export { amenityLabel as n, roomLabel as r, Badge as t };
