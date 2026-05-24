import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CompanyEyebrow } from "./company-eyebrow";

interface CompanyHeroAction {
  label: string;
  href: string;
  variant?: "default" | "outline";
}

interface CompanyHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  actions?: CompanyHeroAction[];
  visual?: React.ReactNode;
  centered?: boolean;
}

export function CompanyHero({ eyebrow, title, description, actions, visual, centered = false }: CompanyHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-zinc-200/80 bg-white pt-32 sm:pt-36">
      <div
        aria-hidden={true}
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at top left, rgba(15,23,42,0.06), transparent 30%), radial-gradient(circle at 85% 20%, rgba(100,116,139,0.1), transparent 28%)",
        }}
      />
      <div className="relative mx-auto max-w-360 px-6 pb-16 sm:pb-20 lg:px-12 lg:pb-24">
        <div className={cn(centered ? "mx-auto max-w-4xl text-center" : "grid gap-12 xl:grid-cols-[minmax(0,1.05fr)_minmax(440px,0.95fr)] xl:items-center")}>
          <div className={cn(centered && "mx-auto")}>
            <CompanyEyebrow>{eyebrow}</CompanyEyebrow>
            <h1 className="mt-6 max-w-5xl text-[clamp(3rem,7vw,5.8rem)] font-semibold leading-[0.94] tracking-[-0.05em] text-zinc-950">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">{description}</p>
            {actions?.length ? (
              <div className={cn("mt-8 flex flex-col gap-3 sm:flex-row", centered && "justify-center")}>
                {actions.map((action, index) => (
                  <Button
                    key={`${action.href}-${action.label}`}
                    asChild
                    size="lg"
                    variant={action.variant ?? (index === 0 ? "default" : "outline")}
                    className="h-13 rounded-full px-7 text-sm font-medium"
                  >
                    <Link href={action.href}>
                      {action.label}
                      {index === 0 ? <ArrowRight className="ml-2 h-4 w-4" aria-hidden={true} /> : null}
                    </Link>
                  </Button>
                ))}
              </div>
            ) : null}
          </div>
          {visual ? <div className={cn(centered && "mx-auto mt-4 w-full max-w-4xl")}>{visual}</div> : null}
        </div>
      </div>
    </section>
  );
}
