import * as React from "react";

import { cn } from "@/lib/utils";

function Badge({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="badge"
      className={cn(
        "inline-flex items-center rounded-full border border-[color:var(--border-strong)] bg-[color:var(--secondary)] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[color:var(--primary)]",
        className,
      )}
      {...props}
    />
  );
}

export { Badge };
