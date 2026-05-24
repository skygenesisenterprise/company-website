import { CopyMarkdownButton } from "@/components/docs/copy-markdown-button";
import { DocsHomePage } from "@/components/docs/docs-home-page";
import type { DocsNavPage } from "@/components/docs/docs-nav";
import { getMDXComponents } from "@/components/docs/mdx-components";
import { getLLMText, getPageImage, source } from "@/lib/source";
import { createRelativeLink } from "fumadocs-ui/mdx";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface DocsPageProps {
  params: Promise<{
    slug?: string[];
  }>;
}

export default async function Page(props: DocsPageProps) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  const isHomePage = !params.slug || params.slug.length === 0;

  if (!page) {
    notFound();
  }

  if (isHomePage) {
    const pages: DocsNavPage[] = source.getPages().map((navPage) => ({
      title: navPage.data.title,
      description: navPage.data.description,
      url: navPage.url,
      slugs: navPage.slugs,
    }));

    return <DocsHomePage pages={pages} />;
  }

  const MDX = page.data.body;
  const markdown = await getLLMText(page);

  return (
    <article className="mx-auto max-w-3xl pb-16">
      <div className="mb-8 flex items-start justify-between gap-4 border-b border-border/70 pb-8">
        <div className="min-w-0">
          <h1 className="text-3xl font-semibold tracking-normal text-foreground sm:text-4xl">
            {page.data.title}
          </h1>
          {page.data.description ? (
            <p className="mt-3 text-base leading-7 text-muted-foreground">
              {page.data.description}
            </p>
          ) : null}
        </div>
        <CopyMarkdownButton markdown={markdown} />
      </div>
      <div className="max-w-none space-y-5 text-base leading-7 text-foreground [&_a]:font-medium [&_a]:text-primary [&_a]:underline-offset-4 hover:[&_a]:underline [&_blockquote]:border-l-2 [&_blockquote]:border-border [&_blockquote]:pl-4 [&_blockquote]:text-muted-foreground [&_code]:rounded [&_code]:bg-muted [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-sm [&_h2]:mt-10 [&_h2]:scroll-m-20 [&_h2]:text-2xl [&_h2]:font-semibold [&_h3]:mt-8 [&_h3]:scroll-m-20 [&_h3]:text-xl [&_h3]:font-semibold [&_li]:ml-5 [&_ol]:list-decimal [&_p]:text-muted-foreground [&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:border [&_pre]:border-border [&_pre]:bg-muted [&_pre]:p-4 [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_ul]:list-disc">
        <MDX
          components={getMDXComponents({
            a: createRelativeLink(source, page),
          })}
        />
      </div>
    </article>
  );
}

export function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(
  props: DocsPageProps,
): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);

  if (!page) {
    notFound();
  }

  return {
    title: `${page.data.title} | Documentation`,
    description: page.data.description,
    openGraph: {
      images: getPageImage(page).url,
    },
  };
}
