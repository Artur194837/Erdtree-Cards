// Importiert notwendige Typen und Komponenten von Next.js und React
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css"; // Importiert globale CSS-Stile
import Navbar from "@/components/ui/navbar"; // Importiert die Navigationsleiste
import Image from "next/image"; // Importiert die optimierte Image-Komponente
import localFont from 'next/font/local'; // Importiert Funktion für lokale Schriftarten

// Definiere die Font-Konfiguration
const erdtreeFont = localFont({
  // Verwendet einen Pfad relativ zum Dateisystem von dieser Datei zur Schriftart in /public
  // layout.tsx befindet sich in src/app/npcs/ -> public ist drei Ebenen höher
  src: '../../../public/fonts/Mantinia Regular.otf',
  variable: '--font-erdtree', // Erstellt einen CSS-Variablennamen
  display: 'swap',
});

// Konfiguration für die Geist Sans Schriftart
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Konfiguration für die Geist Mono Schriftart
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadaten für die Seite (Titel und Beschreibung)
export const metadata: Metadata = {
  title: "Erdtree Cards",
  description: "Elden Ring Card Management",
};

// Die Layout-Komponente für den NPC-Bereich
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Setzt die Sprache und die CSS-Variable für die benutzerdefinierte Schriftart
    <html lang="en" className={`${erdtreeFont.variable}`}>
      <head>
      </head>
      <body
        // Kombiniert die Schriftarten-Variablen und Tailwind-Klassen für den Body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen w-screen ${erdtreeFont.className}`}
      >
        {/* Hintergrundbild, fixiert über den gesamten Bildschirm */}
        <Image src="/elden ring wallpaper.jpg" width={1920} height={1080} alt="Elden Ring Wallpaper" className="fixed w-full h-full -z-10 object-cover" />
        
        {/* Navigationsleiste mit hervorgehobener Kategorie 'npcs' */}
        <Navbar highLightCategory="npcs"/>
        
        {/* Hauptcontainer für den Inhalt */}
        <div className="flex flex-col flex-grow">
          {/* Header-Bereich mit dem Logo */}
          <header className="w-full flex flex-col items-center pt-8">
            <Image src="/erdtree-cards.png" width={500} height={83} alt="Erdtree Cards" className="w-full max-w-xl md:w-3/4 h-auto" 
            sizes="(max-width: 768px) 100vw, 50vw" />
          </header>
        {/* Rendert die Kind-Komponenten (den eigentlichen Seiteninhalt) */}
        {children}
        </div>
      </body>
    </html>
  );
}
