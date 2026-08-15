import type * as React from "react";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import {
  ArrowRight,
  Building2,
  Cloud,
  Code2,
  Database,
  Globe,
  KeyRound,
  Layers,
  LockKeyhole,
  Radio,
  Rocket,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { Footer } from "@/components/public/Footer";
import { Header } from "@/components/public/Header";
import { Button } from "@/components/ui/button";
import type { Locale } from "@/lib/locale";
import { cn } from "@/lib/utils";

interface HomePageProps {
  locale: string;
}

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  tone?: "default" | "muted" | "dark";
  centered?: boolean;
  children: React.ReactNode;
}

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  accent?: string;
  dark?: boolean;
  compact?: boolean;
}

function localizeHref(locale: string, href: string) {
  return `/${locale}${href}`;
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
      <div className="relative mx-auto max-w-360 px-6 lg:px-12">
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

function FeatureCard({ title, description, icon: Icon, accent, dark = false, compact = false }: FeatureCardProps) {
  return (
    <div
      className={cn(
        "group relative h-full overflow-hidden rounded-4xl border p-6",
        dark ? "border-white/10 bg-white/4" : "border-zinc-200/80 bg-white shadow-[0_20px_60px_-40px_rgba(15,23,42,0.22)]",
        compact ? "p-5" : "p-6",
      )}
    >
      {accent ? <div aria-hidden={true} className={cn("absolute inset-x-0 top-0 h-1", accent)} /> : null}
      <span
        className={cn(
          "inline-flex h-12 w-12 items-center justify-center rounded-2xl border",
          dark ? "border-white/10 bg-white/6 text-white" : "border-zinc-200 bg-zinc-50 text-zinc-700",
        )}
      >
        <Icon className="h-5 w-5" />
      </span>
      <h3 className={cn("mt-6 text-xl font-semibold tracking-[-0.03em]", dark ? "text-white" : "text-zinc-950")}>{title}</h3>
      <p className={cn("mt-3 text-sm leading-7", dark ? "text-white/64" : "text-zinc-600")}>{description}</p>
    </div>
  );
}

function MetricPill({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em]",
        dark ? "border-white/10 bg-white/5 text-white/72" : "border-zinc-200 bg-zinc-50 text-zinc-600",
      )}
    >
      {children}
    </span>
  );
}

function HeroVisual() {
  return (
    <svg viewBox="0 0 1600 620" className="h-full w-full" fill="none" aria-hidden={true}>
      <defs>
        <linearGradient id="hero-fill" x1="0%" x2="100%" y1="0%" y2="0%">
          <stop offset="0%" stopColor="rgba(24,24,27,0.12)" />
          <stop offset="100%" stopColor="rgba(24,24,27,0.04)" />
        </linearGradient>
        <radialGradient id="hero-node" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(59,130,246,0.16)" />
          <stop offset="100%" stopColor="rgba(59,130,246,0)" />
        </radialGradient>
      </defs>

      <path
        d="M76 238C176 178 291 174 414 219C512 255 593 251 690 209C808 158 918 177 1016 263C1089 328 1160 331 1257 294C1352 258 1445 282 1532 357V446C1432 438 1341 407 1253 375C1153 338 1084 346 1002 396C904 456 787 452 678 383C587 326 506 318 398 348C286 379 177 357 76 291V238Z"
        fill="url(#hero-fill)"
      />
      <path
        d="M158 312C320 246 473 244 615 304C760 365 880 370 1012 315C1171 249 1304 278 1443 365"
        stroke="rgba(24,24,27,0.14)"
        strokeWidth="1.25"
      />
      <path
        d="M218 400C360 438 504 435 650 391C795 347 909 337 1048 377C1168 412 1285 424 1408 390"
        stroke="rgba(24,24,27,0.1)"
        strokeWidth="1.25"
      />
      <g fill="rgba(24,24,27,0.38)">
        {[
          [258, 322],
          [456, 286],
          [646, 326],
          [828, 276],
          [1018, 318],
          [1194, 348],
          [1392, 382],
        ].map(([cx, cy]) => (
          <g key={`${cx}-${cy}`}>
            <circle cx={cx} cy={cy} r="5.5" />
            <circle cx={cx} cy={cy} r="22" fill="url(#hero-node)" />
          </g>
        ))}
      </g>
    </svg>
  );
}

function OfficeVisual() {
  return (
    <div className="relative w-full max-w-lg" aria-hidden="true">
      <div className="overflow-hidden rounded-4xl border border-zinc-200 bg-white shadow-[0_32px_100px_-56px_rgba(15,23,42,0.3)]">
        <div className="flex items-center gap-2 border-b border-zinc-200 px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
          <span className="ml-3 flex-1 rounded-xl bg-zinc-100 py-1 text-center text-[10px] font-medium text-zinc-500">
            office.skygenesisenterprise.com
          </span>
        </div>
        <div className="grid min-h-[320px] grid-cols-[220px_1fr]">
          <aside className="space-y-1 border-r border-zinc-200 p-3">
            {[
              { icon: "✉", label: "Mail", active: true },
              { icon: "📅", label: "Calendar", active: false },
              { icon: "📹", label: "Meet", active: false },
              { icon: "💬", label: "Chat", active: false },
              { icon: "📄", label: "Files", active: false },
              { icon: "📊", label: "Sheets", active: false },
            ].map((item) => (
              <div
                key={item.label}
                className={cn(
                  "flex items-center gap-2.5 rounded-xl px-2.5 py-2 text-xs font-medium",
                  item.active ? "bg-zinc-950 text-white" : "text-zinc-500 hover:bg-zinc-100",
                )}
              >
                <span className="text-sm">{item.icon}</span>
                {item.label}
              </div>
            ))}
          </aside>
          <div className="space-y-3 p-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-zinc-950">
                Boîte de réception
              </span>
              <span className="rounded-full border border-zinc-200 bg-zinc-50 px-2 py-0.5 text-[10px] font-medium text-zinc-600">
                3 nouveaux
              </span>
            </div>
            {[
              {
                from: "Security Review",
                subject: "Compte rendu audit trimestriel",
                time: "09:12",
              },
              {
                from: "Weekly Planning",
                subject: "Objectifs Sprint 24",
                time: "08:45",
              },
              {
                from: "Shared Workspace",
                subject: "Document de cadrage technique",
                time: "Hier",
              },
            ].map((mail) => (
              <div
                key={mail.subject}
                className="flex items-start gap-3 rounded-2xl border border-zinc-200 bg-zinc-50/75 p-3"
              >
                <span className="mt-0.5 h-8 w-8 shrink-0 rounded-full bg-zinc-200" />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-zinc-950">
                      {mail.from}
                    </span>
                    <span className="text-[10px] text-zinc-500">
                      {mail.time}
                    </span>
                  </div>
                  <span className="mt-0.5 block truncate text-xs text-zinc-500">
                    {mail.subject}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CloudVisual() {
  return (
    <div className="mx-auto w-full max-w-md" aria-hidden="true">
      <div className="relative rounded-4xl border border-zinc-200 bg-white p-6 shadow-[0_32px_100px_-56px_rgba(15,23,42,0.3)]">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-zinc-200 bg-zinc-50">
            <Cloud className="h-5 w-5 text-zinc-700" />
          </div>
          <div>
            <div className="text-sm font-semibold text-zinc-950">
              Cloud Souverain
            </div>
            <div className="text-[10px] text-zinc-500">
              EU-WEST-1 · Actif
            </div>
          </div>
          <span className="ml-auto rounded-full border border-zinc-200 bg-zinc-50 px-2 py-0.5 text-[10px] font-medium text-zinc-600">
            Opérationnel
          </span>
        </div>
        <div className="mt-5 grid grid-cols-3 gap-3">
          {[
            { label: "Compute", value: "12 nœuds", icon: "⚡" },
            { label: "Stockage", value: "48 To", icon: "💾" },
            { label: "Réseau", value: "10 Gbps", icon: "🌐" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-zinc-200 bg-zinc-50/80 p-3 text-center"
            >
              <span className="text-lg">{item.icon}</span>
              <div className="mt-1 text-xs font-semibold text-zinc-950">
                {item.value}
              </div>
              <div className="text-[10px] text-zinc-500">
                {item.label}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 grid grid-cols-4 gap-2">
          {["Identity", "Vault", "Edge", "Status"].map((s) => (
            <div
              key={s}
              className="rounded-xl border border-zinc-200 bg-zinc-50/80 px-2 py-1.5 text-center text-[10px] font-medium text-zinc-500"
            >
              {s}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function IdentityVisual() {
  return (
    <div className="mx-auto w-full max-w-sm" aria-hidden="true">
      <div className="relative overflow-hidden rounded-4xl border border-zinc-200 bg-white p-6 shadow-[0_32px_100px_-56px_rgba(15,23,42,0.3)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.06),transparent_50%)]" />
        <div className="relative">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-zinc-50">
              <KeyRound className="h-5 w-5 text-zinc-700" />
            </div>
            <div>
              <div className="text-sm font-semibold text-zinc-950">
                Identité & Accès
              </div>
              <div className="text-[10px] text-zinc-500">
                Gouvernance centralisée
              </div>
            </div>
          </div>
          <div className="mt-5 space-y-2">
            {[
              { name: "Admin SGE", role: "Super Admin", status: "Actif" },
              { name: "API Service", role: "Machine", status: "Actif" },
              { name: "Invité", role: "Lecteur", status: "Limité" },
            ].map((u) => (
              <div
                key={u.name}
                className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-zinc-50/75 p-3"
              >
                <span className="h-7 w-7 rounded-full bg-zinc-200" />
                <div className="flex-1">
                  <div className="text-xs font-medium text-zinc-950">
                    {u.name}
                  </div>
                  <div className="text-[10px] text-zinc-500">
                    {u.role}
                  </div>
                </div>
                <span
                  className={cn(
                    "rounded-full border px-2 py-0.5 text-[10px] font-medium",
                    u.status === "Actif"
                      ? "border-zinc-200 bg-zinc-50 text-zinc-600"
                      : "border-zinc-200 bg-zinc-100 text-zinc-500",
                  )}
                >
                  {u.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function HomePage({ locale }: HomePageProps) {
  const translate = await getTranslations({
    locale,
    namespace: "Public.home.page",
  });
  const t = (key: string) => translate(key);

  const platforms = [
    { key: "developer", icon: Code2, href: "/platform/developer" },
    { key: "cloud", icon: Cloud, href: "/platform/cloud" },
    { key: "telecom", icon: Radio, href: "/platform/telecom" },
    { key: "finance", icon: Database, href: "/platform/finance" },
    { key: "intelligence", icon: Sparkles, href: "/platform/intelligence" },
    { key: "media", icon: Globe, href: "/platform/media" },
  ];

  return (
    <>
      <Header locale={locale as Locale} />

      <main className="bg-white text-zinc-950">
        {/* ── Hero ────────────────────────────────────── */}
        <section className="relative overflow-hidden border-b border-zinc-200/80 bg-[linear-gradient(180deg,#ffffff_0%,#fafafa_100%)]">
          <div aria-hidden={true} className="pointer-events-none absolute inset-0">
            <div className="absolute inset-x-0 top-0 h-44 bg-[radial-gradient(circle_at_top,rgba(148,163,184,0.18),transparent_65%)]" />
            <div className="absolute inset-x-[-10%] top-[16%] h-[56%] opacity-95 sm:top-[18%] lg:inset-x-[-4%] lg:top-[19%] lg:h-[62%]">
              <HeroVisual />
            </div>
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.76),rgba(255,255,255,0.34)_30%,rgba(255,255,255,0.82)_100%)]" />
          </div>

          <div className="relative mx-auto flex min-h-[88vh] max-w-360 items-center px-6 py-20 sm:py-24 lg:px-12 lg:py-28">
            <div className="max-w-4xl">
              <SectionEyebrow>{t("hero.eyebrow")}</SectionEyebrow>
              <h1 className="mt-7 max-w-5xl text-[clamp(3.4rem,7vw,7rem)] font-semibold leading-[0.92] tracking-[-0.06em] text-zinc-950">
                {t("hero.titleLine1")}
                <br />
                <span className="bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  {t("hero.titleLine2")}
                </span>
                <br />
                {t("hero.titleImpact")}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-600 sm:text-xl">
                {t("hero.description")}
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <Button
                  asChild
                  size="lg"
                  className="h-14 rounded-full bg-zinc-950 px-8 text-sm font-medium text-white hover:bg-zinc-800"
                >
                  <Link href={localizeHref(locale, "/platform")}>
                    {t("hero.primaryCta")}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-14 rounded-full border-zinc-300 bg-white/85 px-8 text-sm font-medium text-zinc-950"
                >
                  <Link href={localizeHref(locale, "/office")}>
                    {t("hero.secondaryCta")}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ── Stats Bar ───────────────────────────────── */}
        <section className="border-y border-zinc-200/80 bg-zinc-50/80">
          <div className="mx-auto grid max-w-360 grid-cols-2 px-6 lg:grid-cols-4 lg:px-12">
            {[
              { value: t("statsBar.uptime"), label: t("statsBar.uptimeLabel") },
              {
                value: t("statsBar.countries"),
                label: t("statsBar.countriesLabel"),
              },
              {
                value: t("statsBar.organizations"),
                label: t("statsBar.organizationsLabel"),
              },
              {
                value: t("statsBar.transactions"),
                label: t("statsBar.transactionsLabel"),
              },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className={cn(
                  "flex flex-col items-center px-6 py-6 text-center",
                  i < 3 && "border-r border-zinc-200/80",
                  i < 2 && "border-b border-zinc-200/80 lg:border-b-0",
                )}
              >
                <span className="text-3xl font-semibold tracking-[-0.04em] text-zinc-950">
                  {stat.value}
                </span>
                <span className="mt-1 text-sm text-zinc-500">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Office Featured ─────────────────────────── */}
        <Section
          eyebrow={t("officeFeatured.eyebrow")}
          title={t("officeFeatured.title")}
          description={t("officeFeatured.description")}
        >
          <div className="grid gap-8 xl:grid-cols-[minmax(0,0.5fr)_minmax(0,0.5fr)] xl:items-center">
            <div className="space-y-5">
              <div className="flex flex-wrap gap-2.5">
                <MetricPill>{t("officeFeatured.cta")}</MetricPill>
              </div>
            </div>
            <OfficeVisual />
          </div>
        </Section>

        {/* ── Product Cards Grid ──────────────────────── */}
        <Section tone="muted">
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href={localizeHref(locale, "/platform/cloud")}
              className="group relative overflow-hidden rounded-4xl border border-zinc-200/80 bg-white p-6 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.22)] transition-all duration-300 hover:shadow-[0_32px_100px_-56px_rgba(15,23,42,0.3)]"
            >
              <SectionEyebrow>{t("platforms.items.cloud.title")}</SectionEyebrow>
              <h3 className="mt-6 text-2xl font-semibold tracking-[-0.03em] text-zinc-950">
                Une infrastructure sous votre contrôle.
              </h3>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                {t("platforms.items.cloud.description")}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-zinc-950">
                Explorer
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </span>
              <div className="mt-6">
                <CloudVisual />
              </div>
            </Link>

            <Link
              href={localizeHref(locale, "/security")}
              className="group relative overflow-hidden rounded-4xl border border-zinc-200/80 bg-white p-6 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.22)] transition-all duration-300 hover:shadow-[0_32px_100px_-56px_rgba(15,23,42,0.3)]"
            >
              <SectionEyebrow>{t("trustSecurity.items.identity.title")}</SectionEyebrow>
              <h3 className="mt-6 text-2xl font-semibold tracking-[-0.03em] text-zinc-950">
                L&apos;identité au cœur de chaque décision.
              </h3>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                {t("trustSecurity.items.identity.description")}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-zinc-950">
                Explorer
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </span>
              <div className="mt-6">
                <IdentityVisual />
              </div>
            </Link>

            <Link
              href={localizeHref(locale, "/platform")}
              className="group relative overflow-hidden rounded-4xl border border-zinc-200/80 bg-white p-6 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.22)] transition-all duration-300 hover:shadow-[0_32px_100px_-56px_rgba(15,23,42,0.3)] md:col-span-2"
            >
              <SectionEyebrow>{t("openTechnology.eyebrow")}</SectionEyebrow>
              <h3 className="mt-6 text-2xl font-semibold tracking-[-0.03em] text-zinc-950">
                {t("openTechnology.title")}
              </h3>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                {t("openTechnology.description")}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-zinc-950">
                Explorer
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </span>
              <div className="mt-6 grid grid-cols-3 gap-4">
                {[
                  { icon: Layers, label: "Modulaire" },
                  { icon: LockKeyhole, label: "Contrôle" },
                  { icon: Globe, label: "Europe" },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col items-center gap-2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-zinc-200 bg-zinc-50">
                      <item.icon className="h-5 w-5 text-zinc-700" />
                    </div>
                    <span className="text-[10px] font-medium text-zinc-500">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </Link>
          </div>
        </Section>

        {/* ── Platforms ───────────────────────────────── */}
        <Section
          eyebrow={t("platforms.eyebrow")}
          title={t("platforms.title")}
          description={t("platforms.description")}
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {platforms.map(({ key, icon: Icon, href }) => (
              <Link
                key={key}
                href={localizeHref(locale, href)}
                className="group flex flex-col items-start rounded-4xl border border-zinc-200/80 bg-white p-6 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.22)] transition-all duration-300 hover:shadow-[0_32px_100px_-56px_rgba(15,23,42,0.3)]"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-zinc-200 bg-zinc-50 text-zinc-700">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-6 text-xl font-semibold tracking-[-0.03em] text-zinc-950">
                  {t(`platforms.items.${key}.title`)}
                </h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600">
                  {t(`platforms.items.${key}.description`)}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-zinc-950">
                  Explorer
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </Section>

        {/* ── Architecture ────────────────────────────── */}
        <Section
          eyebrow={t("ecosystemArchitecture.eyebrow")}
          title={t("ecosystemArchitecture.title")}
          description={t("ecosystemArchitecture.description")}
          tone="muted"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {["organizations", "office", "platforms", "foundations"].map(
              (key, index) => (
                <div
                  key={key}
                  className="flex items-start gap-5 rounded-4xl border border-zinc-200/80 bg-white p-6 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.22)]"
                >
                  <span className="text-4xl font-bold tracking-tighter text-zinc-200">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold tracking-[-0.03em] text-zinc-950">
                      {t(`ecosystemArchitecture.layers.${key}.title`)}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-zinc-600">
                      {t(`ecosystemArchitecture.layers.${key}.description`)}
                    </p>
                  </div>
                </div>
              ),
            )}
          </div>
        </Section>

        {/* ── Developers ──────────────────────────────── */}
        <Section
          eyebrow={t("developersShowcase.eyebrow")}
          title={t("developersShowcase.title")}
          description={t("developersShowcase.description")}
          tone="dark"
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {(["documentation", "apis", "sdks", "giteria"] as const).map(
              (key) => (
                <FeatureCard
                  key={key}
                  title={t(`developersShowcase.panel.entries.${key}`)}
                  description=""
                  icon={Code2}
                  dark
                  compact
                />
              ),
            )}
          </div>
        </Section>

        {/* ── Solutions ───────────────────────────────── */}
        <Section
          eyebrow={t("solutionsShowcase.eyebrow")}
          title={t("solutionsShowcase.title")}
          description={t("solutionsShowcase.description")}
          tone="muted"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {(
              [
                "workplace",
                "infrastructure",
                "financialServices",
                "publicSector",
              ] as const
            ).map((key) => (
              <Link
                key={key}
                href={localizeHref(locale, "/solutions")}
                className="group flex flex-col items-start rounded-4xl border border-zinc-200/80 bg-white p-7 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.22)] transition-all duration-300 hover:shadow-[0_32px_100px_-56px_rgba(15,23,42,0.3)]"
              >
                <h3 className="text-xl font-semibold tracking-[-0.03em] text-zinc-950">
                  {t(`solutionsShowcase.items.${key}.title`)}
                </h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600">
                  {t(`solutionsShowcase.items.${key}.description`)}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-zinc-950">
                  {t("solutionsShowcase.cta")}
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </Section>

        {/* ── Trust & Security ────────────────────────── */}
        <Section
          eyebrow={t("trustSecurity.eyebrow")}
          title={t("trustSecurity.title")}
          description={t("trustSecurity.description")}
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {(
              ["identity", "design", "transparency", "disclosure"] as const
            ).map((key) => (
              <FeatureCard
                key={key}
                title={t(`trustSecurity.items.${key}.title`)}
                description=""
                icon={ShieldCheck}
                compact
              />
            ))}
          </div>
        </Section>

        {/* ── Why Now ─────────────────────────────────── */}
        <Section
          eyebrow={t("whyNow.eyebrow")}
          title={t("whyNow.title")}
          description={t("whyNow.description")}
          tone="muted"
        >
          <div className="grid gap-4 sm:grid-cols-3">
            {(["control", "clarity", "execution"] as const).map((key) => (
              <FeatureCard
                key={key}
                title={t(`whyNow.items.${key}.title`)}
                description={t(`whyNow.items.${key}.description`)}
                icon={key === "control" ? LockKeyhole : key === "clarity" ? Zap : Rocket}
                compact
              />
            ))}
          </div>
        </Section>

        {/* ── Transparency ────────────────────────────── */}
        <Section
          eyebrow={t("transparency.eyebrow")}
          title={t("transparency.title")}
          description={t("transparency.description")}
        >
          <div className="grid gap-4 sm:grid-cols-3">
            {(["development", "exploring", "vision"] as const).map((key) => (
              <div
                key={key}
                className="rounded-4xl border border-zinc-200/80 bg-white p-6 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.22)]"
              >
                <MetricPill>{t(`transparency.items.${key}.eyebrow`)}</MetricPill>
                <h3 className="mt-6 text-lg font-semibold tracking-[-0.03em] text-zinc-950">
                  {t(`transparency.items.${key}.title`)}
                </h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600">
                  {t(`transparency.items.${key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* ── Customer Story ──────────────────────────── */}
        <Section
          eyebrow={t("customerStories.eyebrow")}
          title={t("customerStories.title")}
          description={t("customerStories.description")}
          tone="muted"
        >
          <div className="rounded-[2.4rem] border border-zinc-200 bg-white p-8 shadow-[0_32px_100px_-56px_rgba(15,23,42,0.3)] sm:p-12">
            <p className="text-lg leading-8 text-zinc-950 sm:text-xl">
              &laquo; {t("customerStories.testimonial.quote")} &raquo;
            </p>
            <footer className="mt-6 flex items-center gap-4">
              <span className="h-12 w-12 rounded-full bg-zinc-200" />
              <div>
                <div className="text-sm font-semibold text-zinc-950">
                  {t("customerStories.testimonial.author")}
                </div>
                <div className="text-sm text-zinc-500">
                  {t("customerStories.testimonial.title")}
                </div>
              </div>
            </footer>
          </div>
        </Section>

        {/* ── Company ─────────────────────────────────── */}
        <Section
          eyebrow={t("company.eyebrow")}
          title={t("company.title")}
          description={t("company.description")}
        >
          <div className="grid gap-4 sm:grid-cols-3">
            {(["company", "partners", "careers"] as const).map((key) => (
              <FeatureCard
                key={key}
                title={t(`company.items.${key}.title`)}
                description={t(`company.items.${key}.description`)}
                icon={key === "company" ? Building2 : key === "partners" ? Globe : Zap}
                compact
              />
            ))}
          </div>
        </Section>

        {/* ── Final CTA ───────────────────────────────── */}
        <Section
          eyebrow={t("finalCta.eyebrow")}
          title={t("finalCta.title")}
          description={t("finalCta.description")}
        >
          <div className="rounded-[2.6rem] border border-zinc-200 bg-zinc-950 p-8 text-white shadow-[0_40px_120px_-60px_rgba(15,23,42,0.5)] sm:p-10">
            <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_auto] xl:items-end">
              <div>
                <div className="flex flex-wrap gap-2.5">
                  {(["organizations", "builders", "developers"] as const).map(
                    (key) => (
                      <MetricPill key={key} dark>
                        {t(`finalCta.items.${key}.eyebrow`)}
                      </MetricPill>
                    ),
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="h-12 rounded-full bg-white px-6 text-sm text-zinc-950 hover:bg-zinc-100"
                >
                  <Link href={localizeHref(locale, "/platform")}>
                    {t("finalCta.items.organizations.cta")}
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-full border-white/16 bg-transparent px-6 text-sm text-white hover:bg-white/8 hover:text-white"
                >
                  <Link href={localizeHref(locale, "/developers")}>
                    {t("finalCta.items.developers.cta")}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <Footer locale={locale as Locale} />
    </>
  );
}
