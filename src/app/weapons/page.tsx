"use client";
/// <reference types="react" />
import React from 'react';
import CardData from "../lib/cardData";
import { useState, useEffect } from 'react';
import Filter from '@/components/ui/filter';
import Searchbar from '@/components/ui/searchbar';
import { sortCards } from '../lib/functions';
import { filterCards } from '../lib/functions';
import useStateToCardDataAttribute from '../lib/useStateToCardDataAttribute';
import { getCardsThatFitToSearchParam } from '../lib/functions';
import CardWeapon from '@/components/ui/card_weapon';

export default function Main() {
  // Funktion zum Erstellen der Datenbank über einen API-Aufruf.
  async function createDB(){
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

  // State für den Suchparameter aus der Suchleiste.
  const [searchParam, setSearchParam] = useState("");

  const sortByUseState = useState("Base Attack");
  const sortOrderUseState = useState<"asc" | "desc">("asc");

  // States für die verschiedenen Filter-Intervalle (Start- und Endwerte).
  const startIntervallBaseAttackUseState = useState("");
  const endIntervallBaseAttackUseState = useState("");

  const startIntervallMagicAttackUseState = useState("");
  const endIntervallMagicAttackUseState = useState("");

  const startIntervallFireAttackUseState = useState("");
  const endIntervallFireAttackUseState = useState("");

  const startIntervallLigtAttackUseState = useState("");
  const endIntervallLigtAttackUseState = useState("");

  const startIntervallHolyAttackUseState = useState("");
  const endIntervallHolyAttackUseState = useState("");

  const startIntervallParryDefenseUseState = useState("");
  const endIntervallParryDefenseUseState = useState("");

  const startIntervallMagicDefenseUseState = useState("");
  const endIntervallMagicDefenseUseState = useState("");

  const startIntervallFireDefenseUseState = useState("");
  const endIntervallFireDefenseUseState = useState("");

  const startIntervallLigtDefenseUseState = useState("");
  const endIntervallLigtDefenseUseState = useState("");

  const startIntervallHolyDefenseUseState = useState("");
  const endIntervallHolyDefenseUseState = useState("");

  const startIntervallStrScalingUseState = useState("");
  const endIntervallStrScalingUseState = useState("");

  const startIntervallDexScalingUseState = useState("");
  const endIntervallDexScalingUseState = useState("");

  const startIntervallIntScalingUseState = useState("");
  const endIntervallIntScalingUseState = useState("");

  const startIntervallFaiScalingUseState = useState("");
  const endIntervallFaiScalingUseState = useState("");

  const startIntervallArcScalingUseState = useState("");
  const endIntervallArcScalingUseState = useState("");

  const startIntervallStrRequirementUseState = useState("");
  const endIntervallStrRequirementUseState = useState("");

  const startIntervallDexRequirementUseState = useState("");
  const endIntervallDexRequirementUseState = useState("");

  const startIntervallIntRequirementUseState = useState("");
  const endIntervallIntRequirementUseState = useState("");

  const startIntervallFaiRequirementUseState = useState("");
  const endIntervallFaiRequirementUseState = useState("");

  const startIntervallArcRequirementUseState = useState("");
  const endIntervallArcRequirementUseState = useState("");

  const startIntervallSpecialAttackFPUseState = useState("");
  const endIntervallSpecialAttackFPUseState = useState("");

  const startIntervallWgtUseState = useState("");
  const endIntervallWgtUseState = useState("");

  const startIntervallCritUseState = useState("");
  const endIntervallCritUseState = useState("");

  const startIntervallRngUseState = useState("");
  const endIntervallRngUseState = useState("");

  const startIntervallBoostUseState = useState("");
  const endIntervallBoostUseState = useState("");

  // Bündelt alle States für die Filter-Komponente.
  const useStates = {
    sortByUseState,
    sortOrderUseState,
    startIntervallBaseAttackUseState,
    endIntervallBaseAttackUseState,
    startIntervallMagicAttackUseState,
    endIntervallMagicAttackUseState,
    startIntervallFireAttackUseState,
    endIntervallFireAttackUseState,
    startIntervallLigtAttackUseState,
    endIntervallLigtAttackUseState,
    startIntervallHolyAttackUseState,
    endIntervallHolyAttackUseState,
    startIntervallParryDefenseUseState,
    endIntervallParryDefenseUseState,
    startIntervallMagicDefenseUseState,
    endIntervallMagicDefenseUseState,
    startIntervallFireDefenseUseState,
    endIntervallFireDefenseUseState,
    startIntervallLigtDefenseUseState,
    endIntervallLigtDefenseUseState,
    startIntervallHolyDefenseUseState,
    endIntervallHolyDefenseUseState,
    startIntervallStrScalingUseState,
    endIntervallStrScalingUseState,
    startIntervallDexScalingUseState,
    endIntervallDexScalingUseState,
    startIntervallIntScalingUseState,
    endIntervallIntScalingUseState,
    startIntervallFaiScalingUseState,
    endIntervallFaiScalingUseState,
    startIntervallArcScalingUseState,
    endIntervallArcScalingUseState,
    startIntervallStrRequirementUseState,
    endIntervallStrRequirementUseState,
    startIntervallDexRequirementUseState,
    endIntervallDexRequirementUseState,
    startIntervallIntRequirementUseState,
    endIntervallIntRequirementUseState,
    startIntervallFaiRequirementUseState,
    endIntervallFaiRequirementUseState,
    startIntervallArcRequirementUseState,
    endIntervallArcRequirementUseState,
    startIntervallSpecialAttackFPUseState,
    endIntervallSpecialAttackFPUseState,
    startIntervallWgtUseState,
    endIntervallWgtUseState,
    startIntervallCritUseState,
    endIntervallCritUseState,
    startIntervallRngUseState,
    endIntervallRngUseState,
    startIntervallBoostUseState,
    endIntervallBoostUseState,
  };

  // useEffect-Hook, der die Kartenliste aktualisiert, wenn sich Sortier-, Filter- oder Suchparameter ändern.
  useEffect(() => {
    let cards: CardData[] = [];

    // Ruft Karten ab, die zum aktuellen Suchparameter und Typ "Weapon" passen.
    getCardsThatFitToSearchParam(searchParam, "Weapon").then((res) => {
      cards = res; 

      // Ermittelt das Attribut, nach dem sortiert werden soll.
      const sortKey = useStateToCardDataAttribute[useStates.sortByUseState[0]];

      if (!sortKey) {
        console.warn("Unbekanntes Sortierkriterium:", useStates.sortByUseState[0]);
        return;
      }

      // Sortiert die abgerufenen Karten.
      cards = sortCards(cards, sortKey as keyof CardData, sortOrderUseState[0]);

      let filteredCards: CardData[] = [];
      let validFilterFound = false;

      // Filtert die Karten basierend auf den Intervall-States.
      let response = filterCards(cards, useStates);

      filteredCards = response[0];
      validFilterFound = response[1];
        
      // Wenn kein Filter aktiv ist, zeige alle Karten an.
      if(!validFilterFound)
        filteredCards = cards;

      // Aktualisiert den State der Karten.
      setCards(filteredCards);
    });
  }, [
    sortByUseState[0],
    sortOrderUseState[0],

    // --- Filter Intervalle hinzugefügt ---

    startIntervallBaseAttackUseState[0],
    endIntervallBaseAttackUseState[0],

    startIntervallMagicAttackUseState[0],
    endIntervallMagicAttackUseState[0],

    startIntervallFireAttackUseState[0],
    endIntervallFireAttackUseState[0],

    startIntervallLigtAttackUseState[0],
    endIntervallLigtAttackUseState[0],

    startIntervallHolyAttackUseState[0],
    endIntervallHolyAttackUseState[0],

    startIntervallParryDefenseUseState[0],
    endIntervallParryDefenseUseState[0],

    startIntervallMagicDefenseUseState[0],
    endIntervallMagicDefenseUseState[0],

    startIntervallFireDefenseUseState[0],
    endIntervallFireDefenseUseState[0],

    startIntervallLigtDefenseUseState[0],
    endIntervallLigtDefenseUseState[0],

    startIntervallHolyDefenseUseState[0],
    endIntervallHolyDefenseUseState[0],

    startIntervallStrScalingUseState[0],
    endIntervallStrScalingUseState[0],

    startIntervallDexScalingUseState[0],
    endIntervallDexScalingUseState[0],

    startIntervallIntScalingUseState[0],
    endIntervallIntScalingUseState[0],

    startIntervallFaiScalingUseState[0],
    endIntervallFaiScalingUseState[0],

    startIntervallArcScalingUseState[0],
    endIntervallArcScalingUseState[0],

    startIntervallStrRequirementUseState[0],
    endIntervallStrRequirementUseState[0],

    startIntervallDexRequirementUseState[0],
    endIntervallDexRequirementUseState[0],

    startIntervallIntRequirementUseState[0],
    endIntervallIntRequirementUseState[0],

    startIntervallFaiRequirementUseState[0],
    endIntervallFaiRequirementUseState[0],

    startIntervallArcRequirementUseState[0],
    endIntervallArcRequirementUseState[0],

    startIntervallSpecialAttackFPUseState[0],
    endIntervallSpecialAttackFPUseState[0],

    startIntervallWgtUseState[0],
    endIntervallWgtUseState[0],

    startIntervallCritUseState[0],
    endIntervallCritUseState[0],

    startIntervallRngUseState[0],
    endIntervallRngUseState[0],

    startIntervallBoostUseState[0],
    endIntervallBoostUseState[0],

    searchParam
]);

  return (
    <div className='mt-2'>
      {/* Suchleiste */}
      <Searchbar searchParamUseState={[searchParam, setSearchParam]}/>
      {/* Filter-Komponente */}
      <Filter useStates={useStates} className="mt-2" type="Weapon"/>
      {/* Karten-Grid */}
      <div className='flex justify-center'>
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-8 w-auto mt-4`}>
          {/* Rendert für jede Karte eine CardWeapon-Komponente */}
          {cards.map((card, index : number) => (
            <CardWeapon key={index} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
}