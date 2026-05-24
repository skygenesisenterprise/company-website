import * as React from "react";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  FileSpreadsheet,
  Files,
  FileText,
  FolderKanban,
  LockKeyhole,
  Mail,
  MessageSquare,
  Network,
  ShieldCheck,
  Users,
  Video,
} from "lucide-react";
import { Footer } from "@/components/public/Footer";
import { Header } from "@/components/public/Header";
import { Button } from "@/components/ui/button";
import type { Locale } from "@/lib/locale";
import { cn } from "@/lib/utils";

interface OfficePageProps {
  locale: string;
}

interface OfficePageContentProps extends OfficePageProps {
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
  dark?: boolean;
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

function CardLink({ title, description, href, cta, icon: Icon, accent, className, dark = false }: CardLinkProps) {
  const content = (
    <div
      className={cn(
        "group relative h-full overflow-hidden rounded-4xl border p-6 transition duration-300",
        dark
          ? "border-white/10 bg-white/4 shadow-none hover:-translate-y-1 hover:border-white/20 hover:bg-white/6"
          : "border-zinc-200/80 bg-white shadow-[0_20px_60px_-40px_rgba(15,23,42,0.28)] hover:-translate-y-1 hover:border-zinc-300 hover:shadow-[0_24px_80px_-36px_rgba(15,23,42,0.22)]",
        className,
      )}
    >
      {accent ? <div aria-hidden={true} className={cn("absolute inset-x-0 top-0 h-1", accent)} /> : null}
      <div className="flex items-start justify-between gap-4">
        {Icon ? (
          <span
            className={cn(
              "inline-flex h-12 w-12 items-center justify-center rounded-2xl border",
              dark ? "border-white/10 bg-white/4 text-white/88" : "border-zinc-200 bg-zinc-50 text-zinc-700",
            )}
          >
            <Icon className="h-5 w-5" />
          </span>
        ) : (
          <span />
        )}
        {href ? (
          <span
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-full border transition",
              dark
                ? "border-white/10 text-white/60 group-hover:border-white/20 group-hover:text-white"
                : "border-zinc-200 text-zinc-500 group-hover:border-zinc-300 group-hover:text-zinc-900",
            )}
          >
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden={true} />
          </span>
        ) : null}
      </div>
      <h3 className={cn("mt-8 text-xl font-semibold tracking-[-0.03em]", dark ? "text-white" : "text-zinc-950")}>{title}</h3>
      <p className={cn("mt-4 text-sm leading-7", dark ? "text-white/64" : "text-zinc-600")}>{description}</p>
      {cta ? <span className={cn("mt-7 inline-flex text-sm font-medium", dark ? "text-white" : "text-zinc-950")}>{cta}</span> : null}
    </div>
  );

  if (!href) {
    return content;
  }

  return <Link href={href}>{content}</Link>;
}

function ModulePill({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em]",
        dark ? "border-white/10 bg-white/4 text-white/68" : "border-zinc-200 bg-zinc-50 text-zinc-600",
      )}
    >
      {children}
    </span>
  );
}

function HeroWorkspacePreview({ t }: { t: (key: string) => string }) {
  const sidebar = [
    { key: "mail", icon: Mail },
    { key: "chat", icon: MessageSquare },
    { key: "meet", icon: Video },
    { key: "files", icon: Files },
    { key: "writer", icon: FileText },
    { key: "sheets", icon: FileSpreadsheet },
    { key: "calendar", icon: CalendarDays },
  ] as const;

  return (
    <div className="relative w-full max-w-full overflow-hidden rounded-4xl border border-zinc-200 bg-white p-3 shadow-[0_32px_100px_-56px_rgba(15,23,42,0.34)] lg:max-w-155">
      <div
        aria-hidden={true}
        className="absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top_left,rgba(148,163,184,0.18),transparent_56%),linear-gradient(180deg,rgba(244,244,245,0.94),rgba(255,255,255,0))]"
      />
      <div className="relative grid gap-2.5">
        <div className="flex flex-col gap-2.5 rounded-[1.35rem] border border-zinc-200 bg-zinc-50/80 p-2.5 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0 rounded-[1rem] border border-zinc-200 bg-white px-3 py-2">
            <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">{t("hero.visual.workspaceLabel")}</div>
            <div className="mt-1 truncate text-sm font-semibold leading-5 tracking-[-0.03em] text-zinc-950">{t("hero.visual.workspaceTitle")}</div>
          </div>
          <div className="flex flex-wrap gap-1.5 sm:justify-end">
            {sidebar.map((item) => (
              <span
                key={item.key}
                className={cn(
                  "inline-flex h-8 w-8 items-center justify-center rounded-xl border bg-white text-zinc-700",
                  item.key === "mail" ? "border-zinc-300" : "border-zinc-200",
                )}
                title={t(`hero.visual.sidebar.${item.key}`)}
              >
                <item.icon className="h-4 w-4" />
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-[1.35rem] border border-zinc-200 bg-white p-3">
          <div className="flex flex-col gap-2 border-b border-zinc-200 pb-2.5 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0">
              <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">{t("hero.visual.centerLabel")}</div>
              <div className="mt-1 truncate text-lg font-semibold leading-6 tracking-[-0.03em] text-zinc-950">{t("hero.visual.centerTitle")}</div>
            </div>
            <div className="max-w-55 truncate rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs text-zinc-500">
              {t("hero.visual.search")}
            </div>
          </div>
          <div className="mt-2.5 grid gap-2 sm:grid-cols-2">
            {[1, 2].map((item) => (
              <div key={item} className="rounded-[1rem] border border-zinc-200 bg-zinc-50/65 p-2.5">
                <div className="flex items-start justify-between gap-2.5">
                  <div className="min-w-0">
                    <div className="truncate text-sm font-semibold text-zinc-950">{t(`hero.visual.messages.${item}.title`)}</div>
                    <div className="mt-1 truncate text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
                      {t(`hero.visual.messages.${item}.meta`)}
                    </div>
                  </div>
                  <span className="shrink-0 rounded-full border border-zinc-200 bg-white px-2 py-0.5 text-[10px] text-zinc-500">
                    {t(`hero.visual.messages.${item}.state`)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-2.5 sm:grid-cols-[minmax(0,1fr)_150px_150px]">
          <div className="rounded-[1.35rem] border border-zinc-200 bg-zinc-950 p-3 text-white">
            <div className="flex items-center justify-between gap-3">
              <div className="text-sm font-medium">{t("hero.visual.meeting.title")}</div>
              <span className="rounded-full border border-white/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.14em] text-white/55">
                {t("hero.visual.meeting.state")}
              </span>
            </div>
            <div className="mt-4 flex items-end justify-between gap-4">
              <div className="min-w-0">
                <div className="text-2xl font-semibold tracking-[-0.04em]">{t("hero.visual.meeting.time")}</div>
                <div className="mt-1 truncate text-xs text-white/55">{t("hero.visual.meeting.meta")}</div>
              </div>
              <div className="flex -space-x-2">
                {[1, 2, 3].map((item) => (
                  <span key={item} className="h-7 w-7 rounded-full border border-white/10 bg-white/8" />
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[1.2rem] border border-zinc-200 bg-white p-3">
            <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">{t("hero.visual.filesLabel")}</div>
            <div className="mt-2 truncate text-xs font-medium text-zinc-950">{t("hero.visual.files.1.title")}</div>
            <div className="mt-1 truncate text-[11px] text-zinc-500">{t("hero.visual.files.1.meta")}</div>
          </div>

          <div className="rounded-[1.2rem] border border-zinc-200 bg-white p-3">
            <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">{t("hero.visual.calendarLabel")}</div>
            <div className="mt-2 truncate text-xs font-semibold text-zinc-950">{t("hero.visual.calendarTitle")}</div>
            <div className="mt-1 truncate text-[11px] text-zinc-500">{t("hero.visual.calendarMeta")}</div>
          </div>
        </div>

        <div className="hidden rounded-[1rem] border border-zinc-200 bg-zinc-50/70 px-3 py-2 sm:flex sm:items-center sm:justify-between sm:gap-3">
          <div className="min-w-0">
            <div className="truncate text-sm font-semibold text-zinc-950">{t("hero.visual.messages.3.title")}</div>
            <div className="mt-0.5 truncate text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
              {t("hero.visual.messages.3.meta")}
            </div>
          </div>
          <span className="shrink-0 rounded-full border border-zinc-200 bg-white px-2 py-0.5 text-[10px] text-zinc-500">
            {t("hero.visual.messages.3.state")}
          </span>
        </div>
      </div>
    </div>
  );
}

function WorkflowPreview({ step, t }: { step: "mail" | "files" | "meet" | "flow"; t: (key: string) => string }) {
  if (step === "mail") {
    return (
      <div className="rounded-[1.6rem] border border-zinc-200 bg-zinc-50/70 p-4">
        <div className="text-xs uppercase tracking-[0.18em] text-zinc-500">{t("workflow.steps.mail.mockup.label")}</div>
        <div className="mt-3 rounded-2xl border border-zinc-200 bg-white p-4">
          <div className="text-sm font-semibold text-zinc-950">{t("workflow.steps.mail.mockup.subject")}</div>
          <div className="mt-2 text-xs text-zinc-500">{t("workflow.steps.mail.mockup.meta")}</div>
        </div>
      </div>
    );
  }

  if (step === "files") {
    return (
      <div className="grid gap-3">
        <div className="rounded-2xl border border-zinc-200 bg-white p-4">
          <div className="text-xs uppercase tracking-[0.18em] text-zinc-500">{t("workflow.steps.files.mockup.fileLabel")}</div>
          <div className="mt-2 text-sm font-semibold text-zinc-950">{t("workflow.steps.files.mockup.fileTitle")}</div>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-zinc-950 p-4 text-white">
          <div className="text-xs uppercase tracking-[0.18em] text-white/50">{t("workflow.steps.files.mockup.sheetLabel")}</div>
          <div className="mt-2 text-sm font-semibold">{t("workflow.steps.files.mockup.sheetTitle")}</div>
        </div>
      </div>
    );
  }

  if (step === "meet") {
    return (
      <div className="rounded-[1.6rem] border border-zinc-200 bg-zinc-950 p-5 text-white">
        <div className="flex items-center justify-between">
          <div className="text-sm font-medium">{t("workflow.steps.meet.mockup.room")}</div>
          <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-white/55">
            {t("workflow.steps.meet.mockup.state")}
          </span>
        </div>
        <div className="mt-6 flex -space-x-2">
          {[1, 2, 3].map((item) => (
            <span key={item} className="h-10 w-10 rounded-full border border-white/10 bg-white/10" />
          ))}
        </div>
        <div className="mt-5 text-sm text-white/60">{t("workflow.steps.meet.mockup.note")}</div>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {[1, 2].map((item) => (
        <div key={item} className="flex items-start gap-3 rounded-2xl border border-zinc-200 bg-zinc-50/70 p-4">
          <CheckCircle2 className="mt-0.5 h-4 w-4 text-zinc-500" />
          <div>
            <div className="text-sm font-semibold text-zinc-950">{t(`workflow.steps.flow.mockup.tasks.${item}.title`)}</div>
            <div className="mt-1 text-xs text-zinc-500">{t(`workflow.steps.flow.mockup.tasks.${item}.meta`)}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function ArchitecturePreview({ t }: { t: (key: string) => string }) {
  return (
    <div className="rounded-[2.5rem] border border-zinc-200 bg-white p-6 shadow-[0_30px_100px_-60px_rgba(15,23,42,0.24)] sm:p-8">
      <div className="grid gap-6 xl:grid-cols-[240px_minmax(0,1fr)_240px] xl:items-center">
        <div className="rounded-[1.75rem] border border-zinc-200 bg-zinc-50/75 p-5">
          <div className="text-xs uppercase tracking-[0.18em] text-zinc-500">{t("modular.visual.standaloneLabel")}</div>
          <div className="mt-3 text-lg font-semibold tracking-[-0.03em] text-zinc-950">{t("modular.visual.standaloneTitle")}</div>
          <div className="mt-4 flex flex-wrap gap-2">
            {["mail", "meet", "writer"].map((item) => (
              <ModulePill key={item}>{t(`modular.visual.modules.${item}`)}</ModulePill>
            ))}
          </div>
        </div>

        <div className="rounded-4xl border border-zinc-200 bg-zinc-950 p-6 text-white">
          <div className="text-xs uppercase tracking-[0.18em] text-white/46">{t("modular.visual.workspaceLabel")}</div>
          <div className="mt-3 text-3xl font-semibold tracking-tighter">{t("modular.visual.workspaceTitle")}</div>
          <div className="mt-6 flex flex-wrap gap-2">
            {["mail", "chat", "meet", "writer", "sheets", "files", "calendar", "flow"].map((item) => (
              <ModulePill key={item} dark>
                {t(`modular.visual.modules.${item}`)}
              </ModulePill>
            ))}
          </div>
          <div className="mt-8 rounded-[1.6rem] border border-white/10 bg-white/4 p-5">
            <div className="text-xs uppercase tracking-[0.18em] text-white/46">{t("modular.visual.foundationLabel")}</div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {["identity", "access", "storage", "security", "apis"].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/4 px-4 py-3 text-sm text-white/72">
                  {t(`modular.visual.foundations.${item}`)}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-zinc-200 bg-zinc-50/75 p-5">
          <div className="text-xs uppercase tracking-[0.18em] text-zinc-500">{t("modular.visual.unifiedLabel")}</div>
          <div className="mt-3 text-lg font-semibold tracking-[-0.03em] text-zinc-950">{t("modular.visual.unifiedTitle")}</div>
          <div className="mt-4 space-y-2">
            {[1, 2, 3].map((item) => (
              <div key={item} className="rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-600">
                {t(`modular.visual.unifiedPoints.${item}`)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function OfficeHero({ t }: { t: (key: string) => string }) {
  return (
    <section className="relative overflow-hidden border-b border-zinc-200/80 bg-[linear-gradient(180deg,#ffffff_0%,#fafafa_100%)]">
      <div aria-hidden={true} className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-44 bg-[radial-gradient(circle_at_top,rgba(148,163,184,0.18),transparent_65%)]" />
        <div
          className="absolute right-[-8%] top-[16%] hidden h-[58%] w-[56%] rounded-full bg-[radial-gradient(circle,rgba(148,163,184,0.16),rgba(148,163,184,0)_68%)] xl:block"
        />
        <div
          className="absolute inset-x-[42%] top-[22%] hidden h-[44%] opacity-[0.08] xl:block"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(24,24,27,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(24,24,27,0.5) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.86),rgba(255,255,255,0.42)_30%,rgba(255,255,255,0.94)_100%)]" />
      </div>

      <div className="relative mx-auto flex min-h-[88vh] max-w-360 items-center px-6 py-20 sm:py-24 lg:px-12 lg:py-28">
        <div className="grid w-full min-w-0 gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,620px)] lg:items-center">
          <div className="min-w-0 max-w-2xl lg:pt-2">
            <SectionEyebrow>{t("hero.eyebrow")}</SectionEyebrow>
            <h1 className="mt-7 max-w-5xl text-[clamp(3.4rem,7vw,7rem)] font-semibold leading-[0.92] tracking-[-0.06em] text-zinc-950">
              {t("hero.title")}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-600 sm:text-xl">{t("hero.description")}</p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="h-14 rounded-full bg-zinc-950 px-8 text-sm font-medium text-white hover:bg-zinc-800">
                <Link href="#capabilities">
                  {t("hero.primaryCta")}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 rounded-full border-zinc-300 bg-white/85 px-8 text-sm font-medium text-zinc-950">
                <Link href="#open-technology">{t("hero.secondaryCta")}</Link>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {["mail", "meet", "writer", "identity"].map((item) => (
                <ModulePill key={item}>{t(`hero.signals.${item}`)}</ModulePill>
              ))}
            </div>
          </div>

          <div className="flex min-w-0 items-center justify-center self-center lg:justify-end">
            <HeroWorkspacePreview t={t} />
          </div>
        </div>
      </div>
    </section>
  );
}

function OfficeManifestoSection({ t }: { t: (key: string) => string }) {
  return (
    <section className="py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-12">
        <p className="mx-auto max-w-5xl text-[clamp(2rem,4vw,4rem)] font-semibold leading-[1.04] tracking-tighter text-zinc-950">
          {t("manifesto.statement")}
        </p>
        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-600">{t("manifesto.description")}</p>
      </div>
    </section>
  );
}

function OfficeCapabilitiesSection({ t }: { t: (key: string) => string }) {
  const items = [
    { key: "communicate", icon: MessageSquare, accent: "bg-zinc-950" },
    { key: "create", icon: FileText, accent: "bg-zinc-700" },
    { key: "organize", icon: CalendarDays, accent: "bg-slate-500" },
    { key: "secure", icon: ShieldCheck, accent: "bg-slate-700" },
  ] as const;

  return (
    <Section id="capabilities" eyebrow={t("capabilities.eyebrow")} title={t("capabilities.title")} description={t("capabilities.description")}>
      <div className="grid gap-5 md:grid-cols-2">
        {items.map((item) => (
          <div
            key={item.key}
            className="relative overflow-hidden rounded-4xl border border-zinc-200/80 bg-white p-6 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.22)]"
          >
            <div aria-hidden={true} className={cn("absolute inset-x-0 top-0 h-1", item.accent)} />
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-zinc-200 bg-zinc-50 text-zinc-700">
              <item.icon className="h-5 w-5" />
            </span>
            <h3 className="mt-8 text-2xl font-semibold tracking-[-0.04em] text-zinc-950">{t(`capabilities.items.${item.key}.title`)}</h3>
            <p className="mt-4 text-sm leading-7 text-zinc-600">{t(`capabilities.items.${item.key}.description`)}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {[1, 2, 3].map((module) => (
                <ModulePill key={module}>{t(`capabilities.items.${item.key}.modules.${module}`)}</ModulePill>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function ConnectedWorkflowSection({ t }: { t: (key: string) => string }) {
  const steps = ["mail", "files", "meet", "flow"] as const;

  return (
    <Section id="workflow" eyebrow={t("workflow.eyebrow")} title={t("workflow.title")} description={t("workflow.description")} tone="muted">
      <div className="grid gap-5 xl:grid-cols-4">
        {steps.map((step) => (
          <div key={step} className="rounded-4xl border border-zinc-200 bg-white p-5 shadow-[0_18px_60px_-48px_rgba(15,23,42,0.22)]">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">{t(`workflow.steps.${step}.time`)}</div>
            <div className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-zinc-950">{t(`workflow.steps.${step}.title`)}</div>
            <p className="mt-3 text-sm leading-7 text-zinc-600">{t(`workflow.steps.${step}.description`)}</p>
            <div className="mt-6">
              <WorkflowPreview step={step} t={t} />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function OfficeApplicationsSection({ t }: { t: (key: string) => string }) {
  const categories = [
    {
      key: "communication",
      items: [
        { key: "mail", icon: Mail },
        { key: "chat", icon: MessageSquare },
        { key: "meet", icon: Video },
      ],
    },
    {
      key: "creation",
      items: [
        { key: "writer", icon: FileText },
        { key: "sheets", icon: FileSpreadsheet },
        { key: "files", icon: Files },
      ],
    },
    {
      key: "planning",
      items: [
        { key: "calendar", icon: CalendarDays },
        { key: "flow", icon: FolderKanban },
      ],
    },
    {
      key: "foundations",
      items: [
        { key: "identity", icon: ShieldCheck },
        { key: "vault", icon: LockKeyhole },
      ],
    },
  ] as const;

  return (
    <Section id="applications" eyebrow={t("applications.eyebrow")} title={t("applications.title")} description={t("applications.description")}>
      <div className="grid gap-8 xl:grid-cols-2">
        {categories.map((category) => (
          <div key={category.key} className="rounded-4xl border border-zinc-200 bg-white p-6 shadow-[0_20px_60px_-48px_rgba(15,23,42,0.18)]">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
              {t(`applications.categories.${category.key}.eyebrow`)}
            </div>
            <div className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-zinc-950">
              {t(`applications.categories.${category.key}.title`)}
            </div>
            <div className="mt-6 grid gap-4">
              {category.items.map((item) => (
                <div key={item.key} className="rounded-[1.5rem] border border-zinc-200 bg-zinc-50/75 p-5">
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-zinc-200 bg-white text-zinc-700">
                      <item.icon className="h-4 w-4" />
                    </span>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                        {t(`applications.modules.${item.key}.label`)}
                      </div>
                      <div className="mt-2 text-lg font-semibold tracking-[-0.03em] text-zinc-950">
                        {t(`applications.modules.${item.key}.title`)}
                      </div>
                      <p className="mt-3 text-sm leading-7 text-zinc-600">{t(`applications.modules.${item.key}.description`)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function ModularWorkspaceSection({ t }: { t: (key: string) => string }) {
  return (
    <Section eyebrow={t("modular.eyebrow")} title={t("modular.title")} description={t("modular.description")} tone="muted">
      <div className="grid gap-8 xl:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] xl:items-center">
        <ArchitecturePreview t={t} />
        <div className="space-y-4">
          {[1, 2, 3].map((item) => (
            <CardLink
              key={item}
              title={t(`modular.points.${item}.title`)}
              description={t(`modular.points.${item}.description`)}
              className="min-h-52.5 shadow-[0_18px_60px_-48px_rgba(15,23,42,0.18)]"
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

function IdentityGovernanceSection({ t }: { t: (key: string) => string }) {
  const items = [
    { key: "identity", icon: Users },
    { key: "access", icon: ShieldCheck },
    { key: "spaces", icon: LockKeyhole },
    { key: "traceability", icon: Network },
  ] as const;

  return (
    <Section eyebrow={t("governance.eyebrow")} title={t("governance.title")} description={t("governance.description")} tone="dark">
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {items.map((item) => (
          <CardLink
            key={item.key}
            title={t(`governance.items.${item.key}.title`)}
            description={t(`governance.items.${item.key}.description`)}
            icon={item.icon}
            dark
            className="min-h-62.5"
          />
        ))}
      </div>
    </Section>
  );
}

function DeploymentSection({ t }: { t: (key: string) => string }) {
  return (
    <Section id="deployment" eyebrow={t("deployment.eyebrow")} title={t("deployment.title")} description={t("deployment.description")}>
      <div className="grid gap-5 lg:grid-cols-2">
        {["managed", "controlled"].map((item) => (
          <div key={item} className="rounded-4xl border border-zinc-200 bg-white p-7 shadow-[0_20px_60px_-45px_rgba(15,23,42,0.2)]">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
              {t(`deployment.cards.${item}.eyebrow`)}
            </div>
            <div className="mt-4 text-3xl font-semibold tracking-tighter text-zinc-950">
              {t(`deployment.cards.${item}.title`)}
            </div>
            <p className="mt-4 text-sm leading-7 text-zinc-600">{t(`deployment.cards.${item}.description`)}</p>
            <div className="mt-6 space-y-3">
              {[1, 2, 3, 4].map((point) => (
                <div key={point} className="flex items-start gap-3 rounded-2xl border border-zinc-200 bg-zinc-50/70 px-4 py-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-zinc-500" />
                  <span className="text-sm text-zinc-600">{t(`deployment.cards.${item}.points.${point}`)}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function OpenTechnologySection({ t }: { t: (key: string) => string }) {
  const items = [
    { key: "openSource", icon: FileText },
    { key: "control", icon: ShieldCheck },
    { key: "interoperability", icon: Network },
  ] as const;

  return (
    <Section id="open-technology" eyebrow={t("openTechnology.eyebrow")} title={t("openTechnology.title")} description={t("openTechnology.description")} tone="muted">
      <div className="grid gap-5 lg:grid-cols-3">
        {items.map((item) => (
          <CardLink
            key={item.key}
            title={t(`openTechnology.items.${item.key}.title`)}
            description={t(`openTechnology.items.${item.key}.description`)}
            icon={item.icon}
            className="min-h-57.5"
          />
        ))}
      </div>
    </Section>
  );
}

function DesignedForSection({ t }: { t: (key: string) => string }) {
  return (
    <Section eyebrow={t("designedFor.eyebrow")} title={t("designedFor.title")}>
      <div className="grid gap-5 md:grid-cols-2">
        {["distributed", "institutions", "community", "internal"].map((item) => (
          <CardLink
            key={item}
            title={t(`designedFor.items.${item}.title`)}
            description={t(`designedFor.items.${item}.description`)}
            className="min-h-55"
          />
        ))}
      </div>
    </Section>
  );
}

function EcosystemRelationSection({ locale, t }: OfficePageContentProps) {
  return (
    <Section eyebrow={t("ecosystem.eyebrow")} title={t("ecosystem.title")} description={t("ecosystem.description")} tone="muted">
      <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-zinc-200 bg-white p-6 shadow-[0_30px_100px_-60px_rgba(15,23,42,0.28)] sm:p-8">
        <div className="grid gap-5">
          {["organizations", "office", "platforms", "foundations"].map((item, index) => (
            <React.Fragment key={item}>
              <div className="rounded-[1.75rem] border border-zinc-200 bg-zinc-50/75 p-6">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                  {t(`ecosystem.layers.${item}.eyebrow`)}
                </div>
                <div className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-zinc-950">
                  {t(`ecosystem.layers.${item}.title`)}
                </div>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{t(`ecosystem.layers.${item}.description`)}</p>
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
      <div className="mt-10">
        <Button asChild variant="outline" className="rounded-full border-zinc-300 bg-white px-6 text-zinc-950">
          <Link href={localizeHref(locale, "/platform")}>{t("ecosystem.cta")}</Link>
        </Button>
      </div>
    </Section>
  );
}

function OfficeFinalCtaSection({ locale, t }: OfficePageContentProps) {
  const items = [
    { key: "organizations", href: "#deployment", icon: FolderKanban },
    { key: "developers", href: localizeHref(locale, "/developers"), icon: Network },
    { key: "community", href: localizeHref(locale, "/community"), icon: Users },
  ] as const;

  return (
    <section className="border-t border-zinc-200 py-24 sm:py-28">
      <div className="mx-auto max-w-360 px-6 lg:px-12">
        <SectionEyebrow>{t("finalCta.eyebrow")}</SectionEyebrow>
        <h2 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tighter text-zinc-950 sm:text-5xl lg:text-6xl">
          {t("finalCta.title")}
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">{t("finalCta.description")}</p>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {items.map((item) => (
            <CardLink
              key={item.key}
              title={t(`finalCta.items.${item.key}.title`)}
              description={t(`finalCta.items.${item.key}.description`)}
              href={item.href}
              cta={t(`finalCta.items.${item.key}.cta`)}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export async function OfficePage({ locale }: OfficePageProps) {
  const translate = await getTranslations({ locale, namespace: "Public.office.page" });
  const t = (key: string) => translate(key);

  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-950">
      <Header locale={locale as Locale} />
      <main className="flex-1 overflow-x-hidden">
        <OfficeHero t={t} />
        <OfficeManifestoSection t={t} />
        <OfficeCapabilitiesSection t={t} />
        <ConnectedWorkflowSection t={t} />
        <OfficeApplicationsSection t={t} />
        <ModularWorkspaceSection t={t} />
        <IdentityGovernanceSection t={t} />
        <DeploymentSection t={t} />
        <OpenTechnologySection t={t} />
        <DesignedForSection t={t} />
        <EcosystemRelationSection locale={locale} t={t} />
        <OfficeFinalCtaSection locale={locale} t={t} />
      </main>
      <Footer locale={locale as Locale} />
    </div>
  );
}
