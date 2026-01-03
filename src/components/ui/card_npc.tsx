// Importiert notwendige Typen und Komponenten
import CardData from "@/app/lib/cardData";
import { CardImage } from "./cardImage";

// Definiert die Props-Schnittstelle für die CardNPC-Komponente
interface CardProps {
    card: CardData; // Die Daten für die Karte
    className?: string; // Optionale zusätzliche CSS-Klassen
}

// Map zur Zuordnung von Seltenheitsstufen zu den entsprechenden TailwindCSS-Rahmenklassen.
const rarityBorderMap: { [key: string]: string } = {
    'Common': 'border-gray-400 border-4',
    'Rare': 'border-blue-500 border-4',
    'Epic': 'border-purple-500 border-4',
    'Legendary': 'border-yellow-400 border-4 shadow-2xl shadow-yellow-500/50 legendary-glow',
};
const defaultBorder = 'border-gray-700 border'; // Standard-Rahmenklasse, falls keine Seltenheit übereinstimmt

export default function CardNPC({ card, className} : CardProps) {
    // Ruft die Seltenheit der Karte ab.
    const rarity = card.rarity;
    
    // Ermittelt die passende Rahmenklasse basierend auf der Seltenheit (mit Fallback).
    const dynamicBorderClass = rarityBorderMap[rarity] || defaultBorder;
    
    // Kombiniert die Basis-Stylingklassen mit der dynamischen Rahmenklasse und optionalen weiteren Klassen.
    const combinedClasses = `flex flex-col justify-between items-center bg-[#966c57] rounded-xs w-50 h-90 sm:w-63 sm:h-120 md:w-65 md:h-120  lg:w-75 lg:h-140 xl:w-80 xl:h-140 overflow-hidden relative min-h-0 ${dynamicBorderClass} ${className}`;

    return (
        // Hauptcontainer der Karte mit dynamischen Klassen.
        <div id="card" className={combinedClasses}>
            {/* Name des NPCs */}
            <label id="name" className="text-[#FFFAA9] text-lg sm:text-xl lg:text-2xl mt-3 p-1 border-none text-center">{card.name}</label>
            {/* Bild des NPCs, absolut positioniert */}
            <CardImage className="mt-3 w-[160px] h-[180px] sm:w-[200px] sm:h-[250px] lg:w-[240px] lg:h-[270px] absolute top-19 lg:top-29" image_data={card.image_data} cardName={card.name} image_mime={card.image_mime} />
            {/* Container für die Werte/Informationen am unteren Rand der Karte */}
            <div id="werte" className="w-full mt-2">
                <div className="border-none flex flex-col w-full mb-2">
                    {/* Zeigt den Fundort an, falls vorhanden */}
                    {card.location !== null ?
                        (<div className="flex">
                            <label className="text-[7px] sm:text-xs lg:text-sm text-white font-sans mr-1">Location</label>
                            <label className="text-[7px] sm:text-xs lg:text-sm text-orange-200 font-sans">{card.location}</label>
                        </div>)
                    :
                        // Rendert nichts, wenn kein Fundort angegeben ist.
                        (null)
                    }
                </div>
            </div>
        </div>
    );
}