"use client";
/// <reference types="react" />
import React, { useState, useEffect } from 'react';
import CardRow from "@/components/ui/cardRow";
import CardData from "../lib/cardData";
import DBResponse from "../lib/response";
import Filter from '@/components/ui/filter';
import Searchbar from '@/components/ui/searchbar';
import { sortCards } from '../lib/functions';
import useStateToCardDataAttribute from '../lib/useStateToCardDataAttribute';
import { getCardsThatFitToSearchParam } from '../lib/functions';

export default function Main() {
  async function createDB() {
    await fetch("/api/createDB", {
      method: "GET"
    });
  }

  useEffect(() => {
    createDB();
  }, []);

  const [cardsStackedByFour, setCardsStackedByFour] = useState<CardData[][]>([]);

  const useStates = {
    sortByUseState: useState("Name"),
    sortOrderUseState: useState<"asc" | "desc">("asc"),
  };

  const searchParamUseState = useState("");

  useEffect(() => {
    getCardsThatFitToSearchParam(searchParamUseState[0], "NPC").then((res) => {
      let cards: CardData[] = res;

      const sortKey = useStateToCardDataAttribute[useStates.sortByUseState[0]];
      
      cards = sortCards(cards, sortKey as keyof CardData, useStates.sortOrderUseState[0]);

      const cardsStacked: CardData[][] = [];
      for (let i = 0; i < cards.length; i += 4) {
        cardsStacked.push(cards.slice(i, i + 4));
      }

      setCardsStackedByFour(cardsStacked);
    });
  }, [useStates.sortByUseState[0], useStates.sortOrderUseState[0], searchParamUseState[0]]);

  return (
    <div>
      <Searchbar searchParamUseState={searchParamUseState}/>
      <Filter useStates={useStates} className="mt-2" type="NPC" />
      <div className="w-3/4 relative left-90 mt-4">
        {cardsStackedByFour.map((cardRow, index: number) => (
          <CardRow key={index} cardRow={cardRow} cardType="NPC" />
        ))}
      </div>
    </div>
  );
}
