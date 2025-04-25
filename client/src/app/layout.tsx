// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 👇 SEO y título global
export const metadata: Metadata = {
  title: {
    default: "Home 1",
    template: "%s | Mi Super Web",
  },
  description: "Una aplicación web moderna hecha con Next.js.",
  keywords: ["next.js", "mi web", "app moderna", "react", "geek"],
  authors: [{ name: "Tu Nombre", url: "https://tusitio.com" }],
  creator: "Tu Nombre",
  metadataBase: new URL("https://tusitio.com"), // cambia esto por tu dominio real
  openGraph: {
    title: "Mi Super Web",
    description: "Una aplicación web moderna hecha con Next.js.",
    url: "https://tusitio.com",
    siteName: "Mi Super Web",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mi Super Web",
    description: "Una aplicación web moderna hecha con Next.js.",
    creator: "@tu_usuario", // si tienes Twitter
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
