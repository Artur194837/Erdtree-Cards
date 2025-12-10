import CardData from "@/app/lib/cardData";
import { CardImage } from "./cardImage";
import Image from "next/image";
import { Suspense } from "react";

interface CardProps {
    card: CardData;
    className?: string;
}

const rarityBorderMap: { [key: string]: string } = {
    'common': 'border-gray-500 border-2',
    'rare': 'border-blue-500 border-2',
    'epic': 'border-purple-500 border-4',
    'legendary': 'border-yellow-400 border-4 shadow-2xl shadow-yellow-500/50 legendary-glow',
};
const defaultBorder = 'border-gray-700 border';

export default function Card({ card, className} : CardProps) {
    // 1. Seltenheit abrufen
    const rarity = card.rarity;
    
    // 2. Die passende Rahmenklasse abrufen (mit Fallback)
    const dynamicBorderClass = rarityBorderMap[rarity] || defaultBorder;

    const combinedClasses = `flex flex-col justify-between items-center bg-[#966c57] rounded-xs w-52 h-75 overflow-hidden relative min-h-0 ${dynamicBorderClass} ${className}`;

    const isLegendary = rarity === 'legendary';

    return (
        <div className={combinedClasses}>
            <label className="text-[#FFFAA9] text-xs mt-3 p-1 shadow-[
      // Schatten 1: Oben (negativer Y-Versatz) & Links (negativer X-Versatz) - WEISS
      -2px_-2px_0px_0px_white,
      // Schatten 2: Unten (positiver Y-Versatz) & Rechts (positiver X-Versatz) - SCHWARZ
      2px_2px_0px_0px_black
    ] border-none">{card.name}</label>
            <CardImage className="mt-3 w-[172px] h-80" image_data={card.image_data} cardName={card.name} image_mime={card.image_mime} />
        </div>
    );
}