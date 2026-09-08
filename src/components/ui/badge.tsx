import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function Badge({
  className,
  tone = "navy",
  ...props
}: HTMLAttributes<HTMLSpanElement> & { tone?: "navy" | "paper" | "line" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm px-2 py-0.5 text-[11px] font-semibold uppercase tracking-[0.14em]",
        tone === "navy" && "bg-navy text-paper",
        tone === "paper" && "bg-paper/90 text-navy",
        tone === "line" && "bg-paper-deep text-navy",
        className,
      )}
      {...props}
    />
  );
}
