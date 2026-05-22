import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type {
  PlatformCta,
  PlatformServiceStatus,
} from "@/lib/platform/platform-services";

export function localizeHref(locale: string, href: string) {
  if (href.startsWith("http")) {
    return href;
  }

  return `/${locale}${href.startsWith("/") ? href : `/${href}`}`;
}

interface PlatformHeroProps {
  locale: string;
  eyebrow: string;
  title: string;
  promise: string;
  description: string;
  status: PlatformServiceStatus;
  statusLabel: string;
  ctas: PlatformCta[];
  ctaLabels: [string, string];
  availabilityLabels: string[];
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
      <span className="h-px w-9 bg-foreground/15" />
      {children}
    </span>
  );
}

export function PlatformHero({
  locale,
  eyebrow,
  title,
  promise,
  description,
  statusLabel,
  ctas,
  ctaLabels,
  availabilityLabels,
}: PlatformHeroProps) {
  const signals = [statusLabel, ...availabilityLabels];

  return (
    <section className="relative overflow-hidden border-b border-border/70">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(57,76,140,0.18),transparent_38%),radial-gradient(circle_at_85%_18%,rgba(57,76,140,0.1),transparent_28%)]" />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(to right, color-mix(in oklch, var(--border) 65%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklch, var(--border) 65%, transparent) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
      </div>
      <div className="relative mx-auto max-w-[1400px] px-6 py-20 sm:py-24 lg:px-12 lg:py-28">
        <div className="relative max-w-3xl xl:max-w-4xl">
          <SectionEyebrow>{eyebrow}</SectionEyebrow>
          <h1 className="mt-6 max-w-4xl text-[clamp(3rem,6vw,5.4rem)] font-semibold leading-[0.96] tracking-[-0.04em] text-foreground">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            {description}
          </p>
          <div className="mt-6 inline-flex rounded-full border border-primary/15 bg-primary/8 px-4 py-2 text-sm font-medium text-primary">
            {promise}
          </div>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            {ctas.map((cta, index) => (
              <Button
                key={cta.href}
                asChild
                size="lg"
                variant={cta.variant === "primary" ? "default" : "outline"}
                className={cn(
                  "h-14 rounded-full px-8 text-sm font-medium",
                  cta.variant === "primary" && "shadow-lg shadow-primary/10"
                )}
              >
                <Link href={localizeHref(locale, cta.href)}>
                  {ctaLabels[index]}
                  {cta.variant === "primary" ? (
                    <ArrowRight className="h-4 w-4" />
                  ) : null}
                </Link>
              </Button>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {signals.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/80 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground backdrop-blur"
              >
                <span className="h-2 w-2 rounded-full bg-primary/80" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
