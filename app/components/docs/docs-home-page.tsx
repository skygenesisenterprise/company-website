import * as React from "react";
import type { DocsNavPage } from "@/components/docs/docs-nav";
import { ArrowRight, BookOpen, Code2, LifeBuoy, ShieldCheck } from "lucide-react";
import Link from "next/link";

interface DocsHomePageProps {
  pages: DocsNavPage[];
}

const highlights = [
  {
    title: "Guides",
    description: "Structurer les procédures, les standards et les parcours de prise en main.",
    icon: BookOpen,
  },
  {
    title: "API",
    description: "Préparer les références techniques et les contrats d'intégration.",
    icon: Code2,
  },
  {
    title: "Support",
    description: "Centraliser les réponses utiles pour réduire la friction côté utilisateurs.",
    icon: LifeBuoy,
  },
  {
    title: "Sécurité",
    description: "Documenter les exigences, politiques et opérations sensibles.",
    icon: ShieldCheck,
  },
];

export function DocsHomePage({ pages }: DocsHomePageProps) {
  const featuredPages = pages.filter((page) => page.url !== "/docs").slice(0, 6);

  return (
    <div className="mx-auto max-w-5xl pb-16">
      <section className="border-b border-border/70 pb-10">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Documentation
          </p>
          <h1 className="text-4xl font-semibold tracking-normal text-foreground sm:text-5xl">
            Support de documentation Sky Genesis Enterprise
          </h1>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Une base claire pour organiser les guides, références et procédures internes ou publiques.
          </p>
        </div>
      </section>

      <section className="grid gap-4 py-8 sm:grid-cols-2">
        {highlights.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.title} className="rounded-md border border-border bg-card p-5 shadow-xs">
              <div className="mb-4 flex size-9 items-center justify-center rounded-md bg-primary/10 text-primary">
                <Icon className="size-4" />
              </div>
              <h2 className="text-base font-semibold text-foreground">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p>
            </div>
          );
        })}
      </section>

      <section className="rounded-md border border-border bg-card shadow-xs">
        <div className="border-b border-border/70 px-5 py-4">
          <h2 className="text-base font-semibold text-foreground">Pages disponibles</h2>
        </div>
        <div className="divide-y divide-border/70">
          {featuredPages.map((page) => (
            <Link
              key={page.url}
              href={page.url}
              className="flex items-center justify-between gap-4 px-5 py-4 transition-colors hover:bg-muted/60"
            >
              <div className="min-w-0">
                <p className="font-medium text-foreground">{page.title}</p>
                {page.description ? (
                  <p className="mt-1 text-sm text-muted-foreground">{page.description}</p>
                ) : null}
              </div>
              <ArrowRight className="size-4 shrink-0 text-muted-foreground" />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
