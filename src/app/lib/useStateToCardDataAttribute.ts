import CardData from "./cardData";

const useStateToCardDataAttribute: Record<string, keyof CardData> = {
    "Base Attack": "base_attack",
    "Magic Attack": "magic_attack",
    "Fire Attack": "fire_attack",
    "Ligt Attack": "light_attack",
    "Holy Attack": "holy_attack",
    "Crit": "crit",
    "Boost": "boost",
    "Rng": "rng",
    "Wgt.": "wgt",

    // ➕ Neue Sortierkriterien
    "Name": "name",
    "Rarity": "rarity",

    "Parry Defense": "parry_defense",
    "Magic Defense": "magic_defense",
    "Fire Defense": "fire_defense",
    "Light Defense": "light_defense",
    "Holy Defense": "holy_defense",

    "Str Requirement": "str_requirement",
    "Dex Requirement": "dex_requirement",
    "Int Requirement": "int_requirement",
    "Fai Requirement": "fai_requirement",
    "Arc Requirement": "arc_requirement",

    "Str Scaling": "str_scaling",
    "Dex Scaling": "dex_scaling",
    "Int Scaling": "int_scaling",
    "Fai Scaling": "fai_scaling",
    "Arc Scaling": "arc_scaling",

    "Special Attack FP": "special_attack_fp",
    "Special Attack Name": "special_attack",
    "Physical Negation": "physical_negation",
    "Strike Negation": "strike_negation",
    "Slash Negation": "slash_negation",
    "Pierce Negation": "pierce_negation",
    "Magic Negation": "magic_negation",
    "Fire Negation": "fire_negation",
    "Ligt Negation": "light_negation",
    "Holy Negation": "holy_negation",
    "Wgt": "wgt",
    "Immunity": "immunity",
    "Robustness": "robustness",
    "Focus": "focus",
    "Vitality": "vitality",
    "Poise": "poise",
    "Location": "location",
    "Reward Runes": "reward_runes",
    "HP": "hp",
};

export default useStateToCardDataAttribute;