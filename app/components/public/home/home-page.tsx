import * as React from "react";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import {
  ArrowRight,
  Blocks,
  BookOpen,
  Building2,
  Code2,
  Globe2,
  LockKeyhole,
  Network,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Footer } from "@/components/public/Footer";
import { Header } from "@/components/public/Header";
import { Button } from "@/components/ui/button";
import type { Locale } from "@/lib/locale";
import { cn } from "@/lib/utils";

interface HomePageProps {
  locale: string;
}

interface HomePageContentProps extends HomePageProps {
  t: (key: string) => string;
}

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  tone?: "default" | "muted" | "dark";
  centered?: boolean;
  children: React.ReactNode;
}

interface CardLinkProps {
  title: string;
  description: string;
  href?: string;
  cta?: string;
  icon?: React.ComponentType<{ className?: string }>;
  accent?: string;
  className?: string;
}

function localizeHref(locale: string, href: string) {
  if (href.startsWith("http")) {
    return href;
  }

  return `/${locale}${href.startsWith("/") ? href : `/${href}`}`;
}

function SectionEyebrow({ children, inverted = false }: { children: React.ReactNode; inverted?: boolean }) {
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

function Section({ id, eyebrow, title, description, tone = "default", centered = false, children }: SectionProps) {
  const dark = tone === "dark";

  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden py-24 sm:py-28 lg:py-32",
        tone === "muted" && "bg-zinc-50/80",
        dark && "bg-zinc-950 text-white",
      )}
    >
      {dark ? (
        <div
          aria-hidden={true}
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
      ) : null}
      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className={cn("max-w-4xl", centered && "mx-auto text-center")}>
          {eyebrow ? <SectionEyebrow inverted={dark}>{eyebrow}</SectionEyebrow> : null}
          <h2
            className={cn(
              "mt-6 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl",
              dark ? "text-white" : "text-zinc-950",
            )}
          >
            {title}
          </h2>
          {description ? (
            <p className={cn("mt-6 text-lg leading-8", dark ? "text-white/68" : "text-zinc-600")}>{description}</p>
          ) : null}
        </div>
        <div className="mt-14">{children}</div>
      </div>
    </section>
  );
}

function CardLink({ title, description, href, cta, icon: Icon, accent, className }: CardLinkProps) {
  const content = (
    <div
      className={cn(
        "group relative h-full overflow-hidden rounded-[2rem] border border-zinc-200/80 bg-white p-6 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.28)] transition duration-300",
        "hover:-translate-y-1 hover:border-zinc-300 hover:shadow-[0_24px_80px_-36px_rgba(15,23,42,0.22)]",
        className,
      )}
    >
      {accent ? <div aria-hidden={true} className={cn("absolute inset-x-0 top-0 h-1", accent)} /> : null}
      <div className="flex items-start justify-between gap-4">
        {Icon ? (
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-zinc-200 bg-zinc-50 text-zinc-700">
            <Icon className="h-5 w-5" />
          </span>
        ) : (
          <span />
        )}
        {href ? (
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-500 transition group-hover:border-zinc-300 group-hover:text-zinc-900">
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden={true} />
          </span>
        ) : null}
      </div>
      <h3 className="mt-8 text-xl font-semibold tracking-[-0.03em] text-zinc-950">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-zinc-600">{description}</p>
      {cta ? <span className="mt-7 inline-flex text-sm font-medium text-zinc-950">{cta}</span> : null}
    </div>
  );

  if (!href) {
    return content;
  }

  return <Link href={href}>{content}</Link>;
}

function WorldMapBackdrop() {
  return (
    <svg viewBox="0 0 1600 620" className="h-full w-full" fill="none" aria-hidden={true}>
      <defs>
        <linearGradient id="map-fill" x1="0%" x2="100%" y1="0%" y2="0%">
          <stop offset="0%" stopColor="rgba(24,24,27,0.2)" />
          <stop offset="100%" stopColor="rgba(24,24,27,0.08)" />
        </linearGradient>
        <radialGradient id="map-glow" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="rgba(59,130,246,0.12)" />
          <stop offset="100%" stopColor="rgba(59,130,246,0)" />
        </radialGradient>
      </defs>

      <rect width="1600" height="620" fill="url(#map-glow)" opacity="0.75" />

      <g opacity="0.9">
        <path
          d="M95 203C140 173 204 154 285 155C335 156 384 165 432 187C452 196 476 193 498 184C549 164 608 155 683 157C727 158 764 170 798 190C816 201 841 202 864 196C914 183 956 187 991 212C1020 233 1048 238 1086 231C1148 220 1212 223 1281 244C1328 258 1370 280 1415 312C1448 335 1487 354 1528 366L1528 432C1483 433 1445 425 1408 409C1361 390 1313 378 1258 376C1199 373 1146 388 1093 413C1060 428 1024 432 988 425C950 418 916 421 880 435C842 450 803 456 748 455C692 454 647 442 605 417C557 388 507 378 448 384C382 391 323 382 267 353C226 331 181 314 128 304L95 302V203Z"
          fill="url(#map-fill)"
        />
        <path
          d="M215 236C248 223 280 221 316 227C356 233 384 251 417 273C441 289 469 293 497 288C522 283 548 286 574 298C607 314 640 316 674 309C708 302 740 299 773 307C811 317 847 320 885 309C935 295 979 293 1019 313C1048 328 1080 334 1118 331C1168 327 1214 338 1260 364C1217 351 1176 350 1136 360C1098 370 1063 386 1026 402C991 417 955 420 918 412C875 402 838 403 799 416C741 436 686 437 632 411C579 386 529 375 471 382C418 388 368 380 320 354C282 333 249 307 216 277L215 236Z"
          fill="rgba(39,39,42,0.08)"
        />
      </g>

      <g opacity="0.3" stroke="rgba(24,24,27,0.2)" strokeWidth="1.25">
        <path d="M240 284C376 231 517 230 640 271C731 301 821 307 930 274C1061 235 1188 255 1340 337" />
        <path d="M264 348C403 403 516 415 646 390C772 365 885 328 1008 347C1113 363 1221 394 1317 432" />
      </g>

      <g fill="rgba(24,24,27,0.45)">
        {[
          [252, 286],
          [388, 244],
          [612, 285],
          [796, 302],
          [1008, 272],
          [1218, 320],
          [1324, 374],
        ].map(([cx, cy]) => (
          <g key={`${cx}-${cy}`}>
            <circle cx={cx} cy={cy} r="5.5" />
            <circle cx={cx} cy={cy} r="18" fill="rgba(59,130,246,0.08)" />
          </g>
        ))}
      </g>
    </svg>
  );
}

function OfficePreview({ t }: { t: (key: string) => string }) {
  const labels = ["mail", "meet", "chat", "sheets", "files", "calendar"] as const;

  return (
    <div className="relative overflow-hidden rounded-[2.25rem] border border-zinc-200 bg-white p-5 shadow-[0_32px_100px_-52px_rgba(15,23,42,0.3)]">
      <div
        aria-hidden={true}
        className="absolute inset-x-0 top-0 h-28 bg-[radial-gradient(circle_at_top_left,rgba(148,163,184,0.22),transparent_58%),linear-gradient(180deg,rgba(244,244,245,0.96),rgba(255,255,255,0))]"
      />
      <div className="relative grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[1.75rem] border border-zinc-200 bg-zinc-50/80 p-5">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">{t("officeFeatured.visual.mailLabel")}</div>
              <div className="mt-2 text-lg font-semibold text-zinc-950">{t("officeFeatured.visual.mailTitle")}</div>
            </div>
            <span className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-500">
              {t("officeFeatured.visual.mailState")}
            </span>
          </div>
          <div className="mt-5 space-y-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="rounded-2xl border border-zinc-200 bg-white px-4 py-3">
                <div className="flex items-center justify-between gap-3">
                  <div className="text-sm font-medium text-zinc-950">{t(`officeFeatured.visual.mailItems.${item}.title`)}</div>
                  <div className="h-2 w-2 rounded-full bg-zinc-300" />
                </div>
                <div className="mt-1 text-xs text-zinc-500">{t(`officeFeatured.visual.mailItems.${item}.meta`)}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-[1.75rem] border border-zinc-200 bg-zinc-950 p-5 text-white sm:col-span-2">
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium">{t("officeFeatured.visual.meetTitle")}</div>
              <div className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/55">
                {t("officeFeatured.visual.meetState")}
              </div>
            </div>
            <div className="mt-10 flex items-end justify-between gap-6">
              <div>
                <div className="text-3xl font-semibold tracking-[-0.04em]">{t("officeFeatured.visual.meetTime")}</div>
                <div className="mt-2 text-sm text-white/55">{t("officeFeatured.visual.meetMeta")}</div>
              </div>
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((item) => (
                  <span key={item} className="h-9 w-9 rounded-full border border-white/10 bg-white/8" />
                ))}
              </div>
            </div>
          </div>

          {labels.map((label) => (
            <div key={label} className="rounded-[1.5rem] border border-zinc-200 bg-white px-4 py-4">
              <div className="text-xs uppercase tracking-[0.18em] text-zinc-400">{t(`officeFeatured.visual.apps.${label}.label`)}</div>
              <div className="mt-2 text-base font-semibold text-zinc-950">{t(`officeFeatured.visual.apps.${label}.title`)}</div>
              <div className="mt-2 text-sm leading-6 text-zinc-500">{t(`officeFeatured.visual.apps.${label}.description`)}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function HomeHero({ locale, t }: HomePageContentProps) {
  return (
    <section className="relative overflow-hidden border-b border-zinc-200/80 bg-[linear-gradient(180deg,#ffffff_0%,#fafafa_100%)]">
      <div aria-hidden={true} className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-44 bg-[radial-gradient(circle_at_top,rgba(148,163,184,0.18),transparent_65%)]" />
        <div className="absolute inset-x-[-10%] top-[16%] h-[56%] opacity-95 sm:top-[18%] lg:inset-x-[-4%] lg:top-[19%] lg:h-[62%]">
          <WorldMapBackdrop />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.76),rgba(255,255,255,0.34)_30%,rgba(255,255,255,0.82)_100%)]" />
      </div>

      <div className="relative mx-auto flex min-h-[88vh] max-w-[1440px] items-center px-6 py-20 sm:py-24 lg:px-12 lg:py-28">
        <div className="max-w-4xl">
          <SectionEyebrow>{t("hero.eyebrow")}</SectionEyebrow>
          <h1 className="mt-7 max-w-5xl text-[clamp(3.4rem,7vw,7rem)] font-semibold leading-[0.92] tracking-[-0.06em] text-zinc-950">
            {t("hero.title")}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-600 sm:text-xl">{t("hero.description")}</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" className="h-14 rounded-full bg-zinc-950 px-8 text-sm font-medium text-white hover:bg-zinc-800">
              <Link href={localizeHref(locale, "/office")}>
                {t("hero.primaryCta")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-14 rounded-full border-zinc-300 bg-white/85 px-8 text-sm font-medium text-zinc-950">
              <Link href={localizeHref(locale, "/platform")}>{t("hero.secondaryCta")}</Link>
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            {["workspace", "platforms", "foundations"].map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/88 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-zinc-500 backdrop-blur"
              >
                <span className="h-2 w-2 rounded-full bg-zinc-400" />
                {t(`hero.signals.${item}`)}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ManifestoSection({ t }: { t: (key: string) => string }) {
  return (
    <Section title={t("manifesto.title")} description={t("manifesto.description")} centered>
      <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-zinc-200 bg-white px-8 py-12 text-center shadow-[0_24px_80px_-52px_rgba(15,23,42,0.25)] sm:px-12">
        <p className="text-[clamp(1.8rem,4vw,3.5rem)] font-semibold leading-[1.08] tracking-[-0.05em] text-zinc-950">
          {t("manifesto.statement")}
        </p>
      </div>
    </Section>
  );
}

function OfficeFeaturedSection({ locale, t }: HomePageContentProps) {
  return (
    <Section
      eyebrow={t("officeFeatured.eyebrow")}
      title={t("officeFeatured.title")}
      description={t("officeFeatured.description")}
      tone="muted"
    >
      <div className="grid gap-8 xl:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] xl:items-center">
        <div className="max-w-xl">
          <div className="space-y-6">
            {["summary", "modular", "governed"].map((item) => (
              <div key={item} className="rounded-[1.75rem] border border-zinc-200 bg-white px-6 py-5">
                <div className="text-sm font-semibold text-zinc-950">{t(`officeFeatured.points.${item}.title`)}</div>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{t(`officeFeatured.points.${item}.description`)}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Button asChild size="lg" variant="outline" className="h-14 rounded-full border-zinc-300 bg-white px-8 text-sm font-medium text-zinc-950">
              <Link href={localizeHref(locale, "/office")}>{t("officeFeatured.cta")}</Link>
            </Button>
          </div>
        </div>
        <OfficePreview t={t} />
      </div>
    </Section>
  );
}

function OfficeCapabilitiesSection({ t }: { t: (key: string) => string }) {
  return (
    <Section
      eyebrow={t("officeCapabilities.eyebrow")}
      title={t("officeCapabilities.title")}
      description={t("officeCapabilities.description")}
    >
      <div className="grid gap-5 md:grid-cols-2">
        {[
          { key: "communicate", icon: Globe2, accent: "bg-zinc-950" },
          { key: "create", icon: Blocks, accent: "bg-zinc-700" },
          { key: "organize", icon: Network, accent: "bg-slate-500" },
          { key: "secure", icon: ShieldCheck, accent: "bg-slate-700" },
        ].map((item) => (
          <CardLink
            key={item.key}
            title={t(`officeCapabilities.items.${item.key}.title`)}
            description={t(`officeCapabilities.items.${item.key}.description`)}
            icon={item.icon}
            accent={item.accent}
            className="min-h-[240px]"
          />
        ))}
      </div>
    </Section>
  );
}

function ModularDeploymentSection({ t }: { t: (key: string) => string }) {
  return (
    <Section
      eyebrow={t("modularDeployment.eyebrow")}
      title={t("modularDeployment.title")}
      description={t("modularDeployment.description")}
      tone="muted"
    >
      <div className="grid gap-5 lg:grid-cols-2">
        {["managed", "controlled"].map((item) => (
          <div key={item} className="rounded-[2rem] border border-zinc-200 bg-white p-7 shadow-[0_20px_60px_-45px_rgba(15,23,42,0.24)]">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">{t(`modularDeployment.options.${item}.eyebrow`)}</div>
            <div className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-zinc-950">{t(`modularDeployment.options.${item}.title`)}</div>
            <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-600">{t(`modularDeployment.options.${item}.description`)}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function PlatformsTransitionSection({ t }: { t: (key: string) => string }) {
  return (
    <Section
      eyebrow={t("platformsTransition.eyebrow")}
      title={t("platformsTransition.title")}
      description={t("platformsTransition.description")}
      tone="dark"
    >
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:items-end">
        <p className="max-w-2xl text-2xl font-medium leading-10 tracking-[-0.04em] text-white/86">
          {t("platformsTransition.statement")}
        </p>
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 text-sm leading-7 text-white/64">
          {t("platformsTransition.aside")}
        </div>
      </div>
    </Section>
  );
}

function PlatformsSection({ locale, t }: HomePageContentProps) {
  const platforms = [
    { key: "developer", icon: Code2, href: "/platform/developer", accent: "bg-zinc-950" },
    { key: "cloud", icon: Building2, href: "/platform/cloud", accent: "bg-zinc-700" },
    { key: "telecom", icon: Network, href: "/platform/telecom", accent: "bg-slate-600" },
    { key: "finance", icon: LockKeyhole, href: "/platform/finance", accent: "bg-slate-800" },
    { key: "intelligence", icon: Blocks, href: "/platform/intelligence", accent: "bg-zinc-500" },
    { key: "media", icon: Globe2, href: "/platform/media", accent: "bg-slate-500" },
  ];

  return (
    <Section eyebrow={t("platforms.eyebrow")} title={t("platforms.title")} description={t("platforms.description")}>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {platforms.map((platform) => (
          <CardLink
            key={platform.key}
            title={t(`platforms.items.${platform.key}.title`)}
            description={t(`platforms.items.${platform.key}.description`)}
            href={localizeHref(locale, platform.href)}
            cta={t("platforms.cta")}
            icon={platform.icon}
            accent={platform.accent}
            className="min-h-[258px]"
          />
        ))}
      </div>
    </Section>
  );
}

function EcosystemArchitectureSection({ t }: { t: (key: string) => string }) {
  return (
    <Section
      eyebrow={t("ecosystemArchitecture.eyebrow")}
      title={t("ecosystemArchitecture.title")}
      description={t("ecosystemArchitecture.description")}
      tone="muted"
    >
      <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-zinc-200 bg-white p-6 shadow-[0_30px_100px_-60px_rgba(15,23,42,0.28)] sm:p-8">
        <div className="grid gap-5">
          {["organizations", "office", "platforms", "foundations"].map((item, index) => (
            <React.Fragment key={item}>
              <div className="rounded-[1.75rem] border border-zinc-200 bg-zinc-50/75 p-6">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                  {t(`ecosystemArchitecture.layers.${item}.eyebrow`)}
                </div>
                <div className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-zinc-950">
                  {t(`ecosystemArchitecture.layers.${item}.title`)}
                </div>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{t(`ecosystemArchitecture.layers.${item}.description`)}</p>
              </div>
              {index < 3 ? (
                <div className="flex justify-center" aria-hidden={true}>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-400">
                    <ArrowRight className="h-4 w-4 rotate-90" />
                  </div>
                </div>
              ) : null}
            </React.Fragment>
          ))}
        </div>
      </div>
    </Section>
  );
}

function OpenTechnologySection({ t }: { t: (key: string) => string }) {
  return (
    <Section eyebrow={t("openTechnology.eyebrow")} title={t("openTechnology.title")} description={t("openTechnology.description")}>
      <div className="grid gap-5 lg:grid-cols-3">
        {[
          { key: "modular", icon: Blocks },
          { key: "control", icon: ShieldCheck },
          { key: "europe", icon: Globe2 },
        ].map((item) => (
          <CardLink
            key={item.key}
            title={t(`openTechnology.items.${item.key}.title`)}
            description={t(`openTechnology.items.${item.key}.description`)}
            icon={item.icon}
            className="min-h-[230px]"
          />
        ))}
      </div>
    </Section>
  );
}

function SolutionsSection({ locale, t }: HomePageContentProps) {
  return (
    <Section eyebrow={t("solutionsShowcase.eyebrow")} title={t("solutionsShowcase.title")} description={t("solutionsShowcase.description")} tone="muted">
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {[
          { key: "workplace", icon: Users },
          { key: "infrastructure", icon: Network },
          { key: "financialServices", icon: LockKeyhole },
          { key: "publicSector", icon: Building2 },
        ].map((item) => (
          <CardLink
            key={item.key}
            title={t(`solutionsShowcase.items.${item.key}.title`)}
            description={t(`solutionsShowcase.items.${item.key}.description`)}
            icon={item.icon}
            className="min-h-[220px]"
          />
        ))}
      </div>
      <div className="mt-10">
        <Button asChild variant="outline" className="rounded-full border-zinc-300 bg-white px-6 text-zinc-950">
          <Link href={localizeHref(locale, "/solutions")}>{t("solutionsShowcase.cta")}</Link>
        </Button>
      </div>
    </Section>
  );
}

function DevelopersSection({ locale, t }: HomePageContentProps) {
  return (
    <Section eyebrow={t("developersShowcase.eyebrow")} title={t("developersShowcase.title")} description={t("developersShowcase.description")} tone="dark">
      <div className="grid gap-6 xl:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
        <div className="rounded-[2.25rem] border border-white/10 bg-white/[0.04] p-7">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/46">{t("developersShowcase.panel.eyebrow")}</div>
          <div className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white">{t("developersShowcase.panel.title")}</div>
          <p className="mt-4 max-w-xl text-sm leading-7 text-white/66">{t("developersShowcase.panel.description")}</p>
          <div className="mt-8 grid gap-3 font-mono text-sm text-white/72">
            {["documentation", "apis", "sdks", "giteria"].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4">
                {t(`developersShowcase.panel.entries.${item}`)}
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Button asChild variant="secondary" className="rounded-full bg-white px-6 text-zinc-950 hover:bg-zinc-100">
              <Link href={localizeHref(locale, "/developers")}>{t("developersShowcase.cta")}</Link>
            </Button>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {[
            { key: "documentation", icon: BookOpen },
            { key: "apis", icon: Network },
            { key: "sdks", icon: Code2 },
            { key: "openSource", icon: Blocks },
            { key: "giteria", icon: Globe2 },
          ].map((item) => (
            <CardLink
              key={item.key}
              title={t(`developersShowcase.items.${item.key}.title`)}
              description={t(`developersShowcase.items.${item.key}.description`)}
              icon={item.icon}
              className="border-white/10 bg-white/[0.04] shadow-none [&_h3]:text-white [&_p]:text-white/64"
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

function TrustSection({ locale, t }: HomePageContentProps) {
  return (
    <Section eyebrow={t("trustSecurity.eyebrow")} title={t("trustSecurity.title")} description={t("trustSecurity.description")}>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {["identity", "design", "transparency", "disclosure"].map((item) => (
          <div key={item} className="rounded-[1.85rem] border border-zinc-200 bg-white p-6 shadow-[0_18px_60px_-48px_rgba(15,23,42,0.22)]">
            <div className="text-base font-semibold text-zinc-950">{t(`trustSecurity.items.${item}.title`)}</div>
            <p className="mt-4 text-sm leading-7 text-zinc-600">{t(`trustSecurity.items.${item}.description`)}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <Button asChild variant="outline" className="rounded-full border-zinc-300 bg-white px-6 text-zinc-950">
          <Link href={localizeHref(locale, "/security")}>{t("trustSecurity.securityCta")}</Link>
        </Button>
        <Button asChild variant="outline" className="rounded-full border-zinc-300 bg-white px-6 text-zinc-950">
          <Link href={localizeHref(locale, "/security/trust")}>{t("trustSecurity.trustCta")}</Link>
        </Button>
      </div>
    </Section>
  );
}

function TransparencySection({ t }: { t: (key: string) => string }) {
  return (
    <Section eyebrow={t("transparency.eyebrow")} title={t("transparency.title")} description={t("transparency.description")} tone="muted">
      <div className="grid gap-5 lg:grid-cols-3">
        {["development", "exploring", "vision"].map((item) => (
          <div key={item} className="rounded-[2rem] border border-zinc-200 bg-white p-7">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">{t(`transparency.items.${item}.eyebrow`)}</div>
            <div className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-zinc-950">{t(`transparency.items.${item}.title`)}</div>
            <p className="mt-4 text-sm leading-7 text-zinc-600">{t(`transparency.items.${item}.description`)}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function CompanySection({ locale, t }: HomePageContentProps) {
  return (
    <Section eyebrow={t("company.eyebrow")} title={t("company.title")} description={t("company.description")}>
      <div className="grid gap-5 md:grid-cols-3">
        <CardLink
          title={t("company.items.company.title")}
          description={t("company.items.company.description")}
          href={localizeHref(locale, "/company/about")}
          cta={t("company.items.company.cta")}
          icon={Building2}
          className="min-h-[250px]"
        />
        <CardLink
          title={t("company.items.partners.title")}
          description={t("company.items.partners.description")}
          icon={Users}
          className="min-h-[250px]"
        />
        <CardLink
          title={t("company.items.careers.title")}
          description={t("company.items.careers.description")}
          href={localizeHref(locale, "/company/careers")}
          cta={t("company.items.careers.cta")}
          icon={Code2}
          className="min-h-[250px]"
        />
      </div>
    </Section>
  );
}

function FinalCtaSection({ locale, t }: HomePageContentProps) {
  return (
    <section className="relative overflow-hidden border-t border-zinc-200 py-24 sm:py-28">
      <div aria-hidden={true} className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(9,9,11,1)_0%,rgba(24,24,27,0.98)_100%)]" />
      <div
        aria-hidden={true}
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="rounded-[2.6rem] border border-white/10 bg-white/[0.03] px-8 py-10 shadow-[0_40px_120px_-80px_rgba(0,0,0,0.6)] sm:px-10 lg:px-14 lg:py-14">
          <SectionEyebrow inverted>{t("finalCta.eyebrow")}</SectionEyebrow>
          <h2 className="mt-6 max-w-4xl text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
            {t("finalCta.title")}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68">{t("finalCta.description")}</p>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              { key: "organizations", href: "/office", icon: Building2 },
              { key: "builders", href: "/platform", icon: Blocks },
              { key: "developers", href: "/developers", icon: Code2 },
            ].map((item) => (
              <Link
                key={item.key}
                href={localizeHref(locale, item.href)}
                className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-white/88">
                  <item.icon className="h-5 w-5" />
                </span>
                <div className="mt-8 text-sm font-medium uppercase tracking-[0.18em] text-white/46">
                  {t(`finalCta.items.${item.key}.eyebrow`)}
                </div>
                <div className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white">
                  {t(`finalCta.items.${item.key}.title`)}
                </div>
                <p className="mt-4 text-sm leading-7 text-white/64">{t(`finalCta.items.${item.key}.description`)}</p>
                <span className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-white">
                  {t(`finalCta.items.${item.key}.cta`)}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export async function HomePage({ locale }: HomePageProps) {
  const translate = await getTranslations({ locale, namespace: "Public.home.page" });
  const t = (key: string) => translate(key);

  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-950">
      <Header locale={locale as Locale} />
      <main className="flex-1 overflow-x-hidden">
        <HomeHero locale={locale} t={t} />
        <ManifestoSection t={t} />
        <OfficeFeaturedSection locale={locale} t={t} />
        <OfficeCapabilitiesSection t={t} />
        <ModularDeploymentSection t={t} />
        <PlatformsTransitionSection t={t} />
        <PlatformsSection locale={locale} t={t} />
        <EcosystemArchitectureSection t={t} />
        <OpenTechnologySection t={t} />
        <SolutionsSection locale={locale} t={t} />
        <DevelopersSection locale={locale} t={t} />
        <TrustSection locale={locale} t={t} />
        <TransparencySection t={t} />
        <CompanySection locale={locale} t={t} />
        <FinalCtaSection locale={locale} t={t} />
      </main>
      <Footer locale={locale as Locale} />
    </div>
  );
}
