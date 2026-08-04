"use client";

import * as React from "react";
import {
  Blocks,
  Building2,
  Globe2,
  LockKeyhole,
  Network,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const ECOSYSTEM_SERVICES = [
  { key: "office", icon: Globe2, angle: 0 },
  { key: "ai", icon: Blocks, angle: 60 },
  { key: "cloud", icon: Building2, angle: 120 },
  { key: "identity", icon: ShieldCheck, angle: 180 },
  { key: "vault", icon: LockKeyhole, angle: 240 },
  { key: "bank", icon: Network, angle: 300 },
] as const;

export interface EcosystemStrings {
  title: string;
  description: string;
  cta: string;
  services: Record<string, string>;
}

function localizeHref(locale: string, href: string) {
  if (href.startsWith("http")) return href;
  return `/${locale}${href.startsWith("/") ? href : `/${href}`}`;
}

export function EcosystemVisualization({
  strings,
  locale,
}: {
  strings: EcosystemStrings;
  locale: string;
}) {
  const [hovered, setHovered] = React.useState<string | null>(null);
  const radius = 160;
  const centerX = 200;
  const centerY = 200;

  const positions = ECOSYSTEM_SERVICES.map((s) => {
    const rad = (s.angle * Math.PI) / 180;
    return {
      ...s,
      x: Math.round((centerX + radius * Math.cos(rad)) * 10000) / 10000,
      y: Math.round((centerY + radius * Math.sin(rad)) * 10000) / 10000,
    };
  });

  return (
    <div className="mx-auto max-w-4xl">
      <div className="rounded-xl border border-(--color-rule) bg-(--color-paper) p-6 sm:p-8">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-12">
          <div className="relative shrink-0">
            <svg
              viewBox="0 0 400 400"
              className="h-64 w-64 sm:h-80 sm:w-80 lg:h-96 lg:w-96"
              aria-hidden="true"
              suppressHydrationWarning
            >
              {positions.map((s) => (
                <line
                  key={`line-${s.key}`}
                  x1={centerX}
                  y1={centerY}
                  x2={s.x}
                  y2={s.y}
                  className={cn(
                    "transition-all duration-(--dur-short)",
                    hovered === s.key
                      ? "stroke-(--color-accent)"
                      : "stroke-(--color-rule)",
                  )}
                  strokeWidth={hovered === s.key ? 2 : 1}
                />
              ))}

              <circle
                cx={centerX}
                cy={centerY}
                r={36}
                className={cn(
                  "fill-(--color-ink) transition-all duration-(--dur-short)",
                  hovered && "fill-(--color-ink)/80",
                )}
              />
              <text
                x={centerX}
                y={centerY - 6}
                textAnchor="middle"
                className="fill-(--color-paper) text-[10px] font-semibold"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                SGE
              </text>
              <text
                x={centerX}
                y={centerY + 8}
                textAnchor="middle"
                className="fill-(--color-paper)/50 text-[7px]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Platform
              </text>

              {positions.map((s) => {
                const Icon = s.icon;
                const isHovered = hovered === s.key;
                return (
                  <g
                    key={s.key}
                    className="cursor-pointer"
                    onMouseEnter={() => setHovered(s.key)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <circle
                      cx={s.x}
                      cy={s.y}
                      r={28}
                      className={cn(
                        "transition-all duration-(--dur-short)",
                        isHovered
                          ? "fill-(--color-accent)"
                          : "fill-(--color-paper-2) stroke-(--color-rule)",
                      )}
                      strokeWidth={isHovered ? 0 : 1}
                    />
                    <foreignObject
                      x={s.x - 10}
                      y={s.y - 10}
                      width={20}
                      height={20}
                      className="pointer-events-none"
                    >
                      <Icon
                        className={cn(
                          "h-5 w-5 transition-colors duration-(--dur-short)",
                          isHovered
                            ? "text-white"
                            : "text-(--color-ink-3)",
                        )}
                      />
                    </foreignObject>
                    <text
                      x={s.x}
                      y={s.y + 42}
                      textAnchor="middle"
                      className={cn(
                        "text-[9px] font-medium transition-colors duration-(--dur-short)",
                        isHovered
                          ? "fill-(--color-accent)"
                          : "fill-(--color-ink-3)",
                      )}
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {strings.services[s.key]}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          <div className="flex-1 text-center lg:text-left">
            <div
              className="text-2xl font-medium tracking-[-0.03em] text-(--color-ink)"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {strings.title}
            </div>
            <p className="mt-4 text-sm leading-7 text-(--color-ink-3)">
              {strings.description}
            </p>
            <div className="mt-8">
              <Button
                asChild
                variant="secondary"
                className="rounded-full px-6"
              >
                <Link href={localizeHref(locale, "/platform")}>
                  {strings.cta}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
