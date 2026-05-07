"use client";

import { useState, useEffect } from "react";
import {
  Globe,
  Mail,
  Trash2,
  Save,
  Upload,
  Key,
  Monitor,
  Cloud,
  RefreshCw,
  Box,
  Loader2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { settingsApi } from "@/lib/api";
import { dockerApi } from "@/lib/api/docker";
import type { SystemSettings } from "@/lib/api/types";

export default function SettingsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [general, setGeneral] = useState({
    siteName: "",
    siteDescription: "",
    siteUrl: "",
    email: "",
  });

  const [email, setEmail] = useState({
    smtpHost: "",
    smtpPort: "587",
    smtpUser: "",
    smtpPassword: "",
    fromName: "",
    fromEmail: "",
  });

  const [emailSaving, setEmailSaving] = useState(false);
  const [testEmailSending, setTestEmailSending] = useState(false);

  const [dockerImage, setDockerImage] = useState("etheriatimes:latest");
  const [currentVersion] = useState("1.0.0");
  const [checkingUpdate, setCheckingUpdate] = useState(false);
  const [updating, setUpdating] = useState(false);
  const [hasUpdate, setHasUpdate] = useState(false);

  const [settings, setSettings] = useState({
    maintenanceMode: false,
    registration: true,
    comments: true,
    newsletter: true,
    analytics: true,
    ssl: true,
  });

  useEffect(() => {
    loadSettings();
  }, []);

  async function loadSettings() {
    setIsLoading(true);
    try {
      const response = await settingsApi.get();
      if (response.success && response.data) {
        const data = response.data;
        setGeneral({
          siteName: data.siteName || "The Etheria Times",
          siteDescription: data.siteDescription || "",
          siteUrl: data.siteUrl || "",
          email: data.email || "",
        });
        setEmail({
          smtpHost: data.smtpHost || "",
          smtpPort: String(data.smtpPort || "587"),
          smtpUser: data.smtpUser || "",
          smtpPassword: "",
          fromName: data.fromName || "",
          fromEmail: data.fromEmail || "",
        });
        setSettings({
          maintenanceMode: data.maintenanceMode ?? false,
          registration: data.registrationOpen ?? true,
          comments: data.commentsEnabled ?? true,
          newsletter: data.newsletterEnabled ?? true,
          analytics: data.analyticsEnabled ?? true,
          ssl: data.sslEnforced ?? true,
        });
      }
    } catch (error) {
      console.error("Failed to load settings:", error);
      setGeneral({
        siteName: "The Etheria Times",
        siteDescription: "L'information au service du citoyen",
        siteUrl: "https://etheriatimes.com",
        email: "contact@etheriatimes.com",
      });
    } finally {
      setIsLoading(false);
    }
  }

  const handleSave = async () => {
    setSaving(true);
    try {
      await settingsApi.update({
        siteName: general.siteName,
        siteDescription: general.siteDescription,
        siteUrl: general.siteUrl,
        email: general.email,
        maintenanceMode: settings.maintenanceMode,
        registrationOpen: settings.registration,
        commentsEnabled: settings.comments,
        newsletterEnabled: settings.newsletter,
        analyticsEnabled: settings.analytics,
        sslEnforced: settings.ssl,
      });
    } catch (error) {
      console.error("Failed to save settings:", error);
    } finally {
      setSaving(false);
    }
  };

  const handleCheckUpdates = async () => {
    setCheckingUpdate(true);
    try {
      const result = await dockerApi.checkForUpdates();
      setHasUpdate(result.hasUpdate);
      if (!result.hasUpdate) {
        alert("Vous êtes à jour !");
      }
    } catch (error) {
      console.error("Failed to check updates:", error);
    } finally {
      setCheckingUpdate(false);
    }
  };

  const handleUpdate = async () => {
    if (!confirm("Êtes-vous sûr de vouloir mettre à jour ? Les données seront préservées.")) {
      return;
    }

    setUpdating(true);
    try {
      const result = await dockerApi.updateContainer(dockerImage);
      if (result.success) {
        alert("Mise à jour terminée avec succès !");
      } else {
        alert("Erreur: " + result.message);
      }
    } catch (error) {
      console.error("Failed to update:", error);
      alert("Erreur lors de la mise à jour");
    } finally {
      setUpdating(false);
    }
  };

  if (isLoading) {
    return (
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-center h-64">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Paramètres</h1>
        <p className="text-sm text-muted-foreground">
          Configurez les paramètres généraux de la plateforme
        </p>
      </div>

      <div className="rounded-lg border border-border bg-card p-6 space-y-6">
        <div className="flex items-center gap-2">
          <Globe className="h-5 w-5 text-muted-foreground" />
          <h2 className="text-lg font-semibold text-foreground">Général</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="siteName">Nom du site</Label>
            <Input
              id="siteName"
              value={general.siteName}
              onChange={(e) => setGeneral({ ...general, siteName: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="siteUrl">URL du site</Label>
            <Input
              id="siteUrl"
              value={general.siteUrl}
              onChange={(e) => setGeneral({ ...general, siteUrl: e.target.value })}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="siteDescription">Description</Label>
          <Textarea
            id="siteDescription"
            value={general.siteDescription}
            onChange={(e) => setGeneral({ ...general, siteDescription: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email de contact</Label>
          <Input
            id="email"
            type="email"
            value={general.email}
            onChange={(e) => setGeneral({ ...general, email: e.target.value })}
          />
        </div>

        <Button onClick={handleSave} disabled={saving}>
          {saving ? (
            <Save className="h-4 w-4 animate-spin mr-2" />
          ) : (
            <Save className="h-4 w-4 mr-2" />
          )}
          Enregistrer
        </Button>
      </div>

      <div className="rounded-lg border border-border bg-card p-6 space-y-6">
        <div className="flex items-center gap-2">
          <Mail className="h-5 w-5 text-muted-foreground" />
          <h2 className="text-lg font-semibold text-foreground">Configuration email</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="smtpHost">Serveur SMTP</Label>
            <Input
              id="smtpHost"
              value={email.smtpHost}
              onChange={(e) => setEmail({ ...email, smtpHost: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="smtpPort">Port SMTP</Label>
            <Input
              id="smtpPort"
              value={email.smtpPort}
              onChange={(e) => setEmail({ ...email, smtpPort: e.target.value })}
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="smtpUser">Utilisateur SMTP</Label>
            <Input
              id="smtpUser"
              value={email.smtpUser}
              onChange={(e) => setEmail({ ...email, smtpUser: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="smtpPassword">Mot de passe SMTP</Label>
            <Input
              id="smtpPassword"
              type="password"
              value={email.smtpPassword}
              onChange={(e) => setEmail({ ...email, smtpPassword: e.target.value })}
              placeholder="••••••••"
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="fromName">Nom d&apos;expéditeur</Label>
            <Input
              id="fromName"
              value={email.fromName}
              onChange={(e) => setEmail({ ...email, fromName: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="fromEmail">Email d&apos;expéditeur</Label>
            <Input
              id="fromEmail"
              type="email"
              value={email.fromEmail}
              onChange={(e) => setEmail({ ...email, fromEmail: e.target.value })}
            />
          </div>
        </div>

        <Button variant="outline">
          <Upload className="h-4 w-4 mr-2" />
          Tester la configuration
        </Button>
      </div>

      <div className="rounded-lg border border-border bg-card p-6 space-y-6">
        <div className="flex items-center gap-2">
          <Monitor className="h-5 w-5 text-muted-foreground" />
          <h2 className="text-lg font-semibold text-foreground">Fonctionnalités</h2>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">Mode maintenance</Label>
              <p className="text-sm text-muted-foreground">Mettre le site en mode maintenance</p>
            </div>
            <Switch
              checked={settings.maintenanceMode}
              onCheckedChange={(checked) => setSettings({ ...settings, maintenanceMode: checked })}
            />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">Inscription</Label>
              <p className="text-sm text-muted-foreground">
                Permettre aux nouveaux utilisateurs de s&apos;inscrire
              </p>
            </div>
            <Switch
              checked={settings.registration}
              onCheckedChange={(checked) => setSettings({ ...settings, registration: checked })}
            />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">Commentaires</Label>
              <p className="text-sm text-muted-foreground">
                Activer les commentaires sur les articles
              </p>
            </div>
            <Switch
              checked={settings.comments}
              onCheckedChange={(checked) => setSettings({ ...settings, comments: checked })}
            />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">Newsletter</Label>
              <p className="text-sm text-muted-foreground">
                Activer l&apos;inscription à la newsletter
              </p>
            </div>
            <Switch
              checked={settings.newsletter}
              onCheckedChange={(checked) => setSettings({ ...settings, newsletter: checked })}
            />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">Analytics</Label>
              <p className="text-sm text-muted-foreground">Activer le tracking analytics</p>
            </div>
            <Switch
              checked={settings.analytics}
              onCheckedChange={(checked) => setSettings({ ...settings, analytics: checked })}
            />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">SSL/TLS</Label>
              <p className="text-sm text-muted-foreground">Forcer HTTPS sur le site</p>
            </div>
            <Switch
              checked={settings.ssl}
              onCheckedChange={(checked) => setSettings({ ...settings, ssl: checked })}
            />
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-border bg-card p-6 space-y-6">
        <div className="flex items-center gap-2">
          <Key className="h-5 w-5 text-muted-foreground" />
          <h2 className="text-lg font-semibold text-foreground">Clés API</h2>
        </div>

        <div className="space-y-4 max-w-md">
          <div className="space-y-2">
            <Label htmlFor="apiKey">Clé API publique</Label>
            <Input id="apiKey" value="pk_live_xxxxxxxxxxxxx" readOnly className="font-mono" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="apiSecret">Clé API secrète</Label>
            <Input
              id="apiSecret"
              type="password"
              value="sk_live_xxxxxxxxxxxxx"
              readOnly
              className="font-mono"
            />
          </div>
        </div>

        <Button variant="outline">Régénérer les clés</Button>
      </div>

      <div className="rounded-lg border border-border bg-card p-6 space-y-6">
        <div className="flex items-center gap-2">
          <Cloud className="h-5 w-5 text-muted-foreground" />
          <h2 className="text-lg font-semibold text-foreground">Mise à jour</h2>
        </div>

        <div className="rounded-lg border border-border bg-muted/50 p-4">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Box className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-foreground">Image Docker</p>
              <p className="text-sm text-muted-foreground">etheriatimes/etheriatimes:latest</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Version actuelle</p>
              <p className="text-lg font-bold text-foreground">1.0.0</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="dockerImage">Image Docker</Label>
            <Input
              id="dockerImage"
              placeholder="etheriatimes/etheriatimes:latest"
              defaultValue="etheriatimes/etheriatimes:latest"
            />
            <p className="text-xs text-muted-foreground">
              Image Docker à utiliser pour la mise à jour (format: repository:tag)
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <Button variant="outline" onClick={handleCheckUpdates} disabled={checkingUpdate}>
              {checkingUpdate ? (
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              ) : (
                <RefreshCw className="h-4 w-4 mr-2" />
              )}
              Vérifier les mises à jour
            </Button>
            <Button onClick={handleUpdate} disabled={updating}>
              {updating ? (
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              ) : (
                <Cloud className="h-4 w-4 mr-2" />
              )}
              Mettre à jour maintenant
            </Button>
          </div>
        </div>

        <div className="rounded-lg border border-yellow-500/30 bg-yellow-500/5 p-4">
          <div className="flex items-start gap-3">
            <RefreshCw className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-foreground">Mode de mise à jour</p>
              <p className="text-sm text-muted-foreground mt-1">
                La mise à jour récupérera la nouvelle image Docker et redémarrera les conteneurs.
                Une brève interruption de service est à prévoir (environ 30 secondes).
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-destructive/50 bg-destructive/5 p-6 space-y-4">
        <div className="flex items-center gap-2">
          <Trash2 className="h-5 w-5 text-destructive" />
          <h2 className="text-lg font-semibold text-destructive">Zone danger</h2>
        </div>

        <p className="text-sm text-muted-foreground">
          Ces actions sont irréversibles. Veuillez procéder avec précaution.
        </p>

        <div className="flex flex-wrap gap-2">
          <Button variant="outline">Exporter les données</Button>
          <Button variant="outline">Vider le cache</Button>
          <Button variant="destructive">Réinitialiser la plateforme</Button>
        </div>
      </div>
    </div>
  );
}
