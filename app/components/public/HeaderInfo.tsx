"use client";

import Link from "next/link";
import { Search, Globe, ChevronDown, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Language {
  code: string;
  label: string;
}

interface Translations {
  search: string;
  closeSearch: string;
  assistance: string;
  salesServices: string;
  phoneNumber: string;
}

interface HeaderInfoProps {
  locale?: string;
  t?: Translations;
  languages?: Language[];
}

export function HeaderInfo({ locale = "fr", t, languages = [] }: HeaderInfoProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLangOpen, setIsLangOpen] = useState(false);

  const searchLabel = t?.search || "Rechercher";
  const closeSearchLabel = t?.closeSearch || "Fermer la recherche";
  const assistanceLabel = t?.assistance || "Assistance";
  const salesLabel = t?.salesServices || "Services Commerciaux";
  const phoneLabel = t?.phoneNumber || "Non disponible";

  return (
    <div className="bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-end h-10 gap-6">
          {/* Search */}
          <div className="relative flex items-center">
            {isSearchOpen ? (
              <div className="flex items-center gap-2 animate-in slide-in-from-right-4 fade-in duration-200">
                <input
                  type="text"
                  placeholder={searchLabel}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-7 px-3 text-sm bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary w-48"
                  autoFocus
                />
                <button
                  onClick={() => {
                    setIsSearchOpen(false);
                    setSearchQuery("");
                  }}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={closeSearchLabel}
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                aria-label={searchLabel}
              >
                <Search className="h-4 w-4" />
              </button>
            )}
          </div>

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

          {/* Language Selector */}
          <div
            className="relative group"
            onMouseEnter={() => setIsLangOpen(true)}
            onMouseLeave={() => setIsLangOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Globe className="h-4 w-4" />
              <span className="uppercase">{locale}</span>
              <ChevronDown className="h-3 w-3" />
            </button>
            <AnimatePresence>
              {isLangOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-full pt-2 z-60"
                >
                  <div className="bg-background border border-border rounded-xl shadow-xl overflow-hidden min-w-40">
                    <div className="p-2">
                      {languages.map((lang) => (
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
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}