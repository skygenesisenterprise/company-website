"use client";

import * as React from "react";

export interface ConsentState {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  accepted: boolean;
  timestamp?: string;
}

const STORAGE_KEY = "sg-consent";

const defaultConsent: ConsentState = {
  necessary: true,
  analytics: false,
  marketing: false,
  accepted: false,
};

function getInitialConsent(): ConsentState {
  if (typeof window === "undefined") {
    return defaultConsent;
  }
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as ConsentState;
      return { ...defaultConsent, ...parsed };
    }
  } catch {
    // ignore parse errors
  }
  return defaultConsent;
}

interface ConsentContextValue {
  consent: ConsentState;
  acceptAll: () => void;
  rejectAll: () => void;
  setConsent: (partial: Partial<ConsentState>) => void;
  saveConsent: (partial: Partial<ConsentState>) => void;
  hasConsent: boolean;
}

const ConsentContext = React.createContext<ConsentContextValue | null>(null);

export function useConsent(): ConsentContextValue {
  const context = React.useContext(ConsentContext);
  if (!context) {
    throw new Error("useConsent must be used within a ConsentProvider");
  }
  return context;
}

interface ConsentProviderProps {
  children: React.ReactNode;
}

export function ConsentProvider({ children }: ConsentProviderProps) {
  const [consent, setConsentState] = React.useState<ConsentState>(defaultConsent);
  const [hasConsent, setHasConsent] = React.useState(false);
  const [hydrated, setHydrated] = React.useState(false);

  React.useEffect(() => {
    const initial = getInitialConsent();
    setConsentState(initial);
    setHasConsent(initial.accepted);
    setHydrated(true);
  }, []);

  const persist = React.useCallback((next: ConsentState) => {
    setConsentState(next);
    setHasConsent(next.accepted);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    }
  }, []);

  const acceptAll = React.useCallback(() => {
    persist({
      necessary: true,
      analytics: true,
      marketing: true,
      accepted: true,
      timestamp: new Date().toISOString(),
    });
  }, [persist]);

  const rejectAll = React.useCallback(() => {
    persist({
      necessary: true,
      analytics: false,
      marketing: false,
      accepted: true,
      timestamp: new Date().toISOString(),
    });
  }, [persist]);

  const setConsent = React.useCallback(
    (partial: Partial<ConsentState>) => {
      setConsentState((prev) => ({ ...prev, ...partial }));
    },
    []
  );

  const saveConsent = React.useCallback(
    (partial: Partial<ConsentState>) => {
      const next = {
        ...consent,
        ...partial,
        accepted: true,
        timestamp: new Date().toISOString(),
      };
      persist(next);
    },
    [consent, persist]
  );

  const value = React.useMemo(
    () => ({
      consent,
      acceptAll,
      rejectAll,
      setConsent,
      saveConsent,
      hasConsent,
    }),
    [consent, acceptAll, rejectAll, setConsent, saveConsent, hasConsent]
  );

  return (
    <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>
  );
}
