"use client";

import Link from "next/link";
import * as React from "react";
import {
  Activity,
  AlertTriangle,
  Clock,
  Eye,
  FileCheck,
  FileWarning,
  Fingerprint,
  GlobeLock,
  KeyRound,
  Link2,
  ListChecks,
  LockKeyhole,
  Radar,
  ScrollText,
  ServerCog,
  Settings,
  ShieldAlert,
  ShieldCheck,
  UserCog,
  Users,
} from "lucide-react";

import {
  DashboardMetricCard,
  DashboardPageHeader,
  DashboardResourceCard,
  DashboardStatusBadge,
  DashboardTableFrame,
} from "@/components/dashboard/cms-shell";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

type AlertSeverity = "critical" | "warning" | "info";
type AlertStatus = "open" | "monitoring" | "resolved";
type Tone = "green" | "amber" | "red" | "gray" | "blue";
type ProtectionStatus = "passed" | "warning" | "failed" | "planned";
type FormStatus = "protected" | "rate-limited" | "needs-review" | "attachment-pending" | "disabled";
type ComplianceStatus = "published" | "configured" | "needs-review" | "planned";
type IntegrationStatus = "connected" | "external-link" | "planned" | "not-configured" | "needs-review";
type ActivityCategory = "access" | "content" | "forms" | "system" | "privacy";
type Priority = "high" | "medium" | "low";
type Effort = "low" | "medium" | "high";

interface SecurityMetric {
  label: string;
  value: string;
  detail: string;
  icon: React.ElementType;
}

interface SecurityAlertItem {
  title: string;
  description: string;
  severity: AlertSeverity;
  recommendation: string;
  status: AlertStatus;
}

interface AccessMetric {
  label: string;
  value: string;
  icon: React.ElementType;
}

interface ProtectionCheck {
  name: string;
  status: ProtectionStatus;
  description: string;
}

interface FormSecurityItem {
  name: string;
  status: FormStatus;
  blockedSpam: string;
  suspiciousPayloads: string;
  failedValidations: string;
  attachmentScanning: string;
  rateLimitTriggers: string;
}

interface ContentIntegrityItem {
  path: string;
  status: string;
  updatedAt: string;
  note: string;
}

interface ComplianceCheck {
  name: string;
  status: ComplianceStatus;
  note: string;
}

interface IntegrationItem {
  name: string;
  type: string;
  status: IntegrationStatus;
  risk: string;
}

interface SecurityActivityItem {
  title: string;
  category: ActivityCategory;
  timestamp: string;
  description: string;
  severity?: AlertSeverity;
}

interface RecommendedAction {
  title: string;
  priority: Priority;
  effort: Effort;
  description: string;
}

const securityMetrics: SecurityMetric[] = [
  { label: "Security score", value: "86/100", detail: "Stable baseline for the corporate website", icon: ShieldCheck },
  { label: "Critical alerts", value: "0", detail: "No blocking issue detected in demo data", icon: ShieldAlert },
  { label: "Open warnings", value: "3", detail: "Review recommended this week", icon: AlertTriangle },
  { label: "Admin users", value: "4", detail: "Authorized dashboard administrators", icon: UserCog },
  { label: "Protected routes", value: "12", detail: "Internal dashboard surfaces monitored", icon: LockKeyhole },
  { label: "Last review", value: "2 days ago", detail: "Security posture reviewed internally", icon: Radar },
];

const criticalAlerts: SecurityAlertItem[] = [
  {
    title: "One administrator account has not enabled MFA",
    description: "Dashboard access remains limited, but one sensitive account still relies on password-only login.",
    severity: "warning",
    recommendation: "Require MFA for all administrator accounts.",
    status: "open",
  },
  {
    title: "Content Security Policy is partially configured",
    description: "Core pages are covered, but some public assets and embeds still need a stricter policy review.",
    severity: "warning",
    recommendation: "Review CSP directives for scripts, media and third-party widgets.",
    status: "monitoring",
  },
  {
    title: "Rate limiting should be reviewed for public forms",
    description: "Primary forms are protected, but thresholds should be tightened before higher traffic campaigns.",
    severity: "info",
    recommendation: "Audit form endpoints and align rate limits with submission volume.",
    status: "monitoring",
  },
];

const accessMetrics: AccessMetric[] = [
  { label: "Administrators", value: "4", icon: Users },
  { label: "Editors", value: "7", icon: UserCog },
  { label: "Pending invitations", value: "2", icon: KeyRound },
  { label: "MFA coverage", value: "75%", icon: Fingerprint },
  { label: "Stale sessions", value: "1", icon: LockKeyhole },
];

const accessActions = [
  "Review admin users",
  "Require MFA",
  "Review pending invitations",
  "Revoke stale sessions",
];

const websiteProtectionChecks: ProtectionCheck[] = [
  { name: "HTTPS enabled", status: "passed", description: "Public website traffic is expected to be encrypted." },
  { name: "HSTS enabled", status: "passed", description: "Strict transport enforcement is present in the demo posture." },
  { name: "Content Security Policy", status: "warning", description: "Policy exists but needs stricter coverage for embeds and scripts." },
  { name: "X-Frame-Options", status: "passed", description: "Clickjacking protection is configured for core public pages." },
  { name: "Referrer-Policy", status: "passed", description: "Referrer data exposure is limited for external navigation." },
  { name: "Permissions-Policy", status: "warning", description: "Browser capability restrictions should be tightened for future modules." },
  { name: "Rate limiting", status: "warning", description: "Form and contact endpoints should be reviewed before larger traffic peaks." },
  { name: "robots.txt / sitemap.xml", status: "passed", description: "Crawler guidance assets are available for the public website." },
];

const formsSecurity: FormSecurityItem[] = [
  {
    name: "Contact form",
    status: "protected",
    blockedSpam: "28 last 7 days",
    suspiciousPayloads: "2 flagged",
    failedValidations: "6",
    attachmentScanning: "Not required",
    rateLimitTriggers: "3",
  },
  {
    name: "Careers form",
    status: "attachment-pending",
    blockedSpam: "11 last 7 days",
    suspiciousPayloads: "1 flagged",
    failedValidations: "9",
    attachmentScanning: "Pending for CV/PDF uploads",
    rateLimitTriggers: "4",
  },
  {
    name: "Newsletter form",
    status: "rate-limited",
    blockedSpam: "17 last 7 days",
    suspiciousPayloads: "0",
    failedValidations: "5",
    attachmentScanning: "Not required",
    rateLimitTriggers: "8",
  },
  {
    name: "Partner inquiry",
    status: "needs-review",
    blockedSpam: "6 last 7 days",
    suspiciousPayloads: "1 flagged",
    failedValidations: "3",
    attachmentScanning: "Not required",
    rateLimitTriggers: "1",
  },
  {
    name: "Security report form",
    status: "protected",
    blockedSpam: "4 last 7 days",
    suspiciousPayloads: "1 flagged",
    failedValidations: "2",
    attachmentScanning: "Links only",
    rateLimitTriggers: "2",
  },
];

const sensitiveContent: ContentIntegrityItem[] = [
  {
    path: "/security/privacy",
    status: "Sensitive content",
    updatedAt: "Updated 2 hours ago",
    note: "Privacy statements should remain aligned with legal pages and consent flows.",
  },
  {
    path: "/legal/privacy",
    status: "Recently modified",
    updatedAt: "Updated yesterday",
    note: "Review public wording consistency before the next release cycle.",
  },
  {
    path: "/blog/security-by-design",
    status: "Pending review",
    updatedAt: "Edited 5 hours ago",
    note: "Editorial validation pending before publication.",
  },
  {
    path: "/resources/whitepapers",
    status: "External links added",
    updatedAt: "Updated 3 days ago",
    note: "Recently added outbound references should be checked for ownership and trust.",
  },
];

const privacyChecks: ComplianceCheck[] = [
  { name: "Privacy policy published", status: "published", note: "Core privacy notice is publicly available." },
  { name: "Cookie consent configured", status: "configured", note: "Consent layer is present on the public website." },
  { name: "Terms page published", status: "published", note: "Public terms are accessible from legal navigation." },
  { name: "Analytics consent", status: "needs-review", note: "Consent scope should be reviewed against analytics events." },
  { name: "Third-party scripts reviewed", status: "needs-review", note: "A periodic script inventory is still needed." },
  { name: "Data processing notice published", status: "published", note: "Data handling notice is visible for privacy-aware journeys." },
  { name: "Retention policy", status: "planned", note: "Formal retention guidance should be documented for submissions." },
];

const integrations: IntegrationItem[] = [
  { name: "GitHub", type: "Repository", status: "connected", risk: "Low risk, operational dependency only." },
  { name: "Forum", type: "External link", status: "external-link", risk: "Review destination trust and outbound labeling." },
  { name: "Status page", type: "Public service", status: "planned", risk: "Planned surface, no live dependency yet." },
  { name: "Newsletter provider", type: "Marketing", status: "not-configured", risk: "No active provider configured in demo posture." },
  { name: "Aether Identity", type: "Identity", status: "planned", risk: "Future integration, access model to be defined." },
  { name: "Analytics", type: "Measurement", status: "needs-review", risk: "Consent and script scope should be reviewed." },
];

const recentActivity: SecurityActivityItem[] = [
  {
    title: "Admin login successful",
    category: "access",
    timestamp: "12 minutes ago",
    description: "A privileged dashboard session was created from an expected internal workflow.",
  },
  {
    title: "Privacy page updated",
    category: "content",
    timestamp: "2 hours ago",
    description: "Sensitive public copy changed and should be included in the next content review.",
  },
  {
    title: "Contact form blocked suspicious payload",
    category: "forms",
    timestamp: "4 hours ago",
    description: "A malformed submission was rejected before entering downstream processing.",
    severity: "warning",
  },
  {
    title: "New editor invitation created",
    category: "access",
    timestamp: "Yesterday",
    description: "A new content collaborator invitation is pending acceptance.",
  },
  {
    title: "Security settings reviewed",
    category: "system",
    timestamp: "Yesterday",
    description: "Mock dashboard controls were reviewed as part of the weekly governance routine.",
  },
  {
    title: "CSP warning detected",
    category: "privacy",
    timestamp: "2 days ago",
    description: "Content Security Policy coverage remains partial for some external content cases.",
    severity: "warning",
  },
];

const recommendedActions: RecommendedAction[] = [
  {
    title: "Enable MFA for all dashboard users",
    priority: "high",
    effort: "medium",
    description: "Close the remaining gap on privileged dashboard access.",
  },
  {
    title: "Configure a stricter Content Security Policy",
    priority: "high",
    effort: "high",
    description: "Harden public page rendering against unsafe script and embed behavior.",
  },
  {
    title: "Review third-party scripts",
    priority: "medium",
    effort: "medium",
    description: "Reduce privacy and integrity risk on public pages.",
  },
  {
    title: "Add rate limiting to public forms",
    priority: "medium",
    effort: "medium",
    description: "Tighten protections on contact and acquisition flows.",
  },
  {
    title: "Review pending editor invitations",
    priority: "medium",
    effort: "low",
    description: "Ensure all invited users still need access before activation.",
  },
  {
    title: "Add attachment scanning for job applications",
    priority: "high",
    effort: "high",
    description: "Prepare safer handling of CV and PDF uploads for careers workflows.",
  },
  {
    title: "Define a formal security review process for sensitive pages",
    priority: "low",
    effort: "medium",
    description: "Standardize review for privacy, legal and trust-related public content.",
  },
];

const toneByAlertSeverity: Record<AlertSeverity, Tone> = {
  critical: "red",
  warning: "amber",
  info: "blue",
};

const toneByAlertStatus: Record<AlertStatus, Tone> = {
  open: "red",
  monitoring: "amber",
  resolved: "green",
};

const toneByProtectionStatus: Record<ProtectionStatus, Tone> = {
  passed: "green",
  warning: "amber",
  failed: "red",
  planned: "gray",
};

const toneByFormStatus: Record<FormStatus, Tone> = {
  protected: "green",
  "rate-limited": "blue",
  "needs-review": "amber",
  "attachment-pending": "amber",
  disabled: "gray",
};

const toneByComplianceStatus: Record<ComplianceStatus, Tone> = {
  published: "green",
  configured: "blue",
  "needs-review": "amber",
  planned: "gray",
};

const toneByIntegrationStatus: Record<IntegrationStatus, Tone> = {
  connected: "green",
  "external-link": "blue",
  planned: "gray",
  "not-configured": "gray",
  "needs-review": "amber",
};

const toneByPriority: Record<Priority, Tone> = {
  high: "red",
  medium: "amber",
  low: "blue",
};

const toneByEffort: Record<Effort, Tone> = {
  low: "green",
  medium: "amber",
  high: "red",
};

const toneByCategory: Record<ActivityCategory, Tone> = {
  access: "blue",
  content: "gray",
  forms: "amber",
  system: "green",
  privacy: "amber",
};

function toLabel(value: string) {
  return value
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export default function SecurityPage() {
  return (
    <div className="space-y-6 bg-background p-4 sm:p-6">
      <DashboardPageHeader
        title="Security Center"
        description="Monitor the security posture of the official Sky Genesis Enterprise website."
        action={
          <div className="flex flex-wrap items-center gap-2">
            <DashboardStatusBadge tone="green">Security status: Good</DashboardStatusBadge>
            <DashboardStatusBadge tone="blue">Last scan: Today, 10:42</DashboardStatusBadge>
            <DashboardStatusBadge>Environment: Production</DashboardStatusBadge>
          </div>
        }
      />

      <Alert className="border-border/70 bg-card">
        <ShieldCheck className="size-4" />
        <AlertTitle>Demo security data</AlertTitle>
        <AlertDescription>
          This page currently uses mocked website security data for dashboard design and future API integration planning.
        </AlertDescription>
      </Alert>

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {securityMetrics.map((metric) => (
          <DashboardMetricCard
            key={metric.label}
            label={metric.label}
            value={metric.value}
            detail={metric.detail}
            icon={metric.icon}
          />
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.35fr_0.95fr]">
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <ShieldAlert className="size-4 text-muted-foreground" />
            <h2 className="text-base font-semibold">Critical alerts</h2>
          </div>

          <Card className="rounded-lg border-border/70 bg-card shadow-none">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-medium">Current alert posture</CardTitle>
              <CardDescription>No critical alerts detected. Website posture looks stable in this demo snapshot.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {criticalAlerts.map((alert) => (
                <div key={alert.title} className="rounded-lg border border-border/60 p-4">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-medium">{alert.title}</h3>
                        <DashboardStatusBadge tone={toneByAlertSeverity[alert.severity]}>
                          {alert.severity}
                        </DashboardStatusBadge>
                        <DashboardStatusBadge tone={toneByAlertStatus[alert.status]}>
                          {alert.status}
                        </DashboardStatusBadge>
                      </div>
                      <p className="text-sm text-muted-foreground">{alert.description}</p>
                      <p className="text-sm">
                        <span className="font-medium">Recommendation:</span> {alert.recommendation}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Users className="size-4 text-muted-foreground" />
            <h2 className="text-base font-semibold">Access & permissions</h2>
          </div>

          <Card className="rounded-lg border-border/70 bg-card shadow-none">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-medium">Dashboard access overview</CardTitle>
              <CardDescription>Interface only. No live RBAC or authentication management is connected yet.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-3 sm:grid-cols-2">
                {accessMetrics.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="rounded-lg border border-border/60 p-3">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="text-sm text-muted-foreground">{item.label}</p>
                          <p className="mt-1 text-xl font-semibold">{item.value}</p>
                        </div>
                        <div className="flex size-9 items-center justify-center rounded-md border border-border/70 bg-muted/20 text-muted-foreground">
                          <Icon className="size-4" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium">Suggested access actions</h3>
                <div className="grid gap-2">
                  {accessActions.map((action) => (
                    <div key={action} className="flex items-center justify-between rounded-md border border-border/60 px-3 py-2">
                      <span className="text-sm">{action}</span>
                      <Button variant="ghost" size="sm">
                        Review
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <GlobeLock className="size-4 text-muted-foreground" />
            <h2 className="text-base font-semibold">Website protection checklist</h2>
          </div>

          <Card className="rounded-lg border-border/70 bg-card shadow-none">
            <CardContent className="p-0">
              <div className="divide-y divide-border/60">
                {websiteProtectionChecks.map((check) => (
                  <div key={check.name} className="flex flex-col gap-3 p-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <p className="font-medium">{check.name}</p>
                        <DashboardStatusBadge tone={toneByProtectionStatus[check.status]}>
                          {check.status}
                        </DashboardStatusBadge>
                      </div>
                      <p className="text-sm text-muted-foreground">{check.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <ScrollText className="size-4 text-muted-foreground" />
            <h2 className="text-base font-semibold">Privacy & compliance</h2>
          </div>

          <Card className="rounded-lg border-border/70 bg-card shadow-none">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-medium">GDPR-aware website checklist</CardTitle>
              <CardDescription>This is a cautious operational view. It does not claim full GDPR compliance.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {privacyChecks.map((check) => (
                <div key={check.name} className="rounded-lg border border-border/60 p-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="font-medium">{check.name}</p>
                    <DashboardStatusBadge tone={toneByComplianceStatus[check.status]}>
                      {check.status}
                    </DashboardStatusBadge>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{check.note}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>
      </div>

      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <FileWarning className="size-4 text-muted-foreground" />
          <h2 className="text-base font-semibold">Forms & submissions security</h2>
        </div>

        <DashboardTableFrame>
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/20">
                <TableHead>Form</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Spam blocked</TableHead>
                <TableHead>Suspicious payloads</TableHead>
                <TableHead>Failed validations</TableHead>
                <TableHead>Attachment scanning</TableHead>
                <TableHead>Rate limit triggers</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {formsSecurity.map((form) => (
                <TableRow key={form.name}>
                  <TableCell className="font-medium">{form.name}</TableCell>
                  <TableCell>
                    <DashboardStatusBadge tone={toneByFormStatus[form.status]}>
                      {toLabel(form.status)}
                    </DashboardStatusBadge>
                  </TableCell>
                  <TableCell>{form.blockedSpam}</TableCell>
                  <TableCell>{form.suspiciousPayloads}</TableCell>
                  <TableCell>{form.failedValidations}</TableCell>
                  <TableCell className="max-w-60 text-muted-foreground">{form.attachmentScanning}</TableCell>
                  <TableCell>{form.rateLimitTriggers}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </DashboardTableFrame>

        <div className="grid gap-3 md:hidden">
          {formsSecurity.map((form) => (
            <DashboardResourceCard key={form.name}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-medium">{form.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{form.attachmentScanning}</p>
                </div>
                <DashboardStatusBadge tone={toneByFormStatus[form.status]}>
                  {toLabel(form.status)}
                </DashboardStatusBadge>
              </div>
              <div className="mt-3 grid gap-2 text-sm text-muted-foreground">
                <p>Spam blocked: {form.blockedSpam}</p>
                <p>Suspicious payloads: {form.suspiciousPayloads}</p>
                <p>Failed validations: {form.failedValidations}</p>
                <p>Rate limit triggers: {form.rateLimitTriggers}</p>
              </div>
            </DashboardResourceCard>
          ))}
        </div>
      </section>

      <div className="grid gap-6 xl:grid-cols-2">
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <FileCheck className="size-4 text-muted-foreground" />
            <h2 className="text-base font-semibold">Content integrity</h2>
          </div>

          <Card className="rounded-lg border-border/70 bg-card shadow-none">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-medium">Sensitive content watchlist</CardTitle>
              <CardDescription>Track recent updates, pending reviews and potentially sensitive public changes.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {sensitiveContent.map((item) => (
                <div key={item.path} className="rounded-lg border border-border/60 p-4">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div className="space-y-1">
                      <p className="font-medium">{item.path}</p>
                      <p className="text-sm text-muted-foreground">{item.note}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <DashboardStatusBadge tone="amber">{item.status}</DashboardStatusBadge>
                      <DashboardStatusBadge>{item.updatedAt}</DashboardStatusBadge>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <ServerCog className="size-4 text-muted-foreground" />
            <h2 className="text-base font-semibold">Integrations security</h2>
          </div>

          <Card className="rounded-lg border-border/70 bg-card shadow-none">
            <CardContent className="p-0">
              <div className="divide-y divide-border/60">
                {integrations.map((integration) => (
                  <div key={integration.name} className="flex flex-col gap-2 p-4">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="font-medium">{integration.name}</p>
                        <p className="text-sm text-muted-foreground">{integration.type}</p>
                      </div>
                      <DashboardStatusBadge tone={toneByIntegrationStatus[integration.status]}>
                        {toLabel(integration.status)}
                      </DashboardStatusBadge>
                    </div>
                    <p className="text-sm text-muted-foreground">{integration.risk}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Activity className="size-4 text-muted-foreground" />
            <h2 className="text-base font-semibold">Recent security activity</h2>
          </div>

          <Card className="rounded-lg border-border/70 bg-card shadow-none">
            <CardContent className="space-y-3 p-4">
              {recentActivity.map((item) => (
                <div key={`${item.title}-${item.timestamp}`} className="flex gap-3 rounded-lg border border-border/60 p-3">
                  <div className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full border border-border/60 bg-muted/20">
                    <Clock className="size-4 text-muted-foreground" />
                  </div>
                  <div className="min-w-0 flex-1 space-y-2">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="font-medium">{item.title}</p>
                        <DashboardStatusBadge tone={toneByCategory[item.category]}>
                          {item.category}
                        </DashboardStatusBadge>
                        {item.severity ? (
                          <DashboardStatusBadge tone={toneByAlertSeverity[item.severity]}>
                            {item.severity}
                          </DashboardStatusBadge>
                        ) : null}
                      </div>
                      <span className="text-sm text-muted-foreground">{item.timestamp}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <ListChecks className="size-4 text-muted-foreground" />
            <h2 className="text-base font-semibold">Recommended actions</h2>
          </div>

          <Card className="rounded-lg border-border/70 bg-card shadow-none">
            <CardContent className="space-y-3 p-4">
              {recommendedActions.map((action) => (
                <div key={action.title} className="rounded-lg border border-border/60 p-4">
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div className="space-y-1">
                        <p className="font-medium">{action.title}</p>
                        <p className="text-sm text-muted-foreground">{action.description}</p>
                      </div>
                      <Button variant="outline" size="sm" className="shrink-0">
                        Review
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <DashboardStatusBadge tone={toneByPriority[action.priority]}>
                        Priority: {action.priority}
                      </DashboardStatusBadge>
                      <DashboardStatusBadge tone={toneByEffort[action.effort]}>
                        Effort: {action.effort}
                      </DashboardStatusBadge>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>
      </div>

      <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <Card className="rounded-lg border-border/70 bg-card shadow-none">
          <CardContent className="flex items-start gap-3 p-4">
            <Eye className="mt-0.5 size-4 text-muted-foreground" />
            <div>
              <p className="font-medium">Coverage scope</p>
              <p className="text-sm text-muted-foreground">Focused on the public website, dashboard access and adjacent trust surfaces.</p>
            </div>
          </CardContent>
        </Card>
        <Card className="rounded-lg border-border/70 bg-card shadow-none">
          <CardContent className="flex items-start gap-3 p-4">
            <Link2 className="mt-0.5 size-4 text-muted-foreground" />
            <div>
              <p className="font-medium">External dependencies</p>
              <p className="text-sm text-muted-foreground">Prepared to evolve toward real integrations without inventing backend behavior today.</p>
            </div>
          </CardContent>
        </Card>
        <Card className="rounded-lg border-border/70 bg-card shadow-none">
          <CardContent className="flex items-start gap-3 p-4">
            <Settings className="mt-0.5 size-4 text-muted-foreground" />
            <div>
              <p className="font-medium">Operational tone</p>
              <p className="text-sm text-muted-foreground">Technical and credible, without positioning this page as a full SOC or SIEM console.</p>
            </div>
          </CardContent>
        </Card>
        <Card className="rounded-lg border-border/70 bg-card shadow-none">
          <CardContent className="flex items-start gap-3 p-4">
            <ShieldCheck className="mt-0.5 size-4 text-muted-foreground" />
            <div>
              <p className="font-medium">Future integration</p>
              <p className="text-sm text-muted-foreground">Mock datasets are structured for later replacement by real API-driven security signals.</p>
            </div>
          </CardContent>
        </Card>
      </section>

      <div className="flex justify-start">
        <Button asChild variant="outline">
          <Link href="/dashboard/audit-logs">Open audit logs</Link>
        </Button>
      </div>
    </div>
  );
}
