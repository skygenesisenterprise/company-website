import { NextIntlClientProvider } from "next-intl";
import { getTranslations, getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { LocaleProvider } from "@/context/locale-context";
import { Locale } from "@/lib/locale";
import { HeaderInfo } from "@/components/public/HeaderInfo";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    return null;
  }

  const messages = await getMessages();
  const t = await getTranslations({ locale, namespace: "HeaderInfo" });

  const translations = {
    search: t("search"),
    closeSearch: t("closeSearch"),
    assistance: t("assistance"),
    salesServices: t("salesServices"),
    phoneNumber: t("phoneNumber"),
  };

  const languageList = Object.entries(t.raw("languages") as [string, string][]).map(
    ([code, label]) => ({ code, label })
  );

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <LocaleProvider initialLocale={locale as Locale}>
        <div className="min-h-screen flex flex-col">
          <HeaderInfo
            locale={locale}
            t={translations}
            languages={languageList}
          />
          {children}
        </div>
      </LocaleProvider>
    </NextIntlClientProvider>
  );
}
