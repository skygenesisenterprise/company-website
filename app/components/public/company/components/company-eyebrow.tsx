import * as React from "react";
import { cn } from "@/lib/utils";

interface CompanyEyebrowProps {
  children: React.ReactNode;
  inverted?: boolean;
}

export function CompanyEyebrow({ children, inverted = false }: CompanyEyebrowProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.26em]",
        inverted ? "text-white/60" : "text-zinc-500",
      )}
    >
      <span className={cn("h-px w-10", inverted ? "bg-white/20" : "bg-zinc-300")} />
      {children}
    </span>
  );
}
