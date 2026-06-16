import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold tracking-[0.18em] uppercase transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)]",
  {
    variants: {
      variant: {
        default:
          "bg-[color:var(--primary)] px-6 py-3 text-[color:var(--primary-foreground)] shadow-[0_18px_50px_rgba(21,61,114,0.18)] hover:-translate-y-0.5 hover:bg-[color:var(--primary-soft)]",
        secondary:
          "border border-[color:var(--border)] bg-white/80 px-6 py-3 text-[color:var(--foreground)] hover:-translate-y-0.5 hover:border-[color:var(--primary)] hover:bg-[color:var(--secondary)]",
        ghost:
          "px-4 py-2 text-[color:var(--muted-foreground)] hover:text-[color:var(--foreground)]",
      },
      size: {
        default: "h-12",
        sm: "h-10 px-4 text-xs",
        lg: "h-14 px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? "span" : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
