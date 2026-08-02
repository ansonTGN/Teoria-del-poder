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

export const metadata: Metadata = {
  title: "Los Manuales del Poder Real | Ciencia, filosofía y práctica",
  description:
    "Manual crítico y práctico sobre Maquiavelo, Sun Tzu y Han Feizi, teoría de juegos, sociología, psicología, control social e inteligencia artificial.",
  keywords: [
    "poder",
    "control social",
    "Maquiavelo",
    "Sun Tzu",
    "Han Feizi",
    "psicología política",
    "teoría de juegos",
    "filosofía política",
    "BATNA",
    "inteligencia artificial",
  ],
  openGraph: {
    title: "Los Manuales del Poder Real",
    description:
      "Ciencia, filosofía y práctica de la influencia, el control social, la autonomía y los contrapesos.",
    type: "article",
    locale: "es_ES",
    images: ["/og-image.jpg"],
  },
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
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
