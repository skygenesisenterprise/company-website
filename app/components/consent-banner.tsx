"use client";

import * as React from "react";
import { useTranslations } from "next-intl";
import { CookieIcon, SettingsIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { useConsent } from "@/context/consent-context";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function ConsentBanner() {
  const t = useTranslations("Consent");
  const { consent, hasConsent, acceptAll, saveConsent } = useConsent();
  const [open, setOpen] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const [preferences, setPreferences] = React.useState({
    analytics: consent.analytics,
    marketing: consent.marketing,
  });

  React.useEffect(() => {
    setPreferences({
      analytics: consent.analytics,
      marketing: consent.marketing,
    });
  }, [consent]);

  const handleSavePreferences = React.useCallback(() => {
    saveConsent({
      analytics: preferences.analytics,
      marketing: preferences.marketing,
    });
    setOpen(false);
  }, [preferences, saveConsent]);

  if (!mounted || hasConsent) {
    return null;
  }

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80",
        "animate-in slide-in-from-bottom-4 duration-300"
      )}
    >
      <div className="mx-auto max-w-screen-2xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <CookieIcon className="mt-0.5 size-5 shrink-0 text-primary" />
            <div className="space-y-1">
              <p className="text-sm font-medium">{t("title")}</p>
              <p className="text-xs text-muted-foreground">
                {t("description")}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:shrink-0">
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm">
                  <SettingsIcon className="size-4" />
                  {t("customize")}
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>{t("dialogTitle")}</DialogTitle>
                  <DialogDescription>{t("dialogDescription")}</DialogDescription>
                </DialogHeader>

                <div className="grid gap-4 py-4">
                  <div className="flex items-start gap-3 rounded-lg border p-3">
                    <Checkbox
                      id="necessary"
                      checked={true}
                      disabled
                      className="mt-0.5"
                    />
                    <div className="grid gap-1">
                      <Label htmlFor="necessary" className="font-semibold">
                        {t("necessaryTitle")}
                      </Label>
                      <p className="text-xs text-muted-foreground">
                        {t("necessaryDescription")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border p-3">
                    <Checkbox
                      id="analytics"
                      checked={preferences.analytics}
                      onCheckedChange={(checked) =>
                        setPreferences((prev) => ({
                          ...prev,
                          analytics: checked === true,
                        }))
                      }
                      className="mt-0.5"
                    />
                    <div className="grid gap-1">
                      <Label htmlFor="analytics" className="font-semibold">
                        {t("analyticsTitle")}
                      </Label>
                      <p className="text-xs text-muted-foreground">
                        {t("analyticsDescription")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border p-3">
                    <Checkbox
                      id="marketing"
                      checked={preferences.marketing}
                      onCheckedChange={(checked) =>
                        setPreferences((prev) => ({
                          ...prev,
                          marketing: checked === true,
                        }))
                      }
                      className="mt-0.5"
                    />
                    <div className="grid gap-1">
                      <Label htmlFor="marketing" className="font-semibold">
                        {t("marketingTitle")}
                      </Label>
                      <p className="text-xs text-muted-foreground">
                        {t("marketingDescription")}
                      </p>
                    </div>
                  </div>
                </div>

                <DialogFooter className="sm:justify-between">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setPreferences({ analytics: false, marketing: false });
                    }}
                  >
                    {t("rejectAll")}
                  </Button>
                  <Button size="sm" onClick={handleSavePreferences}>
                    {t("savePreferences")}
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <Button size="sm" onClick={acceptAll}>
              {t("acceptAll")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
