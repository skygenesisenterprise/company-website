import * as React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Layers3,
  Network,
  ShieldCheck,
} from "lucide-react";
import { Header } from "@/components/public/Header";
import { Footer } from "@/components/public/Footer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/locale";
import type {
  ProductCta,
  ProductService,
  ProductStatus,
} from "@/lib/products/product-services";

interface ProductServicePageProps {
  locale: string;
  product: ProductService;
}

interface ProductTextCard {
  title: string;
  description: string;
}

interface ProductSectionProps {
  eyebrow: string;
  title: string;
  description?: string;
  muted?: boolean;
  children: React.ReactNode;
}

function localizeHref(locale: string, href: string) {
  if (href.startsWith("http")) {
    return href;
  }

  return `/${locale}${href.startsWith("/") ? href : `/${href}`}`;
}

function ProductSection({
  eyebrow,
  title,
  description,
  muted = false,
  children,
}: ProductSectionProps) {
  return (
    <section className={cn("py-20 sm:py-24", muted && "bg-slate-50/70")}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-indigo-700">
            {eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              {description}
            </p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}

function ProductStatusBadge({ status }: { status: ProductStatus }) {
  const tStatus = useTranslations("Public.home.page.status");
  const toneByStatus: Record<ProductStatus, string> = {
    Available: "border-emerald-200 bg-emerald-50 text-emerald-800",
    "Private preview": "border-indigo-200 bg-indigo-50 text-indigo-800",
    "In development": "border-amber-200 bg-amber-50 text-amber-800",
    Experimental: "border-sky-200 bg-sky-50 text-sky-800",
    Planned: "border-slate-200 bg-slate-50 text-slate-700",
    Research: "border-violet-200 bg-violet-50 text-violet-800",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium",
        toneByStatus[status]
      )}
    >
      {tStatus(status)}
    </span>
  );
}

function ProductCTA({
  cta,
  locale,
}: {
  cta: ProductCta;
  locale: string;
}) {
  const isPrimary = cta.variant !== "secondary";

  return (
    <Button
      asChild
      size="lg"
      variant={isPrimary ? "default" : "outline"}
      className={cn(
        "h-12 rounded-md px-6 text-sm font-medium",
        isPrimary && "bg-slate-950 text-white hover:bg-indigo-950"
      )}
    >
      <Link href={localizeHref(locale, cta.href)}>
        {cta.label}
        {isPrimary ? <ArrowRight className="h-4 w-4" /> : null}
      </Link>
    </Button>
  );
}

function ProductHero({ locale, product }: ProductServicePageProps) {
  const t = useTranslations("Public.home.productPage");
  const tProducts = useTranslations("Public.home.page.products.services");
  const ctaLabels = tProducts.raw(`${product.slug}.ctas`) as [string, string];
  const experienceSteps = tProducts.raw(`${product.slug}.experienceSteps`) as ProductTextCard[];

  return (
    <section className="border-b border-slate-200 bg-white py-24 sm:py-28 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-indigo-700">
            {t("brand")}
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <h1 className="text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
              {tProducts(`${product.slug}.title`)}
            </h1>
            <ProductStatusBadge status={product.status} />
          </div>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-700">
            {tProducts(`${product.slug}.positioning`)}
          </p>
          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600">
            {tProducts(`${product.slug}.description`)}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            {product.ctas.map((cta, index) => (
              <ProductCTA
                key={cta.href}
                cta={{ ...cta, label: ctaLabels[index] }}
                locale={locale}
              />
            ))}
          </div>
        </div>
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-5 sm:p-6">
          <div className="rounded-md border border-slate-200 bg-white">
            <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-indigo-300" />
              </div>
              <span className="text-xs font-medium text-slate-500">
                {t("preview.conceptPreview")}
              </span>
            </div>
            <div className="grid gap-4 p-4 sm:grid-cols-[0.8fr_1.2fr]">
              <div className="space-y-2">
                {experienceSteps.map((step) => (
                  <div
                    key={step.title}
                    className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2"
                  >
                    <p className="text-xs font-medium text-slate-950">
                      {step.title}
                    </p>
                  </div>
                ))}
              </div>
              <div className="rounded-md border border-slate-200 bg-white p-4">
                <div className="mb-4 h-2 w-24 rounded-full bg-indigo-200" />
                <div className="space-y-3">
                  <div className="h-3 w-full rounded-full bg-slate-100" />
                  <div className="h-3 w-4/5 rounded-full bg-slate-100" />
                  <div className="h-3 w-2/3 rounded-full bg-slate-100" />
                </div>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="h-20 rounded-md border border-slate-200 bg-slate-50" />
                  <div className="h-20 rounded-md border border-slate-200 bg-slate-50" />
                </div>
              </div>
            </div>
          </div>
          <p className="mt-4 text-xs leading-5 text-slate-500">
            {t("preview.disclaimer")}
          </p>
        </div>
      </div>
    </section>
  );
}

function ProductProblemPromise({ product }: { product: ProductService }) {
  const t = useTranslations("Public.home.productPage");
  const tProducts = useTranslations("Public.home.page.products.services");

  return (
    <ProductSection
      eyebrow={t("problem.eyebrow")}
      title={tProducts(`${product.slug}.problem.title`)}
      description={tProducts(`${product.slug}.problem.current`)}
    >
      <div className="grid gap-5 md:grid-cols-3">
        <div className="rounded-lg border border-slate-200 bg-white p-6">
          <h3 className="text-base font-semibold text-slate-950">
            {t("problem.userNeed")}
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            {tProducts(`${product.slug}.problem.userNeed`)}
          </p>
        </div>
        <div className="rounded-lg border border-indigo-200 bg-indigo-50/50 p-6">
          <h3 className="text-base font-semibold text-slate-950">
            {t("problem.productPromise")}
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-700">
            {tProducts(`${product.slug}.problem.promise`)}
          </p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-6">
          <h3 className="text-base font-semibold text-slate-950">
            {t("problem.organizationalValue")}
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            {tProducts(`${product.slug}.problem.value`)}
          </p>
        </div>
      </div>
    </ProductSection>
  );
}

function ProductExperience({ product }: { product: ProductService }) {
  const t = useTranslations("Public.home.productPage");
  const tProducts = useTranslations("Public.home.page.products.services");
  const experienceSteps = tProducts.raw(`${product.slug}.experienceSteps`) as ProductTextCard[];

  return (
    <ProductSection
      eyebrow={t("experience.eyebrow")}
      title={t("experience.title")}
      description={t("experience.description")}
      muted
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-lg border border-slate-200 bg-white p-6">
          <p className="text-sm font-medium text-slate-950">
            {t("experience.previewScope")}
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            {t("experience.previewDescription")}
          </p>
        </div>
        <div className="grid gap-3">
          {experienceSteps.map((step, index) => (
            <div key={step.title} className="flex gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-indigo-200 bg-indigo-50 text-sm font-semibold text-indigo-800">
                {index + 1}
              </div>
              <div className="flex-1 rounded-lg border border-slate-200 bg-white p-4">
                <h3 className="text-sm font-semibold text-slate-950">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ProductSection>
  );
}

function ProductWhyNow({ product }: { product: ProductService }) {
  const t = useTranslations("Public.home.productPage");
  const tProducts = useTranslations("Public.home.page.products.services");
  const productTitle = tProducts(`${product.slug}.title`);

  const items = [
    {
      title: t("whyNow.items.clarity.title"),
      description: t("whyNow.items.clarity.description"),
      icon: CheckCircle2,
    },
    {
      title: t("whyNow.items.adoption.title", { product: productTitle }),
      description: t("whyNow.items.adoption.description", { product: productTitle }),
      icon: Building2,
    },
    {
      title: t("whyNow.items.foundation.title"),
      description: t("whyNow.items.foundation.description"),
      icon: ShieldCheck,
    },
  ];

  return (
    <ProductSection
      eyebrow={t("whyNow.eyebrow")}
      title={t("whyNow.title")}
      description={t("whyNow.description")}
      muted
    >
      <div className="grid gap-5 md:grid-cols-3">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.title} className="rounded-lg border border-slate-200 bg-white p-6">
              <Icon className="mb-5 h-5 w-5 text-indigo-700" aria-hidden="true" />
              <h3 className="text-base font-semibold text-slate-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
            </div>
          );
        })}
      </div>
    </ProductSection>
  );
}

function ProductFeatures({ product }: { product: ProductService }) {
  const t = useTranslations("Public.home.productPage");
  const tProducts = useTranslations("Public.home.page.products.services");
  const features = tProducts.raw(`${product.slug}.features`) as ProductTextCard[];

  return (
    <ProductSection
      eyebrow={t("features.eyebrow")}
      title={t("features.title")}
      description={t("features.description")}
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {product.features.map((feature, index) => {
          const Icon = feature.icon;
          const featureText = features[index];

          return (
            <div
              key={featureText.title}
              className="rounded-lg border border-slate-200 bg-white p-6"
            >
              {Icon ? (
                <Icon className="mb-5 h-5 w-5 text-indigo-700" aria-hidden="true" />
              ) : null}
              <h3 className="text-base font-semibold text-slate-950">
                {featureText.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {featureText.description}
              </p>
            </div>
          );
        })}
      </div>
    </ProductSection>
  );
}

function ProductEcosystemConnections({
  locale,
  product,
}: ProductServicePageProps) {
  const t = useTranslations("Public.home.productPage");
  const tProducts = useTranslations("Public.home.page.products.services");
  const productTitle = tProducts(`${product.slug}.title`);

  const items = [
    {
      title: t("ecosystemConnections.items.products.title"),
      description: t("ecosystemConnections.items.products.description", { product: productTitle }),
      href: localizeHref(locale, "/products"),
      icon: Building2,
    },
    {
      title: t("ecosystemConnections.items.platform.title"),
      description: t("ecosystemConnections.items.platform.description"),
      href: localizeHref(locale, "/platform"),
      icon: Layers3,
    },
    {
      title: t("ecosystemConnections.items.solutions.title"),
      description: t("ecosystemConnections.items.solutions.description"),
      href: localizeHref(locale, "/solutions/workplace"),
      icon: Network,
    },
  ];

  return (
    <ProductSection
      eyebrow={t("ecosystemConnections.eyebrow")}
      title={t("ecosystemConnections.title")}
      description={t("ecosystemConnections.description")}
    >
      <div className="grid gap-5 md:grid-cols-3">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              href={item.href}
              className="rounded-lg border border-slate-200 bg-white p-6 transition-colors hover:border-indigo-200"
            >
              <Icon className="mb-5 h-5 w-5 text-indigo-700" aria-hidden="true" />
              <h3 className="text-base font-semibold text-slate-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-indigo-800">
                {t("common.explore")}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </Link>
          );
        })}
      </div>
    </ProductSection>
  );
}

function ProductUseCases({ product }: { product: ProductService }) {
  const t = useTranslations("Public.home.productPage");
  const tProducts = useTranslations("Public.home.page.products.services");
  const useCases = tProducts.raw(`${product.slug}.useCases`) as ProductTextCard[];

  return (
    <ProductSection
      eyebrow={t("useCases.eyebrow")}
      title={t("useCases.title")}
      description={t("useCases.description")}
      muted
    >
      <div className="grid gap-5 md:grid-cols-3">
        {useCases.map((useCase) => (
          <div
            key={useCase.title}
            className="rounded-lg border border-slate-200 bg-white p-6"
          >
            <h3 className="text-base font-semibold text-slate-950">
              {useCase.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              {useCase.description}
            </p>
          </div>
        ))}
      </div>
    </ProductSection>
  );
}

function ProductRecommendedNextStep({
  locale,
  product,
}: ProductServicePageProps) {
  const t = useTranslations("Public.home.productPage");
  const tProducts = useTranslations("Public.home.page.products.services");
  const productTitle = tProducts(`${product.slug}.title`);

  const items = [
    {
      title: t("recommendedNextStep.items.explore.title"),
      description: t("recommendedNextStep.items.explore.description", { product: productTitle }),
      href: localizeHref(locale, "/products"),
      label: t("recommendedNextStep.items.explore.label"),
    },
    {
      title: t("recommendedNextStep.items.evaluate.title"),
      description: t("recommendedNextStep.items.evaluate.description"),
      href: localizeHref(locale, "/solutions/workplace"),
      label: t("recommendedNextStep.items.evaluate.label"),
    },
    {
      title: t("recommendedNextStep.items.contact.title"),
      description: t("recommendedNextStep.items.contact.description"),
      href: localizeHref(locale, "/company/contact"),
      label: t("recommendedNextStep.items.contact.label"),
    },
  ];

  return (
    <ProductSection
      eyebrow={t("recommendedNextStep.eyebrow")}
      title={t("recommendedNextStep.title")}
      description={t("recommendedNextStep.description")}
      muted
    >
      <div className="grid gap-5 md:grid-cols-3">
        {items.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="rounded-lg border border-slate-200 bg-white p-6 transition-colors hover:border-indigo-200"
          >
            <h3 className="text-base font-semibold text-slate-950">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-indigo-800">
              {item.label}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </span>
          </Link>
        ))}
      </div>
    </ProductSection>
  );
}

function ProductPlatformIntegration({ product }: { product: ProductService }) {
  const t = useTranslations("Public.home.productPage");
  const tProducts = useTranslations("Public.home.page.products.services");
  const integrations = tProducts.raw(`${product.slug}.integrations`) as string[];

  return (
    <ProductSection
      eyebrow={t("platformIntegration.eyebrow")}
      title={t("platformIntegration.title")}
      description={t("platformIntegration.description")}
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
          <p className="text-sm font-medium text-slate-950">
            {t("platformIntegration.mapTitle")}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="rounded-md border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-900">
              {tProducts(`${product.slug}.title`)}
            </span>
            <span className="h-px w-8 bg-slate-300" />
            <span className="rounded-md border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700">
              {t("platformIntegration.platformLabel")}
            </span>
          </div>
          <p className="mt-6 text-sm leading-7 text-slate-600">
            {t("platformIntegration.mapDescription")}
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {integrations.map((integration) => (
            <div
              key={integration}
              className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4"
            >
              <CheckCircle2 className="h-4 w-4 text-indigo-700" aria-hidden="true" />
              <span className="text-sm font-medium text-slate-800">
                {integration}
              </span>
            </div>
          ))}
        </div>
      </div>
    </ProductSection>
  );
}

function ProductAvailability({
  locale,
  product,
}: ProductServicePageProps) {
  const t = useTranslations("Public.home.productPage");
  const tStatus = useTranslations("Public.home.page.status");
  const tProducts = useTranslations("Public.home.page.products.services");
  const ctaLabels = tProducts.raw(`${product.slug}.ctas`) as [string, string];
  const labelMap: Record<string, string> = {
    "Current status": t("availability.labels.currentStatus"),
    "Public access": t("availability.labels.publicAccess"),
    "Private preview": t("availability.labels.privatePreview"),
    Documentation: t("availability.labels.documentation"),
    "Workspace integration": t("availability.labels.workspaceIntegration"),
    "API/SDK": t("availability.labels.apiSdk"),
  };
  const valueMap: Record<string, string> = {
    "In progress": t("availability.values.inProgress"),
    "Not open yet": t("availability.values.notOpenYet"),
    Limited: t("availability.values.limited"),
  };

  function localizeAvailabilityValue(value: string) {
    if (value in valueMap) {
      return valueMap[value];
    }

    try {
      return tStatus(value);
    } catch {
      return value;
    }
  }

  return (
    <ProductSection
      eyebrow={t("availability.eyebrow")}
      title={t("availability.title")}
      description={tProducts(`${product.slug}.nextStep`)}
      muted
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_0.7fr]">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {product.availability.map((item) => (
            <div
              key={item.label}
              className="rounded-lg border border-slate-200 bg-white p-5"
            >
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
                {labelMap[item.label] ?? item.label}
              </p>
              <p className="mt-3 text-sm font-semibold text-slate-950">
                {localizeAvailabilityValue(item.value)}
              </p>
            </div>
          ))}
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-6">
          <h3 className="text-lg font-semibold text-slate-950">
            {t("availability.continueWith", { product: tProducts(`${product.slug}.title`) })}
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            {t("availability.description")}
          </p>
          <div className="mt-6 flex flex-col gap-3">
            {product.ctas.map((cta, index) => (
              <ProductCTA
                key={cta.href}
                cta={{ ...cta, label: ctaLabels[index] }}
                locale={locale}
              />
            ))}
          </div>
        </div>
      </div>
    </ProductSection>
  );
}

export function ProductServicePage({ locale, product }: ProductServicePageProps) {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header locale={locale as Locale} />
      <main className="flex-1">
        <ProductHero locale={locale} product={product} />
        <ProductProblemPromise product={product} />
        <ProductWhyNow product={product} />
        <ProductExperience product={product} />
        <ProductFeatures product={product} />
        <ProductEcosystemConnections locale={locale} product={product} />
        <ProductUseCases product={product} />
        <ProductPlatformIntegration product={product} />
        <ProductRecommendedNextStep locale={locale} product={product} />
        <ProductAvailability locale={locale} product={product} />
      </main>
      <Footer locale={locale as Locale} />
    </div>
  );
}

export {
  ProductHero,
  ProductProblemPromise,
  ProductWhyNow,
  ProductExperience,
  ProductFeatures,
  ProductEcosystemConnections,
  ProductUseCases,
  ProductPlatformIntegration,
  ProductRecommendedNextStep,
  ProductAvailability,
  ProductStatusBadge,
  ProductCTA,
};
