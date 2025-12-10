import CardData from "./cardData";
import { Dispatch, SetStateAction } from "react";
import { UseStatesI } from "./useStates";
import DBResponse from "./response";

export function sortCards(cards: CardData[], sortKey: keyof CardData, sortOrder: "asc" | "desc"){
    const multiplier = sortOrder === "asc" ? 1 : -1;

      // 3) Sortierfunktion
      cards.sort((a, b) => {
        let valA = a[sortKey];

        if(valA === undefined)
          valA = 0;

        let valB = b[sortKey];

        if(valB === undefined)
          valB = 0;

        // undefined schützen
        if (valA == null && valB == null) return 0;
        if (valA == null) return 1 * multiplier;
        if (valB == null) return -1 * multiplier;

        // numerisch sortieren, falls möglich
        if (typeof valA === "number" && typeof valB === "number") {
          return (valA - valB) * multiplier;
        }

        valA = String(valA);
        valB = String(valB);

        return valA.toLowerCase().trim().localeCompare(
          valB.toLowerCase().trim(),
          'en',
          { sensitivity: 'base' }
        ) * multiplier;
      });

      return cards;
}

export function filterCards(cards: CardData[], useStates: UseStatesI) : [CardData[], boolean]{
  let filteredCards = [];
  let validFilterFound = false;
  
  for(let card of cards){
    let cardAttribute: keyof CardData = "base_attack";
    let cardValid = true;
    for(let key of Object.keys(useStates) as (keyof typeof useStates)[])
      if(key.includes("start")){
        let intervallType = key.replace("startIntervall", "");

        if(useStates[key] !== undefined){
          let startIntervall = useStates[key][0];

          let endIntervallKey = "endIntervall" + intervallType as keyof typeof useStates;

          intervallType = intervallType.replace("UseState", "");

          if(useStates[endIntervallKey] !== undefined){
            let endIntervall = useStates[endIntervallKey][0];

            if(startIntervall !== "" && endIntervall !== ""){
              validFilterFound = true;

              let isNumber = !isNaN(Number(startIntervall));

              let startIntervallNumber : number = 0;
              let endIntervallNumber : number = 0;

              if(isNumber){
                startIntervallNumber = Number(startIntervall);
                endIntervallNumber = Number(endIntervall);
              }

              switch(intervallType){
                case "BaseAttack":
                  cardAttribute = "base_attack" as keyof CardData;
                  break;
                case "MagicAttack":
                    cardAttribute = "magic_attack" as keyof CardData;
                    break;
                case "FireAttack":
                    cardAttribute = "fire_attack" as keyof CardData;
                    break;
                case "LightAttack":
                    cardAttribute = "light_attack" as keyof CardData;
                    break;
                case "HolyAttack":
                    cardAttribute = "holy_attack" as keyof CardData;
                    break;
                case "Crit":
                    cardAttribute = "crit" as keyof CardData;
                    break;

                // Defense stats
                case "ParryDefense":
                    cardAttribute = "parry_defense" as keyof CardData;
                    break;
                case "MagicDefense":
                    cardAttribute = "magic_defense" as keyof CardData;
                    break;
                case "FireDefense":
                    cardAttribute = "fire_defense" as keyof CardData;
                    break;
                case "LightDefense":
                    cardAttribute = "light_defense" as keyof CardData;
                    break;
                case "HolyDefense":
                    cardAttribute = "holy_defense" as keyof CardData;
                    break;

                // Requirements
                case "StrRequirement":
                    cardAttribute = "str_requirement" as keyof CardData;
                    break;
                case "DexRequirement":
                    cardAttribute = "dex_requirement" as keyof CardData;
                    break;
                case "IntRequirement":
                    cardAttribute = "int_requirement" as keyof CardData;
                    break;
                case "FaiRequirement":
                    cardAttribute = "fai_requirement" as keyof CardData;
                    break;
                case "ArcRequirement":
                    cardAttribute = "arc_requirement" as keyof CardData;
                    break;

                // Scaling
                case "StrScaling":
                    cardAttribute = "str_scaling" as keyof CardData;
                    break;
                case "DexScaling":
                    cardAttribute = "dex_scaling" as keyof CardData;
                    break;
                case "IntScaling":
                    cardAttribute = "int_scaling" as keyof CardData;
                    break;
                case "FaiScaling":
                    cardAttribute = "fai_scaling" as keyof CardData;
                    break;
                case "ArcScaling":
                    cardAttribute = "arc_scaling" as keyof CardData;
                    break;

                // Other stats
                case "Boost":
                    cardAttribute = "boost" as keyof CardData;
                    break;
                case "Crit":
                    cardAttribute = "crit" as keyof CardData;
                    break;
                case "Rng":
                    cardAttribute = "rng" as keyof CardData;
                    break;
                case "Boost": // Doppelt, sollte nur einmal vorkommen
                    cardAttribute = "boost" as keyof CardData;
                    break;
                case "Wgt":
                    cardAttribute = "wgt" as keyof CardData;
                    break;
                case "SpecialAttackFP":
                    cardAttribute = "special_attack_fp" as keyof CardData;
                    break;
                case "PhysicalNegation": cardAttribute = "physical_negation"; break;
                case "StrikeNegation": cardAttribute = "strike_negation"; break;
                case "SlashNegation": cardAttribute = "slash_negation"; break;
                case "PierceNegation": cardAttribute = "pierce_negation"; break;
                case "MagicNegation": cardAttribute = "magic_negation"; break;
                case "FireNegation": cardAttribute = "fire_negation"; break;
                case "LigtNegation": cardAttribute = "light_negation"; break;
                case "HolyNegation": cardAttribute = "holy_negation"; break;
                case "Wgt": cardAttribute = "wgt"; break;
                case "Immunity": cardAttribute = "immunity"; break;
                case "Robustness": cardAttribute = "robustness"; break;
                case "Focus": cardAttribute = "focus"; break;
                case "Vitality": cardAttribute = "vitality"; break;
                case "Poise": cardAttribute = "poise"; break;
                case "RewardRunes": cardAttribute = "reward_runes"; break;
                case "Hp": cardAttribute = "hp"; break;
              }

              if(typeof card[cardAttribute] === "number"){
                let cardAttributeValue = card[cardAttribute] as number;

                if(startIntervallNumber > cardAttributeValue || endIntervallNumber < cardAttributeValue){
                  cardValid = false;
                  break;
                }

              }
              else{
                let cardAttributeValue = card[cardAttribute] as string;

                startIntervall = startIntervall.toUpperCase();
                endIntervall = endIntervall.toUpperCase();

                if(startIntervall > cardAttributeValue || endIntervall < cardAttributeValue){
                  cardValid = false;
                  break;
                }
              }
            }
          }
        }
      }
    if(cardValid)
      filteredCards.push(card);
  }
  return [filteredCards, validFilterFound];
}

function isCardData(obj: any): obj is CardData {
  if(typeof Object !== "object" || obj === null)
    console.log("Karten sind kein Objekt oder null");

  if(typeof obj.id !== "number")
    console.log("ID ist keine number");

  if(typeof obj.name !== "string")
    console.log("Name ist kein string");

  if(typeof obj.rarity !== "string" || (obj.rarity !== "Common" && obj.rarity !== "Rare" && obj.rarity !== "Epic" && obj.rarity !== "Legendary"))
    console.log("Seltenheit ist kein String, oder ein ungültiger Wert");

  if(typeof obj.class_of_object !== "string" || (obj.class_of_object !== "Boss" && obj.class_of_object !== "NPC" && obj.class_of_object !== "Weapon" && obj.class_of_object !== "Armor"))
    console.log("Klasse ist kein String, oder ein ungültiger Wert");

  if(typeof obj.image_mime !== "string")
    console.log("Image Mime ist kein String");

  if(!Buffer.isBuffer(obj.image_data))
    console.log("Image Data ist kein Buffer");

  return (
    typeof obj === "object" &&
    obj !== null &&

    // Pflichtfelder
    typeof obj.id === "number" &&
    typeof obj.name === "string" &&

    // rarity prüfen (mit Klammern, um logische Fehler zu vermeiden)
    typeof obj.rarity === "string" &&
    ["Common", "Rare", "Epic", "Legendary"].includes(obj.rarity) &&

    // class_of_object prüfen
    typeof obj.class_of_object === "string" &&
    ["Boss", "NPC", "Weapon", "Armor"].includes(obj.class_of_object) &&

    // Pflicht-Basisfelder
    typeof obj.image_mime === "string" &&
    Buffer.isBuffer(obj.image_data)
  );
}

function isCardDataArray(arr: any): arr is CardData[] {
  return Array.isArray(arr) && arr.every(isCardData);
}

export async function getCards(type: string): Promise<DBResponse> {
  try {
    // POST, weil Body geschickt wird
    const response = await fetch(`/api/cards?class_of_object=${type}`, {
      method: "GET"
    });

    // Versuche das JSON zu parsen
    const data: any = await response.json().catch(() => null);

    // Wenn kein gültiges JSON zurückkommt
    if (!data) {
      return { cards: [], status: "Invalid JSON response" };
    }

    // Wenn HTTP-Status nicht OK ist
    if (!response.ok) {
      const message = data.error || `Server returned ${response.status}`;
      return { status: message, cards: [] };
    }

    for(let i = 0; i < data.cards.length; i++){
      let card = data.cards[i];
      card.image_data = Buffer.from(card.image_data.data);

      const keys = Object.keys(card) as (keyof CardData)[];
      for(let key of keys)
        if(card[key] === null)
          card[key] = undefined;
    }

    if(typeof data.status !== "string" && data.status !== undefined)
      console.log("Status ist kein String und auch nicht undefined");

    if(typeof data.error !== "string" && data.error !== undefined)
      console.log("Error ist kein String und auch nicht undefined");

    // Validierung des Inhalts
    if (
      (typeof data.status === "string" || data.status === undefined) &&
      Array.isArray(data.cards) &&
      isCardDataArray(data.cards) && // dein Type-Guard für CardData[]
      (typeof data.error === "string" || data.error === undefined)
    ) {
      // Struktur passt → gib sie zurück
      return {
        status: data.status,
        cards: data.cards
      };
    }

    // Fallback, wenn Struktur unvollständig ist
    console.warn("Invalid response shape from /api/cards:", data);
    return { status: "Invalid response shape", cards: [] };

  } catch (err) {
    console.error("Error in getWeaponCards:", err);
    return { status: String(err), cards: [] };
  }
}

export async function getCardsThatFitToSearchParam(searchParam: string, type: string): Promise<CardData[]> {
    let response = getCards(type);
    let cards = (await response).cards;

    let filteredCards: CardData[] = [];

    for(let card of cards){
      if(card.name.toLowerCase().includes(searchParam.toLowerCase()))
        filteredCards.push(card);
    }

    return filteredCards;
  }