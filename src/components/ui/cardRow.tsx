import CardData from "@/app/lib/cardData"
import Card from "./card"
import CardRowData from "@/app/lib/cardRowData"
import CardBoss from "./card_boss"
import CardNPC from "./card_npc";
import CardWeapon from "./card_weapon";
import CardArmor from "./card_armor";
import { useState, useEffect } from "react";


interface CardRowProps {
    cardRow: CardData[]; // Die Komponente erwartet ein Prop namens 'cardRow', das ein Array ist.
    cardType : string;
}

export default function CardRow({cardRow, cardType} : CardRowProps){
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
        setShowContent(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    if(showContent)
        return (
            <div className="flex mb-5">
                {
                    cardRow.map((card: CardData, index : number) => {
                        switch(cardType){
                            case "Boss":
                                return <CardBoss className="mr-5" key={index} card={card}/>
                            case "NPC":
                                return <CardNPC className="mr-5" key={index} card={card}/>
                            case "Weapon":
                                return <CardWeapon className="mr-5" key={index} card={card}/>
                            case "Armor":
                                return <CardArmor className="mr-5" key={index} card={card}/>
                        }
                    })
                }
            </div>
        );
}