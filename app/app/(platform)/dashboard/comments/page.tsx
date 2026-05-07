"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, MoreHorizontal, MessageSquare, Eye } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface ArticleWithComments {
  id: string;
  title: string;
  category: string;
  totalComments: number;
  pendingComments: number;
  approvedComments: number;
  reportedComments: number;
  lastCommentAt: string;
}

const mockArticles: ArticleWithComments[] = [
  {
    id: "1",
    title: "Les nouvelles réformes économiques annoncées par le gouvernement",
    category: "Politique",
    totalComments: 12,
    pendingComments: 3,
    approvedComments: 8,
    reportedComments: 1,
    lastCommentAt: "2026-03-26T10:30:00",
  },
  {
    id: "2",
    title: "Victoire historique de l'équipe nationale en finale du championnat",
    category: "Sport",
    totalComments: 24,
    pendingComments: 5,
    approvedComments: 19,
    reportedComments: 0,
    lastCommentAt: "2026-03-25T14:20:00",
  },
  {
    id: "3",
    title: "Tensions diplomatiques : les négociations reprennent à Genève",
    category: "International",
    totalComments: 8,
    pendingComments: 2,
    approvedComments: 5,
    reportedComments: 1,
    lastCommentAt: "2026-03-26T09:15:00",
  },
  {
    id: "4",
    title: "Innovation : une startup française révolutionne le secteur de l'énergie",
    category: "Économie",
    totalComments: 15,
    pendingComments: 1,
    approvedComments: 14,
    reportedComments: 0,
    lastCommentAt: "2026-03-24T16:45:00",
  },
  {
    id: "5",
    title: "Météo : vague de chaleur exceptionnelle attendue cette semaine",
    category: "Société",
    totalComments: 6,
    pendingComments: 0,
    approvedComments: 4,
    reportedComments: 2,
    lastCommentAt: "2026-03-23T11:00:00",
  },
  {
    id: "6",
    title: "Le festival de cinéma dévoiler sa sélection officielle",
    category: "Culture",
    totalComments: 18,
    pendingComments: 4,
    approvedComments: 12,
    reportedComments: 2,
    lastCommentAt: "2026-03-24T20:30:00",
  },
  {
    id: "7",
    title: "Interview exclusive avec le nouveau directeur de la Banque Centrale",
    category: "Économie",
    totalComments: 9,
    pendingComments: 1,
    approvedComments: 8,
    reportedComments: 0,
    lastCommentAt: "2026-03-21T13:20:00",
  },
];

export default function CommentsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = mockArticles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffHours < 1) return "À l'instant";
    if (diffHours < 24) return `Il y a ${diffHours}h`;
    if (diffDays < 7) return `Il y a ${diffDays}j`;
    return date.toLocaleDateString("fr-FR", { day: "numeric", month: "short" });
  };

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Commentaires</h1>
          <p className="text-sm text-muted-foreground">Gérez les commentaires par article</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Rechercher un article..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
      </div>

      {/* Articles Table */}
      <div className="rounded-lg border border-border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Article</TableHead>
              <TableHead>Catégorie</TableHead>
              <TableHead className="text-center">Total</TableHead>
              <TableHead className="text-center">En attente</TableHead>
              <TableHead className="text-center">Approuvés</TableHead>
              <TableHead className="text-center">Signalés</TableHead>
              <TableHead>Dernier commentaire</TableHead>
              <TableHead className="w-12"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredArticles.length === 0 ? (
              <TableRow>
                <TableCell colSpan={8} className="h-24 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <MessageSquare className="h-8 w-8 text-muted-foreground" />
                    <p className="text-muted-foreground">Aucun article trouvé</p>
                  </div>
                </TableCell>
              </TableRow>
            ) : (
              filteredArticles.map((article) => (
                <TableRow key={article.id}>
                  <TableCell>
                    <Link
                      href={`/dashboard/comments/articles/${article.id}`}
                      className="font-medium hover:underline"
                    >
                      {article.title}
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{article.category}</Badge>
                  </TableCell>
                  <TableCell className="text-center">
                    <Badge variant="secondary">{article.totalComments}</Badge>
                  </TableCell>
                  <TableCell className="text-center">
                    {article.pendingComments > 0 ? (
                      <Badge variant="outline" className="bg-yellow-100 text-yellow-800">
                        {article.pendingComments}
                      </Badge>
                    ) : (
                      <span className="text-muted-foreground">-</span>
                    )}
                  </TableCell>
                  <TableCell className="text-center">
                    <span className="text-green-600">{article.approvedComments}</span>
                  </TableCell>
                  <TableCell className="text-center">
                    {article.reportedComments > 0 ? (
                      <Badge variant="destructive">{article.reportedComments}</Badge>
                    ) : (
                      <span className="text-muted-foreground">-</span>
                    )}
                  </TableCell>
                  <TableCell className="text-muted-foreground text-sm">
                    {formatDate(article.lastCommentAt)}
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="icon" asChild>
                      <Link href={`/dashboard/comments/articles/${article.id}`}>
                        <Eye className="h-4 w-4" />
                        <span className="sr-only">Voir les commentaires</span>
                      </Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
