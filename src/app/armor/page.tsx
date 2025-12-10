"use client";
/// <reference types="react" />
import React, { use } from 'react';
import CardRow from "@/components/ui/cardRow";
import CardData from "../lib/cardData";
import DBResponse from "../lib/response";
import { useState, useEffect } from 'react';
import Filter from '@/components/ui/filter';
import Searchbar from '@/components/ui/searchbar';
import { sortCards } from '../lib/functions';
import { filterCards } from '../lib/functions';
import useStateToCardDataAttribute from '../lib/useStateToCardDataAttribute';
import { getCardsThatFitToSearchParam } from '../lib/functions';

export default function Main() {
  async function createDB(){
    await fetch("/api/createDB", {
          method: "GET"
        });
  }

  useEffect(() => {
    createDB();
  }, []);

  const [cardsStackedByFour, setCardsStackedByFour] = useState<CardData[][]>([]);

  const useStates = {
    sortByUseState: useState("Physical Negation"),
    sortOrderUseState: useState<"asc" | "desc">("asc"),

    startIntervallPhysicalNegationUseState: useState(""),
    endIntervallPhysicalNegationUseState: useState(""),

    startIntervallStrikeNegationUseState: useState(""),
    endIntervallStrikeNegationUseState: useState(""),

    startIntervallSlashNegationUseState: useState(""),
    endIntervallSlashNegationUseState: useState(""),

    startIntervallPierceNegationUseState: useState(""),
    endIntervallPierceNegationUseState: useState(""),

    startIntervallMagicNegationUseState: useState(""),
    endIntervallMagicNegationUseState: useState(""),

    startIntervallFireNegationUseState: useState(""),
    endIntervallFireNegationUseState: useState(""),

    startIntervallLigtNegationUseState: useState(""),
    endIntervallLigtNegationUseState: useState(""),

    startIntervallHolyNegationUseState: useState(""),
    endIntervallHolyNegationUseState: useState(""),

    startIntervallWgtUseState: useState(""),
    endIntervallWgtUseState: useState(""),

    startIntervallImmunityUseState: useState(""),
    endIntervallImmunityUseState: useState(""),

    startIntervallRobustnessUseState: useState(""),
    endIntervallRobustnessUseState: useState(""),

    startIntervallFocusUseState: useState(""),
    endIntervallFocusUseState: useState(""),

    startIntervallVitalityUseState: useState(""),
    endIntervallVitalityUseState: useState(""),

    startIntervallPoiseUseState: useState(""),
    endIntervallPoiseUseState: useState(""),
  };

  const searchParamUseState = useState("");

  useEffect(() => {
    let cards: CardData[] = [];

    getCardsThatFitToSearchParam(searchParamUseState[0], "Armor").then((res) => {
      cards = res; 

      const sortKey = useStateToCardDataAttribute[useStates.sortByUseState[0]];

      cards = sortCards(cards, sortKey as keyof CardData, useStates.sortOrderUseState[0]);

      let filteredCards: CardData[] = [];
      let validFilterFound = false;

      let response = filterCards(cards, useStates);

      filteredCards = response[0];
      validFilterFound = response[1];
        
      if(!validFilterFound) {
        filteredCards = cards;
      }

      const cardsStacked: CardData[][] = [];
      for (let i = 0; i < filteredCards.length; i += 4) {
        cardsStacked.push(filteredCards.slice(i, i + 4));
      }

      setCardsStackedByFour(cardsStacked);
    });
  }, [
    useStates.sortByUseState[0],
    useStates.sortOrderUseState[0],
    useStates.startIntervallPhysicalNegationUseState[0],
    useStates.endIntervallPhysicalNegationUseState[0],
    useStates.startIntervallStrikeNegationUseState[0],
    useStates.endIntervallStrikeNegationUseState[0],
    useStates.startIntervallSlashNegationUseState[0],
    useStates.endIntervallSlashNegationUseState[0],
    useStates.startIntervallPierceNegationUseState[0],
    useStates.endIntervallPierceNegationUseState[0],
    useStates.startIntervallMagicNegationUseState[0],
    useStates.endIntervallMagicNegationUseState[0],
    useStates.startIntervallFireNegationUseState[0],
    useStates.endIntervallFireNegationUseState[0],
    useStates.startIntervallLigtNegationUseState[0],
    useStates.endIntervallLigtNegationUseState[0],
    useStates.startIntervallHolyNegationUseState[0],
    useStates.endIntervallHolyNegationUseState[0],
    useStates.startIntervallWgtUseState[0],
    useStates.endIntervallWgtUseState[0],
    useStates.startIntervallImmunityUseState[0],
    useStates.endIntervallImmunityUseState[0],
    useStates.startIntervallRobustnessUseState[0],
    useStates.endIntervallRobustnessUseState[0],
    useStates.startIntervallFocusUseState[0],
    useStates.endIntervallFocusUseState[0],
    useStates.startIntervallVitalityUseState[0],
    useStates.endIntervallVitalityUseState[0],
    useStates.startIntervallPoiseUseState[0],
    useStates.endIntervallPoiseUseState[0],
    searchParamUseState[0]
]);

  return (
    <div>
      <Searchbar searchParamUseState={searchParamUseState}/>
      <Filter useStates={useStates} className="mt-2" type="Armor"/>
      <div className="w-3/4 relative left-90 mt-4">
        {cardsStackedByFour.map((cardRow, index : number) => (
          <CardRow key={index} cardRow={cardRow} cardType="Armor" />
        ))}
      </div>
    </div>
  );
}
