import type { Metadata } from "next";
import {
  Geist,
  Inter,
  JetBrains_Mono,
  Space_Grotesk,
} from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Providers } from "@/context/Providers";
import "@/styles/globals.css";

const fontDisplay = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    template: "%s",
    default: "Sky Genesis Enterprise",
  },
  description:
    "The Official Sky Genesis Enterprise website. Learn about our products, services, and how we can help your business thrive in the digital age.",
  icons: {
    icon: [
      {
        url: "/enterprise-favicon.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/enterprise-favicon.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/enterprise-favicon.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-scroll-behavior="smooth" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${fontDisplay.variable} ${fontSans.variable} ${fontMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
