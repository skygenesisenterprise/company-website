"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Check, Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureShowcaseProps {
  locale: string;
  title: string;
  description: string;
  features: {
    ai: { title: string; description: string; details: string; preview: string };
    actions: { title: string; description: string; details: string; preview: string };
    security: { title: string; description: string; details: string; preview: string };
  };
}

function localizeHref(locale: string, href: string) {
  if (href.startsWith("http")) return href;
  return `/${locale}${href.startsWith("/") ? href : `/${href}`}`;
}

export function FeatureShowcase({ locale, title, description, features }: FeatureShowcaseProps) {
  const [activeFeature, setActiveFeature] = React.useState(0);

  const featureList = [
    { id: "ai" as const, ...features.ai },
    { id: "actions" as const, ...features.actions },
    { id: "security" as const, ...features.security },
  ];

  return (
    <section className="relative py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-360 px-6 lg:px-12">
        {/* Section intro */}
        <div className="mx-auto max-w-5xl">
          <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-medium tracking-[-0.04em] leading-[1.1]">
            {title}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-(--color-ink-3)">
            {description}
          </p>
        </div>

        {/* 2-column layout */}
        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1fr]">
          {/* Left: Visual */}
          <div className="rounded-xl border border-(--color-rule) bg-(--color-paper) p-8">
            <div className="aspect-video rounded-lg bg-(--color-paper-2) flex items-center justify-center">
              <div className="text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-(--color-accent-dim) text-(--color-accent)">
                  <Play className="h-6 w-6" />
                </div>
                <p className="mt-4 text-sm text-(--color-ink-3)">
                  {featureList[activeFeature].preview}
                </p>
              </div>
            </div>
          </div>

          {/* Right: Accordion */}
          <div className="space-y-4">
            {featureList.map((feature, index) => (
              <div
                key={feature.id}
                className={cn(
                  "rounded-lg border p-6 transition-all duration-(--dur-short) cursor-pointer",
                  activeFeature === index
                    ? "border-(--color-accent) bg-(--color-paper) shadow-card"
                    : "border-(--color-rule) bg-(--color-paper) hover:border-(--color-rule-strong)",
                )}
                onClick={() => setActiveFeature(index)}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-(--color-ink)">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-(--color-ink-3)">
                      {feature.description}
                    </p>
                  </div>
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-(--color-paper-2) text-(--color-ink-3)">
                    {activeFeature === index ? (
                      <Check className="h-3.5 w-3.5 text-(--color-accent)" />
                    ) : (
                      <span className="h-2 w-2 rounded-full bg-(--color-ink-3)" />
                    )}
                  </span>
                </div>
                {activeFeature === index && (
                  <div className="mt-4 pt-4 border-t border-(--color-rule)">
                    <p className="text-sm leading-6 text-(--color-ink-3)">
                      {feature.details}
                    </p>
                    <Link
                      href={localizeHref(locale, `/features/${feature.id}`)}
                      className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-(--color-accent) hover:underline"
                    >
                      Learn more
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}