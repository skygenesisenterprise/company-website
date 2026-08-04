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
  Zap,
  Mail,
  Search,
  Briefcase,
  Terminal,
  Server,
  Cloud,
  GitBranch,
} from "lucide-react";
import { Footer } from "@/components/public/Footer";
import { Header } from "@/components/public/Header";
import { EcosystemVisualization } from "@/components/public/home/ecosystem-visualization";
import { FeatureShowcase } from "@/components/public/home/feature-showcase";
import type { Locale } from "@/lib/locale";
import { cn } from "@/lib/utils";

interface HomePageProps {
  locale: string;
}

interface HomePageContentProps extends HomePageProps {
  t: (key: string) => string;
}

interface SectionOnlyProps {
  t: (key: string) => string;
}

function localizeHref(locale: string, href: string) {
  if (href.startsWith("http")) return href;
  return `/${locale}${href.startsWith("/") ? href : `/${href}`}`;
}

/* ── Section wrapper ── */

function Section({
  id,
  title,
  description,
  tone = "default",
  children,
}: {
  id?: string;
  title: string;
  description?: string;
  tone?: "default" | "muted" | "dark";
  children: React.ReactNode;
}) {
  const dark = tone === "dark";
  return (
    <section
      id={id}
      className={cn(
        "relative py-24 sm:py-32 lg:py-40",
        tone === "muted" && "bg-(--color-paper-2)",
        dark && "bg-(--color-ink) text-(--color-paper)",
      )}
    >
      <div className="mx-auto max-w-360 px-6 lg:px-12">
        <div className="mx-auto max-w-5xl text-center">
          <h2
            className={cn(
              "text-[clamp(1.8rem,3.5vw,2.8rem)] font-medium tracking-[-0.04em] leading-[1.1]",
              dark ? "text-(--color-paper)" : "text-(--color-ink)",
            )}
          >
            {title}
          </h2>
          {description ? (
            <p
              className={cn(
                "mt-4 mx-auto max-w-2xl text-base leading-7",
                dark ? "text-(--color-paper)/50" : "text-(--color-ink-3)",
              )}
            >
              {description}
            </p>
          ) : null}
        </div>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}

/* ── Eyebrow badge ── */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-(--color-accent-dim) px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-(--color-accent)">
      {children}
    </span>
  );
}

/* ── Double-bezel card ── */

function DoubleBezelCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative rounded-4xl bg-black/5 p-1.5 ring-1 ring-black/5",
        className,
      )}
    >
      <div className="relative rounded-[1.625rem] bg-(--color-paper) p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]">
        {children}
      </div>
    </div>
  );
}

/* ── Magnetic button ── */

function MagneticButton({
  children,
  href,
  variant = "primary",
}: {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary";
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]",
        "active:scale-[0.98]",
        variant === "primary"
          ? "bg-(--color-ink) text-(--color-paper) hover:bg-(--color-ink)/90"
          : "border border-(--color-rule) bg-(--color-paper) text-(--color-ink) hover:border-(--color-rule-strong)",
      )}
    >
      {children}
      <span
        className={cn(
          "inline-flex h-8 w-8 items-center justify-center rounded-full transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]",
          "group-hover:translate-x-1 group-hover:-translate-y-px group-hover:scale-105",
          variant === "primary"
            ? "bg-white/10"
            : "bg-black/5 dark:bg-white/10",
        )}
      >
        <ArrowRight className="h-3.5 w-3.5" />
      </span>
    </Link>
  );
}

/* ── Product card ── */

function ProductCard({
  icon: Icon,
  title,
  description,
  status,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  status: "stable" | "beta" | "alpha";
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group relative rounded-4xl bg-black/5 p-1.5 ring-1 ring-black/5 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:ring-black/10"
    >
      <div className="relative rounded-[1.625rem] bg-(--color-paper) p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]">
        <div className="flex items-start justify-between">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-(--color-paper-2) text-(--color-ink-3) transition-colors duration-500 group-hover:bg-(--color-accent-dim) group-hover:text-(--color-accent)">
            <Icon className="h-5 w-5" />
          </span>
          <span
            className={cn(
              "inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium",
              status === "stable" && "bg-emerald-500/10 text-emerald-600",
              status === "beta" && "bg-amber-500/10 text-amber-600",
              status === "alpha" && "bg-blue-500/10 text-blue-600",
            )}
          >
            {status}
          </span>
        </div>
        <h3 className="mt-6 text-lg font-medium tracking-[-0.02em] text-(--color-ink)">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-6 text-(--color-ink-3)">
          {description}
        </p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-(--color-ink-2) transition-colors duration-500 group-hover:text-(--color-accent)">
          Explorer
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

/* ================================================================== */
/* 1. Hero — Editorial Split with tabs                                 */
/* ================================================================== */

function HeroSection({ locale, t }: HomePageContentProps) {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-(--color-paper)">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(57,76,140,0.08),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(57,76,140,0.04),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-360 px-6 py-24 sm:py-32 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          {/* Left: Typography */}
          <div>
            <Eyebrow>{t("hero.eyebrow")}</Eyebrow>
            <h1
              className="mt-6 text-[clamp(2.5rem,5vw,4.5rem)] font-medium leading-[1.05] tracking-tighter text-(--color-ink)"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t("hero.title")}
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-(--color-ink-3)">
              {t("hero.description")}
            </p>

            {/* CTA buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <MagneticButton href={localizeHref(locale, "/platform")}>
                {t("hero.primaryCta")}
              </MagneticButton>
              <MagneticButton
                href={localizeHref(locale, "/platforms")}
                variant="secondary"
              >
                {t("hero.secondaryCta")}
              </MagneticButton>
            </div>


          </div>

          {/* Right: Interactive terminal */}
          <div className="relative">
            <DoubleBezelCard>
              <div className="aspect-4/3 rounded-xl bg-(--color-ink) p-4 font-mono text-sm">
                <div className="flex items-center gap-2 border-b border-white/10 pb-3">
                  <span className="h-3 w-3 rounded-full bg-red-500/80" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <span className="h-3 w-3 rounded-full bg-green-500/80" />
                  <span className="ml-4 text-xs text-white/40">
                    aether-terminal
                  </span>
                </div>
                <div className="mt-4 space-y-2 text-white/70">
                  <p>
                    <span className="text-emerald-400">~</span>{" "}
                    $ sge deploy --production
                  </p>
                  <p className="text-white/40">
                    Deploying Aether Identity v2.4.0...
                  </p>
                  <p className="text-emerald-400">✓ Identity service ready</p>
                  <p className="text-emerald-400">✓ Vault integration active</p>
                  <p className="text-emerald-400">✓ Cloud nodes synced</p>
                  <p className="mt-2 text-white/40">
                    Deployment complete in 4.2s
                  </p>
                </div>
              </div>
            </DoubleBezelCard>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================== */
/* 2. Data — Trust signals and key metrics                              */
/* ================================================================== */

function DataSection({ t }: SectionOnlyProps) {
  const signals = [
    {
      key: "workspace",
      value: t("hero.signals.workspace"),
      label: "Workspace",
      description: "Uptime and reliability",
    },
    {
      key: "platforms",
      value: t("hero.signals.platforms"),
      label: "Platforms",
      description: "Global coverage",
    },
    {
      key: "foundations",
      value: t("hero.signals.foundations"),
      label: "Foundations",
      description: "Open APIs",
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-360 px-6 lg:px-12">
        <div className="mx-auto max-w-5xl text-center">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {signals.map((signal) => (
              <div
                key={signal.key}
                className="group relative rounded-4xl bg-black/5 p-1.5 ring-1 ring-black/5 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:ring-black/10"
              >
                <div className="relative rounded-[1.625rem] bg-(--color-paper) p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]">
                  <div
                    className="text-3xl font-medium tracking-[-0.03em] text-(--color-ink)"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {signal.value}
                  </div>
                  <div className="mt-2 text-sm font-medium text-(--color-ink-2)">
                    {signal.label}
                  </div>
                  <div className="mt-1 text-xs text-(--color-ink-3)">
                    {signal.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================== */
/* 3. Manifesto — Vision statement                                     */
/* ================================================================== */

function ManifestoSection({ t }: SectionOnlyProps) {
  return (
    <section className="relative py-28 sm:py-36 lg:py-44">
      <div className="mx-auto max-w-360 px-6 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-[clamp(1.5rem,3vw,2.2rem)] font-medium leading-[1.3] tracking-[-0.03em] text-(--color-ink)">
            {t("manifesto.title")}
          </p>
          <p className="mt-8 mx-auto max-w-2xl text-base leading-7 text-(--color-ink-3)">
            {t("manifesto.description")}
          </p>
          <div className="mt-10 mx-auto h-px w-16 bg-(--color-accent)" />
          <p className="mt-8 mx-auto max-w-2xl text-sm leading-7 text-(--color-ink-2)">
            {t("manifesto.statement")}
          </p>
        </div>
      </div>
    </section>
  );
}

/* ================================================================== */
/* 3. Ecosystem Visualization — Interactive radial grid                 */
/* ================================================================== */

function EcosystemSection({ locale, t }: HomePageContentProps) {
  const strings = {
    title: t("ecosystemViz.title"),
    description: t("ecosystemViz.description"),
    cta: t("ecosystemViz.cta"),
    services: {
      office: t("ecosystemViz.services.office"),
      ai: t("ecosystemViz.services.ai"),
      cloud: t("ecosystemViz.services.cloud"),
      identity: t("ecosystemViz.services.identity"),
      vault: t("ecosystemViz.services.vault"),
      bank: t("ecosystemViz.services.bank"),
    },
  };

  return (
    <Section
      title={strings.title}
      description={strings.description}
      tone="muted"
    >
      <EcosystemVisualization strings={strings} locale={locale} />
    </Section>
  );
}

/* ================================================================== */
/* 4. Products Showcase — Aether Suite (Asymmetrical Bento)            */
/* ================================================================== */

function ProductsSection({ locale, t }: HomePageContentProps) {
  const products = [
    {
      icon: ShieldCheck,
      title: "Aether Identity",
      description:
        "Enterprise OAuth2/OIDC, multi-factor authentication, and secure account management.",
      status: "stable" as const,
      href: "/platform/identity",
    },
    {
      icon: Mail,
      title: "Aether Mail",
      description:
        "Lightweight, open-source email client built for privacy, speed, and seamless integration.",
      status: "stable" as const,
      href: "/platform/mail",
    },
    {
      icon: Server,
      title: "Aether Mailer",
      description:
        "All-in-one Enterprise Mail & Collaboration server. IMAP, JMAP, SMTP, CalDAV, CardDAV, WebDAV.",
      status: "stable" as const,
      href: "/platform/mailer",
    },
    {
      icon: LockKeyhole,
      title: "Aether Vault",
      description:
        "Open-source secrets and TOTP vault designed as a security control plane for developers.",
      status: "stable" as const,
      href: "/platform/vault",
    },
    {
      icon: Cloud,
      title: "Aether Cloud",
      description:
        "Sovereign cloud infrastructure for organizations requiring full control over their data.",
      status: "beta" as const,
      href: "/platform/cloud",
    },
    {
      icon: Search,
      title: "Aether Search",
      description:
        "Privacy-focused search engine delivering fast, accurate, and unbiased search results.",
      status: "beta" as const,
      href: "/platform/search",
    },
    {
      icon: GitBranch,
      title: "Giteria",
      description:
        "Self-hosted all-in-one software development service. Git hosting, code review, CI/CD.",
      status: "stable" as const,
      href: "/platform/giteria",
    },
    {
      icon: Terminal,
      title: "OblivionOS",
      description:
        "Enterprise Linux Distro written in Rust for Security, Desktop, Server and Mobile.",
      status: "alpha" as const,
      href: "/platform/oblivionos",
    },
  ];

  return (
    <Section
      title={t("products.title")}
      description={t("products.description")}
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.title} {...product} />
        ))}
      </div>
    </Section>
  );
}

/* ================================================================== */
/* 5. Platforms — Six platform directions                              */
/* ================================================================== */

function PlatformsSection({ locale, t }: HomePageContentProps) {
  const platforms = [
    { key: "developer", icon: Code2, href: "/platform/developer" },
    { key: "cloud", icon: Building2, href: "/platform/cloud" },
    { key: "telecom", icon: Network, href: "/platform/telecom" },
    { key: "finance", icon: LockKeyhole, href: "/platform/finance" },
    { key: "intelligence", icon: Blocks, href: "/platform/intelligence" },
    { key: "media", icon: Globe2, href: "/platform/media" },
  ];

  return (
    <Section
      title={t("platforms.title")}
      description={t("platforms.description")}
      tone="muted"
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {platforms.map((platform) => (
          <Link
            key={platform.key}
            href={localizeHref(locale, platform.href)}
            className="group relative rounded-4xl bg-black/5 p-1.5 ring-1 ring-black/5 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:ring-black/10"
          >
            <div className="relative rounded-[1.625rem] bg-(--color-paper) p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-(--color-paper-2) text-(--color-ink-3) transition-colors duration-500 group-hover:bg-(--color-accent-dim) group-hover:text-(--color-accent)">
                <platform.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-6 text-lg font-medium tracking-[-0.02em] text-(--color-ink)">
                {t(`platforms.items.${platform.key}.title`)}
              </h3>
              <p className="mt-2 text-sm leading-6 text-(--color-ink-3)">
                {t(`platforms.items.${platform.key}.description`)}
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-(--color-ink-2) transition-colors duration-500 group-hover:text-(--color-accent)">
                {t("platforms.cta")}
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}

/* ================================================================== */
/* 6. Developers — APIs, SDKs, Documentation                           */
/* ================================================================== */

function DevelopersSection({ locale, t }: HomePageContentProps) {
  return (
    <Section
      title={t("developersShowcase.title")}
      description={t("developersShowcase.description")}
    >
      <div className="grid gap-6 xl:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
        <div className="rounded-4xl bg-black/5 p-1.5 ring-1 ring-black/5">
          <div className="rounded-[1.625rem] bg-(--color-paper) p-7 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]">
            <div
              className="text-3xl font-medium tracking-[-0.04em] text-(--color-ink)"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t("developersShowcase.panel.title")}
            </div>
            <p className="mt-4 max-w-xl text-sm leading-7 text-(--color-ink-3)">
              {t("developersShowcase.panel.description")}
            </p>
            <div
              className="mt-8 grid gap-2.5 text-sm text-(--color-ink-2)"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {["documentation", "apis", "sdks", "giteria"].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-(--color-rule) bg-(--color-paper-2)/60 px-4 py-3.5"
                >
                  {t(`developersShowcase.panel.entries.${item}`)}
                </div>
              ))}
            </div>
            <div className="mt-8">
              <MagneticButton href={localizeHref(locale, "/developers")}>
                {t("developersShowcase.cta")}
              </MagneticButton>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {[
            { key: "documentation", icon: BookOpen },
            { key: "apis", icon: Network },
            { key: "sdks", icon: Code2 },
            { key: "openSource", icon: Blocks },
          ].map((item) => (
            <div
              key={item.key}
              className="group relative rounded-4xl bg-black/5 p-1.5 ring-1 ring-black/5 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:ring-black/10"
            >
              <div className="relative rounded-[1.625rem] bg-(--color-paper) p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-(--color-paper-2) text-(--color-ink-3) transition-colors duration-500 group-hover:bg-(--color-accent-dim) group-hover:text-(--color-accent)">
                  <item.icon className="h-4.5 w-4.5" />
                </span>
                <h3 className="mt-4 text-base font-medium text-(--color-ink)">
                  {t(`developersShowcase.items.${item.key}.title`)}
                </h3>
                <p className="mt-2 text-sm leading-6 text-(--color-ink-3)">
                  {t(`developersShowcase.items.${item.key}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ================================================================== */
/* 7. Why Now — Context and urgency                                    */
/* ================================================================== */

function WhyNowSection({ t }: SectionOnlyProps) {
  const reasons = [
    {
      key: "control",
      icon: LockKeyhole,
    },
    {
      key: "clarity",
      icon: Search,
    },
    {
      key: "execution",
      icon: Zap,
    },
  ];

  return (
    <Section
      title={t("whyNow.title")}
      description={t("whyNow.description")}
      tone="muted"
    >
      <div className="grid gap-6 md:grid-cols-3">
        {reasons.map((reason) => (
          <div
            key={reason.key}
            className="group relative rounded-4xl bg-black/5 p-1.5 ring-1 ring-black/5 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:ring-black/10"
          >
            <div className="relative rounded-[1.625rem] bg-(--color-paper) p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-(--color-accent-dim) text-(--color-accent)">
                <reason.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-6 text-lg font-medium tracking-[-0.02em] text-(--color-ink)">
                {t(`whyNow.items.${reason.key}.title`)}
              </h3>
              <p className="mt-2 text-sm leading-6 text-(--color-ink-3)">
                {t(`whyNow.items.${reason.key}.description`)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ================================================================== */
/* 8. Solutions — Industry verticals                                    */
/* ================================================================== */

function SolutionsSection({ locale, t }: HomePageContentProps) {
  return (
    <Section
      title={t("solutionsShowcase.title")}
      description={t("solutionsShowcase.description")}
    >
      <div className="grid gap-4 md:grid-cols-2">
        {[
          { key: "workplace", icon: Building2 },
          { key: "infrastructure", icon: Server },
          { key: "financialServices", icon: LockKeyhole },
          { key: "publicSector", icon: Users },
        ].map((item) => (
          <div
            key={item.key}
            className="group relative rounded-4xl bg-black/5 p-1.5 ring-1 ring-black/5 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:ring-black/10"
          >
            <div className="relative rounded-[1.625rem] bg-(--color-paper) p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-(--color-paper-2) text-(--color-ink-3) transition-colors duration-500 group-hover:bg-(--color-accent-dim) group-hover:text-(--color-accent)">
                <item.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-6 text-lg font-medium tracking-[-0.02em] text-(--color-ink)">
                {t(`solutionsShowcase.items.${item.key}.title`)}
              </h3>
              <p className="mt-2 text-sm leading-6 text-(--color-ink-3)">
                {t(`solutionsShowcase.items.${item.key}.description`)}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <MagneticButton
          href={localizeHref(locale, "/solutions")}
          variant="secondary"
        >
          {t("solutionsShowcase.cta")}
        </MagneticButton>
      </div>
    </Section>
  );
}

/* ================================================================== */
/* 9. Customer Stories — Social proof and testimonials                  */
/* ================================================================== */

function CustomerStoriesSection({ t }: SectionOnlyProps) {
  const stats = [
    { value: "406+", label: "Repositories" },
    { value: "10+", label: "Products" },
    { value: "6", label: "Platforms" },
    { value: "100%", label: "Open Source" },
  ];

  return (
    <section className="relative py-24 sm:py-32 lg:py-40 bg-(--color-ink) text-(--color-paper)">
      <div className="mx-auto max-w-360 px-6 lg:px-12">
        {/* Section intro */}
        <div className="mx-auto max-w-5xl text-center">
          <Eyebrow>{t("customerStories.eyebrow")}</Eyebrow>
          <h2 className="mt-6 text-[clamp(1.8rem,3.5vw,2.8rem)] font-medium tracking-[-0.04em] leading-[1.1] text-(--color-paper)">
            {t("customerStories.title")}
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-base leading-7 text-(--color-paper)/50">
            {t("customerStories.description")}
          </p>
        </div>

        {/* Stats grid */}
        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center"
            >
              <div
                className="text-3xl font-medium tracking-[-0.03em] text-(--color-paper)"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-(--color-paper)/50">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="mt-16 mx-auto max-w-3xl">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
            <div
              className="text-2xl font-medium tracking-[-0.03em] text-(--color-paper)"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t("customerStories.testimonial.quote")}
            </div>
            <div className="mt-6 flex items-center justify-center gap-4">
              <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center">
                <Users className="h-5 w-5 text-(--color-paper)/70" />
              </div>
              <div className="text-left">
                <div className="text-sm font-medium text-(--color-paper)">
                  {t("customerStories.testimonial.author")}
                </div>
                <div className="text-xs text-(--color-paper)/50">
                  {t("customerStories.testimonial.title")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================== */
/* 10. Trust & Security — GitHub-style security section                 */
/* ================================================================== */

function TrustSection({ locale, t }: HomePageContentProps) {
  return (
    <Section
      title={t("trustSecurity.title")}
      description={t("trustSecurity.description")}
      tone="muted"
    >
      {/* Security features grid */}
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {["identity", "design", "transparency", "disclosure"].map((item) => (
          <div
            key={item}
            className="group relative rounded-4xl bg-black/5 p-1.5 ring-1 ring-black/5 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:ring-black/10"
          >
            <div className="relative rounded-[1.625rem] bg-(--color-paper) p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]">
              <div className="text-base font-medium text-(--color-ink)">
                {t(`trustSecurity.items.${item}.title`)}
              </div>
              <p className="mt-3 text-sm leading-6 text-(--color-ink-3)">
                {t(`trustSecurity.items.${item}.description`)}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA buttons */}
      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <MagneticButton href={localizeHref(locale, "/security")}>
          {t("trustSecurity.securityCta")}
        </MagneticButton>
        <MagneticButton
          href={localizeHref(locale, "/security/trust")}
          variant="secondary"
        >
          {t("trustSecurity.trustCta")}
        </MagneticButton>
      </div>
    </Section>
  );
}

/* ================================================================== */
/* 11. Open Source — Community and license                              */
/* ================================================================== */

function OpenSourceSection({ locale, t }: HomePageContentProps) {
  return (
    <section className="relative py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-360 px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left: Content */}
          <div>
            <Eyebrow>{t("openSource.eyebrow")}</Eyebrow>
            <h2
              className="mt-6 text-[clamp(1.8rem,3.5vw,2.8rem)] font-medium tracking-[-0.04em] leading-[1.1] text-(--color-ink)"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t("openSource.title")}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-(--color-ink-3)">
              {t("openSource.description")}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <MagneticButton href={localizeHref(locale, "/github")}>
                {t("openSource.githubCta")}
              </MagneticButton>
              <MagneticButton
                href={localizeHref(locale, "/license")}
                variant="secondary"
              >
                {t("openSource.licenseCta")}
              </MagneticButton>
            </div>
          </div>

          {/* Right: GitHub-style stats */}
          <div className="rounded-4xl bg-black/5 p-1.5 ring-1 ring-black/5">
            <div className="rounded-[1.625rem] bg-(--color-paper) p-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-(--color-ink) flex items-center justify-center">
                  <GitBranch className="h-5 w-5 text-(--color-paper)" />
                </div>
                <div>
                  <div className="text-sm font-medium text-(--color-ink)">
                    skygenesisenterprise
                  </div>
                  <div className="text-xs text-(--color-ink-3)">
                    GitHub Organization
                  </div>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div
                    className="text-2xl font-medium text-(--color-ink)"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    406
                  </div>
                  <div className="text-xs text-(--color-ink-3)">Repos</div>
                </div>
                <div className="text-center">
                  <div
                    className="text-2xl font-medium text-(--color-ink)"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    7
                  </div>
                  <div className="text-xs text-(--color-ink-3)">Followers</div>
                </div>
                <div className="text-center">
                  <div
                    className="text-2xl font-medium text-(--color-ink)"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    SGE-PL-1.0
                  </div>
                  <div className="text-xs text-(--color-ink-3)">License</div>
                </div>
              </div>
              <div className="mt-6 rounded-xl border border-(--color-rule) bg-(--color-paper-2)/50 p-4">
                <div className="text-xs font-medium text-(--color-ink-3)">
                  SGE Public License 1.0
                </div>
                <p className="mt-1 text-sm text-(--color-ink-2)">
                  Open, community-driven, and aligned with SGE&apos;s values.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================== */
/* 12. Company — About, Partners, Careers                              */
/* ================================================================== */

function CompanySection({ locale, t }: HomePageContentProps) {
  return (
    <Section
      title={t("company.title")}
      description={t("company.description")}
      tone="muted"
    >
      <div className="grid gap-4 md:grid-cols-3">
        {[
          { key: "company", icon: Building2 },
          { key: "partners", icon: Users },
          { key: "careers", icon: Briefcase },
        ].map((item) => (
          <Link
            key={item.key}
            href={localizeHref(
              locale,
              `/company/${item.key === "company" ? "about" : item.key}`,
            )}
            className="group relative rounded-4xl bg-black/5 p-1.5 ring-1 ring-black/5 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:ring-black/10"
          >
            <div className="relative rounded-[1.625rem] bg-(--color-paper) p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-(--color-paper-2) text-(--color-ink-3) transition-colors duration-500 group-hover:bg-(--color-accent-dim) group-hover:text-(--color-accent)">
                <item.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-6 text-lg font-medium tracking-[-0.02em] text-(--color-ink)">
                {t(`company.items.${item.key}.title`)}
              </h3>
              <p className="mt-2 text-sm leading-6 text-(--color-ink-3)">
                {t(`company.items.${item.key}.description`)}
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-(--color-ink-2) transition-colors duration-500 group-hover:text-(--color-accent)">
                {t(`company.items.${item.key}.cta`)}
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}

/* ================================================================== */
/* 13. Final CTA — GitHub-style final call to action                    */
/* ================================================================== */

function FinalCtaSection({ locale, t }: HomePageContentProps) {
  return (
    <section className="relative overflow-hidden bg-(--color-ink) py-28 sm:py-36 lg:py-44">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(57,76,140,0.15),transparent_70%)]" />
      <div className="relative mx-auto max-w-360 px-6 lg:px-12">
        <div className="rounded-4xl border border-white/10 bg-white/5 px-8 py-10 sm:px-10 lg:px-14 lg:py-14">
          <h2
            className="max-w-4xl text-[clamp(2rem,4vw,3.5rem)] font-medium tracking-tighter leading-[1.05] text-(--color-paper)"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t("finalCta.title")}
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-(--color-paper)/50">
            {t("finalCta.description")}
          </p>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              { key: "organizations", href: "/office", icon: Building2 },
              { key: "builders", href: "/platform", icon: Blocks },
              { key: "developers", href: "/developers", icon: Code2 },
            ].map((item) => (
              <Link
                key={item.key}
                href={localizeHref(locale, item.href)}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-(--color-paper)/70">
                  <item.icon className="h-4.5 w-4.5" />
                </span>
                <div className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-(--color-paper)/35">
                  {t(`finalCta.items.${item.key}.eyebrow`)}
                </div>
                <div
                  className="mt-3 text-2xl font-medium tracking-[-0.04em] text-(--color-paper)"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {t(`finalCta.items.${item.key}.title`)}
                </div>
                <p className="mt-3 text-sm leading-6 text-(--color-paper)/50">
                  {t(`finalCta.items.${item.key}.description`)}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-(--color-paper)/70 transition-colors duration-500 group-hover:text-(--color-paper)">
                  {t(`finalCta.items.${item.key}.cta`)}
                  <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================== */
/* Page                                                                */
/* ================================================================== */

export async function HomePage({ locale }: HomePageProps) {
  const translate = await getTranslations({
    locale,
    namespace: "Public.home.page",
  });
  const t = (key: string) => translate(key);

  return (
    <div className="flex min-h-screen flex-col bg-(--color-paper) text-(--color-ink)">
      <Header locale={locale as Locale} />
      <main className="flex-1 overflow-x-hidden">
        <HeroSection locale={locale} t={t} />
        <DataSection t={t} />
        <ManifestoSection t={t} />
        <FeatureShowcase
          locale={locale}
          title={t("featureShowcase.title")}
          description={t("featureShowcase.description")}
          features={{
            ai: {
              title: t("featureShowcase.features.ai.title"),
              description: t("featureShowcase.features.ai.description"),
              details: t("featureShowcase.features.ai.details"),
              preview: t("featureShowcase.features.ai.preview"),
            },
            actions: {
              title: t("featureShowcase.features.actions.title"),
              description: t("featureShowcase.features.actions.description"),
              details: t("featureShowcase.features.actions.details"),
              preview: t("featureShowcase.features.actions.preview"),
            },
            security: {
              title: t("featureShowcase.features.security.title"),
              description: t("featureShowcase.features.security.description"),
              details: t("featureShowcase.features.security.details"),
              preview: t("featureShowcase.features.security.preview"),
            },
          }}
        />
        <EcosystemSection locale={locale} t={t} />
        <ProductsSection locale={locale} t={t} />
        <PlatformsSection locale={locale} t={t} />
        <DevelopersSection locale={locale} t={t} />
        <WhyNowSection t={t} />
        <SolutionsSection locale={locale} t={t} />
        <CustomerStoriesSection t={t} />
        <TrustSection locale={locale} t={t} />
        <OpenSourceSection locale={locale} t={t} />
        <CompanySection locale={locale} t={t} />
        <FinalCtaSection locale={locale} t={t} />
      </main>
      <Footer locale={locale as Locale} />
    </div>
  );
}
