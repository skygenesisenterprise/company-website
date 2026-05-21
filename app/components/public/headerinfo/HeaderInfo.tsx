import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Globe, ChevronDown, CircleHelp } from "lucide-react";
import { HeaderInfoSearch } from "@/components/public/headerinfo/HeaderInfoSearch";
import { HeaderInfoThemeToggle } from "@/components/public/headerinfo/HeaderInfoThemeToggle";

interface HeaderInfoProps {
  locale?: string;
}

export async function HeaderInfo({ locale: initialLocale }: HeaderInfoProps) {
  const locale = initialLocale || "fr";
  const t = await getTranslations({ locale, namespace: "HeaderInfo" });

  const searchLabel = t("search");
  const closeSearchLabel = t("closeSearch");
  const assistanceLabel = t("assistance");
  const salesLabel = t("salesServices");
  const phoneLabel = t("phoneNumber");
  const securityLabel = t("officialSitesInfo");

  const languageList = Object.entries(t.raw("languages") as Record<string, string>).map(
    ([code, label]) => ({ code, label })
  );

  return (
    <div className="relative z-[60] border-b border-border/50 bg-background/55 backdrop-blur-xl">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-11 items-center justify-end gap-4 sm:gap-6">
          {/* Search */}
          <HeaderInfoSearch searchLabel={searchLabel} closeSearchLabel={closeSearchLabel} />

          {/* Assistance */}
          <Link
            href="https://support.skygenesisenterprise.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-sm text-muted-foreground transition-colors hover:text-foreground md:inline-flex"
          >
            {assistanceLabel}
          </Link>

          {/* Services Commerciaux */}
          <div className="hidden text-sm text-muted-foreground lg:block">
            {salesLabel}: {phoneLabel}
          </div>

          {/* Security Info */}
          <div className="relative group flex items-center">
            <button className="text-muted-foreground transition-colors hover:text-foreground">
              <CircleHelp className="h-4 w-4" />
            </button>
            <div className="absolute right-0 top-full pt-2 hidden group-hover:block z-60 w-72">
              <div className="rounded-2xl border border-border bg-popover/95 p-3 text-sm leading-relaxed text-popover-foreground shadow-xl backdrop-blur">
                {securityLabel}
              </div>
            </div>
          </div>

          {/* Theme Toggle */}
          <HeaderInfoThemeToggle />

          {/* Language Selector */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground">
              <Globe className="h-4 w-4" />
              <span className="uppercase">{locale}</span>
              <ChevronDown className="h-3 w-3" />
            </button>
            <div className="absolute right-0 top-full pt-2 hidden group-hover:block z-60">
              <div className="min-w-40 overflow-hidden rounded-2xl border border-border bg-background/95 shadow-xl backdrop-blur">
                <div className="p-2">
                  {languageList.map((lang) => (
                    <Link
                      key={lang.code}
                      href={`/${lang.code}`}
                      className="block rounded-xl px-3 py-2 text-sm transition-colors hover:bg-muted"
                    >
                      {lang.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
