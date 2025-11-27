"use client";

import { AuthProvider } from "../(public)/context/JwtAuthContext";
import { Toaster } from "../(public)/components/ui/toaster";

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      {children}
      <Toaster />
    </AuthProvider>
  );
}