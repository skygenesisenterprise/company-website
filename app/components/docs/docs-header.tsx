"use client";

import * as React from "react";
import { DocsLogo } from "@/components/docs/docs-logo";
import { DocsSidebar } from "@/components/docs/docs-sidebar";
import type { DocsTreeNode } from "@/components/docs/docs-nav";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { GitHubIcon } from "@/components/ui/icons/GitHubIcon";
import { BookOpen, ExternalLink, LogIn, Menu, Search } from "lucide-react";
import { useSearchContext } from "fumadocs-ui/contexts/search";
import Link from "next/link";

interface DocsHeaderProps {
  tree: DocsTreeNode[];
}

export function DocsHeader({ tree }: DocsHeaderProps) {
  const [open, setOpen] = React.useState(false);
  const { setOpenSearch } = useSearchContext();

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center gap-3">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                className="inline-flex size-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground lg:hidden"
                aria-label="Open documentation navigation"
              >
                <Menu className="size-4" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[320px] gap-0 p-0">
              <SheetHeader className="border-b border-border/70">
                <SheetTitle className="flex items-center gap-2 text-sm">
                  <DocsLogo />
                  Documentation
                </SheetTitle>
              </SheetHeader>
              <div className="overflow-y-auto p-4">
                <DocsSidebar tree={tree} onNavigate={() => setOpen(false)} />
              </div>
            </SheetContent>
          </Sheet>

          <Link href="/docs" className="flex min-w-0 items-center gap-2">
            <DocsLogo />
            <span className="truncate text-sm font-semibold tracking-normal">
              Sky Genesis Enterprise Docs
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-1">
          <Link
            href="/docs"
            className="hidden items-center gap-2 rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground md:inline-flex"
          >
            <BookOpen className="size-4" />
            Docs
          </Link>
          <Link
            href="/fr"
            className="hidden items-center gap-2 rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground md:inline-flex"
          >
            <ExternalLink className="size-4" />
            Website
          </Link>
          <Link
            href="/login"
            className="hidden items-center gap-2 rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground sm:inline-flex"
          >
            <LogIn className="size-4" />
            Login
          </Link>
          <a
            href="https://github.com/skygenesisenterprise/company-website"
            target="_blank"
            rel="noreferrer"
            className="inline-flex size-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            aria-label="Open GitHub repository"
          >
            <GitHubIcon className="size-4" />
          </a>
          <button
            type="button"
            className="inline-flex size-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            aria-label="Search documentation"
            onClick={() => setOpenSearch(true)}
          >
            <Search className="size-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
