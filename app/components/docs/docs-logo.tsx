import * as React from "react";

export function DocsLogo(props: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      {...props}
      className="flex size-7 items-center justify-center rounded-md border border-border bg-card text-[11px] font-semibold text-primary shadow-xs"
    >
      SGE
    </div>
  );
}
