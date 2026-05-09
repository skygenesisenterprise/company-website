"use client";

import * as React from "react";
import { Search } from "lucide-react";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface DashboardPageHeaderProps {
  title: string;
  description: string;
  action?: React.ReactNode;
}

export function DashboardPageHeader({ title, description, action }: DashboardPageHeaderProps) {
  return (
    <header className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
      <div className="max-w-3xl space-y-1">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">{title}</h1>
        <p className="text-sm leading-6 text-muted-foreground">{description}</p>
      </div>
      {action ? <div className="flex shrink-0 flex-wrap gap-2">{action}</div> : null}
    </header>
  );
}

export function DashboardToolbar({
  children,
  className,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <Card className={cn("rounded-lg border-border/70 bg-card py-0 shadow-none", className)}>
      <CardContent className="grid gap-3 p-4 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
        {children}
      </CardContent>
    </Card>
  );
}

interface DashboardSearchProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  className?: string;
}

export function DashboardSearch({ value, onChange, placeholder, className }: DashboardSearchProps) {
  return (
    <div className={cn("relative min-w-0", className)}>
      <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="h-10 rounded-md border-border/80 bg-background pl-9"
      />
    </div>
  );
}

export function DashboardTableFrame({ children }: React.PropsWithChildren) {
  return <div className="hidden overflow-hidden rounded-lg border border-border/70 bg-card md:block">{children}</div>;
}

export function DashboardCardGrid({ children }: React.PropsWithChildren) {
  return <div className="grid gap-3 md:hidden">{children}</div>;
}

interface DashboardEmptyStateProps {
  icon: React.ElementType;
  title: string;
  description: string;
  action?: React.ReactNode;
  compact?: boolean;
}

export function DashboardEmptyState({
  icon: Icon,
  title,
  description,
  action,
  compact = false,
}: DashboardEmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-lg border border-dashed border-border/80 bg-muted/10 px-6 text-center",
        compact ? "py-8" : "py-14",
      )}
    >
      <div className="mb-4 flex size-11 items-center justify-center rounded-md border border-border/70 bg-background text-muted-foreground">
        <Icon className="size-5" />
      </div>
      <h2 className="text-base font-semibold text-foreground">{title}</h2>
      <p className="mt-1 max-w-md text-sm leading-6 text-muted-foreground">{description}</p>
      {action ? <div className="mt-5">{action}</div> : null}
    </div>
  );
}

interface DashboardErrorStateProps {
  message: string;
  onRetry?: () => void;
}

export function DashboardErrorState({ message, onRetry }: DashboardErrorStateProps) {
  return (
    <Alert variant="destructive" className="border-destructive/30 bg-destructive/5">
      <AlertDescription className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <span>{message}</span>
        {onRetry ? (
          <Button variant="outline" size="sm" onClick={onRetry}>
            Réessayer
          </Button>
        ) : null}
      </AlertDescription>
    </Alert>
  );
}

export function DashboardLoadingRows({ rows = 6 }: { rows?: number }) {
  return (
    <div className="space-y-3 rounded-lg border border-border/70 bg-card p-4">
      {Array.from({ length: rows }).map((_, index) => (
        <div key={index} className="grid gap-3 md:grid-cols-[2fr_1fr_1fr_120px]">
          <Skeleton className="h-7 rounded-md" />
          <Skeleton className="h-7 rounded-md" />
          <Skeleton className="h-7 rounded-md" />
          <Skeleton className="h-7 rounded-md" />
        </div>
      ))}
    </div>
  );
}

interface DashboardResourceCardProps {
  children: React.ReactNode;
  className?: string;
}

export function DashboardResourceCard({ children, className }: DashboardResourceCardProps) {
  return (
    <div className={cn("rounded-lg border border-border/70 bg-card p-4 shadow-xs", className)}>
      {children}
    </div>
  );
}

interface DashboardMetricCardProps {
  label: string;
  value: string | number;
  detail?: string;
  icon?: React.ElementType;
}

export function DashboardMetricCard({ label, value, detail, icon: Icon }: DashboardMetricCardProps) {
  return (
    <div className="rounded-lg border border-border/70 bg-card p-4 shadow-xs">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm text-muted-foreground">{label}</p>
          <p className="mt-1 text-2xl font-semibold tracking-tight">{value}</p>
          {detail ? <p className="mt-1 text-xs text-muted-foreground">{detail}</p> : null}
        </div>
        {Icon ? (
          <div className="flex size-9 items-center justify-center rounded-md border border-border/70 bg-muted/20 text-muted-foreground">
            <Icon className="size-4" />
          </div>
        ) : null}
      </div>
    </div>
  );
}

const statusToneClasses = {
  green: "border-emerald-200 bg-emerald-50 text-emerald-700",
  amber: "border-amber-200 bg-amber-50 text-amber-700",
  red: "border-rose-200 bg-rose-50 text-rose-700",
  gray: "border-zinc-200 bg-zinc-50 text-zinc-600",
  blue: "border-blue-200 bg-blue-50 text-blue-700",
};

interface DashboardStatusBadgeProps {
  children: React.ReactNode;
  tone?: keyof typeof statusToneClasses;
  className?: string;
}

export function DashboardStatusBadge({
  children,
  tone = "gray",
  className,
}: DashboardStatusBadgeProps) {
  return (
    <Badge variant="outline" className={cn("font-medium", statusToneClasses[tone], className)}>
      {children}
    </Badge>
  );
}

interface DashboardSecretFieldProps {
  value: string;
  visiblePrefix?: number;
}

export function DashboardSecretField({ value, visiblePrefix = 8 }: DashboardSecretFieldProps) {
  const prefix = value.slice(0, visiblePrefix);
  return (
    <code className="inline-flex max-w-full items-center rounded-md border border-border/70 bg-muted/30 px-2 py-1 font-mono text-xs text-foreground">
      <span className="truncate">{prefix}</span>
      <span className="text-muted-foreground">••••••••</span>
    </code>
  );
}

export function DashboardCodeBlock({ children }: React.PropsWithChildren) {
  return (
    <code className="block max-w-full truncate rounded-md border border-border/70 bg-muted/30 px-2 py-1 font-mono text-xs text-foreground">
      {children}
    </code>
  );
}
