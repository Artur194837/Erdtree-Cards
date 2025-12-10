/// <reference types="react" />
import { createDB, getCards } from "@/app/lib/db";
import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import CardRow from "@/components/ui/cardRow";
import CardData from "../lib/cardData";
import CardRowData from "../lib/cardRowData";
import DBResponse from "../lib/response";

export default async function Main() {
  // Ensure DB/table exists
  await createDB();

  let res : DBResponse = await getCards();

  let cards : CardData[] = res.cards;

  let cardsStackedByFour: CardData [] [] = [];

  for(let startIndex = 0; startIndex < cards.length; startIndex += 4) {
    let fourCards: CardData[] = [];
    for(let i = 0; i < 4; i++) {
      if(startIndex + i <  cards.length) {
        fourCards.push(cards[startIndex + i]);
      }
    }
    cardsStackedByFour.push(fourCards);
  }

  return (
    <div className="w-3/4 relative left-1/4 mt-4">
      {cardsStackedByFour.map((cardRow, index : number) => (
        <CardRow key={index} cardRow={cardRow} />
      ))}
    </div>
  );
}
