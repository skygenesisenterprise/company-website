import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";
import { ThemeProvider } from "./components/theme-provider";
import AdminLayoutClient from "./components/admin-layout-client";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Admin - Sky Genesis Enterprise",
  description: "Admin panel for Sky Genesis Enterprise",
  icons: {
    icon: '/enterprise.png',
    shortcut: '/enterprise.png',
    apple: '/enterprise.png',
  },
};

export default function AdminRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <AdminLayoutClient>
            {children}
          </AdminLayoutClient>
        </ThemeProvider>
      </body>
    </html>
  );
}