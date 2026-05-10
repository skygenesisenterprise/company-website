import * as React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
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
      {status}
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
  return (
    <section className="border-b border-slate-200 bg-white py-24 sm:py-28 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-indigo-700">
            SGE Products
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <h1 className="text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
              {product.title}
            </h1>
            <ProductStatusBadge status={product.status} />
          </div>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-700">
            {product.positioning}
          </p>
          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600">
            {product.description}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            {product.ctas.map((cta) => (
              <ProductCTA key={cta.label} cta={cta} locale={locale} />
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
                Concept preview
              </span>
            </div>
            <div className="grid gap-4 p-4 sm:grid-cols-[0.8fr_1.2fr]">
              <div className="space-y-2">
                {product.experienceSteps.map((step) => (
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
            This preview is a conceptual product frame, not a production screenshot.
          </p>
        </div>
      </div>
    </section>
  );
}

function ProductProblemPromise({ product }: { product: ProductService }) {
  return (
    <ProductSection
      eyebrow="Problem & Promise"
      title={product.problem.title}
      description={product.problem.current}
    >
      <div className="grid gap-5 md:grid-cols-3">
        <div className="rounded-lg border border-slate-200 bg-white p-6">
          <h3 className="text-base font-semibold text-slate-950">
            User need
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            {product.problem.userNeed}
          </p>
        </div>
        <div className="rounded-lg border border-indigo-200 bg-indigo-50/50 p-6">
          <h3 className="text-base font-semibold text-slate-950">
            Product promise
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-700">
            {product.problem.promise}
          </p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-6">
          <h3 className="text-base font-semibold text-slate-950">
            Organizational value
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            {product.problem.value}
          </p>
        </div>
      </div>
    </ProductSection>
  );
}

function ProductExperience({ product }: { product: ProductService }) {
  return (
    <ProductSection
      eyebrow="Product Experience"
      title="Intended product flow"
      description="A conceptual user journey for the product experience, scoped to what the product is intended to support."
      muted
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-lg border border-slate-200 bg-white p-6">
          <p className="text-sm font-medium text-slate-950">
            Preview scope
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            The interface preview is intentionally generic. It describes the target experience without implying a final production UI or public availability.
          </p>
        </div>
        <div className="grid gap-3">
          {product.experienceSteps.map((step, index) => (
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

function ProductFeatures({ product }: { product: ProductService }) {
  return (
    <ProductSection
      eyebrow="Key Features"
      title="Key features"
      description="The feature set is described at product level and remains aligned with the current maturity of the service."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {product.features.map((feature) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              className="rounded-lg border border-slate-200 bg-white p-6"
            >
              {Icon ? (
                <Icon className="mb-5 h-5 w-5 text-indigo-700" aria-hidden="true" />
              ) : null}
              <h3 className="text-base font-semibold text-slate-950">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </ProductSection>
  );
}

function ProductUseCases({ product }: { product: ProductService }) {
  return (
    <ProductSection
      eyebrow="Use Cases"
      title="Realistic use cases"
      description="Concrete scenarios that explain where the product can fit without implying customer deployments."
      muted
    >
      <div className="grid gap-5 md:grid-cols-3">
        {product.useCases.map((useCase) => (
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

function ProductPlatformIntegration({ product }: { product: ProductService }) {
  return (
    <ProductSection
      eyebrow="Platform Integration"
      title="Powered by SGE platform services"
      description="The product experience is connected to platform foundations such as identity, search, vault, status and workspace systems."
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
          <p className="text-sm font-medium text-slate-950">
            Integration map
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="rounded-md border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-900">
              {product.title}
            </span>
            <span className="h-px w-8 bg-slate-300" />
            <span className="rounded-md border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700">
              SGE Platform
            </span>
          </div>
          <p className="mt-6 text-sm leading-7 text-slate-600">
            Integrations indicate product direction and dependency alignment. Availability can vary by product maturity.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {product.integrations.map((integration) => (
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
  return (
    <ProductSection
      eyebrow="Availability & Next Step"
      title="Availability and next step"
      description={product.nextStep}
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
                {item.label}
              </p>
              <p className="mt-3 text-sm font-semibold text-slate-950">
                {item.value}
              </p>
            </div>
          ))}
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-6">
          <h3 className="text-lg font-semibold text-slate-950">
            Continue with {product.title}
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Choose the next step that matches the current maturity of this product.
          </p>
          <div className="mt-6 flex flex-col gap-3">
            {product.ctas.map((cta) => (
              <ProductCTA key={cta.label} cta={cta} locale={locale} />
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
        <ProductExperience product={product} />
        <ProductFeatures product={product} />
        <ProductUseCases product={product} />
        <ProductPlatformIntegration product={product} />
        <ProductAvailability locale={locale} product={product} />
      </main>
      <Footer locale={locale as Locale} />
    </div>
  );
}

export {
  ProductHero,
  ProductProblemPromise,
  ProductExperience,
  ProductFeatures,
  ProductUseCases,
  ProductPlatformIntegration,
  ProductAvailability,
  ProductStatusBadge,
  ProductCTA,
};
