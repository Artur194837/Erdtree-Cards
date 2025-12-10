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

export default function CardWeapon({ card, className} : CardProps) {
    // 1. Seltenheit abrufen
    const rarity = card.rarity;
    
    if(card.base_attack === undefined)
        card.base_attack = 0;

    if(card.parry_defense === undefined)
        card.parry_defense = 0;

    if(card.magic_attack === undefined)
        card.magic_attack = 0;

    if(card.magic_defense === undefined)
        card.magic_defense = 0;

    if(card.fire_attack === undefined)
        card.fire_attack = 0;

    if(card.fire_defense === undefined)
        card.fire_defense = 0;

    if(card.light_attack === undefined)
        card.light_attack = 0;

    if(card.light_defense === undefined)
        card.light_defense = 0;

    if(card.holy_attack === undefined)
        card.holy_attack = 0;

    if(card.holy_defense === undefined)
        card.holy_defense = 0;

    if(card.crit === undefined)
        card.crit = 0;

    if(card.boost === undefined)
        card.boost = 0;

    if(card.rng === undefined)
        card.rng = 0;

    // 2. Die passende Rahmenklasse abrufen (mit Fallback)
    const dynamicBorderClass = rarityBorderMap[rarity] || defaultBorder;

    const combinedClasses = `flex flex-col justify-between items-center bg-[#966c57] rounded-xs w-70 h-170 overflow-hidden relative min-h-0 ${dynamicBorderClass} ${className}`;

    console.log(card.name);

    return (
        <div id="card" className={combinedClasses}>
            <label id="name" className="text-[#FFFAA9] text-2xl mt-3 p-1 border-none">{card.name}</label>
            <CardImage className="mt-3 w-[220px] h-[250px]" image_data={card.image_data} cardName={card.name} image_mime={card.image_mime} />
            <div id="werte" className="w-full mt-2">
                <div className="border-none flex flex-col w-full mb-2">
                    <div className="flex justify-between">
                        <div className="flex items-center">
                            <Image src="/schwert.png" width={20} height={5} alt="Attack"></Image>
                            <label className="font-sans text-orange-200 text-xl">Attack</label>
                        </div>
                        <div className="flex items-center">
                            <Image src="/schild.png" width={20} height={5} alt="Guard"></Image>
                            <label className="font-sans text-orange-200 text-xl">Guard</label>
                        </div>
                    </div>
                    <div className="flex justify-between font-sans text-xs text-white">
                        <label>Phy {card.base_attack}</label>
                        <label>Phy {card.parry_defense}</label>
                    </div>
                    <div className="flex justify-between font-sans text-xs text-blue-200">
                        <label>Mag {card.magic_attack}</label>
                        <label>Mag {card.magic_defense}</label>
                    </div>
                    <div className="flex justify-between font-sans text-xs text-orange-300">
                        <label>Fire {card.fire_attack}</label>
                        <label>Fire {card.fire_defense}</label>
                    </div>
                    <div className="flex justify-between font-sans text-xs text-yellow-300">
                        <label>Ligt {card.light_attack}</label>
                        <label>Ligt {card.light_defense}</label>
                    </div>
                    <div className="flex justify-between font-sans text-xs text-[#ffd894]">
                        <label>Holy {card.holy_attack}</label>
                        <label>Holy {card.holy_defense}</label>
                    </div>
                    <div className="flex justify-between font-sans text-xs">
                        <label className="text-red-400">Crit {card.crit}</label>
                        <label className="text-blue-400">Boost {card.boost}</label>
                    </div>
                    {card.rng !== 0 ? (
                        <label className="text-green-300 font-sans text-xs mb-2">Rng {card.rng}</label>
                    ): (null)}
                    <div className="flex justify-between">
                        <div className="flex items-center">
                            <Image src="/bizeps.png" width={20} height={5} alt="Scaling"></Image>
                            <label className="font-sans text-orange-200 text-xl">Scaling</label>
                        </div>
                        <div className="flex items-center">
                            <Image src="/hand.png" width={20} height={5} alt="Requires"></Image>
                            <label className="font-sans text-orange-200 text-xl">Requires</label>
                        </div>
                    </div>
                    {card.str_scaling !== undefined ? (
                        <div className="flex justify-between font-sans text-xs">
                            <div className="flex">
                                <label className="text-orange-200 mr-1">Str</label>
                                <label className="text-white">{card.str_scaling}</label>
                            </div>
                            <div className="flex">
                                <label className="text-orange-200 mr-1">Str</label>
                                <label className="text-white">{card.str_requirement}</label>
                            </div>
                        </div>
                    ) : (null)}
                    {card.dex_scaling !== undefined ? (
                        <div className="flex justify-between font-sans text-xs">
                            <div className="flex">
                                <label className="text-orange-200 mr-1">Dex</label>
                                <label className="text-white">{card.dex_scaling}</label>
                            </div>
                            <div className="flex">
                                <label className="text-orange-200 mr-1">Dex</label>
                                <label className="text-white">{card.dex_requirement}</label>
                            </div>
                        </div>
                    ) : (null)}
                    {card.int_scaling !== undefined ? (
                        <div className="flex justify-between font-sans text-xs">
                            <div className="flex">
                                <label className="text-orange-200 mr-1">Int</label>
                                <label className="text-white">{card.int_scaling}</label>
                            </div>
                            <div className="flex">
                                <label className="text-orange-200 mr-1">Int</label>
                                <label className="text-white">{card.int_requirement}</label>
                            </div>
                        </div>
                    ) : (null)}
                    {card.fai_scaling !== undefined ? (
                        <div className="flex justify-between font-sans text-xs">
                            <div className="flex">
                                <label className="text-orange-200 mr-1">Fai</label>
                                <label className="text-white">{card.fai_scaling}</label>
                            </div>
                            <div className="flex">
                                <label className="text-orange-200 mr-1">Fai</label>
                                <label className="text-white">{card.fai_requirement}</label>
                            </div>
                        </div>
                    ) : (null)}
                    {card.arc_scaling !== undefined ? (
                        <div className="flex justify-between font-sans text-xs">
                            <div className="flex">
                                <label className="text-orange-200 mr-1">Arc</label>
                                <label className="text-white">{card.arc_scaling}</label>
                            </div>
                            <div className="flex">
                                <label className="text-orange-200 mr-1">Arc</label>
                                <label className="text-white">{card.arc_requirement}</label>
                            </div>
                        </div>
                    ) : (null)}
                    <div className="flex justify-between font-sans text-xs">
                        <label className="text-orange-200">{card.special_attack}</label>
                        <div className="flex">
                            <label className="text-orange-200 mr-1">FP</label>
                            <label className="text-white">{card.special_attack_fp}</label>
                        </div>
                    </div>
                    <div className="flex font-sans text-xs">
                            <label className="text-orange-200 mr-1">Wgt.</label>
                            <label className="text-white">{card.wgt}</label>
                        </div>
                </div>
            </div>
        </div>
    );
}