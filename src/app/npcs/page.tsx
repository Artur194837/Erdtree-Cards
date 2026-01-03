"use client";
/// <reference types="react" />
import React, { useState, useEffect } from 'react';
import CardData from "../lib/cardData";
import DBResponse from "../lib/response";
import Filter from '@/components/ui/filter';
import Searchbar from '@/components/ui/searchbar';
import { sortCards } from '../lib/functions';
import useStateToCardDataAttribute from '../lib/useStateToCardDataAttribute';
import { getCardsThatFitToSearchParam } from '../lib/functions';
import CardNPC from '@/components/ui/card_npc';

export default function Main() {
  // Funktion zum Erstellen der Datenbank über einen API-Aufruf.
  async function createDB() {
    // Sendet eine GET-Anfrage an den API-Endpunkt /api/createDB.
    await fetch("/api/createDB", {
      method: "GET"
    });
  }

  // useEffect-Hook, der beim ersten Rendern der Komponente die Datenbank erstellt.
  useEffect(() => {
    createDB();
  }, []); // Leeres Abhängigkeitsarray sorgt dafür, dass der Effekt nur einmal ausgeführt wird.

  // State für die Liste der anzuzeigenden Karten.
  const [cards, setCards] = useState<CardData[]>([]);

  // Bündelt die States für die Filter- und Sortier-Komponenten.
  const useStates = {
    sortByUseState: useState("Name"), // State für das Sortierkriterium.
    sortOrderUseState: useState<"asc" | "desc">("asc"), // State für die Sortierreihenfolge (aufsteigend/absteigend).
  };

  // State für den Suchparameter aus der Suchleiste.
  const searchParamUseState = useState("");

  // useEffect-Hook, der die Kartenliste aktualisiert, wenn sich Sortier- oder Suchparameter ändern.
  useEffect(() => {
    // Ruft Karten ab, die zum aktuellen Suchparameter und Typ "NPC" passen.
    getCardsThatFitToSearchParam(searchParamUseState[0], "NPC").then((res) => {
      let cards: CardData[] = res;

      // Ermittelt das Attribut, nach dem sortiert werden soll, aus dem State.
      const sortKey = useStateToCardDataAttribute[useStates.sortByUseState[0]];
      
      // Sortiert die abgerufenen Karten.
      cards = sortCards(cards, sortKey as keyof CardData, useStates.sortOrderUseState[0]);

      // Aktualisiert den State der Karten, was zu einem Neu-Rendern der Liste führt.
      setCards(cards);
    });
  }, [useStates.sortByUseState[0], useStates.sortOrderUseState[0], searchParamUseState[0]]); // Abhängigkeiten des Effekts.

  return (
    <div>
      <Searchbar searchParamUseState={searchParamUseState}/> {/* Komponente für die Suchleiste */}
      <Filter useStates={useStates} className="mt-2" type="NPC" /> {/* Komponente für die Filter- und Sortieroptionen */}
      {/* Container für das Karten-Grid */}
      <div className='flex justify-center'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-8 w-auto mt-4">
          {/* Mappt durch das 'cards'-Array und rendert für jede Karte eine CardNPC-Komponente. */}
          {cards.map((card, index: number) => (
            <CardNPC key={index} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
}
