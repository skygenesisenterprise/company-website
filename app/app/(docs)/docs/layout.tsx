import * as React from "react";
import { DocsHeader } from "@/components/docs/docs-header";
import type { DocsTreeNode } from "@/components/docs/docs-nav";
import { DocsSidebar } from "@/components/docs/docs-sidebar";
import { source } from "@/lib/source";
import type { Root } from "fumadocs-core/page-tree";

const tree = normalizeDocsTree(source.pageTree);

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <DocsHeader tree={tree} />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-8 sm:px-6 lg:grid-cols-[260px_minmax(0,1fr)] lg:px-8">
        <aside className="hidden lg:block lg:sticky lg:top-20 lg:h-[calc(100vh-6rem)] lg:overflow-y-auto lg:pr-4">
          <DocsSidebar tree={tree} />
        </aside>
        <main className="min-w-0">{children}</main>
      </div>
    </div>
  );
}

function normalizeDocsTree(root: Root): DocsTreeNode[] {
  return root.children.map(normalizeDocsNode).filter(Boolean) as DocsTreeNode[];
}

function normalizeDocsNode(node: Root["children"][number]): DocsTreeNode | null {
  if (node.type === "separator") {
    return {
      type: "separator",
      title: getNodeText(node.name),
    };
  }

  if (node.type === "page") {
    return {
      type: "page",
      title: getNodeText(node.name) || "Untitled",
      url: node.url,
      external: node.external,
    };
  }

  const children = node.children
    .map(normalizeDocsNode)
    .filter(Boolean) as DocsTreeNode[];

  if (node.index) {
    children.unshift({
      type: "page",
      title: getNodeText(node.index.name) || "Overview",
      url: node.index.url,
      external: node.index.external,
    });
  }

  return {
    type: "folder",
    title: getNodeText(node.name) || "Section",
    url: node.index?.url,
    defaultOpen: node.defaultOpen || node.root,
    collapsible: node.collapsible,
    children,
  };
}

function getNodeText(value: React.ReactNode): string {
  if (typeof value === "string") {
    return value;
  }

  if (typeof value === "number") {
    return String(value);
  }

  return "";
}
