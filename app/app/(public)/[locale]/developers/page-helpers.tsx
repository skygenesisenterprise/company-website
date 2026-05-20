import type { Metadata } from "next";
import { getMessages, getTranslations } from "next-intl/server";
import { DeveloperResourcePage } from "@/components/public/developers/developer-resource-page";
import {
  createDeveloperPortalHome,
  createDeveloperResource,
  type DeveloperPageMessages,
  type DeveloperResourceSlug,
} from "@/lib/developers/developer-resources";

export interface DeveloperPageParams {
  params: Promise<{ locale: string }>;
}

function createDeveloperMetadata(title: string, description: string): Metadata {
  return {
    title,
    description,
  };
}

async function getDeveloperMessages(locale: string): Promise<DeveloperPageMessages> {
  const messages = await getMessages({ locale });
  const developerPage = (messages as { Public?: { home?: { developerPage?: DeveloperPageMessages } } })
    .Public?.home?.developerPage;

  if (!developerPage) {
    throw new Error("Missing Public.home.developerPage messages");
  }

  return developerPage;
}

export async function generateDeveloperHomeMetadata(
  params: DeveloperPageParams["params"]
): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Public.home.developerPage.metadata" });
  const messages = await getDeveloperMessages(locale);
  const page = createDeveloperPortalHome(messages);

  return createDeveloperMetadata(t("title"), page.description);
}

export async function generateDeveloperResourceMetadata(
  params: DeveloperPageParams["params"],
  slug: DeveloperResourceSlug
): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Public.home.developerPage.metadata" });
  const messages = await getDeveloperMessages(locale);
  const page = createDeveloperResource(messages, slug);

  return createDeveloperMetadata(t("titleTemplate", { title: page.title }), page.description);
}

export async function renderDeveloperHomePage(params: DeveloperPageParams["params"]) {
  const { locale } = await params;
  const messages = await getDeveloperMessages(locale);

  return <DeveloperResourcePage locale={locale} page={createDeveloperPortalHome(messages)} />;
}

export async function renderDeveloperResourcePage(
  params: DeveloperPageParams["params"],
  slug: DeveloperResourceSlug
) {
  const { locale } = await params;
  const messages = await getDeveloperMessages(locale);

  return <DeveloperResourcePage locale={locale} page={createDeveloperResource(messages, slug)} />;
}
