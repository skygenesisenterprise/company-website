"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  Search,
  MoreHorizontal,
  Trash2,
  Eye,
  CheckCircle,
  XCircle,
  Flag,
  MessageSquare,
  Clock,
  Reply,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Comment {
  id: string;
  author: string;
  authorAvatar?: string;
  content: string;
  status: "approved" | "pending" | "spam" | "reported";
  createdAt: string;
  replies?: { id: string; author: string; content: string; createdAt: string }[];
}

interface Article {
  id: string;
  title: string;
  category: string;
  totalComments: number;
}

const mockArticles: Record<string, Article> = {
  "1": {
    id: "1",
    title: "Les nouvelles réformes économiques annoncées par le gouvernement",
    category: "Politique",
    totalComments: 12,
  },
  "2": {
    id: "2",
    title: "Victoire historique de l'équipe nationale en finale du championnat",
    category: "Sport",
    totalComments: 24,
  },
  "3": {
    id: "3",
    title: "Tensions diplomatiques : les négociations reprennent à Genève",
    category: "International",
    totalComments: 8,
  },
  "4": {
    id: "4",
    title: "Innovation : une startup française révolutionne le secteur de l'énergie",
    category: "Économie",
    totalComments: 15,
  },
  "5": {
    id: "5",
    title: "Météo : vague de chaleur exceptionnelle attendue cette semaine",
    category: "Société",
    totalComments: 6,
  },
  "6": {
    id: "6",
    title: "Le festival de cinéma dévoiler sa sélection officielle",
    category: "Culture",
    totalComments: 18,
  },
  "7": {
    id: "7",
    title: "Interview exclusive avec le nouveau directeur de la Banque Centrale",
    category: "Économie",
    totalComments: 9,
  },
};

const mockComments: Record<string, Comment[]> = {
  "1": [
    {
      id: "1-1",
      author: "Jean Dupont",
      content: "Excellent article, très informatif merci pour ce travail!",
      status: "approved",
      createdAt: "2026-03-26T10:30:00",
      replies: [
        {
          id: "1-1-1",
          author: "Marie Dupont (Auteur)",
          content: "Merci pour votre commentaire!",
          createdAt: "2026-03-26T11:00:00",
        },
      ],
    },
    {
      id: "1-2",
      author: "Pierre Durant",
      content: "Je ne suis pas d'accord avec cette analyse...",
      status: "pending",
      createdAt: "2026-03-26T09:15:00",
      replies: [],
    },
    {
      id: "1-3",
      author: "Sophie Bernard",
      content: "Merci pour cette explanation claire du contexte.",
      status: "approved",
      createdAt: "2026-03-25T16:45:00",
      replies: [],
    },
    {
      id: "1-4",
      author: "Thomas Martin",
      content: "Ce commentaire a été signalé comme inapproprié.",
      status: "reported",
      createdAt: "2026-03-24T11:00:00",
      replies: [],
    },
  ],
  "2": [
    {
      id: "2-1",
      author: "Marie Martin",
      content: "Quelle victoire historique!",
      status: "approved",
      createdAt: "2026-03-25T14:20:00",
      replies: [],
    },
    {
      id: "2-2",
      author: "Julie Leroy",
      content: "Belle couverture de cet événement sportif.",
      status: "approved",
      createdAt: "2026-03-24T20:30:00",
      replies: [],
    },
    {
      id: "2-3",
      author: "Lucas Moreau",
      content: "Suspicious link in comment",
      status: "spam",
      createdAt: "2026-03-22T08:00:00",
      replies: [],
    },
  ],
  "3": [
    {
      id: "3-1",
      author: "Claire Petit",
      content: "Très bonne analyse!",
      status: "approved",
      createdAt: "2026-03-26T09:15:00",
      replies: [],
    },
    {
      id: "3-2",
      author: "Marc Bernard",
      content: "J'espère que les négociations aboutiront...",
      status: "pending",
      createdAt: "2026-03-25T11:00:00",
      replies: [],
    },
  ],
  "4": [
    {
      id: "4-1",
      author: "Jean Petit",
      content: "Innovation prometteuse!",
      status: "approved",
      createdAt: "2026-03-24T16:45:00",
      replies: [],
    },
  ],
  "5": [
    {
      id: "5-1",
      author: "Marie Durant",
      content: "Attention aux températures...",
      status: "reported",
      createdAt: "2026-03-23T11:00:00",
      replies: [],
    },
  ],
  "6": [
    {
      id: "6-1",
      author: "Sophie Martin",
      content: "Quelle sélection cette année!",
      status: "approved",
      createdAt: "2026-03-24T20:30:00",
      replies: [],
    },
  ],
  "7": [
    {
      id: "7-1",
      author: "Pierre Leroy",
      content: "Interview très intéressante!",
      status: "approved",
      createdAt: "2026-03-21T13:20:00",
      replies: [],
    },
  ],
};

const statusConfig = {
  approved: { label: "Approuvé", variant: "default" as const, icon: CheckCircle },
  pending: { label: "En attente", variant: "secondary" as const, icon: Clock },
  spam: { label: "Spam", variant: "destructive" as const, icon: XCircle },
  reported: { label: "Signalé", variant: "outline" as const, icon: Flag },
};

export default function ArticleCommentsPage() {
  const params = useParams();
  const id = params.id as string;
  const article = mockArticles[id];
  const comments = mockComments[id] || [];

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedComments, setSelectedComments] = useState<string[]>([]);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [commentToDelete, setCommentToDelete] = useState<Comment | null>(null);
  const [viewDialogOpen, setViewDialogOpen] = useState(false);
  const [selectedComment, setSelectedComment] = useState<Comment | null>(null);
  const [replyDialogOpen, setReplyDialogOpen] = useState(false);
  const [replyContent, setReplyContent] = useState("");

  if (!article) {
    return (
      <div className="p-6 space-y-6">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/dashboard/comments">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <h1 className="text-2xl font-bold">Article non trouvé</h1>
        </div>
        <p className="text-muted-foreground">L&apos;article demandé n&apos;existe pas.</p>
      </div>
    );
  }

  const filteredComments = comments.filter(
    (comment) =>
      comment.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      comment.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleSelectAll = () => {
    if (selectedComments.length === filteredComments.length) {
      setSelectedComments([]);
    } else {
      setSelectedComments(filteredComments.map((c) => c.id));
    }
  };

  const toggleSelectComment = (id: string) => {
    setSelectedComments((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  const handleDelete = (comment: Comment) => {
    setCommentToDelete(comment);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    setDeleteDialogOpen(false);
    setCommentToDelete(null);
  };

  const handleView = (comment: Comment) => {
    setSelectedComment(comment);
    setViewDialogOpen(true);
  };

  const handleReply = (comment: Comment) => {
    setSelectedComment(comment);
    setReplyDialogOpen(true);
  };

  const sendReply = () => {
    setReplyDialogOpen(false);
    setReplyContent("");
    setSelectedComment(null);
  };

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

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/dashboard/comments">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Commentaires</h1>
            <p className="text-sm text-muted-foreground">{article.title}</p>
          </div>
        </div>
        <Badge variant="outline">{article.category}</Badge>
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Rechercher un commentaire..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
      </div>

      {/* Bulk Actions */}
      {selectedComments.length > 0 && (
        <div className="flex items-center gap-4 rounded-lg border border-border bg-muted/50 p-3">
          <span className="text-sm text-muted-foreground">
            {selectedComments.length} commentaire{selectedComments.length > 1 ? "s" : ""}{" "}
            sélectionné{selectedComments.length > 1 ? "s" : ""}
          </span>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <CheckCircle className="mr-2 h-4 w-4" />
              Approuver
            </Button>
            <Button variant="outline" size="sm">
              <XCircle className="mr-2 h-4 w-4" />
              Rejeter
            </Button>
            <Button variant="destructive" size="sm">
              <Trash2 className="mr-2 h-4 w-4" />
              Supprimer
            </Button>
          </div>
        </div>
      )}

      {/* Comments Table */}
      <div className="rounded-lg border border-border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">
                <Checkbox
                  checked={
                    selectedComments.length === filteredComments.length &&
                    filteredComments.length > 0
                  }
                  onCheckedChange={toggleSelectAll}
                  aria-label="Sélectionner tout"
                />
              </TableHead>
              <TableHead>Auteur</TableHead>
              <TableHead>Commentaire</TableHead>
              <TableHead>Statut</TableHead>
              <TableHead>Réponses</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="w-12"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredComments.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="h-24 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <MessageSquare className="h-8 w-8 text-muted-foreground" />
                    <p className="text-muted-foreground">Aucun commentaire trouvé</p>
                  </div>
                </TableCell>
              </TableRow>
            ) : (
              filteredComments.map((comment) => {
                const StatusIcon = statusConfig[comment.status].icon;
                return (
                  <TableRow key={comment.id}>
                    <TableCell>
                      <Checkbox
                        checked={selectedComments.includes(comment.id)}
                        onCheckedChange={() => toggleSelectComment(comment.id)}
                        aria-label={`Sélectionner ${comment.author}`}
                      />
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={comment.authorAvatar} />
                          <AvatarFallback className="text-xs">
                            {getInitials(comment.author)}
                          </AvatarFallback>
                        </Avatar>
                        <span className="font-medium">{comment.author}</span>
                      </div>
                    </TableCell>
                    <TableCell className="max-w-md">
                      <p className="truncate text-muted-foreground">{comment.content}</p>
                    </TableCell>
                    <TableCell>
                      <Badge variant={statusConfig[comment.status].variant} className="gap-1">
                        <StatusIcon className="h-3 w-3" />
                        {statusConfig[comment.status].label}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground text-sm">
                      {comment.replies && comment.replies.length > 0 ? (
                        <span>
                          {comment.replies.length} réponse{comment.replies.length > 1 ? "s" : ""}
                        </span>
                      ) : (
                        <span>-</span>
                      )}
                    </TableCell>
                    <TableCell className="text-muted-foreground text-sm">
                      {formatDate(comment.createdAt)}
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Actions</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => handleView(comment)}>
                            <Eye className="mr-2 h-4 w-4" />
                            Voir le commentaire
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleReply(comment)}>
                            <Reply className="mr-2 h-4 w-4" />
                            Répondre
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <CheckCircle className="mr-2 h-4 w-4" />
                            Approuver
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <XCircle className="mr-2 h-4 w-4" />
                            Rejeter
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem
                            className="text-destructive focus:text-destructive"
                            onClick={() => handleDelete(comment)}
                          >
                            <Trash2 className="mr-2 h-4 w-4" />
                            Supprimer
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                );
              })
            )}
          </TableBody>
        </Table>
      </div>

      {/* View Comment Dialog */}
      <Dialog open={viewDialogOpen} onOpenChange={setViewDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Commentaire</DialogTitle>
          </DialogHeader>
          {selectedComment && (
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback>{getInitials(selectedComment.author)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{selectedComment.author}</p>
                  <p className="text-xs text-muted-foreground">
                    {formatDate(selectedComment.createdAt)}
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground">{selectedComment.content}</p>
              {selectedComment.replies && selectedComment.replies.length > 0 && (
                <div className="border-t pt-4 space-y-3">
                  <p className="text-sm font-medium">Réponses ({selectedComment.replies.length})</p>
                  {selectedComment.replies.map((reply) => (
                    <div key={reply.id} className="bg-muted p-3 rounded-lg">
                      <p className="text-sm font-medium">{reply.author}</p>
                      <p className="text-sm text-muted-foreground">{reply.content}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Reply Dialog */}
      <Dialog open={replyDialogOpen} onOpenChange={setReplyDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Répondre au commentaire</DialogTitle>
            <DialogDescription>
              Votre réponse sera ajoutée au commentaire de {selectedComment?.author}
            </DialogDescription>
          </DialogHeader>
          <Textarea
            placeholder="Votre réponse..."
            value={replyContent}
            onChange={(e) => setReplyContent(e.target.value)}
            rows={4}
          />
          <DialogFooter>
            <Button variant="outline" onClick={() => setReplyDialogOpen(false)}>
              Annuler
            </Button>
            <Button onClick={sendReply} disabled={!replyContent.trim()}>
              Envoyer
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Supprimer le commentaire</DialogTitle>
            <DialogDescription>
              Êtes-vous sûr de vouloir supprimer ce commentaire ? Cette action est irréversible.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteDialogOpen(false)}>
              Annuler
            </Button>
            <Button variant="destructive" onClick={confirmDelete}>
              Supprimer
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
