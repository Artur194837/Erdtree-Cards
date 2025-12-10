import CardData from "@/app/lib/cardData";
import { CardImage } from "./cardImage";
import Image from "next/image";
import { Suspense } from "react";

interface CardProps {
    card: CardData;
    className?: string;
}

const rarityBorderMap: { [key: string]: string } = {
    'Common': 'border-gray-400 border-4',
    'Rare': 'border-blue-500 border-4',
    'Epic': 'border-purple-500 border-4',
    'Legendary': 'border-yellow-400 border-4 shadow-2xl shadow-yellow-500/50 legendary-glow',
};
const defaultBorder = 'border-gray-700 border';

export default function CardNPC({ card, className} : CardProps) {
    // 1. Seltenheit abrufen
    const rarity = card.rarity;
    
    // 2. Die passende Rahmenklasse abrufen (mit Fallback)
    const dynamicBorderClass = rarityBorderMap[rarity] || defaultBorder;
    
    const combinedClasses = `flex flex-col justify-between items-center bg-[#966c57] rounded-xs w-70 h-130 overflow-hidden relative min-h-0 ${dynamicBorderClass} ${className}`;

    return (
        <div id="card" className={combinedClasses}>
            <label id="name" className="text-[#FFFAA9] text-2xl mt-3 p-1 border-none">{card.name}</label>
            <CardImage className="mt-3 w-[220px] h-[250px]" image_data={card.image_data} cardName={card.name} image_mime={card.image_mime} />
            <div id="werte" className="w-full mt-2">
                <div className="border-none flex flex-col w-full mb-2">
                    {card.location !== null ?
                        (<div className="flex">
                            <label className="text-xs text-white font-sans mr-1">Location</label>
                            <label className="text-xs text-orange-200 font-sans">{card.location}</label>
                        </div>)
                    :
                        (null)
                    }
                </div>
            </div>
        </div>
    );
}