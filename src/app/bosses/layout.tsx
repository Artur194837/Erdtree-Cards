import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/components/ui/navbar";
import Image from "next/image";
import localFont from 'next/font/local';
import Searchbar from "@/components/ui/searchbar";

// Definiere die Font-Konfiguration
/**
 * Konfiguration der lokalen Schriftart 'Mantinia Regular'.
 * Diese wird über eine CSS-Variable '--font-erdtree' verfügbar gemacht.
 */
const erdtreeFont = localFont({
  // Use a filesystem-relative path from this file to the font in /public
  // layout.tsx is at src/app/layout.tsx -> public is two levels up
  src: '../../../public/fonts/Mantinia Regular.otf',
  variable: '--font-erdtree', // Erstellt einen CSS-Variablennamen
  display: 'swap',
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/**
 * Metadaten für die Bosse-Seite (Bosses).
 */
export const metadata: Metadata = {
  title: "Erdtree Cards",
  description: "Elden Ring Card Management",
};

/**
 * Layout-Komponente für den Bereich '/bosses'.
 * Definiert die grundlegende Struktur inklusive HTML, Body, Hintergrundbild und Navigation.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${erdtreeFont.variable}`}>
      <head>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen w-screen ${erdtreeFont.className}`}
      >
        {/* Fixiertes Hintergrundbild für die gesamte Seite */}
        <Image src="/elden ring wallpaper.jpg" width={1920} height={1080} alt="Elden Ring Wallpaper" className="fixed w-full h-full -z-10 object-cover" />
        
        {/* Navigation mit Hervorhebung der Kategorie 'bosses' */}
        <Navbar highLightCategory="bosses"/>
        <div className="flex flex-col flex-grow">
          <header className="w-full flex flex-col items-center pt-8">
            {/* Logo-Header */}
            <Image src="/erdtree-cards.png" width={500} height={83} alt="Erdtree Cards" className="w-full max-w-xl md:w-3/4 h-auto" 
            sizes="(max-width: 768px) 100vw, 50vw" />
          </header>
        {/* Inhalt der jeweiligen Seite (page.tsx) */}
        {children}
        </div>
      </body>
    </html>
  );
}
