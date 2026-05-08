import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { ArrowLeft, ArrowRight, Clock, FileText, Mail, Rss } from "lucide-react";

import { Footer } from "@/components/public/Footer";
import { Header } from "@/components/public/Header";
import { defaultLocale, isValidLocale, type Locale } from "@/lib/locale";

interface ArticleConfig {
  key: string;
  categoryHref: string;
  related: string[];
}

const articleConfigs: Record<string, ArticleConfig> = {
  "construire-infrastructure-numerique-europeenne": {
    key: "infrastructure",
    categoryHref: "/blog/category/infrastructure",
    related: ["identity", "cloud", "security"],
  },
  "identite-socle-services-sge": {
    key: "identity",
    categoryHref: "/blog/category/identite",
    related: ["infrastructure", "security", "developers"],
  },
  "aether-office-workplace-souverain": {
    key: "aetherOffice",
    categoryHref: "/blog/category/produits-aether",
    related: ["identity", "sovereignty", "cloud"],
  },
  "open-source-ouverture-progressive": {
    key: "openSource",
    categoryHref: "/blog/category/open-source",
    related: ["developers", "sovereignty", "research"],
  },
  "securite-par-defaut-approche-produit": {
    key: "security",
    categoryHref: "/blog/category/securite",
    related: ["identity", "infrastructure", "developers"],
  },
  "signifie-vraiment-souverainete-numerique": {
    key: "sovereignty",
    categoryHref: "/blog/category/souverainete-numerique",
    related: ["cloud", "openSource", "aetherOffice"],
  },
};

const fallbackArticle: ArticleConfig = {
  key: "infrastructure",
  categoryHref: "/blog/category/infrastructure",
  related: ["identity", "cloud", "security"],
};

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ locale?: string; name: string }>;
}) {
  const { locale: paramLocale, name } = await params;
  const locale: Locale = paramLocale && isValidLocale(paramLocale) ? paramLocale : defaultLocale;
  const t = await getTranslations({ locale, namespace: "BlogArticle" });

  const article = articleConfigs[name] ?? fallbackArticle;
  const paragraphs = t.raw(`articles.${article.key}.paragraphs`) as string[];
  const takeaways = t.raw(`articles.${article.key}.takeaways`) as string[];

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header locale={locale} />

      <main className="flex-1">
        <article>
          <header className="border-b border-border/50 bg-muted/20">
            <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
              <Link
                href={`/${locale}/blog`}
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4" />
                {t("backToJournal")}
              </Link>

              <div className="mt-10 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                <Link
                  href={`/${locale}${article.categoryHref}`}
                  className="rounded-full border border-border/50 bg-card px-3 py-1 font-medium text-foreground"
                >
                  {t(`articles.${article.key}.category`)}
                </Link>
                <span>{t(`articles.${article.key}.date`)}</span>
                <span aria-hidden="true">/</span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {t(`articles.${article.key}.readTime`)}
                </span>
              </div>

              <h1 className="mt-6 max-w-4xl text-4xl font-normal leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                {t(`articles.${article.key}.title`)}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
                {t(`articles.${article.key}.excerpt`)}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                <span>{t("byline", { author: t(`articles.${article.key}.author`) })}</span>
                <span>{t("publishedIn", { publication: t("publicationName") })}</span>
              </div>
            </div>
          </header>

          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[minmax(0,760px)_minmax(280px,1fr)] lg:px-8 lg:py-16">
            <div>
              <div className="rounded-lg border border-border/50 bg-card p-6 sm:p-8">
                <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                  {t("summaryTitle")}
                </p>
                <ul className="mt-5 space-y-3">
                  {takeaways.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 space-y-7 text-lg leading-8 text-foreground">
                {paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-12 rounded-lg border border-border/50 bg-muted/20 p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-muted-foreground" />
                  <h2 className="text-xl font-medium text-foreground">{t("editorialNoteTitle")}</h2>
                </div>
                <p className="mt-4 leading-relaxed text-muted-foreground">{t("editorialNoteDescription")}</p>
              </div>
            </div>

            <aside className="space-y-6">
              <section className="rounded-lg border border-border/50 bg-card p-6">
                <h2 className="text-lg font-medium text-foreground">{t("articleInfoTitle")}</h2>
                <dl className="mt-5 space-y-4 text-sm">
                  <div>
                    <dt className="text-muted-foreground">{t("authorLabel")}</dt>
                    <dd className="mt-1 font-medium text-foreground">{t(`articles.${article.key}.author`)}</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">{t("categoryLabel")}</dt>
                    <dd className="mt-1 font-medium text-foreground">{t(`articles.${article.key}.category`)}</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">{t("readTimeLabel")}</dt>
                    <dd className="mt-1 font-medium text-foreground">{t(`articles.${article.key}.readTime`)}</dd>
                  </div>
                </dl>
              </section>

              <section className="rounded-lg border border-border/50 bg-card p-6">
                <h2 className="text-lg font-medium text-foreground">{t("relatedTitle")}</h2>
                <div className="mt-5 space-y-4">
                  {article.related.map((relatedKey) => (
                    <Link
                      key={relatedKey}
                      href={`/${locale}${t(`related.${relatedKey}.href`)}`}
                      className="block border-b border-border/50 pb-4 last:border-0 last:pb-0"
                    >
                      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        {t(`related.${relatedKey}.category`)}
                      </span>
                      <span className="mt-1 block text-sm font-medium leading-relaxed text-foreground">
                        {t(`related.${relatedKey}.title`)}
                      </span>
                    </Link>
                  ))}
                </div>
              </section>

              <section className="rounded-lg border border-border/50 bg-card p-6">
                <Mail className="mb-4 h-5 w-5 text-muted-foreground" />
                <h2 className="text-lg font-medium text-foreground">{t("newsletterTitle")}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t("newsletterDescription")}</p>
                <Link
                  href={`/${locale}/blog#newsletter`}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-foreground"
                >
                  {t("newsletterLink")}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </section>

              <section className="rounded-lg border border-border/50 bg-card p-6">
                <h2 className="flex items-center gap-2 text-lg font-medium text-foreground">
                  <Rss className="h-5 w-5 text-muted-foreground" />
                  {t("rssTitle")}
                </h2>
                <Link
                  href={`/${locale}/rss.xml`}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-foreground"
                >
                  {t("rssLink")}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </section>
            </aside>
          </div>
        </article>
      </main>

      <Footer locale={locale} />
    </div>
  );
}
