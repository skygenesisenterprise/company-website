"use client";

import * as React from "react";
import { AlertTriangle, Search } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

export interface DashboardPageHeaderProps {
  title: string;
  description: string;
  action?: React.ReactNode;
}

export function DashboardPageHeader({ title, description, action }: DashboardPageHeaderProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
      <div className="min-w-0">
        <h1 className="truncate text-2xl font-semibold tracking-tight text-foreground">{title}</h1>
        <p className="mt-1 max-w-2xl text-sm text-muted-foreground">{description}</p>
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}

export interface DashboardMetricCardProps {
  label: string;
  value: string | number;
  helper?: string;
  icon?: React.ElementType;
}

export function DashboardMetricCard({ label, value, helper, icon: Icon }: DashboardMetricCardProps) {
  return (
    <div className="rounded-lg border border-border bg-card p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-sm text-muted-foreground">{label}</p>
          <p className="mt-1 text-2xl font-semibold text-foreground">{value}</p>
          {helper ? <p className="mt-1 truncate text-xs text-muted-foreground">{helper}</p> : null}
        </div>
        {Icon ? (
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-muted">
            <Icon className="h-4 w-4 text-muted-foreground" />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export function DashboardToolbar({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col gap-3 sm:flex-row sm:items-center">{children}</div>;
}

export interface DashboardSearchProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

export function DashboardSearch({ value, onChange, placeholder }: DashboardSearchProps) {
  return (
    <div className="relative min-w-0 flex-1">
      <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="pl-9"
      />
    </div>
  );
}

export interface DashboardFilterOption {
  value: string;
  label: string;
}

export interface DashboardFilterProps {
  value: string;
  onChange: (value: string) => void;
  options: DashboardFilterOption[];
  label: string;
}

export function DashboardFilter({ value, onChange, options, label }: DashboardFilterProps) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-full sm:w-48" aria-label={label}>
        <SelectValue placeholder={label} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

const statusStyles: Record<string, string> = {
  active: "border-emerald-200 bg-emerald-50 text-emerald-700",
  approved: "border-emerald-200 bg-emerald-50 text-emerald-700",
  subscribed: "border-emerald-200 bg-emerald-50 text-emerald-700",
  pending: "border-amber-200 bg-amber-50 text-amber-700",
  reported: "border-orange-200 bg-orange-50 text-orange-700",
  paused: "border-amber-200 bg-amber-50 text-amber-700",
  invited: "border-amber-200 bg-amber-50 text-amber-700",
  rejected: "border-slate-200 bg-slate-50 text-slate-700",
  unsubscribed: "border-slate-200 bg-slate-50 text-slate-700",
  cancelled: "border-slate-200 bg-slate-50 text-slate-700",
  expired: "border-slate-200 bg-slate-50 text-slate-700",
  disabled: "border-slate-200 bg-slate-50 text-slate-700",
  spam: "border-red-200 bg-red-50 text-red-700",
  error: "border-red-200 bg-red-50 text-red-700",
  suspended: "border-red-200 bg-red-50 text-red-700",
};

export function DashboardStatusBadge({ status, label }: { status: string; label: string }) {
  return (
    <Badge variant="outline" className={cn("font-medium", statusStyles[status])}>
      {label}
    </Badge>
  );
}

const roleStyles: Record<string, string> = {
  owner: "border-slate-300 bg-slate-100 text-slate-800",
  admin: "border-red-200 bg-red-50 text-red-700",
  editor: "border-blue-200 bg-blue-50 text-blue-700",
  moderator: "border-amber-200 bg-amber-50 text-amber-700",
  user: "border-slate-200 bg-slate-50 text-slate-700",
};

export function DashboardRoleBadge({ role, label }: { role: string; label: string }) {
  return (
    <Badge variant="outline" className={cn("font-medium", roleStyles[role] ?? roleStyles.user)}>
      {label}
    </Badge>
  );
}

export function DashboardEmptyState({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="flex min-h-52 flex-col items-center justify-center px-6 py-10 text-center">
      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-muted">
        <Icon className="h-5 w-5 text-muted-foreground" />
      </div>
      <p className="mt-3 font-medium text-foreground">{title}</p>
      <p className="mt-1 max-w-md text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

export function DashboardConfirmDialog({
  open,
  onOpenChange,
  title,
  description,
  confirmLabel,
  onConfirm,
  destructive = true,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description: string;
  confirmLabel: string;
  onConfirm: () => void;
  destructive?: boolean;
}) {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <div className="mb-1 flex h-9 w-9 items-center justify-center rounded-md bg-muted">
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </div>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Annuler</AlertDialogCancel>
          <AlertDialogAction
            onClick={onConfirm}
            className={destructive ? "bg-destructive text-destructive-foreground hover:bg-destructive/90" : ""}
          >
            {confirmLabel}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export function ResponsiveTableShell({ children }: { children: React.ReactNode }) {
  return <div className="overflow-hidden rounded-lg border border-border bg-card">{children}</div>;
}

export function MobileResourceList({ children }: { children: React.ReactNode }) {
  return <div className="grid gap-3 md:hidden">{children}</div>;
}

export function MobileResourceCard({ children }: { children: React.ReactNode }) {
  return <div className="rounded-lg border border-border bg-card p-4">{children}</div>;
}

export function DesktopTable({ children }: { children: React.ReactNode }) {
  return <div className="hidden md:block">{children}</div>;
}

export function TruncatedText({ children, className }: { children: React.ReactNode; className?: string }) {
  return <span className={cn("block min-w-0 truncate", className)}>{children}</span>;
}

export function MutedMeta({ children }: { children: React.ReactNode }) {
  return <span className="text-xs text-muted-foreground">{children}</span>;
}

export function QuietButton(props: React.ComponentProps<typeof Button>) {
  return <Button variant="ghost" size="sm" {...props} />;
}
