import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { a as cn } from "./router-DfBzAlA4.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/button-CeqPbGQJ.js
var import_jsx_runtime = require_jsx_runtime();
var buttonVariants = cva("inline-flex items-center justify-center gap-2 font-medium transition-[transform,background-color,color,box-shadow,opacity] duration-150 ease-out active:not-disabled:scale-[0.96] disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-navy", {
	variants: {
		variant: {
			primary: "bg-navy text-paper hover:bg-navy-mid shadow-[var(--shadow-border)]",
			invert: "bg-paper text-navy hover:bg-paper-deep",
			outline: "bg-transparent text-navy ring-1 ring-navy/20 hover:bg-navy/5",
			ghost: "bg-transparent text-paper hover:bg-paper/10",
			whatsapp: "bg-whatsapp text-whatsapp-fg hover:brightness-110"
		},
		size: {
			sm: "h-10 px-3.5 text-sm rounded-sm",
			md: "h-11 px-5 text-sm rounded-md",
			lg: "h-12 px-6 text-base rounded-md"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
function Button({ className, variant, size, asChild, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
//#endregion
export { Button as t };
