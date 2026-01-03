import CardData from "@/app/lib/cardData";
import { CardImage } from "./cardImage";
import Image from "next/image";
import { Suspense } from "react";

interface CardProps {
    card: CardData;
    className?: string;
}

// Map zur Zuordnung von Seltenheitsstufen zu den entsprechenden TailwindCSS-Rahmenklassen.
const rarityBorderMap: { [key: string]: string } = {
    'Common': 'border-gray-400 border-4',
    'Rare': 'border-blue-500 border-4',
    'Epic': 'border-purple-500 border-4',
    'Legendary': 'border-yellow-400 border-4 shadow-2xl shadow-yellow-500/50 legendary-glow',
};
const defaultBorder = 'border-gray-700 border';

export default function CardArmor({ card, className} : CardProps) {
    // Seltenheit der Karte abrufen.
    const rarity = card.rarity;
    
    // Passende Rahmenklasse basierend auf der Seltenheit ermitteln (mit Fallback).
    const dynamicBorderClass = rarityBorderMap[rarity] || defaultBorder;

    // Kombiniert die Basis-Stylingklassen mit der dynamischen Rahmenklasse und optionalen weiteren Klassen.
    const combinedClasses = `flex flex-col justify-between items-center bg-[#966c57] rounded-xs w-50 h-115 sm:w-65 sm:h-145 lg:w-75 lg:h-160 2xl:w-80 2xl:h-165 overflow-hidden relative min-h-0 ${dynamicBorderClass} ${className}`;

    // Setzt Standardwerte für Schadensreduktion, falls diese nicht definiert sind.
    if(card.physical_negation === undefined)
        card.physical_negation = 0;

    // Setzt Standardwerte für Schlag-Schadensreduktion, falls diese nicht definiert sind.
    if(card.strike_negation === undefined)
        card.strike_negation = 0;

    // Setzt Standardwerte für Schnitt-Schadensreduktion, falls diese nicht definiert sind.
    if(card.slash_negation === undefined)
        card.slash_negation = 0;

    // Setzt Standardwerte für Stich-Schadensreduktion, falls diese nicht definiert sind.
    if(card.pierce_negation === undefined)
        card.pierce_negation = 0;

    // Setzt Standardwerte für Magie-Schadensreduktion, falls diese nicht definiert sind.
    if(card.magic_negation === undefined)
        card.magic_negation = 0;

    // Setzt Standardwerte für Feuer-Schadensreduktion, falls diese nicht definiert sind.
    if(card.fire_negation === undefined)
        card.fire_negation = 0;

    // Setzt Standardwerte für Blitz-Schadensreduktion, falls diese nicht definiert sind.
    if(card.light_negation === undefined)
        card.light_negation = 0;

    // Setzt Standardwerte für Heilig-Schadensreduktion, falls diese nicht definiert sind.
    if(card.holy_negation === undefined)
        card.holy_negation = 0;

    // Setzt Standardwerte für Immunität, falls diese nicht definiert ist.
    if(card.immunity === undefined)
        card.immunity = 0;

    // Setzt Standardwerte für Robustheit, falls diese nicht definiert ist.
    if(card.robustness === undefined)
        card.robustness = 0;

    // Setzt Standardwerte für Fokus, falls dieser nicht definiert ist.
    if(card.focus === undefined)
        card.focus = 0;

    // Setzt Standardwerte für Vitalität, falls diese nicht definiert ist.
    if(card.vitality === undefined)
        card.vitality = 0;

    // Setzt Standardwerte für Haltung (Poise), falls diese nicht definiert ist.
    if(card.poise === undefined)
        card.poise = 0;

    return (
        // Hauptcontainer der Karte mit dynamischen Klassen und spezifischer ID für das Styling.
        <div id="card" className={combinedClasses}>
            {/* Name der Karte */}
            <label id="name" className="text-[#FFFAA9] text-lg sm:text-xl lg:text-2xl mt-3 p-1 border-none text-center">{card.name}</label>
            {/* Bild der Karte */}
            <CardImage className="mt-3 w-[160px] h-[180px] sm:w-[200px] sm:h-[250px] lg:w-[240px] lg:h-[270px] absolute top-16 sm:top-11 lg:top-13" image_data={card.image_data} cardName={card.name} image_mime={card.image_mime} />
            {/* Container für die Werte der Rüstung */}
            <div id="werte" className="w-full mt-2">
                <div className="border-none flex flex-col w-full mb-2">
                    <div className="flex justify-between">
                        <div className="flex items-center">
                            <Image src="/armor.png" width={20} height={5} className="w-2 lg:w-4" alt="Dmg Negation"></Image>
                            <label className="font-sans text-orange-200 text-sm sm:text-xl lg:text-2xl">Dmg Negation</label>
                        </div>
                        <div className="flex items-center">
                            <Image src="/armor.png" width={20} height={5} className="w-2 lg:w-4" alt="Resistance"></Image>
                            <label className="font-sans text-orange-200 text-sm sm:text-xl lg:text-2xl">Resistance</label>
                        </div>
                    </div>
                    {/* Physische Schadensreduktion und Immunität */}
                    <div className="flex justify-between font-sans text-[7px] sm:text-xs lg:text-sm text-orange-200">
                        <label>Phy {card.physical_negation}</label>
                        <label>Immunity {card.immunity}</label>
                    </div>
                    {/* Schlag-Schadensreduktion und Robustheit */}
                    <div className="flex justify-between font-sans text-[7px] sm:text-xs lg:text-sm text-orange-200">
                        <label>VS Strike {card.strike_negation}</label>
                        <label>Robustness {card.robustness}</label>
                    </div>
                    {/* Schnitt-Schadensreduktion und Fokus */}
                    <div className="flex justify-between font-sans text-[7px] sm:text-xs lg:text-sm text-orange-200">
                        <label>VS Slash {card.slash_negation}</label>
                        <label>Focus {card.focus}</label>
                    </div>
                    {/* Stich-Schadensreduktion und Vitalität */}
                    <div className="flex justify-between font-sans text-[7px] sm:text-xs lg:text-sm text-orange-200">
                        <label>VS Pierce {card.pierce_negation}</label>
                        <label>Vitality {card.vitality}</label>
                    </div>
                    {/* Magie-Schadensreduktion und Haltung */}
                    <div className="flex justify-between font-sans text-[7px] sm:text-xs lg:text-sm">
                        <label className="text-blue-300">Magic {card.magic_negation}</label>
                        <label className="text-orange-200">Poise {card.poise}</label>
                    </div>
                    {/* Feuer-Schadensreduktion */}
                    <label className="font-sans text-[7px] sm:text-xs lg:text-sm text-orange-300">
                        Fire {card.fire_negation}
                    </label>
                    {/* Blitz-Schadensreduktion */}
                    <label className="font-sans text-[7px] sm:text-xs lg:text-sm text-yellow-300">
                        Ligt {card.light_negation}
                    </label>
                    {/* Heilig-Schadensreduktion */}
                    <label className="font-sans text-[7px] sm:text-xs lg:text-sm text-orange-200">
                        Holy {card.holy_negation}
                    </label>
                    {/* Gewicht der Rüstung */}
                    <div className="flex font-sans text-[7px] sm:text-xs lg:text-sm">
                            <label className="text-orange-200 mr-1">Wgt.</label>
                            <label className="text-white">{card.wgt}</label>
                        </div>
                </div>
            </div>
        </div>
    );
}