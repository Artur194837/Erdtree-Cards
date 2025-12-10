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

export default function CardBoss({ card, className} : CardProps) {
    // 1. Seltenheit abrufen
    const rarity = card.rarity;
    
    // 2. Die passende Rahmenklasse abrufen (mit Fallback)
    const dynamicBorderClass = rarityBorderMap[rarity] || defaultBorder;
    
    const combinedClasses = `flex flex-col justify-between items-center bg-[#966c57] rounded-xs w-70 h-145 overflow-hidden relative min-h-0 ${dynamicBorderClass} ${className}`;

    if(card.reward_runes === null)
        card.reward_runes = 0;

    // Fügen Sie diese Hilfsfunktion vor dem return-Block Ihrer Komponente hinzu
    function mapTypeToLabel(type: string | null | undefined, index: number){
        // Wenn der Wert null, leer oder "None" ist, geben wir nichts zurück
        if (!type || type === "None" || type.trim() === "") {
            return null;
        }

        let tailwindColorClass = 'text-white'; // Default für physische Typen

        // Zuweisung der Farbe basierend auf dem Typ
        switch (type) {
            // Elementare Angriffe (Farben aus Ihrem Code abgeleitet)
            case "Magic Damage":
                tailwindColorClass = 'text-blue-200';
                break;
            case "Fire Damage":
                tailwindColorClass = 'text-orange-300';
                break;
            case "Lightning Damage":
                tailwindColorClass = 'text-yellow-300';
                break;
            case "Holy Damage":
                tailwindColorClass = 'text-[#ffd894]'; // Custom Holy Farbe
                break;
            
            // Physische Angriffe
            case "Standard Damage":
            case "Strike Damage":
            case "Slash Damage":
            case "Pierce Damage":
            case "Critical Damage":
                tailwindColorClass = 'text-white'; // Physische Typen bleiben weiß
                break;

            // Zustands-Typen (eigene Farbwahl: Lila/Grün/Blutrot für Unterscheidung)
            case "Poison":
            case "Scarlet Rot":
                tailwindColorClass = 'text-green-400';
                break;
            case "Blood Loss":
                tailwindColorClass = 'text-red-500';
                break;
            case "Frostbite":
                tailwindColorClass = 'text-cyan-300';
                break;
            case "Sleep":
            case "Madness":
            case "Death Blight":
                tailwindColorClass = 'text-purple-400';
                break;
            
            default:
                // Fallback für unbekannte Typen
                tailwindColorClass = 'text-gray-400'; 
                break;
        }

    // Rückgabe des JSX-Elements
    return (
        <label key={index} className={`text-xs ${tailwindColorClass}`}>
            {type}
        </label>
    );
};

    return (
        <div id="card" className={combinedClasses}>
            <label id="name" className="text-[#FFFAA9] text-2xl mt-3 p-1 border-none text-center">{card.name}</label>
            <CardImage className="mt-3" image_data={card.image_data} cardName={card.name} image_mime={card.image_mime} />
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
                    <div className="flex">
                        <Image src="/runes.png" width={15} height={15} alt="Runes Symbol"/>
                        <label className="text-xs text-white font-sans">
                            {card.reward_runes}
                        </label>
                    </div>
                    {card.reward_one !== null ?
                        (<label className="text-xs text-orange-200 font-sans">
                            {card.reward_one}
                        </label>)
                    :
                        (null)}
                    {card.reward_two !== null ?
                        (<label className="text-xs text-orange-200 font-sans">
                            {card.reward_two}
                        </label>)
                    :
                        (null)}
                    {card.reward_three !== null ?
                        (<label className="text-xs text-orange-200 font-sans">
                            {card.reward_three}
                        </label>)
                    :
                        (null)}
                    <label className="text-xs text-red-300 font-sans">HP: {card.hp}</label>
                    <div className="flex">
                        {card.strong_vs_1 !== "None" || card.strong_vs_2 !== "None" || card.strong_vs_3 !== "None" || card.strong_vs_4 !== "None" ?
                            (<div className="flex flex-col mr-2">
                                <label className="text-xs text-white font-sans">
                                    Stronger VS
                                </label>

                                {mapTypeToLabel(card.strong_vs_1, 0)}
                                {mapTypeToLabel(card.strong_vs_2, 1)}
                                {mapTypeToLabel(card.strong_vs_3, 2)}
                                {mapTypeToLabel(card.strong_vs_4, 3)}
                            </div>)
                        :
                            (null)}
                        {card.immune_to_1 !== "None" || card.immune_to_2 !== "None" || card.immune_to_3 !== "None" || card.immune_to_4 !== "None" ?
                            (<div className="flex flex-col mr-2">
                                <label className="text-xs text-white font-sans">
                                    Immune to
                                </label>

                                {mapTypeToLabel(card.immune_to_1, 0)}
                                {mapTypeToLabel(card.immune_to_2, 1)}
                                {mapTypeToLabel(card.immune_to_3, 2)}
                                {mapTypeToLabel(card.immune_to_4, 3)}
                            </div>)
                        :
                            (null)}
                        {card.weak_to_1 !== "None" || card.weak_to_2 !== "None" || card.weak_to_3 !== "None" || card.weak_to_4 !== "None" ?
                            (<div className="flex flex-col">
                                <label className="text-xs text-white font-sans">
                                    Weak to
                                </label>

                                {mapTypeToLabel(card.weak_to_1, 0)}
                                {mapTypeToLabel(card.weak_to_2, 1)}
                                {mapTypeToLabel(card.weak_to_3, 2)}
                                {mapTypeToLabel(card.weak_to_4, 3)}
                            </div>)
                        :
                            (null)}
                    </div>
                </div>
            </div>
        </div>
    );
}