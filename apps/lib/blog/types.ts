export interface BlogAuthor {
  slug: string;
  name: string;
  role: string;
}

export interface BlogCodeSample {
  language: string;
  filename: string;
  content: string;
}

export interface BlogSection {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  callout?: string;
  codeSample?: BlogCodeSample;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  readingTime: number;
  author: BlogAuthor;
}

export interface BlogCategory {
  slug: string;
  label: string;
  description: string;
  aliases?: string[];
}

export interface EditorialCollection {
  slug: string;
  title: string;
  description: string;
  articleSlugs: string[];
}

export interface EditorialArticle extends BlogPost {
  categorySlug: string;
  featured?: boolean;
  tags: string[];
  collectionSlugs: string[];
  aliases?: string[];
  summary: string[];
  sections: BlogSection[];
  relatedSlugs: string[];
}

export const BLOG_CATEGORIES = [
  "Company",
  "Vision",
  "Engineering",
  "Infrastructure",
  "Security",
  "Open Source",
  "Product Updates",
  "Research",
  "Europe & Sovereignty",
  "Developer Experience",
] as const;
