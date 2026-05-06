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
    <div className="bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-end h-10 gap-6">
          {/* Search */}
          <HeaderInfoSearch searchLabel={searchLabel} closeSearchLabel={closeSearchLabel} />

          {/* Assistance */}
          <Link
            href="https://support.skygenesisenterprise.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {assistanceLabel}
          </Link>

          {/* Services Commerciaux */}
          <div className="text-sm text-muted-foreground">
            {salesLabel}: {phoneLabel}
          </div>

          {/* Security Info */}
          <div className="relative group flex items-center">
            <button className="text-muted-foreground hover:text-foreground transition-colors">
              <CircleHelp className="h-4 w-4" />
            </button>
            <div className="absolute right-0 top-full pt-2 hidden group-hover:block z-60 w-72">
              <div className="bg-popover border border-border rounded-lg shadow-lg p-3 text-sm text-popover-foreground leading-relaxed">
                {securityLabel}
              </div>
            </div>
          </div>

          {/* Theme Toggle */}
          <HeaderInfoThemeToggle />

          {/* Language Selector */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Globe className="h-4 w-4" />
              <span className="uppercase">{locale}</span>
              <ChevronDown className="h-3 w-3" />
            </button>
            <div className="absolute right-0 top-full pt-2 hidden group-hover:block z-60">
              <div className="bg-background border border-border rounded-xl shadow-xl overflow-hidden min-w-40">
                <div className="p-2">
                  {languageList.map((lang) => (
                    <Link
                      key={lang.code}
                      href={`/${lang.code}`}
                      className="block px-3 py-2 text-sm rounded-lg hover:bg-muted transition-colors"
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
