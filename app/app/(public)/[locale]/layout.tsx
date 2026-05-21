import { NextIntlClientProvider } from "next-intl";
import { getTranslations, getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { LocaleProvider } from "@/context/locale-context";
import { Locale } from "@/lib/locale";
import { HeaderInfo } from "@/components/public/headerinfo/HeaderInfo";
import { ConsentBanner } from "@/components/consent-banner";

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

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <LocaleProvider initialLocale={locale as Locale}>
        <div className="min-h-screen bg-background text-foreground">
          <div className="relative isolate flex min-h-screen flex-col">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-[radial-gradient(circle_at_top,rgba(57,76,140,0.12),transparent_62%)]" />
            <HeaderInfo locale={locale} />
            <div className="relative flex min-h-screen flex-col">
              {children}
            </div>
          </div>
          <ConsentBanner />
        </div>
      </LocaleProvider>
    </NextIntlClientProvider>
  );
}
