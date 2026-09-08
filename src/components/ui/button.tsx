import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium transition-[transform,background-color,color,box-shadow,opacity] duration-150 ease-out active:not-disabled:scale-[0.96] disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-navy",
  {
    variants: {
      variant: {
        primary:
          "bg-navy text-paper hover:bg-navy-mid shadow-[var(--shadow-border)]",
        invert:
          "bg-paper text-navy hover:bg-paper-deep",
        outline:
          "bg-transparent text-navy ring-1 ring-navy/20 hover:bg-navy/5",
        ghost: "bg-transparent text-paper hover:bg-paper/10",
        whatsapp:
          "bg-whatsapp text-whatsapp-fg hover:brightness-110",
      },
      size: {
        sm: "h-10 px-3.5 text-sm rounded-sm",
        md: "h-11 px-5 text-sm rounded-md",
        lg: "h-12 px-6 text-base rounded-md",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type Props = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean };

export function Button({ className, variant, size, asChild, ...props }: Props) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
}
