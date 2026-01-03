"use client";
/// <reference types="react" />
import React, { use } from 'react';
import CardArmor from '@/components/ui/card_armor';
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
  // Funktion zum Initialisieren der Datenbank beim Laden der Seite
  async function createDB(){
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
    sortByUseState: useState("Physical Negation"),
    sortOrderUseState: useState<"asc" | "desc">("asc"),

    // Filter-Intervalle für verschiedene Schadensnegierungen (Negation)
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

    // Filter-Intervalle für sonstige Werte (Gewicht, Immunität, etc.)
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

  // State für den Suchbegriff
  const searchParamUseState = useState("");

  // useEffect Hook zum Abrufen, Sortieren und Filtern der Karten
  // Wird ausgeführt, wenn sich Filter, Sortierung oder Suchbegriff ändern
  useEffect(() => {
    let cards: CardData[] = [];

    // Abrufen der Karten, die zum Suchbegriff passen (Kategorie "Armor")
    getCardsThatFitToSearchParam(searchParamUseState[0], "Armor").then((res) => {
      cards = res; 

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
      if(!validFilterFound) {
        filteredCards = cards;
      }

      // Aktualisieren des States mit den gefilterten und sortierten Karten
      setCards(filteredCards);
    });
  }, [
    // Abhängigkeiten für den useEffect Hook: Alle Filter- und Sortier-States sowie der Suchbegriff
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
      {/* Suchleiste Komponente */}
      <Searchbar searchParamUseState={searchParamUseState}/>
      {/* Filter Komponente für Rüstungen */}
      <Filter useStates={useStates} className="mt-2" type="Armor"/>
      <div className='flex justify-center'>
        {/* Grid-Layout zur Anzeige der Karten */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 w-auto mt-4">
          {cards.map((card, index : number) => (
            <CardArmor key={index} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
}
