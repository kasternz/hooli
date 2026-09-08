import type {
  InputHTMLAttributes,
  LabelHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";
import { cn } from "@/lib/utils";

const field =
  "w-full rounded-md bg-paper px-3.5 text-ink ring-1 ring-navy/15 placeholder:text-muted transition-[box-shadow] duration-150 focus:ring-2 focus:ring-navy/40 focus:outline-none";

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn(field, "h-11", className)} {...props} />;
}

export function Textarea({
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(field, "min-h-28 py-3 resize-y", className)}
      {...props}
    />
  );
}

export function SelectField({
  className,
  children,
  ...props
}: InputHTMLAttributes<HTMLSelectElement>) {
  return (
    <select className={cn(field, "h-11", className)} {...props}>
      {children}
    </select>
  );
}

export function Label({ className, ...props }: LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={cn(
        "mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-muted",
        className,
      )}
      {...props}
    />
  );
}
