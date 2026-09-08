import { i as __toESM } from "./_runtime.mjs";
import { n as require_react } from "./_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as require_jsx_runtime, v as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { c as ChevronDown, o as ChevronRight, p as ArrowLeft, r as Phone, s as ChevronLeft, t as X } from "./_libs/lucide-react.mjs";
import { a as cn, c as agent, i as WhatsappIcon, l as whatsappLink, n as Route, o as useLang, s as copy, u as areaName } from "./_ssr/router-DfBzAlA4.mjs";
import { a as formatM2, c as listingBySlug, f as statusLabel, o as formatPrice, p as typeLabel, t as bathTotal } from "./_ssr/format-D3JgkcQL.mjs";
import { t as Button } from "./_ssr/button-CeqPbGQJ.mjs";
import { n as MapEmbed, t as ContactForm } from "./_ssr/map-embed-BfJj598F.mjs";
import { n as amenityLabel, r as roomLabel, t as Badge } from "./_ssr/badge-D0HW4Yem.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-B4v2Zaq4.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AmenitiesPanel({ listing }) {
	const { lang } = useLang();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl tracking-wide text-navy",
				children: copy.details[lang]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fold, {
				title: copy.roomsLabel[lang],
				defaultOpen: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "grid grid-cols-2 gap-2 text-sm md:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: lang === "es" ? "Recámaras" : "Bedrooms",
							value: String(listing.bedrooms)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: lang === "es" ? "Baños" : "Bathrooms",
							value: String(bathTotal(listing))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: lang === "es" ? "Construcción" : "Interior",
							value: formatM2(listing.sizeM2, lang)
						}),
						listing.landM2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: lang === "es" ? "Terreno" : "Lot",
							value: formatM2(listing.landM2, lang)
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: lang === "es" ? "Estacionamiento" : "Parking",
							value: String(listing.parking)
						}),
						listing.floors ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: lang === "es" ? "Niveles" : "Floors",
							value: String(listing.floors)
						}) : null,
						listing.yearBuilt ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: lang === "es" ? "Año" : "Year",
							value: String(listing.yearBuilt)
						}) : null,
						listing.rooms.map((room) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: roomLabel(room.key, lang),
							value: String(room.count)
						}, room.key))
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fold, {
				title: copy.commonAreas[lang],
				defaultOpen: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "flex flex-wrap gap-2",
					children: listing.commonAreas.map((key) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "rounded-sm bg-paper-deep px-3 py-1.5 text-sm text-navy",
						children: amenityLabel(key, lang)
					}, key))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fold, {
				title: copy.facilities[lang],
				defaultOpen: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "flex flex-wrap gap-2",
					children: listing.amenities.map((key) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "rounded-sm bg-paper-deep px-3 py-1.5 text-sm text-navy",
						children: amenityLabel(key, lang)
					}, key))
				})
			})
		]
	});
}
function Fold({ title, defaultOpen = false, children }) {
	const [open, setOpen] = (0, import_react.useState)(defaultOpen);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "overflow-hidden rounded-md bg-paper shadow-[var(--shadow-border)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => setOpen((v) => !v),
			className: "flex h-12 w-full items-center justify-between px-4 text-left text-sm font-semibold uppercase tracking-[0.12em] text-navy",
			"aria-expanded": open,
			children: [title, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("size-4 transition-transform duration-200", open && "rotate-180") })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("grid transition-[grid-template-rows] duration-200 ease-out", open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "px-4 pb-4",
					children
				})
			})
		})]
	});
}
function Row({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: "flex items-baseline justify-between gap-2 border-b border-line py-1.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-muted",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-medium tabular-nums text-navy",
			children: value
		})]
	});
}
function Gallery({ images, alt }) {
	const { lang } = useLang();
	const [index, setIndex] = (0, import_react.useState)(0);
	const [lightbox, setLightbox] = (0, import_react.useState)(false);
	const current = images[index] ?? images[0];
	function go(delta) {
		setIndex((i) => (i + delta + images.length) % images.length);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative overflow-hidden rounded-lg bg-navy-mid",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setLightbox(true),
					className: "block w-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: current,
						alt: `${alt} — ${copy.photoOf[lang]} ${index + 1}`,
						className: "aspect-[16/10] w-full object-cover"
					})
				}),
				images.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavButton, {
					side: "left",
					onClick: () => go(-1)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavButton, {
					side: "right",
					onClick: () => go(1)
				})] }) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "absolute bottom-3 right-3 rounded-sm bg-navy/80 px-2 py-1 text-xs font-medium text-paper",
					children: [
						index + 1,
						" / ",
						images.length
					]
				})
			]
		}),
		images.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 flex gap-2 overflow-x-auto pb-1",
			children: images.map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setIndex(i),
				className: cn("h-16 w-24 shrink-0 overflow-hidden rounded-sm ring-2 ring-offset-2 ring-offset-paper transition-opacity duration-150", i === index ? "ring-navy" : "ring-transparent opacity-70 hover:opacity-100"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src,
					alt: "",
					className: "size-full object-cover"
				})
			}, src + i))
		}) : null,
		lightbox ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "fixed inset-0 z-50 flex items-center justify-center bg-navy/92 p-4",
			role: "dialog",
			"aria-modal": "true",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "absolute right-4 top-4 flex size-11 items-center justify-center text-paper",
					onClick: () => setLightbox(false),
					"aria-label": "Close",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-6" })
				}),
				images.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavButton, {
					side: "left",
					onClick: () => go(-1)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavButton, {
					side: "right",
					onClick: () => go(1)
				})] }) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: current,
					alt,
					className: "max-h-[86vh] max-w-full object-contain outline-none"
				})
			]
		}) : null
	] });
}
function NavButton({ side, onClick }) {
	const Icon = side === "left" ? ChevronLeft : ChevronRight;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick: (e) => {
			e.stopPropagation();
			onClick();
		},
		className: cn("absolute top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-navy/70 text-paper", side === "left" ? "left-3" : "right-3"),
		"aria-label": side === "left" ? "Previous" : "Next",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5" })
	});
}
function VideoEmbed({ videoId, title }) {
	const { lang } = useLang();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
		className: "mb-3 font-display text-2xl tracking-wide text-navy",
		children: copy.video[lang]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "overflow-hidden rounded-lg bg-navy shadow-[var(--shadow-border)]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
			title,
			src: `https://www.youtube-nocookie.com/embed/${videoId}`,
			className: "aspect-video w-full border-0",
			allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
			allowFullScreen: true
		})
	})] });
}
function ListingDetail() {
	const { slug } = Route.useParams();
	const { lang } = useLang();
	const listing = listingBySlug(slug);
	if (!listing) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-4 py-20 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-muted",
			children: copy.notFound[lang]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/listings",
			className: "mt-4 inline-block text-navy underline",
			children: copy.back[lang]
		})]
	});
	const waText = lang === "es" ? `Hola Nicolas, me interesa ${listing.title.es} (${listing.slug}).` : `Hi Nicolas, I am interested in ${listing.title.en} (${listing.slug}).`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-8 md:px-6 md:py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/listings",
				className: "inline-flex h-11 items-center gap-2 text-sm font-medium text-navy",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), copy.back[lang]]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex flex-wrap items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: statusLabel(listing.status, lang) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						tone: "line",
						children: typeLabel(listing.type, lang)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-sm text-muted",
						children: [
							listing.neighborhood[lang],
							" · ",
							areaName(listing.area, lang)
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex flex-col gap-2 md:flex-row md:items-end md:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-4xl tracking-wide text-navy md:text-5xl",
					children: listing.title[lang]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-2xl text-muted",
					children: listing.subtitle[lang]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-3xl tabular-nums tracking-wide text-navy md:text-4xl",
					children: formatPrice(listing, lang)
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: copy.m2,
						value: formatM2(listing.sizeM2, lang)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: copy.beds[lang],
						value: `${listing.bedrooms}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: copy.baths[lang],
						value: `${bathTotal(listing)}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: copy.parking[lang],
						value: `${listing.parking}`
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gallery, {
					images: listing.images,
					alt: listing.title[lang]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.6fr)_minmax(280px,0.9fr)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-base leading-relaxed text-ink",
							children: listing.description[lang]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl tracking-wide text-navy",
							children: copy.highlights[lang]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 space-y-2",
							children: listing.highlights[lang].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3 text-sm text-ink",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 size-1.5 shrink-0 rounded-full bg-navy" }), item]
							}, item))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AmenitiesPanel, { listing }),
						listing.videoId ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VideoEmbed, {
							videoId: listing.videoId,
							title: listing.title[lang]
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapEmbed, {
							lat: listing.lat,
							lng: listing.lng,
							title: listing.address
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
					className: "lg:sticky lg:top-24 lg:self-start",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg bg-paper p-5 shadow-[var(--shadow-border)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold uppercase tracking-[0.16em] text-muted",
								children: copy.askAbout[lang]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 font-medium text-navy",
								children: agent.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted",
								children: agent.role[lang]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-navy",
								children: copy.ampiBadge[lang]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 flex flex-col gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "whatsapp",
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: whatsappLink(waText),
										target: "_blank",
										rel: "noreferrer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsappIcon, { className: "size-4 fill-current" }), "WhatsApp"]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "outline",
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: `tel:+${agent.phoneDigits}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }), agent.phoneDisplay]
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 border-t border-line pt-5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactForm, { listing })
							})
						]
					})
				})]
			})
		]
	});
}
function Stat({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-md bg-paper-deep px-4 py-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-[11px] font-semibold uppercase tracking-[0.14em] text-muted",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "mt-1 font-display text-2xl tabular-nums tracking-wide text-navy",
			children: value
		})]
	});
}
//#endregion
export { ListingDetail as component };
