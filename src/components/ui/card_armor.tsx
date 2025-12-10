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

export default function CardArmor({ card, className} : CardProps) {
    // 1. Seltenheit abrufen
    const rarity = card.rarity;
    
    // 2. Die passende Rahmenklasse abrufen (mit Fallback)
    const dynamicBorderClass = rarityBorderMap[rarity] || defaultBorder;

    const combinedClasses = `flex flex-col justify-between items-center bg-[#966c57] rounded-xs w-70 h-160 overflow-hidden relative min-h-0 ${dynamicBorderClass} ${className}`;

    if(card.physical_negation === null)
        card.physical_negation = 0;

    if(card.strike_negation === null)
        card.strike_negation = 0;

    if(card.slash_negation === null)
        card.slash_negation = 0;

    if(card.pierce_negation === null)
        card.pierce_negation = 0;

    if(card.magic_negation === null)
        card.magic_negation = 0;

    if(card.fire_negation === null)
        card.fire_negation = 0;

    if(card.light_negation === null)
        card.light_negation = 0;

    if(card.holy_negation === null)
        card.holy_negation = 0;

    if(card.immunity === null)
        card.immunity = 0;

    if(card.robustness === null)
        card.robustness = 0;

    if(card.focus === null)
        card.focus = 0;

    if(card.vitality === null)
        card.vitality = 0;

    if(card.poise === null)
        card.poise = 0;

    return (
        <div id="card" className={combinedClasses}>
            <label id="name" className="text-[#FFFAA9] text-2xl mt-3 p-1 border-none">{card.name}</label>
            <CardImage className="mt-3 w-[220px] h-[250px]" image_data={card.image_data} cardName={card.name} image_mime={card.image_mime} />
            <div id="werte" className="w-full mt-2">
                <div className="border-none flex flex-col w-full mb-2">
                    <div className="flex justify-between">
                        <div className="flex items-center">
                            <Image src="/armor.png" width={20} height={5} alt="Dmg Negation"></Image>
                            <label className="font-sans text-orange-200 text-base">Dmg Negation</label>
                        </div>
                        <div className="flex items-center">
                            <Image src="/armor.png" width={20} height={5} alt="Resistance"></Image>
                            <label className="font-sans text-orange-200 text-base">Resistance</label>
                        </div>
                    </div>
                    <div className="flex justify-between font-sans text-xs text-orange-200">
                        <label>Phy {card.physical_negation}</label>
                        <label>Immunity {card.immunity}</label>
                    </div>
                    <div className="flex justify-between font-sans text-xs text-orange-200">
                        <label>VS Strike {card.strike_negation}</label>
                        <label>Robustness {card.robustness}</label>
                    </div>
                    <div className="flex justify-between font-sans text-xs text-orange-200">
                        <label>VS Slash {card.slash_negation}</label>
                        <label>Focus {card.focus}</label>
                    </div>
                    <div className="flex justify-between font-sans text-xs text-orange-200">
                        <label>VS Pierce {card.pierce_negation}</label>
                        <label>Vitality {card.vitality}</label>
                    </div>
                    <div className="flex justify-between font-sans text-xs">
                        <label className="text-blue-300">Magic {card.magic_negation}</label>
                        <label className="text-orange-200">Poise {card.poise}</label>
                    </div>
                    <label className="font-sans text-xs text-orange-300">
                        Fire {card.fire_negation}
                    </label>
                    <label className="font-sans text-xs text-yellow-300">
                        Ligt {card.light_negation}
                    </label>
                    <label className="font-sans text-xs text-orange-200">
                        Holy {card.holy_negation}
                    </label>
                    <div className="flex font-sans text-xs">
                            <label className="text-orange-200 mr-1">Wgt.</label>
                            <label className="text-white">{card.wgt}</label>
                        </div>
                </div>
            </div>
        </div>
    );
}