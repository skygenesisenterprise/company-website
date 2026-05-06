"use client";

import { AuthProvider } from "@/context/AuthContext";
import { LicenseProvider } from "@/context/LicenseContext";
import { ConsentProvider } from "@/context/consent-context";
import { ThemeProvider } from "@/components/theme-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <LicenseProvider>
        <AuthProvider>
          <ConsentProvider>{children}</ConsentProvider>
        </AuthProvider>
      </LicenseProvider>
    </ThemeProvider>
  );
}
