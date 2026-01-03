"use client";
/// <reference types="react" />
import React, { useState, useEffect } from 'react';
import CardBoss from '@/components/ui/card_boss';
import CardData from "../lib/cardData";
import DBResponse from "../lib/response";
import Filter from '@/components/ui/filter';
import Searchbar from '@/components/ui/searchbar';
import { sortCards } from '../lib/functions';
import { filterCards } from '../lib/functions';
import useStateToCardDataAttribute from '../lib/useStateToCardDataAttribute';
import { getCardsThatFitToSearchParam } from '../lib/functions';

export default function Main() {
  // Funktion zum Initialisieren der Datenbank beim Laden der Seite
  async function createDB() {
    await fetch("/api/createDB", {
      method: "GET"
    });
  }

  // useEffect Hook, der createDB einmalig beim Mounten der Komponente ausführt
  useEffect(() => {
    createDB();
  }, []);

  // State für die Liste der anzuzeigenden Karten
  const [cards, setCards] = useState<CardData[]>([]);

  // Sammlung aller States für Filter- und Sortierfunktionen
  const useStates = {
    // Sortierung
    sortByUseState: useState("Name"),
    sortOrderUseState: useState<"asc" | "desc">("asc"),
    // Filter-Intervalle für Belohnungsrunen und Lebenspunkte (HP)
    startIntervallRewardRunesUseState: useState(""),
    endIntervallRewardRunesUseState: useState(""),
    startIntervallHpUseState: useState(""),
    endIntervallHpUseState: useState(""),
  };

  // State für den Suchbegriff
  const searchParamUseState = useState("");

  // useEffect Hook zum Abrufen, Sortieren und Filtern der Karten
  // Wird ausgeführt, wenn sich Filter, Sortierung oder Suchbegriff ändern
  useEffect(() => {
    // Abrufen der Karten, die zum Suchbegriff passen (Kategorie "Boss")
    getCardsThatFitToSearchParam(searchParamUseState[0], "Boss").then((res) => {
      let cards: CardData[] = res;

      // Bestimmen des Sortierschlüssels basierend auf dem ausgewählten Sortierkriterium
      const sortKey = useStateToCardDataAttribute[useStates.sortByUseState[0]];
      
      // Sortieren der Karten
      cards = sortCards(cards, sortKey as keyof CardData, useStates.sortOrderUseState[0]);

      let filteredCards: CardData[] = [];
      let validFilterFound = false;

      // Filtern der Karten basierend auf den gesetzten Intervallen
      let response = filterCards(cards, useStates);

      filteredCards = response[0];
      validFilterFound = response[1];
        
      // Wenn kein Filter aktiv ist, zeige alle (gefilterten/gesuchten) Karten an
      if(!validFilterFound)
        filteredCards = cards;

      // Aktualisieren des States mit den gefilterten und sortierten Karten
      setCards(filteredCards);
    });
  }, [useStates.sortByUseState[0], 
      // Abhängigkeiten für den useEffect Hook: Alle Filter- und Sortier-States sowie der Suchbegriff
      useStates.sortOrderUseState[0], 
      useStates.startIntervallHpUseState[0], 
      useStates.endIntervallHpUseState[0], 
      useStates.startIntervallRewardRunesUseState[0], 
      useStates.endIntervallRewardRunesUseState[0],
      searchParamUseState[0]]);

  return (
    <div>
      {/* Suchleiste Komponente */}
      <Searchbar searchParamUseState={searchParamUseState}/>
      {/* Filter Komponente für Bosse */}
      <Filter useStates={useStates} className="mt-2" type="Boss" />
      <div className='flex justify-center'>
        {/* Grid-Layout zur Anzeige der Karten */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 w-auto mt-4">
          {cards.map((card, index: number) => (
            <CardBoss key={index} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
}
