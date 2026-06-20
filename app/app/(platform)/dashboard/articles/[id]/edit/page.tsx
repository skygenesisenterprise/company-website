import { editorialArticles } from "../../_data";
import { EditArticleClient } from "./edit-article-client";

export function generateStaticParams() {
  return editorialArticles.map((article) => ({ id: article.id }));
}

export default async function EditArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return <EditArticleClient id={id} />;
}
