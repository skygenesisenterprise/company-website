"use client";

/**
 * Sky Genesis Enterprise
 *
 * Scope: Official Website
 * Component: AdminHeader
 * Layer: Platform UI
 * Purpose: Provides workspace context, global actions, notifications and user access for the SGE dashboard.
 *
 * Stability: Active
 * Owner: SGE Web Platform
 * Contact: contact@skygenesisenterprise.com
 */

import * as React from "react";
import { useRouter } from "next/navigation";
import {
  Activity,
  Bell,
  ChevronDown,
  LogOut,
  Search,
  Settings,
  Shield,
  User,
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { useAuth } from "@/context/AuthContext";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function AdminHeader({ className }: { className?: string }) {
  const { user, logout } = useAuth();
  const router = useRouter();

  const notifications = [
    {
      id: "notif_translation",
      title: "Traductions à vérifier",
      description: "2 pages publiques ont des clés manquantes.",
      time: "Il y a 12 min",
      type: "warning",
    },
    {
      id: "notif_pgp",
      title: "Page PGP mise à jour",
      description: "Le Trust Center a été modifié récemment.",
      time: "Il y a 1h",
      type: "info",
    },
    {
      id: "notif_article",
      title: "Publication planifiée",
      description: "Un article SGE Journal est prévu aujourd'hui.",
      time: "Il y a 2h",
      type: "success",
    },
  ];

  const [isNotificationsMenuOpen, setIsNotificationsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const handleLogout = async () => {
    await logout();
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <header
      className={cn(
        "grid h-14 grid-cols-[1fr_auto_1fr] items-center gap-4 border-b border-border/60 bg-background/95 px-4 backdrop-blur-sm lg:px-6",
        className,
      )}
    >
      <div aria-hidden="true" />
      <div className="flex min-w-0 justify-center">
        <button
          type="button"
          className="hidden h-9 w-[min(36rem,50vw)] items-center gap-2 rounded-xl border border-border/60 bg-muted/30 px-3 text-sm text-muted-foreground md:flex"
          aria-label="Ouvrir la recherche globale"
        >
          <Search className="h-4 w-4 shrink-0" />
          <span className="truncate">Rechercher une page, un article, un module...</span>
        </button>
      </div>

      <div className="flex items-center justify-end gap-2">
        <Button
          variant="ghost"
          className="hidden rounded-full border border-border/60 bg-card px-3 py-1.5 text-xs text-foreground hover:bg-muted/30 sm:inline-flex"
          onClick={() => router.push("/dashboard/status")}
          aria-label="Voir le statut opérationnel"
        >
          <span className="mr-2 h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
          Operational
        </Button>

        <DropdownMenu open={isNotificationsMenuOpen} onOpenChange={setIsNotificationsMenuOpen}>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="relative rounded-xl"
              aria-label="Ouvrir les notifications"
            >
              <Bell className="h-4 w-4" />
              <span className="sr-only">Notifications</span>
              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-destructive" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80 rounded-xl border-border/60 bg-card">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {notifications.map((notification) => (
              <DropdownMenuItem key={notification.id} className="items-start gap-3 p-3">
                <span
                  className={cn(
                    "mt-1.5 h-2 w-2 shrink-0 rounded-full",
                    notification.type === "warning" && "bg-amber-500",
                    notification.type === "info" && "bg-muted-foreground",
                    notification.type === "success" && "bg-emerald-500",
                  )}
                  aria-hidden="true"
                />
                <span className="flex min-w-0 flex-col gap-1">
                  <span className="text-sm font-medium text-foreground">{notification.title}</span>
                  <span className="text-xs leading-5 text-muted-foreground">
                    {notification.description}
                  </span>
                  <span className="text-xs text-muted-foreground">{notification.time}</span>
                </span>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => router.push("/dashboard/activity")}>
              <Activity className="mr-2 h-4 w-4" />
              Voir toute l'activité
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu open={isUserMenuOpen} onOpenChange={setIsUserMenuOpen}>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="flex items-center gap-2 rounded-xl px-2"
              aria-label="Ouvrir le menu utilisateur"
            >
              <Avatar className="h-7 w-7">
                <AvatarImage src={user?.avatarUrl} alt={user?.name} />
                <AvatarFallback className="text-xs">
                  {user?.name ? getInitials(user.name) : "U"}
                </AvatarFallback>
              </Avatar>
              <span className="hidden text-sm font-medium md:inline-block">
                {user?.name || "User"}
              </span>
              <motion.div
                animate={{ rotate: isUserMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="hidden md:block"
              >
                <ChevronDown className="h-3 w-3 text-muted-foreground" />
              </motion.div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 rounded-xl border-border/60 bg-card">
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium">{user?.name || "User"}</p>
                <p className="text-xs text-muted-foreground">{user?.email}</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => router.push("/dashboard/profile")}>
              <User className="mr-2 h-4 w-4" />
              Profil
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => router.push("/dashboard/settings")}>
              <Settings className="mr-2 h-4 w-4" />
              Paramètres
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => router.push("/dashboard/activity")}>
              <Activity className="mr-2 h-4 w-4" />
              Activité
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => router.push("/dashboard/security")}>
              <Shield className="mr-2 h-4 w-4" />
              Sécurité
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout} className="text-destructive">
              <LogOut className="mr-2 h-4 w-4" />
              Déconnexion
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
